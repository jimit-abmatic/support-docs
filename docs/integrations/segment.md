---
id: segment
title: Segment Integration
sidebar_label: Segment
---

# Segment Integration

Connect your existing Segment analytics infrastructure to Abmatic AI and unlock powerful conversion tracking for your personalization campaigns without changing your tracking setup.

## Why Connect Segment?

If you're already using Segment as your customer data platform, this integration lets you leverage your existing event tracking for Abmatic campaigns.

| Without Segment Integration | With Segment Integration |
|---------------------------|-------------------------|
| Set up separate conversion tracking | Use your existing Segment events |
| Manage multiple analytics tools | Single source of truth for all data |
| Manual event configuration | Automatic event sync |
| Siloed campaign data | Unified customer journey view |
| Extra implementation work | Zero additional tracking code |

## What You Can Do

| Capability | Business Impact |
|-----------|-----------------|
| **Use Existing Events** | Track campaign performance with events you're already collecting |
| **Unified Analytics** | See Abmatic data alongside all your other Segment destinations |
| **Google Analytics via Segment** | Route Abmatic data to GA through your Segment pipeline |
| **Zero Code Changes** | No modifications to your existing Segment implementation |
| **Automatic Attribution** | Conversions automatically attributed to personalization campaigns |

## How It Works

```
Your Website → Segment → Abmatic AI
                 ↓
         Other Destinations
        (GA, Mixpanel, etc.)
```

When you connect Segment:
1. **Abmatic provides an API key** that you add to your Segment workspace
2. **Segment sends events to Abmatic** as a destination
3. **Events appear as conversion goals** in your Abmatic dashboard
4. **Attribution happens automatically** - conversions are tied to the campaigns that influenced them

## Getting Started

### Prerequisites

Before you begin:
- An active [Segment account](https://segment.com/)
- Admin access to your Segment workspace
- The Abmatic tracking script installed on your website

### Step 1: Navigate to Integrations

1. In Abmatic, go to **Integrations** in the left sidebar
2. Scroll to the **Conversion Tracking** section
3. Find the **Segment** card

![Integrations page showing available integrations](/img/screenshots/integrations-hub.png)

### Step 2: Get Your API Key

1. Click **Settings** on the Segment card
2. Copy the API key displayed in the dialog
3. Keep this key secure - you'll need it for Segment configuration

### Step 3: Add Abmatic as a Segment Destination

1. Log in to your [Segment workspace](https://app.segment.com/)
2. Navigate to **Connections** → **Destinations**
3. Click **Add Destination**
4. Search for "Markettailor" (Abmatic's integration name in Segment)
5. Select the source you want to connect
6. Paste your Abmatic API key when prompted
7. Enable the destination

For detailed Segment-side instructions, see [Segment's Markettailor destination documentation](https://segment.com/docs/connections/destinations/catalog/markettailor/).

### Step 4: Activate the Integration

1. Return to Abmatic's Integrations page
2. Click **Settings** on the Segment card
3. Toggle the switch from **Inactive** to **Active**
4. Click **Save**

:::note Important
Only one conversion tracking integration can be active at a time. If you have Google Analytics active, you'll need to deactivate it before activating Segment.
:::

## Using Segment Events as Conversion Goals

Once connected, your Segment events will automatically appear in Abmatic's **Manage Conversions** tab.

### Viewing Imported Events

1. Navigate to **Conversions** in the left sidebar
2. Click the **Manage** tab
3. Events from Segment will appear with a Segment icon

![Manage Conversions tab showing conversion events](/img/screenshots/conversions-manage.png)

### Setting Your Main Conversion Goal

1. Find the event you want to use as your primary conversion metric
2. Click the toggle in the **Main Event** column
3. This event will be used for calculating campaign lift

### Understanding Event Data

| Metric | What It Shows |
|--------|--------------|
| **Personalized Conversions** | Conversions from visitors who saw personalized content |
| **Control Conversions** | Conversions from visitors in your control group |
| **Conversion Rate** | Percentage of visitors who completed the event |
| **Lift** | Improvement in conversion rate from personalization |

## Using Segment with Google Analytics

If you use Google Analytics through Segment, you can send Abmatic data to GA via your Segment pipeline.

### Setting Up GA Custom Dimensions

To track Abmatic data in Google Analytics:

1. Configure custom dimensions in your GA property for:
   - Campaign ID
   - Variation ID
   - Visitor segment

2. Follow [Segment's GA custom dimensions guide](https://segment.com/docs/connections/destinations/catalog/google-analytics/#custom-dimensions) for setup instructions

### Benefits of GA via Segment

| Approach | Benefit |
|----------|---------|
| **Consistent data** | Same events flow to all destinations |
| **Single implementation** | No separate GA tracking code needed |
| **Flexible routing** | Send to GA4, UA, or both |
| **Event enrichment** | Segment can enrich events before sending |

## Best Practices

### Do This

| Practice | Why It Matters |
|----------|---------------|
| **Use meaningful event names** | Clear names make reporting easier |
| **Track key conversion events** | Focus on events that indicate business value |
| **Test before activating** | Verify events appear correctly in Segment debugger |
| **Keep event schemas consistent** | Consistent data enables better analysis |

### Avoid This

| Practice | Why It's Problematic |
|----------|---------------------|
| **Tracking too many events** | Noise makes it hard to identify signal |
| **Changing event names frequently** | Breaks historical comparison |
| **Running multiple conversion integrations** | Only one can be active |
| **Ignoring event validation** | Bad data leads to wrong decisions |

### Event Naming Conventions

For best results in Abmatic, follow these Segment event naming conventions:

| Event Type | Example | Why |
|-----------|---------|-----|
| **Form submissions** | `Form Submitted` | Standard Segment spec |
| **Button clicks** | `CTA Clicked` | Clearly identifies action |
| **Page views** | `Page Viewed` | Distinguishes from standard pageviews |
| **Purchases** | `Order Completed` | E-commerce spec compliance |

## Troubleshooting

### Events Not Appearing in Abmatic

| Issue | Check This |
|-------|-----------|
| No events showing | Verify the Segment destination is enabled |
| Delayed events | Events may take a few minutes to appear |
| Missing events | Confirm events are being sent from your source |
| Wrong events | Check that you connected the correct Segment source |

### Connection Issues

| Issue | Solution |
|-------|----------|
| "Invalid API key" error | Re-copy the key from Abmatic and paste into Segment |
| Integration won't activate | Deactivate Google Analytics integration first |
| Events not matching campaigns | Ensure Abmatic script is installed on the same pages |

### Data Discrepancies

| Issue | Cause | Solution |
|-------|-------|----------|
| Different numbers in Segment vs Abmatic | Sampling differences | Use Abmatic as source of truth for campaign data |
| Missing attribution | Events fired before page fully loaded | Ensure Abmatic script loads before Segment calls |
| Duplicate events | Multiple event calls | Deduplicate in Segment before sending |

## Integration Status

Understanding your integration status:

| Status | Meaning |
|--------|---------|
| **Active** | Segment events are being tracked for campaigns |
| **Inactive** | Integration connected but not tracking |
| **Not Configured** | API key not yet added to Segment |

## Privacy & Data Handling

### What Data Flows Through

- **Event names** and their properties
- **Timestamps** of when events occurred
- **User identifiers** (anonymous IDs from Segment)
- **Page URLs** where events occurred

### What Doesn't Flow

- Raw Segment data outside of configured events
- Personal information unless explicitly tracked
- Data from Segment sources not connected to Abmatic

## Related Documentation

| Topic | Link |
|-------|------|
| **Google Analytics Integration** | [GA4 Setup Guide](/integrations/google-analytics) |
| **Conversion Tracking** | [Conversions Overview](/conversions/overview) |
| **Creating Goals** | [Create Conversion Goals](/conversions/create-goals) |
| **Campaign Analytics** | [Conversion Analytics](/conversions/analytics) |
| **All Integrations** | [Integrations Overview](/integrations/overview) |
