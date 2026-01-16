---
id: reports
title: Reports
sidebar_label: Reports
sidebar_position: 3
---

# Reports

Transform your ABM data into actionable insights with custom reports. Build the exact views you need to answer critical business questions—no SQL required.

![Analytics Reports](/img/screenshots/analytics-reports.png)
*Reports list showing 351 reports organized by type with quick filter blocks*

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

Create reports on any entity in your Abmatic data:

| Report Type | What It Analyzes | Best For |
|-------------|------------------|----------|
| **Account** | Company-level data and engagement | ABM performance, target account health |
| **Contact** | Person-level information | Contact quality, persona analysis |
| **Campaign** | Campaign performance metrics | ROI analysis, optimization |
| **Opportunity** | Pipeline and deal data | Revenue attribution, forecasting |
| **User** | Team member analytics | Activity tracking, productivity |
| **Unique Visitor** | Website visitor sessions | Traffic analysis, engagement patterns |
| **LinkedIn Session** | LinkedIn visitor data | Social engagement tracking |

## Getting Started

### Creating Your First Report

1. Navigate to **Analytics > Reports**
2. Click **Create Report**
3. Select your report type
4. Name your report descriptively
5. Click **Create** to open the editor

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

## The Report Interface

### Edit Mode

Full configuration access for building your report:

- **Columns Panel** - Choose which fields to display
- **Filters** - Narrow down your data
- **Grouping** - Organize rows by field values
- **Aggregations** - Calculate sums, averages, counts
- **Chart Toggle** - Visualize your data

**Preview Limit:** Edit mode shows up to 500 rows for fast performance.

### View Mode

Read-only presentation for consuming reports:

- Charts display prominently
- Full data grid below
- No accidental configuration changes
- Share-ready format

## Building Your Report

### Adding Columns

1. Open your report in Edit mode
2. Click the **Columns** panel
3. Check the columns you want to include
4. Drag to reorder as needed

### Available Column Types

**Account Reports:**
| Category | Fields |
|----------|--------|
| **Identity** | Website, Name, Industry |
| **Firmographics** | Employee Count, Revenue, Company Type |
| **Location** | Country, Region, City |
| **Engagement** | Engagement Score, Temperature, Page Views |
| **CRM** | Salesforce ID, HubSpot ID, Last Sync |

**Contact Reports:**
| Category | Fields |
|----------|--------|
| **Identity** | Email, Name, Job Title |
| **Professional** | Seniority Level, Department |
| **Company** | Company Name, Industry, Size |
| **Engagement** | Engagement Score, Last Active |
| **CRM** | CRM ID, Lead Status |

**Campaign Reports:**
| Category | Fields |
|----------|--------|
| **Identity** | Campaign Name, Type, Status |
| **Performance** | Visitors, CTR, Conversions |
| **Attribution** | Revenue Attributed, Influenced Pipeline |

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

### Advanced Filter Builder

For complex multi-condition filters:

1. Click the **menu icon** > **Enable Advance Filtering**
2. Build your filter logic:
   - Select column
   - Choose operator
   - Enter value
3. Add conditions with AND/OR logic
4. Filters apply automatically

**Note:** Switching between standard and advanced filtering clears existing filters.

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

To enable chart visualization:

1. **Pivot mode** must be ON
2. **Row grouping** must be applied
3. **Aggregation** must be configured on at least one column

### Building a Chart

1. Configure your pivot table with grouping and aggregations
2. Toggle the **Chart** view
3. Chart renders automatically based on your data
4. Default chart type: Grouped Column

### Chart Features

- **Interactive** - Hover for details, click to filter
- **Responsive** - Adapts to screen size
- **Legend** - Color-coded categories
- **Labels** - Clear value display

## Saving and Sharing

### Auto-Save

Your report saves automatically as you make changes:
- Column configuration
- Filter settings
- Grouping and aggregations
- Chart settings

### Manual Save

Click **Save** to ensure all changes are persisted before navigating away.

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
| Edit mode | 500 rows | Fast iteration while building |
| View mode | No limit | Full data access |
| Export | No limit | Complete data download |

### Data Freshness

- **Reports** query live data (no caching)
- **Dashboard widgets** may be cached
- **Refresh** the page for the absolute latest data

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

Reports support your custom field definitions:

- Up to 10 custom fields per entity type
- Available in the column list
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

### Pipeline Attribution Report

Show ABM's impact on revenue:

| Configuration | Setting |
|---------------|---------|
| **Report Type** | Opportunity |
| **Columns** | Name, Amount, Stage, Campaign Source |
| **Group By** | Campaign Source |
| **Aggregation** | Sum of Amount |
| **Chart** | Pipeline by source |

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
