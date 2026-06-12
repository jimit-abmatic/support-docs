---
id: overview
title: Conversions Overview
sidebar_label: Overview
sidebar_position: 1
---

# Conversions Overview

Conversion tracking in Abmatic AI shows you which campaigns actually drive results — demo requests, button clicks, pricing-page visits, and more. You set up the actions you care about as conversion events, and Abmatic AI measures how often personalized visitors complete them compared to a control group.

<div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:'12px',overflow:'hidden',margin:'1.5rem 0'}}>
  <video controls preload="metadata" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} src="https://cdn.abmatic.ai/training/07-conversions.mp4"></video>
</div>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/07-conversions/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


---

## What You Can Track

You can track two native conversion event types, plus events that come in from a connected analytics tool:

| Conversion Type | What It Is | Best For |
|-----------------|-----------|----------|
| **Click Event** | A click on a specific element you pick in the visual editor (button, link, or form submit) | CTA buttons, demo links, form submits |
| **Page View** | A visit to a specific page URL | Thank-you pages, confirmation pages, pricing views |
| **Integration events** | Events synced from Segment or Google Analytics | Reusing conversion definitions you already maintain elsewhere |

:::note
Click and Page View are the two event types you create inside Abmatic AI. Segment and Google Analytics events show up automatically once those integrations are connected — see [Event Tracking](/conversions/event-tracking).
:::

---

## Opening the Conversions Dashboard

Click **Conversions** in the left icon sidebar (the funnel icon). The page opens on the **Conversions (last 60 days)** tab.

![The Conversions dashboard, showing each campaign with its unique visitors and a conversion column for every active event](/img/screenshots/conv-overview.png)

*The Conversions dashboard. Each row is a campaign; the first row is the **Non-personalized** control baseline.*

---

## The Two Tabs

The Conversions page has two tabs:

| Tab | Purpose | When to Use |
|-----|---------|-------------|
| **Conversions (last 60 days)** | See conversion performance by campaign over the last 60 days | Daily monitoring, comparing campaigns |
| **Manage** | Create, rename, activate, and configure conversion events | Setting up tracking, adjusting goals |

The **Manage** tab is disabled until you have at least one conversion event.

### The Conversions (last 60 days) tab

This view shows how each campaign contributes to your conversion events.

| Column | What It Shows |
|--------|---------------|
| **Campaigns** | Campaign name. Click the arrow (`>`) to expand a detailed breakdown. |
| **Unique Visitors** | Unique visitors for the campaign, with a "vs N in control" note showing the size of the control group. |
| **[Event name]** | One column per active conversion event, showing the conversion lift for that event. |

A control row called **Non-personalized** sits at the top of the table — this is the baseline that every campaign's lift is measured against.

Above the table you'll find a **Search** box, a **FILTERS** menu, and a live **Rows** count of how many campaigns are listed.

:::tip
Click the expand arrow (`>`) on any campaign row to see the underlying conversion counts, conversion rates, and lift for both the personalized and control groups. See [Conversion Analytics](/conversions/analytics).
:::

### The Manage tab

The Manage tab is where you create and configure your conversion events.

![The Manage tab listing conversion events with their type, what they are attached to, the Main Event radio, and a Visibility toggle](/img/screenshots/conv-manage.png)

*The Manage tab. Each event shows its type, what it is attached to, whether it is the main event, and whether it is visible (active).*

| Column | What It Shows |
|--------|---------------|
| **Event** | The conversion event name. |
| **Event Type** | **Click Event** or **Page View**. |
| **Attached To** | For Click Events, the number of elements attached (e.g. "2 Elements"). For Page Views, the page URL. |
| **Main Event** | A radio button — select it to make this event your main conversion metric. Only one event can be the main event. |
| **Visibility** | A toggle that turns tracking for the event on or off. |
| **⋮** | A row menu with **Rename event**, **Attach to a new element** (Click Events only), and **Delete event**. |

There's also a **Sort By** control and **FILTERS** above the table.

---

## Creating Conversion Events

### Step 1: Click + Conversion

Click the **+ Conversion** button in the top-right corner of either tab.

### Step 2: Choose an event type

A dialog titled **Add a new conversion event** appears with two cards:

| Card | Button | What It Does |
|------|--------|--------------|
| **Track Click Event** | **Click Event** | Opens the visual editor so you can click the exact element to track — a button, link, or form submit. |
| **Track Page View Event** | **Page View** | Tracks a conversion when a visitor reaches a specific page. Works best with "Thank you" pages after a form submission. |

Both flows start with a short two-step form: name the event, then add the page URL (the URL must be on your account's website domain).

For the full step-by-step, see [Creating Conversion Goals](/conversions/create-goals).

---

## How URL Matching Works (Page View events)

A Page View event is tied to the page URL you enter, which must be on your account's domain (`https://` or `https://www.`). If you include a query parameter, that parameter is part of the match.

| URL You Enter | What It Tracks |
|---------------|----------------|
| `https://site.com/thank-you` | Visits to that page |
| `https://site.com/thank-you?source=demo` | Visits to that page with that query parameter |

:::tip
For a thank-you or confirmation page, use the clean base URL so every visitor who lands there is counted, regardless of the parameters carried over from a form.
:::

---

## Understanding Lift

For each event, Abmatic AI compares the conversion rate of personalized visitors against the **Non-personalized** control group.

```
Lift = (Personalized CVR - Control CVR) / Control CVR × 100
```

| Lift Value | What It Means | Suggested Action |
|------------|---------------|------------------|
| **Positive** | Personalized visitors convert at a higher rate than control | Keep running; consider expanding |
| **Around zero** | Little measurable difference | Test a new variation |
| **Negative** | Control is outperforming personalization | Review the personalization |

In the table, a positive lift is shown as a purple chip; neutral or negative values appear as gray chips. Lift is capped at 999% to keep tiny control groups from distorting the display.

For the full breakdown of how lift, significance, and the personalized-vs-control split are calculated, see [Conversion Analytics](/conversions/analytics).

---

## Best Practices

### Pick high-value conversions

| Track These | Why |
|-------------|-----|
| Demo request forms | Direct pipeline signal |
| Pricing page visits | Shows buying intent |
| Free trial / signup clicks | Revenue potential |
| Contact form submissions | Sales opportunities |

Avoid tracking generic actions like homepage visits or every link click — they add noise without telling you much.

### Set up before you launch

Conversion events only count actions that happen after the event is created. Create your events **before** launching the campaigns you want to measure, and trigger each one yourself to confirm it records.

---

## Campaigns Excluded From This Table

Some campaign rows are not shown in the Conversions table:

- **LinkedIn** and **Salesforce** campaign rows are filtered out of this view.

Everything else — website personalization, widgets, sequences, and so on — appears as a row you can expand.

---

## Integration With Campaign Insights

Every campaign's **Insights** tab also shows conversions attributed to that specific campaign:

1. Go to **Campaigns** and select a campaign.
2. Open the **Insights** tab.
3. Review the conversion metrics for that campaign.

---

## Troubleshooting

### No conversions appearing

| Issue | Likely Cause | What to Do |
|-------|--------------|-----------|
| Event just created | Past actions are not backfilled | Wait for new conversions to occur |
| Zero conversions on a Click Event | Element no longer matches | Re-attach the element in the visual editor |
| Wrong count on a Page View | URL doesn't match | Confirm the URL (including `https://`) matches the live page |
| Nothing tracking at all | Script not on the page | Confirm the Abmatic AI script is installed on the conversion page |

### Conversions not attributing to a campaign

| Issue | Likely Cause | What to Do |
|-------|--------------|-----------|
| Conversion shows in totals but not for a campaign | Visitor wasn't in that campaign's audience | Check the campaign's targeting rules |
| Attribution missing | Conversion happened on a page without the script | Make sure the script is on the conversion page |

---

## Next Steps

| Goal | Resource |
|------|----------|
| Set up conversion events step by step | [Creating Conversion Goals](/conversions/create-goals) |
| Track form submissions | [Form Tracking](/conversions/form-tracking) |
| Learn the event data model | [Event Tracking](/conversions/event-tracking) |
| Analyze conversion lift | [Conversion Analytics](/conversions/analytics) |
