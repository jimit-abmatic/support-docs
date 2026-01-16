---
id: script-installation
title: Script Installation
sidebar_label: Script Installation
sidebar_position: 2
---

# Script Installation

Install the Abmatic AI tracking script on your website to unlock the full power of account-based marketing: identify anonymous visitors, personalize their experience, and track conversions in real-time.

![Installation page showing script code and active status](/img/screenshots/installation-script.png)

## Why Install the Script?

The Abmatic script is the foundation of your ABM strategy. Once installed, you'll immediately start:

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

1. Navigate to **Settings > Installation** in Abmatic
2. Click on the script code box to copy it to your clipboard
3. The script is unique to your account and ready to use

### Script Format

Your script will look like this:

```html
<script async src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"></script>
```

That's it - a single line of code that unlocks powerful ABM capabilities.

## Installation Methods

### Direct HTML (Recommended)

Add the script to your website's `<head>` section for fastest loading:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  <!-- Add Abmatic script as high as possible in head -->
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
3. Paste your Abmatic script
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
2. Add your Abmatic script to the header section
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

Once installed, Abmatic shows you immediately when it's working:

1. Visit **Settings > Installation** in Abmatic
2. Check the **Status** indicator:
   - **Active** (green) = Script is working and tracking visitors
   - **Inactive** (gray) = Waiting for first visitor
3. The **Last visitor** timestamp shows recent activity

:::tip
Visit your own website after installation - you'll see the status turn "Active" within seconds as Abmatic detects your visit.
:::

### Browser Console Verification

For technical verification:

1. Visit your website
2. Open browser Developer Tools (F12 or Cmd+Option+I)
3. Go to the **Console** tab
4. Look for any Abmatic-related errors

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

Abmatic identifies visiting companies through multiple methods:

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

Abmatic is designed with privacy-first principles:

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

The Abmatic script is optimized for performance:

| Metric | Value |
|--------|-------|
| **Size** | ~15KB gzipped |
| **Loading** | Async (non-blocking) |
| **Delivery** | Global CDN |
| **Render Impact** | Zero blocking |

Your pages load just as fast with Abmatic as without it.

## Troubleshooting

### Script Not Loading

1. **Check placement** - Ensure script is in the `<head>` section
2. **Look for errors** - Check browser console for JavaScript errors
3. **CSP issues** - Add `clients.abmatic.ai` to your Content Security Policy if needed
4. **Test incognito** - Browser extensions can sometimes interfere

### Status Still "Inactive"

1. **Wait a moment** - Visit your site, then check Abmatic in 10-30 seconds
2. **Clear cache** - Hard refresh your website (Cmd+Shift+R)
3. **Check domain** - Verify your domain matches in Settings > Account

### Company Not Identified

1. **Allow time** - Some companies may take 24-48 hours to appear
2. **VPN/Proxy** - Visitors using VPNs show as the VPN provider
3. **Small companies** - ISP residential IPs cannot be identified to a company

## Advanced Configuration

### Exclude Internal Traffic

Keep your analytics clean by excluding your own team:

```javascript
// In Account Settings > Page Exclude Rules
// Add paths or patterns to exclude
```

### Custom Event Tracking

Send custom events for deeper insights:

```javascript
abmatic('track', 'demo_requested', {
  plan: 'enterprise',
  source: 'pricing_page'
});
```

### Debug Mode

Enable console logging for troubleshooting:

```javascript
abmatic('debug', true);
```

## Related Documentation

- [Quick Start Guide](/getting-started/quick-start) - Get set up in minutes
- [Visitor Tracking Overview](/visitor-tracking/overview) - Understand company identification
- [Form Tracking](/conversions/form-tracking) - Capture leads automatically
- [Event Tracking](/conversions/event-tracking) - Custom conversion tracking
