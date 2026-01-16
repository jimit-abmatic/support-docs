"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABMATIC_PAGES = exports.AbmaticScreenshotTool = void 0;
var playwright_1 = require("playwright");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
// Default configuration
var defaultConfig = {
    baseUrl: 'https://app.abmatic.ai',
    email: process.env.ABMATIC_EMAIL || '',
    password: process.env.ABMATIC_PASSWORD || '',
    outputDir: './static/img/screenshots',
    viewport: { width: 1440, height: 900 }
};
var AbmaticScreenshotTool = /** @class */ (function () {
    function AbmaticScreenshotTool(config) {
        if (config === void 0) { config = {}; }
        this.browser = null;
        this.context = null;
        this.page = null;
        this.isLoggedIn = false;
        this.config = __assign(__assign({}, defaultConfig), config);
    }
    /**
     * Initialize the browser
     */
    AbmaticScreenshotTool.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('🚀 Initializing browser...');
                        _a = this;
                        return [4 /*yield*/, playwright_1.chromium.launch({
                                headless: true, // Set to false for debugging
                                args: ['--no-sandbox', '--disable-setuid-sandbox']
                            })];
                    case 1:
                        _a.browser = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.browser.newContext({
                                viewport: this.config.viewport,
                                deviceScaleFactor: 2, // Retina quality screenshots
                                locale: 'en-US',
                                timezoneId: 'America/New_York',
                            })];
                    case 2:
                        _b.context = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.context.newPage()];
                    case 3:
                        _c.page = _d.sent();
                        // Ensure output directory exists
                        if (!fs.existsSync(this.config.outputDir)) {
                            fs.mkdirSync(this.config.outputDir, { recursive: true });
                        }
                        console.log('✅ Browser initialized');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Login to Abmatic AI platform
     */
    AbmaticScreenshotTool.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.page)
                            throw new Error('Browser not initialized');
                        if (this.isLoggedIn)
                            return [2 /*return*/, true];
                        console.log('🔐 Logging in to Abmatic AI...');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.page.goto("".concat(this.config.baseUrl, "/login"), {
                                waitUntil: 'networkidle'
                            })];
                    case 2:
                        _a.sent();
                        // Wait for login form
                        return [4 /*yield*/, this.page.waitForSelector('input[type="email"], input[name="email"]', {
                                timeout: 10000
                            })];
                    case 3:
                        // Wait for login form
                        _a.sent();
                        // Fill credentials
                        return [4 /*yield*/, this.page.fill('input[type="email"], input[name="email"]', this.config.email)];
                    case 4:
                        // Fill credentials
                        _a.sent();
                        return [4 /*yield*/, this.page.fill('input[type="password"], input[name="password"]', this.config.password)];
                    case 5:
                        _a.sent();
                        // Click login button
                        return [4 /*yield*/, this.page.click('button[type="submit"]')];
                    case 6:
                        // Click login button
                        _a.sent();
                        // Wait for navigation to dashboard
                        return [4 /*yield*/, this.page.waitForURL('**/home-dashboard**', { timeout: 30000 })];
                    case 7:
                        // Wait for navigation to dashboard
                        _a.sent();
                        this.isLoggedIn = true;
                        console.log('✅ Successfully logged in');
                        return [2 /*return*/, true];
                    case 8:
                        error_1 = _a.sent();
                        console.error('❌ Login failed:', error_1);
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Capture a single screenshot
     */
    AbmaticScreenshotTool.prototype.capture = function (pageCapture) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _i, _a, selector, screenshotOptions, element, error_2;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.page)
                            throw new Error('Browser not initialized');
                        console.log("\uD83D\uDCF8 Capturing: ".concat(pageCapture.name));
                        console.log("   Path: ".concat(pageCapture.path));
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 19, , 20]);
                        url = "".concat(this.config.baseUrl).concat(pageCapture.path);
                        return [4 /*yield*/, this.page.goto(url, { waitUntil: 'networkidle' })];
                    case 2:
                        _c.sent();
                        if (!pageCapture.waitFor) return [3 /*break*/, 4];
                        console.log("   Waiting for: ".concat(pageCapture.waitFor));
                        return [4 /*yield*/, this.page.waitForSelector(pageCapture.waitFor, { timeout: 15000 })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        if (!(pageCapture.clickBefore && pageCapture.clickBefore.length > 0)) return [3 /*break*/, 9];
                        _i = 0, _a = pageCapture.clickBefore;
                        _c.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        selector = _a[_i];
                        console.log("   Clicking: ".concat(selector));
                        return [4 /*yield*/, this.page.click(selector)];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.page.waitForTimeout(500)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 5];
                    case 9:
                        if (!pageCapture.delay) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.page.waitForTimeout(pageCapture.delay)];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11:
                        screenshotOptions = {
                            path: path.join(this.config.outputDir, "".concat(pageCapture.name, ".png")),
                            type: 'png',
                        };
                        if (!pageCapture.selector) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.page.$(pageCapture.selector)];
                    case 12:
                        element = _c.sent();
                        if (!element) return [3 /*break*/, 14];
                        return [4 /*yield*/, element.screenshot(screenshotOptions)];
                    case 13:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        console.warn("   \u26A0\uFE0F Element not found: ".concat(pageCapture.selector));
                        return [2 /*return*/, null];
                    case 15: return [3 /*break*/, 18];
                    case 16:
                        // Capture page
                        screenshotOptions.fullPage = (_b = pageCapture.fullPage) !== null && _b !== void 0 ? _b : false;
                        return [4 /*yield*/, this.page.screenshot(screenshotOptions)];
                    case 17:
                        _c.sent();
                        _c.label = 18;
                    case 18:
                        console.log("   \u2705 Saved: ".concat(screenshotOptions.path));
                        return [2 /*return*/, screenshotOptions.path];
                    case 19:
                        error_2 = _c.sent();
                        console.error("   \u274C Failed to capture ".concat(pageCapture.name, ":"), error_2);
                        return [2 /*return*/, null];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Capture multiple screenshots from a configuration
     */
    AbmaticScreenshotTool.prototype.batchCapture = function (pages) {
        return __awaiter(this, void 0, void 0, function () {
            var results, success, _i, pages_1, pageCapture, result, successful;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = new Map();
                        if (!!this.isLoggedIn) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.login()];
                    case 1:
                        success = _a.sent();
                        if (!success) {
                            console.error('❌ Cannot proceed without login');
                            return [2 /*return*/, results];
                        }
                        _a.label = 2;
                    case 2:
                        console.log("\n\uD83D\uDCDA Starting batch capture of ".concat(pages.length, " screenshots...\n"));
                        _i = 0, pages_1 = pages;
                        _a.label = 3;
                    case 3:
                        if (!(_i < pages_1.length)) return [3 /*break*/, 6];
                        pageCapture = pages_1[_i];
                        return [4 /*yield*/, this.capture(pageCapture)];
                    case 4:
                        result = _a.sent();
                        results.set(pageCapture.name, result);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        successful = Array.from(results.values()).filter(function (v) { return v !== null; }).length;
                        console.log("\n\uD83D\uDCCA Batch complete: ".concat(successful, "/").concat(pages.length, " successful"));
                        return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     * Verify screenshot content (basic check that page loaded correctly)
     */
    AbmaticScreenshotTool.prototype.verifyPageContent = function (expectedText) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.page)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, this.page.textContent('body')];
                    case 1:
                        content = _b.sent();
                        return [2 /*return*/, (_a = content === null || content === void 0 ? void 0 : content.includes(expectedText)) !== null && _a !== void 0 ? _a : false];
                }
            });
        });
    };
    /**
     * Get current page title for verification
     */
    AbmaticScreenshotTool.prototype.getPageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.page)
                            return [2 /*return*/, ''];
                        return [4 /*yield*/, this.page.title()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Close the browser
     */
    AbmaticScreenshotTool.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.browser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.browser.close()];
                    case 1:
                        _a.sent();
                        console.log('🔒 Browser closed');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return AbmaticScreenshotTool;
}());
exports.AbmaticScreenshotTool = AbmaticScreenshotTool;
// Pre-defined page captures for Abmatic documentation
var ABMATIC_PAGES = [
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
exports.ABMATIC_PAGES = ABMATIC_PAGES;
// CLI Interface
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var args, command, tool, _a, pageName, pagePath, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    args = process.argv.slice(2);
                    command = args[0];
                    tool = new AbmaticScreenshotTool({
                        email: process.env.ABMATIC_EMAIL,
                        password: process.env.ABMATIC_PASSWORD,
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 11, 12, 14]);
                    return [4 /*yield*/, tool.init()];
                case 2:
                    _b.sent();
                    _a = command;
                    switch (_a) {
                        case 'capture': return [3 /*break*/, 3];
                        case 'batch': return [3 /*break*/, 6];
                        case 'list': return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 3:
                    pageName = args[1];
                    pagePath = args[2];
                    if (!pageName || !pagePath) {
                        console.log('Usage: capture <name> <path>');
                        console.log('Example: capture dashboard /home-dashboard');
                        return [3 /*break*/, 10];
                    }
                    return [4 /*yield*/, tool.login()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, tool.capture({ name: pageName, path: pagePath })];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 6: return [4 /*yield*/, tool.batchCapture(ABMATIC_PAGES)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 8:
                    console.log('\nAvailable pre-defined pages:');
                    ABMATIC_PAGES.forEach(function (p) {
                        console.log("  ".concat(p.name.padEnd(25), " - ").concat(p.path));
                    });
                    return [3 /*break*/, 10];
                case 9:
                    console.log("\nAbmatic AI Screenshot Tool\n\nCommands:\n  capture <name> <path>  - Capture a single screenshot\n  batch                  - Capture all pre-defined pages\n  list                   - List pre-defined pages\n\nEnvironment Variables:\n  ABMATIC_EMAIL          - Login email\n  ABMATIC_PASSWORD       - Login password\n\nExamples:\n  ABMATIC_EMAIL=user@example.com ABMATIC_PASSWORD=xxx npx ts-node screenshot-tool.ts batch\n  npx ts-node screenshot-tool.ts capture my-page /some/path\n        ");
                    _b.label = 10;
                case 10: return [3 /*break*/, 14];
                case 11:
                    error_3 = _b.sent();
                    console.error('Fatal error:', error_3);
                    return [3 /*break*/, 14];
                case 12: return [4 /*yield*/, tool.close()];
                case 13:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
}
// Run if called directly
if (require.main === module) {
    main();
}
