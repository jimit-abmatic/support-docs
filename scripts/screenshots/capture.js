/**
 * Abmatic AI Documentation Screenshot Capture Tool
 *
 * Usage:
 *   node scripts/screenshots/capture.js [command] [options]
 *
 * Commands:
 *   single <name> <path>  - Capture single screenshot
 *   batch                 - Capture all predefined pages
 *   list                  - List available pages
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration from environment
const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: path.join(__dirname, '../../static/img/screenshots'),
  viewport: { width: 1440, height: 900 }
};

// Predefined pages to capture
const PAGES = [
  { name: 'dashboard-overview', path: '/home-dashboard', description: 'Main dashboard' },
  { name: 'ai-agents-hub', path: '/ai-agents', description: 'AI Agents selection' },
  { name: 'campaigns-list', path: '/campaigns', description: 'Campaigns list' },
  { name: 'accounts-list', path: '/accounts', description: 'Target accounts' },
  { name: 'contacts-list', path: '/contacts', description: 'Contacts list' },
  { name: 'groups-list', path: '/groups', description: 'Target groups' },
  { name: 'conversions-overview', path: '/conversions', description: 'Conversions' },
  { name: 'integrations-hub', path: '/integrations', description: 'Integrations' },
  { name: 'analytics-reports', path: '/analytics/reports', description: 'Reports' },
  { name: 'analytics-dashboards', path: '/analytics/dashboards', description: 'Dashboards' },
  { name: 'settings-account', path: '/settings/account-info', description: 'Account settings' },
  { name: 'settings-script', path: '/settings/script', description: 'Script installation' },
  { name: 'settings-users', path: '/settings/users', description: 'User management' },
];

class ScreenshotTool {
  constructor() {
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
  }

  async init() {
    console.log('🚀 Starting browser...');

    this.browser = await chromium.launch({
      headless: true
    });

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
      await this.page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });

      // Wait for and fill login form
      await this.page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
      await this.page.fill('input[type="email"], input[name="email"]', config.email);
      await this.page.fill('input[type="password"], input[name="password"]', config.password);

      // Submit - click the Sign in button
      await this.page.click('button:has-text("Sign in")');

      // Wait for successful login - URL changes from /login
      await this.page.waitForFunction(() => !window.location.pathname.includes('/login'), { timeout: 30000 });

      this.isLoggedIn = true;
      console.log('✅ Logged in successfully');
      return true;
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      return false;
    }
  }

  async capture(name, urlPath, options = {}) {
    console.log(`📸 Capturing: ${name}`);

    try {
      const url = `${config.baseUrl}${urlPath}`;
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for content to stabilize
      await this.page.waitForTimeout(2000);

      // Wait for specific selector if provided
      if (options.waitFor) {
        await this.page.waitForSelector(options.waitFor, { timeout: 10000 }).catch(() => {});
      }

      // Click elements if needed (for modals, dropdowns, etc.)
      if (options.clickBefore) {
        for (const selector of options.clickBefore) {
          await this.page.click(selector).catch(() => {});
          await this.page.waitForTimeout(500);
        }
      }

      // Additional delay
      if (options.delay) {
        await this.page.waitForTimeout(options.delay);
      }

      // Take screenshot
      const filepath = path.join(config.outputDir, `${name}.png`);
      await this.page.screenshot({
        path: filepath,
        fullPage: options.fullPage || false
      });

      console.log(`   ✅ Saved: ${filepath}`);
      return filepath;
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
      return null;
    }
  }

  async batchCapture() {
    if (!await this.login()) {
      console.error('Cannot proceed without login');
      return;
    }

    console.log(`\n📚 Capturing ${PAGES.length} screenshots...\n`);

    let success = 0;
    for (const page of PAGES) {
      const result = await this.capture(page.name, page.path);
      if (result) success++;
    }

    console.log(`\n📊 Complete: ${success}/${PAGES.length} successful`);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!config.email || !config.password) {
    console.log(`
⚠️  Missing credentials. Set environment variables:
   ABMATIC_EMAIL=your@email.com
   ABMATIC_PASSWORD=yourpassword

Usage:
   node capture.js single <name> <path>
   node capture.js batch
   node capture.js list
`);
    if (command !== 'list') return;
  }

  const tool = new ScreenshotTool();

  try {
    if (command === 'list') {
      console.log('\nAvailable pages:');
      PAGES.forEach(p => console.log(`  ${p.name.padEnd(25)} ${p.path.padEnd(30)} ${p.description}`));
      return;
    }

    await tool.init();

    if (command === 'single') {
      const [, name, urlPath] = args;
      if (!name || !urlPath) {
        console.log('Usage: node capture.js single <name> <path>');
        return;
      }
      await tool.login();
      await tool.capture(name, urlPath);
    } else if (command === 'batch') {
      await tool.batchCapture();
    } else {
      console.log(`
Abmatic Screenshot Tool

Commands:
  single <name> <path>  - Capture single screenshot
  batch                 - Capture all predefined pages
  list                  - Show available pages
`);
    }
  } finally {
    await tool.close();
  }
}

main().catch(console.error);
