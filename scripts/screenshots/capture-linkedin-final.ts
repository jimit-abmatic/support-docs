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
    
    // Navigate to integrations and scroll all the way down to find Ad Account section
    console.log('📸 Looking for Ad Account integrations with LinkedIn...');
    await page.goto(`${config.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-ad-integrations-bottom.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-ad-integrations-bottom.png');
    
    // Try full page capture
    await page.screenshot({
      path: path.join(config.outputDir, 'integrations-fullpage.png'),
      type: 'png',
      fullPage: true
    });
    console.log('✅ Saved integrations-fullpage.png');
    
    console.log('✅ Done!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
  }
}

main();
