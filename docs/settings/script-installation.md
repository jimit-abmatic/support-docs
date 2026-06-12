---
id: script-installation
title: Script Installation
sidebar_label: Script Installation
sidebar_position: 2
---

# Script Installation

Install the Abmatic AI tracking script on your website to unlock the full power of account-based marketing: identify anonymous visitors, personalize their experience, and track conversions in real-time.

![Installation page with three steps — copy the javascript tag, paste it into the head section, and check that the code works — plus a Status pill showing "Active" and a "Last visitor" timestamp](/img/screenshots/set-install.png)

## Why Install the Script?

The Abmatic AI script is the foundation of your ABM strategy. Once installed, you'll immediately start:

- **Identifying companies** visiting your website (even anonymous visitors)
- **Personalizing content** based on company, industry, or account lists
- **Tracking engagement** with detailed page views and session data
- **Capturing leads** through automatic form tracking
- **Measuring ROI** with conversion analytics tied to accounts

:::tip Quick Win
Most customers see their first identified companies within minutes of installation. The script works silently in the background with no impact on page performance.
:::

## Getting Your Script

### Find Your Installation Code

1. Open the **Installation** page (the Installation item is pinned at the bottom of the left icon sidebar)
2. Under **1. Copy the javascript tag**, click the script code box to copy it to your clipboard
3. The snippet already contains your account's unique script ID — nothing to fill in

### Script Format

Your snippet is a single line that looks like this (your account's real ID is filled in for you):

```html
<script async src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"></script>
```

That's it — one line of code that unlocks personalization and visitor identification.

:::tip Copy from the app, don't retype
Always copy the exact snippet from the Installation page rather than typing it by hand. The script ID is specific to your account, and a typo means the script won't load.
:::

## Installation Methods

### Direct HTML (Recommended)

Add the script to your website's `<head>` section for fastest loading:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  <!-- Add Abmatic AI script as high as possible in head -->
  <script async src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"></script>
</head>
<body>
  ...
</body>
</html>
```

:::info Best Practice
Place the script **as high as possible** in the `<head>` section. This ensures personalization kicks in before your page renders, preventing any visual flicker.
:::

### Google Tag Manager

Install via GTM for easier management:

1. Open **Google Tag Manager**
2. Create a new **Custom HTML** tag
3. Paste your Abmatic AI script
4. Set trigger to **All Pages** (Page View)
5. Save and **Publish**

**GTM Settings:**
| Setting | Value |
|---------|-------|
| Tag Type | Custom HTML |
| Trigger | Page View - All Pages |
| Firing Priority | High (for personalization) |

### WordPress

**Using a Plugin (Easiest):**
1. Install a header/footer script plugin (e.g., "Insert Headers and Footers")
2. Add your Abmatic AI script to the header section
3. Save changes

**Using Theme Editor:**
1. Go to **Appearance > Theme Editor**
2. Select `header.php` (or `theme.json` for block themes)
3. Add script before `</head>`
4. Update file

### Shopify

1. Go to **Online Store > Themes**
2. Click **Edit code** (or "..." > Edit code)
3. Open **theme.liquid**
4. Add script just before `</head>`
5. Save

### Webflow

1. Open **Project Settings**
2. Navigate to **Custom Code**
3. Paste script in **Head Code** section
4. Publish your site

### Next.js / React

```jsx
// pages/_document.js (or app/layout.tsx for App Router)
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### Nuxt.js / Vue

```javascript
// nuxt.config.js
export default {
  head: {
    script: [
      {
        src: 'https://clients.abmatic.ai/YOUR_SCRIPT_ID.js',
        async: true
      }
    ]
  }
}
```

## Verifying Installation

### Real-Time Status Check

Once installed, the Installation page shows you when the script is working. This matches **step 3 on the page — "Check that the code works."**

1. Open the **Installation** page in Abmatic AI
2. Look at the **Status** pill near the bottom of the card:
   - **Active** = the script has been detected and is tracking visitors
   - **Inactive** = Abmatic AI is still waiting to detect the first visit
3. The **Last visitor** label shows how recently activity was seen (for example, "Last visitor: in 3 hours")

:::tip
Visit your own website after installing, then return to the Installation page — the Status should turn **Active** once Abmatic AI detects your visit.
:::

:::note Just browsing?
You can skip installation if you're only exploring the product. The script is only needed once you want to run live personalizations and visitor identification on your website.
:::

### Browser Console Verification

For technical verification:

1. Visit your website
2. Open browser Developer Tools (F12 or Cmd+Option+I)
3. Go to the **Console** tab
4. Look for any Abmatic AI-related errors

### Network Tab Check

1. Open Developer Tools > **Network** tab
2. Reload your page
3. Filter by "abmatic" or "clients.abmatic"
4. You should see the script loading with status 200

## What the Script Tracks

### Automatic Data Collection

The script automatically captures valuable engagement data:

| Data Type | What It Tells You |
|-----------|-------------------|
| **Page Views** | Which pages companies visit and in what order |
| **Session Data** | Visit duration, pages per session, return visits |
| **Scroll Depth** | How engaged visitors are with your content |
| **Time on Page** | Content engagement duration |
| **Form Submissions** | Lead capture from any form with an email field |

### Company Identification

Abmatic AI identifies visiting companies through multiple methods:

- **IP Intelligence** - Enterprise-grade reverse IP lookup
- **Form Submissions** - Email domain matching
- **Cookie Identification** - Returning visitor recognition

### Visitor-to-Account Matching

When a visitor submits a form:
1. Email address is captured automatically
2. Visitor is linked to the contact record
3. Company is confirmed or enriched
4. All future visits are tracked under that account

## Privacy & Compliance

### Built for Privacy

Abmatic AI is designed with privacy-first principles:

- **First-party cookies only** - No third-party tracking
- **GDPR compliant** - Data processed per your privacy policy
- **Consent-friendly** - Easy integration with consent managers
- **Do Not Track** - Respects browser DNT settings

### Consent Management Integration

**With CookieBot:**
```html
<script data-cookieconsent="statistics" async src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"></script>
```

**With OneTrust or Similar:**
```javascript
// Load only after consent
if (window.hasConsent && window.hasConsent('analytics')) {
  const script = document.createElement('script');
  script.src = 'https://clients.abmatic.ai/YOUR_SCRIPT_ID.js';
  script.async = true;
  document.head.appendChild(script);
}
```

## Performance

### Minimal Impact

The Abmatic AI script is built to stay out of your page's way:

| Property | Behavior |
|----------|----------|
| **Loading** | Loaded with `async`, so it never blocks page rendering |
| **Delivery** | Served from a CDN (`clients.abmatic.ai`) |
| **Placement** | Designed to sit in the `<head>` without delaying your content |

Because the snippet loads asynchronously, your pages render the same with the script in place as without it.

## Troubleshooting

### Script Not Loading

1. **Check placement** - Ensure script is in the `<head>` section
2. **Look for errors** - Check browser console for JavaScript errors
3. **CSP issues** - Add `clients.abmatic.ai` to your Content Security Policy if needed
4. **Test incognito** - Browser extensions can sometimes interfere

### Status Still "Inactive"

1. **Wait a moment** - Visit your site, then re-open the Installation page after a short delay
2. **Clear cache** - Hard refresh your website (Cmd+Shift+R)
3. **Check domain** - Verify your website URL is correct under **Settings → Account**

### Company Not Identified

1. **Allow time** - Some companies may take 24-48 hours to appear
2. **VPN/Proxy** - Visitors using VPNs show as the VPN provider
3. **Small companies** - ISP residential IPs cannot be identified to a company

## Advanced Configuration

### Exclude Internal Traffic

Keep your data clean by excluding your own team. Add URL paths or wildcard patterns under **Settings → Account → Page Exclude Rules** to suppress tracking and personalization on those pages.

### Custom Event Tracking

To track custom conversion events (such as a demo request or a signup), use the conversion and event-tracking features rather than wiring up events by hand. See the [Event Tracking](/conversions/event-tracking) guide for the current, supported way to capture custom events.

## Related Documentation

- [Quick Start Guide](/getting-started/quick-start) - Get set up in minutes
- [Visitor Tracking Overview](/visitor-tracking/overview) - Understand company identification
- [Form Tracking](/conversions/form-tracking) - Capture leads automatically
- [Event Tracking](/conversions/event-tracking) - Custom conversion tracking
