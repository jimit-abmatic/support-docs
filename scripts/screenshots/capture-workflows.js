/**
 * Workflow Screenshot Capture for Abmatic AI Documentation
 * Captures step-by-step workflow screenshots for detailed documentation
 *
 * Usage:
 *   ABMATIC_EMAIL="email" ABMATIC_PASSWORD="pass" node capture-workflows.js [workflow]
 *
 * Workflows:
 *   campaign-creation   - Full campaign creation workflow
 *   audience-builder    - Audience/account list creation flows
 *   csv-import          - CSV import workflow
 *   crm-import          - CRM import workflow
 *   ai-recommendations  - AI recommendation workflow
 *   filter-builder      - Filter builder interactions
 *   analytics           - Analytics and reporting workflows
 *   all                 - Run all workflows (default)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: path.join(__dirname, '../../static/img/screenshots/workflows'),
  viewport: { width: 1440, height: 900 }
};

class WorkflowScreenshotTool {
  constructor() {
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
    this.capturedCount = 0;
  }

  async init() {
    console.log('🚀 Starting browser (workflow mode)...');

    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext({
      viewport: config.viewport,
      deviceScaleFactor: 2,
    });
    this.page = await context.newPage();

    // Ensure output directory exists
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    console.log('✅ Browser ready');
  }

  async login() {
    if (this.isLoggedIn) return true;

    console.log('🔐 Logging in...');

    try {
      await this.page.goto(`${config.baseUrl}/sign-in`, { waitUntil: 'networkidle' });
      await this.page.waitForSelector('input[type="email"]', { timeout: 10000 });

      await this.page.fill('input[type="email"]', config.email);
      await this.page.fill('input[type="password"]', config.password);
      await this.page.click('button:has-text("SIGN IN")');

      await this.page.waitForURL((url) => !url.pathname.includes('/sign-in'), { timeout: 30000 });
      await this.page.waitForTimeout(3000);

      this.isLoggedIn = true;
      console.log('✅ Logged in successfully\n');
      return true;
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      return false;
    }
  }

  async capture(name, description = '') {
    const filepath = path.join(config.outputDir, `${name}.png`);
    await this.page.screenshot({ path: filepath, fullPage: false });
    this.capturedCount++;
    console.log(`   📸 ${name}.png${description ? ` - ${description}` : ''}`);
    return filepath;
  }

  async waitAndCapture(name, waitMs = 2000, description = '') {
    await this.page.waitForTimeout(waitMs);
    return this.capture(name, description);
  }

  async navigateAndCapture(name, urlPath, waitMs = 2500) {
    const url = `${config.baseUrl}${urlPath}`;
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await this.page.waitForTimeout(waitMs);
    return this.capture(name);
  }

  // ============================================
  // CAMPAIGN CREATION WORKFLOW
  // ============================================
  async captureCampaignWorkflow() {
    console.log('\n📚 CAMPAIGN CREATION WORKFLOW\n');

    // Step 1: Campaigns list
    await this.navigateAndCapture('campaign-01-list', '/campaigns');

    // Step 2: Click Create Campaign button
    try {
      await this.page.click('button:has-text("Create Campaign")', { timeout: 5000 });
      await this.waitAndCapture('campaign-02-create-modal', 1500, 'Create campaign modal');

      // Step 3: Select website personalization (if available)
      const wpOption = await this.page.$('text=Website Personalization');
      if (wpOption) {
        await wpOption.click();
        await this.waitAndCapture('campaign-03-type-selected', 1000, 'Campaign type selected');
      }

      // Step 4: Fill campaign name (if input exists)
      const nameInput = await this.page.$('input[placeholder*="name"], input[name="name"]');
      if (nameInput) {
        await nameInput.fill('Demo Campaign for Documentation');
        await this.waitAndCapture('campaign-04-name-filled', 500, 'Campaign name filled');
      }

      // Close modal
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);
    } catch (e) {
      console.log('   ⚠️ Could not complete full modal interaction:', e.message);
    }

    console.log('   ✅ Campaign workflow complete');
  }

  // ============================================
  // AUDIENCE BUILDER WORKFLOW
  // ============================================
  async captureAudienceWorkflow() {
    console.log('\n📚 AUDIENCE BUILDER WORKFLOW\n');

    // Step 1: Accounts list
    await this.navigateAndCapture('audience-01-accounts-list', '/accounts');

    // Step 2: Click Create Account List
    try {
      await this.page.click('button:has-text("Account List")', { timeout: 5000 });
      await this.waitAndCapture('audience-02-create-modal', 1500, 'Create account list modal');
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);
    } catch (e) {
      console.log('   ⚠️ Could not open account list modal:', e.message);
    }

    // Step 3: All accounts view
    await this.navigateAndCapture('audience-03-all-accounts', '/accounts/all', 4000);

    // Step 4: Contacts list
    await this.navigateAndCapture('audience-04-contacts-list', '/contacts');

    // Step 5: Click Create Contact List
    try {
      await this.page.click('button:has-text("Contact List")', { timeout: 5000 });
      await this.waitAndCapture('audience-05-contact-modal', 1500, 'Create contact list modal');
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);
    } catch (e) {
      console.log('   ⚠️ Could not open contact list modal:', e.message);
    }

    // Step 6: All contacts view
    await this.navigateAndCapture('audience-06-all-contacts', '/contacts/all', 4000);

    // Step 7: Groups list
    await this.navigateAndCapture('audience-07-groups-list', '/groups');

    console.log('   ✅ Audience workflow complete');
  }

  // ============================================
  // CSV IMPORT WORKFLOW
  // ============================================
  async captureCsvImportWorkflow() {
    console.log('\n📚 CSV IMPORT WORKFLOW\n');

    // Navigate to CSV upload page
    await this.navigateAndCapture('csv-01-upload-page', '/accounts/upload-from-csv', 3000);

    // Try to capture different states
    try {
      // Look for file upload area
      const uploadArea = await this.page.$('[class*="dropzone"], [class*="upload"], input[type="file"]');
      if (uploadArea) {
        await this.capture('csv-02-upload-area', 'File upload dropzone');
      }
    } catch (e) {
      console.log('   ⚠️ Could not find upload area:', e.message);
    }

    console.log('   ✅ CSV import workflow complete');
  }

  // ============================================
  // CRM IMPORT WORKFLOW
  // ============================================
  async captureCrmImportWorkflow() {
    console.log('\n📚 CRM IMPORT WORKFLOW\n');

    // First navigate to integrations
    await this.navigateAndCapture('crm-01-integrations', '/integrations', 3000);

    // Check if we can find HubSpot or Salesforce integration sections
    try {
      const hubspotCard = await this.page.$('text=HubSpot');
      if (hubspotCard) {
        await this.capture('crm-02-hubspot-available', 'HubSpot integration');
      }

      const salesforceCard = await this.page.$('text=Salesforce');
      if (salesforceCard) {
        await this.capture('crm-03-salesforce-available', 'Salesforce integration');
      }
    } catch (e) {
      console.log('   ⚠️ Could not find CRM cards:', e.message);
    }

    console.log('   ✅ CRM import workflow complete');
  }

  // ============================================
  // AI RECOMMENDATIONS WORKFLOW
  // ============================================
  async captureAiRecommendationsWorkflow() {
    console.log('\n📚 AI RECOMMENDATIONS WORKFLOW\n');

    // AI Agents hub
    await this.navigateAndCapture('ai-01-agents-hub', '/ai-agents', 3000);

    // AI Agents settings
    await this.navigateAndCapture('ai-02-agents-settings', '/settings/ai-agents', 3000);

    console.log('   ✅ AI recommendations workflow complete');
  }

  // ============================================
  // FILTER BUILDER WORKFLOW
  // ============================================
  async captureFilterBuilderWorkflow() {
    console.log('\n📚 FILTER BUILDER WORKFLOW\n');

    // Navigate to reveal/accounts which often has filter capabilities
    await this.navigateAndCapture('filter-01-reveal-accounts', '/reveal/accounts', 4000);

    // Try to find and click any filter buttons
    try {
      const filterBtn = await this.page.$('button:has-text("Filter"), button:has-text("Add Filter"), [aria-label*="filter"]');
      if (filterBtn) {
        await filterBtn.click();
        await this.waitAndCapture('filter-02-filter-opened', 1500, 'Filter panel opened');
        await this.page.keyboard.press('Escape');
      }
    } catch (e) {
      console.log('   ⚠️ Could not interact with filters:', e.message);
    }

    console.log('   ✅ Filter builder workflow complete');
  }

  // ============================================
  // ANALYTICS WORKFLOW
  // ============================================
  async captureAnalyticsWorkflow() {
    console.log('\n📚 ANALYTICS WORKFLOW\n');

    // Reports list
    await this.navigateAndCapture('analytics-01-reports', '/analytics/reports', 4000);

    // Dashboards
    await this.navigateAndCapture('analytics-02-dashboards', '/analytics/dashboards', 3000);

    // Conversions overview
    await this.navigateAndCapture('analytics-03-conversions', '/conversions', 3000);

    // Manage conversions
    await this.navigateAndCapture('analytics-04-manage-conversions', '/conversions/manage', 3000);

    console.log('   ✅ Analytics workflow complete');
  }

  // ============================================
  // SETTINGS WORKFLOW
  // ============================================
  async captureSettingsWorkflow() {
    console.log('\n📚 SETTINGS WORKFLOW\n');

    const settingsPages = [
      { name: 'settings-01-account', path: '/settings/account' },
      { name: 'settings-02-users', path: '/settings/users' },
      { name: 'settings-03-usage', path: '/settings/usage' },
      { name: 'settings-04-custom-fields', path: '/settings/custom-fields' },
      { name: 'settings-05-notifications', path: '/settings/notifications' },
      { name: 'settings-06-export', path: '/settings/export' },
      { name: 'settings-07-ai-agents', path: '/settings/ai-agents' },
      { name: 'settings-08-slack', path: '/settings/slack' },
    ];

    for (const page of settingsPages) {
      await this.navigateAndCapture(page.name, page.path, 3000);
    }

    console.log('   ✅ Settings workflow complete');
  }

  // ============================================
  // REVEAL WORKFLOW
  // ============================================
  async captureRevealWorkflow() {
    console.log('\n📚 REVEAL WORKFLOW\n');

    // Company reveal
    await this.navigateAndCapture('reveal-01-accounts', '/reveal/accounts', 4000);

    // Contact reveal
    await this.navigateAndCapture('reveal-02-contacts', '/reveal/contacts', 4000);

    // Contact reveal settings
    await this.navigateAndCapture('reveal-03-settings', '/settings/contact-reveal', 3000);

    console.log('   ✅ Reveal workflow complete');
  }

  // ============================================
  // INSTALLATION WORKFLOW
  // ============================================
  async captureInstallationWorkflow() {
    console.log('\n📚 INSTALLATION WORKFLOW\n');

    await this.navigateAndCapture('install-01-script', '/installation', 4000);

    console.log('   ✅ Installation workflow complete');
  }

  // ============================================
  // RUN ALL WORKFLOWS
  // ============================================
  async runAllWorkflows() {
    if (!await this.login()) {
      console.error('Cannot proceed without login');
      return;
    }

    await this.captureCampaignWorkflow();
    await this.captureAudienceWorkflow();
    await this.captureCsvImportWorkflow();
    await this.captureCrmImportWorkflow();
    await this.captureAiRecommendationsWorkflow();
    await this.captureFilterBuilderWorkflow();
    await this.captureAnalyticsWorkflow();
    await this.captureSettingsWorkflow();
    await this.captureRevealWorkflow();
    await this.captureInstallationWorkflow();

    console.log(`\n📊 COMPLETE: Captured ${this.capturedCount} workflow screenshots`);
    console.log(`   📁 Output: ${config.outputDir}\n`);
  }

  async runWorkflow(name) {
    if (!await this.login()) {
      console.error('Cannot proceed without login');
      return;
    }

    const workflows = {
      'campaign-creation': () => this.captureCampaignWorkflow(),
      'audience-builder': () => this.captureAudienceWorkflow(),
      'csv-import': () => this.captureCsvImportWorkflow(),
      'crm-import': () => this.captureCrmImportWorkflow(),
      'ai-recommendations': () => this.captureAiRecommendationsWorkflow(),
      'filter-builder': () => this.captureFilterBuilderWorkflow(),
      'analytics': () => this.captureAnalyticsWorkflow(),
      'settings': () => this.captureSettingsWorkflow(),
      'reveal': () => this.captureRevealWorkflow(),
      'installation': () => this.captureInstallationWorkflow(),
    };

    if (workflows[name]) {
      await workflows[name]();
      console.log(`\n📊 COMPLETE: Captured ${this.capturedCount} screenshots for ${name}`);
    } else {
      console.log(`Unknown workflow: ${name}`);
      console.log(`Available workflows: ${Object.keys(workflows).join(', ')}`);
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const workflow = args[0] || 'all';

  if (!config.email || !config.password) {
    console.log(`
⚠️  Missing credentials. Set environment variables:
   ABMATIC_EMAIL=your@email.com
   ABMATIC_PASSWORD=yourpassword

Usage:
   node capture-workflows.js [workflow]

Workflows:
   campaign-creation   - Full campaign creation workflow
   audience-builder    - Audience/account list creation flows
   csv-import          - CSV import workflow
   crm-import          - CRM import workflow
   ai-recommendations  - AI recommendation workflow
   filter-builder      - Filter builder interactions
   analytics           - Analytics and reporting workflows
   settings            - Settings pages
   reveal              - Company/contact reveal
   installation        - Script installation
   all                 - Run all workflows (default)
`);
    return;
  }

  const tool = new WorkflowScreenshotTool();

  try {
    await tool.init();

    if (workflow === 'all') {
      await tool.runAllWorkflows();
    } else {
      await tool.runWorkflow(workflow);
    }
  } finally {
    await tool.close();
  }
}

main().catch(console.error);
