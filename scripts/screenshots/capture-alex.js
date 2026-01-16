const { chromium } = require('playwright');
const path = require('path');

const config = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
};

async function captureAlex() {
  console.log('🚀 Starting browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  try {
    // Go to login
    console.log('🔐 Logging in...');
    await page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });

    // Fill email
    await page.fill('input[type="email"]', config.email);
    await page.fill('input[type="password"]', config.password);

    // Click the SIGN IN button
    await page.click('button:has-text("SIGN IN")');

    // Wait for any navigation after login (dashboard loads at root or /home-dashboard)
    await page.waitForTimeout(3000);

    // Check if we're logged in by looking for navigation or dashboard content
    const currentUrl = page.url();
    console.log('Current URL:', currentUrl);

    if (currentUrl.includes('login')) {
      throw new Error('Still on login page - credentials may be incorrect');
    }
    console.log('✅ Logged in successfully');

    // Navigate to Alex
    console.log('📸 Navigating to Alex SDR...');
    await page.goto(`${config.baseUrl}/ai-agents/alex`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Capture screenshot
    const outputPath = path.join(config.outputDir, 'alex-sdr-main.png');
    await page.screenshot({ path: outputPath });
    console.log(`✅ Screenshot saved: ${outputPath}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

captureAlex();
