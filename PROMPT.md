# Ralph Wiggum - Screenshot Quality Improvement Loop

Read `plan.md` and `activity.md` first, then complete the NEXT incomplete task.

## Your Mission

You are fixing 4 critical screenshot quality issues in the Abmatic AI support documentation:

1. **INSUFFICIENT** - Not enough screenshots to explain features
2. **INCORRECT** - Screenshots captured too early (blank/loading states)
3. **INCOMPLETE** - Screenshots show login page instead of actual content
4. **NON-CONTEXTUAL** - Screenshots don't match surrounding text

## Environment Setup

**Credentials are exported - use them:**
```bash
export ABMATIC_EMAIL="jimit@abmatic.ai"
export ABMATIC_PASSWORD="WallyZoey123"
export ABMATIC_BASE_URL="https://app.abmatic.ai"
```

**Working Directories:**
- Docs: `/Users/jimabmatic.ai/abmatic/support-docs/docs/`
- Screenshots: `/Users/jimabmatic.ai/abmatic/support-docs/static/img/screenshots/`
- Scripts: `/Users/jimabmatic.ai/abmatic/support-docs/scripts/screenshots/`

## Task Execution Steps

### For Each Task:

1. **Find next task** - Look for first `"passes": false` in plan.md
2. **Read the doc** - Read the file at `docPath`
3. **Analyze screenshots needed** - What screenshots does the text reference or need?
4. **Execute based on task type** (see below)
5. **Verify** - Run build: `cd /Users/jimabmatic.ai/abmatic/support-docs && npm run build`
6. **Update activity.md** - Log what you did with details
7. **Mark complete** - Set `"passes": true` in plan.md
8. **Git commit** - Commit changes: `git add -A && git commit -m "docs: [task description]"`

---

## Task Type Instructions

### TYPE: "audit" - Screenshot Audit Tasks

Run the audit tool and document findings:

```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts audit ./static/img/screenshots
```

Document:
- Files with quality issues
- Files that are too small (likely blank)
- Files that need recapture

### TYPE: "insufficient" - Add More Screenshots

For pages that need MORE screenshots:

1. Read the doc file completely
2. Identify each step, feature, or section that should have a screenshot
3. For EACH missing screenshot:
   - Use multi-capture to get best timing:
   ```bash
   cd /Users/jimabmatic.ai/abmatic/support-docs
   ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>
   ```
   - This captures at 5s, 10s, 15s, 20s, 30s and picks the best
   - Review the output scores - use the one with highest score
4. Add screenshot references to the doc: `![Description](/img/screenshots/name.png)`
5. Ensure each major step has a visual

**Insufficiency Checklist:**
- [ ] Every "Step N" or "How to" section has a screenshot
- [ ] Every settings panel mentioned has a visual
- [ ] Every button/action mentioned is shown
- [ ] Before/after states are shown where relevant
- [ ] Error states and success states are documented

### TYPE: "incorrect" - Fix Timing Issues

For screenshots that were captured too early (blank/loading):

1. Identify screenshots that show:
   - Loading spinners
   - Blank/white content areas
   - "Loading..." text
   - Skeleton screens
2. Re-capture using multi-capture with ALL delays:
   ```bash
   ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>
   ```
3. Review all 5 versions (5s, 10s, 15s, 20s, 30s)
4. Pick the one with:
   - Highest score (shown in output)
   - Actual data visible
   - No loading indicators
5. The tool automatically copies the best one to `<name>.png`
6. Verify the final screenshot manually by opening it

**Timing Quality Checklist:**
- [ ] No loading spinners visible
- [ ] Tables have actual data rows
- [ ] Charts have rendered data
- [ ] Text content is loaded
- [ ] Navigation is fully loaded

### TYPE: "incomplete" - Fix Login Page Screenshots

For screenshots that show login page instead of actual content:

**This is CRITICAL - login pages are useless to users!**

1. The multi-capture tool handles login automatically
2. If you still get login pages, do this manually:
   ```typescript
   // In a script, ensure login first:
   await page.goto('https://app.abmatic.ai/login');
   await page.fill('input[type="email"]', process.env.ABMATIC_EMAIL);
   await page.fill('input[type="password"]', process.env.ABMATIC_PASSWORD);
   await page.click('button:has-text("SIGN IN")');
   await page.waitForURL('**/home-dashboard**', { timeout: 60000 });
   // Now navigate to target page
   ```
3. After login, wait 5 seconds before navigating
4. Check the URL after navigation - if it contains `/login`, session failed
5. Re-capture with longer initial delay (30s)

**Login Check Indicators:**
- URL contains `/login`
- "Sign In" button visible
- Email/password input fields visible
- "Forgot password" link visible

### TYPE: "contextual" - Match Screenshots to Text

For screenshots that don't match the surrounding documentation text:

1. Read the FULL section around each screenshot
2. Ask yourself:
   - Does the screenshot show what the text describes?
   - Is the screenshot of the correct page/feature?
   - Does the alt text match what's shown?
   - Is the screenshot in the right order?
3. If mismatched:
   - Identify what the text actually describes
   - Navigate to that exact screen
   - Capture the correct content
   - Update the image reference
4. Update alt text to be descriptive: `![Creating a new campaign in the wizard](/img/screenshots/campaign-wizard.png)`

**Context Checklist:**
- [ ] Screenshot shows exactly what text describes
- [ ] Alt text accurately describes the image
- [ ] Screenshot is placed right after/before the relevant text
- [ ] Any UI elements mentioned in text are visible in screenshot
- [ ] Screenshot shows the same example data mentioned in text

### TYPE: "deploy" - Deploy and Verify

Final deployment task:

1. Build the docs:
   ```bash
   cd /Users/jimabmatic.ai/abmatic/support-docs && npm run build
   ```
2. Deploy to S3:
   ```bash
   aws s3 sync /Users/jimabmatic.ai/abmatic/support-docs/build s3://support-abmatic-ai --delete
   ```
3. Invalidate CloudFront:
   ```bash
   aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"
   ```
4. Wait for invalidation to complete:
   ```bash
   aws cloudfront get-invalidation --distribution-id EWO3Z3VNLFUQ2 --id <invalidation-id> --query 'Invalidation.Status' --output text
   ```
5. Verify with Playwright:
   ```bash
   cd /Users/jimabmatic.ai/abmatic/support-docs
   npx playwright test --project=chromium || echo "No test file, doing manual verification"
   ```
6. Manual verification checklist:
   - [ ] Homepage loads: https://support.abmatic.ai
   - [ ] Navigation works
   - [ ] Images load (check Network tab)
   - [ ] Search works

---

## Multi-Capture Output Explanation

When you run `multi-capture.ts multi <name> <path>`, you'll see:

```
Multi-capturing: dashboard
  URL: https://app.abmatic.ai/home-dashboard
  Delays: 5s, 10s, 15s, 20s, 30s
  Waiting 5s...
  Captured: dashboard_5s.png (score: 45)
    - Loading indicator found: "Loading..."
  Waiting 10s...
  Captured: dashboard_10s.png (score: 65)
  Waiting 15s...
  Captured: dashboard_15s.png (score: 85)
  Waiting 20s...
  Captured: dashboard_20s.png (score: 85)
  Waiting 30s...
  Captured: dashboard_30s.png (score: 85)
  Best: dashboard_15s.png (score: 85) -> dashboard.png
```

**Score Breakdown:**
- +30: Not on login page
- +20: Has meaningful content
- +20: No loading spinners
- +15: Has tables/charts with data
- +15: Main content area populated

**Minimum acceptable score: 50**

---

## Completion Signals

- **ALL tasks done?** Output: `<promise>COMPLETE</promise>`
- **More tasks remain?** Just finish normally (loop will restart you)
- **Cannot proceed?** Output: `<promise>STUCK</promise>` and explain why in activity.md

---

## Golden Rules

1. **NEVER commit screenshots of login pages** - These are useless
2. **ALWAYS wait for data to load** - Use multi-capture to ensure this
3. **ALWAYS verify screenshots manually** - Open them and check
4. **ALWAYS update activity.md** - Future iterations need to know what you did
5. **ALWAYS run build before marking complete** - Catch broken links
6. **ONE task per iteration** - Don't try to do multiple tasks
7. **Git commit after EVERY completed task** - Keep history clean

---

## Quick Reference Commands

```bash
# Multi-capture a screenshot (captures at 5s, 10s, 15s, 20s, 30s)
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>

# Audit all screenshots
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts audit

# Validate a doc's screenshots
npx ts-node scripts/screenshots/multi-capture.ts validate docs/campaigns/overview.md

# Build docs
npm run build

# Deploy
aws s3 sync build s3://support-abmatic-ai --delete

# Invalidate cache
aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"
```
