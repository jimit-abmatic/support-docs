/**
 * Capture screenshots for Dynamic Content documentation
 *
 * Screenshots needed:
 * 1. Page editor with Personalize button visible
 * 2. Personalization variables menu showing variable categories
 */

import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const config = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

async function main() {
  console.log('🚀 Starting Dynamic Content screenshot capture...');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: config.viewport,
    deviceScaleFactor: 2,
    locale: 'en-US',
  });

  const page = await context.newPage();

  // Ensure output directory exists
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }

  try {
    // Login
    console.log('🔐 Logging in...');
    await page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
    await page.fill('input[type="email"], input[name="email"]', config.email);
    await page.fill('input[type="password"], input[name="password"]', config.password);

    const loginButton = page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
    await loginButton.click();

    // Wait for home page to load
    await page.waitForTimeout(5000);
    console.log('✅ Logged in successfully');

    // Navigate to campaigns page
    console.log('📍 Navigating to campaigns...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Find "Inbound Enterprise" campaign and click to open it
    console.log('🔍 Looking for Inbound Enterprise campaign...');

    // Click on the campaign link directly
    const campaignLink = page.locator('a:has-text("Inbound Enterprise")').first();
    await campaignLink.click();
    await page.waitForTimeout(3000);

    // Navigate to Pages tab
    console.log('📄 Navigating to Pages tab...');
    const pagesTab = page.locator('button:has-text("Pages"), [role="tab"]:has-text("Pages")').first();
    await pagesTab.click();
    await page.waitForTimeout(2000);

    // Click on the first page link to open the editor
    console.log('✏️ Opening page editor...');

    // Click on the https://abmatic.ai/ link to open the editor
    const pageLink = page.locator('a:has-text("https://abmatic.ai/")').first();
    await pageLink.click();
    await page.waitForTimeout(5000);

    // Check if we're in the editor
    const currentUrl = page.url();
    console.log(`Current URL: ${currentUrl}`);

    // Wait for editor to load
    console.log('⏳ Waiting for editor...');
    await page.waitForSelector('iframe, [class*="Editor"]', { timeout: 15000 }).catch(() => {
      console.log('Editor selector not found, continuing...');
    });
    await page.waitForTimeout(3000);

    // Take first screenshot of the editor
    console.log('📸 Capturing editor view...');
    await page.screenshot({
      path: path.join(config.outputDir, 'dynamic-content-editor.png'),
      type: 'png'
    });
    console.log('✅ Saved: dynamic-content-editor.png');

    // Try to click on a text element in the iframe to show the text editor panel
    console.log('🔍 Trying to select text element...');
    const iframe = page.frameLocator('iframe').first();

    // Try multiple approaches to click on a text element
    const selectorsToTry = [
      'h1:has-text("GTM")',
      'h1:has-text("Grow")',
      'h2',
      'h1',
      '[class*="hero"] h1',
      '[class*="hero"] h2',
      'p',
      'span'
    ];

    let elementClicked = false;
    for (const selector of selectorsToTry) {
      try {
        console.log(`  Trying selector: ${selector}`);
        await iframe.locator(selector).first().click({ timeout: 3000 });
        await page.waitForTimeout(2000);
        elementClicked = true;
        console.log(`  ✅ Clicked element with selector: ${selector}`);
        break;
      } catch (e) {
        console.log(`  Could not click: ${selector}`);
      }
    }

    if (!elementClicked) {
      console.log('⚠️ Could not click any text element in iframe');
      // Try clicking at coordinates
      const iframeElement = page.locator('iframe').first();
      const box = await iframeElement.boundingBox();
      if (box) {
        // Click in the center of the iframe where the heading should be
        await page.mouse.click(box.x + box.width / 2, box.y + 300);
        await page.waitForTimeout(2000);
      }
    }

    // Find and click Personalize button
    console.log('🔍 Looking for Personalize button...');
    const personalizeButton = page.locator('button:has-text("Personalize")').first();

    if (await personalizeButton.count() > 0) {
      // Check if button is enabled
      const isDisabled = await personalizeButton.getAttribute('disabled');
      console.log(`Personalize button found, disabled=${isDisabled}`);

      if (isDisabled === null) {
        console.log('Personalize button is enabled, clicking...');
        await personalizeButton.click();
        await page.waitForTimeout(2000);

        // Screenshot with personalization menu open
        console.log('📸 Capturing personalization menu...');
        await page.screenshot({
          path: path.join(config.outputDir, 'dynamic-content-menu.png'),
          type: 'png'
        });
        console.log('✅ Saved: dynamic-content-menu.png');
      } else {
        console.log('⚠️ Personalize button is disabled - no element selected');
        // Take screenshot of current state with editor open
        await page.screenshot({
          path: path.join(config.outputDir, 'dynamic-content-editor-state.png'),
          type: 'png'
        });
        console.log('✅ Saved: dynamic-content-editor-state.png');
      }
    } else {
      console.log('⚠️ Personalize button not found');
    }

    console.log('\n✅ Screenshot capture complete!');

  } catch (error) {
    console.error('❌ Error:', error);

    // Take debug screenshot
    await page.screenshot({
      path: path.join(config.outputDir, 'dynamic-content-debug.png'),
      type: 'png'
    });
    console.log('Debug screenshot saved');

  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
