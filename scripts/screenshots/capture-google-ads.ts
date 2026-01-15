/**
 * Google Ads Documentation Screenshot Capture Script
 * Captures screenshots for the Google Ads campaigns documentation
 */

import { chromium } from 'playwright';
import type { Browser, Page, BrowserContext } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const CONFIG = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

async function main() {
  console.log('🚀 Starting Google Ads screenshot capture...');

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: CONFIG.viewport,
    deviceScaleFactor: 2,
    locale: 'en-US',
    timezoneId: 'America/New_York',
  });

  const page = await context.newPage();

  try {
    // Login
    console.log('🔐 Logging in...');
    await page.goto(`${CONFIG.baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
    await page.fill('input[type="email"], input[name="email"]', CONFIG.email);
    await page.fill('input[type="password"], input[name="password"]', CONFIG.password);

    const loginButton = page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
    await loginButton.click();

    // Wait for either dashboard or any authenticated page indicator
    await Promise.race([
      page.waitForURL('**/home-dashboard**', { timeout: 30000 }),
      page.waitForURL('**/campaigns**', { timeout: 30000 }),
      page.waitForURL('**/accounts**', { timeout: 30000 }),
      page.waitForSelector('[class*="side-nav"], [class*="SideNav"], nav', { timeout: 30000 })
    ]);
    console.log('✅ Logged in successfully');

    // 1. Capture Integrations page showing Google Ads card
    console.log('📸 Capturing integrations-google-ads.png...');
    await page.goto(`${CONFIG.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(CONFIG.outputDir, 'integrations-google-ads.png'),
      type: 'png'
    });
    console.log('   ✅ Saved integrations-google-ads.png');

    // 2. Capture Accounts page with collections
    console.log('📸 Capturing google-ads-accounts-list.png...');
    await page.goto(`${CONFIG.baseUrl}/accounts`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(CONFIG.outputDir, 'google-ads-accounts-list.png'),
      type: 'png'
    });
    console.log('   ✅ Saved google-ads-accounts-list.png');

    // 3. Look for a collection to select and show the more menu
    console.log('📸 Capturing google-ads-collection-menu.png...');
    // Click on a row checkbox first
    const checkboxes = page.locator('.ag-selection-checkbox, [role="checkbox"], input[type="checkbox"]');
    const checkboxCount = await checkboxes.count();
    if (checkboxCount > 1) {
      // Click first data row checkbox (skip header)
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);
    }

    // Click the more menu button
    const moreButton = page.locator('[aria-controls="menu-resource-rows"], button:has([data-testid="MoreVertIcon"]), button svg[data-testid="MoreVertIcon"]').first();
    const moreButtonExists = await moreButton.count() > 0;
    if (moreButtonExists) {
      await moreButton.click();
      await page.waitForTimeout(500);
    }

    await page.screenshot({
      path: path.join(CONFIG.outputDir, 'google-ads-collection-menu.png'),
      type: 'png'
    });
    console.log('   ✅ Saved google-ads-collection-menu.png');

    // Close menu by pressing Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 4. Capture Contacts page
    console.log('📸 Capturing google-ads-contacts-list.png...');
    await page.goto(`${CONFIG.baseUrl}/contacts`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(CONFIG.outputDir, 'google-ads-contacts-list.png'),
      type: 'png'
    });
    console.log('   ✅ Saved google-ads-contacts-list.png');

    console.log('\n📊 Google Ads screenshot capture complete!');
    console.log('Screenshots saved to:', CONFIG.outputDir);

  } catch (error) {
    console.error('❌ Error during capture:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main().catch(console.error);
