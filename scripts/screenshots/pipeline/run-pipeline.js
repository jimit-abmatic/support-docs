/**
 * Pipeline Orchestrator
 *
 * Runs all 7 agents in sequence with proper error handling and state tracking.
 * Can resume from any failed agent.
 *
 * Usage:
 *   node run-pipeline.js           # Run full pipeline
 *   node run-pipeline.js --from=3  # Resume from Agent 3
 *   node run-pipeline.js --only=1  # Run only Agent 1
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '../output'),
  logsDir: path.join(__dirname, '../output/logs'),
};

const AGENTS = [
  { id: 1, name: 'Navigator/Capture', script: 'agent1-capture.js', requiresAuth: true },
  { id: 2, name: 'Verification', script: 'agent2-verify.js', requiresAuth: false },
  { id: 3, name: 'Re-verification', script: 'agent3-reverify.js', requiresAuth: false },
  { id: 4, name: 'Narration', script: 'agent4-narrate.js', requiresAuth: false },
  { id: 5, name: 'Documentation Writer', script: 'agent5-write.js', requiresAuth: false },
  { id: 6, name: 'Final Verification', script: 'agent6-final-verify.js', requiresAuth: false },
  { id: 7, name: 'Final Re-verification', script: 'agent7-final-reverify.js', requiresAuth: false },
];

class PipelineOrchestrator {
  constructor() {
    this.state = {
      startTime: new Date().toISOString(),
      endTime: null,
      currentAgent: null,
      completedAgents: [],
      failedAgents: [],
      status: 'pending'
    };
  }

  async run(options = {}) {
    const { fromAgent = 1, onlyAgent = null } = options;

    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║     ABMATIC AI DOCUMENTATION SCREENSHOT PIPELINE             ║');
    console.log('║     Multi-Agent Quality Assurance System                     ║');
    console.log('╚══════════════════════════════════════════════════════════════╝\n');

    // Ensure directories exist
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }
    if (!fs.existsSync(config.logsDir)) {
      fs.mkdirSync(config.logsDir, { recursive: true });
    }

    // Check credentials for Agent 1
    if ((fromAgent <= 1 || onlyAgent === 1) && (!process.env.ABMATIC_EMAIL || !process.env.ABMATIC_PASSWORD)) {
      console.error('ERROR: Missing credentials for screenshot capture.');
      console.error('Set ABMATIC_EMAIL and ABMATIC_PASSWORD environment variables.\n');
      console.error('Example:');
      console.error('  ABMATIC_EMAIL="your@email.com" ABMATIC_PASSWORD="password" node run-pipeline.js\n');
      process.exit(1);
    }

    this.state.status = 'running';
    this.saveState();

    const agentsToRun = onlyAgent
      ? AGENTS.filter(a => a.id === onlyAgent)
      : AGENTS.filter(a => a.id >= fromAgent);

    console.log(`Running ${agentsToRun.length} agent(s)...\n`);

    for (const agent of agentsToRun) {
      this.state.currentAgent = agent.id;
      this.saveState();

      console.log(`\n${'═'.repeat(60)}`);
      console.log(`Starting Agent ${agent.id}: ${agent.name}`);
      console.log(`${'═'.repeat(60)}\n`);

      const success = await this.runAgent(agent);

      if (success) {
        this.state.completedAgents.push(agent.id);
        console.log(`\n✅ Agent ${agent.id} completed successfully\n`);
      } else {
        this.state.failedAgents.push(agent.id);
        this.state.status = 'failed';
        console.log(`\n❌ Agent ${agent.id} failed\n`);

        // Check if we should continue or stop
        if (agent.id <= 3) {
          // Critical agents - must pass
          console.log('Critical agent failed. Stopping pipeline.');
          break;
        } else {
          console.log('Non-critical agent failed. Continuing with warnings.');
        }
      }
    }

    this.state.endTime = new Date().toISOString();
    if (this.state.failedAgents.length === 0) {
      this.state.status = 'completed';
    }

    this.saveState();
    this.printFinalSummary();
  }

  runAgent(agent) {
    return new Promise((resolve) => {
      const scriptPath = path.join(__dirname, agent.script);
      const logPath = path.join(config.logsDir, `agent${agent.id}-${Date.now()}.log`);
      const logStream = fs.createWriteStream(logPath);

      const env = { ...process.env };

      const child = spawn('node', [scriptPath], {
        env,
        stdio: ['inherit', 'pipe', 'pipe']
      });

      child.stdout.on('data', (data) => {
        process.stdout.write(data);
        logStream.write(data);
      });

      child.stderr.on('data', (data) => {
        process.stderr.write(data);
        logStream.write(data);
      });

      child.on('close', (code) => {
        logStream.end();
        console.log(`\nAgent ${agent.id} log saved to: ${logPath}`);
        resolve(code === 0);
      });

      child.on('error', (error) => {
        console.error(`Error running Agent ${agent.id}:`, error.message);
        logStream.end();
        resolve(false);
      });
    });
  }

  saveState() {
    const statePath = path.join(config.outputDir, 'pipeline-state.json');
    fs.writeFileSync(statePath, JSON.stringify(this.state, null, 2));
  }

  printFinalSummary() {
    const duration = this.calculateDuration();

    console.log('\n');
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    PIPELINE SUMMARY                          ║');
    console.log('╚══════════════════════════════════════════════════════════════╝\n');

    console.log(`Status: ${this.state.status.toUpperCase()}`);
    console.log(`Duration: ${duration}`);
    console.log(`Completed Agents: ${this.state.completedAgents.join(', ') || 'None'}`);
    console.log(`Failed Agents: ${this.state.failedAgents.join(', ') || 'None'}`);

    if (this.state.status === 'completed') {
      console.log('\n✅ All agents completed successfully!');
      console.log('\nCheck the final approval report:');
      console.log('  cat scripts/screenshots/output/final-approval.json\n');
      console.log('To deploy, follow the deployment instructions in the report.');
    } else if (this.state.status === 'failed') {
      const lastFailed = this.state.failedAgents[this.state.failedAgents.length - 1];
      console.log(`\n❌ Pipeline failed at Agent ${lastFailed}`);
      console.log('\nTo resume from the failed agent:');
      console.log(`  ABMATIC_EMAIL="..." ABMATIC_PASSWORD="..." node run-pipeline.js --from=${lastFailed}`);
    }

    console.log('\n');
  }

  calculateDuration() {
    if (!this.state.endTime) return 'Unknown';

    const start = new Date(this.state.startTime);
    const end = new Date(this.state.endTime);
    const diffMs = end - start;

    const minutes = Math.floor(diffMs / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);

    return `${minutes}m ${seconds}s`;
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  for (const arg of args) {
    if (arg.startsWith('--from=')) {
      options.fromAgent = parseInt(arg.split('=')[1], 10);
    } else if (arg.startsWith('--only=')) {
      options.onlyAgent = parseInt(arg.split('=')[1], 10);
    } else if (arg === '--help' || arg === '-h') {
      console.log(`
Abmatic AI Documentation Screenshot Pipeline

Usage:
  node run-pipeline.js [options]

Options:
  --from=N    Resume pipeline from Agent N (1-7)
  --only=N    Run only Agent N
  --help, -h  Show this help

Agents:
  1. Navigator/Capture    - Capture screenshots from the app
  2. Verification         - Verify screenshots are correct
  3. Re-verification      - Double-check verification
  4. Narration            - Create narrative descriptions
  5. Documentation Writer - Generate documentation files
  6. Final Verification   - Verify documentation quality
  7. Final Re-verification - Final approval and deployment prep

Examples:
  ABMATIC_EMAIL="..." ABMATIC_PASSWORD="..." node run-pipeline.js
  node run-pipeline.js --from=4
  node run-pipeline.js --only=2
`);
      process.exit(0);
    }
  }

  return options;
}

// Run
if (require.main === module) {
  const options = parseArgs();
  const orchestrator = new PipelineOrchestrator();
  orchestrator.run(options).catch(console.error);
}

module.exports = { PipelineOrchestrator, AGENTS };
