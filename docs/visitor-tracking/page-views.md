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

See which pages each identified company has visited. Navigate to **Visitor Reveal** --> **Accounts** and click on any company to see their engagement history including:

- Total page views and unique pages
- Specific pages visited (with "Visited Pages" link)
- Time on page and scroll depth
- Session count and engagement score

![Company Reveal Accounts Dashboard showing identified companies with engagement data](/img/screenshots/reveal-accounts-dashboard.png)
*The Accounts dashboard showing 31,849 identified companies. Click any company name to drill into their page view history.*

### Engagement History View

Click on any account and open the **Engagement** tab to see detailed page view activity for each visitor session:

![Account engagement tab showing individual page visit sessions with timestamps, locations, and engagement metrics](/img/screenshots/reveal-account-engagement.png)
*The Engagement tab for Mountainside shows two website page visits: one from Beijing 10 minutes ago and another from California 14 days ago. Each session shows Total Form Submissions, Total Page Views, Total Page Views Unique, Total Scroll Depth Percentage, Total Time On Page, and Engagement Score. Click "Visited Pages" to see the exact URLs viewed in each session.*

This view shows:
- **Visited Pages** - Click to see exact URLs visited in each session
- **Total Page Views** - Number of pages viewed in the session
- **Unique Page Views** - Distinct pages visited (filters out repeat views)
- **Scroll Depth %** - How far they scrolled on average
- **Time on Page** - Total engaged time
- **Engagement Score** - Calculated intent score
- **Location** - Where the visit originated (city, country)
- **Timestamp** - When the visit occurred (e.g., "10 minutes ago" or "14 days ago")

### Contact Reveal Dashboard

For revealed contacts, see individual page view activity alongside engagement scores. Navigate to **Visitor Reveal** --> **Contacts** to view:

![Contact Reveal Dashboard showing engagement scores for individual contacts](/img/screenshots/reveal-contacts-dashboard.png)
*Each contact row shows a Website Engagement Score (e.g., 52, 1652, 100, 47) alongside their temperature indicator. Higher scores indicate more page views and deeper engagement.*

- Pages each contact has visited
- Engagement patterns over time (via the engagement score)
- Form submissions alongside page views
- Website engagement score for quick prioritization

### Analytics Reports

For aggregate page metrics, go to **Analytics** --> **Reports** to see:

- Most viewed pages
- Page performance over time
- Conversion rates by page
- Traffic sources to key pages

## Using Page Views for Targeting

Page view data powers precise audience targeting and personalization. When you know what someone researched, you can tailor every interaction.

### Target by Content Interest

Create campaigns that respond to what visitors are researching:

1. Go to **Campaigns** --> **Create Campaign**
2. Add filter: **Pages Viewed Contains** `[page path]`
3. Personalize content based on their demonstrated interest

**High-Impact Examples:**

| Page Viewed | What It Signals | Recommended Action |
|------------|-----------------|-------------------|
| `/pricing` | Evaluating cost — strong buying signal | Show ROI calculator, case studies, or a "Questions about pricing?" chat prompt |
| `/demo` | Ready to engage | Expedite with a direct booking CTA and reduce friction |
| `/solutions/enterprise` | Enterprise buyer | Personalize for enterprise needs, mention dedicated support |
| `/vs-competitor` | Comparing options | Highlight your differentiators and competitive advantages |
| `/case-studies` | Building business case | Show relevant social proof for their industry |
| `/integrations` | Evaluating technical fit | Surface integration guides and compatibility info |

### Retargeting Engaged Visitors

Target visitors who showed interest but did not convert:

**"See which companies are visiting your pricing page right now"**
1. Filter: Pages Viewed Contains `/pricing`
2. Filter: Confidence = High or Very High
3. Sort by most recent visits
4. Push matching companies to CRM for immediate sales follow-up

**Pricing Page Visitors Who Did Not Request a Demo**
1. Filter: Pages Viewed Contains `/pricing`
2. Filter: Did Not Submit Form (demo request)
3. Personalize: Show "Questions about pricing? Chat with us" banner

**Multiple Page Views Without Action (High Intent, No Conversion)**
1. Filter: Page Views > 5
2. Filter: No Form Submission
3. Personalize: Surface relevant CTA based on the content they viewed most

### Scoring by Engagement

Page views contribute directly to engagement scoring. The more pages a company or contact views — and the more intent-driven those pages are — the higher their score:

| Behavior | Score Impact | What It Means for Your Team |
|----------|-------------|----------------|
| Pricing page view | High | Someone is evaluating cost — a strong buying signal |
| Multiple product pages | Medium-High | Active evaluation across your solution |
| Blog/resource pages | Medium | Research phase — nurture, do not hard sell |
| Single page bounce | Low | Minimal interest — monitor for return visits |
| Return visits to same pages | High | Serious consideration — they keep coming back |

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
| **Focus on high-intent pages** | Pricing, demo, and contact pages signal purchase intent — prioritize these for alerts and outreach |
| **Create page-based segments** | Build audiences around content themes (e.g., "pricing page visitors" or "integration researchers") |
| **Combine with firmographic data** | "Enterprise companies viewing pricing" is one of the most powerful audience segments you can build |
| **Set up page-based alerts** | Get notified via Slack when target accounts visit key pages like pricing or demo |
| **Review page analytics weekly** | Identify trending content and spot which pages drive the most pipeline |
| **Use page data in outreach** | Reference what prospects researched: "I noticed you were looking at our enterprise features..." |

### Don'ts

| Avoid | Why |
|-------|-----|
| Tracking every micro-interaction | Creates noise — focus on pages that signal real buying intent |
| Ignoring scroll depth | A page view without scroll means they did not actually read the content |
| Overlooking session context | A single page in a long, multi-page session is not a bounce — it is part of a research journey |
| Forgetting referrer data | Knowing whether they arrived from LinkedIn, Google, or an email adds critical context |

### Acting on Page View Data: A Weekly Workflow

| Day | Action | Goal |
|-----|--------|------|
| **Monday** | Review which companies visited pricing/demo pages over the weekend | Catch early-week buying signals |
| **Wednesday** | Check engagement trends — which content is driving the most visits? | Optimize content strategy |
| **Friday** | Build a "hot visitors" list of companies with 5+ page views this week | Give sales a prioritized list for the following week |

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
