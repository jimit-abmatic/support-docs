---
id: page-views
title: Page View Tracking
sidebar_label: Page Views
sidebar_position: 5
---

# Page View Tracking

Every page visit tells a story. Abmatic AI automatically tracks page views across your website, revealing which content resonates with your target accounts and contacts—so you can personalize their journey and accelerate deals.

## Why Page View Tracking Matters

| Before Page Tracking | With Abmatic Page Tracking |
|---------------------|---------------------------|
| No visibility into visitor behavior | See exactly which pages each company visits |
| Generic follow-up for all leads | Tailor outreach based on content interest |
| Guessing at buyer intent | Clear signals showing purchase readiness |
| One-size-fits-all campaigns | Personalization based on pages viewed |

## What Gets Tracked Automatically

When you install the Abmatic tracking script, page views are captured automatically—no additional configuration required:

| Data Point | Description | Why It Matters |
|-----------|-------------|----------------|
| **Page URL** | Full URL of every page visited | Know exactly what content they're viewing |
| **Page Title** | Title of each page | Quick context without clicking through |
| **Timestamp** | When each page was viewed | Understand recency and engagement patterns |
| **Session Data** | Groups page views into sessions | See complete visit journeys |
| **Referrer** | Where the visitor came from | Track which channels drive engagement |
| **Time on Page** | How long they spent on each page | Identify high-interest content |
| **Scroll Depth** | How far they scrolled | Measure actual content consumption |

### Supported Page Types

Abmatic captures page views across all scenarios:

- **Standard Page Loads** - Traditional multi-page navigation
- **Single-Page Applications (SPA)** - React, Vue, Angular navigation
- **Virtual Page Views** - Custom tracked events
- **Dynamic Content** - AJAX-loaded sections

## Viewing Page Analytics

Access page view data throughout Abmatic:

### Company Reveal Dashboard

See which pages each identified company has visited. Navigate to **Visitor Reveal** → **Accounts** and click on any company to see their engagement history including:

- Total page views and unique pages
- Specific pages visited (with "View" popup)
- Time on page and scroll depth
- Session count and engagement score

![Company engagement showing page views](/img/screenshots/reveal-accounts.png)
*Company Reveal showing identified visitors with engagement data*

### Engagement History View

Click on any campaign's **Engagement** tab to see detailed page view activity for each visitor session:

![Page view engagement data](/img/screenshots/wp-engagement-tab.png)
*Engagement tab showing page views, scroll depth, time on page, and engagement scores for each session*

This view shows:
- **Visited Pages** - Click to see exact URLs visited
- **Total Page Views** - Number of pages viewed in session
- **Unique Page Views** - Distinct pages visited
- **Scroll Depth %** - How far they scrolled on average
- **Time on Page** - Total engaged time
- **Engagement Score** - Calculated intent score

### Contact Reveal Dashboard

For revealed contacts, see individual page view activity. Navigate to **Visitor Reveal** → **Contacts** to view:

- Pages each contact has visited
- Engagement patterns over time
- Form submissions alongside page views
- Website engagement score

### Analytics Reports

For aggregate page metrics, go to **Analytics** → **Reports** to see:

- Most viewed pages
- Page performance over time
- Conversion rates by page
- Traffic sources to key pages

## Using Page Views for Targeting

Page view data powers precise audience targeting and personalization.

### Target by Content Interest

Create campaigns that respond to what visitors are researching:

1. Go to **Campaigns** → **Create Campaign**
2. Add filter: **Pages Viewed Contains** `[page path]`
3. Personalize content based on their demonstrated interest

**High-Impact Examples:**

| Page Viewed | What It Signals | Recommended Action |
|------------|-----------------|-------------------|
| `/pricing` | Evaluating cost | Show ROI calculator, case studies |
| `/demo` | Ready to engage | Expedite with direct CTA |
| `/solutions/enterprise` | Enterprise buyer | Personalize for enterprise needs |
| `/vs-competitor` | Comparing options | Highlight differentiators |
| `/case-studies` | Building business case | Show relevant social proof |

### Retargeting Engaged Visitors

Target visitors who showed interest but didn't convert:

**Example: Pricing Page Visitors Who Didn't Demo**
1. Filter: Pages Viewed Contains `/pricing`
2. Filter: Did Not Submit Form (demo request)
3. Personalize: Show "Questions about pricing? Chat with us"

**Example: Multiple Page Views Without Action**
1. Filter: Page Views > 5
2. Filter: No Form Submission
3. Personalize: Surface relevant CTA based on viewed content

### Scoring by Engagement

Page views contribute to engagement scoring:

| Behavior | Score Impact | Interpretation |
|----------|-------------|----------------|
| Pricing page view | High | Strong buying signal |
| Multiple product pages | Medium-High | Active evaluation |
| Blog/resource pages | Medium | Research phase |
| Single page bounce | Low | Minimal interest |

## Custom Page View Tracking

For advanced tracking needs, use the JavaScript API to capture custom page views or add properties.

### Track Virtual Page Views

For modals, tabs, or dynamically loaded content:

```javascript
// Track a virtual page view
window.abmatic.page('/virtual/pricing-calculator');

// Track with descriptive path
window.abmatic.page('/modal/request-demo-opened');
```

### Track with Custom Properties

Add context to page views for richer segmentation:

```javascript
// Track page with properties
window.abmatic.page('/products/enterprise', {
  category: 'product',
  plan_tier: 'enterprise',
  content_type: 'features'
});

// Track pricing page with plan viewed
window.abmatic.page('/pricing', {
  plan_selected: 'professional',
  billing_period: 'annual'
});
```

### When to Use Custom Tracking

| Scenario | Implementation |
|----------|----------------|
| SPA route changes not auto-detected | Call `window.abmatic.page()` on navigation |
| Modal or overlay content | Track as virtual page view |
| Tab or accordion content | Track meaningful section views |
| Wizard/multi-step forms | Track each step as page view |

## Best Practices

### Do's

| Practice | Benefit |
|----------|---------|
| **Focus on high-intent pages** | Pricing, demo, contact pages signal purchase intent |
| **Create page-based segments** | Build audiences around content themes |
| **Combine with firmographic data** | "Enterprise companies viewing pricing" is powerful |
| **Set up page-based alerts** | Get notified when target accounts visit key pages |
| **Review page analytics weekly** | Identify trending content and engagement patterns |

### Don'ts

| Avoid | Why |
|-------|-----|
| Tracking every micro-interaction | Creates noise, focus on meaningful pages |
| Ignoring scroll depth | Page view without scroll = didn't read |
| Overlooking session context | Single page in long session ≠ bounce |
| Forgetting referrer data | Knowing how they arrived adds context |

## Page View Metrics Explained

Understanding your page view data:

| Metric | What It Measures | How to Use It |
|--------|-----------------|---------------|
| **Total Page Views** | All page loads by the visitor | Overall engagement level |
| **Unique Page Views** | Distinct pages visited | Breadth of interest |
| **Time on Page** | Duration on each page | Content engagement depth |
| **Scroll Depth %** | How far they scrolled | Actual content consumption |
| **Sessions** | Distinct visit periods | Frequency of engagement |
| **Engagement Score** | Composite behavior score | Overall intent indicator |

## Troubleshooting

### Pages Not Being Tracked

| Issue | Cause | Solution |
|-------|-------|----------|
| No page views recorded | Script not installed | Verify script installation at **Settings** → **Script Installation** |
| SPA navigation missing | Route changes not detected | Add `window.abmatic.page()` calls on navigation |
| Partial tracking | Script blocked by ad blockers | Some visitors may block tracking (expected) |

### Inconsistent Data

| Issue | Cause | Solution |
|-------|-------|----------|
| Page views higher than expected | Bots/crawlers | Filter out known bots in analytics |
| Missing historical data | Script recently installed | Data starts from installation date |
| Time on page seems wrong | Tab left open | Abmatic uses engaged time, not clock time |

## Related Features

| Feature | How It Relates |
|---------|---------------|
| [Company Identification](/visitor-tracking/company-identification) | See which companies are viewing your pages |
| [Contact Reveal](/visitor-tracking/contact-reveal) | Get contact details for page visitors |
| [Campaigns Overview](/campaigns/overview) | Target visitors based on pages viewed |
| [Conversions](/conversions/overview) | Track when page views lead to conversions |
| [Analytics Reports](/analytics/reports) | Aggregate page performance metrics |
