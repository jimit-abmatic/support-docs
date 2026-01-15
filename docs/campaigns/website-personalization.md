---
id: website-personalization
title: Website Personalization Campaigns
sidebar_label: Website Personalization
sidebar_position: 2
---

# Website Personalization Campaigns

Stop showing the same generic website to every visitor. With website personalization campaigns, you can deliver tailored experiences that speak directly to each account's industry, company size, and buying stage—turning your website into your highest-converting sales asset.

## Why Website Personalization Drives Results

| Generic Website | Personalized Website |
|----------------|----------------------|
| Same message for everyone | Industry-specific messaging |
| Generic CTAs ("Get Started") | Relevant CTAs ("See Enterprise Demo") |
| Static case studies | Case studies from their industry |
| Average 2% conversion | **3-5x higher conversion rates** |

:::tip Real Results
Companies using Abmatic AI personalization see an average **2.3x increase** in demo requests from target accounts.
:::

---

## Getting Started

### Step 1: Navigate to Campaigns

Log into [app.abmatic.ai](https://app.abmatic.ai) and click **Campaigns** in the left sidebar.

![Campaigns List](/img/screenshots/campaigns-list.png)

You'll see your campaign dashboard with:
- **+ CAMPAIGN** button to create new campaigns
- Campaign type cards showing counts by category
- Campaign table with status, visitors, and performance data

---

### Step 2: Create Your Campaign

Click the **+ CAMPAIGN** button to open the campaign type selector.

![Campaign Create Modal](/img/screenshots/wp-create-modal.png)

**For website personalization, choose:**

| Campaign Type | Best For | Example |
|--------------|----------|---------|
| **Inbound** | Personalizing pages visitors already land on | Homepage, pricing, product pages |
| **Outbound** | Creating personalized landing pages for campaigns | Sales outreach, ABM campaigns |
| **A/B Testing** | Testing headline and CTA variations | Optimizing conversion rates |
| **Banner & Popup** | Urgency messages and special offers | Limited-time promotions |

Select **Inbound** for most website personalization use cases.

---

### Step 3: Define Your Audience

After creating your campaign, the **AUDIENCE** tab is where you specify who sees your personalized content.

![Campaign Audience Tab](/img/screenshots/wp-audience-tab.png)

**Build targeting rules to reach the right accounts:**

| Filter Type | Use Case | Example |
|-------------|----------|---------|
| **Account List** | Target specific named accounts | "Enterprise Target Accounts" |
| **Industry** | Industry-specific messaging | Technology, Healthcare, Finance |
| **Company Size** | Tailor by organization scale | 1000+ employees for enterprise |
| **Location** | Regional personalization | North America, EMEA, APAC |
| **Behavior** | Engagement-based targeting | Visitors with 3+ page views |

:::tip Targeting Strategy
Start with your highest-value segments:
- **Enterprise accounts** → Emphasize security, scale, support
- **Mid-market** → Focus on ease-of-use, time-to-value
- **Industry verticals** → Use relevant case studies and terminology
:::

**How to add rules:**
1. Click **+ RULE**
2. Select your filter type
3. Set the condition (Is, Is Not, Contains)
4. Choose values
5. Click **SAVE**

Multiple rules use AND logic—visitors must match all rules to see the campaign.

---

### Step 4: Add Pages to Personalize

Click the **PAGES** tab to specify which pages get personalized for this audience.

![Campaign Pages Tab](/img/screenshots/wp-pages-tab.png)

**The pages table shows:**
- Page URLs with active/inactive status
- Visitor counts (personalized vs. control)
- CTA click data by variation
- Last updated timestamps

**To add a page:**
1. Click **+ PAGE**
2. Enter the full URL (e.g., `https://yoursite.com/pricing`)
3. Click Add
4. Click the page URL to open the **Visual Page Editor**

**What to personalize:**
| Element | Personalization Ideas |
|---------|----------------------|
| **Headlines** | "Built for Enterprise" vs "Built for Growing Teams" |
| **CTAs** | "Get Enterprise Demo" vs "Start Free Trial" |
| **Images** | Industry-relevant hero images |
| **Social Proof** | Case studies from their vertical |
| **Pricing** | Enterprise vs self-serve messaging |

---

### Step 5: Monitor Performance

The **INSIGHTS** tab shows how your campaign is performing.

![Campaign Insights](/img/screenshots/wp-insights-tab.png)

**Key metrics at a glance:**
| Metric | What It Measures |
|--------|------------------|
| **CTA Clicks** | Engagement with personalized CTAs |
| **Conversions** | Goal completions (demos, signups, etc.) |
| **CVRL** | Conversion rate - personalized group |
| **CTRL** | Conversion rate - control group |
| **Total Visitors** | Campaign reach |

**The chart compares:**
- **Personalized** (green) vs **Control** (red) performance over time
- **Lift** = How much better personalized performs

---

### Step 6: Analyze Engagement

The **ENGAGEMENT** tab reveals how visitors interact with your personalized content.

![Campaign Engagement](/img/screenshots/wp-engagement-tab.png)

**Each visit shows:**
| Data Point | Why It Matters |
|------------|----------------|
| **Time on Page** | Longer = more engaged |
| **Page Views** | Multiple pages = serious interest |
| **Scroll Depth** | How far they read |
| **Engagement Score** | 0-100 composite score |

High engagement scores (70+) indicate visitors finding value in your personalized content.

---

### Step 7: Review Performance Details

The **PERFORMANCE** tab provides visitor-level analytics.

![Campaign Performance](/img/screenshots/wp-performance-tab.png)

**Sub-tabs available:**
- **VISITORS** - Individual visitor data with company domain
- **CTA CLICKS** - Which CTAs are getting clicks
- **ACCOUNTS** - Company-level aggregated data
- **CONVERSIONS** - Conversion event details

Use this data to:
- Identify which accounts are engaging most
- See exactly what pages visitors viewed
- Track individual prospect journeys

---

## Best Practices

### Do This ✓

| Practice | Why |
|----------|-----|
| Start with 1-2 high-traffic pages | Get data quickly, learn what works |
| Make meaningful changes | Headlines, CTAs, and images—not just colors |
| Use a 50/50 control group initially | Prove lift with statistical significance |
| Run campaigns for 2+ weeks | Gather enough data for valid conclusions |
| Track downstream metrics | Demo requests, pipeline, not just clicks |

### Avoid This ✗

| Mistake | Problem |
|---------|---------|
| Personalizing everything at once | Can't tell what's working |
| Tiny changes only | Won't move the needle |
| Skipping the control group | Can't prove ROI |
| Stopping too early | Results may not be statistically significant |
| Measuring only page views | Doesn't show business impact |

---

## Campaign Status Guide

| Status | Meaning |
|--------|---------|
| **100% Full personalization** | All matching visitors see personalized content |
| **50% Experiment** | Half personalized, half control (A/B test mode) |
| **0% Inactive** | Campaign is paused—no personalization |

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
| **AUDIENCE rules** | Does the visitor match ALL targeting rules? |
| **Page status** | Is the page set to Active in PAGES tab? |
| **Control group** | Visitor may be randomly in control group |
| **Script installed** | Verify Abmatic script is on the page |
| **Campaign status** | Is it 100% active or 0% inactive? |

### No Data Appearing?

- Data refreshes every few minutes—give it time
- Verify the date range includes recent activity
- Check that pages are both Active and Published
- Ensure you have traffic from the target audience

---

## What's Next?

| Goal | Next Step |
|------|-----------|
| Edit page content | [Page Editor Guide](/campaigns/page-editor) |
| Run experiments | [A/B Testing](/campaigns/ab-testing) |
| Add dynamic tokens | [Dynamic Content](/campaigns/dynamic-content) |
| Fix issues | [Campaign Troubleshooting](/troubleshooting/campaign-issues) |
