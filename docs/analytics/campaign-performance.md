---
id: campaign-performance
title: Campaign Performance
sidebar_label: Campaign Performance
sidebar_position: 4
---

# Campaign Performance

Transform raw campaign data into actionable insights. Campaign performance analytics show you exactly what's working, what's not, and where to optimize next—so every campaign delivers measurable business impact.

## Why Campaign Performance Analytics Matter

| Without Analytics | With Abmatic Analytics |
|-------------------|------------------------|
| "Our campaigns seem to be working" | "Campaign X delivered 67% conversion lift" |
| Guessing which content resonates | Data-driven content decisions |
| No proof of personalization ROI | Clear before/after comparisons |
| Reactive optimization | Proactive performance improvement |

## Accessing Campaign Performance

Every campaign has a dedicated **Insights** tab that serves as your performance command center:

1. Navigate to **Campaigns** in the sidebar
2. Click on any campaign name
3. Select the **Insights** tab

![Campaign Insights showing visitor trends and metrics](/img/screenshots/wp-insights-tab.png)
*The Insights tab shows CTA Clicks, Conversions, CVRL, CTRL metrics with trend charts and Personalized vs Control breakdown*

## Understanding the Insights Dashboard

### Summary Cards

The top of your Insights tab displays four key performance indicators:

| Card | What It Shows | Why It Matters |
|------|---------------|----------------|
| **CTA Clicks** | Call-to-action interactions | Measures content engagement |
| **Conversions** | Goal completions | Your primary success metric |
| **CVRL** | Conversion Rate Lift | Impact of personalization |
| **CTRL** | Click-Through Rate Lift | Engagement improvement |
| **Total Visitors** | Campaign reach (highlighted) | Your sample size |

### Metric Tabs

Below the summary cards, switch between detailed views:

| Tab | Shows | Best For |
|-----|-------|----------|
| **Visitors** | Daily visitor volume | Understanding traffic patterns |
| **CTA** | Click-through activity | Evaluating engagement |
| **CTR** | Click-through rates | Comparing efficiency |
| **Conversion** | Goal completions over time | Tracking success |
| **CVR** | Conversion rate trends | Measuring improvement |

### The Trend Chart

The interactive chart displays three lines:

- **Total** (blue): All campaign visitors
- **Personalized** (green): Visitors who saw personalized content
- **Control** (red): Visitors in the control group

Use the chart to:
- Identify traffic spikes and patterns
- Spot performance anomalies
- Track trends over your selected date range
- Compare personalized vs control performance visually

## Personalized vs Control Comparison

### Why Control Groups Matter

Control groups are the foundation of measuring personalization impact. Without them, you can't prove that personalization—not external factors—drove your results.

| Aspect | Personalized Group | Control Group |
|--------|-------------------|---------------|
| **Experience** | Sees personalized content | Sees original content |
| **Selection** | Random from target audience | Random from target audience |
| **Purpose** | Test the treatment | Establish baseline |

### The Comparison Table

Below the chart, a table breaks down performance by variation:

| Variation | Personalized | Control | Total |
|-----------|--------------|---------|-------|
| Distribution | 90% | 10% | 100% |
| Visitors | 634 | 71 | 705 |
| CTA | 45 | 3 | 48 |
| CTR | 7.1% | 4.2% | 6.8% |
| Conversions | 28 | 2 | 30 |
| CVR | 4.4% | 2.8% | 4.3% |

### Calculating Lift

Lift shows the improvement personalization delivers:

```
Lift = (Personalized Rate - Control Rate) / Control Rate × 100
```

**Example:**
- Personalized CVR: 4.4%
- Control CVR: 2.8%
- Lift: (4.4 - 2.8) / 2.8 × 100 = **+57% improvement**

### Interpreting Lift Results

| Lift Value | Meaning | Recommended Action |
|------------|---------|-------------------|
| **+20% or more** | Strong positive impact | Expand reach, maintain approach |
| **+5% to +20%** | Moderate improvement | Consider optimization |
| **-5% to +5%** | No significant difference | Test new variations |
| **Below -5%** | Control outperforming | Investigate and revise |

## Performance Tab: Visitor-Level Detail

The **Performance** tab shows granular visitor data for deep analysis:

![Performance tab showing visitor-level data with 1,306 rows](/img/screenshots/wp-performance-tab.png)
*Drill into individual visitor sessions with company identification, variation assignment, and engagement metrics*

### Sub-Tabs in Performance

| Tab | Shows | Use Case |
|-----|-------|----------|
| **Visitors** | All visitor sessions | Full activity view |
| **CTA Clicks** | Click events only | Engagement analysis |
| **Accounts** | Company-level aggregation | ABM reporting |
| **Conversions** | Goal completions | Success tracking |

### Visitor Data Columns

| Column | Description | Why It Matters |
|--------|-------------|----------------|
| **Domain** | Identified company | Know who's engaging |
| **Visitor** | Email if known, "Anonymous" otherwise | Track identified contacts |
| **Variation** | Personalized or Control | Verify distribution |
| **Visited Pages** | Pages they viewed | Understand journey |
| **Total Time on Pages** | Session duration | Gauge interest level |
| **Total Page Views** | Pages in session | Measure engagement depth |
| **Total Unique Page Views** | Distinct pages visited | Content breadth |

### Filtering and Searching

- **Search**: Find specific companies or visitors
- **Filters**: Narrow by variation, domain, or engagement metrics
- **Sort By**: Order by Last Seen, Page Views, or Time on Page
- **Export**: Download data for external analysis

## Account-Level Performance

### Viewing by Account

For ABM campaigns, the **Accounts** sub-tab aggregates visitor activity by company:

- Total visits from each account
- Pages viewed across all visitors
- Engagement score for the account
- Conversion events attributed

### Account Breakdown Dimensions

Filter account performance by:

| Dimension | What It Shows | Strategic Use |
|-----------|---------------|---------------|
| **Industry** | Performance by vertical | Identify best-fit industries |
| **Company Size** | Engagement by segment | Validate ICP targeting |
| **Account Tier** | Results by priority | Prove ABM effectiveness |
| **Region** | Geographic performance | Guide localization |

## Time-Based Analysis

### Date Range Selection

Control your analysis window using the date picker:

| Preset | When to Use |
|--------|-------------|
| **Today** | Real-time monitoring |
| **Last 7 days** | Weekly performance checks |
| **Last 30 days** | Monthly reviews |
| **Last 60 days** | Trend analysis |
| **Custom range** | Specific campaign periods |

### Trend Analysis Patterns

Look for these insights over time:

- **Consistent growth**: Campaign gaining traction
- **Spikes**: External factors or promotions driving traffic
- **Decline**: Audience fatigue or targeting issues
- **Weekly patterns**: Day-of-week preferences

### Comparing Date Ranges

Use the date range comparison feature to:
- Compare this month to last month
- Analyze quarter-over-quarter trends
- Evaluate before/after campaign changes

## Campaign Comparison

### Comparing Multiple Campaigns

From the main **Campaigns** list, compare performance across campaigns:

| Metric | Campaign A | Campaign B | Campaign C |
|--------|-----------|-----------|-----------|
| Visitors | 1,200 | 2,500 | 800 |
| CVR | 4.5% | 3.2% | 5.1% |
| Lift | +50% | +25% | +70% |

### What to Compare

- **Same audience, different content**: Which message resonates?
- **Same content, different audiences**: Where does it work best?
- **A/B variations**: Which version wins?

## Building Custom Reports

### Creating Performance Reports

For deeper analysis, build custom reports in Analytics:

1. Go to **Analytics > Reports**
2. Select **Campaign** report type
3. Add desired metrics:
   - Visitors, CTA, CTR
   - Conversions, CVR
   - Lift percentages
4. Configure filters (date range, campaign, variation)
5. Save for recurring use

### Adding to Dashboards

Share campaign performance with stakeholders:

1. Create a report with chart visualization
2. Open the dashboard you want to add it to
3. Click **Add Widget**
4. Select your campaign report
5. Position and resize as needed

### Exporting Data

Download performance data for:
- Executive presentations
- External analysis tools
- Historical records

Click **Export** from any campaign view to download CSV.

## Optimization Insights

### Reading the Signals

| Signal | What It Means | Action |
|--------|---------------|--------|
| High traffic, low conversion | Targeting works, offer doesn't | Improve CTA or value prop |
| Low traffic, high conversion | Targeting too narrow | Expand audience |
| Negative lift | Control outperforms | Revisit personalization strategy |
| Flat metrics | Not enough data or impact | Wait longer or test bigger changes |

### Segment Performance Analysis

Break down results to find hidden insights:

- **Which industries convert best?** Focus there.
- **Which company sizes engage most?** Refine targeting.
- **Which geographies respond?** Guide expansion.

### The Optimization Cycle

1. **Analyze**: Review current performance
2. **Hypothesize**: What could improve results?
3. **Test**: Implement changes with control group
4. **Measure**: Compare against baseline
5. **Scale**: Apply winning strategies

## Best Practices

### Review Cadence

| Frequency | What to Check | Time Required |
|-----------|---------------|---------------|
| **Daily** | Visitor counts, anomalies | 2 minutes |
| **Weekly** | Conversion trends, lift | 10 minutes |
| **Monthly** | Full performance review | 30 minutes |
| **Quarterly** | Strategic analysis, ROI | 1 hour |

### Do This

- Set clear success metrics before launching
- Wait for statistical significance before concluding
- Compare like-for-like (same time periods, similar audiences)
- Document learnings for future campaigns
- Share wins with stakeholders

### Avoid This

- Making decisions with insufficient sample size
- Ignoring negative results (they're learnings too)
- Comparing campaigns with different goals
- Changing multiple variables at once
- Forgetting to check control group size

## Statistical Significance

### Why It Matters

Statistical significance tells you whether results are real or random chance:

| Status | Meaning | Action |
|--------|---------|--------|
| **Significant** | 95%+ confidence in results | Trust the data, make decisions |
| **Not Significant** | Could be random variation | Continue testing, gather more data |
| **Trending** | Moving toward significance | Monitor, don't conclude yet |

### Sample Size Guidelines

| Expected Lift | Minimum Visitors Needed |
|---------------|------------------------|
| 50%+ lift | ~500 per variation |
| 20-50% lift | ~1,500 per variation |
| 10-20% lift | ~5,000 per variation |
| <10% lift | ~15,000+ per variation |

## Troubleshooting

### Low Visitor Counts

| Possible Cause | Solution |
|----------------|----------|
| Campaign not active | Check status is Active or Running |
| Targeting too narrow | Broaden audience criteria |
| Page targeting wrong | Verify URL patterns match |
| Script not installed | Check installation status |

### No Conversions Showing

| Possible Cause | Solution |
|----------------|----------|
| No goals configured | Create conversion goals |
| Goals not tracking | Verify goal setup on correct pages |
| Wrong conversion page | Check URL matches goal definition |
| Need more time | Wait for visitor activity |

### Unexpected Lift Results

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Very high lift | Small control group | Increase control % |
| Negative lift | Personalization not resonating | Test different content |
| Fluctuating lift | External factors | Compare consistent periods |

## Related Documentation

| Topic | Link |
|-------|------|
| Setting up A/B tests | [A/B Testing](/campaigns/ab-testing) |
| Creating conversion goals | [Create Goals](/conversions/create-goals) |
| Conversion analytics | [Conversion Analytics](/conversions/analytics) |
| Building reports | [Reports](/analytics/reports) |
| Creating dashboards | [Dashboards](/analytics/dashboards) |
