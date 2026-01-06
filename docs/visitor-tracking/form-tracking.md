---
id: form-tracking
title: Form Tracking
sidebar_label: Form Tracking
sidebar_position: 4
---

# Form Tracking

Abmatic AI automatically captures form submissions on your website, creating contacts and tracking conversions.

## Automatic Form Detection

When the Abmatic tracking script is installed, it automatically detects and tracks most forms:

- Contact forms
- Demo request forms
- Newsletter signups
- Gated content forms

## How Form Tracking Works

1. Visitor fills out a form on your site
2. Abmatic captures the submission data
3. A contact is created or updated in Abmatic
4. The form submission is logged as a conversion

## Viewing Form Submissions

Form submissions appear in:

- **Conversions** - As conversion events
- **Contacts** - New contacts are created
- **Company Reveal** - Company association

## Field Mapping

Abmatic automatically maps common form fields:

| Form Field | Maps To |
|------------|---------|
| email | Contact Email |
| name, full_name | Contact Name |
| first_name | First Name |
| last_name | Last Name |
| company, organization | Company Name |
| phone, telephone | Phone Number |
| job_title, title | Job Title |

## Custom Form Tracking

For forms that aren't automatically detected, use the JavaScript API:

```javascript
// Track a custom form submission
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  name: 'John Smith',
  company: 'Acme Inc'
});
```

## Form Tracking as Conversions

Form submissions can be tracked as conversion goals:

1. Go to **Conversions** > **Manage**
2. Create a new conversion
3. Select **Form Submission** as the type
4. Configure form matching criteria

[Learn more about Conversions](/conversions/overview)

## Troubleshooting

### Forms Not Being Tracked

- Verify the tracking script is installed
- Check that the form uses standard HTML form elements
- Use the JavaScript API for custom form implementations

### Missing Form Data

- Ensure form field names follow standard conventions
- Map custom fields using the JavaScript API
- Check browser console for errors

## Related

- [Install Tracking Script](/getting-started/install-script)
- [Conversions Overview](/conversions/overview)
- [Contact Reveal](/visitor-tracking/contact-reveal)
