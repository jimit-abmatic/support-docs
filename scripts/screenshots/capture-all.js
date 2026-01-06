/**
 * Comprehensive Screenshot Capture for Abmatic AI Documentation
 * Captures ALL routes, popups, and modals from the app
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: path.join(__dirname, '../../static/img/screenshots'),
  viewport: { width: 1440, height: 900 }
};

// COMPREHENSIVE list of ALL pages to capture
const ALL_PAGES = [
  // PUBLIC/AUTH PAGES (capture before login)
  { name: 'sign-in', path: '/sign-in', noAuth: true, description: 'Sign in page' },
  { name: 'sign-up', path: '/sign-up', noAuth: true, description: 'Sign up page' },
  { name: 'forgot-password', path: '/forgot-password', noAuth: true, description: 'Forgot password page' },

  // DASHBOARD
  { name: 'dashboard-overview', path: '/', description: 'Main dashboard/home' },
  { name: 'home-dashboard', path: '/home-dashboard', description: 'Home dashboard view' },

  // AI AGENTS
  { name: 'ai-agents-hub', path: '/ai-agents', description: 'AI Agents selection hub' },

  // CAMPAIGNS
  { name: 'campaigns-list', path: '/campaigns', description: 'Campaigns list view' },

  // ACCOUNTS/AUDIENCES
  { name: 'accounts-list', path: '/accounts', description: 'Accounts list view' },
  { name: 'accounts-all', path: '/accounts/all', description: 'All accounts view' },
  { name: 'contacts-list', path: '/contacts', description: 'Contacts list view' },
  { name: 'contacts-all', path: '/contacts/all', description: 'All contacts view' },

  // REVEAL
  { name: 'reveal-accounts', path: '/reveal/accounts', description: 'Company reveal page' },
  { name: 'reveal-contacts', path: '/reveal/contacts', description: 'Contact reveal page' },

  // CONVERSIONS
  { name: 'conversions-overview', path: '/conversions', description: 'Conversions overview' },
  { name: 'conversions-manage', path: '/conversions/manage', description: 'Manage conversions' },

  // ANALYTICS
  { name: 'analytics-reports', path: '/analytics/reports', description: 'Analytics reports' },
  { name: 'analytics-dashboards', path: '/analytics/dashboards', description: 'Analytics dashboards' },

  // INTEGRATIONS
  { name: 'integrations-hub', path: '/integrations', description: 'Integrations hub' },

  // SETTINGS
  { name: 'settings-account', path: '/settings/account', description: 'Account settings' },
  { name: 'settings-usage', path: '/settings/usage', description: 'Usage and billing' },
  { name: 'settings-users', path: '/settings/users', description: 'User management' },
  { name: 'settings-custom-fields', path: '/settings/custom-fields', description: 'Custom fields' },
  { name: 'settings-export', path: '/settings/export', description: 'Data export' },
  { name: 'settings-notifications', path: '/settings/notifications', description: 'Notification settings' },
  { name: 'settings-ai-agents', path: '/settings/ai-agents', description: 'AI agents settings' },

  // INSTALLATION
  { name: 'installation-script', path: '/installation', description: 'Script installation page' },

  // SLACK
  { name: 'settings-slack', path: '/settings/slack', description: 'Slack integration settings' },
];

class ComprehensiveScreenshotTool {
  constructor() {
    this.browser = null;
    this.page = null;
    this.isLoggedIn = false;
  }

  async init() {
    console.log('🚀 Starting browser (high-res mode)...');

    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext({
      viewport: config.viewport,
      deviceScaleFactor: 2, // Retina quality
    });
    this.page = await context.newPage();

    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    console.log('✅ Browser ready');
  }

  async login() {
    if (this.isLoggedIn) return true;

    console.log('🔐 Logging in...');
    console.log(`   Email: ${config.email}`);

    try {
      await this.page.goto(`${config.baseUrl}/sign-in`, { waitUntil: 'networkidle' });
      await this.page.waitForSelector('input[type="email"]', { timeout: 10000 });

      // Fill credentials
      await this.page.fill('input[type="email"]', config.email);
      await this.page.fill('input[type="password"]', config.password);

      // Click the SIGN IN button (uppercase)
      await this.page.click('button:has-text("SIGN IN")');

      // Wait for redirect away from sign-in page
      await this.page.waitForURL((url) => !url.pathname.includes('/sign-in'), { timeout: 30000 });

      // Additional wait for app to load
      await this.page.waitForTimeout(3000);

      // Verify we're logged in by checking URL
      const currentUrl = this.page.url();
      console.log(`   Current URL after login: ${currentUrl}`);

      if (currentUrl.includes('/sign-in')) {
        throw new Error('Still on sign-in page after login attempt');
      }

      this.isLoggedIn = true;
      console.log('✅ Logged in successfully');
      return true;
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      // Take screenshot of failed state
      await this.page.screenshot({ path: path.join(config.outputDir, 'login-failed-debug.png') });
      return false;
    }
  }

  async capture(pageInfo) {
    const { name, path: urlPath, noAuth, description } = pageInfo;
    console.log(`📸 Capturing: ${name} (${urlPath})`);

    try {
      const url = `${config.baseUrl}${urlPath}`;
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for content to stabilize
      await this.page.waitForTimeout(2500);

      // Take screenshot
      const filepath = path.join(config.outputDir, `${name}.png`);
      await this.page.screenshot({ path: filepath, fullPage: false });

      console.log(`   ✅ Saved: ${name}.png`);
      return filepath;
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
      return null;
    }
  }

  async captureWithClick(name, urlPath, clickSelector, description) {
    console.log(`📸 Capturing with click: ${name}`);

    try {
      const url = `${config.baseUrl}${urlPath}`;
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await this.page.waitForTimeout(1500);

      // Click to open modal/popup
      await this.page.click(clickSelector, { timeout: 5000 });
      await this.page.waitForTimeout(1000);

      const filepath = path.join(config.outputDir, `${name}.png`);
      await this.page.screenshot({ path: filepath, fullPage: false });

      console.log(`   ✅ Saved: ${name}.png`);

      // Close modal if possible (press Escape)
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);

      return filepath;
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
      return null;
    }
  }

  async captureAll() {
    // First capture public pages (before login)
    console.log('\n📚 Capturing PUBLIC pages...\n');
    const publicPages = ALL_PAGES.filter(p => p.noAuth);
    for (const page of publicPages) {
      await this.capture(page);
    }

    // Login
    if (!await this.login()) {
      console.error('Cannot proceed without login');
      return;
    }

    // Capture all authenticated pages
    console.log('\n📚 Capturing AUTHENTICATED pages...\n');
    const authPages = ALL_PAGES.filter(p => !p.noAuth);
    for (const page of authPages) {
      await this.capture(page);
    }

    // Capture modals/popups
    console.log('\n📚 Capturing MODALS and POPUPS...\n');

    // Create Campaign modal
    await this.captureWithClick(
      'campaign-create-modal',
      '/campaigns',
      'button:has-text("Create"), button:has-text("New"), [data-testid="create-campaign"]',
      'Create campaign modal'
    );

    // Create Account List modal
    await this.captureWithClick(
      'account-create-modal',
      '/accounts',
      'button:has-text("Create"), button:has-text("New")',
      'Create account list modal'
    );

    console.log('\n📊 Capture complete!');
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

async function main() {
  const tool = new ComprehensiveScreenshotTool();

  try {
    await tool.init();
    await tool.captureAll();
  } finally {
    await tool.close();
  }
}

main().catch(console.error);
