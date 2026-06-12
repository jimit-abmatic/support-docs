---
id: first-campaign
title: Create Your First Campaign
sidebar_label: First Campaign
sidebar_position: 3
---

# Create Your First Campaign

Turn anonymous website visitors into engaged prospects with your first personalization campaign. By showing each visitor content that matches their company, industry, or behavior, you make your website more relevant the moment they arrive.

Follow this step-by-step guide to launch a website personalization campaign in Abmatic AI. You'll have a live campaign delivering tailored content to your target accounts — no coding required.

| What You'll Achieve | Business Impact |
|---------------------|-----------------|
| Personalized headlines by company | Instant recognition and relevance |
| Industry-specific messaging | Higher engagement from qualified visitors |
| A/B testing foundation | Data-driven optimization from day one |
| Real-time visitor insights | Understand who's engaging with your content |

---

## Before You Start

Ensure these foundations are in place:

| Requirement | Why It Matters | Setup Guide |
|-------------|----------------|-------------|
| Tracking script installed | Enables visitor identification and data collection | [Install Script Guide](/getting-started/install-script) |
| Target account list (optional) | Focus personalization on high-value prospects | [Audiences](/audiences/overview) |
| High-traffic page selected | More visitors = faster results and better data | Start with homepage or pricing |

:::tip Start Smart
**Best first page:** Your homepage. It gets the most traffic, delivers results fastest, and shows immediate ROI. Once you see success there, expand to pricing, demo, and solution pages.
:::

---

## Step 1: Open the Campaigns Page

1. Log into [app.abmatic.ai](https://app.abmatic.ai)
2. Click **Campaigns** in the left sidebar

You'll see your campaigns dashboard—the command center for all your personalization efforts. Each campaign displays its status, type, and real-time performance metrics.

![Campaigns List](/img/screenshots/first-campaign-list.png)

*The campaigns list showing active campaigns like "Inbound - Enterprise" with status and engagement metrics.*

---

## Step 2: Start Creating a Campaign

Click the **+ CAMPAIGN** button in the top-right corner to open the create dialog.

![The + CAMPAIGN button opens the create dialog](/img/screenshots/first-campaign-create-button.png)

*The + CAMPAIGN button opens a full-screen dialog where you pick a campaign type.*

---

## Step 3: Choose Your Campaign Type

The create dialog lists every campaign type, organized into three columns:

| Column | Campaign Types |
|--------|----------------|
| **Personalization** | Inbound, Outbound, A/B Testing, Widget |
| **Advertising** | Display Advertising, LinkedIn, OpenAI Ads, Retargeting |
| **Agentic** | Agentic Flow, Sequence, Intent, Agentic Chat |

![The Create Campaign dialog with Personalization, Advertising, and Agentic columns](/img/screenshots/fc-create-type.png)

*Choose a type from one of the three columns. For website personalization, use the Personalization column.*

### Recommended: Inbound (Website Personalization)

| Personalization Type | Best For | Example Use Case |
|----------------------|----------|------------------|
| **Inbound** | Any visitor matching your rules | "Show enterprise messaging to visitors from 1000+ employee companies" |
| **Outbound** | Specific named accounts you've collected | "Personalize for our top 50 target accounts by name" |

**For your first campaign, choose Inbound.** It requires no pre-existing collections and immediately personalizes for any visitor matching your criteria — so you see results faster.

Click **Inbound** under **Personalization**.

---

## Step 4: Select Your Audience (Outbound Only)

If you chose **Outbound**, you'll select the specific accounts to target:

1. Choose **Account** or **Contact** targeting
2. Pick a **Collection** from the dropdown — these are the saved lists you've built in [Audiences](/audiences/overview)

Outbound campaigns personalize for the named accounts in your chosen collection, so make sure you've created one first.

If you chose **Inbound**, skip to Step 5 — you'll configure dynamic targeting rules after the campaign is created.

---

## Step 5: Name Your Campaign

Your campaign is created with a default name. Give it a descriptive name that helps you quickly identify its purpose:

1. Click the **campaign name** at the top of the detail view
2. Enter a name following the `[Page] - [Audience]` pattern

![Campaign Detail View](/img/screenshots/first-campaign-detail.png)

*Click the campaign name to rename it—like "Inbound - Enterprise" shown here.*

:::tip Naming Best Practice
Use the format **[Page/Purpose] - [Audience Segment]** for easy identification:

| Good Names | What They Tell You |
|------------|-------------------|
| "Inbound - Enterprise" | Enterprise visitors across all inbound traffic |
| "Homepage - Financial Services" | Financial sector visitors on homepage |
| "Pricing - Return Visitors" | Repeat visitors on pricing page |
| "Demo - Target Accounts" | Named accounts viewing demo page |
:::

---

## Step 6: Set Up Targeting Rules (Inbound Only)

For Inbound campaigns, you define dynamic rules that determine which visitors see personalized content. This is where Abmatic AI shines—real-time visitor identification powers intelligent targeting.

1. Click the **Audience** tab in your campaign
2. Build your filter rules using the visual rule builder

![Campaign Audience Tab](/img/screenshots/first-campaign-audience.png)

*The Audience tab with filter rules—target by company attributes, behavior, or both.*

### Example Targeting Rules

| Target Segment | Rule Configuration | Why It Works |
|----------------|-------------------|--------------|
| **Enterprise Tech** | Industry IS "Technology" AND Employee Count ≥ 1000 | High-value B2B prospects |
| **Return Visitors** | Total Sessions > 1 | Engaged, familiar with your brand |
| **Pricing Evaluators** | Visited Pages CONTAINS "/pricing" | Bottom-of-funnel intent |
| **Local Prospects** | Country IS "United States" AND State IS "California" | Geographic relevance |

### Set Your Control Group

The control group is essential for measuring lift—visitors in control see your original page, creating a baseline for comparison.

| Setting | Recommendation | Why |
|---------|---------------|-----|
| **Control %** | **20%** for first campaigns | Enough data for statistical significance while maximizing personalized reach |
| **Scientific approach** | 30-50% for critical A/B tests | When precise measurement matters more than reach |

![Campaign Control Group](/img/screenshots/first-campaign-control.png)

*Set control group percentage to establish your measurement baseline.*

---

## Step 7: Add a Page to Personalize

Now add the page where personalization will appear. You can add multiple pages to a single campaign.

1. Click the **Pages** tab
2. Click **Add Page**
3. Enter your page URL (e.g., `https://yoursite.com/`)
4. Click **Add**

![Campaign Pages Tab](/img/screenshots/first-campaign-pages.png)

*The Pages tab shows all pages in this campaign—click Add Page to include more.*

Your page appears in the list. Click the page name to open the **Visual Editor** where you'll make your personalization changes.

:::tip URL Tips
- Include the full URL with `https://`
- Use wildcards for dynamic URLs: `https://yoursite.com/products/*`
- Add your highest-traffic page first for faster results
:::

---

## Step 8: Personalize Your Page

The Visual Editor opens with your live page loaded. This is where you create personalized experiences—no coding required. The editor displays your actual page with an editing panel on the right side.

### Make Your First Edit: Change the Headline

1. **Click** on your main headline—a blue outline highlights your selection
2. In the **side panel**, locate the text content field
3. Replace generic text with personalized messaging

**Before:**
```
Welcome to [Your Company]
```

**After (using personalization variables):**
```
Welcome back, {{mt_company}}!
```

### Dynamic Personalization Variables

Insert real-time visitor data using variables. Click **{{ }}** or type `{{` to access:

| Variable | Displays | Example Output |
|----------|----------|----------------|
| `{{mt_company}}` | Identified company name | "Acme Corporation" |
| `{{mt_industry}}` | Company industry | "Technology" |
| `{{mt_city}}` | Visitor's city | "San Francisco" |
| `{{mt_employee_count}}` | Company size | "1,000-5,000" |

:::tip Always write a fallback
A variable only fills in when Abmatic AI has that data for the visitor. Write your copy so it still reads naturally if a value is missing, and use the **Preview** step (next) to check how it looks with and without data.
:::

### Recommended First-Campaign Changes

For maximum impact with minimum complexity, focus on these high-value edits:

| Element | Personalization | Impact |
|---------|-----------------|--------|
| **Main headline** | Include `{{mt_company}}` | Immediate recognition—visitors know you see them |
| **Subheadline** | Reference `{{mt_industry}}` | Industry relevance builds trust |
| **CTA button** | Specific action text | "See {{mt_industry}} Solutions" converts better |

:::warning Keep It Simple
**2-3 changes maximum** for your first campaign. This lets you:
- Measure clear cause-and-effect from each change
- See results faster with less complexity
- Build a foundation for iterative optimization
:::

---

## Step 9: Preview Your Changes

Before going live, verify everything looks perfect with the preview feature.

1. Click **Preview** in the editor toolbar
2. Enter a test company name to simulate personalization
3. Review how the page renders with real data

### Pre-Launch Checklist

| Verification | What to Confirm |
|--------------|-----------------|
| **Variables render** | `{{mt_company}}` displays as "Acme Corp", not raw code |
| **Layout intact** | Personalized text doesn't break page formatting |
| **Mobile responsive** | Changes look good on smaller screens |
| **Fallback works** | Test with no company data—does it degrade gracefully? |

---

## Step 10: Publish Your Campaign

You're ready to deliver personalized experiences!

1. **Review** your targeting rules one final time
2. Click **Publish** in the top-right corner
3. Confirm when prompted

Once published, your campaign status changes to **Active** and personalization begins immediately.

### After Publishing

Your campaign goes live instantly. Visitors matching your targeting criteria see personalized content in real-time—no page refresh or cache clearing needed.

| Post-Publish Status | What It Means |
|---------------------|---------------|
| **Active** | Campaign is live and personalizing |
| **Visitors accumulating** | Data starts appearing within minutes |
| **Control/Test split active** | Statistical comparison has begun |

---

## Step 11: Monitor Your Results

Check back in 24-48 hours to see your campaign's impact. The Insights tab provides real-time performance data.

1. Go to **Campaigns** → click your campaign
2. Click the **Insights** tab

![Campaign Insights](/img/screenshots/first-campaign-insights.png)

*The Insights tab shows real-time performance metrics comparing personalized vs. control groups.*

### Key Metrics to Track

| Metric | What It Tells You | Healthy Target |
|--------|-------------------|----------------|
| **Visitors** | Total qualifying visitors | Depends on traffic |
| **Personalized %** | Those who saw changes | Should match (100% - Control%) |
| **Control %** | Those who saw original | Your baseline comparison |
| **Engagement Rate** | Interactions per visitor | Higher than control |
| **Conversion Lift** | % improvement vs control | Positive lift = winning |

### Optimization Timeline

| Phase | Action | Why |
|-------|--------|-----|
| **Days 1-3** | Observe only—let data accumulate | Statistical significance needs volume |
| **Week 1** | Review trends—is lift directionally positive? | Early signal validation |
| **Week 2+** | Iterate based on data—refine messaging or targeting | Data-driven optimization |
| **Monthly** | Expand successful patterns to more pages | Scale what works |

---

## Campaign Strategy Guide

### High-Impact First Campaign Ideas

| Page | Personalization Strategy | Why It Works |
|------|--------------------------|--------------|
| **Homepage** | Industry-specific headline + CTA | High traffic means you gather data quickly |
| **Pricing** | Company size messaging ("Enterprise pricing for teams like yours") | Helps visitors self-qualify |
| **Demo page** | Company name in headline | A personal touch at the decision moment |
| **Solutions** | Industry-specific use cases | Faster understanding of how you can help |

### Common Mistakes to Avoid

| Mistake | Why It Hurts | Better Approach |
|---------|--------------|-----------------|
| Too many changes at once | Can't attribute results | **2-3 changes max**—measure, then iterate |
| 0% control group | No baseline = no proof of lift | **20% control minimum**—prove ROI |
| Overly narrow targeting | Not enough traffic for significance | **Start broad**, narrow based on data |
| Multiple pages simultaneously | Analysis paralysis | **One page first**—master it, then expand |
| Set and forget | Missed optimization opportunities | **Weekly reviews**—personalization is iterative |

---

## Troubleshooting Your First Campaign

### No Visitors Showing

**Wait 24 hours first**—data accumulation takes time. If still empty, verify:

| Check | How to Verify |
|-------|---------------|
| Tracking script installed | [Verify installation status](/getting-started/install-script) |
| Targeting rules | Are filters too restrictive? Broaden temporarily to test |
| Page traffic | Check Google Analytics—does the page receive visits? |
| Campaign status | Confirm status shows "Active" (not Draft or Paused) |

### Personalization Not Appearing

| Issue | Solution |
|-------|----------|
| You're in control group | Open incognito window—new session, new assignment |
| Campaign not published | Verify status shows "Active" with green indicator |
| Company doesn't match rules | Test with a company you know matches your targeting |
| Browser caching | Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) |

### Analytics Showing Empty

- **Normal delay:** Analytics update every 2-5 minutes
- **Minimum traffic needed:** ~50 visitors for meaningful trends
- **Date range:** Ensure you're viewing the correct time period
- **Patience:** First 24-48 hours are data-gathering phase

---

## Next Steps

Now that your first campaign is live, continue building your personalization program:

| Next Action | Why It Matters | Guide |
|-------------|----------------|-------|
| **Set up conversion tracking** | Measure real business outcomes, not just views | [Conversions Overview](/conversions/overview) |
| **Master the Page Editor** | Unlock advanced personalization techniques | [Page Editor Guide](/campaigns/page-editor) |
| **Expand to more pages** | Scale successful patterns across your site | [Website Personalization](/campaigns/website-personalization) |
| **A/B test variations** | Systematically optimize messaging | [A/B Testing Guide](/campaigns/ab-testing) |

---

## Related Resources

- [Website Personalization Deep Dive](/campaigns/website-personalization) — Full capabilities and advanced features
- [Audience Targeting](/audiences/filters) — Build sophisticated targeting rules
- [Campaign Troubleshooting](/troubleshooting/campaign-issues) — Diagnose and fix common issues
- [Use Cases & Examples](/getting-started/use-cases) — Inspiration from successful implementations
