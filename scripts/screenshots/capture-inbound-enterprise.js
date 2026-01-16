/**
 * Capture campaign screenshots using "Inbound Enterprise" campaign
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: path.join(__dirname, '../static/img/screenshots'),
};

async function run() {
  console.log('Capturing "Inbound Enterprise" Campaign Screenshots');
  console.log('===================================================\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  try {
    // Login
    console.log('Logging in...');
    await page.goto(`${config.baseUrl}/sign-in`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.fill('input[type="email"]', config.email);
    await page.fill('input[type="password"]', config.password);
    await page.click('button:has-text("SIGN IN")');
    await page.waitForURL(url => !url.pathname.includes('/sign-in'), { timeout: 30000 });
    await page.waitForTimeout(5000);
    console.log('Login successful\n');

    // Go to campaigns
    console.log('1. Navigating to campaigns...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(8000);

    // Click "Inbound Enterprise" campaign
    console.log('2. Clicking "Inbound Enterprise" campaign...');

    // First, use search to find it
    const searchBox = await page.$('input[placeholder*="Search"], input[type="search"], input[type="text"]');
    if (searchBox) {
      await searchBox.fill('Inbound Enterprise');
      await page.waitForTimeout(3000);
      console.log('   Searched for Inbound Enterprise');
    }

    // Scroll down to find it if needed
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(2000);

    // Try multiple selectors
    const selectors = [
      'a:has-text("Inbound Enterprise")',
      'text=Inbound Enterprise',
      '[class*="campaign"]:has-text("Inbound Enterprise")',
      'tr:has-text("Inbound Enterprise")',
    ];

    let clicked = false;
    for (const selector of selectors) {
      try {
        await page.click(selector, { timeout: 5000 });
        clicked = true;
        console.log(`   Clicked using: ${selector}`);
        break;
      } catch (e) {
        console.log(`   Selector failed: ${selector}`);
      }
    }

    if (!clicked) {
      // Last resort - click by coordinates on first visible campaign row with "Enterprise"
      const rows = await page.$$('table tbody tr');
      for (const row of rows) {
        const text = await row.textContent();
        if (text && text.includes('Enterprise')) {
          await row.click();
          clicked = true;
          console.log('   Clicked row containing Enterprise');
          break;
        }
      }
    }

    await page.waitForTimeout(8000);

    const currentUrl = page.url();
    console.log(`   Current URL: ${currentUrl}`);

    // Capture INSIGHTS tab (should be default view)
    console.log('\n3. Capturing INSIGHTS tab...');
    // Click INSIGHTS tab to make sure we're on it
    try {
      await page.click('button:has-text("INSIGHTS"), [role="tab"]:has-text("INSIGHTS")', { timeout: 5000 });
      await page.waitForTimeout(3000);
    } catch (e) {}
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-insights-tab.png') });
    console.log('   SUCCESS: campaign-insights-tab.png');

    // Capture AUDIENCE tab
    console.log('\n4. Capturing AUDIENCE tab...');
    await page.click('button:has-text("AUDIENCE"), [role="tab"]:has-text("AUDIENCE")', { timeout: 5000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-audience-tab.png') });
    console.log('   SUCCESS: campaign-audience-tab.png');

    // Capture PAGES tab
    console.log('\n5. Capturing PAGES tab...');
    await page.click('button:has-text("PAGES"), [role="tab"]:has-text("PAGES")', { timeout: 5000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-pages-tab.png') });
    console.log('   SUCCESS: campaign-pages-tab.png');

    // Capture ENGAGEMENT tab
    console.log('\n6. Capturing ENGAGEMENT tab...');
    await page.click('button:has-text("ENGAGEMENT"), [role="tab"]:has-text("ENGAGEMENT")', { timeout: 5000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-engagement-tab.png') });
    console.log('   SUCCESS: campaign-engagement-tab.png');

    // Capture PERFORMANCE tab
    console.log('\n7. Capturing PERFORMANCE tab...');
    await page.click('button:has-text("PERFORMANCE"), [role="tab"]:has-text("PERFORMANCE")', { timeout: 5000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-performance-tab.png') });
    console.log('   SUCCESS: campaign-performance-tab.png');

    // Also capture the campaign detail page (INSIGHTS is the detail)
    console.log('\n8. Capturing campaign detail page...');
    await page.click('button:has-text("INSIGHTS"), [role="tab"]:has-text("INSIGHTS")', { timeout: 5000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(config.outputDir, 'campaign-detail-page.png') });
    console.log('   SUCCESS: campaign-detail-page.png');

    console.log('\n===================================================');
    console.log('Inbound Enterprise campaign capture complete!');
    console.log('===================================================');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

if (!config.email || !config.password) {
  console.error('Missing credentials. Set ABMATIC_EMAIL and ABMATIC_PASSWORD.');
  process.exit(1);
}

run();
