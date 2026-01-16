---
id: dashboards
title: Dashboards
sidebar_label: Dashboards
sidebar_position: 2
---

# Dashboards

Stop jumping between reports to understand your ABM performance. Dashboards bring your most important metrics together in one customizable view, giving you and your team instant visibility into what's working—all without switching between multiple reports.

![Dashboard List](/img/screenshots/analytics-dashboards.png)
*Your dashboard collection showing all available dashboards with creation and update timestamps*

## Why Dashboards Matter

| Without Dashboards | With Dashboards |
|-------------------|-----------------|
| Open multiple reports individually | See all key metrics at a glance |
| Manually correlate data across views | Visualize relationships automatically |
| Different team members see different data | Shared source of truth for everyone |
| Start each day hunting for insights | Open directly to your most important metrics |
| Spend time building context in meetings | Walk in with answers ready |

## What You Can Build

Build dashboards for any audience or use case:

| Dashboard Type | Purpose | Key Widgets |
|---------------|---------|-------------|
| **Executive Overview** | High-level ABM performance for leadership | Pipeline influenced, top accounts, conversion trends |
| **Campaign Manager** | Monitor active campaign performance | A/B test results, visitor counts, conversion rates |
| **Sales Enablement** | Account intelligence for sales teams | Hot accounts, engagement scores, recent visitors |
| **Weekly Review** | Team meeting preparation | Week-over-week trends, top performers, areas to improve |

![Home Dashboard with Widgets](/img/screenshots/dashboard-home.png)
*Example Home Dashboard showing opportunity data by stage, quarter, and campaign type with real metrics*

## Getting Started

### Creating Your First Dashboard

1. Navigate to **Analytics > Dashboards**
2. Click **Create Dashboard**
3. Enter a descriptive name (e.g., "Q1 ABM Executive Review")
4. Click **Create** to open the editor

### Dashboard Naming Best Practices

| Good Names | Why It Works |
|-----------|--------------|
| "Executive ABM Overview" | Clear audience and purpose |
| "Q1 Campaign Performance" | Time-scoped for easy reference |
| "Enterprise Accounts - Weekly" | Specific segment and cadence |
| "Sales Team Hot Accounts" | Clear owner and focus |

| Avoid | Why |
|-------|-----|
| "Dashboard 1" | No indication of purpose |
| "New dashboard" | Will become confusing quickly |
| "Test" | Unclear if it's production-ready |

## Building Your Dashboard

### Adding Widgets

Widgets display visualizations from your saved reports. Each widget connects to a single report.

**To add a widget:**

1. Open your dashboard
2. Click **Edit Dashboard** (or add `?edit=true` to the URL)
3. Click **+ Report** button
4. Select a report from the dropdown
5. Choose widget type: **Chart** or **Table**
6. Click **Add Report**

### Widget Types

| Type | Best For | Requirements |
|------|----------|--------------|
| **Chart** | Trends, comparisons, proportions | Report must have chart enabled |
| **Table** | Detailed data, drill-down analysis | Report must have pivot mode enabled |

### Widget Requirements

For a report to appear as a widget option, it must have:

- **Pivot mode enabled** - Groups data for visualization
- **Row grouping applied** - Defines how data is organized
- **Aggregation configured** - Calculates summary metrics
- **Chart enabled** - For chart widgets

**Tip:** If a report isn't appearing in the widget dropdown, open it in the report editor and enable these features.

## Arranging Your Layout

### The Grid System

Dashboards use a responsive 4-column grid with flexible sizing:

| Feature | Details |
|---------|---------|
| **Columns** | 4 columns total |
| **Widget Width** | 1-4 columns (spans horizontally) |
| **Widget Height** | Adjustable in 400px row units |
| **Maximum Widgets** | 20 per dashboard |
| **Spacing** | 14px margins between widgets |

### Edit Mode Controls

In edit mode, each widget shows:

| Control | Icon | Action |
|---------|------|--------|
| **Drag Handle** | Grip icon | Drag to reposition widget |
| **Close** | X icon | Remove widget from dashboard |
| **Edges** | Border areas | Drag to resize |

### Layout Auto-Save

Your layout saves automatically as you work:

- Widget positions (x, y coordinates)
- Widget sizes (width, height)
- Widget order

No manual save needed for layout changes.

## Customizing Views

### Date Range Filtering

Filter all widgets simultaneously by date—one selection applies to your entire dashboard:

1. Click the date range dropdown (top right, shows current range like "LAST 60 DAYS")
2. Select a preset or custom range

**Available Presets:**

| Quick Ranges | Specific Periods |
|--------------|------------------|
| Today | This week |
| Yesterday | This month |
| Last 7 days | This year |
| Last 28/30/60/90 days | Custom range |
| Last 12 months | |

Date filtering applies to all widgets on the dashboard, keeping your analysis consistent. The selected date range is saved with your dashboard.

### Refreshing Data

Dashboard data caches for performance. To get the latest data:

1. Click the **Refresh** button (circular arrow icon next to "Edit Dashboard")
2. All widgets update with fresh data
3. "Last updated at" timestamp shows the refresh time (e.g., "Last updated at: 1/12/2026 6:09:19 PM")

## Setting Your Home Dashboard

Designate one dashboard as your default view for quick access.

### How to Set

1. Open the dashboard you want as default
2. The **Home Dashboard** label appears automatically when viewing the default

### Benefits

| Feature | Benefit |
|---------|---------|
| **Default View** | Opens automatically when visiting Analytics |
| **Quick Access** | Jump directly to your most important metrics |
| **Personalized Start** | Begin each session with relevant data |

**Note:** The Home Dashboard cannot be deleted and is always accessible from the main Analytics page.

## Working with Widgets

### Understanding Widget Data

Each widget displays:

- **Report title** (clickable link with arrow icon to open full report)
- **Chart or table visualization** based on widget type
- **Synchronized date filtering** with dashboard

### Widget-to-Report Relationship

Widgets inherit all settings from their source report:

| Inherited From Report | Effect on Widget |
|----------------------|------------------|
| Column definitions | Fields displayed in tables |
| Filters applied | Data subset shown |
| Chart configuration | Visualization type and styling |
| Aggregations | Summary calculations |

### Updating Widget Data

Widget data refreshes when:

1. Dashboard refresh triggered (manual)
2. Date range filter changed
3. Cache expires (automatic)

To ensure you're seeing the latest data, click the Refresh button.

## Sharing and Collaboration

### Team Access

All dashboards are visible to your entire account:

- Team members see the same dashboards
- Access based on user permissions
- Changes visible to everyone immediately

### Exporting Dashboard Data

To export data from a dashboard:

1. Click the report title link in any widget
2. Navigate to the full report view
3. Export to CSV from the report

**Tip:** For regular exports, create reports specifically designed for export with all needed columns.

## Dashboard Best Practices

### Organization

| Do This | Avoid This |
|---------|-----------|
| One purpose per dashboard | Cramming unrelated metrics together |
| Group related metrics | Scattering similar data across dashboards |
| Clear, descriptive names | Generic or temporary names |
| Regular cleanup of stale dashboards | Keeping outdated dashboards indefinitely |

### Widget Selection

| Do This | Avoid This |
|---------|-----------|
| Limit to 4-8 key widgets | Overloading with 15+ widgets |
| Put most important metrics at top | Burying critical data at bottom |
| Mix chart types for variety | Using only one visualization type |
| Choose charts that tell a clear story | Complex charts that require explanation |

### Maintenance

| Frequency | Action |
|-----------|--------|
| **Weekly** | Review widget relevance |
| **Monthly** | Remove stale or unused dashboards |
| **Quarterly** | Audit for alignment with business goals |

## Dashboard Templates

### Executive Dashboard

**Purpose:** High-level ABM overview for leadership

**Recommended Widgets:**

1. Total Accounts Engaged (trend chart)
2. Pipeline Influenced by Campaign (bar chart)
3. Conversion Rate Over Time (line chart)
4. Top 10 Performing Campaigns (table)

### Campaign Manager Dashboard

**Purpose:** Monitor active campaign performance

**Recommended Widgets:**

1. Active Campaigns by Status (pie chart)
2. Visitor Counts by Campaign (bar chart)
3. Conversion Rates by Campaign (table)
4. A/B Test Winners (table with lift metrics)

### Sales Enablement Dashboard

**Purpose:** Account intelligence for sales teams

**Recommended Widgets:**

1. Hot Accounts This Week (table with scores)
2. Recent High-Intent Visitors (table)
3. Engagement Score Distribution (histogram)
4. Opportunity Pipeline by Account (funnel)

## Troubleshooting

### Widget Not Loading

| Symptom | Cause | Solution |
|---------|-------|----------|
| Spinner never stops | Report data issue | Open source report and verify data loads |
| "No chart to show" | Chart not enabled | Enable chart in source report |
| Widget stays empty | Missing grouping | Add row grouping and aggregation to report |

### Layout Not Saving

| Symptom | Cause | Solution |
|---------|-------|----------|
| Changes don't persist | Not in edit mode | Click "Edit Dashboard" first |
| Positions reset | Browser interrupted | Wait for auto-save, then refresh |
| Widgets disappear | Accidental removal | Re-add widget from report |

### Data Not Updating

| Symptom | Cause | Solution |
|---------|-------|----------|
| Stale numbers | Cached data | Click Refresh button |
| Inconsistent data | Different date ranges | Reset date filter to sync all widgets |
| Missing recent data | Processing delay | Wait 5-10 minutes and refresh |

### Widget Shows Error

1. Click the report title to open source report
2. Verify report loads correctly
3. Fix any report issues (filters, columns, chart settings)
4. Return to dashboard and refresh

## Related Documentation

| Topic | Link |
|-------|------|
| Building Reports | [Reports](/analytics/reports) |
| Campaign Analytics | [Campaign Performance](/analytics/campaign-performance) |
| Audience Analysis | [Audience Insights](/analytics/audience-insights) |
| Analytics Overview | [Overview](/analytics/overview) |
