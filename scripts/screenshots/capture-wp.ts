/**
 * Capture screenshots for Website Personalization doc
 * Uses "Inbound Enterprise" campaign as the example
 */

import { chromium } from 'playwright';

const config = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
};

async function main() {
  console.log('🚀 Starting Website Personalization screenshot capture...');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    locale: 'en-US',
  });

  const page = await context.newPage();

  try {
    // Login
    console.log('🔐 Logging in...');
    await page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.fill('input[type="email"]', config.email);
    await page.fill('input[type="password"]', config.password);
    await page.click('button:has-text("SIGN IN")');

    // Wait a bit for login to complete
    await page.waitForTimeout(5000);

    // 1. Capture campaign create modal
    console.log('📸 Capturing campaign create modal...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Click the + CAMPAIGN button
    await page.click('button:has-text("CAMPAIGN")');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${config.outputDir}/wp-create-modal.png` });
    console.log('   ✅ wp-create-modal.png');

    // Close the modal by clicking the X button
    await page.click('button:has-text("×"), [aria-label="close"], .MuiDialog-root button:first-child');
    await page.waitForTimeout(1000);

    // If modal still open, try clicking outside
    try {
      const modalBackdrop = page.locator('.MuiBackdrop-root');
      if (await modalBackdrop.isVisible()) {
        await page.mouse.click(10, 10);
        await page.waitForTimeout(500);
      }
    } catch (e) {
      // Modal probably closed already
    }

    // 2. Navigate to Inbound Enterprise campaign
    console.log('📸 Finding Inbound Enterprise campaign...');

    // Click on Inbound Enterprise in the list
    await page.click('text=Inbound Enterprise');
    await page.waitForTimeout(3000);

    // 3. Capture INSIGHTS tab (default)
    console.log('📸 Capturing insights tab...');
    await page.screenshot({ path: `${config.outputDir}/wp-insights-tab.png` });
    console.log('   ✅ wp-insights-tab.png');

    // 4. Click AUDIENCE tab and capture
    console.log('📸 Capturing audience tab...');
    await page.click('button:has-text("AUDIENCE"), [role="tab"]:has-text("AUDIENCE")');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${config.outputDir}/wp-audience-tab.png` });
    console.log('   ✅ wp-audience-tab.png');

    // 5. Click PAGES tab and capture
    console.log('📸 Capturing pages tab...');
    await page.click('button:has-text("PAGES"), [role="tab"]:has-text("PAGES")');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${config.outputDir}/wp-pages-tab.png` });
    console.log('   ✅ wp-pages-tab.png');

    // 6. Click ENGAGEMENT tab and capture
    console.log('📸 Capturing engagement tab...');
    await page.click('button:has-text("ENGAGEMENT"), [role="tab"]:has-text("ENGAGEMENT")');
    await page.waitForTimeout(5000); // Wait longer for data to load
    await page.screenshot({ path: `${config.outputDir}/wp-engagement-tab.png` });
    console.log('   ✅ wp-engagement-tab.png');

    // 7. Click PERFORMANCE tab and capture
    console.log('📸 Capturing performance tab...');
    await page.click('button:has-text("PERFORMANCE"), [role="tab"]:has-text("PERFORMANCE")');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${config.outputDir}/wp-performance-tab.png` });
    console.log('   ✅ wp-performance-tab.png');

    console.log('\n✅ All screenshots captured successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
    // Take a debug screenshot
    await page.screenshot({ path: `${config.outputDir}/wp-debug-error.png` });
    console.log('Debug screenshot saved to wp-debug-error.png');
  } finally {
    await browser.close();
  }
}

main();
