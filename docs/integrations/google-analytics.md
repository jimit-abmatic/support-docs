---
id: google-analytics
title: Google Analytics 4 Integration
sidebar_label: Google Analytics 4
---

# Google Analytics 4 Integration

Leverage your existing Google Analytics 4 conversion goals and events within Abmatic AI to measure personalization impact without duplicate tracking setup.

## Why Connect Google Analytics 4?

| Before Integration | After Integration |
|-------------------|-------------------|
| Separate conversion tracking in each tool | Unified conversion data across platforms |
| Manual correlation of GA4 and personalization data | Automatic attribution to personalized experiences |
| Limited visibility into ABM campaign impact | Clear ROI metrics for personalization efforts |
| Time-consuming reporting across systems | Single source of truth for conversion analytics |

## What You Can Do

| Capability | Business Impact |
|-----------|-----------------|
| Import GA4 conversion goals | Use existing goals without recreating them |
| Track personalization conversions | Measure exactly which personalizations drive action |
| Automatic A/B attribution | Compare personalized vs control group performance |
| Cross-platform analytics | See the full customer journey in one place |

## Getting Started

### Prerequisites

Before connecting Google Analytics 4, ensure you have:

- A Google Analytics 4 property (not Universal Analytics)
- Admin or Editor access to the GA4 property
- At least one available custom dimension slot (or ability to repurpose one)

### Step 1: Navigate to Integrations

1. Go to **Settings** > **Integrations**
2. Scroll down to find **Google Analytics 4** in the Conversion Tracking section
3. Click **Authorize**

![Integrations page](/img/screenshots/integrations-hub.png)
*The Integrations page shows all available connections. Google Analytics 4 is in the Conversion Tracking section.*

### Step 2: Authenticate with Google

1. Sign in with your Google account
2. Select the Google account that has access to your GA4 property
3. Grant Abmatic the requested permissions

**Permissions requested:**

| Permission | Why It's Needed |
|-----------|-----------------|
| View Analytics data | Read your existing conversion goals |
| Edit Analytics data | Create custom dimensions for attribution |
| Read Analytics configuration | Access property settings |

### Step 3: Select Your Property

After authentication, you'll see a selection dialog:

1. **Account**: Choose your GA4 account
2. **Property**: Select the web property to connect

The property you select should be the one tracking your website where Abmatic personalization runs.

### Step 4: Configure Custom Dimensions

Abmatic uses a custom dimension to track which visitors saw personalized content vs. control group content. This enables accurate A/B testing and conversion attribution.

**If you have available custom dimension slots:**
- Abmatic automatically creates a new custom dimension

**If all custom dimension slots are in use:**
- You'll see a list of your existing custom dimensions
- Select one that Abmatic can repurpose (choose a dimension you no longer actively use)

## How It Works

Once connected, the integration enables a seamless data flow:

```
Visitor arrives → Abmatic tracks personalization status →
Custom dimension records group → GA4 goal triggers →
Abmatic imports conversion → Attribution calculated
```

### What Gets Synced

| From GA4 | To Abmatic |
|----------|-----------|
| Conversion events | Conversion goals for campaigns |
| Goal completions | Conversion metrics in insights |
| Event data | Attribution to personalized/control groups |

### Conversion Attribution

When a visitor converts (e.g., submits a demo request), Abmatic knows:

1. **Which group they were in**: Personalized or Control
2. **Which campaign showed them content**: Specific personalization campaign
3. **What page they converted on**: Full attribution path

This enables the lift calculations you see in Campaign Insights.

## Using GA4 Conversions in Abmatic

### Viewing Imported Goals

After connecting:

1. Go to **Conversions** > **Manage**
2. Your GA4 conversion events appear with a Google Analytics icon
3. Set any GA4 goal as your **Main Event** for primary tracking

![Conversions Manage tab](/img/screenshots/conversions-manage.png)
*The Manage tab shows all conversion events. GA4 events appear alongside manually created goals.*

### Setting a Main Conversion Goal

1. In the Manage tab, find your GA4 conversion
2. Toggle **Main Event** to make it your primary metric
3. This goal now appears in campaign insights and comparison charts

### Multi-Goal Tracking

You can track multiple GA4 conversions simultaneously:

- **Main Event**: Your primary conversion (e.g., demo requests)
- **Supporting Events**: Secondary actions (e.g., pricing page views, content downloads)

## Understanding Your Metrics

With GA4 connected, your Campaign Insights show:

| Metric | What It Shows |
|--------|--------------|
| Conversions (Personalized) | Goal completions for visitors who saw personalized content |
| Conversions (Control) | Goal completions for visitors in the control group |
| Conversion Rate | Percentage of visitors who completed the goal |
| Lift | Performance improvement from personalization |

### Calculating Conversion Lift

```
Lift = ((Personalized CVR - Control CVR) / Control CVR) x 100%
```

**Example:**
- Personalized CVR: 4.5%
- Control CVR: 3.0%
- Lift: ((4.5 - 3.0) / 3.0) x 100% = **+50% lift**

## Best Practices

### Do

- Connect the GA4 property that tracks your main website
- Use goals that align with your personalization objectives
- Set meaningful goals as your Main Event
- Allow sufficient time for statistical significance

### Don't

- Connect a test or staging property to production Abmatic
- Repurpose actively-used custom dimensions
- Expect immediate results—give campaigns time to gather data
- Create duplicate goals in both systems

### Goal Selection Strategy

| Personalization Type | Best GA4 Goal to Track |
|---------------------|------------------------|
| Homepage hero personalization | Key page visits, demo requests |
| Industry-specific messaging | Form submissions, content downloads |
| Pricing page variations | Pricing page engagement, trial signups |
| CTA button tests | Button click events, conversions |

## Troubleshooting

### Connection Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Authorization fails | Insufficient GA4 permissions | Ensure you have Admin or Editor access |
| No accounts appear | Wrong Google account | Sign in with account that owns GA4 property |
| Property not listed | Universal Analytics property | Only GA4 properties are supported |

### Data Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| No conversions showing | Recent connection | Wait 24-48 hours for data to populate |
| Missing attribution | Script not installed | Verify Abmatic script is on all pages |
| Inconsistent numbers | Time zone differences | Data syncs may have timezone lag |

### Custom Dimension Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| "Too many custom dimensions" | GA4 limit reached | Select an existing dimension to repurpose |
| Data not splitting correctly | Dimension not active | Check GA4 settings to ensure dimension is active |

## Privacy & Data Handling

The Google Analytics 4 integration:

- Uses OAuth 2.0 for secure authentication
- Only accesses data from the selected property
- Does not modify your existing GA4 goals
- Stores only the custom dimension for attribution
- Can be disconnected at any time without affecting GA4 data

## Disconnecting the Integration

To remove the Google Analytics 4 connection:

1. Go to **Settings** > **Integrations**
2. Find Google Analytics 4
3. Click **Settings** > **Disable**

This will:
- Stop syncing new conversion data
- Preserve historical data in Abmatic
- Remove the integration permissions from your Google account

## Related Documentation

| Topic | Link |
|-------|------|
| Conversions Overview | [Conversion Tracking](/conversions/overview) |
| Creating Goals | [Create Conversion Goals](/conversions/create-goals) |
| Campaign Insights | [A/B Testing](/campaigns/ab-testing) |
| Segment Integration | [Segment](/integrations/segment) |

[Back to Integrations](/integrations/overview)
