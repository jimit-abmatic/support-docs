/**
 * Recapture broken screenshots with better wait logic
 * Specifically targets pages that were captured during loading state
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

// Pages that need recapture with specific wait conditions
const BROKEN_PAGES = [
  {
    name: 'reveal-accounts',
    path: '/reveal/accounts',
    waitFor: 'table, [role="grid"], .MuiDataGrid-root, text=Company, text=Accounts',
    maxWait: 30000
  },
  {
    name: 'reveal-contacts',
    path: '/reveal/contacts',
    waitFor: 'table, [role="grid"], .MuiDataGrid-root, text=Contact, text=Email',
    maxWait: 30000
  },
  {
    name: 'accounts-all',
    path: '/accounts/all',
    waitFor: 'table tbody tr, [role="row"], text=Rows:',
    waitForNot: 'text=Rows: 0',
    maxWait: 30000
  },
  {
    name: 'contacts-all',
    path: '/contacts/all',
    waitFor: 'table tbody tr, [role="row"], text=Rows:',
    waitForNot: 'text=Rows: 0',
    maxWait: 30000
  },
  {
    name: 'analytics-reports',
    path: '/analytics/reports',
    waitFor: 'table tbody tr, [role="row"], text=Rows:',
    waitForNot: 'text=Rows: 0',
    maxWait: 30000
  },
];

class RecaptureScreenshots {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async init() {
    console.log('🚀 Starting browser...');
    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext({
      viewport: config.viewport,
      deviceScaleFactor: 2,
    });
    this.page = await context.newPage();
    console.log('✅ Browser ready');
  }

  async login() {
    console.log('🔐 Logging in...');
    try {
      await this.page.goto(`${config.baseUrl}/sign-in`, { waitUntil: 'networkidle' });
      await this.page.waitForSelector('input[type="email"]', { timeout: 10000 });
      await this.page.fill('input[type="email"]', config.email);
      await this.page.fill('input[type="password"]', config.password);
      await this.page.click('button:has-text("SIGN IN")');
      await this.page.waitForURL((url) => !url.pathname.includes('/sign-in'), { timeout: 30000 });
      await this.page.waitForTimeout(3000);
      console.log('✅ Logged in successfully');
      return true;
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      return false;
    }
  }

  async waitForContent(pageInfo) {
    const { waitFor, waitForNot, maxWait } = pageInfo;

    // Try multiple selectors
    const selectors = waitFor.split(', ');

    for (const selector of selectors) {
      try {
        await this.page.waitForSelector(selector, { timeout: maxWait / selectors.length });
        console.log(`   Found: ${selector}`);

        // If we need to wait for data (not empty state)
        if (waitForNot) {
          // Check if "Rows: 0" is NOT present
          const hasData = await this.page.evaluate(() => {
            const rowsText = document.body.innerText;
            return !rowsText.includes('Rows: 0') && !rowsText.includes('No data');
          });

          if (!hasData) {
            console.log('   ⚠️  Page shows empty state, waiting longer...');
            await this.page.waitForTimeout(5000);
          }
        }
        return true;
      } catch {
        continue;
      }
    }

    // Final fallback - just wait a fixed time
    console.log('   ⏳ Using fallback wait...');
    await this.page.waitForTimeout(10000);
    return false;
  }

  async capture(pageInfo) {
    const { name, path: urlPath } = pageInfo;
    console.log(`📸 Recapturing: ${name}`);

    try {
      await this.page.goto(`${config.baseUrl}${urlPath}`, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      });

      // Wait for initial render
      await this.page.waitForTimeout(3000);

      // Wait for content to load
      await this.waitForContent(pageInfo);

      // Extra stabilization time
      await this.page.waitForTimeout(2000);

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

  async captureCreateCampaign() {
    console.log('📸 Recapturing: campaign-create');

    try {
      await this.page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
      await this.page.waitForTimeout(2000);

      // Find and click the create/new campaign button
      const createButton = await this.page.$('button:has-text("CAMPAIGN"), button:has-text("Campaign"), button:has-text("Create"), button:has-text("New")');

      if (createButton) {
        await createButton.click();
        await this.page.waitForTimeout(2000);

        const filepath = path.join(config.outputDir, 'campaign-create.png');
        await this.page.screenshot({ path: filepath, fullPage: false });
        console.log('   ✅ Saved: campaign-create.png');

        // Close modal
        await this.page.keyboard.press('Escape');
      } else {
        console.log('   ⚠️  Could not find create campaign button');
      }
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}`);
    }
  }

  async run() {
    await this.init();

    if (!await this.login()) {
      console.error('Cannot proceed without login');
      await this.browser.close();
      return;
    }

    console.log('\n📚 Recapturing broken screenshots...\n');

    for (const page of BROKEN_PAGES) {
      await this.capture(page);
    }

    // Special handling for campaign-create
    await this.captureCreateCampaign();

    console.log('\n✅ Recapture complete!');
    await this.browser.close();
  }
}

new RecaptureScreenshots().run().catch(console.error);
