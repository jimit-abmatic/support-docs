---
id: create-goals
title: Creating Conversion Goals
sidebar_label: Create Goals
sidebar_position: 2
---

# Creating Conversion Goals

Conversion goals tell Abmatic AI exactly what success looks like — a demo request, a button click, a thank-you page view — so you can measure how much your personalization improves them. This page walks through creating each type of event.

![The Manage tab, where you create and configure conversion events](/img/screenshots/conv-manage.png)

*The Manage tab lists every conversion event with its type, what it's attached to, the Main Event radio, and a Visibility toggle.*

---

## The Two Event Types

Abmatic AI has two native conversion event types:

| Event Type | What It Tracks | Best For |
|------------|----------------|----------|
| **Click Event** | A click on an element you select in the visual editor | CTA buttons, demo links, form submit buttons |
| **Page View** | A visit to a specific page URL | Thank-you pages, confirmation pages, pricing pages |

You can also bring in events from Segment or Google Analytics — see [Event Tracking](/conversions/event-tracking).

---

## Starting a New Event

1. Go to **Conversions** in the left sidebar, then open the **Manage** tab.
2. Click the **+ Conversion** button in the top-right corner.
3. The **Add a new conversion event** dialog opens with two cards.

![The Add a new conversion event dialog with the Track Click Event and Track Page View Event cards](/img/screenshots/cg-new-event.png)

*The "Add a new conversion event" dialog. Choose **Click Event** to pick an element in the visual editor, or **Page View** to track a URL.*

| Card | Button | Description shown in the app |
|------|--------|-----------------------------|
| **Track Click Event** | **Click Event** | "Track click events in the visual editor. You can track button clicks, link clicks, and form submissions." |
| **Track Page View Event** | **Page View** | "Track a conversion when a user views a particular page. This works best with 'Thank you' pages after a form submission." |

---

## Creating a Click Event

A Click Event tracks clicks on a specific element — a button, link, or form submit.

### Step 1: Open the Click Event flow

In the **Add a new conversion event** dialog, click **Click Event**.

### Step 2: Name the event and add a link

The form has two steps:

1. **Create an event name** — choose a clear, unique name (event names must be unique). Good names describe the action and location, e.g. "Demo Request Button" or "Pricing Page CTA".
2. **Add a link** — enter the **Website URL** of the page where the element lives. The URL must be on your account's website domain (`https://` or `https://www.`).

### Step 3: Pick the element in the visual editor

Abmatic AI opens the **conversion editor** in track mode on the page you entered.

![The conversion editor opened in track mode over the live website page](/img/screenshots/cg-editor.png)

*The conversion editor loads your page so you can click the exact element to track.*

1. Hover over elements on the page to highlight them.
2. Click the element you want to track (button, link, or form submit).
3. Choose how broadly to match:
   - **Only this element** — tracks just that one element.
   - **All similar elements** — tracks every element that matches the same pattern (useful for a CTA repeated across the page).
4. Save. The event becomes active immediately and appears in the Manage tab.

:::tip
Elements with a stable `id` or class track most reliably. If an element changes often, "All similar elements" gives you more resilient tracking. You can re-attach an element later from the event's **⋮** menu (**Attach to a new element**).
:::

---

## Creating a Page View Event

A Page View event records a conversion whenever a visitor reaches a specific page. It works best for "Thank you" or confirmation pages shown after a form submission.

### Step 1: Open the Page View flow

In the **Add a new conversion event** dialog, click **Page View**.

### Step 2: Name the event and enter the URL

1. **Create an event name** (e.g. "Demo Form Completed").
2. **Add a link** — enter the full **Page URL** to track. It must:
   - Start with `https://`
   - Be on your account's website domain
   - For example: `https://yoursite.com/thank-you`
3. Save.

### How URL matching works

The page you enter must match your account's domain. If you include a query parameter, that parameter becomes part of the match.

| URL You Enter | What It Tracks |
|---------------|----------------|
| `https://site.com/thank-you` | Visits to that page |
| `https://site.com/thank-you?source=demo` | Visits to that page with that query parameter |

Use the clean base URL to count every visitor who lands on the page, regardless of extra parameters.

---

## Setting the Main Event

One event can be marked as your **Main Event** — the primary conversion metric Abmatic AI features in analytics and significance calculations.

1. Go to **Conversions** → **Manage**.
2. Find your highest-value event (usually a bottom-of-funnel action like a demo request).
3. Select its **Main Event** radio button.

Only one event can be the main event at a time. Selecting a new one moves the designation.

:::tip
Make your main event your most valuable conversion — typically demo requests, contact form submissions, or trial signups.
:::

---

## Managing Events

### Turning an event on or off

Each event has a **Visibility** toggle in the Manage tab. Turn it off to pause tracking for that event (for example, a seasonal goal) without deleting it. Toggle it back on to resume.

### The row menu (⋮)

The **⋮** menu on each event row offers:

| Action | What It Does |
|--------|--------------|
| **Rename event** | Change the event's name. |
| **Attach to a new element** | (Click Events only) Re-open the visual editor to point the event at a different element. |
| **Delete event** | Remove the event. |

:::note
Deleting an event removes it from the list but does not erase past conversion data already recorded for it.
:::

### Expanding a Click Event

Click the arrow (`>`) next to a Click Event in the Manage tab to see the page URLs it's attached to (each links back into the editor) and the element count.

---

## Goal Sources

Conversion events in Abmatic AI come from a few sources:

| Source | Where It Comes From |
|--------|---------------------|
| **Abmatic AI** | Click Event and Page View events you create in the Manage tab. |
| **Segment** | Events synced from a connected Segment integration. |
| **Google Analytics** | Events synced from a connected Google Analytics integration. |

When you connect a conversion-tracking integration, its events appear in the **Manage** (Conversion Management) tab alongside your own.

:::note
When Google Analytics is the active conversion-tracking integration, the native **+ Conversion** dialog is hidden — your conversion events come from Google Analytics instead. See [Event Tracking](/conversions/event-tracking).
:::

---

## Best Practices

- **Name events clearly** — include the action and the location so reports are easy to read.
- **Set a main event** — pick your highest-value conversion as the primary metric.
- **Test before launch** — trigger each event yourself and confirm it appears before relying on it.
- **Don't over-track** — a handful of meaningful events per funnel stage beats dozens of low-signal ones.

---

## Troubleshooting

### Event not recording

| Issue | What to Check |
|-------|---------------|
| Event shows 0 conversions | Confirm the **Visibility** toggle is on |
| Page View not firing | Confirm the URL matches the live page exactly, including `https://` |
| Click not registering | Re-attach the element from the **⋮** menu |
| Nothing tracking | Make sure the Abmatic AI script is installed on the page |

### Element not found (Click Events)

| Cause | Solution |
|-------|----------|
| The element was redesigned | Re-attach it in the visual editor |
| Dynamic element (React, Vue) | Use a more stable element or "All similar elements" |
| Element is inside a modal/popup | Open the modal first, then attach the element |

---

## Related

- [Conversions Overview](/conversions/overview) — the dashboard and tabs
- [Event Tracking](/conversions/event-tracking) — the event data model and integrations
- [Form Tracking](/conversions/form-tracking) — tracking form submissions
- [Conversion Analytics](/conversions/analytics) — reading lift and significance
