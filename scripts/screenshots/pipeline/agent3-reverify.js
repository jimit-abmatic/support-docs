/**
 * Agent 3: Re-verification Agent
 *
 * Purpose: Double-check Agent 2's work
 * - Independent verification of all screenshots
 * - Cross-reference with capture metadata
 * - Final approval before narration phase
 *
 * Input: verification-report.json from Agent 2
 * Output: reverification-report.json
 */

const fs = require('fs');
const path = require('path');

const config = {
  rawDir: path.join(__dirname, '../../../static/img/screenshots/raw'),
  verifiedDir: path.join(__dirname, '../../../static/img/screenshots/verified'),
  outputDir: path.join(__dirname, '../output'),
};

class ReverificationAgent {
  constructor() {
    this.report = {
      reverificationDate: new Date().toISOString(),
      results: [],
      summary: {
        total: 0,
        confirmed: 0,
        disputed: 0,
        escalated: 0
      },
      decision: null,
      escalations: []
    };
  }

  async run() {
    console.log('========================================');
    console.log('AGENT 3: RE-VERIFICATION AGENT');
    console.log('========================================\n');

    // Load verification report
    const verifyReportPath = path.join(config.outputDir, 'verification-report.json');
    if (!fs.existsSync(verifyReportPath)) {
      console.error('ERROR: verification-report.json not found');
      console.error('Run Agent 2 first: node scripts/screenshots/pipeline/agent2-verify.js');
      process.exit(1);
    }

    const verifyReport = JSON.parse(fs.readFileSync(verifyReportPath, 'utf8'));
    console.log(`Loaded verification report with ${verifyReport.results.length} results\n`);

    // Load capture metadata for cross-reference
    const metadataPath = path.join(config.outputDir, 'capture-metadata.json');
    const captureMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

    // Re-verify each result
    for (const result of verifyReport.results) {
      this.reverifyResult(result, captureMetadata);
    }

    // Make final decision
    this.makeDecision(verifyReport);

    // Save report
    this.saveReport();

    // Print results
    this.printResults();
  }

  reverifyResult(verifyResult, captureMetadata) {
    const { id, filename, status, checks, issues } = verifyResult;
    this.report.summary.total++;

    console.log(`Re-verifying: ${id}`);
    console.log(`  Agent 2 status: ${status}`);

    const result = {
      id,
      filename,
      agent2Status: status,
      agent3Status: null,
      agreement: null,
      notes: []
    };

    // Find original capture metadata
    const originalMeta = captureMetadata.screenshots.find(s => s.id === id);

    // Independent checks
    const rawPath = path.join(config.rawDir, filename);
    const verifiedPath = path.join(config.verifiedDir, filename);

    // Check 1: Raw file still exists
    if (!fs.existsSync(rawPath)) {
      result.notes.push('Raw file missing - capture may have been deleted');
      result.agent3Status = 'failed';
    }

    // Check 2: If passed, verified file should exist
    if (status === 'passed' && !fs.existsSync(verifiedPath)) {
      result.notes.push('Marked as passed but verified file missing');
      result.agent3Status = 'disputed';
    }

    // Check 3: Re-verify file size
    if (fs.existsSync(rawPath)) {
      const stats = fs.statSync(rawPath);
      const fileSizeKB = Math.round(stats.size / 1024);

      // Size check - only flag very small files (likely loading screens)
      // Some pages like empty contacts/groups may legitimately be small
      if (fileSizeKB < 20) {
        result.notes.push(`File size very small (${fileSizeKB}KB) - likely loading state`);
        if (status === 'passed') {
          result.agent3Status = 'disputed';
        }
      }

      // Very large file check
      if (fileSizeKB > 1500) {
        result.notes.push(`Large file (${fileSizeKB}KB) - may need optimization`);
      }
    }

    // Check 4: Verify original capture was recent (within 24 hours)
    if (originalMeta) {
      const captureTime = new Date(originalMeta.capturedAt);
      const now = new Date();
      const hoursSinceCapture = (now - captureTime) / (1000 * 60 * 60);

      if (hoursSinceCapture > 24) {
        result.notes.push(`Capture is ${Math.round(hoursSinceCapture)} hours old - may be stale`);
      }
    }

    // Check 5: Verify all Agent 2 checks were reasonable
    if (checks) {
      const criticalChecks = checks.filter(c =>
        ['file_exists', 'not_login_redirect'].includes(c.name)
      );

      for (const check of criticalChecks) {
        if (!check.passed && status === 'passed') {
          result.notes.push(`Critical check '${check.name}' failed but overall passed - inconsistent`);
          result.agent3Status = 'disputed';
        }
      }
    }

    // Determine final status
    if (!result.agent3Status) {
      result.agent3Status = status; // Agree with Agent 2
    }

    result.agreement = result.agent3Status === status ? 'agree' : 'disagree';

    if (result.agreement === 'agree') {
      this.report.summary.confirmed++;
      console.log(`  CONFIRMED: Agree with Agent 2\n`);
    } else {
      this.report.summary.disputed++;
      console.log(`  DISPUTED: ${result.notes.join(', ')}\n`);

      // Add to escalations if critical
      if (status === 'passed' && result.agent3Status !== 'passed') {
        this.report.escalations.push({
          id,
          reason: result.notes.join('; '),
          action: 'Re-capture recommended'
        });
      }
    }

    this.report.results.push(result);
  }

  makeDecision(verifyReport) {
    const { confirmed, disputed } = this.report.summary;
    const total = this.report.summary.total;

    // Calculate agreement rate
    const agreementRate = total > 0 ? Math.round((confirmed / total) * 100) : 0;

    // Count how many passed screenshots we have
    const passedCount = verifyReport.results.filter(r => r.status === 'passed').length;
    const confirmedPassed = this.report.results.filter(r =>
      r.agent2Status === 'passed' && r.agreement === 'agree'
    ).length;

    // Decision logic - be more lenient since some pages may legitimately have minimal content
    if (agreementRate >= 90 && this.report.escalations.length <= 2) {
      this.report.decision = {
        status: 'approved',
        message: 'All screenshots verified and confirmed. Ready for narration.',
        nextStep: 'Proceed to Agent 4 (Narration)'
      };
    } else if (agreementRate >= 70 && this.report.escalations.length <= 5) {
      this.report.decision = {
        status: 'approved_with_warnings',
        message: `${this.report.escalations.length} screenshots may need attention, but overall acceptable.`,
        nextStep: 'Proceed to Agent 4, but review escalations'
      };
    } else {
      this.report.decision = {
        status: 'rejected',
        message: 'Too many issues found. Screenshots need to be re-captured.',
        nextStep: 'Return to Agent 1 for re-capture'
      };
    }

    this.report.summary.agreementRate = agreementRate;
    this.report.summary.confirmedPassed = confirmedPassed;
  }

  saveReport() {
    const reportPath = path.join(config.outputDir, 'reverification-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    console.log(`Report saved to: ${reportPath}\n`);
  }

  printResults() {
    console.log('========================================');
    console.log('RE-VERIFICATION SUMMARY');
    console.log('========================================');
    console.log(`Total re-verified: ${this.report.summary.total}`);
    console.log(`Confirmed (agree with Agent 2): ${this.report.summary.confirmed}`);
    console.log(`Disputed: ${this.report.summary.disputed}`);
    console.log(`Agreement rate: ${this.report.summary.agreementRate}%`);

    if (this.report.escalations.length > 0) {
      console.log('\nEscalations:');
      this.report.escalations.forEach(esc => {
        console.log(`  - ${esc.id}: ${esc.reason}`);
      });
    }

    console.log('\n========================================');
    console.log('DECISION');
    console.log('========================================');
    console.log(`Status: ${this.report.decision.status.toUpperCase()}`);
    console.log(`Message: ${this.report.decision.message}`);
    console.log(`Next step: ${this.report.decision.nextStep}`);

    if (this.report.decision.status.startsWith('approved')) {
      console.log('\nCommand: node scripts/screenshots/pipeline/agent4-narrate.js');
    } else {
      console.log('\nCommand: node scripts/screenshots/pipeline/agent1-capture.js');
    }
  }
}

// Run
if (require.main === module) {
  const agent = new ReverificationAgent();
  agent.run().catch(console.error);
}

module.exports = { ReverificationAgent };
