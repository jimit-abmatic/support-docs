---
id: form-tracking
title: Form Tracking
sidebar_label: Form Tracking
sidebar_position: 4
---

# Form Tracking

This page is about **capturing the person who fills out a form** — turning a submission into an enriched contact that is linked to the right company and added to your records, automatically and with no manual data entry.

:::note Two form-tracking pages
There are two related pages, with different goals:

- **This page (Visitor Tracking → Form Tracking)** — how a form fill *identifies and enriches a contact* and ties them to an account in Visitor Reveal.
- **[Conversions → Form Tracking](/conversions/form-tracking)** — set up a form submission as a *conversion event* and measure how much your campaigns lift the form-fill rate.

Start here if you want to capture and enrich the person who filled the form; start there if you want to measure conversions.
:::

## Why Form Tracking Matters

| Without Form Tracking | With Abmatic AI Form Tracking |
|-----------------------|-------------------------------|
| Manual lead entry from forms | Automatic contact creation |
| Unknown company associations | Instant company matching |
| Siloed form data | Unified contact profiles in Visitor Reveal |
| Delayed follow-up | Real-time linkage to the visitor's session |

## How It Works

When the Abmatic AI tracking script is installed, form capture happens automatically:

```
Visitor submits form → Abmatic AI captures the data → Contact created/updated → Company matched → Linked to the visitor's session
```

**What gets captured:**
- The form field values
- The page URL where the submission occurred
- Timestamp and session data
- The associated company (from IP identification)
- The full visitor journey leading up to the submission

## Automatic Form Detection

Abmatic AI automatically detects and captures common form types:

| Form Type | What Gets Captured | Why It Matters |
|-----------|--------------------|----------------|
| **Contact forms** | Name, email, company, message | Sales gets instant qualified leads |
| **Demo requests** | Contact info + product interest | High-intent leads prioritized for outreach |
| **Newsletter signups** | Email, preferences | Build nurture audiences automatically |
| **Gated content** | Contact info + content downloaded | Track content engagement by account |
| **Pricing inquiries** | Contact info + plan interest | Route to sales with buying context |

## Where Form Data Appears

Once a form is captured, the contact shows up across Abmatic AI:

| Location | What You'll See | Best For |
|----------|-----------------|----------|
| **Visitor Reveal → Contacts** | The new or updated contact, with engagement score and temperature | Sales follow-up and outreach |
| **Visitor Reveal → Accounts** | The submission linked to the identified company, on its Contacts and Engagement tabs | ABM account engagement tracking |
| **Conversions** | The submission counted as a conversion event (once configured) | Measuring campaign ROI |
| **Contacts** | The contact record in your contact lists | Organizing and exporting prospects |

![The Conversions dashboard, where a configured form submission appears as a conversion column](/img/screenshots/ft-conversions.png)

*Once you set up a form conversion, submissions appear as a column in the Conversions dashboard so you can measure campaign lift — but the contact itself is captured and enriched automatically in Visitor Reveal regardless.*

## Automatic Field Mapping

Abmatic AI maps common form field names to contact properties:

| Form Field Names | Maps To | Notes |
|------------------|---------|-------|
| `email`, `e-mail`, `emailAddress` | Contact Email | Required for contact creation |
| `name`, `full_name`, `fullName` | Contact Name | Parsed into first/last if needed |
| `first_name`, `firstName`, `fname` | First Name | Standard field mapping |
| `last_name`, `lastName`, `lname` | Last Name | Standard field mapping |
| `company`, `organization`, `companyName` | Company Name | Cross-referenced with IP data |
| `phone`, `telephone`, `phoneNumber` | Phone Number | Optional enrichment |
| `job_title`, `title`, `jobTitle` | Job Title | Used for role-based targeting |

**Smart mapping:**
- Case-insensitive field matching
- Handles snake_case, camelCase, and kebab-case
- Merges data if the contact already exists (by email)
- Links the contact to the company from IP identification

## Custom Form Tracking (JavaScript API)

For forms with custom implementations (AJAX, React, Vue, and other SPAs), capture the submission with the JavaScript API. Call `window.abmatic.track('form_submitted', { ... })` with the field values:

### Basic form submission

```javascript
// Track a form submission with contact data
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  name: 'John Smith',
  company: 'Acme Inc',
  form_name: 'Demo Request'
});
```

### With additional properties

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

### Form event-listener example

```javascript
// Attach to any form
document.getElementById('demo-form').addEventListener('submit', function (e) {
  const formData = new FormData(e.target);

  window.abmatic.track('form_submitted', {
    email: formData.get('email'),
    name: formData.get('name'),
    company: formData.get('company'),
    form_name: 'Demo Request Form'
  });
});
```

:::tip Measuring vs. capturing
The JavaScript API above *captures and enriches* the contact. To also *measure* form submissions as a conversion (and see campaign lift), set up a conversion event on the [Conversions → Form Tracking](/conversions/form-tracking) page.
:::

## Best Practices

### Do's

| Practice | Why It Helps |
|----------|--------------|
| Use standard field names | Ensures automatic mapping works |
| Include company fields | Improves account-matching accuracy |
| Encourage work email | Better company matching than personal domains |
| Set up Slack notifications | Get instant alerts for high-value form fills |

### Don'ts

| Avoid | Why |
|-------|-----|
| Tracking every micro-form | Creates noise; focus on lead-worthy forms |
| Ignoring enrichment data | Visitor Reveal adds valuable company context |
| Delayed follow-up | Speed-to-lead impacts conversion rates |

## Form Tracking + ABM Workflows

### High-value form alert
1. A target account visits your site.
2. A visitor fills out a demo-request form.
3. Abmatic AI matches the visitor to the account and creates/updates the contact.
4. A Slack notification goes to the account owner.
5. Sales follows up within minutes.

### Account penetration
1. Multiple contacts from the same account fill forms.
2. Abmatic AI groups them under the company.
3. The buying committee appears on the account's Contacts tab.
4. Run coordinated, multi-threaded outreach.

## Troubleshooting

### Forms not being captured

| Issue | Cause | Solution |
|-------|-------|----------|
| No submissions appearing | Script not installed | Verify the script on the [Installation page](/getting-started/install-script) |
| AJAX forms not captured | Non-standard submission | Use the JavaScript API |
| Third-party forms missing | Hosted on a different domain | Implement custom tracking with the API |
| Iframe forms not captured | Cross-origin restrictions | Track on the thank-you page instead |

### Missing or incorrect data

| Issue | Cause | Solution |
|-------|-------|----------|
| Fields not mapping | Non-standard field names | Use standard naming or the custom API |
| Wrong company matched | Generic email domain | Encourage work email on forms |
| Duplicate contacts | Multiple form fills | Abmatic AI auto-merges by email |
| Missing company data | ISP or VPN traffic | Contact still created; company added when known |

## Integration with CRM

Captured contacts can sync to your CRM automatically:

| CRM | What Syncs | How |
|-----|------------|-----|
| **HubSpot** | New contacts + form activity | Enable in the [HubSpot Integration](/integrations/crm/hubspot) |
| **Salesforce** | Leads/Contacts + web activity | Enable in the [Salesforce Integration](/integrations/crm/salesforce) |
| **Pipedrive** | Persons + activities | Enable in the [Pipedrive Integration](/integrations/crm/pipedrive) |

**Sync includes:** contact properties from the form, the form submission as activity, company association, campaign attribution, and engagement score.

## Related Features

| Feature | How It Helps |
|---------|--------------|
| [Contact Reveal](/visitor-tracking/contact-reveal) | Identify contacts before they fill forms |
| [Company Identification](/visitor-tracking/company-identification) | Match form submitters to accounts |
| [Conversions → Form Tracking](/conversions/form-tracking) | Measure form conversion rates and lift |
| [AI Sequences](/campaigns/email-campaigns) | Automate follow-up to form fills |
| [Slack Integration](/integrations/slack) | Get instant form-submission alerts |
