---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
sidebar_position: 3
---

# Event Tracking

Abmatic AI captures interactions on your website — page views, scroll depth, time on page, and the conversion events you define — and ties them to the companies and contacts engaging with your content.

## What Gets Tracked

### Automatic tracking (no setup)

These signals are captured as soon as the Abmatic AI script is installed:

| Signal | What's Captured | Why It Matters |
|--------|-----------------|----------------|
| **Page Views** | Each page visited, with URL, timestamp, and time on page | See content interest by account |
| **Session Data** | Entry/exit, visit duration, return visits | Spot engagement patterns |
| **Scroll Depth** | How far visitors scroll (percentage) | Measure real content consumption |
| **Time on Page** | Active time on each page | Tell engaged readers from bouncers |
| **Form Detection** | Forms with email fields are detected automatically | Capture lead submissions |

### Conversion events (you define)

On top of automatic signals, you create conversion events to measure specific actions:

| Event Type | What It Tracks | Example |
|------------|----------------|---------|
| **Click Event** | A click on an element you pick in the visual editor | "Request Demo" button click |
| **Page View** | A visit to a specific URL | Pricing page view |

You can also bring in events from **Segment** and **Google Analytics** (see below).

---

## Creating a Click Event

A Click Event tracks clicks on a specific element such as a CTA, link, or form submit.

1. Go to **Conversions** → **Manage**.
2. Click **+ Conversion**.
3. In the **Add a new conversion event** dialog, choose **Track Click Event** (the **Click Event** button). This opens the visual editor.
4. Name the event and enter the page URL where the element lives (the URL must be on your account's domain).
5. In the visual editor, hover to highlight elements, then click the one you want to track.
6. Choose **Only this element** or **All similar elements**, then save. The event is active immediately.

![The Manage tab showing conversion events with Click Event and Page View types](/img/screenshots/et-manage.png)

*The Manage tab lists every conversion event with its type, what it's attached to, the Main Event radio, and a Visibility toggle.*

### Element selection tips

| Option | When to Use |
|--------|-------------|
| **Only this element** | Exact match — for a single, unique element |
| **All similar elements** | Pattern match — for an element repeated across the page |

**Tip:** Give important elements a stable `id` or `data` attribute so tracking stays reliable:

```html
<button id="hero-demo-cta" data-action="request-demo">
  Request Demo
</button>
```

---

## Creating a Page View Event

A Page View event tracks visits to a specific page — ideal for thank-you, confirmation, or pricing pages.

1. Go to **Conversions** → **Manage** → **+ Conversion**.
2. In the dialog, choose **Track Page View Event** (the **Page View** button).
3. Name the event (e.g. "Demo Page View").
4. Enter the full URL to track, e.g. `https://yoursite.com/demo`. It must start with `https://` and be on your account's domain.
5. Save.

### URL matching

The URL you enter is matched against your account's domain. If you include a query parameter, that parameter is part of the match; use the clean base URL to count all visits regardless of parameters.

---

## Where Events Live: the Manage Tab

Every event appears in **Conversions → Manage**:

| Column | What It Shows |
|--------|---------------|
| **Event** | The event name |
| **Event Type** | **Click Event** or **Page View** |
| **Attached To** | Element count (Click Events) or page URL (Page Views) |
| **Main Event** | Radio button to set the main conversion metric |
| **Visibility** | Toggle to turn the event on or off |
| **⋮** | Rename event, Attach to a new element, Delete event |

:::tip
If an event shows zero conversions, the first thing to check is its **Visibility** toggle in the Manage tab.
:::

---

## Campaign Attribution

When a campaign is running an A/B split, each conversion is recorded against either the **personalized** or the **control** experience. That's what lets Abmatic AI calculate conversion lift — the difference in conversion rate between personalized visitors and the **Non-personalized** control group.

The Conversions (last 60 days) tab shows this comparison per campaign; expand a campaign row to see conversions, conversion rate, and lift for both groups. See [Conversion Analytics](/conversions/analytics).

---

## Single Page Application (SPA) Support

Abmatic AI handles client-side routing automatically:

- Detects route changes without a full page reload
- Records each route as its own page view
- Keeps session continuity across navigation

Works with React, Vue, Angular, Next.js, and similar frameworks — no extra configuration.

---

## Integrations: Segment and Google Analytics

You can feed conversion events into Abmatic AI from your existing analytics tools.

### Segment

1. Connect **Segment** under **Integrations**.
2. Events from Segment surface in the **Conversion Management** (Manage) tab.

### Google Analytics

1. Connect **Google Analytics** under **Integrations**.
2. You map a custom dimension so events come through with company context.

:::note
When Google Analytics is the active conversion-tracking integration, the native **+ Conversion** dialog is hidden — your conversion events come from Google Analytics instead.
:::

---

## Viewing Your Event Data

### Conversions (last 60 days) tab

1. Go to **Conversions** → **Conversions (last 60 days)**.
2. See conversion performance per campaign, with one column per active event.
3. Expand a campaign row for the personalized-vs-control breakdown.

### Manage tab

1. Go to **Conversions** → **Manage**.
2. Review every configured event, its type, and what it's attached to.
3. Use the **Visibility** toggle to turn events on or off.

---

## Best Practices

### Naming

**Do:**

```
"Pricing Page - Request Demo CTA"
"Homepage Hero - Watch Video"
"Footer - Contact Sales Link"
```

**Avoid:**

```
"click1"
"event"
"button"
```

### What to track

| Track These | Skip These |
|-------------|------------|
| Primary CTAs (demos, trials, contact) | Every link click |
| Key page visits (pricing, features) | Navigation clicks |
| Form submissions | Scroll events (captured automatically) |

---

## Troubleshooting

### Events not tracking

| Issue | Cause | Solution |
|-------|-------|----------|
| No events at all | Script not installed | Confirm the Abmatic AI script is in the page source |
| Event shows 0 | Event turned off | Check the **Visibility** toggle in Manage |
| Element stopped tracking | The element changed | Re-attach it from the event's **⋮** menu |
| Intermittent tracking | Duplicate script instances | Remove duplicate script tags |

### Wrong element firing

| Issue | Cause | Solution |
|-------|-------|----------|
| Multiple events per click | Selector too broad | Use **Only this element** |
| Wrong page tracked | URL too broad | Use the exact page URL |

---

## Related

| Page | What It Covers |
|------|----------------|
| [Form Tracking](/conversions/form-tracking) | Tracking form submissions |
| [Creating Conversion Goals](/conversions/create-goals) | Step-by-step event creation |
| [Conversion Analytics](/conversions/analytics) | Reading lift and significance |
| [Conversions Overview](/conversions/overview) | The dashboard and tabs |
