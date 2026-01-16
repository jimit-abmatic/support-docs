---
id: overview
title: Analytics Overview
sidebar_label: Overview
sidebar_position: 1
---

# Analytics Overview

Stop guessing what's working. Abmatic AI's analytics give you clear visibility into your ABM performance, showing exactly which campaigns drive engagement, which accounts are ready to buy, and how personalization impacts your bottom line.

## Why Analytics Matter for ABM Success

| Without Analytics | With Abmatic Analytics |
|-------------------|------------------------|
| "I think this campaign is working" | "This campaign drives 47% higher conversions" |
| Manual report building in spreadsheets | Pre-built reports with one click |
| Scattered data across tools | Unified view of all ABM metrics |
| Monthly performance reviews | Real-time insights for faster decisions |
| Guessing which accounts to prioritize | Engagement scores show who's ready to buy |

---

## Accessing Analytics

Navigate to **Analytics** in the left sidebar to access two powerful views:

| View | Purpose | Best For |
|------|---------|----------|
| **Reports** | Detailed data tables with filtering and export | Deep analysis, team sharing, executive reporting |
| **Dashboards** | Visual overview with customizable widgets | Daily monitoring, quick insights, presentations |

![Analytics Reports](/img/screenshots/analytics-reports.png)

*The Reports tab shows 351 reports organized by type, with search, filters, and sorting options.*

---

## Understanding Your Data

### Reports: Your Analysis Powerhouse

Reports let you slice and dice your ABM data any way you need:

**Report Types Available:**

| Report Type | What It Shows | Common Use Cases |
|-------------|---------------|------------------|
| **Account** | Company-level engagement and firmographics | Track target account activity, identify hot accounts |
| **Contact** | Individual engagement and profile data | Sales outreach prioritization, lead scoring |
| **Opportunity** | Pipeline data synced from CRM | Revenue attribution, deal acceleration insights |
| **Campaign** | Performance by campaign | Compare campaigns, identify top performers |
| **User** | Team activity and usage | Admin oversight, adoption tracking |
| **Unique Visitor** | Individual visitor sessions | Understand buyer journeys, content effectiveness |
| **Visitor Session** | LinkedIn visitor data | ABM ad performance, audience insights |

**Creating a Report:**

1. Click **Create Report** button
2. Select your report type from the dropdown
3. Configure columns, filters, and date range
4. Save and share with your team

### Dashboards: Your Visual Command Center

Dashboards provide at-a-glance visibility into what matters most.

![Analytics Dashboards](/img/screenshots/analytics-dashboards.png)

*The Dashboards tab shows your saved dashboards with Home Dashboard as the default landing page.*

**Dashboard Capabilities:**

| Feature | Description |
|---------|-------------|
| **Custom Widgets** | Add charts, tables, and KPIs |
| **Multiple Dashboards** | Create role-specific views (Sales, Marketing, Executive) |
| **Home Dashboard** | Set your default landing page |
| **Shareable** | Team members see the same data |

---

## Key Metrics Explained

### Visitor & Traffic Metrics

| Metric | What It Means | Why It Matters |
|--------|---------------|----------------|
| **Visitors** | Unique people who visited your site | Shows reach and audience size |
| **Sessions** | Total visit instances | Multiple sessions = active evaluation |
| **Page Views** | Total pages viewed | Indicates depth of engagement |
| **Identified Companies** | Companies matched to IP data | Your addressable ABM audience |

**Benchmark:** 40-70% company identification rate is typical for B2B traffic.

### Engagement Metrics

| Metric | What It Means | Good Benchmark |
|--------|---------------|----------------|
| **Time on Site** | Average session duration | 2-3+ minutes |
| **Pages per Session** | Pages viewed per visit | 3-5 pages |
| **Return Visitors** | % who came back | 20-30% |
| **Engagement Score** | Composite activity score | Higher = hotter lead |

### Campaign Performance Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| **Impressions** | Visitors who saw personalization | More = better reach |
| **CTA Clicks** | Clicks on call-to-action | Track trend upward |
| **CTR** | Clicks / Impressions × 100 | 2-5% for B2B |
| **Conversions** | Goal completions | Depends on goal |
| **CVR** | Conversions / Visitors × 100 | 1-3% for B2B |
| **Lift** | (Personalized - Control) / Control × 100 | Any positive |

---

## Understanding Lift

Lift is the most important metric for proving personalization ROI. It measures the improvement from your personalized experience compared to the control group.

**Formula:**
```
Lift = ((Personalized CVR - Control CVR) / Control CVR) × 100
```

**Example:**
- Personalized CVR: 4.0%
- Control CVR: 3.0%
- Lift = ((4.0 - 3.0) / 3.0) × 100 = **+33% lift**

**Interpreting Lift:**

| Lift Value | Meaning | Action |
|------------|---------|--------|
| **+20% or higher** | Strong win | Roll out to 100%, replicate approach |
| **+5% to +20%** | Moderate improvement | Continue testing, optimize further |
| **-5% to +5%** | No significant difference | Try different personalization |
| **Below -5%** | Control is winning | Pause and rethink approach |

:::tip Statistical Significance
Wait until you have 100+ visitors in each group before drawing conclusions. Small sample sizes can show misleading lift numbers.
:::

---

## Engagement Score Deep Dive

Engagement Score is a composite metric that shows how "hot" an account is:

| Factor | Weight | Impact |
|--------|--------|--------|
| Page views | High | More pages = more interest |
| Sessions | High | Multiple visits = active evaluation |
| Recency | Medium | Recent activity weighted higher |
| Key page visits | Medium | Pricing/demo pages boost score |
| Time on site | Low | Longer stays = deeper engagement |

**Score Levels:**

| Level | What It Means | Recommended Action |
|-------|---------------|-------------------|
| **High** | Actively evaluating | Alert sales immediately, prioritize outreach |
| **Medium** | Interested but not ready | Nurture with targeted content |
| **Low** | Early stage or casual | Keep tracking, add to campaigns |

---

## Common Analytics Workflows

### "Which campaign is performing best?"

1. Go to **Analytics** > **Reports**
2. Create or open a Campaign report
3. Add columns: Campaign Name, Visitors, Conversions, CVR, Lift
4. Sort by Lift or CVR to find top performers

### "Which accounts should sales call today?"

1. Go to **Reveal** > **Accounts**
2. Filter by Engagement = High
3. Sort by Last Visit (most recent first)
4. Export or push hot accounts to CRM

### "How do I prove ABM ROI to leadership?"

1. Track conversions (demo requests, form fills)
2. Create a report showing Personalized vs Control performance
3. Calculate lift and translate to revenue impact:
   - Example: 33% lift × 100 conversions/month × $10K ACV = **$330K incremental pipeline**

### "Why is my campaign showing negative lift?"

| Possible Cause | Solution |
|----------------|----------|
| Not enough data | Wait for 100+ visitors per group |
| Personalization too aggressive | Try subtler changes |
| Wrong audience targeting | Review targeting rules |
| Control content was actually better | A/B test different approaches |

---

## Best Practices

### Daily Review

| Check | What to Look For |
|-------|------------------|
| Traffic | Any sudden drops indicating script issues? |
| Hot accounts | New high-engagement companies to alert sales? |
| Campaign status | Any errors or paused campaigns? |

### Weekly Review

| Check | What to Look For |
|-------|------------------|
| Campaign performance | Lift trends improving? |
| Conversion trends | CVR moving in right direction? |
| Audience growth | New accounts being identified? |

### Monthly Review

| Check | What to Look For |
|-------|------------------|
| Overall performance | Meeting conversion goals? |
| Campaign comparison | Which types work best for your audience? |
| Audience insights | Any patterns in who engages most? |

---

## Next Steps

| Topic | Description | Link |
|-------|-------------|------|
| **Reports** | Create detailed data tables | [Build Reports](/analytics/reports) |
| **Dashboards** | Build visual overviews | [Create Dashboards](/analytics/dashboards) |
| **Campaign Performance** | Understand campaign metrics | [Campaign Analytics](/analytics/campaign-performance) |
| **Audience Insights** | Learn about your visitors | [Audience Analytics](/analytics/audience-insights) |
