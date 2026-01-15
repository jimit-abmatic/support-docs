---
id: form-tracking
title: Form Tracking
sidebar_label: Form Tracking
sidebar_position: 4
---

# Form Tracking

**Measure what matters—track every form submission as a conversion.** Abmatic AI automatically detects and tracks form submissions across your website, attributing them to campaigns and providing clear ROI metrics without any complex setup or custom code.

## Why Form Conversion Tracking Matters

| Without Form Tracking | With Abmatic Form Tracking |
|----------------------|---------------------------|
| No visibility into form performance | Real-time conversion metrics |
| Manual attribution guesswork | Automatic campaign attribution |
| Unknown personalization impact | Clear A/B test results |
| Delayed reporting | Instant conversion alerts |
| Siloed form analytics | Unified conversion dashboard |

## How It Works

Abmatic automatically tracks form submissions and attributes them to your campaigns:

```
Form submission → Email captured → Company matched → Campaign attributed → Conversion recorded → Metrics updated
```

![Conversions dashboard showing campaign performance with form submission metrics](/img/screenshots/conversions-overview.png)
*The Conversions dashboard shows form submissions attributed to each campaign*

## What Gets Tracked

### Automatic Form Detection

Abmatic's script automatically identifies and tracks forms on your site:

| Form Type | What Gets Captured | Why It Matters |
|-----------|-------------------|----------------|
| **Contact Forms** | Submission event + field data | Track lead generation effectiveness |
| **Demo Requests** | Form completion + page context | Measure high-intent conversions |
| **Newsletter Signups** | Email + preferences | Track subscriber acquisition |
| **Gated Content** | Download event + contact info | Measure content marketing ROI |
| **Pricing Inquiries** | Form data + plan interest | Track bottom-funnel conversions |
| **Multi-step Forms** | Each step + final completion | Understand form abandonment |

### Form Data Captured

For every form submission, Abmatic captures:

| Data | Description | Use Case |
|------|-------------|----------|
| **Form Fields** | All non-sensitive field values | Enrich contact records |
| **Email** | Validated email address | Link to contact profile |
| **Page URL** | Where form was submitted | Attribution and segmentation |
| **Timestamp** | When submitted | Time-based reporting |
| **Visitor ID** | Anonymous identifier | Journey tracking |
| **Session** | Current session context | Engagement analysis |
| **Campaign** | Active personalization campaign | ROI attribution |
| **Variation** | Personalized vs. Control | A/B test measurement |

:::info Security First
Abmatic never captures password fields, credit card numbers, or other sensitive data types. Form tracking is designed for conversion metrics, not payment processing.
:::

## Setting Up Form Conversions

Track form submissions as conversion goals to measure campaign effectiveness.

![Manage tab showing conversion events with Click Event and Page View types](/img/screenshots/conversions-manage.png)
*The Manage tab lets you create and configure form conversion goals*

### Method 1: Click Event Tracking

Track form submissions by monitoring the submit button click:

| Step | Action | Details |
|------|--------|---------|
| 1 | Navigate to **Conversions** > **Manage** | Opens conversion management |
| 2 | Click **+ Conversion** | Opens creation wizard |
| 3 | Select **Click Event** | For button/element clicks |
| 4 | Enter page URL | The page containing your form |
| 5 | Click the submit button | Visual selector captures element |
| 6 | Name your conversion | E.g., "Demo Request Form" |
| 7 | Save and activate | Tracking begins immediately |

**Best for:**
- Standard HTML form submissions
- CTA buttons that trigger forms
- When you want to track the click action itself

### Method 2: Page View Tracking

Track form completions by monitoring thank you page visits:

| Step | Action | Details |
|------|--------|---------|
| 1 | Navigate to **Conversions** > **Manage** | Opens conversion management |
| 2 | Click **+ Conversion** | Opens creation wizard |
| 3 | Select **Page View** | For URL-based tracking |
| 4 | Enter thank you page URL | E.g., `/thank-you` or `/demo-confirmed` |
| 5 | Name your conversion | E.g., "Demo Form Completed" |
| 6 | Save and activate | Tracking begins immediately |

**Best for:**
- AJAX forms that redirect
- Multi-step forms with confirmation pages
- Third-party form integrations
- When click tracking isn't reliable

### Choosing Your Method

| Scenario | Recommended Method | Why |
|----------|-------------------|-----|
| Standard HTML form | Click Event | Direct, accurate tracking |
| AJAX/React/Vue form | Page View | Handles async submissions |
| Third-party forms (Typeform, etc.) | Page View | Works across domains |
| Multi-step form | Page View (final page) | Tracks true completions |
| Modal/popup form | Click Event | No URL change to track |
| Form with validation errors | Click Event + Page View | Double coverage |

## Understanding Your Metrics

Once form tracking is configured, you'll see these metrics in your campaign dashboards:

### Key Conversion Metrics

| Metric | What It Measures | How It Helps |
|--------|-----------------|--------------|
| **Conversions** | Total form submissions | Volume of leads generated |
| **CVR** | Conversion Rate (%) | Effectiveness of your campaigns |
| **Personalized CVR** | Rate for personalized visitors | Impact of personalization |
| **Control CVR** | Rate for control group | Baseline comparison |
| **Lift** | Improvement over control | Proves personalization ROI |

### Calculating Lift

Form conversion lift shows the improvement from personalization:

```
Lift = ((Personalized CVR - Control CVR) / Control CVR) × 100%
```

**Example:**
- Personalized CVR: 4.5%
- Control CVR: 3.0%
- Lift: ((4.5 - 3.0) / 3.0) × 100% = **+50%**

### Interpreting Results

| Lift | Interpretation | Action |
|------|---------------|--------|
| **+20% or more** | Strong positive impact | Scale this campaign |
| **+10% to +20%** | Moderate improvement | Continue and optimize |
| **0% to +10%** | Marginal impact | Test new variations |
| **Negative** | Personalization hurting | Pause and investigate |

## Supported Form Builders

Abmatic works seamlessly with popular form tools:

| Form Builder | Compatibility | Notes |
|-------------|---------------|-------|
| **Native HTML** | Full support | Standard `<form>` elements |
| **HubSpot Forms** | Full support | Embedded and popup forms |
| **Marketo** | Full support | Munchkin forms |
| **Pardot** | Full support | Landing page forms |
| **Typeform** | Page View recommended | Track confirmation URL |
| **Gravity Forms** | Full support | WordPress integration |
| **Contact Form 7** | Full support | WordPress forms |
| **Webflow** | Full support | Native forms |
| **Unbounce** | Full support | Landing page forms |
| **Custom AJAX** | JavaScript API | See custom tracking below |

## Custom Form Tracking

For forms using custom implementations (React, Vue, AJAX), use the JavaScript API:

### Basic Form Tracking

```javascript
// Track form submission as conversion
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  form_name: 'Demo Request'
});
```

### With Full Contact Data

```javascript
// Track with contact enrichment data
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  first_name: 'Sarah',
  last_name: 'Johnson',
  company: 'Acme Inc',
  job_title: 'VP of Marketing',
  form_name: 'Demo Request',
  source: 'Pricing Page'
});
```

### Form Event Listener Pattern

```javascript
// Attach to any form element
document.getElementById('demo-form').addEventListener('submit', function(e) {
  const formData = new FormData(e.target);

  window.abmatic.track('form_submitted', {
    email: formData.get('email'),
    name: formData.get('name'),
    company: formData.get('company'),
    form_name: 'Demo Request Form'
  });
});
```

### React Integration Example

```jsx
function ContactForm() {
  const handleSubmit = (formData) => {
    // Submit form normally
    submitForm(formData);

    // Track with Abmatic
    window.abmatic?.track('form_submitted', {
      email: formData.email,
      form_name: 'Contact Form'
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Best Practices

### Do's

| Practice | Why It Helps |
|----------|-------------|
| Track your most valuable forms | Focus on conversions that matter to revenue |
| Use descriptive goal names | Makes reporting easier to understand |
| Set one main conversion goal | Provides clear primary success metric |
| Track thank you pages as backup | Catches forms that click tracking might miss |
| Test tracking before launch | Verify conversions are recording correctly |

### Don'ts

| Avoid | Why |
|-------|-----|
| Tracking every form | Creates noise and dilutes important metrics |
| Double tracking (click + page view) | Can inflate conversion counts |
| Generic goal names | "Form 1" tells you nothing in reports |
| Skipping control groups | Can't measure personalization impact |
| Ignoring low lift results | Missed optimization opportunities |

## Form Tracking by Campaign Type

Different campaign types use form tracking differently:

| Campaign Type | Form Tracking Approach |
|--------------|----------------------|
| **Website Personalization** | Track forms on personalized pages vs. control |
| **LinkedIn Campaigns** | Track form fills from LinkedIn ad traffic |
| **Google Ads Campaigns** | Measure form conversions from paid search |
| **Email Sequences** | Track form fills from email click-through |
| **CRM Campaigns** | Attribute form fills to CRM campaign members |

## Viewing Form Conversion Data

### Campaign Insights

Each campaign's Insights tab shows form conversion metrics:

1. Navigate to **Campaigns**
2. Click on a campaign
3. View **Insights** tab
4. See Conversions column for each event

### Conversions Dashboard

For aggregate form conversion data:

1. Navigate to **Conversions**
2. View all campaigns with conversion metrics
3. Filter by conversion event type
4. Export data for reporting

### Attribution Details

Understanding which campaign gets credit:

| Scenario | Attribution |
|----------|------------|
| Form on personalized page | Credited to active campaign |
| Form after ad click | Credited to ad campaign |
| Form from email link | Credited to sequence campaign |
| Multiple campaigns active | Credited to most recent personalization |

## Troubleshooting

### Forms Not Tracking

| Issue | Cause | Solution |
|-------|-------|----------|
| No conversions appearing | Goal not created | Create conversion goal in Manage tab |
| Click events not firing | Wrong element selected | Re-select the exact submit button |
| Page views not tracking | Wrong URL configured | Verify thank you page URL exactly |
| Intermittent tracking | Dynamic element IDs | Use Page View tracking instead |

### Attribution Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Conversions not attributed | Campaign not active | Verify campaign is in "Active" status |
| Wrong campaign credited | Multiple campaigns active | Review campaign priority settings |
| Control group not tracking | Control group at 0% | Ensure control group is >0% |
| Zero lift showing | No control conversions | Wait for more control traffic |

### Data Quality Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Duplicate conversions | Both click + page view active | Use one tracking method per form |
| Missing form data | Non-standard field names | Use JavaScript API with explicit fields |
| Wrong company matched | Personal email submitted | Encourage work email on forms |
| Delayed reporting | Processing time | Data appears within 5-10 minutes |

## Privacy and Compliance

### What's Automatically Excluded

Abmatic never captures:
- Password fields
- Credit card numbers
- Social security numbers
- Other sensitive data types

### Consent Integration

Form tracking respects user consent preferences:
- Integrates with CookieBot, CookieYes, Iubenda
- Honors HubSpot consent settings
- Supports custom consent implementations

### Data Handling

- Form data transmitted securely via HTTPS
- Data stored according to retention policies
- GDPR-compliant data processing
- SOC 2 Type II certified infrastructure

## Related Features

| Feature | How It Helps |
|---------|-------------|
| [Creating Goals](/conversions/create-goals) | Detailed goal creation guide |
| [Event Tracking](/conversions/event-tracking) | Track custom events beyond forms |
| [Conversion Analytics](/conversions/analytics) | Analyze conversion performance |
| [Contact Reveal](/visitor-tracking/contact-reveal) | Identify form submitters |
| [Email Sequences](/campaigns/email-campaigns) | Automate form follow-up |
