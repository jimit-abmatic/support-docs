---
id: campaign-issues
title: Campaign Troubleshooting
sidebar_label: Campaign Issues
sidebar_position: 4
---

# Campaign Troubleshooting

Get your campaigns running smoothly with this comprehensive troubleshooting guide. Most issues can be resolved in minutes with the right diagnosis.

:::tip Quick Fix: 90% of Issues
Most campaign problems come down to three things: **campaign status**, **page status**, or **targeting rules**. Start with the Quick Diagnostic table below to identify your issue fast.
:::

## Quick Diagnostic

| Symptom | Most Likely Cause | Quick Fix | Time to Fix |
|---------|-------------------|-----------|-------------|
| Personalization not showing | Targeting mismatch or control group | [Check targeting rules](#personalization-not-showing) | 2-5 min |
| Editor not loading | Browser/extension issue | [Clear cache, try incognito](#editor-not-loading) | 1-2 min |
| Wrong content showing | Campaign priority conflict | [Reorder campaign priority](#wrong-content-displaying) | 1 min |
| Analytics showing zero | Not enough traffic or time | [Verify setup and wait 24h](#no-campaign-analytics) | Varies |
| Page flickering | Script placement issue | [Move script to head](#page-flickering) | 5 min |
| A/B test inconclusive | Insufficient sample size | [Wait for more traffic](#ab-test-not-showing-results) | Days-weeks |

---

## Personalization Not Showing

Can't see your personalization? Work through these steps in order - most issues are caught in the first three steps.

### Step 1: Verify Campaign Status

Your campaign must be **Active** to show personalization.

1. Go to **Campaigns**
2. Find your campaign in the list
3. Check the **Status** column:

| Status | What It Means | Action Needed |
|--------|---------------|---------------|
| **100% Full personalization** | Campaign is live and 100% of matching visitors see personalized content | None — the campaign is running |
| **50% Experiment** | Campaign is running an A/B test; the percentage is the share of visitors who see the personalized version (the rest are the control) | None — this is expected for tests |
| **0% Inactive** | Campaign is paused or draft; 0% of visitors see personalization | Activate the campaign |

![Campaigns list showing the Preference column with #1, #2 ordering and the Status column with values like 100% Full personalization, 50% Experiment, and 0% Inactive](/img/screenshots/ts-campaign-status.png)
*The **Status** column shows whether each campaign is active and what percentage of visitors see personalization. The **Preference** column (#1, #2, …) sets priority when campaigns overlap.*

### Step 2: Verify Page Status

Each page within a campaign has its own status. Even if the campaign is active, individual pages must be published.

1. Open your campaign
2. Click the **PAGES** tab
3. Check each page shows **Active** status with a green checkmark

| Page Status | What It Means | Action Needed |
|-------------|---------------|---------------|
| **Active** (green) | Page is live and serving personalized content | None |
| **Draft** | Page has unpublished changes | Click **Publish** |
| **Inactive** | Page is disabled | Toggle the page status on |

![Campaign PAGES tab listing each personalized page with an Active status, an Updated At date, and Unique Visitors columns split into Personalized, Control, and Total](/img/screenshots/campaign-pages-tab.png)
*The **PAGES** tab shows each page's **Status** plus visitor counts split into **Personalized**, **Control**, and **Total**. Use the **+ PAGE** button to add another page to the campaign.*

### Step 3: Check Targeting Rules

You might not match your own targeting rules. This is the most common reason marketers don't see their own personalization.

1. Open your campaign
2. Go to the **Audience** tab
3. Review your targeting conditions

**Common reasons you might not match:**

| Targeting Rule | Why You Might Not Match | How to Test |
|----------------|------------------------|-------------|
| Target Account List | Your company isn't in the list | Add your company temporarily |
| Industry filter | Your IP resolves to a different industry | Create a test campaign with broad targeting |
| Company size | Your company size doesn't match | Check what size Abmatic detects for you |
| Page URL | You're on a different URL path | Verify exact URL matching rules |
| Geographic location | Your IP location doesn't match | Test from target location or broaden targeting |

:::info Testing Tip
Create a dedicated **test campaign** with very broad targeting (e.g., target all visitors). If this works but your production campaign doesn't, the issue is definitely in your targeting rules.
:::

### Step 4: Check Control Group Assignment

If you're in the **control group**, you'll see the original page with no changes - this is by design for accurate A/B testing.

**How the control group works:**
- Visitors are randomly assigned to personalized or control groups
- This assignment persists for the visitor's session
- Control group visitors see the original, unmodified page

**To verify:**
1. Open your campaign's **Pages** tab
2. Look at the **Personalized** vs **Control** visitor columns
3. If both show visitors, your test is working correctly

**To see the personalized version:**
- Clear your browser cookies and revisit
- Try a different browser or incognito mode
- You may be randomly assigned to control again (50% chance with default settings)

### Step 5: Verify Script Installation

Personalization requires the Abmatic AI tracking script to be properly installed.

1. Open your website in a browser
2. Open DevTools (press **F12** or right-click → Inspect)
3. Go to the **Network** tab
4. Refresh the page
5. Filter by "abmatic"
6. Verify you see a successful request (200 status)

**If the script isn't loading:** See [Script Troubleshooting](/troubleshooting/script-issues) for detailed help.

---

## Editor Not Loading

The page editor lets you visually customize content. If it's not loading, try these fixes in order.

### What You Might See

| Symptom | Most Likely Cause |
|---------|-------------------|
| Blank white screen | Browser cache or extension conflict |
| Infinite loading spinner | Target page has security restrictions |
| Error message | Page blocks iframe embedding |
| Editor crashes | Browser compatibility issue |

### Quick Fixes (Try These First)

**1. Clear browser cache:**
- Clear cache for app.abmatic.ai specifically
- Or try incognito/private browsing mode (this bypasses cache and most extensions)

**2. Disable browser extensions:**
These extensions commonly interfere with the editor:

| Extension Type | Why It Causes Issues | Solution |
|----------------|---------------------|----------|
| Ad blockers | May block Abmatic scripts | Whitelist app.abmatic.ai |
| Privacy extensions | Block third-party scripts | Disable temporarily |
| JavaScript blockers | Prevent editor functionality | Whitelist or disable |
| VPN extensions | Can cause loading issues | Disconnect temporarily |

**3. Try a different browser:**
Supported browsers (latest 2 versions):
- Chrome (recommended for best experience)
- Firefox
- Safari
- Edge

### If Your Page Won't Load in Editor

Some pages have security settings that prevent embedding in the editor:

| Security Setting | What Happens | Solution |
|------------------|--------------|----------|
| `X-Frame-Options: DENY` | Page refuses to load in iframe | Ask your web team to whitelist Abmatic's editor domain |
| Strict CSP headers | Content Security Policy blocks embedding | Add Abmatic domains to CSP allow list |
| Login required | Editor can't authenticate | Use a public page or set up authentication bypass |

:::tip Contact Your Web Team
If your pages use strict security headers, you'll need your web team to whitelist `app.abmatic.ai` in your X-Frame-Options or CSP configuration. This is a one-time change that enables the visual editor.
:::

---

## Wrong Content Displaying

Seeing the wrong personalized content? Here's how to diagnose and fix it.

### Multiple Campaigns Targeting Same Page

When multiple active campaigns target the same page, **priority determines which one wins**.

**How priority works:**
- Lower preference number = higher priority
- Only the highest-priority matching campaign applies
- Other matching campaigns are ignored for that page view

**To fix priority conflicts:**

1. Go to **Campaigns**
2. Look at the **Preference** column (shown as #1, #2, etc.)
3. Reorder campaigns to change priority — the list is sorted by **Preference**, and you can sort it ascending or descending
4. Campaigns with a lower preference number take precedence

:::tip Sort by Preference
The campaigns list has a **Sort By** control set to **Preference** by default, with arrows to sort the list ascending or descending. The lower the preference number, the higher the priority when two campaigns target the same page.
:::

**Best practice:** Ensure campaigns targeting the same page have distinct audiences, or intentionally set priority so the most specific campaign wins.

### Content Caching Issues

If you're seeing old content after making changes:

| Possible Cause | Solution |
|----------------|----------|
| Browser cache | Clear cache or hard refresh (Ctrl/Cmd + Shift + R) |
| CDN cache | Wait for CDN cache to expire (typically 5-60 minutes) or purge manually |
| Unpublished changes | Check that page shows "Published" status in Abmatic |
| Multiple browser tabs | Close other tabs and refresh |

### Targeting Rule Overlap

If the wrong audience sees personalized content:

1. Review targeting rules for all active campaigns
2. Look for overlapping conditions (e.g., two campaigns both target "Enterprise" companies)
3. Either make targeting mutually exclusive or use priority to control which campaign wins

---

## No Campaign Analytics

Analytics need both time and traffic to populate. Here's what to expect and how to troubleshoot.

### Understanding Analytics Timing

| Situation | What to Expect |
|-----------|----------------|
| Brand new campaign | Allow 24-48 hours for data to appear |
| Low-traffic page | Need 50+ visitors minimum for meaningful data |
| Data refresh | Analytics update every few hours, not real-time |

### Troubleshooting Empty Analytics

**Verify your campaign is properly set up:**

| Check This | Where to Find It | What to Look For |
|------------|------------------|------------------|
| Campaign status | Campaigns list | Shows "Full personalization" or "Experiment" |
| Page status | Campaign → Pages tab | All target pages show "Active" |
| Script installed | Target page DevTools | Abmatic script loads successfully |
| Actual traffic | Campaign → Pages tab | "Total" visitor column shows visits |
| Date range | Analytics date picker | Includes dates when campaign was active |

**Verify conversions are configured:**

If conversion metrics specifically are empty:
1. Go to **Conversions**
2. Confirm you have active conversion goals
3. Verify the conversion tracking script is working
4. Test by completing a conversion yourself

:::info Data Processing Time
After completing a test conversion, allow 15-30 minutes for the data to appear in analytics. Abmatic processes data in batches for performance.
:::

---

## Page Flickering

Page flickering (also called "flash of original content" or FOOC) happens when visitors briefly see the original page before personalization applies.

### Why Flickering Happens

| Cause | Explanation |
|-------|-------------|
| Script loads late | Personalization can't apply until the Abmatic script loads |
| Large DOM changes | Complex personalizations take longer to apply |
| Slow connections | Users on slow networks see more flickering |
| Script placement | Script in footer loads after page renders |

### Solutions

**1. Optimize script placement (most effective):**

Place the Abmatic script as high as possible in your `<head>` section:

```html
<head>
  <!-- Place Abmatic script early in head for fastest loading -->
  <script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>

  <!-- Other head elements below -->
</head>
```

**2. Add an optional anti-flicker snippet (do-it-yourself):**

Loading the Abmatic AI script as high in the `<head>` as possible (step 1) is the recommended fix and resolves flickering for most sites. If you still see flicker on critical above-the-fold personalizations, you can add your own anti-flicker snippet that briefly hides the page until personalization is ready.

This is a manual, DIY pattern you add to your own site — it is not a built-in toggle in Abmatic AI:

```html
<script>
  // Optional DIY anti-flicker: hide the page until Abmatic AI applies
  // changes, with a safety timeout so content always becomes visible.
  document.documentElement.style.opacity = '0';
  setTimeout(function() {
    document.documentElement.style.opacity = '1';
  }, 2000);
</script>
```

:::caution Use with care
An anti-flicker snippet hides your page until the timeout elapses, which can make the page feel slower. Always keep the safety timeout so visitors never get stuck on a blank page. Email support@abmatic.ai if you'd like guidance tailored to your site.
:::

**3. Reduce personalization scope:**

| Instead of... | Consider... |
|---------------|-------------|
| Changing entire page layout | Personalizing headlines and CTAs only |
| Large image swaps | Text and color changes |
| Multiple DOM modifications | Focused, high-impact changes |

---

## A/B Test Not Showing Results

A/B tests need sufficient traffic to reach statistical significance. Here's how to interpret your results.

### Understanding Statistical Significance

| Your Conversion Rate | Minimum Visitors Per Variant | Typical Test Duration |
|---------------------|------------------------------|----------------------|
| 10%+ | 100-200 | 1-2 weeks |
| 5% | 300-500 | 2-3 weeks |
| 2% | 1,000+ | 3-4 weeks |
| 1% | 3,000+ | 4-6 weeks |

:::tip Why Sample Size Matters
Small differences need large samples to detect reliably. A 5% improvement in conversion rate might be real, but you won't know for sure until you have enough visitors to rule out random chance.
:::

### "Not Significant" Results

If your test shows "Not significant," it means the difference between variants could be due to random chance. Options:

| Approach | When to Use |
|----------|-------------|
| Keep running | If you're close to significance and have more traffic coming |
| Make bigger changes | Larger effect sizes are easier to detect |
| Increase traffic | Drive more visitors to the test page |
| Accept the result | If no difference exists, that's useful information |

### Uneven Traffic Split

If traffic isn't splitting evenly between variants:

| Possible Cause | Solution |
|----------------|----------|
| Control percentage set wrong | Check campaign settings (default is 50/50) |
| CDN caching | Your CDN may be caching one variant - add no-cache headers |
| Cookie blocking | Privacy-focused visitors may not persist variant assignment |
| Short test period | Wait longer - randomness evens out over time |

---

## Conversion Tracking Not Working

Conversions tie your personalization to business results. Here's how to fix tracking issues.

### Conversions Not Counting

**Step 1: Verify goal setup**
1. Go to **Conversions**
2. Confirm your goal is active
3. Check the trigger type and conditions

**Step 2: Understand your conversion type**

| Conversion Type | How It Triggers | Common Issues |
|-----------------|-----------------|---------------|
| **URL-based** | Visitor reaches specific URL | URL must match exactly (check trailing slashes, parameters) |
| **Event-based** | Custom JavaScript event fires | Event must fire after Abmatic script loads |
| **Form-based** | Form submits successfully | Form must not redirect before tracking fires |

**Step 3: Test the conversion**
1. Complete the conversion action yourself (visit URL, submit form, etc.)
2. Wait 15-30 minutes for processing
3. Check if it appears in conversion analytics

### Attribution Issues

Conversions must be attributable to a campaign view. Check these requirements:

| Requirement | What It Means |
|-------------|---------------|
| Campaign viewed first | Visitor must see the personalized page before converting |
| Same visitor session | Conversion tracked within attribution window (default 30 days) |
| Personalized group | Control group conversions are tracked separately |

---

## LinkedIn/Google Ads Campaign Issues

Audience sync campaigns push your target accounts to ad platforms. Here's how to troubleshoot.

### Audience Not Syncing

**Step 1: Check connection status**
1. Go to **Settings → Integrations**
2. Find LinkedIn Ads or Google Ads in the Advertising section
3. Verify the card shows **Active**
4. If it's Inactive, open **SETTINGS** to re-authorize

**Step 2: Verify campaign sync settings**
1. Open your ads campaign
2. Go to audience settings
3. Confirm sync is enabled

**Step 3: Allow for platform processing time**

| Platform | Typical Sync Time | Notes |
|----------|-------------------|-------|
| LinkedIn | 24-48 hours | Audiences populate gradually |
| Google Ads (Display) | 24 hours | Customer Match lists process overnight |
| Google Ads (Search) | 24 hours | Requires 1,000 matched users |

### Audience Size Too Small

Ad platforms require minimum audience sizes to serve ads:

| Platform | Minimum Size | For Campaign Type |
|----------|--------------|-------------------|
| LinkedIn | 300 matched members | All campaign types |
| Google Ads | 100 matched users | Display campaigns |
| Google Ads | 1,000 matched users | Search campaigns |

**If your audience is below minimum:**

| Solution | How It Helps |
|----------|--------------|
| Expand target account list | More companies = more potential matches |
| Add contact emails | Email matching increases match rates |
| Use company targeting | LinkedIn company targeting needs fewer matches |
| Combine multiple lists | Merge similar audiences to reach minimum |

---

## Getting Help

If you've worked through this guide and still need assistance:

**Email support@abmatic.ai** with:

| Information Needed | Why It Helps |
|-------------------|--------------|
| Campaign name and ID | Lets us find your specific campaign |
| Screenshot of campaign settings | Shows your configuration |
| Screenshot/recording of the issue | Helps us see exactly what you see |
| Steps to reproduce | Lets us recreate the problem |
| Browser and version | Some issues are browser-specific |

:::info Response Time
Our support team typically responds within 4 business hours during weekdays (9am-6pm EST).
:::

## Related Resources

- [Script Troubleshooting](/troubleshooting/script-issues) - Fix tracking and installation issues
- [CRM Sync Troubleshooting](/troubleshooting/crm-sync) - Resolve integration sync problems
- [Website Personalization Guide](/campaigns/website-personalization) - Campaign setup best practices
- [A/B Testing Guide](/campaigns/ab-testing) - Statistical testing methodology
