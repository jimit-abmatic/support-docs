/**
 * Multi-Capture Screenshot Tool for Ralph Wiggum Loop
 *
 * This tool captures screenshots at multiple delay intervals (5s, 10s, 15s, 20s, 30s)
 * and allows selection of the best one. It ensures proper login, validates content,
 * and provides quality checks.
 *
 * Usage:
 *   npx ts-node scripts/screenshots/multi-capture.ts <command> [options]
 *
 * Commands:
 *   multi <name> <path>       - Capture at multiple delays, save all versions
 *   verify <name>             - Check if screenshot has real content (not login page)
 *   validate <docPath>        - Validate screenshots match doc content
 *   audit <dir>               - Audit all screenshots for quality issues
 */

import { chromium } from 'playwright';
import type { Browser, Page, BrowserContext } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

interface CaptureConfig {
  baseUrl: string;
  email: string;
  password: string;
  outputDir: string;
  viewport: { width: number; height: number };
}

interface MultiCaptureResult {
  name: string;
  delays: number[];
  files: { delay: number; path: string; hasContent: boolean; score: number }[];
  bestFile: string | null;
  issues: string[];
}

interface ScreenshotAuditResult {
  file: string;
  hasLoginPage: boolean;
  hasContent: boolean;
  hasLoadingSpinner: boolean;
  hasEmptyState: boolean;
  fileSize: number;
  score: number;
  issues: string[];
}

const config: CaptureConfig = {
  baseUrl: process.env.ABMATIC_BASE_URL || 'https://app.abmatic.ai',
  email: process.env.ABMATIC_EMAIL || '',
  password: process.env.ABMATIC_PASSWORD || '',
  outputDir: './static/img/screenshots',
  viewport: { width: 1440, height: 900 }
};

// Delays to capture at (in milliseconds)
const CAPTURE_DELAYS = [5000, 10000, 15000, 20000, 30000];

// Content indicators for quality checks
const LOGIN_INDICATORS = [
  'Sign In',
  'Log In',
  'Enter your email',
  'Enter your password',
  'Forgot password',
  'Create account'
];

const LOADING_INDICATORS = [
  'Loading...',
  'Please wait',
  'Fetching data',
  'spinner',
  'loading-indicator'
];

const EMPTY_STATE_INDICATORS = [
  'No data',
  'No results',
  'Nothing to show',
  'Get started',
  'No items found',
  'Empty'
];

class MultiCaptureScreenshotTool {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  private isLoggedIn: boolean = false;

  async init(): Promise<void> {
    console.log('Initializing browser...');

    this.browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.context = await this.browser.newContext({
      viewport: config.viewport,
      deviceScaleFactor: 2,
      locale: 'en-US',
      timezoneId: 'America/New_York',
    });

    this.page = await this.context.newPage();

    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    console.log('Browser initialized');
  }

  async login(): Promise<boolean> {
    if (!this.page) throw new Error('Browser not initialized');
    if (this.isLoggedIn) return true;

    console.log('Logging in to Abmatic AI...');

    try {
      await this.page.goto(`${config.baseUrl}/login`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait for login form
      await this.page.waitForSelector('input[type="email"], input[name="email"]', {
        timeout: 10000
      });

      // Fill credentials
      await this.page.fill('input[type="email"], input[name="email"]', config.email);
      await this.page.fill('input[type="password"], input[name="password"]', config.password);

      // Click login button
      const loginButton = this.page.locator('button:has-text("SIGN IN"), button:has-text("Sign In"), button[type="submit"]').first();
      await loginButton.click();

      // Wait for navigation to dashboard with extended timeout
      await this.page.waitForURL('**/home-dashboard**', { timeout: 60000 });

      // Extra wait to ensure session is established
      await this.page.waitForTimeout(3000);

      this.isLoggedIn = true;
      console.log('Successfully logged in');
      return true;

    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  /**
   * Verify login state and re-login if needed
   */
  async ensureLoggedIn(): Promise<boolean> {
    if (!this.page) return false;

    // Check if we're on a login page
    const currentUrl = this.page.url();
    const pageContent = await this.page.textContent('body');

    const isOnLoginPage = currentUrl.includes('/login') ||
      LOGIN_INDICATORS.some(indicator => pageContent?.includes(indicator));

    if (isOnLoginPage) {
      console.log('Session expired or on login page. Re-authenticating...');
      this.isLoggedIn = false;
      return await this.login();
    }

    return true;
  }

  /**
   * Check if a screenshot file shows login page
   */
  async checkForLoginPage(): Promise<boolean> {
    if (!this.page) return true;

    const content = await this.page.textContent('body');
    const url = this.page.url();

    if (url.includes('/login')) return true;

    for (const indicator of LOGIN_INDICATORS) {
      if (content?.includes(indicator)) {
        // Check if it's actually a login FORM not just text
        const hasLoginForm = await this.page.$('input[type="password"]');
        if (hasLoginForm) return true;
      }
    }

    return false;
  }

  /**
   * Check if page has real content (not loading/empty)
   */
  async checkForContent(): Promise<{ hasContent: boolean; issues: string[] }> {
    if (!this.page) return { hasContent: false, issues: ['No page'] };

    const issues: string[] = [];
    const content = await this.page.textContent('body') || '';

    // Check for loading indicators
    for (const indicator of LOADING_INDICATORS) {
      if (content.includes(indicator)) {
        issues.push(`Loading indicator found: "${indicator}"`);
      }
    }

    // Check for empty state indicators
    for (const indicator of EMPTY_STATE_INDICATORS) {
      if (content.includes(indicator)) {
        issues.push(`Empty state found: "${indicator}"`);
      }
    }

    // Check for actual data elements
    const dataElements = await this.page.$$('table tr, .card, .list-item, [class*="row"], [class*="item"], chart, svg');
    const hasDataElements = dataElements.length > 3;

    // Check for meaningful text content (more than just navigation)
    const textLength = content.replace(/\s+/g, ' ').trim().length;
    const hasSubstantialText = textLength > 500;

    const hasContent = hasDataElements || hasSubstantialText;

    if (!hasContent) {
      issues.push('Page appears to have minimal content');
    }

    return { hasContent, issues };
  }

  /**
   * Score a screenshot based on quality indicators
   */
  async scoreScreenshot(): Promise<number> {
    if (!this.page) return 0;

    let score = 0;

    // +30 if not on login page
    if (!(await this.checkForLoginPage())) score += 30;

    // +20 if has content
    const { hasContent } = await this.checkForContent();
    if (hasContent) score += 20;

    // +20 if no loading spinners visible
    const loadingSpinner = await this.page.$('[class*="spinner"], [class*="loading"], .loader');
    if (!loadingSpinner) score += 20;

    // +15 if has tables or charts with data
    const dataVisuals = await this.page.$$('table tbody tr, [class*="chart"], svg[class*="chart"], canvas');
    if (dataVisuals.length > 0) score += 15;

    // +15 if main content area is populated
    const mainContent = await this.page.$('main, [class*="content"], [class*="dashboard"]');
    if (mainContent) {
      const mainText = await mainContent.textContent();
      if (mainText && mainText.length > 200) score += 15;
    }

    return score;
  }

  /**
   * Capture screenshot at multiple delays and return all versions
   */
  async multiCapture(name: string, urlPath: string, options: {
    waitFor?: string;
    clickBefore?: string[];
    scrollTo?: string;
  } = {}): Promise<MultiCaptureResult> {
    if (!this.page) throw new Error('Browser not initialized');

    const result: MultiCaptureResult = {
      name,
      delays: CAPTURE_DELAYS,
      files: [],
      bestFile: null,
      issues: []
    };

    // Ensure logged in before navigation
    if (!this.isLoggedIn) {
      const loginSuccess = await this.login();
      if (!loginSuccess) {
        result.issues.push('Failed to login');
        return result;
      }
    }

    const url = `${config.baseUrl}${urlPath}`;
    console.log(`\nMulti-capturing: ${name}`);
    console.log(`  URL: ${url}`);
    console.log(`  Delays: ${CAPTURE_DELAYS.map(d => d/1000 + 's').join(', ')}`);

    try {
      // Navigate to page
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

      // Check if we got redirected to login
      if (await this.checkForLoginPage()) {
        console.log('  Redirected to login page, re-authenticating...');
        this.isLoggedIn = false;
        const relogin = await this.login();
        if (!relogin) {
          result.issues.push('Re-login failed');
          return result;
        }
        // Navigate again
        await this.page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      }

      // Wait for specific element if specified
      if (options.waitFor) {
        try {
          await this.page.waitForSelector(options.waitFor, { timeout: 10000 });
        } catch {
          console.log(`  Warning: Could not find element ${options.waitFor}`);
        }
      }

      // Click elements if specified
      if (options.clickBefore) {
        for (const selector of options.clickBefore) {
          try {
            await this.page.click(selector, { timeout: 5000 });
            await this.page.waitForTimeout(500);
          } catch {
            console.log(`  Warning: Could not click ${selector}`);
          }
        }
      }

      // Scroll to element if specified
      if (options.scrollTo) {
        try {
          await this.page.locator(options.scrollTo).scrollIntoViewIfNeeded();
        } catch {
          console.log(`  Warning: Could not scroll to ${options.scrollTo}`);
        }
      }

      // Capture at each delay
      for (const delay of CAPTURE_DELAYS) {
        console.log(`  Waiting ${delay/1000}s...`);
        await this.page.waitForTimeout(delay === CAPTURE_DELAYS[0] ? delay : (delay - CAPTURE_DELAYS[CAPTURE_DELAYS.indexOf(delay) - 1]));

        // Check login state again
        if (await this.checkForLoginPage()) {
          result.issues.push(`Login page detected at ${delay}ms delay`);
          continue;
        }

        const filename = `${name}_${delay/1000}s.png`;
        const filepath = path.join(config.outputDir, filename);

        await this.page.screenshot({
          path: filepath,
          type: 'png',
          fullPage: false
        });

        const score = await this.scoreScreenshot();
        const { hasContent, issues } = await this.checkForContent();

        result.files.push({
          delay,
          path: filepath,
          hasContent,
          score
        });

        console.log(`  Captured: ${filename} (score: ${score})`);

        if (issues.length > 0) {
          issues.forEach(issue => console.log(`    - ${issue}`));
        }
      }

      // Determine best file
      if (result.files.length > 0) {
        const best = result.files.reduce((a, b) => a.score > b.score ? a : b);
        if (best.score >= 50) {
          result.bestFile = best.path;

          // Copy best to final name
          const finalPath = path.join(config.outputDir, `${name}.png`);
          fs.copyFileSync(best.path, finalPath);
          console.log(`  Best: ${path.basename(best.path)} (score: ${best.score}) -> ${name}.png`);
        } else {
          result.issues.push(`Best score (${best.score}) is below threshold (50)`);
        }
      }

    } catch (error) {
      result.issues.push(`Capture error: ${error}`);
      console.error(`  Error: ${error}`);
    }

    return result;
  }

  /**
   * Audit existing screenshots for quality issues
   */
  async auditScreenshots(directory?: string): Promise<ScreenshotAuditResult[]> {
    const screenshotDir = directory || config.outputDir;
    const results: ScreenshotAuditResult[] = [];

    if (!fs.existsSync(screenshotDir)) {
      console.log('Screenshot directory not found');
      return results;
    }

    const files = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'));
    console.log(`\nAuditing ${files.length} screenshots in ${screenshotDir}...`);

    for (const file of files) {
      const filepath = path.join(screenshotDir, file);
      const stats = fs.statSync(filepath);

      const result: ScreenshotAuditResult = {
        file,
        hasLoginPage: false,
        hasContent: true,
        hasLoadingSpinner: false,
        hasEmptyState: false,
        fileSize: stats.size,
        score: 100,
        issues: []
      };

      // Check file size (very small files might be blank/error pages)
      if (stats.size < 50000) { // Less than 50KB
        result.issues.push('Very small file size - may be blank or error page');
        result.score -= 30;
      }

      // Check filename patterns that indicate potential issues
      if (file.includes('login') || file.includes('signin')) {
        result.issues.push('Filename suggests login page');
        result.hasLoginPage = true;
        result.score -= 50;
      }

      results.push(result);
    }

    // Print summary
    const issueCount = results.filter(r => r.issues.length > 0).length;
    console.log(`\nAudit complete: ${issueCount}/${files.length} files have potential issues`);

    return results;
  }

  /**
   * Validate that a doc file's screenshots exist and are contextual
   */
  async validateDocScreenshots(docPath: string): Promise<{
    docPath: string;
    screenshots: { ref: string; exists: boolean; path: string }[];
    issues: string[];
  }> {
    const result = {
      docPath,
      screenshots: [] as { ref: string; exists: boolean; path: string }[],
      issues: [] as string[]
    };

    if (!fs.existsSync(docPath)) {
      result.issues.push(`Doc file not found: ${docPath}`);
      return result;
    }

    const content = fs.readFileSync(docPath, 'utf-8');

    // Find all image references
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const altText = match[1];
      const imagePath = match[2];

      // Resolve path relative to static directory
      let fullPath = imagePath;
      if (imagePath.startsWith('/img/')) {
        fullPath = path.join('./static', imagePath);
      }

      const exists = fs.existsSync(fullPath);

      result.screenshots.push({
        ref: `![${altText}](${imagePath})`,
        exists,
        path: fullPath
      });

      if (!exists) {
        result.issues.push(`Missing screenshot: ${imagePath}`);
      }

      // Check if alt text is meaningful
      if (!altText || altText.length < 10) {
        result.issues.push(`Poor alt text for ${imagePath}: "${altText}"`);
      }
    }

    // Check for sections that should have screenshots but don't
    const stepRegex = /^#{2,3}\s+(Step \d+|How to|Setting up|Creating|Configuring)/gmi;
    const steps = content.match(stepRegex) || [];

    if (steps.length > result.screenshots.length) {
      result.issues.push(`Doc has ${steps.length} instruction sections but only ${result.screenshots.length} screenshots`);
    }

    return result;
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      console.log('Browser closed');
    }
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!config.email || !config.password) {
    console.error('Error: ABMATIC_EMAIL and ABMATIC_PASSWORD environment variables required');
    process.exit(1);
  }

  const tool = new MultiCaptureScreenshotTool();

  try {
    switch (command) {
      case 'multi':
        const name = args[1];
        const urlPath = args[2];
        if (!name || !urlPath) {
          console.log('Usage: multi <name> <path>');
          console.log('Example: multi dashboard /home-dashboard');
          break;
        }
        await tool.init();
        const result = await tool.multiCapture(name, urlPath);
        console.log('\nResult:', JSON.stringify(result, null, 2));
        break;

      case 'audit':
        const dir = args[1];
        await tool.init();
        const auditResults = await tool.auditScreenshots(dir);
        auditResults.filter(r => r.issues.length > 0).forEach(r => {
          console.log(`\n${r.file}:`);
          r.issues.forEach(i => console.log(`  - ${i}`));
        });
        break;

      case 'validate':
        const docPath = args[1];
        if (!docPath) {
          console.log('Usage: validate <docPath>');
          break;
        }
        await tool.init();
        const validation = await tool.validateDocScreenshots(docPath);
        console.log('\nValidation result:', JSON.stringify(validation, null, 2));
        break;

      default:
        console.log(`
Multi-Capture Screenshot Tool for Ralph Wiggum Loop

Commands:
  multi <name> <path>    - Capture at 5s, 10s, 15s, 20s, 30s delays
  audit [directory]      - Audit screenshots for quality issues
  validate <docPath>     - Validate doc screenshots exist and are contextual

Environment Variables:
  ABMATIC_EMAIL          - Login email (required)
  ABMATIC_PASSWORD       - Login password (required)
  ABMATIC_BASE_URL       - Base URL (default: https://app.abmatic.ai)

Examples:
  npx ts-node multi-capture.ts multi dashboard /home-dashboard
  npx ts-node multi-capture.ts audit ./static/img/screenshots
  npx ts-node multi-capture.ts validate ./docs/campaigns/overview.md
        `);
    }
  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    await tool.close();
  }
}

export { MultiCaptureScreenshotTool };

main();
