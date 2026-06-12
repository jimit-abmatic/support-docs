---
id: widget
title: Widget Campaigns
sidebar_label: Widget
sidebar_position: 8
---

# Widget Campaigns

Nudge your audience to convert faster with targeted on-page widgets. Widget campaigns layer banners, popups, and slide-in cards on top of your existing pages — no website code changes required. You control who sees them with audience rules and where they appear with URL patterns.

:::info Renamed from "Banner & Popup"
This campaign type used to be called **Banner & Popup**. It is now **Widget**. The new URL slug is `/campaigns/widget/...`. Old `/campaigns/banner_popup/...` links still resolve, so existing bookmarks keep working.
:::

## How Widgets Work

A Widget campaign adds an overlay layer on top of your live pages. Unlike Inbound/Outbound personalization (which edits the content of a page), widgets sit *on top* of the page:

1. **Define your audience** — who should see the widget.
2. **Set URL patterns** — which pages should display it.
3. **Choose a widget type and design it** — banner, popup, exit-intent modal, sidebar, or agentic chat.
4. **Monitor performance** — impressions, clicks, and conversions.

![Campaigns list — the Widget summary card and Preference/Status columns](/img/screenshots/campaigns-list.png)

## The 5 Widget Types

You can build any of these five widget types in a Widget campaign:

| Widget Type | What It Looks Like | Good For |
|-------------|--------------------|----------|
| **Banner** | A bar across the top or bottom of the page | Site-wide announcements, offers |
| **Popup** | A centered modal over the page | Demos, gated offers, lead capture |
| **Exit-Intent Modal** | A popup that fires when the cursor moves to leave | Recovering visitors about to bounce |
| **Sidebar widget** *(new)* | A compact card anchored to a side of the page | Persistent, low-friction nudges |
| **Agentic Chat** | An AI chat widget | Conversational engagement (see [Agentic Chat](/campaigns/agentic-chat)) |

## Create a Widget Campaign

1. Navigate to **Campaigns**.
2. Click **+ Campaign**.
3. In the **Personalization** column of the Create Campaign dialog, select **Widget** ("Nudge your audience to convert faster").

![Create Campaign dialog with Widget in the Personalization column](/img/screenshots/campaigns-create-modal.png)

The campaign is created and opens to its editor, where you choose the widget type, design it, set your audience, and set the page patterns.

## Designing the Widget

Inside the editor you design the widget against a live preview of your site. Each widget type has its own inline editing — you can change the card image, link, title, and call-to-action (CTA) directly in the preview.

### Sidebar Widget Configuration

The sidebar widget is a compact card anchored to one side of the page. Configure:

**Anchor position** — pick one of four spots:

| Position | Where It Sits |
|----------|---------------|
| **Mid-left** | Middle of the left edge |
| **Mid-right** | Middle of the right edge |
| **Bottom-left** | Lower-left corner |
| **Bottom-right** | Lower-right corner |

**Trigger** — choose when it appears:

| Trigger | Behavior |
|---------|----------|
| **Always** | Shows as soon as the page loads |
| **After-Delay** | Shows after a set time on the page |
| **On-Scroll** | Shows once the visitor scrolls |

**Card content** — edit the image, link, title, and CTA inline in the preview. Sidebar links open in the same page (there is no separate anchor-target selector for the sidebar widget).

### HubSpot Form Picker (Popup and Exit-Intent)

Popup and exit-intent widgets include a **HubSpot form picker**. Instead of building a custom form, choose an existing HubSpot form and embed it right in the widget — so submissions flow into HubSpot the same way they would on your site.

To use it: in the popup/exit-intent editor, open the HubSpot form picker and select the form you want to embed.

:::note HubSpot connection required
The form picker only lists forms from a connected HubSpot account. Connect HubSpot in **Settings > Integrations** first.
:::

## Audience Tab

The **Audience** tab controls *who* sees your widget. Add targeting rules using filters:

- **Account List** — show only to specific named accounts
- **Industry** — target specific verticals
- **Company Size** — vary messaging by company scale
- **Location** — regional offers or compliance messages
- **Contact List** — target a specific contact list
- **Behavior** — visitors with specific engagement patterns

Rules combine together — a visitor must match your rules (and a matching page pattern) to see the widget. Click **Save** to apply.

:::info Precision targeting
Combine audience rules with URL patterns for maximum precision. For example, show a "Book a Demo" popup only to enterprise visitors browsing your pricing page.
:::

## Pages / Patterns Tab

The **Pages** tab (the Patterns editor) controls *where* the widget appears using URL patterns:

1. Add **include patterns** — URLs where the widget should appear.
2. Optionally add **exclude patterns** — URLs where it should not.
3. Patterns support regex for flexible matching.

**Pattern examples:**

| Pattern | Matches |
|---------|---------|
| `https://yoursite.com/pricing` | Exact pricing page |
| `https://yoursite.com/blog/*` | All blog posts |
| `https://yoursite.com/products/.*` | All product pages |
| `https://yoursite.com/(?!admin).*` | All pages except admin |

:::tip Start broad, then narrow
Begin with a broad pattern (like your homepage), measure results, then expand to more pages or narrow to high-intent pages.
:::

## Monitoring Performance

Use the **Insights**, **Engagement**, and **Performance** tabs to see how the widget is doing.

| Metric | What It Measures |
|--------|------------------|
| **Impressions** | How many times the widget was shown |
| **CTA Clicks** | Clicks on the widget's CTA |
| **Conversions** | Goal completions attributed to the widget |

The **Performance** tab breaks results down by Visitors, CTA Clicks, Accounts, and Conversions.

## High-Impact Widget Ideas

| Campaign | Target Audience | Widget Message |
|----------|-----------------|----------------|
| **Limited-Time Offer** | All visitors | "Book a demo this week — get a head start on onboarding" |
| **Enterprise Welcome** | 1000+ employee companies | "Enterprise plans include dedicated support — let's talk" |
| **Return Visitor** | 3+ sessions | "Welcome back! Ready to see a personalized demo?" |
| **Pricing Page Exit** | Visitors leaving pricing | "Questions about pricing? Chat with our team" |
| **Industry-Specific** | Healthcare, Finance, etc. | "See how companies in your industry use Abmatic AI" |

## Best Practices

| Practice | Why It Works |
|----------|--------------|
| Keep messages short and direct | Widgets are interruptions — respect visitor attention |
| Use one clear CTA | A single action drives higher conversion |
| Match URL patterns to intent | Pricing-page visitors need different messaging than blog readers |
| Choose the right widget type | Use exit-intent for bounce recovery, sidebar for low-friction nudges |
| Coordinate with other campaigns | Avoid stacking widgets on pages you already personalize |

## Troubleshooting

### Widget Not Appearing

| Check | Solution |
|-------|----------|
| **URL patterns** | Does the current page match an include pattern? |
| **Exclude patterns** | Is the page accidentally excluded? |
| **Audience rules** | Does the visitor match all targeting criteria? |
| **Campaign status** | Is the campaign set to Full personalization (active)? |
| **Script installed** | Verify the Abmatic AI tracking script is on the page |
| **Control group** | The visitor may be randomly assigned to the control group |

### Overlapping Widgets

If multiple Widget campaigns target the same pages, use the **Preference** column on the Campaigns list to set priority — the highest-preference campaign wins, and others fall through.

## Related

- [Campaigns Overview](/campaigns/overview) — All campaign types
- [Agentic Chat](/campaigns/agentic-chat) — The AI chat widget type
- [Website Personalization](/campaigns/website-personalization) — Edit page content directly
- [A/B Testing](/campaigns/ab-testing) — Test widget variations
- [Audiences Overview](/audiences/overview) — Build target segments
