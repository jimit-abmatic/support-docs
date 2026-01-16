/**
 * Focused script to capture campaign workflow screenshots
 * - Campaign AUDIENCE tab
 * - Campaign PAGES tab
 * - Page Editor
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
  console.log('Campaign Workflow Screenshot Capture');
  console.log('====================================\n');

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

    // Click first campaign to get campaign ID from URL
    console.log('2. Clicking into first campaign...');

    // Try clicking the campaign name link
    const campaignLink = await page.$('a[href*="/campaigns/"]');
    if (campaignLink) {
      await campaignLink.click();
    } else {
      // Try clicking first row
      await page.click('table tbody tr:first-child', { timeout: 10000 });
    }

    await page.waitForTimeout(8000);

    // Get current URL to extract campaign ID
    const currentUrl = page.url();
    console.log(`   Current URL: ${currentUrl}`);

    // Extract campaign ID from URL
    const match = currentUrl.match(/\/campaigns\/([^\/\?]+)/);
    if (!match) {
      console.log('   Could not extract campaign ID, trying alternative approach...');
      // Take screenshot of whatever we're on
      await page.screenshot({ path: path.join(config.outputDir, 'campaign-insights-tab.png') });
      console.log('   Captured current view as campaign-insights-tab.png');
    } else {
      const campaignId = match[1];
      console.log(`   Campaign ID: ${campaignId}`);

      // Capture INSIGHTS tab (current view)
      console.log('\n3. Capturing INSIGHTS tab...');
      await page.screenshot({ path: path.join(config.outputDir, 'campaign-insights-tab.png') });
      console.log('   SUCCESS: campaign-insights-tab.png');

      // Navigate to AUDIENCE tab
      console.log('\n4. Capturing AUDIENCE tab...');
      try {
        // Click the AUDIENCE tab
        await page.click('button:has-text("AUDIENCE"), [role="tab"]:has-text("AUDIENCE")', { timeout: 5000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-audience-tab.png') });
        console.log('   SUCCESS: campaign-audience-tab.png');
      } catch (e) {
        console.log(`   Tab click failed, trying URL: ${config.baseUrl}/campaigns/${campaignId}/audience`);
        await page.goto(`${config.baseUrl}/campaigns/${campaignId}/audience`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-audience-tab.png') });
        console.log('   SUCCESS: campaign-audience-tab.png');
      }

      // Navigate to PAGES tab
      console.log('\n5. Capturing PAGES tab...');
      try {
        await page.click('button:has-text("PAGES"), [role="tab"]:has-text("PAGES")', { timeout: 5000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-pages-tab.png') });
        console.log('   SUCCESS: campaign-pages-tab.png');
      } catch (e) {
        console.log(`   Tab click failed, trying URL: ${config.baseUrl}/campaigns/${campaignId}/pages`);
        await page.goto(`${config.baseUrl}/campaigns/${campaignId}/pages`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-pages-tab.png') });
        console.log('   SUCCESS: campaign-pages-tab.png');
      }

      // Navigate to ENGAGEMENT tab
      console.log('\n6. Capturing ENGAGEMENT tab...');
      try {
        await page.click('button:has-text("ENGAGEMENT"), [role="tab"]:has-text("ENGAGEMENT")', { timeout: 5000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-engagement-tab.png') });
        console.log('   SUCCESS: campaign-engagement-tab.png');
      } catch (e) {
        console.log(`   Tab click failed, trying URL: ${config.baseUrl}/campaigns/${campaignId}/engagement`);
        await page.goto(`${config.baseUrl}/campaigns/${campaignId}/engagement`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-engagement-tab.png') });
        console.log('   SUCCESS: campaign-engagement-tab.png');
      }

      // Navigate to PERFORMANCE tab
      console.log('\n7. Capturing PERFORMANCE tab...');
      try {
        await page.click('button:has-text("PERFORMANCE"), [role="tab"]:has-text("PERFORMANCE")', { timeout: 5000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-performance-tab.png') });
        console.log('   SUCCESS: campaign-performance-tab.png');
      } catch (e) {
        console.log(`   Tab click failed, trying URL: ${config.baseUrl}/campaigns/${campaignId}/performance`);
        await page.goto(`${config.baseUrl}/campaigns/${campaignId}/performance`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-performance-tab.png') });
        console.log('   SUCCESS: campaign-performance-tab.png');
      }
    }

    // Try to capture page editor
    console.log('\n8. Attempting to capture page editor...');
    // Go back to pages tab and try to click into editor
    try {
      await page.click('button:has-text("PAGES"), [role="tab"]:has-text("PAGES")', { timeout: 5000 });
      await page.waitForTimeout(3000);

      // Look for an edit button or page link
      const editBtn = await page.$('button:has-text("Edit"), a:has-text("Edit"), [aria-label*="edit" i]');
      if (editBtn) {
        await editBtn.click();
        await page.waitForTimeout(8000);
        await page.screenshot({ path: path.join(config.outputDir, 'campaign-page-editor.png') });
        console.log('   SUCCESS: campaign-page-editor.png');
      } else {
        console.log('   No edit button found - page editor may require a page to be added first');
      }
    } catch (e) {
      console.log(`   Could not capture page editor: ${e.message}`);
    }

    console.log('\n====================================');
    console.log('Campaign workflow capture complete!');
    console.log('====================================');

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
