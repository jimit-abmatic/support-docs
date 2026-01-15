---
id: overview
title: Conversions Overview
sidebar_label: Overview
sidebar_position: 1
---

# Conversions Overview

Every marketing dollar should be accountable. Abmatic AI's conversion tracking shows you exactly which campaigns drive results—from demo requests to pricing page visits—so you can double down on what works and optimize what doesn't.

---

## Why Conversion Tracking Matters

| Without Conversion Tracking | With Abmatic Conversions |
|-----------------------------|--------------------------|
| "Our campaigns are running" | "Campaign X drove 47 demo requests" |
| Guessing which content works | Data showing 68% lift from personalization |
| No ROI visibility | Clear attribution to pipeline |
| Optimization by gut feel | A/B tested decisions |

---

## What You Can Track

Abmatic captures the actions that matter most to your business:

| Conversion Type | Examples | Best For |
|-----------------|----------|----------|
| **Click Events** | CTA buttons, download links, video plays | Measuring engagement with specific elements |
| **Page Views** | Pricing page, thank you pages, case studies | Tracking intent signals and funnel progression |
| **Form Submissions** | Demo requests, contact forms, newsletter signups | Capturing lead generation metrics |
| **Custom Events** | Calculator completions, interactive tools | Tracking unique conversion actions |

---

## Accessing the Conversions Dashboard

1. Click **Conversions** in the left sidebar
2. View your conversion performance across all campaigns

![Conversions Dashboard](/img/screenshots/conversions-overview.png)

*The Conversions dashboard showing 64 campaigns with conversion data for Book a Demo, Banner, and other events.*

---

## Understanding the Interface

### Two Views for Complete Control

| Tab | Purpose | When to Use |
|-----|---------|-------------|
| **Conversions (last 60 days)** | See conversion performance by campaign | Daily monitoring, campaign optimization |
| **Manage** | Create, edit, and configure conversion goals | Setting up new tracking, adjusting existing goals |

### The Conversions Tab

The main view shows how each campaign contributes to your goals:

![Conversions Overview](/img/screenshots/conversions-overview.png)

*Each row shows a campaign with its unique visitors and conversion rates for each tracked event.*

| Column | What It Shows | Why It Matters |
|--------|---------------|----------------|
| **Campaigns** | Campaign name (expandable for details) | Identify which campaigns to analyze |
| **Unique Visitors** | Personalized vs. control visitor counts | Understand traffic distribution |
| **[Event Name]** | Conversion rate with lift percentage | See which campaigns drive results |

**Pro tip:** Click the expand arrow (>) on any campaign row to see detailed conversion counts, rates, and lift for both personalized and control groups.

### The Manage Tab

Configure your conversion tracking from one central location:

![Conversions Manage](/img/screenshots/conversions-manage.png)

*The Manage tab showing 5 configured conversion events with their types and settings.*

| Column | What It Shows | Action |
|--------|---------------|--------|
| **Event** | Conversion goal name | Click to edit settings |
| **Event Type** | Click Event or Page View | Indicates tracking method |
| **Attached To** | Elements or URLs being tracked | Shows tracking scope |
| **Main Event** | Primary conversion indicator | Mark your most important goal |
| **Visibility** | Active/inactive toggle | Control whether event is tracked |

---

## Creating Conversion Goals

### Step 1: Click + Conversion

From either tab, click the **+ Conversion** button in the top right corner.

### Step 2: Choose Your Tracking Method

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Click Event** | Track clicks on specific elements using the visual editor | CTA buttons, links, form submits |
| **Page View** | Track visits to specific URLs | Thank you pages, pricing views |

### Click Event Setup

1. Enter the **page URL** where the element exists
2. Click **Click Event** to open the visual editor
3. Click on the element you want to track
4. Name your conversion goal
5. Save

### Page View Setup

1. Click **Page View**
2. Enter the **URL pattern** to track (supports wildcards)
3. Name your conversion goal
4. Save

---

## Understanding Your Metrics

### Key Performance Indicators

| Metric | What It Measures | Good Performance |
|--------|------------------|------------------|
| **Conversion Rate (CVR)** | % of visitors who convert | Depends on goal type (demos: 2-5%, pricing views: 10-20%) |
| **Lift** | Improvement from personalization | Positive lift indicates personalization is working |
| **Personalized** | Conversions from personalized visitors | Higher than control = success |
| **Control** | Conversions from non-personalized visitors | Baseline for comparison |

### Understanding Lift

Lift shows the impact of your personalization:

```
Lift = ((Personalized CVR - Control CVR) / Control CVR) × 100
```

| Lift Value | What It Means | Action |
|------------|---------------|--------|
| **+20% or higher** | Strong personalization impact | Scale this campaign |
| **+5% to +20%** | Positive impact | Continue and optimize |
| **0% to +5%** | Marginal improvement | Test new variations |
| **Negative** | Control outperforming | Review personalization strategy |

---

## Best Practices

### Choose High-Value Conversions

| Track These | Why |
|-------------|-----|
| Demo request forms | Direct pipeline indicator |
| Pricing page visits | Shows purchase intent |
| Free trial signups | Revenue potential |
| Contact form submissions | Sales opportunities |

| Avoid These | Why |
|-------------|-----|
| Homepage visits | Too common, low signal |
| Generic page views | Not specific enough |
| Scroll events | Doesn't indicate intent |

### Set Up Before Launch

Conversions only track from when they're created forward:

- **Do:** Create goals BEFORE launching campaigns
- **Do:** Test that goals fire correctly
- **Do:** Verify data appears in the dashboard
- **Don't:** Expect historical data to backfill

### Track Your Funnel

Set up conversions at each stage:

| Funnel Stage | Example Goal | Measures |
|--------------|--------------|----------|
| **Awareness** | Case study page view | Content engagement |
| **Consideration** | Pricing page visit | Purchase intent |
| **Decision** | Demo request submit | Pipeline creation |

---

## Integration with Campaign Insights

Every campaign's **Insights** tab shows conversions attributed to that specific campaign:

1. Go to **Campaigns** → Select a campaign
2. Click the **Insights** tab
3. View conversions in the performance metrics

This helps you understand which campaigns drive the most valuable actions.

---

## Troubleshooting

### No Conversions Appearing

| Issue | Cause | Solution |
|-------|-------|----------|
| Goal just created | Historical data not backfilled | Wait for new conversions to occur |
| Zero conversions showing | Element selector incorrect | Test selector in browser dev tools |
| Wrong count | URL pattern mismatch | Verify URL pattern matches correctly |
| Nothing tracking | Script not loaded | Check Abmatic script is on conversion page |

### Conversions Not Attributing to Campaign

| Issue | Cause | Solution |
|-------|-------|----------|
| Conversion shows in total but not campaign | Visitor not in campaign audience | Check targeting rules |
| Attribution missing | Conversion on different domain | Ensure script is on conversion page |
| Multiple campaigns claiming | Priority conflict | Check campaign priority settings |

### Unexpected Lift Numbers

| Issue | Cause | Solution |
|-------|-------|----------|
| Lift fluctuating wildly | Small sample size | Wait for more traffic (500+ visitors minimum) |
| Negative lift | Control outperforming | Review personalization—may be hurting experience |
| Very high lift (999%+) | Tiny control group | Increase control percentage |

---

## Next Steps

| Goal | Resource |
|------|----------|
| Set up detailed conversion goals | [Create Conversion Goals](/conversions/create-goals) |
| Track form submissions | [Form Tracking](/conversions/form-tracking) |
| Implement custom events | [Event Tracking](/conversions/event-tracking) |
| Analyze conversion data | [Conversion Analytics](/conversions/analytics) |
