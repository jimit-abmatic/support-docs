---
id: campaigns
title: Campaigns FAQ
sidebar_label: Campaigns
---

# Campaigns FAQ

Everything you need to know about creating, managing, and optimizing campaigns in Abmatic AI. From website personalization to multi-channel ABM, get answers to your most common questions.

:::tip Quick Navigation
Press **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for specific campaign topics.
:::

---

## Creating Campaigns

### What types of campaigns can I create?

Abmatic offers five campaign types to reach your target accounts wherever they are:

| Campaign Type | What It Does | Best For |
|--------------|--------------|----------|
| **Website Personalization** | Dynamically modify your site content for different visitors | Converting website traffic with tailored experiences |
| **Email Campaigns** | Send personalized outreach sequences | Warming up target accounts with relevant messaging |
| **LinkedIn Ads** | Target your accounts on LinkedIn | Reaching decision-makers where they research |
| **Google Ads** | Reach audiences through Google's network | Capturing high-intent search and display traffic |
| **CRM Campaigns** | Trigger actions in Salesforce/HubSpot | Automating follow-up and routing workflows |

![Campaign type selection showing all available campaign types](/img/screenshots/first-campaign-type-modal.png)

:::info Multi-Channel Power
The most successful ABM programs use 3+ campaign types together. Start with Website Personalization to capture existing traffic, then expand to ads and email.
:::

### What's the difference between Inbound and Outbound campaigns?

Choose based on who you want to target:

| Campaign Mode | How It Works | When to Use |
|--------------|--------------|-------------|
| **Inbound** | Personalizes for *any* visitor matching your targeting rules | Broad targeting: "Show healthcare messaging to all healthcare visitors" |
| **Outbound** | Personalizes for *specific named accounts* in your target lists | Account-based targeting: "Personalize for these 50 enterprise accounts" |

**Pro tip:** Inbound campaigns scale automatically as matching visitors arrive. Outbound campaigns give you precise control over which accounts see personalization.

### How do I choose which accounts to target?

You have multiple targeting options—use the one that fits your strategy:

| Targeting Method | How It Works | Best For |
|-----------------|--------------|----------|
| **Account Lists** | Select from existing lists you've created | Working your named account list |
| **Dynamic Filters** | Auto-match visitors by industry, size, behavior, etc. | Scaling personalization to your ICP |
| **CRM Segments** | Use Salesforce/HubSpot segments you've already built | Aligning with sales territory assignments |
| **Intent Signals** | Target accounts showing buying behavior | Prioritizing in-market accounts |

![Audience targeting configuration with filter options](/img/screenshots/wp-audience-tab.png)

:::tip Start Focused
Begin with your 50-100 highest-priority accounts. Once you see results, expand targeting gradually to maintain quality.
:::

---

## Personalization

### What can I personalize on my website?

Using the visual editor, you can modify almost anything without touching code:

| Element Type | Examples | Impact Level |
|-------------|----------|--------------|
| **Headlines** | Hero text, section headers, page titles | High—first thing visitors see |
| **Body Copy** | Paragraphs, bullet points, descriptions | Medium—supports your headline message |
| **Images** | Hero images, logos, background graphics | High—visual relevance drives engagement |
| **CTAs** | Button text, form labels, link text | High—directly affects conversion |
| **Links** | Button destinations, navigation targets | Medium—controls the visitor journey |
| **Styling** | Colors, visibility, positioning, sizing | Medium—reinforces brand alignment |

![Visual editor showing personalization options](/img/screenshots/page-editor-main.png)

:::info No Code Required
The visual editor lets marketers make changes without developer help. Just click on any element and edit—changes go live instantly.
:::

### What personalization variables are available?

Use dynamic tokens to automatically insert visitor-specific content:

| Variable | What It Inserts | Example Output |
|----------|----------------|----------------|
| `{{mt_company}}` | Company name | "Acme Corporation" |
| `{{mt_industry}}` | Industry classification | "Financial Services" |
| `{{mt_city}}` | Visitor's city | "San Francisco" |
| `{{mt_region}}` | State/province | "California" |
| `{{mt_country}}` | Country name | "United States" |
| `{{mt_employee_count}}` | Company size range | "1000-5000" |

**With CRM integration**, you also get access to:
- Salesforce/HubSpot custom fields
- Account owner name
- Deal stage and opportunity data
- Custom properties you've defined

![Dynamic content editor with variable tokens](/img/screenshots/dynamic-content-editor.png)

### Why isn't my personalization showing?

Run through this quick diagnostic checklist:

| Check This First | How to Verify | Fix |
|-----------------|---------------|-----|
| **Campaign Status** | Must show "Full personalization" or "Experiment" | Activate campaign from overview page |
| **Page Status** | Must be "Active" (not Draft or Inactive) | Edit page and toggle to Active |
| **Targeting Match** | Visitor must match your audience filters | Test with Debug Mode or widen targeting |
| **Control Group** | Visitor may be in control group (expected) | Check Insights tab for split ratio |
| **Script Installed** | Abmatic script must be on the page | Verify at Settings → Installation |
| **Browser Cache** | May be showing cached version | Try incognito/private window |

:::tip Quick Test
Use **Debug Mode** in the editor to preview personalization as different accounts. This bypasses the control group and shows exactly what matching visitors see.
:::

See [Campaign Issues Troubleshooting](/troubleshooting/campaign-issues) for detailed solutions.

---

## A/B Testing

### Does Abmatic automatically A/B test?

**Yes!** Every campaign includes built-in A/B testing without extra setup:

| What Happens | Why It Matters |
|-------------|----------------|
| A portion of matching visitors see your **original page** (control) | Establishes a baseline for comparison |
| The rest see your **personalized page** (variant) | Tests your personalization hypothesis |
| Abmatic tracks conversions for both groups | Measures the actual lift from personalization |
| Statistical significance is calculated automatically | Know when results are trustworthy |

![Control group settings showing experiment configuration](/img/screenshots/ab-control-settings.png)

:::info Measure Real Impact
This isn't vanity metrics—you'll see exactly how much personalization improves your conversions compared to showing the same content to everyone.
:::

### What control group percentage should I use?

| Control % | Best For | Trade-off |
|-----------|----------|-----------|
| **10-15%** | Mature campaigns with proven results | Maximum personalization reach, slower statistical significance |
| **20-30%** | Most campaigns (recommended) | Good balance of data quality and personalization coverage |
| **40-50%** | New personalization tests | Faster significance, but half your visitors miss personalization |

**Our recommendation:** Start with **25% control**. This gives you reliable data within 2-4 weeks while still personalizing for 75% of matching visitors.

### How long should I run a test?

Follow these minimums for trustworthy results:

| Metric | Minimum | Why |
|--------|---------|-----|
| **Duration** | 2 weeks | Accounts for day-of-week and timing variations |
| **Visitors per group** | 100+ | Provides statistical power for meaningful conclusions |
| **Conversions per group** | 20+ | Needed for conversion rate comparisons |

:::warning Don't End Early
Stopping a test when results "look good" leads to false positives. Wait for statistical significance—Abmatic will tell you when you have enough data.
:::

### How do I know if results are significant?

Check the **Insights** tab for your campaign:

| Indicator | What It Means |
|-----------|---------------|
| **Lift percentage** | How much better (or worse) personalization performed |
| **Confidence level** | Statistical certainty (aim for 95%+) |
| **Status badge** | "Significant" = you can trust these results |
| **Sample size** | Visitors and conversions in each group |

![Campaign insights showing lift and statistical significance](/img/screenshots/wp-insights-tab.png)

**Reading results:**
- **Positive lift + High confidence** = Personalization is working, scale it up
- **Negative lift + High confidence** = Test a different approach
- **Low confidence** = Need more data, keep the test running

---

## Performance

### Why is my campaign not getting impressions?

Check these items in order (most common causes first):

| Issue | How to Check | Solution |
|-------|-------------|----------|
| Campaign is paused/inactive | Look for "Inactive" badge on campaigns list | Click "Activate" on campaign overview |
| Page is in Draft status | Check Pages tab for status | Set page status to "Active" |
| Targeting too narrow | Review audience size estimate | Broaden filters or add more accounts |
| Script not on target pages | Check Settings → Installation | Install script on all pages to personalize |
| No matching traffic yet | Check Engagement tab for visitor counts | Wait 24-48 hours for data to accumulate |

![Campaign list showing status indicators](/img/screenshots/campaigns-list.png)

:::tip Check Traffic Sources
Look at the **Engagement** tab to see which accounts are visiting. If you're getting visits but no personalization, targeting is usually the issue.
:::

### My conversion rate is low. What should I change?

Prioritize changes with the highest impact:

| Optimization | Impact | Why It Works |
|-------------|--------|--------------|
| **Improve headlines** | High | First thing visitors see—makes or breaks engagement |
| **Personalize CTAs** | High | "Get Demo" vs "See how Acme Corp can benefit" |
| **Add relevant images** | Medium | Visual relevance builds immediate trust |
| **Broaden targeting** | Medium | Larger sample sizes reveal true performance |
| **Test different messages** | High | What resonates varies by segment |

:::info Personalization Best Practice
The more specific your personalization feels, the better. "Welcome, Acme Corp" beats "Welcome, visitor." Industry-specific messaging beats generic benefits.
:::

### Can I run multiple campaigns on the same page?

**Yes**, with intelligent prioritization:

| Priority Level | How It's Determined | Example |
|---------------|---------------------|---------|
| **Highest** | Most specific targeting | "Account = Acme Corp" beats "Industry = Tech" |
| **Medium** | Combination of filters | "Tech industry + Enterprise size" |
| **Lowest** | Broadest targeting | "All identified visitors" |

When multiple campaigns match a visitor, **the most specific one wins**. This ensures your named account personalization always takes priority over broader targeting.

---

## Campaign Management

### How do I duplicate a campaign?

You can duplicate any campaign to use as a template:

1. Open the campaign you want to copy
2. Click the **Actions** menu (⋮)
3. Select **Duplicate Campaign**
4. Edit the targeting, content, and settings
5. Activate when ready

**What gets copied:** Targeting rules, pages, content changes, settings
**What doesn't copy:** Analytics data, visitor assignments (starts fresh)

### Can I schedule campaigns?

Campaigns can be:
- **Always active** - Runs continuously until you stop it
- **Date-limited** - Set start and end dates for time-bound campaigns

For complex scheduling needs, contact support for advanced automation options.

### How do I archive old campaigns?

Keep your campaign list clean while preserving historical data:

1. Open the campaign to archive
2. Click **Actions** → **Archive**
3. Archived campaigns move to the "Archived" filter view

**Archived campaigns:**
- Stop running immediately
- Preserve all analytics data
- Can be unarchived and reactivated anytime
- Don't count toward active campaign limits

---

## Analytics & Reporting

### What metrics should I track?

Focus on these key performance indicators:

| Metric | What It Tells You | Goal |
|--------|------------------|------|
| **Impressions** | How many visitors saw personalization | Growing reach |
| **Engagement Rate** | % of visitors who interacted | Higher than control |
| **Conversion Rate** | % who completed your goal action | Positive lift vs control |
| **Lift** | Performance improvement over control | Statistically significant positive |

![Campaign performance metrics dashboard](/img/screenshots/wp-performance-tab.png)

### Where do I see campaign results?

Each campaign has multiple analytics views:

| Tab | What You'll Find |
|-----|-----------------|
| **Performance** | Impressions, conversions, rates over time |
| **Insights** | A/B test results with statistical significance |
| **Engagement** | Which accounts visited and their activity |
| **Audience** | Targeting breakdown and reach |

### Can I export campaign data?

**Yes!** Export options are available:
- **CSV export** from any analytics tab
- **Scheduled reports** to email stakeholders
- **API access** for custom reporting (Enterprise plans)

See [Analytics Overview](/analytics/overview) for detailed reporting capabilities.

---

## Related Resources

- [Website Personalization Guide](/campaigns/website-personalization) - Deep dive into site personalization
- [Campaigns Overview](/campaigns/overview) - Getting started with campaigns
- [A/B Testing](/campaigns/ab-testing) - Statistical testing best practices
- [Campaign Issues Troubleshooting](/troubleshooting/campaign-issues) - Fix common problems
