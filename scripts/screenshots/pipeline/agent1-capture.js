/**
 * Agent 1: Navigator/Capture Agent
 *
 * Purpose: Navigate the Abmatic AI app and capture real screenshots
 * for each defined user flow.
 *
 * Output:
 * - Screenshots in static/img/screenshots/raw/
 * - Metadata in output/capture-metadata.json
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  rawDir: path.join(__dirname, '../../../static/img/screenshots/raw'),
  outputDir: path.join(__dirname, '../output'),
  viewport: { width: 1440, height: 900 },
  retryAttempts: 3,
  waitAfterNav: 5000,
  waitForContent: 8000,
};

// Define all flows and their steps
const FLOWS = {
  'onboarding': {
    name: 'New User Onboarding',
    steps: [
      { id: 'sign-in', path: '/sign-in', noAuth: true, description: 'Sign in page for returning users' },
      { id: 'sign-up', path: '/sign-up', noAuth: true, description: 'Sign up page for new users' },
      { id: 'forgot-password', path: '/forgot-password', noAuth: true, description: 'Password recovery page' },
    ]
  },
  'dashboard': {
    name: 'Dashboard & Home',
    steps: [
      { id: 'home-dashboard', path: '/', description: 'Main home dashboard with overview metrics' },
      { id: 'home-dashboard-alt', path: '/home-dashboard', description: 'Alternative home dashboard route' },
    ]
  },
  'installation': {
    name: 'Script Installation',
    steps: [
      { id: 'installation-script', path: '/installation', description: 'Script installation page with tracking code', waitExtra: 5000 },
    ]
  },
  'accounts': {
    name: 'Account Management',
    steps: [
      { id: 'accounts-list', path: '/accounts', description: 'Target accounts list view' },
      { id: 'accounts-all', path: '/accounts/all', description: 'All accounts data view', waitExtra: 5000 },
    ]
  },
  'contacts': {
    name: 'Contact Management',
    steps: [
      { id: 'contacts-list', path: '/contacts', description: 'Target contacts list view', waitExtra: 20000, waitForSelector: '.ag-root, .ag-body-viewport, .MuiDataGrid-root, [class*="ag-"], [class*="empty"], [class*="no-data"]' },
      { id: 'contacts-all', path: '/contacts/all', description: 'All contacts data view', waitExtra: 20000, waitForSelector: '.ag-root, .ag-body-viewport, .MuiDataGrid-root, [class*="ag-"], [class*="empty"], [class*="no-data"]' },
    ]
  },
  'groups': {
    name: 'Target Groups',
    steps: [
      { id: 'groups-list', path: '/accounts/groups', description: 'Target groups for segmentation', waitExtra: 20000, waitForSelector: '.ag-root, .ag-body-viewport, [class*="ag-"], [class*="list"], [class*="table"]' },
    ]
  },
  'campaigns': {
    name: 'Campaign Management',
    steps: [
      { id: 'campaigns-list', path: '/campaigns', description: 'All campaigns list view', waitExtra: 20000, waitForSelector: '.ag-root, .ag-body-viewport, [class*="ag-"], [class*="list"], [class*="campaign"]' },
    ]
  },
  // CAMPAIGN DETAIL WORKFLOW - Screenshots for every step of campaign creation/editing
  'campaign-detail': {
    name: 'Campaign Detail Views',
    steps: [
      // We'll capture the first campaign's detail page by clicking into it
      { id: 'campaign-detail-overview', path: '/campaigns', description: 'Campaign detail overview page', clickFirst: 'tr.MuiTableRow-root td, [class*="campaign"] a, table tbody tr:first-child', waitExtra: 15000 },
    ]
  },
  'campaign-tabs': {
    name: 'Campaign Tab Views',
    steps: [
      // These will be captured by navigating to specific campaign tabs
      // Using URL pattern /campaigns/:id/audience, /campaigns/:id/pages, etc.
    ]
  },
  'conversions': {
    name: 'Conversion Tracking',
    steps: [
      { id: 'conversions-overview', path: '/conversions', description: 'Conversions overview and metrics', waitExtra: 20000, waitForSelector: '.ag-root, .ag-body-viewport, [class*="ag-"], [class*="conversion"], [class*="chart"]' },
      { id: 'conversions-manage', path: '/conversions/manage', description: 'Manage conversion definitions', waitExtra: 15000 },
    ]
  },
  'reveal': {
    name: 'Visitor Reveal',
    steps: [
      { id: 'reveal-accounts', path: '/reveal/accounts', description: 'Identified companies from website visitors', waitExtra: 10000 },
      { id: 'reveal-contacts', path: '/reveal/contacts', description: 'Identified contacts from website visitors', waitExtra: 10000 },
    ]
  },
  'analytics': {
    name: 'Analytics & Reporting',
    steps: [
      { id: 'analytics-reports', path: '/analytics/reports', description: 'Analytics reports list', waitExtra: 10000 },
      { id: 'analytics-dashboards', path: '/analytics/dashboards', description: 'Analytics dashboards list', waitExtra: 10000 },
    ]
  },
  'integrations': {
    name: 'Integrations',
    steps: [
      { id: 'integrations-hub', path: '/integrations', description: 'All available integrations (CRM, ads, etc.)', waitExtra: 10000 },
    ]
  },
  'ai-agents': {
    name: 'AI Agents',
    steps: [
      { id: 'ai-agents-hub', path: '/ai-agents', description: 'AI Agents selection and chat hub', waitExtra: 10000 },
    ]
  },
  'settings': {
    name: 'Settings',
    steps: [
      { id: 'settings-account', path: '/settings/account', description: 'Account information and settings', waitExtra: 10000 },
      { id: 'settings-users', path: '/settings/users', description: 'User management and invitations' },
      { id: 'settings-usage', path: '/settings/usage', description: 'Usage metrics and billing' },
      { id: 'settings-custom-fields', path: '/settings/custom-fields', description: 'Custom field definitions' },
      { id: 'settings-notifications', path: '/settings/notifications', description: 'Notification preferences' },
      { id: 'settings-export', path: '/settings/export', description: 'Data export options', waitExtra: 3000 },
      { id: 'settings-ai-agents', path: '/settings/ai-agents', description: 'AI agents configuration' },
      { id: 'settings-slack', path: '/settings/slack', description: 'Slack integration settings', waitExtra: 3000 },
    ]
  },
  // NEW: Extended account management flows
  'account-lists': {
    name: 'Account List Management',
    steps: [
      { id: 'accounts-all-grid', path: '/accounts/all', description: 'All accounts AG Grid view with filters and data', waitExtra: 15000, waitForSelector: '.ag-root, .ag-body-viewport, .ag-header' },
    ]
  },
  // NEW: Extended contact management flows
  'contact-lists': {
    name: 'Contact List Management',
    steps: [
      { id: 'contacts-all-grid', path: '/contacts/all', description: 'All contacts AG Grid view with filters and data', waitExtra: 15000, waitForSelector: '.ag-root, .ag-body-viewport, .ag-header' },
    ]
  },
  // NEW: CRM Integrations detailed views
  'crm-integrations': {
    name: 'CRM Integrations',
    steps: [
      { id: 'integration-salesforce', path: '/integrations/salesforce', description: 'Salesforce integration configuration', waitExtra: 10000 },
      { id: 'integration-hubspot', path: '/integrations/hubspot', description: 'HubSpot integration configuration', waitExtra: 10000 },
      { id: 'integration-pipedrive', path: '/integrations/pipedrive', description: 'Pipedrive integration configuration', waitExtra: 10000 },
    ]
  },
};

// Modal/popup captures that require clicking
const MODAL_CAPTURES = [
  {
    id: 'campaign-create-modal',
    basePath: '/campaigns',
    clickSelector: 'button:has-text("CAMPAIGN"), button:has-text("Create"), button:has-text("New")',
    description: 'Create campaign modal with campaign type options',
    waitBeforeClick: 8000
  },
  {
    id: 'account-create-modal',
    basePath: '/accounts',
    clickSelector: 'button:has-text("Account List"), button:has-text("Create")',
    description: 'Create account list modal with creation options'
  },
  {
    id: 'contact-create-modal',
    basePath: '/contacts',
    clickSelector: 'button:has-text("Contact List"), button:has-text("Create")',
    description: 'Create contact list modal with creation options'
  },
];

// INTERACTIVE CAPTURES - Click into pages to capture detailed views
const INTERACTIVE_CAPTURES = [
  // Campaign workflow - click into first campaign to see detail page
  {
    id: 'campaign-detail-page',
    basePath: '/campaigns',
    clickSelector: 'table tbody tr:first-child td:first-child, [class*="campaign-name"], a[href*="/campaigns/"]',
    description: 'Campaign detail page showing settings and tabs',
    waitBeforeClick: 8000,
    waitAfterClick: 10000
  },
  // Filter builder in contacts
  {
    id: 'contacts-filter-panel',
    basePath: '/contacts/all',
    clickSelector: 'button:has-text("FILTERS"), button:has-text("Filter"), [aria-label*="filter" i]',
    description: 'Filter panel for building contact queries',
    waitBeforeClick: 10000,
    waitAfterClick: 3000
  },
];

class CaptureAgent {
  constructor() {
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
    this.metadata = {
      captureDate: new Date().toISOString(),
      screenshots: [],
      errors: [],
      stats: { total: 0, success: 0, failed: 0 }
    };
  }

  async init() {
    console.log('========================================');
    console.log('AGENT 1: NAVIGATOR/CAPTURE AGENT');
    console.log('========================================\n');
    console.log('Initializing browser...');

    // Ensure directories exist
    if (!fs.existsSync(config.rawDir)) {
      fs.mkdirSync(config.rawDir, { recursive: true });
    }
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext({
      viewport: config.viewport,
      deviceScaleFactor: 2, // Retina quality
    });
    this.page = await context.newPage();

    console.log('Browser ready\n');
  }

  async login() {
    if (this.isLoggedIn) return true;

    console.log('Logging in as:', config.email);

    try {
      await this.page.goto(`${config.baseUrl}/sign-in`, { waitUntil: 'networkidle', timeout: 30000 });
      await this.page.waitForSelector('input[type="email"]', { timeout: 10000 });

      await this.page.fill('input[type="email"]', config.email);
      await this.page.fill('input[type="password"]', config.password);
      await this.page.click('button:has-text("SIGN IN")');

      await this.page.waitForURL(url => !url.pathname.includes('/sign-in'), { timeout: 30000 });
      await this.page.waitForTimeout(5000); // Wait for app to fully load

      const currentUrl = this.page.url();
      if (currentUrl.includes('/sign-in')) {
        throw new Error('Still on sign-in page after login attempt');
      }

      this.isLoggedIn = true;
      console.log('Login successful\n');
      return true;
    } catch (error) {
      console.error('Login failed:', error.message);
      this.metadata.errors.push({ type: 'login', error: error.message });
      return false;
    }
  }

  async captureStep(step, flowName) {
    const { id, path: urlPath, noAuth, description, waitExtra, waitForSelector } = step;
    this.metadata.stats.total++;

    console.log(`  Capturing: ${id}`);
    console.log(`    Path: ${urlPath}`);
    console.log(`    Description: ${description}`);

    for (let attempt = 1; attempt <= config.retryAttempts; attempt++) {
      try {
        const url = `${config.baseUrl}${urlPath}`;

        // Navigate
        await this.page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 60000
        });

        // Wait for network to settle
        await this.page.waitForTimeout(config.waitAfterNav);

        // Check if redirected to login (for authenticated pages)
        if (!noAuth) {
          const currentUrl = this.page.url();
          if (currentUrl.includes('/sign-in') || currentUrl.includes('/login')) {
            throw new Error('Redirected to login - session may have expired');
          }
        }

        // Wait for content to load
        await this.page.waitForTimeout(config.waitForContent);

        // Wait for specific selector if specified
        if (waitForSelector) {
          try {
            console.log(`    Waiting for content: ${waitForSelector}`);
            await this.page.waitForSelector(waitForSelector, { timeout: 15000 });
          } catch (e) {
            console.log(`    Selector not found, continuing...`);
          }
        }

        // Extra wait if specified
        if (waitExtra) {
          await this.page.waitForTimeout(waitExtra);
        }

        // Check for loading indicators and wait for them to disappear
        const hasLoader = await this.page.locator('.MuiCircularProgress-root, [class*="loading"], [class*="spinner"]').count();
        if (hasLoader > 0) {
          console.log('    Waiting for loading to complete...');
          await this.page.waitForTimeout(5000);
        }

        // Take screenshot
        const filename = `${id}.png`;
        const filepath = path.join(config.rawDir, filename);
        await this.page.screenshot({ path: filepath, fullPage: false });

        // Verify file size
        const stats = fs.statSync(filepath);
        const fileSizeKB = Math.round(stats.size / 1024);

        if (stats.size < 50000) {
          console.log(`    WARNING: Small file size (${fileSizeKB}KB) - may be loading state`);
        }

        // Record metadata
        this.metadata.screenshots.push({
          id,
          filename,
          filepath,
          flow: flowName,
          path: urlPath,
          description,
          capturedAt: new Date().toISOString(),
          fileSizeKB,
          currentUrl: this.page.url(),
          attempt,
          status: 'captured'
        });

        this.metadata.stats.success++;
        console.log(`    SUCCESS: ${filename} (${fileSizeKB}KB)\n`);
        return true;

      } catch (error) {
        console.log(`    Attempt ${attempt} failed: ${error.message}`);

        if (attempt === config.retryAttempts) {
          this.metadata.stats.failed++;
          this.metadata.errors.push({
            id,
            flow: flowName,
            path: urlPath,
            error: error.message,
            attempts: attempt
          });
          console.log(`    FAILED after ${attempt} attempts\n`);
          return false;
        }

        // Wait before retry
        await this.page.waitForTimeout(2000);
      }
    }
  }

  async captureModal(modal) {
    const { id, basePath, clickSelector, description, waitBeforeClick } = modal;
    this.metadata.stats.total++;

    console.log(`  Capturing modal: ${id}`);
    console.log(`    Base path: ${basePath}`);
    console.log(`    Click: ${clickSelector}`);

    try {
      // Navigate to base page
      await this.page.goto(`${config.baseUrl}${basePath}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });
      await this.page.waitForTimeout(waitBeforeClick || 5000);

      // Click to open modal
      await this.page.click(clickSelector, { timeout: 10000 });
      await this.page.waitForTimeout(2000);

      // Take screenshot
      const filename = `${id}.png`;
      const filepath = path.join(config.rawDir, filename);
      await this.page.screenshot({ path: filepath, fullPage: false });

      // Close modal
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);

      // Verify and record
      const stats = fs.statSync(filepath);
      const fileSizeKB = Math.round(stats.size / 1024);

      this.metadata.screenshots.push({
        id,
        filename,
        filepath,
        type: 'modal',
        basePath,
        clickSelector,
        description,
        capturedAt: new Date().toISOString(),
        fileSizeKB,
        status: 'captured'
      });

      this.metadata.stats.success++;
      console.log(`    SUCCESS: ${filename} (${fileSizeKB}KB)\n`);
      return true;

    } catch (error) {
      this.metadata.stats.failed++;
      this.metadata.errors.push({
        id,
        type: 'modal',
        basePath,
        error: error.message
      });
      console.log(`    FAILED: ${error.message}\n`);
      return false;
    }
  }

  async captureInteractive(interactive) {
    const { id, basePath, clickSelector, clickSequence, description, waitBeforeClick, waitAfterClick } = interactive;
    this.metadata.stats.total++;

    console.log(`  Capturing interactive: ${id}`);
    console.log(`    Base path: ${basePath}`);

    try {
      // Navigate to base page
      await this.page.goto(`${config.baseUrl}${basePath}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });
      await this.page.waitForTimeout(waitBeforeClick || 5000);

      // Handle click sequence or single click
      if (clickSequence && clickSequence.length > 0) {
        for (const clickStep of clickSequence) {
          try {
            await this.page.click(clickStep.selector, { timeout: 10000 });
            await this.page.waitForTimeout(clickStep.wait || 3000);
          } catch (clickError) {
            console.log(`    Click step failed: ${clickStep.selector}`);
            // Try alternative selectors
            const alternatives = clickStep.selector.split(', ');
            let clicked = false;
            for (const alt of alternatives) {
              try {
                await this.page.click(alt.trim(), { timeout: 5000 });
                await this.page.waitForTimeout(clickStep.wait || 3000);
                clicked = true;
                break;
              } catch (e) {}
            }
            if (!clicked) throw new Error(`Could not click: ${clickStep.selector}`);
          }
        }
      } else if (clickSelector) {
        // Single click
        await this.page.click(clickSelector, { timeout: 10000 });
        await this.page.waitForTimeout(waitAfterClick || 5000);
      }

      // Take screenshot
      const filename = `${id}.png`;
      const filepath = path.join(config.rawDir, filename);
      await this.page.screenshot({ path: filepath, fullPage: false });

      // Verify and record
      const stats = fs.statSync(filepath);
      const fileSizeKB = Math.round(stats.size / 1024);

      this.metadata.screenshots.push({
        id,
        filename,
        filepath,
        type: 'interactive',
        basePath,
        description,
        capturedAt: new Date().toISOString(),
        fileSizeKB,
        status: 'captured'
      });

      this.metadata.stats.success++;
      console.log(`    SUCCESS: ${filename} (${fileSizeKB}KB)\n`);
      return true;

    } catch (error) {
      this.metadata.stats.failed++;
      this.metadata.errors.push({
        id,
        type: 'interactive',
        basePath,
        error: error.message
      });
      console.log(`    FAILED: ${error.message}\n`);
      return false;
    }
  }

  async run() {
    try {
      await this.init();

      // Capture public pages first (no auth needed)
      console.log('PHASE 1: Capturing public pages\n');
      for (const [flowKey, flow] of Object.entries(FLOWS)) {
        const publicSteps = flow.steps.filter(s => s.noAuth);
        if (publicSteps.length > 0) {
          console.log(`Flow: ${flow.name}`);
          for (const step of publicSteps) {
            await this.captureStep(step, flowKey);
          }
        }
      }

      // Login
      console.log('PHASE 2: Logging in\n');
      if (!await this.login()) {
        console.log('Cannot proceed without login');
        return;
      }

      // Capture authenticated pages
      console.log('PHASE 3: Capturing authenticated pages\n');
      for (const [flowKey, flow] of Object.entries(FLOWS)) {
        const authSteps = flow.steps.filter(s => !s.noAuth);
        if (authSteps.length > 0) {
          console.log(`Flow: ${flow.name}`);
          for (const step of authSteps) {
            await this.captureStep(step, flowKey);
          }
        }
      }

      // Capture modals
      console.log('PHASE 4: Capturing modals and popups\n');
      for (const modal of MODAL_CAPTURES) {
        await this.captureModal(modal);
      }

      // Capture interactive views (clicking into pages)
      console.log('PHASE 5: Capturing interactive views\n');
      for (const interactive of INTERACTIVE_CAPTURES) {
        await this.captureInteractive(interactive);
      }

      // Save metadata
      this.saveMetadata();

      // Print summary
      this.printSummary();

    } finally {
      if (this.browser) {
        await this.browser.close();
        console.log('\nBrowser closed');
      }
    }
  }

  saveMetadata() {
    const metadataPath = path.join(config.outputDir, 'capture-metadata.json');
    fs.writeFileSync(metadataPath, JSON.stringify(this.metadata, null, 2));
    console.log(`\nMetadata saved to: ${metadataPath}`);
  }

  printSummary() {
    console.log('\n========================================');
    console.log('CAPTURE SUMMARY');
    console.log('========================================');
    console.log(`Total attempted: ${this.metadata.stats.total}`);
    console.log(`Successful: ${this.metadata.stats.success}`);
    console.log(`Failed: ${this.metadata.stats.failed}`);

    if (this.metadata.errors.length > 0) {
      console.log('\nErrors:');
      this.metadata.errors.forEach(e => {
        console.log(`  - ${e.id || e.type}: ${e.error}`);
      });
    }

    console.log('\nNext step: Run Agent 2 (Verification)');
    console.log('Command: node scripts/screenshots/pipeline/agent2-verify.js');
  }
}

// Run
if (require.main === module) {
  if (!config.email || !config.password) {
    console.error('Missing credentials. Set ABMATIC_EMAIL and ABMATIC_PASSWORD environment variables.');
    process.exit(1);
  }

  const agent = new CaptureAgent();
  agent.run().catch(console.error);
}

module.exports = { CaptureAgent, FLOWS, MODAL_CAPTURES, INTERACTIVE_CAPTURES };
