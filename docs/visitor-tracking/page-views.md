---
id: page-views
title: Page View Tracking
sidebar_label: Page Views
sidebar_position: 5
---

# Page View Tracking

Abmatic AI tracks page views to understand visitor behavior and content engagement.

## Automatic Page View Tracking

When the Abmatic tracking script is installed, page views are automatically captured for:

- All page loads
- Single-page application (SPA) navigation
- Virtual page views

## Data Captured

For each page view, Abmatic records:

- **URL** - Full page URL
- **Title** - Page title
- **Timestamp** - When the page was viewed
- **Session** - Part of which visitor session
- **Referrer** - Previous page or external source

## Viewing Page Analytics

Access page view data in:

- **Analytics** > **Reports** - Aggregate page metrics
- **Company Reveal** - Pages viewed by specific companies
- **Contact Reveal** - Pages viewed by specific contacts

## Using Page Views for Personalization

Page views power personalization:

### Targeting by Content Interest

Create campaigns targeting visitors who've viewed specific pages:

1. Create a new campaign
2. Add filter: **Pages Viewed Contains** [your page]
3. Personalize content based on their interest

### Retargeting

Target visitors who've shown interest but haven't converted:

1. Pages viewed: Product pages
2. Did not: Submit a form

## Custom Page View Tracking

For custom tracking needs, use the JavaScript API:

```javascript
// Track a virtual page view
window.abmatic.page('/virtual/page-name');

// Track with custom properties
window.abmatic.page('/custom/page', {
  category: 'pricing',
  plan: 'enterprise'
});
```

## Best Practices

- **Track key pages** - Focus on high-intent pages (pricing, demo, etc.)
- **Segment by content** - Create audiences based on content themes
- **Measure engagement** - Use page views in campaign analytics

## Related

- [Conversions Overview](/conversions/overview)
- [Campaigns Overview](/campaigns/overview)
- [Analytics Reports](/analytics/reports)
