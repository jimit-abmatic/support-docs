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
  console.log('🚀 Starting LinkedIn screenshot capture (part 3)...');
  
  const browser = await chromium.launch({ headless: true });
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
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.fill('input[type="email"]', config.email);
    await page.fill('input[type="password"]', config.password);
    await page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first().click();
    await page.waitForTimeout(5000);
    console.log('✅ Logged in');
    
    // Capture integrations page showing LinkedIn card
    console.log('📸 Capturing integrations page...');
    await page.goto(`${config.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-integration.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-integration.png');
    
    // Now try to directly navigate to a LinkedIn campaign by constructing the URL
    // Based on the screenshot, we have LinkedIn campaigns like "Confirmed Mu Accounts"
    // Let's try different URL patterns for LinkedIn campaigns
    console.log('📸 Trying to capture LinkedIn campaign detail...');
    
    // Navigate to campaigns and look for the campaign list
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Try clicking the campaign directly by name in the table
    const campaignLink = page.locator('a', { hasText: 'Confirmed Mu Accounts' }).first();
    if (await campaignLink.count() > 0) {
      await campaignLink.click();
      await page.waitForTimeout(3000);
      await page.screenshot({
        path: path.join(config.outputDir, 'linkedin-campaign-detail.png'),
        type: 'png'
      });
      console.log('✅ Saved linkedin-campaign-detail.png');
    } else {
      // Try finding any LinkedIn campaign
      const anyLinkedinCampaign = page.locator('tr:has-text("Linkedin") a').first();
      if (await anyLinkedinCampaign.count() > 0) {
        await anyLinkedinCampaign.click();
        await page.waitForTimeout(3000);
        await page.screenshot({
          path: path.join(config.outputDir, 'linkedin-campaign-detail.png'),
          type: 'png'
        });
        console.log('✅ Saved linkedin-campaign-detail.png');
      } else {
        console.log('⚠️ Could not find LinkedIn campaign in list');
      }
    }
    
    // Create campaign - step 2 (select Account/Contact)
    console.log('📸 Capturing create LinkedIn campaign flow...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    await page.locator('button:has-text("CAMPAIGN")').click();
    await page.waitForTimeout(1500);
    
    // Use ID selector which should be more reliable
    await page.locator('#linkedin').click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-account-select.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-account-select.png');
    
    // Click on Account to proceed
    const accountOption = page.getByText('Account', { exact: false }).filter({ hasText: 'outbound campaign for accounts' });
    if (await accountOption.count() > 0) {
      await accountOption.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(config.outputDir, 'linkedin-campaign-collection-select.png'),
        type: 'png'
      });
      console.log('✅ Saved linkedin-campaign-collection-select.png');
    }
    
    console.log('✅ Screenshot capture complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-debug-error3.png'),
      type: 'png'
    });
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
