---
id: overview
title: Analytics Overview
sidebar_label: Overview
sidebar_position: 1
---

# Analytics Overview

Abmatic AI's analytics give you clear visibility into your ABM performance. You can see which campaigns drive engagement, which accounts are active, and how personalization compares to your control group — all without exporting data to spreadsheets.

<video class="support-video" controls preload="metadata" src="https://cdn.abmatic.ai/training/08-analytics.mp4"></video>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/08-analytics/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


Analytics is a paid-plan feature. If you're on a free plan, you'll see a prompt to upgrade before you can open Reports or Dashboards.

## Why Analytics Matter for ABM

| Without Analytics | With Abmatic AI Analytics |
|-------------------|------------------------|
| "I think this campaign is working" | A side-by-side personalized vs. control comparison |
| Manual report building in spreadsheets | Pre-built, reusable reports |
| Scattered data across tools | One place for accounts, contacts, campaigns, and visitors |
| Monthly performance reviews | Up-to-date data whenever you open it |
| Guessing which accounts to prioritize | Engagement scores and reveal confidence to focus on |

---

## Accessing Analytics

Click **Analytics** in the left icon sidebar. The page opens with two tabs at the top:

| Tab | Purpose | Best For |
|------|---------|----------|
| **Reports** | Detailed data tables with grouping, filtering, pivot, and charts | Deep analysis, team sharing, executive reporting |
| **Dashboards** | Visual overview built from your saved reports | Daily monitoring, quick insights, presentations |

![The Analytics Reports tab listing saved reports with per-type quick-filter blocks across the top](/img/screenshots/an-reports.png)

*The Reports tab lists your saved reports. The blocks across the top (All Reports, User, Contact, Campaign, Unique Visitor, Opportunity, and more) are quick filters that show the count of reports of each type.*

:::note
The report count shown in the quick-filter blocks reflects how many reports exist in your account, so it will differ from what you see here.
:::

---

## Understanding Your Data

### Reports: Your Analysis Powerhouse

Reports let you slice and group your ABM data any way you need. There are **seven report types**:

| Report Type | What It Shows | Common Use Cases |
|-------------|---------------|------------------|
| **Account** | Company-level engagement and firmographics | Track target-account activity, find active accounts |
| **Contact** | Individual engagement and profile data | Sales outreach prioritization, persona analysis |
| **Opportunity** | Pipeline data synced from your CRM | Pipeline reporting, deal trends |
| **Campaign** | Performance by campaign | Compare campaigns, find top performers |
| **User** | Team activity and usage | Admin oversight, adoption tracking |
| **Unique Visitor** | Individual website visitor sessions | Buyer journeys, content effectiveness |
| **LinkedIn Visitor Session** | LinkedIn visitor data | LinkedIn ad/visitor performance |

:::note On the report-type label
The last type appears in the app as **"Linkedin Visitor Session"** (labels are auto-formatted from the underlying type name). It's the report for LinkedIn visitor data.
:::

**Creating a Report:**

1. Click **Create Report** (top-right).
2. Pick a **Report Type** in the dialog.
3. Abmatic AI creates a report named `Report - <random>` and opens the editor.
4. Configure columns, filters, grouping, and aggregations, then rename and save.

See [Reports](/analytics/reports) for the full walkthrough.

### Dashboards: Your Visual Command Center

Dashboards bring widgets from your saved reports together in one view.

![The Analytics Dashboards tab listing saved dashboards, including the non-deletable Home Dashboard, with created and updated timestamps](/img/screenshots/an-dashboards.png)

*The Dashboards tab lists your saved dashboards. The **Home Dashboard** is your default landing view and can't be deleted.*

| Feature | Description |
|---------|-------------|
| **Widgets** | Add chart or table widgets built from saved reports |
| **Multiple Dashboards** | Create role-specific views (Sales, Marketing, Executive) |
| **Home Dashboard** | Your default landing view, always available |
| **Date filtering** | One date range applies to every widget |

See [Dashboards](/analytics/dashboards) for details.

---

## Key Metrics Explained

### Visitor & Traffic Metrics

| Metric | What It Means |
|--------|---------------|
| **Visitors** | Unique people who visited your site |
| **Sessions** | Total visit instances |
| **Page Views** | Total pages viewed |
| **Identified Companies** | Companies matched from visitor data (see Visitor Reveal) |

### Engagement Metrics

| Metric | What It Means |
|--------|---------------|
| **Time on Site** | Average session duration |
| **Pages per Session** | Pages viewed per visit |
| **Return Visitors** | Share of people who came back |
| **Engagement Score** | Composite activity score — higher means more active |

### Campaign Performance Metrics

| Metric | Formula |
|--------|---------|
| **Impressions** | Visitors who saw a personalization |
| **CTA Clicks** | Clicks on a call-to-action |
| **CTR** | Clicks / Impressions × 100 |
| **Conversions** | Goal completions |
| **CVR** | Conversions / Visitors × 100 |
| **Lift** | (Personalized − Control) / Control × 100 |

:::info Benchmarks are guidance, not guarantees
Any "typical" ranges you read for B2B traffic (company identification rate, CTR, CVR, time on site) are rough industry guidance. Your numbers depend on your traffic, industry, and offer. Use your own control group as the baseline, not an external benchmark.
:::

---

## Understanding Lift

Lift measures how much better your personalized experience performed compared to the control group.

**Formula:**

```
Lift = ((Personalized CVR − Control CVR) / Control CVR) × 100
```

**Example:**

- Personalized CVR: 4.0%
- Control CVR: 3.0%
- Lift = ((4.0 − 3.0) / 3.0) × 100 = **+33% lift**

**Interpreting Lift:**

| Lift Value | Meaning | Action |
|------------|---------|--------|
| **+20% or higher** | Strong win | Roll out broadly, replicate the approach |
| **+5% to +20%** | Moderate improvement | Keep testing, optimize further |
| **−5% to +5%** | No clear difference | Try different personalization |
| **Below −5%** | Control is winning | Pause and rethink the approach |

:::tip Wait for enough data
Don't draw conclusions from a handful of visitors. Give each group time to accumulate visitors before reading the lift number. For a sample-size guide, see [Campaign Performance](/analytics/campaign-performance).
:::

---

## Engagement Score

Engagement Score is a composite metric that summarizes how active an account is, based on activity such as page views, sessions, recency, and key-page visits. A higher score means a more active account.

| Level | What It Means | Recommended Action |
|-------|---------------|-------------------|
| **High** | Actively engaging | Alert sales, prioritize outreach |
| **Medium** | Interested but not ready | Nurture with targeted content |
| **Low** | Early-stage or casual | Keep tracking, add to campaigns |

---

## Common Analytics Workflows

### "Which campaign is performing best?"

1. Go to **Analytics > Reports**.
2. Create or open a **Campaign** report.
3. Add columns such as Campaign Name, Visitors, Conversions, and CVR.
4. Sort to find your top performers.

### "Which accounts should sales follow up on?"

1. Open **Visitor Reveal** in the left sidebar and go to **Accounts**.
2. Sort or filter by engagement and reveal confidence.
3. Export or push the most active accounts to your CRM.

### "How do I show ABM impact to leadership?"

1. Make sure your conversion goals are tracking (demo requests, form fills).
2. Open a campaign's **Insights** tab to see personalized vs. control performance.
3. Read the lift and translate it into pipeline terms for your team.

---

## Best Practices

### Daily

| Check | What to Look For |
|-------|------------------|
| Traffic | Any sudden drops that could mean a script issue? |
| Active accounts | New high-engagement companies to alert sales? |
| Campaign status | Any errors or paused campaigns? |

### Weekly

| Check | What to Look For |
|-------|------------------|
| Campaign performance | Are lift trends improving? |
| Conversion trends | Is CVR moving in the right direction? |
| Audience growth | New accounts being identified? |

### Monthly

| Check | What to Look For |
|-------|------------------|
| Overall performance | Meeting your conversion goals? |
| Campaign comparison | Which types work best for your audience? |
| Audience patterns | Any patterns in who engages most? |

---

## Next Steps

| Topic | Description | Link |
|-------|-------------|------|
| **Reports** | Build detailed data tables | [Build Reports](/analytics/reports) |
| **Dashboards** | Build visual overviews | [Create Dashboards](/analytics/dashboards) |
| **Campaign Performance** | Understand campaign metrics | [Campaign Analytics](/analytics/campaign-performance) |
| **Audience Insights** | Learn about your visitors | [Audience Analytics](/analytics/audience-insights) |
