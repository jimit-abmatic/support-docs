---
id: reports
title: Reports
sidebar_label: Reports
sidebar_position: 3
---

# Reports

Transform your ABM data into actionable insights with custom reports. Build the exact views you need to answer critical business questions—no SQL required.

![The Reports list with per-type quick-filter blocks (All Reports, User, Contact, Campaign, Unique Visitor, Opportunity) above a table of saved reports](/img/screenshots/rep-list.png)
*The Reports list. The blocks across the top are quick filters showing the count of reports of each type; the table below lists your saved reports with their type, created date, and updated date. (Counts reflect your own account.)*

## Why Custom Reports Matter

| Without Custom Reports | With Abmatic Reports |
|------------------------|----------------------|
| Export data to spreadsheets | Query data directly in-app |
| Manual pivot table creation | Built-in pivot and grouping |
| Static snapshots | Real-time data |
| Hours of analysis | Insights in minutes |
| Limited sharing | Shareable dashboards |

## What You Can Build

Reports let you:

| Capability | Example |
|------------|---------|
| **Slice data any way** | View accounts by industry, region, or revenue tier |
| **Track trends** | Compare month-over-month engagement changes |
| **Find patterns** | Identify which campaigns drive pipeline |
| **Spot opportunities** | Surface hot accounts needing attention |
| **Prove ROI** | Show leadership the impact of ABM |

## Report Types

There are **seven report types**:

| Report Type | What It Analyzes | Best For |
|-------------|------------------|----------|
| **Account** | Company-level data and engagement | Target-account health, ABM performance |
| **Contact** | Person-level information | Contact quality, persona analysis |
| **Opportunity** | Pipeline and deal data | Pipeline reporting, trends |
| **Campaign** | Campaign performance metrics | Comparing and optimizing campaigns |
| **User** | Team-member activity | Adoption and usage tracking |
| **Unique Visitor** | Website visitor sessions | Traffic and engagement patterns |
| **LinkedIn Visitor Session** | LinkedIn visitor data | LinkedIn visitor/ad tracking |

:::note On labels
Report-type labels are auto-formatted from their underlying names, so the last one appears in the app as **"Linkedin Visitor Session"**. It's the report for LinkedIn visitor data.
:::

## Getting Started

### Creating Your First Report

1. Navigate to **Analytics > Reports**
2. Click **Create Report** (top-right)
3. In the **Create Report** dialog, choose a **Report Type**
4. Abmatic AI creates a report named `Report - <random>` and opens it in the editor
5. Rename it (the name field auto-saves) and start building

:::tip Use descriptive names
Rename `Report - <random>` to something like "Enterprise Accounts by Industry" or "Quarterly Opportunity Amount" so it's easy to find and reuse.
:::

### Report Naming Best Practices

| Good Names | Why They Work |
|------------|---------------|
| "Enterprise Accounts by Industry" | Describes data and grouping |
| "Q1 Campaign Conversions" | Includes timeframe and metric |
| "Hot Contacts - Last 30 Days" | Specifies filter criteria |
| "Pipeline by Account Source" | Shows the analysis angle |

| Avoid | Why |
|-------|-----|
| "Report 1" | No context |
| "New report" | Not searchable |
| "Test" | Clutters your report list |

## The Report Editor

The editor is a full pivot-and-chart surface. You add columns, group rows, set aggregations, optionally turn on pivot mode, and chart the result.

![The report editor showing a line chart at the top, a pivoted table below grouped by quarter with a sum aggregation, the Columns panel open on the right with Pivot Mode on, a Total Rows card, and Show Chart and Save & View Full Report buttons](/img/screenshots/rep-editor.png)
*The report editor. The breadcrumb shows **Reports › `<Report Type>`**. The right-hand **Columns** panel lets you choose fields and toggle **Pivot Mode**; the **Total Rows** card and the **"This preview shows only a maximum of 500 rows."** banner sit at the top, alongside **Show Chart** and **Save & View Full Report**.*

### Editor vs. Full Report View

| Mode | What it is | Row behavior |
|------|------------|--------------|
| **Editor** (`…/edit`) | Build and configure the report | Preview is capped at **500 rows** for speed |
| **Full report view** (`…/<id>`) | Read-only chart + table | Loads the **full dataset**, paginated 500 rows at a time |

In the editor you'll see a **Total Rows** card and the banner **"This preview shows only a maximum of 500 rows."** When you open the full report view, Abmatic AI loads every row page by page and shows a **"Loading rows: X of Y"** progress indicator while it fetches. Click **Save & View Full Report** to jump to that view, or **Edit Report** in the view to return.

If a report isn't grouped/aggregated/pivoted enough to display, the full view shows: *"This report is not in a viewable state. Edit the report to add a grouping, an aggregation and turn on the pivot mode with an optional chart."*

## Building Your Report

### Adding Columns

1. Open your report in Edit mode
2. Click the **Columns** panel
3. Check the columns you want to include
4. Drag to reorder as needed

### Available Columns

The columns available in a report are **driven by the report type and returned by Abmatic AI** — the list you see depends on which type you chose (Account, Contact, Campaign, and so on). The frontend doesn't hardcode a per-type column list. Open the **Columns** panel on the right to show or hide fields.

Account and contact reports include the newer **demo-booking** fields described in [Campaign Performance](/analytics/campaign-performance):

- **Demo Booked** — whether a demo was booked
- **Demo Booked At** — when the meeting was booked
- **Demo Scheduled At** — the meeting's scheduled start time
- **Demo AE** — the account executive on the meeting

These are populated by the agentic-chat meeting-booking flow.

### Column Operations

| Action | How To | Use Case |
|--------|--------|----------|
| **Show/Hide** | Toggle checkbox in Columns panel | Focus on key metrics |
| **Reorder** | Drag column header | Prioritize important data |
| **Pin** | Right-click > Pin Left/Right | Keep key fields visible while scrolling |
| **Resize** | Drag column border | Accommodate long values |
| **Sort** | Click column header | Find top/bottom performers |

## Filtering Your Data

### Quick Column Filters

Apply filters directly on any column:

1. Click the column header dropdown
2. Select filter type:
   - **Text filter** - Contains, starts with, equals
   - **Number filter** - Greater than, between, equals
   - **Date filter** - Before, after, in range
   - **Set filter** - Select specific values
3. Enter your criteria

### Advanced Filtering

For complex multi-condition logic, turn on advanced filtering from the report's overflow (`⋮`) menu. The option is labeled **"Enable Advance Filtering"** (and **"Disable Advance Filtering"** to turn it off).

:::note
The on-screen label reads **"Advance Filtering"** (not "Advanced") — that's the literal UI string.
:::

:::warning Switching clears existing filters
A confirmation dialog warns you that enabling or disabling advance filtering removes your existing filters. It also notes that removing a column does not remove its advance filter. Turn on advanced filtering before you've built a lot of column filters you care about.
:::

### High-Impact Filter Examples

| Goal | Filter Setup |
|------|--------------|
| Hot accounts only | Temperature = "Hot" |
| Enterprise segment | Employee Count > 1000 |
| Recent engagement | Last Active Date > 30 days ago |
| Specific industries | Industry in [Technology, Finance, Healthcare] |
| High-value contacts | Job Title Level = "C-Level" or "VP" |

## Grouping and Aggregation

### Row Grouping

Organize your data by any field:

1. Find the column to group by
2. Drag it to the row grouping area
3. Data organizes into collapsible groups
4. Click group headers to expand/collapse

**Example:** Group accounts by Industry to see how many target accounts you have in each vertical.

### Aggregations

Calculate metrics across grouped rows:

| Function | What It Calculates | Example Use |
|----------|-------------------|-------------|
| **Sum** | Total of all values | Total revenue by industry |
| **Count** | Number of rows | Accounts per region |
| **Avg** | Average value | Average engagement score |
| **Min** | Lowest value | Minimum deal size |
| **Max** | Highest value | Largest account by revenue |
| **First** | First value in group | Earliest created date |
| **Last** | Last value in group | Most recent activity |

### Pivot Mode

Transform your data into a pivot table:

1. Toggle **Pivot Mode** on
2. Assign row groups (what to analyze)
3. Add value columns with aggregations
4. Data pivots automatically

**Pro Tip:** Pivot mode is required for creating charts.

## Creating Charts

### Chart Requirements

The **Show Chart** button is only enabled when **a row group and an aggregation are set, and pivot mode is on**. The button's tooltip states this directly.

### Building a Chart

1. Set up a row group and at least one aggregation, and turn on **Pivot Mode**.
2. Click **Show Chart**.
3. The chart renders from your pivot data. The default chart type is **Grouped Column**.

Only reports with a chart enabled can be added to a dashboard as a widget, so chart-enable a report before trying to add it. See [Dashboards](/analytics/dashboards).

### Chart Features

- **Interactive** - Hover for details, click to filter
- **Responsive** - Adapts to screen size
- **Legend** - Color-coded categories
- **Labels** - Clear value display

## Saving and Sharing

### Auto-Save

Your report configuration saves automatically as you work — columns, filters, sort, grouping, aggregations, pivot, and chart. There's no separate save step for these changes. Use **Save & View Full Report** when you want to save the chart configuration and open the read-only full report.

### Adding to Dashboards

Reports with charts can be added to dashboards:

1. Create your report with a chart
2. Go to **Dashboards**
3. Edit a dashboard
4. Add your report as a widget

## Data Behavior

### Row Limits

| Context | Limit | Why |
|---------|-------|-----|
| Editor preview | 500 rows | Fast iteration while building |
| Full report view | Full dataset (loaded 500 rows per page) | Complete data, fetched page by page with a progress indicator |
| Export | Full dataset | Complete data download |

### Data Freshness

- **Reports** query your current data
- **Dashboard widgets** are served from a cache for speed; use the dashboard **Refresh** icon to clear it (see [Dashboards](/analytics/dashboards))

## Advanced Features

### Date Field Decomposition

Break down date columns for time-based analysis:

| Component | What It Extracts | Example Use |
|-----------|------------------|-------------|
| **Year** | 2024, 2025 | Year-over-year comparison |
| **Quarter** | Q1, Q2, Q3, Q4 | Quarterly performance |
| **Month** | January, February | Monthly trends |
| **Week** | Week 1, Week 2 | Weekly patterns |

### Custom Fields

Custom fields you configure for an entity type are available as columns in that report type:

- Account and contact entities support up to **30 custom fields** (`field_01` through `field_30`)
- Available in the **Columns** panel
- Fully filterable and groupable
- Map to your specific business attributes

## Report Templates

### Account Engagement Report

Track how your target accounts are engaging:

| Configuration | Setting |
|---------------|---------|
| **Report Type** | Account |
| **Group By** | Industry |
| **Aggregation** | Average Engagement Score |
| **Filter** | Temperature = Hot |
| **Chart** | Bar chart by industry |

### Campaign Performance Report

Compare campaign effectiveness:

| Configuration | Setting |
|---------------|---------|
| **Report Type** | Campaign |
| **Columns** | Name, Type, Visitors, CVR |
| **Group By** | Campaign Type |
| **Aggregation** | Sum of Conversions |
| **Chart** | Conversion rate by type |

### Contact Quality Report

Assess your contact database:

| Configuration | Setting |
|---------------|---------|
| **Report Type** | Contact |
| **Group By** | Job Title Level |
| **Aggregation** | Count |
| **Filter** | Is Enriched = true |
| **Chart** | Contacts by seniority |

### Opportunity Pipeline Report

Summarize pipeline from your CRM-synced opportunities:

| Configuration | Setting |
|---------------|---------|
| **Report Type** | Opportunity |
| **Columns** | Name, Amount, Stage |
| **Group By** | Quarter (via date decomposition) or Stage |
| **Aggregation** | Sum of Amount |
| **Chart** | Pipeline by quarter or stage |

## Best Practices

### Do This

| Practice | Why |
|----------|-----|
| Start with a specific question | Focused reports are more actionable |
| Use descriptive names | Easy to find and understand later |
| Apply filters early | Faster performance, cleaner data |
| Save after major changes | Ensure your work is preserved |
| Review reports regularly | Update as business needs evolve |

### Avoid This

| Anti-Pattern | Why It's a Problem |
|--------------|-------------------|
| Adding all columns | Slow performance, cluttered view |
| Generic naming | Hard to find, easy to duplicate |
| No filters on large datasets | Slow queries, overwhelming data |
| Unused reports | Clutters the report list |
| Overly complex grouping | Harder to interpret |

## Exporting Data

### Export Process

1. Open your report
2. Apply any filters needed
3. Click **Export**
4. Choose CSV format
5. File downloads automatically

### What's Included

- All visible columns
- Applied filter criteria
- Full dataset (no row limit)
- Current sort order

## Troubleshooting

### Report Not Loading

| Symptom | Cause | Solution |
|---------|-------|----------|
| Blank screen | Report deleted | Check report list |
| Error message | Permission issue | Contact admin |
| Slow loading | Too many columns | Reduce column count |
| Timeout | Large dataset | Apply filters first |

### Chart Not Showing

| Symptom | Cause | Solution |
|---------|-------|----------|
| No chart option | Pivot mode off | Enable pivot mode |
| Empty chart | No grouping | Add row grouping |
| "Configure aggregation" | Missing aggregation | Add aggregation to a value column |

### Export Failing

| Symptom | Cause | Solution |
|---------|-------|----------|
| Download not starting | Browser blocking | Check popup settings |
| Incomplete file | Timeout | Apply filters to reduce data |
| Format issues | Special characters | Data will be CSV-encoded |

### Slow Performance

| Symptom | Cause | Solution |
|---------|-------|----------|
| Long load times | Large dataset | Apply date range filter |
| Grid lag | Too many columns | Show only needed fields |
| Grouping slow | Complex aggregations | Simplify grouping structure |

## Related Documentation

| Topic | Link |
|-------|------|
| Creating dashboards | [Dashboards](/analytics/dashboards) |
| Campaign metrics | [Campaign Performance](/analytics/campaign-performance) |
| Audience analysis | [Audience Insights](/analytics/audience-insights) |
| Analytics overview | [Analytics Overview](/analytics/overview) |
