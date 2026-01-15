---
id: form-tracking
title: Form Tracking
sidebar_label: Form Tracking
sidebar_position: 4
---

# Form Tracking

**Turn every form submission into a qualified lead.** Abmatic AI automatically captures form submissions across your website, instantly creating enriched contacts, attributing them to the right companies, and tracking conversions—all without any manual data entry or complex integrations.

## Why Form Tracking Matters

| Without Form Tracking | With Abmatic Form Tracking |
|----------------------|---------------------------|
| Manual lead entry from forms | Automatic contact creation |
| Unknown company associations | Instant company matching |
| No conversion attribution | Full campaign attribution |
| Siloed form data | Unified customer profiles |
| Delayed follow-up | Real-time sales alerts |

## How It Works

When the Abmatic tracking script is installed, form tracking happens automatically:

```
Visitor submits form → Abmatic captures data → Contact created/updated → Company matched → Conversion logged
```

**What gets captured:**
- All form field values
- Page URL where submission occurred
- Timestamp and session data
- Associated company (from IP identification)
- Full visitor journey leading to submission

## Automatic Form Detection

Abmatic automatically detects and tracks common form types:

| Form Type | What Gets Captured | Why It Matters |
|-----------|-------------------|----------------|
| **Contact Forms** | Name, email, company, message | Sales team gets instant qualified leads |
| **Demo Requests** | Contact info + product interest | High-intent leads prioritized for outreach |
| **Newsletter Signups** | Email, preferences | Build nurture audiences automatically |
| **Gated Content** | Contact info + content downloaded | Track content engagement by account |
| **Pricing Inquiries** | Contact info + plan interest | Route to sales with buying context |

## Viewing Form Submissions

Form submissions appear in multiple places throughout Abmatic:

![Conversions dashboard showing form submission data](/img/screenshots/conversions-overview.png)
*The Conversions dashboard shows form submissions by campaign with conversion rates*

### Where to Find Form Data

| Location | What You'll See | Best For |
|----------|----------------|----------|
| **Conversions** | Form submissions as conversion events | Measuring campaign ROI |
| **Contacts** | New contacts created from forms | Sales follow-up and outreach |
| **Company Reveal** | Forms linked to identified companies | ABM account engagement tracking |
| **Campaign Insights** | Form conversions per campaign | Optimizing personalization |

## Automatic Field Mapping

Abmatic intelligently maps form fields to contact properties:

| Form Field Names | Maps To | Works With |
|-----------------|---------|------------|
| `email`, `e-mail`, `emailAddress` | Contact Email | Required for contact creation |
| `name`, `full_name`, `fullName` | Contact Name | Parsed into first/last if needed |
| `first_name`, `firstName`, `fname` | First Name | Standard field mapping |
| `last_name`, `lastName`, `lname` | Last Name | Standard field mapping |
| `company`, `organization`, `companyName` | Company Name | Cross-referenced with IP data |
| `phone`, `telephone`, `phoneNumber` | Phone Number | Optional enrichment |
| `job_title`, `title`, `jobTitle` | Job Title | Used for role-based targeting |

**Smart Mapping Features:**
- Case-insensitive field matching
- Handles snake_case, camelCase, and kebab-case
- Merges data if contact already exists
- Links to company from IP identification

## Setting Up Form Conversions

Track form submissions as conversion goals to measure campaign effectiveness:

![Manage tab showing conversion events including click and page view types](/img/screenshots/conversions-manage.png)
*The Manage tab lets you configure which events track as conversions*

### Creating a Form Conversion Goal

1. Navigate to **Conversions** > **Manage**
2. Click **+ Conversion** button
3. Choose your tracking method:

| Method | Best For | How It Works |
|--------|----------|--------------|
| **Click Event** | Button clicks, form submits | Visual editor to select elements |
| **Page View** | Thank you pages | Track when specific URL is visited |

### Click Event Tracking

Use this for forms where you want to track the actual submission:

1. Select **Click Event**
2. Enter the page URL containing the form
3. Use the visual editor to click on the submit button
4. Name your conversion (e.g., "Demo Request Form")
5. Save and activate

### Page View Tracking

Use this for tracking thank you page visits after form submission:

1. Select **Page View**
2. Enter the thank you page URL (e.g., `/thank-you` or `/demo-confirmed`)
3. Name your conversion
4. Save and activate

## Custom Form Tracking

For forms that use custom implementations (AJAX, React, Vue, etc.), use the JavaScript API:

### Basic Form Submission

```javascript
// Track a form submission with contact data
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  name: 'John Smith',
  company: 'Acme Inc',
  form_name: 'Demo Request'
});
```

### With Additional Properties

```javascript
// Track with custom properties for richer data
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  first_name: 'John',
  last_name: 'Smith',
  company: 'Acme Inc',
  job_title: 'VP of Marketing',
  phone: '+1-555-0123',
  // Custom properties
  product_interest: 'Enterprise Plan',
  source: 'Pricing Page',
  utm_campaign: 'spring-promo'
});
```

### Form Event Listener Example

```javascript
// Attach to any form
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

## Best Practices

### Do's

| Practice | Why It Helps |
|----------|-------------|
| Use standard field names | Ensures automatic mapping works correctly |
| Track thank you pages | Provides backup conversion tracking |
| Include company fields | Improves account matching accuracy |
| Set up Slack notifications | Get instant alerts for high-value form fills |

### Don'ts

| Avoid | Why |
|-------|-----|
| Tracking every micro-form | Creates noise; focus on conversion-worthy forms |
| Duplicate tracking (click + page view) | Can inflate conversion numbers |
| Ignoring enrichment data | Company reveal adds valuable context |
| Delayed follow-up | Speed-to-lead impacts conversion rates |

## Form Tracking + ABM Workflows

Combine form tracking with ABM targeting for powerful workflows:

### High-Value Form Alert
1. Target account visits your site
2. Visitor fills out demo request form
3. Abmatic matches visitor to account
4. Slack notification sent to account owner
5. Sales follows up within minutes

### Personalized Follow-Up
1. Form submitted with job title data
2. Contact added to role-based sequence
3. Personalized outreach based on title + company
4. Campaign attribution tracks ROI

### Account Penetration
1. Multiple contacts from same account fill forms
2. Abmatic groups contacts by company
3. Buying committee visualization in account view
4. Coordinated multi-threaded outreach

## Troubleshooting

### Forms Not Being Tracked

| Issue | Cause | Solution |
|-------|-------|----------|
| No submissions appearing | Script not installed | Verify script on [Installation page](/getting-started/install-script) |
| AJAX forms not tracking | Non-standard submission | Use JavaScript API for custom tracking |
| Third-party forms missing | Hosted on different domain | Implement custom tracking with API |
| Iframe forms not captured | Cross-origin restrictions | Track on thank you page instead |

### Missing or Incorrect Data

| Issue | Cause | Solution |
|-------|-------|----------|
| Fields not mapping | Non-standard field names | Use standard naming or custom tracking |
| Wrong company matched | Generic email domain | Encourage work email on forms |
| Duplicate contacts | Multiple form fills | Abmatic auto-merges by email |
| Missing company data | ISP or VPN traffic | Contact still created; company added when known |

### Conversion Tracking Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Zero conversions showing | Event not configured | Create conversion goal in Manage tab |
| Conversions not attributed | Campaign not active | Verify campaign status is "Active" |
| Double counting | Click + page view both set | Choose one tracking method per form |

## Integration with CRM

Form submissions can automatically sync to your CRM:

| CRM | What Syncs | How |
|-----|-----------|-----|
| **HubSpot** | New contacts + form activity | Enable in [HubSpot Integration](/integrations/crm/hubspot) |
| **Salesforce** | Leads/Contacts + web activity | Enable in [Salesforce Integration](/integrations/crm/salesforce) |
| **Pipedrive** | Persons + activities | Enable in [Pipedrive Integration](/integrations/crm/pipedrive) |

**Sync includes:**
- Contact properties from form
- Form submission as activity
- Company association
- Campaign attribution
- Engagement score

## Related Features

| Feature | How It Helps |
|---------|-------------|
| [Contact Reveal](/visitor-tracking/contact-reveal) | Identify contacts before they fill forms |
| [Company Identification](/visitor-tracking/company-identification) | Match form submitters to accounts |
| [Conversions Overview](/conversions/overview) | Measure form conversion rates |
| [Email Sequences](/campaigns/email-campaigns) | Automate follow-up to form fills |
| [Slack Integration](/integrations/slack) | Get instant form submission alerts |
