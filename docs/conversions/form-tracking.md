---
id: form-tracking
title: Form Tracking
sidebar_label: Form Tracking
sidebar_position: 4
---

# Form Tracking

This page is about **measuring form submissions as conversions** — turning a form fill into a tracked goal so you can see which campaigns drive it and how much personalization lifts the rate.

:::note Two form-tracking pages
There are two related pages, with different goals:

- **This page (Conversions → Form Tracking)** — set up a form submission as a *conversion event* and measure campaign lift.
- **[Visitor Tracking → Form Tracking](/visitor-tracking/form-tracking)** — how a form fill *identifies a contact* and enriches their record.

Start here if you want to measure conversions; start there if you want to capture and enrich the person who filled the form.
:::

---

## How It Works

When a form is submitted on a page running the Abmatic AI script, the submission can be counted as a conversion and attributed to the campaign that visitor was in:

```
Form submitted → matched to a campaign → conversion recorded → lift updated
```

![The Conversions dashboard, showing each campaign and its conversion columns](/img/screenshots/cft-overview.png)

*The Conversions dashboard. Form-submission conversions appear as a column once you set up the event.*

---

## Setting Up a Form Conversion

There are two ways to track a form submission as a conversion. Choose based on how your form behaves.

### Method 1: Click Event (track the submit button)

Best for standard HTML forms and CTA buttons that submit directly.

| Step | Action |
|------|--------|
| 1 | Go to **Conversions** → **Manage** |
| 2 | Click **+ Conversion** |
| 3 | In the dialog, choose **Click Event** |
| 4 | Name the event and enter the page URL containing the form |
| 5 | In the visual editor, click the form's submit button |
| 6 | Choose **Only this element** or **All similar elements**, then save |

### Method 2: Page View (track the thank-you page)

Best for AJAX forms, multi-step forms, or third-party forms that redirect to a confirmation page.

| Step | Action |
|------|--------|
| 1 | Go to **Conversions** → **Manage** |
| 2 | Click **+ Conversion** |
| 3 | In the dialog, choose **Page View** |
| 4 | Name the event (e.g. "Demo Form Completed") |
| 5 | Enter the thank-you page URL, e.g. `https://yoursite.com/thank-you` |
| 6 | Save |

![The Manage tab listing your conversion events](/img/screenshots/et-manage.png)

*The Manage tab, where your form conversion events appear with their type, attachment, and Visibility toggle.*

### Which method to pick

| Scenario | Recommended Method | Why |
|----------|-------------------|-----|
| Standard HTML form | Click Event | Direct, accurate |
| AJAX / React / Vue form | Page View | Handles async submissions |
| Third-party form (e.g. Typeform) | Page View | Tracks the confirmation URL |
| Multi-step form | Page View (final page) | Counts true completions |
| Modal / popup form | Click Event | No URL change to track |

:::caution Avoid double counting
Don't track the same form with both a Click Event and a Page View, or each submission may be counted twice. Pick one method per form.
:::

---

## Reading the Metrics

Once a form conversion is set up, you'll see it on the **Conversions (last 60 days)** tab and on each campaign's **Insights** tab:

| Metric | What It Measures |
|--------|------------------|
| **Conversions** | Total form submissions counted |
| **Conversion Rate (CVR)** | Conversions ÷ unique visitors |
| **Personalized vs Control** | The split that drives lift |
| **Lift** | How much higher the personalized rate is vs the control |

```
Lift = (Personalized CVR - Control CVR) / Control CVR × 100
```

For the full breakdown, see [Conversion Analytics](/conversions/analytics).

---

## Custom Form Tracking (JavaScript)

For custom-built forms (React, Vue, AJAX) you can record a conversion with the JavaScript API:

```javascript
// Track a form submission as a conversion
window.abmatic.track('form_submitted', {
  email: 'user@company.com',
  form_name: 'Demo Request'
});
```

You can include additional fields you want associated with the submission:

```javascript
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

A common pattern is to attach the call to the form's submit handler:

```javascript
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

In React:

```jsx
function ContactForm() {
  const handleSubmit = (formData) => {
    submitForm(formData); // your normal submit
    window.abmatic?.track('form_submitted', {
      email: formData.email,
      form_name: 'Contact Form'
    });
  };
  return <form onSubmit={handleSubmit}>...</form>;
}
```

:::tip
Use the JavaScript API when the visual editor can't reliably target your submit button — for example, forms rendered inside an iframe or forms whose markup changes on each load.
:::

---

## Form Tracking Across Campaign Types

The same conversion event measures form fills no matter how the visitor arrived:

| Campaign Type | How Form Tracking Applies |
|---------------|---------------------------|
| **Website Personalization** | Compares form fills on personalized vs control experiences |
| **LinkedIn Ads** | Counts form fills from LinkedIn ad traffic |
| **Display & Google Ads** | Counts form fills from paid traffic |
| **Email / Sequences** | Counts form fills from sequence click-throughs |
| **CRM Campaigns** | Attributes form fills to CRM campaign members |

---

## Best Practices

- Track only your highest-value forms (demo, contact, pricing) — not every form on the site.
- Use clear, descriptive event names so reports are easy to read.
- Set your most important form conversion as the **Main Event**.
- Test the event by submitting the form yourself before relying on the numbers.

---

## Privacy

Form tracking is built for conversion measurement, not data capture: it records that a submission happened and attributes it to a campaign. It is not intended to capture sensitive fields such as passwords or payment details — keep those out of any custom `track` calls.

If you use a consent or cookie-management tool on your site, confirm how it interacts with the Abmatic AI script for your region's requirements. For the current data-handling and compliance details, check with your Abmatic AI representative or email [support@abmatic.ai](mailto:support@abmatic.ai).

---

## Troubleshooting

### Form not tracking

| Issue | Cause | Solution |
|-------|-------|----------|
| No conversions appearing | Event not created | Create the conversion event in the Manage tab |
| Click event not firing | Wrong element attached | Re-attach the exact submit button |
| Page view not tracking | Wrong URL | Confirm the thank-you page URL matches exactly |
| Intermittent tracking | Submit element changes | Switch to Page View tracking |

### Attribution issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Conversion not attributed | Campaign not active | Confirm the campaign is running |
| Wrong campaign credited | Multiple campaigns active | Review campaign priority |
| Zero lift | No control conversions yet | Wait for more control-group traffic |

---

## Related

| Page | How It Helps |
|------|--------------|
| [Creating Conversion Goals](/conversions/create-goals) | Full event-creation guide |
| [Event Tracking](/conversions/event-tracking) | Track custom events beyond forms |
| [Conversion Analytics](/conversions/analytics) | Analyze conversion lift |
| [Visitor Tracking → Form Tracking](/visitor-tracking/form-tracking) | Identify and enrich the person who submitted |
| [Email Campaigns / Sequences](/campaigns/email-campaigns) | Follow up after a form fill |
