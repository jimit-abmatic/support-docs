/**
 * Capture A/B Testing screenshots for documentation
 */

import { chromium } from 'playwright';
import type { Browser, Page, BrowserContext } from 'playwright';
import * as path from 'path';

const config = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

async function main() {
  console.log('Starting A/B Testing screenshot capture...');

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
    console.log('Logging in...');
    await page.goto(`${config.baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
    await page.fill('input[type="email"], input[name="email"]', config.email);
    await page.fill('input[type="password"], input[name="password"]', config.password);

    const loginButton = page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
    await loginButton.click();
    await page.waitForURL('**/home-dashboard**', { timeout: 30000 });
    console.log('Logged in successfully');

    // Navigate to campaigns list
    console.log('Navigating to campaigns...');
    await page.goto(`${config.baseUrl}/campaigns`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Find "Inbound - Enterprise" campaign and get its ID
    // Click on the campaign to open it
    console.log('Looking for Inbound - Enterprise campaign...');

    // Try to find the campaign row
    const campaignRow = page.locator('text=Inbound - Enterprise').first();
    if (await campaignRow.isVisible()) {
      await campaignRow.click();
      await page.waitForTimeout(2000);

      // Now we're in the campaign detail - go to insights
      console.log('Navigating to Insights tab...');
      const insightsTab = page.locator('button:has-text("Insights"), [role="tab"]:has-text("Insights")').first();
      if (await insightsTab.isVisible()) {
        await insightsTab.click();
        await page.waitForTimeout(3000);

        // Capture insights screenshot showing personalized vs control
        console.log('Capturing insights screenshot...');
        await page.screenshot({
          path: path.join(config.outputDir, 'ab-control-insights.png'),
          type: 'png'
        });
        console.log('Saved ab-control-insights.png');
      }

      // Now capture the status/control dropdown
      console.log('Looking for status dropdown...');

      // Look for the status indicator - it might be a chip or button
      const statusChip = page.locator('[class*="MuiChip"], [class*="EnumChip"], button:has-text("Ongoing"), button:has-text("Experiment"), button:has-text("personalization")').first();

      if (await statusChip.isVisible()) {
        console.log('Found status chip, clicking...');
        await statusChip.click();
        await page.waitForTimeout(1000);

        // Capture the dropdown menu
        await page.screenshot({
          path: path.join(config.outputDir, 'ab-control-settings.png'),
          type: 'png'
        });
        console.log('Saved ab-control-settings.png');

        // Close the menu
        await page.keyboard.press('Escape');
      } else {
        console.log('Status chip not found, trying alternate selectors...');

        // Try looking in the campaign header
        const headerArea = page.locator('[class*="campaign-header"], .MuiToolbar-root, header').first();
        await headerArea.screenshot({
          path: path.join(config.outputDir, 'ab-control-settings-header.png'),
          type: 'png'
        });
      }
    } else {
      console.log('Inbound - Enterprise campaign not found, using first available campaign...');

      // Click on the first campaign
      const firstCampaign = page.locator('[class*="ag-row"], .MuiTableRow-root').first();
      if (await firstCampaign.isVisible()) {
        await firstCampaign.click();
        await page.waitForTimeout(2000);

        // Screenshot of campaign detail
        await page.screenshot({
          path: path.join(config.outputDir, 'ab-control-insights.png'),
          type: 'png'
        });
      }
    }

    console.log('Screenshot capture complete!');

  } catch (error) {
    console.error('Error during capture:', error);

    // Take a debug screenshot
    await page.screenshot({
      path: path.join(config.outputDir, 'ab-debug-error.png'),
      type: 'png'
    });
    console.log('Saved debug screenshot');
  } finally {
    await browser.close();
  }
}

main();
