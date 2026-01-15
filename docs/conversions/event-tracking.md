---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
sidebar_position: 3
---

# Event Tracking

Capture every meaningful interaction on your website—from button clicks to page views to custom actions—and connect them directly to the companies and contacts engaging with your content.

## Why Event Tracking Matters

| Without Event Tracking | With Abmatic Event Tracking |
|----------------------|---------------------------|
| Guess which content drives conversions | Know exactly what actions leads take |
| Generic analytics with no account context | Every event tied to identified companies |
| Manual tracking setup for each element | Automatic + visual point-and-click setup |
| Delayed insights from batch processing | Near real-time data for immediate action |
| Siloed data across multiple tools | Unified tracking with CRM and campaign data |

## What Gets Tracked

Abmatic captures comprehensive interaction data automatically and through custom events you define:

### Automatic Tracking (Zero Setup)

These events are captured the moment you install the Abmatic script:

| Event Type | What's Captured | Why It Matters |
|-----------|-----------------|----------------|
| **Page Views** | Every page visited with URL, timestamp, duration | Understand content interests by account |
| **Session Data** | Entry/exit pages, visit duration, return visits | Identify engagement patterns |
| **Scroll Depth** | How far visitors scroll (pixels and percentage) | Measure true content consumption |
| **Time on Page** | Active time spent on each page | Distinguish engaged readers from bouncers |
| **Form Detection** | Forms with email fields auto-captured | Never miss a lead submission |

### Custom Events (You Define)

Track specific interactions that matter to your business:

| Event Type | Best For | Example |
|-----------|----------|---------|
| **Click Events** | CTA buttons, links, navigation | "Request Demo" button clicks |
| **Page View Events** | Thank-you pages, specific URLs | Pricing page visits |
| **Form Submissions** | Contact forms, downloads | Whitepaper downloads |

## How Event Tracking Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Visitor Action │────▶│  Abmatic Script  │────▶│  Event Captured │
│  (click, view)  │     │  (automatic)     │     │  with context   │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                          │
        ┌────────────────────────────────────────────────┘
        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ Company/Contact │────▶│ Campaign         │────▶│ Analytics &     │
│ Associated      │     │ Attribution      │     │ Reports         │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

Every event is enriched with:
- **Company identification** (who's engaging)
- **Contact data** (if revealed)
- **Campaign attribution** (which experience drove the action)
- **Session context** (part of larger journey)

## Creating Click Events

Track clicks on specific elements like CTAs, navigation items, or interactive components.

### Step-by-Step Guide

1. **Navigate to Conversions**
   - Go to **Conversions** → **Manage** tab
   - Click **+ Conversion** button

2. **Select Click Event**
   - Choose **Track Event** from the options
   - This opens the visual element selector

3. **Name Your Event**
   - Enter a descriptive name (e.g., "Request Demo - Hero CTA")
   - Names should indicate location and action

4. **Enter Your Website URL**
   - Provide the page URL where the element exists
   - Must match your verified domain

5. **Select the Element**
   - Visual editor opens showing your page
   - Hover to highlight elements
   - Click to select the element you want to track

6. **Save and Activate**
   - Review your selection
   - Save the event—it's immediately active

![Conversions Manage tab showing Click Event and Page View event types](/img/screenshots/conversions-manage.png)
*The Manage tab shows all your conversion events with their type, attached elements, and status.*

### Element Selection Tips

| Selection Option | When to Use |
|-----------------|-------------|
| **Only this element** | Exact match—use for unique CTAs |
| **All similar elements** | Pattern match—use for repeated elements like nav links |

**Best Practice:** Add unique IDs or data attributes to important elements for reliable tracking:

```html
<!-- Recommended: Clear, trackable element -->
<button id="hero-demo-cta" data-action="request-demo">
  Request Demo
</button>
```

## Creating Page View Events

Track visits to specific pages like thank-you pages, pricing pages, or confirmation screens.

### Step-by-Step Guide

1. Go to **Conversions** → **Manage** → **+ Conversion**
2. Select **Page View** event type
3. Enter a descriptive name (e.g., "Demo Page View")
4. Enter the URL to track (e.g., `https://yoursite.com/demo`)
5. Save—visits to that URL are now tracked as conversions

### URL Matching

| URL Type | Tracks |
|----------|--------|
| Exact URL | Only that specific page |
| With parameters | Any URL starting with the base |

## Understanding Event Data

### Page View Event Structure

Every page view captures:

| Field | Description | Use Case |
|-------|-------------|----------|
| `pageUrl` | Full URL visited | Content interest analysis |
| `pageViewId` | Unique view identifier | Deduplication |
| `visitorId` | Persistent visitor ID | Journey tracking |
| `visitId` | Session identifier | Session analysis |
| `timeOnPage` | Milliseconds on page | Engagement depth |
| `scrollDepthPercentage` | How far they scrolled | Content consumption |
| `formSubmission` | Form submit count | Lead capture |

### Click Event Structure

Every click event captures:

| Field | Description | Use Case |
|-------|-------------|----------|
| `eventName` | Your defined name | Event identification |
| `eventId` | Unique event identifier | Deduplication |
| `element.selector` | CSS selector of clicked element | Technical debugging |
| `element.text` | Button/link text content | Verification |
| `timestamp` | When click occurred | Timeline analysis |

### Behavioral Metrics

Engagement signals captured automatically:

| Metric | What It Measures | Engagement Signal |
|--------|-----------------|-------------------|
| `timeOnPage` | Active time (ms) | >60s = high engagement |
| `scrollDepthPercentage` | Page consumption | >75% = content interest |
| `totalPageViews` | Pages in session | >3 = exploring |
| `totalSessionCount` | Return visits | >2 = nurturing |

## Single Page Application (SPA) Support

Abmatic automatically handles SPAs and client-side routing:

- **Detects route changes** without full page reloads
- **Records each route** as a separate page view
- **Maintains session continuity** across navigation
- **Works with** React, Vue, Angular, Next.js, and other frameworks

No additional configuration required.

## Campaign Attribution

Events are automatically attributed to campaigns:

### Personalized vs. Control Tracking

When A/B testing, every event records:

| Field | Value | Purpose |
|-------|-------|---------|
| `segmentId` | Campaign segment ID | Which campaign |
| `variationId` | "personalized" or "control" | Which experience |
| `eventId` | Event identifier | The specific action |

This enables:
- **Conversion lift calculation** (personalized vs. control)
- **Statistical significance** measurement
- **Campaign ROI** attribution

### Multi-Touch Attribution

Events track the full journey:
1. First touch → visitor sees personalized page
2. Engagement → clicks CTA, views pricing
3. Conversion → submits form
4. Attribution → all touchpoints credited

## Integration with Analytics Tools

### Segment Integration

Sync events to Segment for downstream distribution:

1. Connect Segment in **Integrations**
2. Events automatically flow to Segment
3. Forward to any Segment destination (Mixpanel, Amplitude, etc.)

### Google Analytics Integration

Sync events to GA4:

1. Connect Google Analytics in **Integrations**
2. Custom dimensions mapped automatically
3. Events appear in GA4 reports with company context

## Viewing Your Event Data

### In the Conversions Dashboard

1. Go to **Conversions** → **Conversions (Last 60 Days)** tab
2. See event counts per campaign
3. Compare conversion rates across campaigns
4. Identify top-performing experiences

### In the Manage Tab

1. Go to **Conversions** → **Manage**
2. View all configured events
3. Check event status and attached elements
4. Enable/disable events as needed

### Real-Time Processing

Events process in near real-time:

| Event Type | Processing Time |
|-----------|-----------------|
| Page views | Immediate |
| Click events | Within seconds |
| Form submissions | Within seconds |

## Best Practices

### Event Naming Conventions

**Do This:**
```
"Pricing Page - Request Demo CTA"
"Homepage Hero - Watch Video"
"Navigation - Products Dropdown"
"Footer - Contact Sales Link"
```

**Not This:**
```
"click1"
"event"
"button"
"test"
```

### What to Track

| Track These | Skip These |
|-------------|------------|
| Primary CTAs (demos, trials, contact) | Every link click |
| Key page visits (pricing, features) | Navigation clicks |
| Form submissions | Scroll events (auto-tracked) |
| Video plays, downloads | Hover interactions |
| Add-to-cart, checkout steps | Social share clicks |

### Event Organization

Organize events by funnel stage:

| Stage | Example Events |
|-------|---------------|
| **Awareness** | Blog views, resource downloads |
| **Interest** | Pricing page, feature page, case studies |
| **Consideration** | Demo request, trial signup, contact form |
| **Decision** | Checkout, purchase confirmation |

## Troubleshooting

### Events Not Tracking

| Issue | Cause | Solution |
|-------|-------|----------|
| No events appearing | Script not installed | Verify script in page source |
| Event shows 0 counts | Event disabled | Check Visibility toggle in Manage |
| Specific element not tracking | Selector changed | Re-create event with current element |
| Intermittent tracking | Multiple script instances | Remove duplicate scripts |

### Wrong Element Firing

| Issue | Cause | Solution |
|-------|-------|----------|
| Multiple events per click | Overlapping selectors | Use more specific selectors |
| Wrong element tracked | Similar elements matched | Select "Only this element" |
| Events on wrong page | URL pattern too broad | Use exact URL matching |

### Missing Page Views

| Issue | Cause | Solution |
|-------|-------|----------|
| SPA routes not tracked | Routing not detected | Contact support for SPA config |
| Some pages missing | Script not on all pages | Add script to all pages or use GTM |
| Ad blocker interference | Privacy tools blocking | Use first-party domain setup |

### Duplicate Events

| Issue | Cause | Solution |
|-------|-------|----------|
| Double counting | Multiple script tags | Remove duplicate installations |
| Same event twice | Overlapping event definitions | Consolidate event configs |
| Form resubmissions | No form throttling | Add submit button disable |

## Technical Details

### Data Transmission

Events use `navigator.sendBeacon()` for reliable delivery:
- **Survives page exit** (captures even on navigation away)
- **Non-blocking** (doesn't slow page performance)
- **Works with most ad blockers** (first-party domain)

### Processing Pipeline

1. **Client capture** → Event occurs, data collected
2. **Beacon transmission** → Sent to Abmatic API
3. **Company association** → Matched to identified account
4. **Campaign attribution** → Linked to active campaigns
5. **Analytics aggregation** → Available in reports

## Related Features

| Feature | Relationship |
|---------|-------------|
| [Form Tracking](/conversions/form-tracking) | Specialized form event capture |
| [Creating Goals](/conversions/create-goals) | Set up conversion goals |
| [Conversion Analytics](/conversions/analytics) | Analyze conversion performance |
| [Script Installation](/getting-started/install-script) | Install tracking script |
| [Campaign Performance](/analytics/campaign-performance) | View campaign metrics |
