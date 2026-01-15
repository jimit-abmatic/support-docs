---
id: analytics
title: Conversion Analytics
sidebar_label: Analytics
sidebar_position: 5
---

# Conversion Analytics

Turn your conversion data into actionable insights. Conversion Analytics shows you exactly how personalization impacts your key business metrics—proving ROI with statistical confidence.

![Conversions Dashboard](/img/screenshots/conversions-overview.png)
*The Conversions dashboard shows conversion lift across all campaigns, comparing personalized vs control performance for each goal.*

## Why Conversion Analytics Matters

| Without Analytics | With Abmatic Analytics |
|-------------------|------------------------|
| "We think personalization works" | "Personalization increased demos by 47%" |
| Gut-feel decisions | Data-driven optimization |
| Can't prove ROI to leadership | Clear lift metrics and significance |
| Don't know which campaigns perform | Side-by-side comparison across all campaigns |
| Unclear what to improve | Specific insights on what drives conversions |

## Understanding the Analytics Dashboard

### The Conversions Tab

The main dashboard shows conversion performance across all your campaigns:

| Column | What It Shows | Why It Matters |
|--------|---------------|----------------|
| **Campaign** | Campaign name with expand arrow | Click to see detailed breakdown |
| **Unique Visitors** | Personalized vs control visitor counts | Shows your sample size for statistical validity |
| **Goal Columns** | Lift percentage for each conversion goal | Positive = personalization is winning |

### Reading the Metrics

Each campaign row shows:

- **Visitor Split**: "379 vs 364 in control" means 379 saw personalization, 364 saw the original
- **Lift Chips**: Color-coded conversion lift (purple = positive, gray = negative/neutral)
- **Expandable Details**: Click the arrow to see Conversions, Conversion Rate, and Lift breakdown

### Expanding Campaign Details

Click any campaign row to reveal:

| Metric | Personalized | Control |
|--------|--------------|---------|
| **Conversions** | Total goal completions | Control group completions |
| **Conversion Rate** | Conversions / Visitors % | Control conversion % |
| **Conversion Lift** | Improvement vs control | — |

## Key Metrics Explained

### Visitor Metrics

| Metric | Description | Example |
|--------|-------------|---------|
| **Personalized Visitors** | Visitors who saw your personalized experience | 379 visitors |
| **Control Visitors** | Visitors who saw the original (for comparison) | 364 visitors |
| **Total Visitors** | Combined personalized + control | 743 visitors |

### Conversion Metrics

| Metric | Description | Example |
|--------|-------------|---------|
| **Conversions** | Number of goal completions | 19 demo requests |
| **Conversion Rate (CVR)** | Conversions ÷ Visitors × 100 | 5.0% |
| **Unique Conversions** | Visitors who converted at least once | 18 unique conversions |

### Lift Metrics

| Metric | What It Measures | How to Interpret |
|--------|------------------|------------------|
| **Conversion Lift** | % improvement over control | +47% means personalization performs 47% better |
| **Absolute Lift** | Percentage point difference | 5.0% vs 3.4% = 1.6 points |
| **Relative Lift** | Percentage improvement | (5.0 - 3.4) / 3.4 = +47% |

## Calculating Conversion Lift

### The Formula

```
Conversion Lift = (Personalized CVR - Control CVR) / Control CVR × 100
```

### Example Calculation

| Metric | Value |
|--------|-------|
| Personalized Visitors | 379 |
| Personalized Conversions | 19 |
| Personalized CVR | 5.01% |
| Control Visitors | 364 |
| Control Conversions | 12 |
| Control CVR | 3.30% |
| **Conversion Lift** | **(5.01 - 3.30) / 3.30 × 100 = +52%** |

### Interpreting Your Results

| Lift Value | What It Means | Recommended Action |
|------------|---------------|-------------------|
| **+20% or higher** | Strong positive impact | Expand to more pages/audiences |
| **+5% to +19%** | Moderate improvement | Continue running, look for optimizations |
| **-5% to +5%** | No significant difference | Test different variations |
| **Below -5%** | Control outperforming | Investigate and adjust personalization |

## Statistical Significance

### Why Significance Matters

Statistical significance tells you if your results are reliable—not just random chance:

| Significance Level | What It Means | Should You Act? |
|-------------------|---------------|-----------------|
| **95%+ confidence** | Results are real with high certainty | Yes, make decisions |
| **90-95% confidence** | Results likely real but some uncertainty | Consider acting, continue monitoring |
| **Below 90%** | Need more data | Keep running the test |

### Time to Significance

Abmatic estimates when you'll reach statistical significance based on:

- **Current traffic volume** — More visitors = faster results
- **Baseline conversion rate** — Higher CVR = faster signal detection
- **Lift magnitude** — Bigger differences reach significance sooner

**Tip**: Focus on high-traffic pages with measurable conversion events to reach significance quickly.

### Reaching Significance Faster

| Strategy | Impact |
|----------|--------|
| **Increase traffic** | More data points = faster conclusions |
| **Focus on high-value pages** | Pricing, demo pages have clearer signals |
| **Test bigger changes** | Subtle tweaks take longer to measure |
| **Use larger control groups** | 20-50% control provides more statistical power |

## Personalized vs Control Comparison

### How Control Groups Work

Every personalization campaign automatically splits visitors:

| Group | Experience | Purpose |
|-------|------------|---------|
| **Personalized** | Your customized content | What you're testing |
| **Control** | Original, un-modified page | Baseline for comparison |

### Configuring Control Percentage

| Control Size | Personalized % | Best For |
|--------------|----------------|----------|
| **10% (default)** | 90% | Maximizing personalization reach |
| **20%** | 80% | Faster statistical significance |
| **50%** | 50% | True A/B testing (equal split) |

**Pro Tip**: Start with 10% control, increase to 20-50% if you need faster statistical conclusions.

## Multi-Goal Analytics

### Main Goal vs Supporting Goals

| Goal Type | Purpose | Example |
|-----------|---------|---------|
| **Main Goal** | Primary success metric, used for significance testing | Demo requests |
| **Supporting Goals** | Track micro-conversions and secondary actions | Pricing page views, PDF downloads |

### Why Track Multiple Goals

- **See the full funnel**: Track awareness → interest → conversion
- **Identify drop-offs**: Find where visitors abandon
- **Understand behavior**: What actions lead to conversions?

### Example Goal Hierarchy

| Funnel Stage | Goal | Metric Type |
|--------------|------|-------------|
| Awareness | Page views | Supporting |
| Engagement | Scroll depth, time on page | Supporting |
| Interest | Pricing page visit | Supporting |
| Intent | Contact form started | Supporting |
| **Conversion** | **Demo request submitted** | **Main** |

## Attribution Models

Abmatic tracks how campaigns contribute to conversions:

### First Touch Attribution

- Credits the first campaign a visitor encountered
- Best for: Understanding which campaigns create awareness

### Last Touch Attribution

- Credits the final campaign before conversion
- Best for: Understanding which campaigns close deals

### Multi-Touch Attribution

- Credits all campaigns proportionally
- Best for: Understanding the full customer journey

## Segment Analysis

### Breaking Down Performance

Analyze conversions by different dimensions:

| Segment | What You Learn |
|---------|----------------|
| **By Industry** | Which verticals respond best to personalization |
| **By Company Size** | Enterprise vs SMB conversion differences |
| **By Campaign** | Which campaigns drive the most conversions |
| **By Time Period** | Trends and seasonality |

### Using Segment Insights

1. **Find top performers**: Which segments convert best?
2. **Double down**: Increase personalization for high-performing segments
3. **Investigate laggards**: Why are some segments underperforming?
4. **Optimize**: Adjust messaging for underperforming segments

## Best Practices

### Do This

| Practice | Why |
|----------|-----|
| **Wait for significance** | Premature decisions lead to false conclusions |
| **Focus on main goal** | Secondary metrics provide context, not decisions |
| **Check sample size** | Small samples can show misleading results |
| **Review weekly** | Catch trends without over-reacting to daily noise |
| **Document learnings** | Build institutional knowledge of what works |

### Avoid This

| Mistake | Consequence |
|---------|-------------|
| **Stopping tests early** | May lock in false positive/negative results |
| **Over-segmenting** | Reduces sample size, delays significance |
| **Ignoring context** | External factors (seasonality, promotions) affect results |
| **Testing everything at once** | Can't attribute results to specific changes |
| **Only looking at winners** | Losers teach you what doesn't work |

### Acting on Your Data

| Result | Recommended Action |
|--------|-------------------|
| **Significant positive lift** | Expand personalization to more pages/audiences |
| **Not yet significant** | Continue running, don't make changes |
| **Significant negative lift** | Pause campaign, investigate root cause |
| **No lift after 2+ weeks** | Try different variations or messaging |

## Time Period Analysis

### Viewing Trends

The Conversions dashboard shows data for the last 60 days by default. Track:

- **Daily patterns**: Weekday vs weekend differences
- **Weekly trends**: Is performance improving?
- **Monthly comparison**: Month-over-month growth

### Seasonal Considerations

- **Account for external factors**: Holidays, promotions, news events
- **Compare similar periods**: This month vs same month last year
- **Watch for anomalies**: Sudden spikes or drops need investigation

## Troubleshooting

### No Conversions Showing

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Zero conversions for all campaigns | Goals not configured | Create goals in Manage tab |
| Zero for specific campaign | No traffic or goal mismatch | Check audience targeting and goal setup |
| Conversions suddenly stopped | Script removed or broken | Verify script installation |

### Inconsistent Numbers

| Issue | Cause | Solution |
|-------|-------|----------|
| Numbers don't match other tools | Different attribution windows | Compare same date ranges |
| Duplicate conversions | Multiple goal triggers | Review goal configuration |
| Missing conversions | Goal not firing | Test goal with browser DevTools |

### Significance Not Reached

| Issue | Why | Solution |
|-------|-----|----------|
| Taking too long | Low traffic or small lift | Increase traffic or test bigger changes |
| Fluctuating results | Not enough data | Keep running, avoid checking daily |
| Stuck at low confidence | Lift may be truly small | Accept smaller lift or try new approach |

## Related Features

| Feature | Relationship to Analytics |
|---------|--------------------------|
| [Creating Goals](/conversions/create-goals) | Set up what to track |
| [Event Tracking](/conversions/event-tracking) | Configure conversion events |
| [A/B Testing](/campaigns/ab-testing) | Run controlled experiments |
| [Campaign Performance](/analytics/campaign-performance) | Broader campaign metrics |
