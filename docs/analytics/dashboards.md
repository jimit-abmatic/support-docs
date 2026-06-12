---
id: dashboards
title: Dashboards
sidebar_label: Dashboards
sidebar_position: 2
---

# Dashboards

Dashboards bring your most important metrics together in one customizable view. Instead of opening report after report, you build a grid of widgets — each one a chart or table from a saved report — and read everything at a glance.

![The Dashboards tab listing saved dashboards, with the Home Dashboard at the top and created/updated timestamps](/img/screenshots/an-dashboards.png)

*Your dashboard list. The **Home Dashboard** is your default landing view and can't be deleted; other dashboards can be created and removed freely.*

## Why Dashboards Help

| Without Dashboards | With Dashboards |
|-------------------|-----------------|
| Open multiple reports one by one | See all key metrics together |
| Manually line up data across views | Charts and tables side by side |
| Start each day hunting for insights | Open straight to what matters |
| Rebuild context for every meeting | Walk in with the numbers ready |

## What You Can Build

You can build a dashboard for any audience or use case. A few common shapes:

| Dashboard | Purpose | Example Widgets |
|---------------|---------|-------------|
| **Executive overview** | High-level ABM performance for leadership | Opportunities by stage, conversion trends |
| **Campaign manager** | Monitor active campaigns | Visitor counts, conversions by campaign type |
| **Sales enablement** | Account intelligence for sales | Active accounts, engagement by account |
| **Weekly review** | Team-meeting prep | Week-over-week trends, top performers |

![The Home Dashboard in view mode, showing a grid of widgets such as Active ABM Opportunities by Stage, Conversion by Campaign Type, and Opportunities by Campaign Type, with a date range and Edit Dashboard button](/img/screenshots/dash-grid.png)

*A dashboard in view mode. Each panel is a widget built from a saved report. The header shows the **Last updated at** time, the active date range, an **Edit Dashboard** button, and a **Refresh** icon.*

## Getting Started

### Create a Dashboard

1. Go to **Analytics > Dashboards**.
2. Click **Create Dashboard** (top-right).
3. Abmatic AI creates a dashboard named `Dashboard - <random>` and opens it.
4. Open edit mode to rename it and add widgets.

:::tip Give it a clear name
Rename `Dashboard - <random>` to something descriptive like "Q1 Campaign Performance" or "Sales Team Active Accounts" so it's easy to find later.
:::

## Building Your Dashboard

### Add Widgets

Each widget shows a chart or table from one saved report. **Only reports that have a chart enabled can be added as a widget** — so build and chart-enable your report first (see [Reports](/analytics/reports)).

To add a widget:

1. Open your dashboard and click **Edit Dashboard** (you can also add `?edit=true` to the URL).
2. Click **+ Report**.
3. In the **Add Report** dialog, pick a report from the dropdown.
4. Choose the widget type: **Chart** or **Table**.
5. Click **Add Report**.

![The Add Report dialog with a report dropdown and Chart / Table widget-type buttons, over a dashboard in edit mode](/img/screenshots/dash-add-report.png)

*The Add Report dialog. Choose a report, pick **Chart** or **Table**, then click **Add Report**. The dropdown only lists reports that have a chart enabled.*

### Widget Types

| Type | Best For |
|------|----------|
| **Chart** | Trends, comparisons, proportions |
| **Table** | Detailed rows, drill-down values |

:::tip Report not in the dropdown?
A report only appears as a widget option once it has pivot mode on, a row grouping, an aggregation, and a chart enabled. Open the report in the editor and turn these on, then it will be selectable here.
:::

## Arranging Your Layout

### The Grid

Dashboards use a 4-column grid. You can drag widgets to reposition them and drag their edges to resize. A single dashboard can hold **up to 20 widgets** — past that, the **+ Report** button is disabled with the message *"A dashboard can have only 20 reports at max."*

| Feature | Details |
|---------|---------|
| **Columns** | 4 |
| **Widget width** | 1–4 columns |
| **Maximum widgets** | 20 per dashboard |

### Edit-Mode Controls

In edit mode, each widget shows:

| Control | How |
|---------|-----|
| **Move** | Drag the grip/handle in the widget header |
| **Remove** | Click the **X** in the widget header |
| **Resize** | Drag a widget edge |

When you're done arranging, click **Save Dashboard**.

## Customizing Views

### Date Range Filtering

One date range applies to every widget on the dashboard, so all your numbers stay consistent.

1. Click the date range control at the top right (it shows the current range, e.g. "LAST 60 DAYS").
2. Pick a preset or a custom range.

**Available presets:**

| Quick Ranges | Specific Periods |
|--------------|------------------|
| Today | This Week (Sun–today) |
| Yesterday | This Year (Jan–today) |
| Last 7 days | Last Week (Sun–Sat) |
| Last 28 / 30 / 60 / 90 days | Custom range |
| Last 12 months | |

The selected range is saved with the dashboard.

### Refreshing Data

Dashboard widgets are served from a cache for speed. To pull fresh data:

1. Click the **Refresh** icon (the circular arrow next to **Edit Dashboard**).
2. This clears the dashboard cache and reloads every widget.
3. The **Last updated at** time in the header reflects the latest refresh.

:::note
The "Last updated at" time you see in the screenshots is just an example — yours shows the time of your most recent refresh.
:::

## The Home Dashboard

Every account has a **Home Dashboard**. It serves as your default analytics view and is always available from the top of the Dashboards list.

| Behavior | Detail |
|---------|---------|
| **Default view** | Opens as the account's standard dashboard |
| **Always available** | Pinned at the top of the dashboards list |
| **Cannot be deleted** | The Home Dashboard row can't be selected for deletion |

You can edit the Home Dashboard's widgets and layout like any other dashboard.

## Working with Widgets

Each widget shows:

- A **report title** (a link with a shortcut icon that opens the full source report)
- A **chart or table** based on the widget type you chose
- Data filtered by the dashboard's shared **date range**

Because a widget is built from a report, it inherits that report's columns, filters, grouping, aggregations, and chart configuration. To change what a widget shows, edit its source report.

### Exporting Dashboard Data

Dashboards themselves don't export. To export the data behind a widget:

1. Click the report title link in the widget to open the full report.
2. Export to CSV from the report view.

:::tip
For recurring exports, build a dedicated report with exactly the columns you need.
:::

## Sharing

All dashboards in an account are visible to that account's users, subject to their permissions. Changes you make are visible to everyone who can see the dashboard.

## Troubleshooting

### Widget Not Loading

| Symptom | Cause | Solution |
|---------|-------|----------|
| Spinner never stops | Source report has a data issue | Open the source report and confirm it loads |
| Nothing to chart | Chart not enabled on the report | Enable the chart in the source report |
| Widget stays empty | Missing grouping/aggregation | Add row grouping and an aggregation to the report |

### Layout Not Saving

| Symptom | Cause | Solution |
|---------|-------|----------|
| Changes don't stick | Not in edit mode | Click **Edit Dashboard** first, then **Save Dashboard** |
| Widget disappeared | Removed by mistake | Re-add it from its report |

### Data Not Updating

| Symptom | Cause | Solution |
|---------|-------|----------|
| Stale numbers | Cached data | Click the **Refresh** icon to clear the cache |
| Inconsistent numbers | Mismatched expectations | Confirm the dashboard date range is what you intend |

## Related Documentation

| Topic | Link |
|-------|------|
| Building Reports | [Reports](/analytics/reports) |
| Campaign Analytics | [Campaign Performance](/analytics/campaign-performance) |
| Audience Analysis | [Audience Insights](/analytics/audience-insights) |
| Analytics Overview | [Overview](/analytics/overview) |
