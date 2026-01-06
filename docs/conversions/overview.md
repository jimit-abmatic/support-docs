---
id: overview
title: Conversions Overview
sidebar_label: Overview
sidebar_position: 1
---

# Conversions Overview

Track and measure the impact of your Abmatic AI campaigns with conversion tracking. Understand which campaigns drive results and optimize your marketing spend.

## What Are Conversions?

Conversions are actions visitors take that indicate progress toward your goals:

- Form submissions (demo requests, contact forms)
- Page visits (pricing page, specific content)
- Button clicks (CTA clicks)
- Custom events (video plays, downloads)

![Conversions Overview](/img/screenshots/conversions-overview.png)

## Setting Up Conversions

### Navigate to Conversions

1. Click **Conversions** in the left sidebar
2. Go to **Manage** to create and configure conversions

### Create a Conversion Goal

1. Click **Create Conversion**
2. Choose conversion type:
   - **Form Submission** - Track form completions
   - **Page Visit** - Track visits to specific pages
   - **Click Event** - Track button or link clicks
   - **Custom Event** - Track custom JavaScript events
3. Configure settings (name, conditions)
4. Save the conversion

[Learn more about Creating Goals →](/conversions/create-goals)

## Conversion Types

### Form Submissions

Track when visitors complete forms:

- Demo request forms
- Contact forms
- Newsletter signups
- Gated content forms

The Abmatic tracking script automatically detects most forms.

[Learn more about Form Tracking →](/conversions/form-tracking)

### Page Visits

Track when visitors view specific pages:

- Pricing page views
- Product page visits
- Case study views

Configure by entering the URL pattern to match.

### Click Events

Track when visitors click specific elements:

- CTA buttons
- Navigation links
- Download links

Add data attributes to track specific elements.

### Custom Events

Track custom interactions via JavaScript:

```javascript
window.abmatic.track('custom_event', {
  event_name: 'video_played',
  video_id: 'demo-video-1'
});
```

[Learn more about Event Tracking →](/conversions/event-tracking)

## Viewing Conversion Data

### Conversion Analytics

View aggregate conversion data:

- Total conversions by type
- Conversion trends over time
- Top converting pages

### Campaign Attribution

See which campaigns drive conversions:

- Conversions by campaign
- Conversion rate comparisons
- Lift vs. baseline

[Learn more about Conversion Analytics →](/conversions/analytics)

## Best Practices

- **Track meaningful actions** - Focus on actions that indicate purchase intent
- **Set up early** - Install conversion tracking before launching campaigns
- **Use attribution** - Understand which campaigns influence conversions
- **A/B test** - Use conversion data to optimize campaigns

## Next Steps

- [Create Conversion Goals](/conversions/create-goals)
- [Set Up Form Tracking](/conversions/form-tracking)
- [View Conversion Analytics](/conversions/analytics)
