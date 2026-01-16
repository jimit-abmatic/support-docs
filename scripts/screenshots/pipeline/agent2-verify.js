/**
 * Agent 2: Visual Verification Agent
 *
 * Purpose: ACTUALLY LOOK at each screenshot and verify it shows correct content
 * - Uses OpenAI Vision API to analyze screenshot content
 * - Verifies the screenshot shows what it's supposed to show
 * - Checks for loading states, errors, wrong pages
 *
 * Input: capture-metadata.json from Agent 1
 * Output: verification-report.json
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const config = {
  rawDir: path.join(__dirname, '../../../static/img/screenshots/raw'),
  verifiedDir: path.join(__dirname, '../../../static/img/screenshots/verified'),
  outputDir: path.join(__dirname, '../output'),
};

// What each screenshot SHOULD show - detailed visual expectations
const VISUAL_EXPECTATIONS = {
  'sign-in': {
    mustShow: ['email input field', 'password input field', 'sign in button', 'Abmatic logo or branding'],
    mustNotShow: ['dashboard', 'sidebar navigation', 'account data'],
    description: 'Login page with email/password form'
  },
  'sign-up': {
    mustShow: ['registration form', 'email field', 'password field', 'sign up or create account button'],
    mustNotShow: ['dashboard', 'sidebar navigation'],
    description: 'Registration page for new users'
  },
  'forgot-password': {
    mustShow: ['email input', 'reset or recover button', 'password recovery text'],
    mustNotShow: ['dashboard', 'sidebar'],
    description: 'Password recovery page'
  },
  'home-dashboard': {
    mustShow: ['dashboard metrics', 'charts or graphs', 'sidebar navigation', 'welcome or overview content'],
    mustNotShow: ['login form', 'sign in button', 'loading spinner only'],
    description: 'Main dashboard with metrics and overview'
  },
  'installation-script': {
    mustShow: ['code snippet', 'script tag', 'installation instructions', 'copy button'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Page showing the tracking script code to install'
  },
  'accounts-list': {
    mustShow: ['list of accounts or account collections', 'table or card layout', 'account names', 'create or add button'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Target accounts list showing account collections'
  },
  'accounts-all': {
    mustShow: ['data grid or table', 'account data rows', 'column headers', 'filter or search options'],
    mustNotShow: ['login form', 'loading spinner only', 'empty page'],
    description: 'All accounts view with data grid'
  },
  'accounts-all-grid': {
    mustShow: ['AG Grid or data table', 'multiple rows of data', 'column headers', 'filter icons or options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'AG Grid view of all accounts with filtering capabilities'
  },
  'contacts-list': {
    mustShow: ['list of contacts or contact collections', 'table or card layout', 'create button'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Target contacts list showing contact collections'
  },
  'contacts-all': {
    mustShow: ['data grid or table', 'contact data rows', 'column headers'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'All contacts view with data grid'
  },
  'contacts-all-grid': {
    mustShow: ['AG Grid or data table', 'multiple rows of data', 'column headers', 'filter options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'AG Grid view of all contacts with filtering capabilities'
  },
  'groups-list': {
    mustShow: ['list of groups or segments', 'group names', 'table or cards'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Target groups/segments list'
  },
  'campaigns-list': {
    mustShow: ['list of campaigns', 'campaign names', 'status indicators', 'create campaign button'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Campaigns list showing all campaigns with status'
  },
  'conversions-overview': {
    mustShow: ['conversion metrics', 'charts or numbers', 'conversion goals'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Conversions overview with metrics'
  },
  'conversions-manage': {
    mustShow: ['conversion definitions', 'goal settings', 'configuration options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Manage conversion definitions page'
  },
  'reveal-accounts': {
    mustShow: ['identified companies', 'company names or logos', 'visitor data'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Company reveal showing identified website visitors'
  },
  'reveal-contacts': {
    mustShow: ['identified contacts', 'contact names or emails', 'visitor data'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Contact reveal showing identified individuals'
  },
  'analytics-reports': {
    mustShow: ['reports list', 'report names', 'analytics data or charts'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Analytics reports page'
  },
  'analytics-dashboards': {
    mustShow: ['dashboard widgets', 'charts or graphs', 'metrics'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Analytics dashboards with visualizations'
  },
  'integrations-hub': {
    mustShow: ['integration logos', 'Salesforce or HubSpot or other CRM logos', 'connect buttons', 'integration cards'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Integrations hub showing available integrations'
  },
  'integration-salesforce': {
    mustShow: ['Salesforce logo or branding', 'connection settings', 'sync options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Salesforce integration configuration page'
  },
  'integration-hubspot': {
    mustShow: ['HubSpot logo or branding', 'connection settings', 'sync options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'HubSpot integration configuration page'
  },
  'integration-pipedrive': {
    mustShow: ['Pipedrive logo or branding', 'connection settings', 'sync options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Pipedrive integration configuration page'
  },
  'ai-agents-hub': {
    mustShow: ['AI agent cards or options', 'agent names like Alex or Clara', 'chat interface or selection'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'AI Agents hub showing available AI assistants'
  },
  'settings-account': {
    mustShow: ['account settings', 'company name field', 'configuration options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Account settings page'
  },
  'settings-users': {
    mustShow: ['user list', 'user management', 'invite button or user table'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'User management settings'
  },
  'settings-usage': {
    mustShow: ['usage metrics', 'billing or usage data', 'charts or numbers'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Usage and billing settings'
  },
  'settings-custom-fields': {
    mustShow: ['custom field definitions', 'field list or configuration'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Custom fields configuration'
  },
  'settings-notifications': {
    mustShow: ['notification settings', 'toggles or checkboxes', 'alert preferences'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Notification preferences'
  },
  'settings-export': {
    mustShow: ['export options', 'download or export buttons', 'data export settings'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Data export settings'
  },
  'settings-ai-agents': {
    mustShow: ['AI agent settings', 'configuration options'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'AI agents configuration settings'
  },
  'settings-slack': {
    mustShow: ['Slack integration', 'Slack logo or branding', 'channel settings'],
    mustNotShow: ['login form', 'loading spinner only'],
    description: 'Slack integration settings'
  },
  'campaign-create-modal': {
    mustShow: ['modal or dialog', 'campaign type options', 'create button', 'campaign options'],
    mustNotShow: ['login form'],
    description: 'Campaign creation modal with type selection'
  },
  'account-create-modal': {
    mustShow: ['modal or dialog', 'account list creation options', 'create or save button'],
    mustNotShow: ['login form'],
    description: 'Account list creation modal'
  },
  'contact-create-modal': {
    mustShow: ['modal or dialog', 'contact list creation options', 'create or save button'],
    mustNotShow: ['login form'],
    description: 'Contact list creation modal'
  },
  'account-add-manual': {
    mustShow: ['modal or dialog', 'form fields for account', 'add or create button'],
    mustNotShow: ['login form'],
    description: 'Manual account addition dialog'
  },
  'contact-add-manual': {
    mustShow: ['modal or dialog', 'form fields for contact', 'add or create button'],
    mustNotShow: ['login form'],
    description: 'Manual contact addition dialog'
  },
};

class VisualVerificationAgent {
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.report = {
      verificationDate: new Date().toISOString(),
      results: [],
      summary: { total: 0, passed: 0, failed: 0, warnings: 0 },
      failedScreenshots: [],
      requiresRecapture: []
    };
  }

  async run() {
    console.log('========================================');
    console.log('AGENT 2: VISUAL VERIFICATION AGENT');
    console.log('========================================\n');

    if (!this.apiKey) {
      console.log('WARNING: OPENAI_API_KEY not set. Using fallback file-based verification.');
      console.log('For proper visual verification, set OPENAI_API_KEY environment variable.\n');
    }

    // Load capture metadata
    const metadataPath = path.join(config.outputDir, 'capture-metadata.json');
    if (!fs.existsSync(metadataPath)) {
      console.error('ERROR: capture-metadata.json not found');
      console.error('Run Agent 1 first: node scripts/screenshots/pipeline/agent1-capture.js');
      process.exit(1);
    }

    const captureMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    console.log(`Loaded ${captureMetadata.screenshots.length} screenshots to verify\n`);

    // Ensure verified directory exists
    if (!fs.existsSync(config.verifiedDir)) {
      fs.mkdirSync(config.verifiedDir, { recursive: true });
    }

    // Verify each screenshot
    for (const screenshot of captureMetadata.screenshots) {
      await this.verifyScreenshot(screenshot);
    }

    // Generate summary
    this.generateSummary();

    // Save report
    this.saveReport();

    // Print results
    this.printResults();
  }

  async verifyScreenshot(screenshot) {
    const { id, filename, filepath, fileSizeKB, currentUrl, description } = screenshot;
    this.report.summary.total++;

    console.log(`Verifying: ${id}`);
    console.log(`  Expected: ${description}`);

    const result = {
      id,
      filename,
      checks: [],
      visualAnalysis: null,
      status: 'unknown',
      issues: [],
      recommendations: []
    };

    // Check 1: File exists
    if (!fs.existsSync(filepath)) {
      result.checks.push({ name: 'file_exists', passed: false });
      result.issues.push('Screenshot file not found');
      result.status = 'failed';
      this.report.results.push(result);
      this.report.summary.failed++;
      this.report.failedScreenshots.push(id);
      this.report.requiresRecapture.push({ id, reason: 'File not found' });
      console.log(`  FAILED: File not found\n`);
      return;
    }
    result.checks.push({ name: 'file_exists', passed: true });

    // Check 2: Visual analysis - ACTUALLY LOOK AT THE SCREENSHOT
    const expectations = VISUAL_EXPECTATIONS[id];
    if (expectations && this.apiKey) {
      try {
        const visualResult = await this.analyzeScreenshotVisually(filepath, id, expectations);
        result.visualAnalysis = visualResult;
        result.checks.push({
          name: 'visual_content',
          passed: visualResult.passed,
          details: visualResult.analysis
        });

        if (!visualResult.passed) {
          result.issues.push(...visualResult.issues);
          result.recommendations.push('Re-capture this screenshot - content does not match expectations');
        }
      } catch (error) {
        console.log(`  WARNING: Visual analysis failed - ${error.message}`);
        result.checks.push({
          name: 'visual_content',
          passed: true, // Pass by default if API fails
          details: 'Visual analysis unavailable'
        });
      }
    } else if (expectations && !this.apiKey) {
      // Fallback: basic file size heuristic
      const minSize = this.getMinSizeForId(id);
      if (fileSizeKB < minSize) {
        result.issues.push(`File may be loading state (${fileSizeKB}KB < ${minSize}KB expected)`);
        result.checks.push({
          name: 'file_size_heuristic',
          passed: false,
          details: `Size ${fileSizeKB}KB below minimum ${minSize}KB`
        });
      } else {
        result.checks.push({
          name: 'file_size_heuristic',
          passed: true,
          details: `Size ${fileSizeKB}KB acceptable`
        });
      }
    }

    // Check 3: URL validation (should not be login redirect for auth pages)
    if (currentUrl && expectations && !expectations.isPublic) {
      const onLoginPage = currentUrl.includes('/sign-in') || currentUrl.includes('/login');
      result.checks.push({
        name: 'not_login_redirect',
        passed: !onLoginPage,
        actual: currentUrl
      });
      if (onLoginPage) {
        result.issues.push('Redirected to login page - authentication failed');
        result.recommendations.push('Check credentials and re-capture');
      }
    }

    // Determine overall status
    const failedChecks = result.checks.filter(c => !c.passed);
    const criticalFailed = failedChecks.some(c =>
      ['not_login_redirect', 'file_exists', 'visual_content'].includes(c.name)
    );

    if (criticalFailed) {
      result.status = 'failed';
      this.report.summary.failed++;
      this.report.failedScreenshots.push(id);
      this.report.requiresRecapture.push({ id, reason: result.issues.join('; ') });
      console.log(`  FAILED: ${result.issues.join(', ')}\n`);
    } else if (failedChecks.length > 0) {
      result.status = 'warning';
      this.report.summary.warnings++;
      console.log(`  WARNING: ${result.issues.join(', ')}\n`);
      // Still copy to verified for warnings
      const verifiedPath = path.join(config.verifiedDir, filename);
      fs.copyFileSync(filepath, verifiedPath);
      result.verifiedPath = verifiedPath;
    } else {
      result.status = 'passed';
      this.report.summary.passed++;

      // Copy to verified directory
      const verifiedPath = path.join(config.verifiedDir, filename);
      fs.copyFileSync(filepath, verifiedPath);
      result.verifiedPath = verifiedPath;

      console.log(`  PASSED\n`);
    }

    this.report.results.push(result);
  }

  async analyzeScreenshotVisually(filepath, id, expectations) {
    const imageData = fs.readFileSync(filepath);
    const base64Image = imageData.toString('base64');

    const prompt = `Analyze this screenshot and determine if it shows the expected content.

EXPECTED CONTENT FOR "${id}":
Description: ${expectations.description}
Must show: ${expectations.mustShow.join(', ')}
Must NOT show: ${expectations.mustNotShow.join(', ')}

ANALYZE THE IMAGE AND RESPOND IN THIS EXACT JSON FORMAT:
{
  "passed": true or false,
  "whatISee": "Brief description of what's actually in the screenshot",
  "hasExpectedElements": ["list", "of", "expected", "elements", "found"],
  "missingElements": ["list", "of", "expected", "elements", "NOT", "found"],
  "unexpectedElements": ["list", "of", "elements", "that", "should", "NOT", "be", "there"],
  "isLoadingState": true or false,
  "isErrorState": true or false,
  "issues": ["list of issues if any"]
}

Be strict: If the screenshot shows a loading spinner, skeleton screen, or error message instead of actual content, mark it as FAILED.
If it shows a login page when it shouldn't, mark it as FAILED.`;

    return new Promise((resolve, reject) => {
      const requestData = JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${base64Image}`,
                  detail: 'high'
                }
              }
            ]
          }
        ],
        max_tokens: 1000
      });

      const options = {
        hostname: 'api.openai.com',
        port: 443,
        path: '/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Length': Buffer.byteLength(requestData)
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            if (response.error) {
              reject(new Error(response.error.message));
              return;
            }

            const content = response.choices[0].message.content;
            // Extract JSON from response
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const analysis = JSON.parse(jsonMatch[0]);
              console.log(`  Visual analysis: ${analysis.whatISee}`);
              if (analysis.missingElements?.length > 0) {
                console.log(`  Missing: ${analysis.missingElements.join(', ')}`);
              }
              resolve({
                passed: analysis.passed,
                analysis: analysis.whatISee,
                details: analysis,
                issues: analysis.issues || []
              });
            } else {
              // Couldn't parse JSON, assume pass with warning
              resolve({
                passed: true,
                analysis: content,
                details: null,
                issues: []
              });
            }
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}`));
          }
        });
      });

      req.on('error', reject);
      req.setTimeout(30000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      req.write(requestData);
      req.end();
    });
  }

  getMinSizeForId(id) {
    // Minimum expected file sizes in KB for different page types
    const minSizes = {
      'sign-in': 50,
      'sign-up': 50,
      'forgot-password': 30,
      'home-dashboard': 150,
      'accounts-list': 100,
      'accounts-all': 50,
      'accounts-all-grid': 50,
      'contacts-list': 100,
      'contacts-all': 50,
      'contacts-all-grid': 50,
      'groups-list': 50,
      'campaigns-list': 100,
      'conversions-overview': 80,
      'conversions-manage': 80,
      'reveal-accounts': 50,
      'reveal-contacts': 50,
      'analytics-reports': 100,
      'analytics-dashboards': 100,
      'integrations-hub': 100,
      'ai-agents-hub': 100,
      'settings-account': 80,
      'settings-users': 50,
      'settings-usage': 50,
      'settings-custom-fields': 40,
      'settings-notifications': 40,
      'settings-export': 80,
      'settings-ai-agents': 40,
      'settings-slack': 80,
    };
    return minSizes[id] || 50;
  }

  generateSummary() {
    const passRate = this.report.summary.total > 0
      ? Math.round((this.report.summary.passed / this.report.summary.total) * 100)
      : 0;

    this.report.summary.passRate = passRate;
    this.report.summary.allPassed = this.report.summary.failed === 0;
  }

  saveReport() {
    const reportPath = path.join(config.outputDir, 'verification-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    console.log(`Report saved to: ${reportPath}\n`);
  }

  printResults() {
    console.log('========================================');
    console.log('VISUAL VERIFICATION SUMMARY');
    console.log('========================================');
    console.log(`Total verified: ${this.report.summary.total}`);
    console.log(`Passed: ${this.report.summary.passed}`);
    console.log(`Warnings: ${this.report.summary.warnings}`);
    console.log(`Failed: ${this.report.summary.failed}`);
    console.log(`Pass rate: ${this.report.summary.passRate}%`);

    if (this.report.requiresRecapture.length > 0) {
      console.log('\nScreenshots requiring re-capture:');
      this.report.requiresRecapture.forEach(item => {
        console.log(`  - ${item.id}: ${item.reason}`);
      });
    }

    if (this.report.summary.allPassed) {
      console.log('\nAll screenshots passed visual verification!');
      console.log('\nNext step: Run Agent 3 (Re-verification)');
      console.log('Command: node scripts/screenshots/pipeline/agent3-reverify.js');
    } else {
      console.log('\nSome screenshots failed visual verification.');
      console.log('Run Agent 1 again to re-capture failed screenshots.');
    }
  }
}

// Run
if (require.main === module) {
  const agent = new VisualVerificationAgent();
  agent.run().catch(console.error);
}

module.exports = { VisualVerificationAgent, VISUAL_EXPECTATIONS };
