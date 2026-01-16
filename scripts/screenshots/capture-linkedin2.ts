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
  console.log('🚀 Starting LinkedIn campaign screenshot capture (part 2)...');
  
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
    
    // Go to a specific LinkedIn campaign - "Confirmed Mu Accounts"
    console.log('📸 Capturing LinkedIn campaign detail...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Click on LinkedIn tab first
    await page.locator('div:has-text("LinkedIn")').filter({ hasText: /^3$/ }).first().click();
    await page.waitForTimeout(1500);
    
    // Click on the first LinkedIn campaign
    await page.locator('a:has-text("Confirmed Mu Accounts")').first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-main.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-main.png');
    
    // Capture integrations page showing LinkedIn
    console.log('📸 Capturing integrations page with LinkedIn card...');
    await page.goto(`${config.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-integration.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-integration.png');
    
    // Capture the create campaign flow - step 2 (account/contact selection)
    console.log('📸 Capturing create campaign step 2...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Click create campaign button
    await page.locator('button:has-text("CAMPAIGN")').click();
    await page.waitForTimeout(1500);
    
    // Click on LinkedIn using id
    await page.locator('#linkedin').click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-step2.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-step2.png');
    
    // Click Account
    await page.locator('div:has-text("Account")').filter({ hasText: 'Create an outbound campaign for accounts' }).first().click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-step3.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-step3.png');
    
    console.log('✅ All LinkedIn screenshots captured!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    // Save a debug screenshot
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-debug-error2.png'),
      type: 'png'
    });
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
