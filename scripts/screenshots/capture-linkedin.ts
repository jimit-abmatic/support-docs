import { chromium } from 'playwright';
import type { Browser, Page, BrowserContext } from 'playwright';
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
  console.log('🚀 Starting LinkedIn campaign screenshot capture...');
  
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
    
    // Wait for dashboard to load
    await page.waitForTimeout(5000);
    console.log('✅ Logged in');
    
    // Navigate to campaigns and filter by LinkedIn
    console.log('📸 Capturing LinkedIn campaigns list...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // Click on LinkedIn filter tab (3 LinkedIn campaigns visible in the filter bar)
    const linkedinTab = page.locator('div:has-text("LinkedIn"):near(div:has-text("All Campaigns"))').first();
    try {
      await page.locator('[class*="card"], [class*="filter"]').filter({ hasText: /^3$/i }).first().click();
      await page.waitForTimeout(1000);
    } catch (e) {
      // Try clicking on the LinkedIn text directly
      await page.locator('text=LinkedIn').first().click();
      await page.waitForTimeout(1000);
    }
    
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaigns-list.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaigns-list.png');
    
    // Look for a LinkedIn campaign and click on it
    console.log('📸 Finding LinkedIn campaign...');
    // First scroll through to find a LinkedIn type campaign
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Click the "3" under LinkedIn to filter
    const linkedinCount = page.locator('div').filter({ hasText: /^3$/ }).filter({ has: page.locator(':text("LinkedIn")') });
    // Alternative: find the campaign type filter section
    await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('div'));
      for (const el of elements) {
        if (el.textContent?.includes('3') && el.textContent?.includes('LinkedIn')) {
          const parent = el.closest('[class*="card"]') || el.parentElement;
          if (parent) {
            (parent as HTMLElement).click();
            break;
          }
        }
      }
    });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaigns-filtered.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaigns-filtered.png');
    
    // Navigate to create campaign modal and show LinkedIn option
    console.log('📸 Capturing create campaign modal...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Click create campaign button
    await page.locator('button:has-text("CAMPAIGN")').click();
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-create-modal.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-create-modal.png');
    
    // Click on LinkedIn option
    await page.locator('div:has-text("LinkedIn")').filter({ has: page.locator('img[src*="linkedin"]') }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-campaign-step2.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-campaign-step2.png');
    
    // Capture integrations page showing LinkedIn
    console.log('📸 Capturing integrations page...');
    await page.goto(`${config.baseUrl}/integrations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-integration.png'),
      type: 'png'
    });
    console.log('✅ Saved linkedin-integration.png');
    
    console.log('✅ All LinkedIn screenshots captured!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    // Save a debug screenshot
    await page.screenshot({
      path: path.join(config.outputDir, 'linkedin-debug-error.png'),
      type: 'png'
    });
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

main();
