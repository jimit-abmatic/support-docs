# Ralph Wiggum - Screenshot Quality Improvement Loop

Read `plan.md` and `activity.md` first, then complete the NEXT incomplete task.

## Your Mission

Fix ALL 4 screenshot quality issues on EACH page before moving to the next:

1. **INSUFFICIENT** - Not enough screenshots to explain features
2. **INCORRECT** - Screenshots captured too early (blank/loading states)
3. **INCOMPLETE** - Screenshots show login page instead of actual content
4. **NON-CONTEXTUAL** - Screenshots don't match surrounding text

---

## CRITICAL: PAGE-BY-PAGE APPROACH

**DO NOT rush. DO NOT skip pages. DO NOT do partial work.**

For EACH documentation page, you MUST:

1. **READ the entire doc file** - Understand what it's teaching
2. **CHECK all 4 dimensions** for EVERY screenshot on that page:
   - Is it SUFFICIENT? (enough screenshots for each step?)
   - Is it CORRECT? (data loaded, no spinners?)
   - Is it COMPLETE? (not a login page?)
   - Is it CONTEXTUAL? (matches the text around it?)
3. **FIX all issues** on that page before moving on
4. **VERIFY** the page is perfect
5. **THEN** move to the next page

**ONE PAGE AT A TIME. ALL 4 CHECKS. NO EXCEPTIONS.**

---

## Environment Setup

```bash
export ABMATIC_EMAIL="jimit@abmatic.ai"
export ABMATIC_PASSWORD="WallyZoey123"
export ABMATIC_BASE_URL="https://app.abmatic.ai"
```

**Working Directories:**
- Docs: `/Users/jimabmatic.ai/abmatic/support-docs/docs/`
- Screenshots: `/Users/jimabmatic.ai/abmatic/support-docs/static/img/screenshots/`
- Scripts: `/Users/jimabmatic.ai/abmatic/support-docs/scripts/screenshots/`

---

## Task Execution: The 4-Dimension Check

For each page task, follow this EXACT process:

### Step 1: Read the Documentation Page

```bash
cat /Users/jimabmatic.ai/abmatic/support-docs/docs/[path-to-doc].md
```

Understand:
- What is this page teaching?
- What steps does it describe?
- What UI elements does it mention?
- What actions should the user take?

### Step 2: List All Current Screenshots

Find all image references in the doc:
```bash
grep -n "!\[" /Users/jimabmatic.ai/abmatic/support-docs/docs/[path-to-doc].md
```

For each screenshot found, note:
- Line number
- Alt text
- File path
- What it's supposed to show

### Step 3: Run the 4-Dimension Check on EACH Screenshot

#### CHECK 1: INSUFFICIENT?
Ask yourself for EACH section of the doc:
- Does this step have a screenshot? If not, it's INSUFFICIENT
- Does the user need to see something to understand? If yes and no screenshot, it's INSUFFICIENT
- Are there enough screenshots to follow along? If user would be lost, it's INSUFFICIENT

**What to look for:**
- "Step 1", "Step 2", etc. - each needs a screenshot
- "Click the X button" - needs a screenshot showing the button
- "You'll see the Y panel" - needs a screenshot of the panel
- "Configure the settings" - needs a screenshot of settings
- "The result will look like" - needs a screenshot of result

#### CHECK 2: INCORRECT?
For EACH existing screenshot, open and verify:
```bash
# Check file size (small = likely blank/loading)
ls -la /Users/jimabmatic.ai/abmatic/support-docs/static/img/screenshots/[name].png
```

**Signs of INCORRECT screenshots:**
- File size < 50KB (likely blank or loading)
- Loading spinners visible
- "Loading..." text
- Empty tables
- Blank content areas
- Skeleton screens

**To fix:** Recapture with multi-delay:
```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi [name] [appPath]
```

This captures at 5s, 10s, 15s, 20s, 30s and picks the best one.

#### CHECK 3: INCOMPLETE?
For EACH existing screenshot, verify it's NOT a login page:

**Signs of INCOMPLETE (login page) screenshots:**
- "Sign In" or "Log In" button visible
- Email/password input fields
- "Forgot password?" link
- URL shows /login
- No navigation sidebar

**To fix:** The multi-capture tool handles login automatically. If still getting login pages:
1. Session may have expired
2. Wait longer before capture
3. Verify login succeeded before navigating

#### CHECK 4: NON-CONTEXTUAL?
For EACH screenshot, read the text BEFORE and AFTER it:

**Ask yourself:**
- Does the screenshot show EXACTLY what the text describes?
- Is the alt text accurate and descriptive?
- Is the screenshot in the RIGHT place in the doc?
- Would a user understand the connection between text and image?

**Signs of NON-CONTEXTUAL:**
- Text says "click the blue button" but screenshot shows different screen
- Text describes feature X but screenshot shows feature Y
- Alt text says "Dashboard" but image shows settings page
- Screenshot placed after wrong paragraph

**To fix:**
1. Identify what the text ACTUALLY describes
2. Navigate to that exact screen
3. Capture the correct content
4. Update the image reference and alt text

### Step 4: Make All Fixes for This Page

Do ALL fixes needed:
1. Add missing screenshots (INSUFFICIENT)
2. Recapture bad timing screenshots (INCORRECT)
3. Recapture login page screenshots (INCOMPLETE)
4. Replace mismatched screenshots (NON-CONTEXTUAL)
5. Update alt text to be descriptive

### Step 5: Verify the Page is Perfect

After fixes:
1. Read through the doc again
2. Verify EVERY screenshot now passes all 4 checks
3. Run build to catch broken links:
   ```bash
   cd /Users/jimabmatic.ai/abmatic/support-docs && npm run build
   ```

### Step 6: Update Tracking Files

1. Log everything in activity.md:
   - What you checked
   - What issues you found (all 4 dimensions)
   - What you fixed
   - Screenshots added/modified

2. Mark task complete in plan.md

3. Git commit:
   ```bash
   git add -A && git commit -m "docs([page-name]): complete 4-dimension screenshot review"
   ```

### Step 7: Move to Next Page

Only after the current page passes ALL 4 CHECKS do you move on.

---

## Screenshot Capture Commands

### Multi-Capture (Recommended - handles timing automatically)
```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi [name] [appPath]
```

This will:
- Login automatically
- Navigate to the page
- Wait 5s → capture
- Wait 10s → capture
- Wait 15s → capture
- Wait 20s → capture
- Wait 30s → capture
- Score each capture
- Pick the best one (highest score)
- Copy best to final filename

### App Paths Reference

| Feature | App Path |
|---------|----------|
| Dashboard | /home-dashboard |
| AI Agents Hub | /ai-agents |
| Alex (SDR Agent) | /ai-agents/alex |
| Clara (ABM Agent) | /ai-agents/clara |
| Campaigns List | /campaigns |
| Accounts | /accounts |
| Contacts | /contacts |
| Groups | /groups |
| Visitor Reveal | /reveal/accounts |
| Contact Reveal | /reveal/contacts |
| Conversions | /conversions |
| Integrations | /integrations |
| Analytics Reports | /analytics/reports |
| Analytics Dashboards | /analytics/dashboards |
| Settings Account | /settings/account-info |
| Settings Users | /settings/users |
| Settings Billing | /settings/usage |
| Installation | /installation |

---

## Quality Scoring

When multi-capture runs, it scores each screenshot:

```
Score 100 = Perfect screenshot
  +30: Not on login page
  +20: Has meaningful content
  +20: No loading spinners
  +15: Has tables/charts with data
  +15: Main content area populated

Minimum acceptable: 50
```

If best score < 50, there's still an issue. Try:
- Longer delays
- Different app path
- Check if feature requires specific data

---

## Activity Log Format

For EACH page, log in activity.md:

```markdown
---
### [Page Name] - [Date]
**Doc Path:** docs/[category]/[file].md
**App Path:** /[path]

**4-DIMENSION CHECK RESULTS:**

| Check | Status | Issues Found | Action Taken |
|-------|--------|--------------|--------------|
| INSUFFICIENT | [PASS/FAIL] | [details] | [what you did] |
| INCORRECT | [PASS/FAIL] | [details] | [what you did] |
| INCOMPLETE | [PASS/FAIL] | [details] | [what you did] |
| NON-CONTEXTUAL | [PASS/FAIL] | [details] | [what you did] |

**Screenshots Before:** [count]
**Screenshots After:** [count]
**Screenshots Added:** [list]
**Screenshots Recaptured:** [list]

**Build Status:** PASS
**Git Commit:** [hash]
---
```

---

## Completion Signals

- **ALL pages done?** Output: `<promise>COMPLETE</promise>`
- **More pages remain?** Just finish normally (loop will restart you)
- **Cannot proceed?** Output: `<promise>STUCK</promise>` and explain why

---

## Golden Rules

1. **ONE PAGE AT A TIME** - Do not try to batch multiple pages
2. **ALL 4 CHECKS** - Every page gets all 4 dimension checks
3. **NO SKIPPING** - Even if a page looks fine, verify it
4. **FIX EVERYTHING** - Don't leave partial work
5. **VERIFY VISUALLY** - Open screenshots and look at them
6. **DESCRIPTIVE ALT TEXT** - Not "screenshot" but "Campaign list showing active campaigns with engagement metrics"
7. **BUILD MUST PASS** - Always verify build before marking complete
8. **COMMIT EACH PAGE** - One commit per page completed

---

## Example: Reviewing a Page

**Task: Review docs/campaigns/overview.md**

1. **Read the doc** - It's about campaign management, lists features, explains types

2. **Find screenshots:**
   ```
   Line 15: ![Campaigns list](/img/screenshots/campaigns-list.png)
   Line 45: ![Create campaign](/img/screenshots/campaign-create.png)
   ```

3. **4-Dimension Check:**

   **INSUFFICIENT?**
   - Line 25 says "Click the Create Campaign button" - no screenshot showing button → ADD
   - Line 60 describes campaign types - no screenshot → ADD
   - Line 80 explains filters - no screenshot → ADD

   **INCORRECT?**
   - campaigns-list.png is 45KB - might be loading state → CHECK visually
   - Open file, see loading spinner → RECAPTURE with multi-delay

   **INCOMPLETE?**
   - campaign-create.png shows actual modal, not login → OK

   **NON-CONTEXTUAL?**
   - Text at line 15 talks about "viewing all campaigns" - screenshot shows list → OK
   - Alt text says "Campaigns list" but should be more descriptive → UPDATE

4. **Fix:**
   - Recapture campaigns-list with multi-delay
   - Add 3 new screenshots
   - Update alt text

5. **Verify:** Build passes, all images load

6. **Log and commit**

---

## Page Order

Work through docs in this order:
1. getting-started/* (most important for new users)
2. campaigns/* (core feature)
3. ai-agents/* (key differentiator)
4. audiences/* (data management)
5. visitor-tracking/* (tracking features)
6. conversions/* (goal tracking)
7. integrations/* (connections)
8. analytics/* (reporting)
9. settings/* (configuration)
10. troubleshooting/* (support)
11. faq/* (common questions)
12. api/* (developer docs)
