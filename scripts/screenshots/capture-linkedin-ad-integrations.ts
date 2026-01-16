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
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: config.viewport,
    deviceScaleFactor: 2,
    locale: 'en-US',
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
    
    // Navigate to integrations and scroll to find Ad Account section
    console.log('📸 Capturing Ad Account integrations...');
    await page.goto(`${config.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Scroll down to find Ad Account integrations
    await page.evaluate(() => {
      window.scrollBy(0, 600);
    });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-ad-integrations.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-ad-integrations.png');
    
    // Capture the Audience tab of a LinkedIn campaign
    console.log('📸 Capturing LinkedIn campaign audience tab...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Click on Confirmed Mu Accounts campaign
    await page.locator('a:has-text("Confirmed Mu Accounts")').first().click();
    await page.waitForTimeout(2000);
    
    // Click on Audience tab
    await page.locator('button:has-text("AUDIENCE"), a:has-text("AUDIENCE")').first().click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-audience.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-audience.png');
    
    // Click on Performance tab
    await page.locator('button:has-text("PERFORMANCE"), a:has-text("PERFORMANCE")').first().click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-performance.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-performance.png');
    
    console.log('✅ Done!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-debug-ad.png'),
      type: 'png'
    });
  } finally {
    await browser.close();
  }
}

main();
