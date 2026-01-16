/**
 * Capture Page Editor screenshots for documentation
 * Uses "Inbound Enterprise" campaign as example
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
  console.log('🚀 Starting Page Editor screenshot capture...');

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
    // Wait for dashboard to load
    await Promise.race([
      page.waitForURL('**/home**', { timeout: 30000 }),
      page.waitForSelector('[class*="dashboard"], [class*="home"]', { timeout: 30000 })
    ]).catch(() => {});
    await page.waitForTimeout(2000);
    console.log('✅ Logged in');

    // Navigate to campaigns
    console.log('📸 Navigating to campaigns...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Click on Inbound Enterprise campaign
    console.log('🔍 Looking for Inbound Enterprise campaign...');
    const campaignLink = page.locator('a:has-text("Inbound Enterprise"), td:has-text("Inbound Enterprise")').first();

    if (await campaignLink.count() > 0) {
      await campaignLink.click();
      await page.waitForTimeout(2000);
      console.log('✅ Opened Inbound Enterprise campaign');

      // Click on Pages tab
      console.log('📄 Clicking Pages tab...');
      const pagesTab = page.locator('[role="tab"]:has-text("Pages"), button:has-text("Pages")').first();
      if (await pagesTab.count() > 0) {
        await pagesTab.click();
        await page.waitForTimeout(2000);

        // Screenshot: Pages tab showing page list
        await page.screenshot({
          path: path.join(config.outputDir, 'page-editor-pages-list.png'),
          type: 'png'
        });
        console.log('✅ Captured: page-editor-pages-list.png');

        // Look at the rows and find an Edit link/icon
        // The URL in the page row should be clickable - let's click on the actual page link
        const pageLink = page.locator('a[href*="editor"]').first();

        if (await pageLink.count() > 0) {
          console.log('🔍 Found editor link, clicking...');
          await pageLink.click();
        } else {
          // Try clicking on the small edit icon (typically appears on hover)
          // First hover over the first page row
          const firstRow = page.locator('tbody tr').first();
          await firstRow.hover();
          await page.waitForTimeout(500);

          // Look for any edit-related button or icon
          const editLink = page.locator('[href*="/editor"], a:has-text("Edit"), [data-testid*="edit"], [aria-label*="edit"]').first();

          if (await editLink.count() > 0) {
            console.log('🔍 Found edit link after hover, clicking...');
            await editLink.click();
          } else {
            // Try clicking on the link icon next to URL
            const linkIcon = page.locator('svg[data-testid="LinkIcon"], a svg, [class*="icon"]').first();
            if (await linkIcon.count() > 0) {
              console.log('🔍 Trying link icon...');
              await linkIcon.click();
            }
          }
        }

        await page.waitForTimeout(3000);

        // Check current URL
        const currentUrl = page.url();
        console.log(`📍 Current URL: ${currentUrl}`);

        if (currentUrl.includes('/editor')) {
          console.log('✅ In editor view');
          await page.waitForTimeout(5000); // Extra time for editor to fully load

          // Screenshot: Full editor view
          await page.screenshot({
            path: path.join(config.outputDir, 'page-editor-main.png'),
            type: 'png'
          });
          console.log('✅ Captured: page-editor-main.png');
        } else {
          console.log('⚠️ Not in editor, taking debug screenshot');
          await page.screenshot({
            path: path.join(config.outputDir, 'page-editor-debug.png'),
            type: 'png'
          });

          // Try direct navigation to editor using the campaign ID from URL
          const campaignId = currentUrl.match(/campaigns\/inbound\/([^/]+)/)?.[1];
          if (campaignId) {
            // Get first page ID from API or try known patterns
            console.log('📍 Trying direct editor URL...');
            // Let's try clicking on the page URL link directly
            const pageUrlLink = page.locator('tbody tr td a').first();
            if (await pageUrlLink.count() > 0) {
              const href = await pageUrlLink.getAttribute('href');
              console.log(`📍 Page link href: ${href}`);

              // The link might be an external URL, we need the edit action
              // Let's right-click or look for action menu
              await pageUrlLink.click({ button: 'right' });
              await page.waitForTimeout(500);

              await page.screenshot({
                path: path.join(config.outputDir, 'page-editor-context.png'),
                type: 'png'
              });
            }
          }
        }
      }
    }

    console.log('\n📊 Screenshot capture complete');

  } catch (error) {
    console.error('❌ Error:', error);
    await page.screenshot({
      path: path.join(config.outputDir, 'page-editor-error.png'),
      type: 'png'
    });
    console.log('📸 Error screenshot saved');
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
