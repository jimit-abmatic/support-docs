/**
 * Abmatic AI Documentation Screenshot Automation Tool
 *
 * This tool automates the capture of screenshots from the Abmatic AI platform
 * for use in documentation. It handles login, navigation, and capturing
 * high-quality screenshots with optional element highlighting.
 *
 * Usage:
 *   npx ts-node scripts/screenshots/screenshot-tool.ts <command> [options]
 *
 * Commands:
 *   capture <page>     - Capture screenshot of a specific page
 *   batch <config>     - Run batch capture from config file
 *   interactive        - Interactive mode with CLI prompts
 */

import { chromium, Browser, Page, BrowserContext } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
interface ScreenshotConfig {
  baseUrl: string;
  email: string;
  password: string;
  outputDir: string;
  viewport: { width: number; height: number };
}

interface PageCapture {
  name: string;           // Screenshot filename (without extension)
  path: string;           // URL path after base URL
  selector?: string;      // Optional: capture specific element
  clickBefore?: string[]; // Optional: selectors to click before capture
  waitFor?: string;       // Optional: selector to wait for
  delay?: number;         // Optional: delay in ms before capture
  fullPage?: boolean;     // Capture full page or viewport only
  description?: string;   // Description for documentation
}

// Default configuration
const defaultConfig: ScreenshotConfig = {
  baseUrl: 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

class AbmaticScreenshotTool {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  private config: ScreenshotConfig;
  private isLoggedIn: boolean = false;

  constructor(config: Partial<ScreenshotConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Initialize the browser
   */
  async init(): Promise<void> {
    console.log('🚀 Initializing browser...');

    this.browser = await chromium.launch({
      headless: true, // Set to false for debugging
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.context = await this.browser.newContext({
      viewport: this.config.viewport,
      deviceScaleFactor: 2, // Retina quality screenshots
      locale: 'en-US',
      timezoneId: 'America/New_York',
    });

    this.page = await this.context.newPage();

    // Ensure output directory exists
    if (!fs.existsSync(this.config.outputDir)) {
      fs.mkdirSync(this.config.outputDir, { recursive: true });
    }

    console.log('✅ Browser initialized');
  }

  /**
   * Login to Abmatic AI platform
   */
  async login(): Promise<boolean> {
    if (!this.page) throw new Error('Browser not initialized');
    if (this.isLoggedIn) return true;

    console.log('🔐 Logging in to Abmatic AI...');

    try {
      await this.page.goto(`${this.config.baseUrl}/login`, {
        waitUntil: 'networkidle'
      });

      // Wait for login form
      await this.page.waitForSelector('input[type="email"], input[name="email"]', {
        timeout: 10000
      });

      // Fill credentials
      await this.page.fill('input[type="email"], input[name="email"]', this.config.email);
      await this.page.fill('input[type="password"], input[name="password"]', this.config.password);

      // Click login button - try multiple selectors
      const loginButton = this.page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
      await loginButton.click();

      // Wait for navigation to dashboard
      await this.page.waitForURL('**/home-dashboard**', { timeout: 30000 });

      this.isLoggedIn = true;
      console.log('✅ Successfully logged in');
      return true;

    } catch (error) {
      console.error('❌ Login failed:', error);
      return false;
    }
  }

  /**
   * Capture a single screenshot
   */
  async capture(pageCapture: PageCapture): Promise<string | null> {
    if (!this.page) throw new Error('Browser not initialized');

    console.log(`📸 Capturing: ${pageCapture.name}`);
    console.log(`   Path: ${pageCapture.path}`);

    try {
      // Navigate to page
      const url = `${this.config.baseUrl}${pageCapture.path}`;
      await this.page.goto(url, { waitUntil: 'networkidle' });

      // Wait for specific element if specified
      if (pageCapture.waitFor) {
        console.log(`   Waiting for: ${pageCapture.waitFor}`);
        await this.page.waitForSelector(pageCapture.waitFor, { timeout: 15000 });
      }

      // Click elements if specified (for opening modals, dropdowns, etc.)
      if (pageCapture.clickBefore && pageCapture.clickBefore.length > 0) {
        for (const selector of pageCapture.clickBefore) {
          console.log(`   Clicking: ${selector}`);
          await this.page.click(selector);
          await this.page.waitForTimeout(500);
        }
      }

      // Additional delay if specified
      if (pageCapture.delay) {
        await this.page.waitForTimeout(pageCapture.delay);
      }

      // Determine what to capture
      let screenshotOptions: any = {
        path: path.join(this.config.outputDir, `${pageCapture.name}.png`),
        type: 'png',
      };

      if (pageCapture.selector) {
        // Capture specific element
        const element = await this.page.$(pageCapture.selector);
        if (element) {
          await element.screenshot(screenshotOptions);
        } else {
          console.warn(`   ⚠️ Element not found: ${pageCapture.selector}`);
          return null;
        }
      } else {
        // Capture page
        screenshotOptions.fullPage = pageCapture.fullPage ?? false;
        await this.page.screenshot(screenshotOptions);
      }

      console.log(`   ✅ Saved: ${screenshotOptions.path}`);
      return screenshotOptions.path;

    } catch (error) {
      console.error(`   ❌ Failed to capture ${pageCapture.name}:`, error);
      return null;
    }
  }

  /**
   * Capture multiple screenshots from a configuration
   */
  async batchCapture(pages: PageCapture[]): Promise<Map<string, string | null>> {
    const results = new Map<string, string | null>();

    // Ensure logged in
    if (!this.isLoggedIn) {
      const success = await this.login();
      if (!success) {
        console.error('❌ Cannot proceed without login');
        return results;
      }
    }

    console.log(`\n📚 Starting batch capture of ${pages.length} screenshots...\n`);

    for (const pageCapture of pages) {
      const result = await this.capture(pageCapture);
      results.set(pageCapture.name, result);
    }

    // Summary
    const successful = Array.from(results.values()).filter(v => v !== null).length;
    console.log(`\n📊 Batch complete: ${successful}/${pages.length} successful`);

    return results;
  }

  /**
   * Verify screenshot content (basic check that page loaded correctly)
   */
  async verifyPageContent(expectedText: string): Promise<boolean> {
    if (!this.page) return false;

    const content = await this.page.textContent('body');
    return content?.includes(expectedText) ?? false;
  }

  /**
   * Get current page title for verification
   */
  async getPageTitle(): Promise<string> {
    if (!this.page) return '';
    return await this.page.title();
  }

  /**
   * Close the browser
   */
  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

// Pre-defined page captures for Abmatic documentation
const ABMATIC_PAGES: PageCapture[] = [
  // Getting Started
  {
    name: 'dashboard-overview',
    path: '/home-dashboard',
    description: 'Main dashboard overview',
    waitFor: '.dashboard-container, [class*="dashboard"]',
    delay: 2000,
  },

  // AI Agents
  {
    name: 'ai-agents-hub',
    path: '/ai-agents',
    description: 'AI Agents selection hub',
    waitFor: '[class*="agent"], .agent-card',
    delay: 1500,
  },

  // Campaigns
  {
    name: 'campaigns-list',
    path: '/campaigns',
    description: 'Campaigns list view',
    delay: 2000,
  },
  {
    name: 'campaign-create',
    path: '/campaigns',
    description: 'Campaign creation modal',
    clickBefore: ['button:has-text("Create"), [class*="create-button"]'],
    delay: 1000,
  },

  // Audiences
  {
    name: 'accounts-list',
    path: '/accounts',
    description: 'Target accounts list',
    delay: 2000,
  },
  {
    name: 'contacts-list',
    path: '/contacts',
    description: 'Contacts list',
    delay: 2000,
  },
  {
    name: 'groups-list',
    path: '/groups',
    description: 'Target groups list',
    delay: 2000,
  },

  // Conversions
  {
    name: 'conversions-overview',
    path: '/conversions',
    description: 'Conversions tracking overview',
    delay: 2000,
  },

  // Integrations
  {
    name: 'integrations-hub',
    path: '/integrations',
    description: 'Integrations hub showing all available integrations',
    delay: 2000,
  },

  // Analytics
  {
    name: 'analytics-reports',
    path: '/analytics/reports',
    description: 'Analytics reports view',
    delay: 2000,
  },
  {
    name: 'analytics-dashboards',
    path: '/analytics/dashboards',
    description: 'Analytics dashboards',
    delay: 2000,
  },

  // Settings
  {
    name: 'settings-account',
    path: '/settings/account-info',
    description: 'Account settings',
    delay: 1500,
  },
  {
    name: 'settings-script',
    path: '/settings/script',
    description: 'Script installation settings',
    delay: 1500,
  },
  {
    name: 'settings-users',
    path: '/settings/users',
    description: 'User management',
    delay: 1500,
  },
];

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  const tool = new AbmaticScreenshotTool({
    email: process.env.ABMATIC_EMAIL,
    password: process.env.ABMATIC_PASSWORD,
  });

  try {
    await tool.init();

    switch (command) {
      case 'capture':
        const pageName = args[1];
        const pagePath = args[2];
        if (!pageName || !pagePath) {
          console.log('Usage: capture <name> <path>');
          console.log('Example: capture dashboard /home-dashboard');
          break;
        }
        await tool.login();
        await tool.capture({ name: pageName, path: pagePath });
        break;

      case 'batch':
        await tool.batchCapture(ABMATIC_PAGES);
        break;

      case 'list':
        console.log('\nAvailable pre-defined pages:');
        ABMATIC_PAGES.forEach(p => {
          console.log(`  ${p.name.padEnd(25)} - ${p.path}`);
        });
        break;

      default:
        console.log(`
Abmatic AI Screenshot Tool

Commands:
  capture <name> <path>  - Capture a single screenshot
  batch                  - Capture all pre-defined pages
  list                   - List pre-defined pages

Environment Variables:
  ABMATIC_EMAIL          - Login email
  ABMATIC_PASSWORD       - Login password

Examples:
  ABMATIC_EMAIL=user@example.com ABMATIC_PASSWORD=xxx npx ts-node screenshot-tool.ts batch
  npx ts-node screenshot-tool.ts capture my-page /some/path
        `);
    }
  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    await tool.close();
  }
}

// Export for programmatic use
export { AbmaticScreenshotTool, ABMATIC_PAGES };
export type { PageCapture, ScreenshotConfig };

// Run if called directly
if (require.main === module) {
  main();
}
