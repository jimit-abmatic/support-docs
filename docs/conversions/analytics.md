---
id: analytics
title: Conversion Analytics
sidebar_label: Analytics
sidebar_position: 5
---

# Conversion Analytics

The Conversions dashboard turns your conversion data into a clear comparison: how often personalized visitors convert versus a control group that saw the original experience. This page explains how to read it.

![The Conversions dashboard, showing conversion lift across campaigns](/img/screenshots/ca-lift.png)

*The Conversions (last 60 days) tab. Each campaign row shows unique visitors and a conversion column per event, with lift shown as a colored chip.*

---

## The Conversions Tab

The main dashboard compares conversion performance across your campaigns over the last 60 days.

| Column | What It Shows |
|--------|---------------|
| **Campaigns** | Campaign name. Click the arrow (`>`) to expand a detailed breakdown. |
| **Unique Visitors** | Unique visitors for the campaign, with a "vs N in control" note showing the control-group size. |
| **[Event name]** | One column per active conversion event, showing the lift for that event. |

The first row, **Non-personalized**, is the control baseline that every campaign's lift is measured against.

### Lift chips

Each event cell shows a chip with the conversion lift:

- A **purple** chip means positive lift — personalized visitors convert at a higher rate than control.
- A **gray** chip means neutral or negative lift.

Lift is shown with its sign and is capped at 999% so a very small control group can't distort the display.

### Expanding a campaign

Click the arrow (`>`) on any campaign row to open a detailed breakdown. For each event, the detail grid shows three rows split into **Personalized** and **Control** columns:

| Detail Row | Personalized | Control |
|------------|--------------|---------|
| **Conversions** | Goal completions among personalized visitors | Goal completions in the control group |
| **Conversion Rate** | Conversions ÷ personalized visitors | Conversions ÷ control visitors |
| **Conversion Lift** | Improvement over control | — |

---

## How Lift Is Calculated

```
Conversion Lift = (Personalized CVR - Control CVR) / Control CVR × 100
```

**Example:**

| Metric | Value |
|--------|-------|
| Personalized visitors | 379 |
| Personalized conversions | 19 |
| Personalized CVR | 5.01% |
| Control visitors | 364 |
| Control conversions | 12 |
| Control CVR | 3.30% |
| **Conversion Lift** | **(5.01 − 3.30) / 3.30 × 100 = +52%** |

### Interpreting lift

| Lift Value | What It Means | Suggested Action |
|------------|---------------|------------------|
| **Clearly positive** | Personalization is winning | Keep running; consider expanding |
| **Near zero** | Little measurable difference | Test a new variation |
| **Negative** | Control is outperforming | Review the personalization |

---

## Reading Results With Confidence

Lift is only meaningful once you have enough data. A campaign with a handful of visitors can swing wildly from day to day, so wait for a reasonable sample before acting.

Things that help you reach a reliable read faster:

| What Helps | Why |
|------------|-----|
| **More traffic** | More data points = a steadier signal |
| **High-intent pages** | Pricing and demo pages give clearer conversion signals |
| **Bigger changes** | Larger differences are easier to detect than subtle tweaks |

:::tip
Review weekly rather than daily. Day-to-day noise tempts you into changing a campaign before the data has settled.
:::

---

## Personalized vs Control

Every personalization campaign splits its audience into two groups so you always have a baseline:

| Group | Experience | Purpose |
|-------|------------|---------|
| **Personalized** | Your customized content | What you're testing |
| **Control** | The original, unmodified page | The baseline for comparison |

The **Non-personalized** row at the top of the table aggregates the control baseline. All per-campaign lift is measured against the control split for that campaign.

---

## Main Event vs Other Events

In the **Manage** tab you can mark one event as the **Main Event** — your primary conversion metric. The main event is the one to focus your decisions on; the others give supporting context.

| Event Role | Purpose | Example |
|------------|---------|---------|
| **Main Event** | Primary success metric | Demo requests |
| **Other events** | Micro-conversions and secondary signals | Pricing page views, downloads |

Tracking several events lets you see the whole funnel — which steps move and which stall — while still having one clear headline metric. See [Creating Conversion Goals](/conversions/create-goals) for how to set the Main Event.

---

## What's Excluded From the Table

Not every campaign type appears in the Conversions table:

- **LinkedIn** and **Salesforce** campaign rows are filtered out of this view.

All other campaigns — website personalization, widgets, sequences, and so on — show up as expandable rows.

---

## Time Window

The Conversions dashboard shows the **last 60 days** of data. When you compare against another tool, line up the same date range — different attribution windows are the most common reason two systems show different totals.

---

## Best Practices

| Do | Why |
|----|-----|
| Wait for a meaningful sample | Premature decisions lock in false conclusions |
| Focus on the main event | Secondary events give context, not the headline |
| Check the control-group size | A tiny control group makes lift unreliable |
| Review weekly | Catch trends without overreacting to daily noise |

| Avoid | Consequence |
|-------|-------------|
| Stopping a test early | You may lock in a false positive or negative |
| Reading lift on tiny samples | The numbers swing and mislead |
| Ignoring outside factors | Holidays and promotions distort results |

---

## Troubleshooting

### No conversions showing

| Symptom | Likely Cause | What to Do |
|---------|--------------|-----------|
| Zero conversions everywhere | No events configured | Create events in the **Manage** tab |
| Zero for one campaign | No traffic or targeting mismatch | Check audience targeting and event setup |
| Conversions stopped | Script removed or broken | Verify the Abmatic AI script is installed |

### Numbers look off

| Issue | Cause | Solution |
|-------|-------|----------|
| Doesn't match another tool | Different attribution windows | Compare the same date range |
| Duplicate conversions | An action counted twice | Check that a form isn't tracked by both a Click Event and a Page View |
| Lift looks unstable | Small sample | Keep running; avoid checking daily |

---

## Related

| Page | Relationship |
|------|--------------|
| [Creating Conversion Goals](/conversions/create-goals) | Set up what to track and pick the Main Event |
| [Event Tracking](/conversions/event-tracking) | The event data model and integrations |
| [A/B Testing](/campaigns/ab-testing) | Run controlled experiments |
| [Conversions Overview](/conversions/overview) | The dashboard and tabs |
