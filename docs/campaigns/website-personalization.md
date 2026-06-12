---
id: website-personalization
title: Website Personalization Campaigns
sidebar_label: Website Personalization
sidebar_position: 2
---

# Website Personalization Campaigns

Stop showing the same generic website to every visitor. Website personalization campaigns let you deliver tailored experiences that speak to each account's industry, company size, and buying stage—turning your website into a stronger conversion asset.

## Why Website Personalization Helps

| Generic Website | Personalized Website |
|----------------|----------------------|
| Same message for everyone | Industry-specific messaging |
| Generic CTAs ("Get Started") | Relevant CTAs ("See Enterprise Demo") |
| Static case studies | Case studies from their industry |
| One experience, no measurement | A built-in control group that proves what works |

:::tip Every campaign measures itself
Each personalization campaign automatically holds back a control group, so you can see the lift personalization adds rather than guessing. See [A/B Testing](/campaigns/ab-testing) for how the split works.
:::

---

## Getting Started

### Step 1: Navigate to Campaigns

Log into [app.abmatic.ai](https://app.abmatic.ai) and click **Campaigns** in the left icon sidebar.

![Campaigns List](/img/screenshots/campaigns-list.png)

The Campaigns list shows:

- A **+ Campaign** button (top right) to create a new campaign
- Summary cards with campaign counts by type
- A table with each campaign's status, unique visitors, and performance

---

### Step 2: Create Your Campaign

Click **+ Campaign** to open the full-screen **Create Campaign** dialog. Campaign types are organized into three columns: **Personalization**, **Advertising**, and **Agentic**.

![Create Campaign dialog with Personalization, Advertising, and Agentic columns](/img/screenshots/wp-create.png)

For website personalization, choose one of the **Personalization** types:

| Campaign Type | Best For | Example |
|--------------|----------|---------|
| **Inbound** | Personalizing pages visitors already land on | Homepage, pricing, product pages |
| **Outbound** | Building personalized landing pages for outreach | Sales and ABM campaigns |
| **A/B Testing** | Comparing two different page designs | Optimizing conversion rates |
| **Widget** | Banners, popups, and other nudges layered on a page | Limited-time offers, exit-intent messages |

Select **Inbound** for most website personalization use cases. The **Widget** type was previously called "Banner & Popup"; it covers banners, popups, exit-intent modals, and sidebar widgets layered on a page.

---

### Step 3: Define Your Audience

After the campaign is created, open the **Audience** tab to choose who sees your personalized content.

![Campaign Audience tab](/img/screenshots/wp-audience-tab.png)

Build targeting rules to reach the right accounts:

| Filter Type | Use Case | Example |
|-------------|----------|---------|
| **Account List** | Target specific named accounts | "Enterprise Target Accounts" |
| **Industry** | Industry-specific messaging | Technology, Healthcare, Finance |
| **Company Size** | Tailor by organization scale | 1000+ employees for enterprise |
| **Location** | Regional personalization | North America, EMEA, APAC |
| **Behavior** | Engagement-based targeting | Visitors with 3+ page views |

:::tip Targeting Strategy
Start with your highest-value segments:
- **Enterprise accounts** → emphasize security, scale, and support
- **Mid-market** → focus on ease-of-use and time-to-value
- **Industry verticals** → use relevant case studies and terminology
:::

**To add a rule:**

1. Click **+ Rule**.
2. Select the filter type.
3. Set the condition (**Is**, **Is Not**, **Contains**).
4. Choose the values.
5. Click **Save**.

Multiple rules use AND logic—visitors must match every rule to see the campaign.

---

### Step 4: Add Pages to Personalize

Open the **Pages** tab to choose which pages get personalized for this audience.

![Campaign Pages tab](/img/screenshots/wp-pages-tab.png)

The pages table shows:

- Page URLs with active/inactive status
- Visitor counts (personalized vs. control)
- CTA click data by version
- Last updated timestamps

**To add a page:**

1. Click **+ Page**.
2. Enter the full URL (for example, `https://yoursite.com/pricing`).
3. Click **Add**.
4. Click the page URL to open the **Visual Page Editor**.

**Ideas for what to personalize:**

| Element | Personalization Ideas |
|---------|----------------------|
| **Headlines** | "Built for Enterprise" vs. "Built for Growing Teams" |
| **CTAs** | "Get Enterprise Demo" vs. "Start Free Trial" |
| **Images** | Industry-relevant hero images |
| **Social Proof** | Case studies from the visitor's vertical |
| **Pricing** | Enterprise vs. self-serve messaging |

See the [Page Editor](/campaigns/page-editor) guide for the full editing workflow.

---

### Step 5: Monitor Performance

The **Insights** tab shows how the campaign is performing.

![Campaign Insights showing CTA Clicks, Conversions, CVRL, CTRL, and a Total / Personalized / Control trend chart](/img/screenshots/wp-insights.png)

The stat cards at the top show:

| Metric | What It Measures |
|--------|------------------|
| **CTA Clicks** | Engagement with personalized CTAs |
| **Conversions** | Goal completions (demos, signups, etc.) |
| **CVRL** | Conversion rate of the **personalized** group |
| **CTRL** | Conversion rate of the **control** group |
| **Total Visitors** | Combined reach across both groups |

The chart plots three lines over your selected date range—**Total** (blue), **Personalized** (green), and **Control** (red). Use the sub-tabs (**Visitors**, **CTA**, **CTR**, **Conversion**, **CVR**) to switch which metric the chart displays. When **CVRL** is higher than **CTRL**, personalization is winning.

:::note Compare date ranges
The date picker in the top right supports comparing two date ranges, so you can see whether performance is improving over time.
:::

---

### Step 6: Analyze Engagement

The **Engagement** tab shows how visitors interact with your personalized content.

![Campaign Engagement tab](/img/screenshots/wp-engagement-tab.png)

Each visit shows:

| Data Point | Why It Matters |
|------------|----------------|
| **Time on Page** | Longer means more engaged |
| **Page Views** | Multiple pages means serious interest |
| **Scroll Depth** | How far they read |
| **Engagement Score** | A 0–100 composite score |

High engagement scores (70+) usually mean visitors are finding value in the personalized content.

---

### Step 7: Review Performance Details

The **Performance** tab provides visitor-level analytics.

![Campaign Performance tab](/img/screenshots/wp-performance-tab.png)

Sub-tabs available:

- **Visitors** – individual visitor data with company domain
- **CTA Clicks** – which CTAs are getting clicks
- **Accounts** – company-level aggregated data
- **Conversions** – conversion event details

Use this data to spot which accounts are engaging most, see exactly what pages visitors viewed, and track individual prospect journeys.

---

## Best Practices

### Do This

| Practice | Why |
|----------|-----|
| Start with 1–2 high-traffic pages | Get data quickly and learn what works |
| Make meaningful changes | Headlines, CTAs, and images—not just colors |
| Run an even split at first | Prove lift with a clean control comparison |
| Run campaigns for 2+ weeks | Gather enough data for valid conclusions |
| Track downstream metrics | Demo requests and pipeline, not just clicks |

### Avoid This

| Mistake | Problem |
|---------|---------|
| Personalizing everything at once | You can't tell what's working |
| Tiny changes only | Won't move the needle |
| Skipping the control group | Can't prove the impact |
| Stopping too early | Results may not be reliable yet |
| Measuring only page views | Doesn't show business impact |

---

## Campaign Status Guide

A campaign's status sets the share of matching visitors who see the personalized experience. Change it from the **Status** menu in the Campaigns list.

| Status | Meaning |
|--------|---------|
| **Full personalization** | 100% of matching visitors see personalized content (no live control comparison) |
| **Ongoing** | 90% personalized, 10% held back as a control |
| **Experiment** | 50/50 split—the cleanest A/B comparison |
| **Inactive** | 0%—the campaign is paused and nobody sees personalization |

You may also see **No Active Page** when a campaign has no active personalized page yet.

---

## High-Impact Campaign Ideas

| Campaign | Target Audience | Personalization |
|----------|----------------|-----------------|
| **Enterprise Welcome** | 1000+ employees | Security features, SLA guarantees, dedicated support |
| **Industry Vertical** | Healthcare, Finance, Tech | Vertical-specific case studies and terminology |
| **Competitor Displacement** | Competitor customers | Side-by-side comparisons, migration guides |
| **Return Visitor** | 3+ sessions | "Welcome back" messaging, deeper content |
| **High Intent** | Visited pricing page | Direct CTAs, sales connect options |

---

## Troubleshooting

### Campaign Not Showing?

| Check | Solution |
|-------|----------|
| **Audience rules** | Does the visitor match every targeting rule? |
| **Page status** | Is the page set to Active in the Pages tab? |
| **Control group** | The visitor may be in the control group |
| **Script installed** | Verify the Abmatic AI script is on the page |
| **Campaign status** | Is it active (Full personalization / Ongoing / Experiment) rather than Inactive? |

### No Data Appearing?

- Data refreshes every few minutes—give it time.
- Verify the date range includes recent activity.
- Check that pages are both Active and Published.
- Make sure you have traffic from the target audience.

---

## What's Next?

| Goal | Next Step |
|------|-----------|
| Edit page content | [Page Editor Guide](/campaigns/page-editor) |
| Run experiments | [A/B Testing](/campaigns/ab-testing) |
| Add dynamic tokens | [Dynamic Content](/campaigns/dynamic-content) |
| Fix issues | [Campaign Troubleshooting](/troubleshooting/campaign-issues) |
