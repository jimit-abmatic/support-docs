/**
 * Capture screenshots for Email Campaigns (Sequences) documentation
 */

import { chromium } from 'playwright';
import * as path from 'path';

const config = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

async function main() {
  console.log('🚀 Initializing browser...');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: config.viewport,
    deviceScaleFactor: 2,
    locale: 'en-US',
    timezoneId: 'America/New_York',
  });

  const page = await context.newPage();

  try {
    // Login
    console.log('🔐 Logging in...');
    await page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
    await page.fill('input[type="email"], input[name="email"]', config.email);
    await page.fill('input[type="password"], input[name="password"]', config.password);

    const loginButton = page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
    await loginButton.click();
    await page.waitForTimeout(5000);
    console.log('✅ Login submitted');

    // Screenshot 1: Campaign creation modal showing all types including Sequence
    console.log('📸 Capturing campaign create modal with Sequence option...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    const createButton = page.locator('button:has-text("Create Campaign")').first();
    if (await createButton.isVisible()) {
      await createButton.click();
      await page.waitForTimeout(2000);

      await page.screenshot({
        path: path.join(config.outputDir, 'sequence-create-modal.png'),
        type: 'png',
      });
      console.log('   ✅ Saved: sequence-create-modal.png');

      // Try to click on Sequence to proceed
      const sequenceCard = page.locator('div:has-text("Sequence")').first();
      const sequenceClickable = page.locator('[id="email"]').first();

      if (await sequenceClickable.isVisible()) {
        console.log('📸 Clicking Sequence option...');
        await sequenceClickable.click();
        await page.waitForTimeout(2000);

        // This should show "Select a Collection" step
        await page.screenshot({
          path: path.join(config.outputDir, 'sequence-select-collection.png'),
          type: 'png',
        });
        console.log('   ✅ Saved: sequence-select-collection.png');
      }
    }

    // Screenshot 2: Go to campaigns and look for existing sequence campaigns
    console.log('📸 Capturing campaigns list...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Look for any row that might be a sequence campaign
    // Check the page content to find sequence campaigns
    const pageContent = await page.content();
    console.log('   Looking for sequence/email campaigns...');

    await page.screenshot({
      path: path.join(config.outputDir, 'sequence-campaigns-list.png'),
      type: 'png',
    });
    console.log('   ✅ Saved: sequence-campaigns-list.png');

    // Screenshot 3: Look for existing sequence campaign and open it
    // Navigate directly to a sequence campaign edit page if we know one exists
    console.log('📸 Trying to find and open a sequence campaign...');

    // Try navigating to the campaigns page and clicking on a sequence type
    const campaignRows = await page.locator('.ag-row, tr[role="row"]').all();
    console.log(`   Found ${campaignRows.length} campaign rows`);

    // Check if there's a "Sequence" type indicator
    for (let i = 0; i < Math.min(campaignRows.length, 10); i++) {
      const rowText = await campaignRows[i].textContent();
      if (rowText && (rowText.toLowerCase().includes('sequence') || rowText.toLowerCase().includes('email'))) {
        console.log(`   Found sequence campaign: ${rowText?.substring(0, 50)}...`);
        await campaignRows[i].click();
        await page.waitForTimeout(2000);

        // Take screenshot of sequence campaign detail
        await page.screenshot({
          path: path.join(config.outputDir, 'sequence-campaign-detail.png'),
          type: 'png',
        });
        console.log('   ✅ Saved: sequence-campaign-detail.png');

        // Try to find and click on Sequence/Edit tab to see steps
        const editTab = page.locator('button:has-text("Sequence"), a:has-text("Sequence"), [role="tab"]:has-text("Sequence")').first();
        if (await editTab.isVisible()) {
          await editTab.click();
          await page.waitForTimeout(2000);

          await page.screenshot({
            path: path.join(config.outputDir, 'sequence-steps-grid.png'),
            type: 'png',
          });
          console.log('   ✅ Saved: sequence-steps-grid.png');
        }

        break;
      }
    }

    console.log('\n✅ Screenshot capture complete!');

  } catch (error) {
    console.error('❌ Error:', error);
    await page.screenshot({
      path: path.join(config.outputDir, 'sequence-debug-error.png'),
      type: 'png',
    });
    console.log('   📸 Debug screenshot saved');
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
