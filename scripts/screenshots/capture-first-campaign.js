/**
 * Capture first-campaign tutorial screenshots
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: path.join(__dirname, '../../static/img/screenshots'),
};

async function run() {
  console.log('Capturing First Campaign Tutorial Screenshots');
  console.log('=============================================\n');

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

    // 1. Campaigns page with Create Campaign button visible
    console.log('1. Capturing campaigns list with Create button...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-create-button.png') });
    console.log('   SUCCESS: first-campaign-create-button.png');

    // 2. Click Create Campaign to show modal
    console.log('\n2. Clicking Create Campaign button...');
    try {
      await page.click('button:has-text("Create Campaign"), a:has-text("Create Campaign"), [data-testid="create-campaign"]', { timeout: 10000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-type-modal.png') });
      console.log('   SUCCESS: first-campaign-type-modal.png');

      // Close modal
      await page.keyboard.press('Escape');
      await page.waitForTimeout(1000);
    } catch (e) {
      console.log('   Could not click create button:', e.message);
    }

    // 3. Navigate to Inbound - Enterprise campaign for detail screenshots
    console.log('\n3. Navigating to Inbound Enterprise campaign...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // Search and click
    const searchBox = await page.$('input[placeholder*="Search"], input[type="search"]');
    if (searchBox) {
      await searchBox.fill('Inbound Enterprise');
      await page.waitForTimeout(2000);
    }

    try {
      await page.click('a:has-text("Inbound Enterprise")', { timeout: 5000 });
      await page.waitForTimeout(5000);

      // Campaign detail view
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-detail.png') });
      console.log('   SUCCESS: first-campaign-detail.png');

      // Audience tab
      console.log('\n4. Capturing Audience tab...');
      await page.click('button:has-text("AUDIENCE"), [role="tab"]:has-text("AUDIENCE")', { timeout: 5000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-audience.png') });
      console.log('   SUCCESS: first-campaign-audience.png');

      // Control group is on audience tab, scroll down to capture it
      await page.evaluate(() => window.scrollBy(0, 400));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-control.png') });
      console.log('   SUCCESS: first-campaign-control.png');

      // Pages tab
      console.log('\n5. Capturing Pages tab...');
      await page.click('button:has-text("PAGES"), [role="tab"]:has-text("PAGES")', { timeout: 5000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-pages.png') });
      console.log('   SUCCESS: first-campaign-pages.png');

      // Insights tab
      console.log('\n6. Capturing Insights tab...');
      await page.click('button:has-text("INSIGHTS"), [role="tab"]:has-text("INSIGHTS")', { timeout: 5000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(config.outputDir, 'first-campaign-insights.png') });
      console.log('   SUCCESS: first-campaign-insights.png');

    } catch (e) {
      console.log('   Error navigating to campaign:', e.message);
    }

    console.log('\n=============================================');
    console.log('First Campaign tutorial screenshots complete!');
    console.log('=============================================');

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
