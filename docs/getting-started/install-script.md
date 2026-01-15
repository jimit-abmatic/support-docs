---
id: install-script
title: Install Tracking Script
sidebar_label: Install Script
sidebar_position: 2
---

# Install the Abmatic Tracking Script

**Unlock the power of your website traffic in under 5 minutes.** The Abmatic tracking script transforms anonymous visitors into identified accounts, enabling real-time company identification and personalized experiences that convert.

## Why Install the Tracking Script?

| Capability | What You Unlock |
|-----------|----------------|
| **Company Identification** | See which companies visit your site in real-time |
| **Website Personalization** | Deliver tailored content to target accounts |
| **Visitor Analytics** | Track engagement, page views, and intent signals |
| **CRM Enrichment** | Auto-sync visitor data to Salesforce, HubSpot, and more |
| **Contact Discovery** | Reveal decision-makers from visiting companies |

## Getting Your Script

Getting your unique tracking script takes just seconds:

1. Log in to [app.abmatic.ai](https://app.abmatic.ai)
2. Navigate to the **Installation** page from the left sidebar
3. Click on the script code to copy it to your clipboard

![Script Installation Page - Copy your unique tracking code with one click](/img/screenshots/installation-script.png)

Your script will look like this:

```html
<script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
```

Where `YOUR_UNIQUE_ID` is your account's unique identifier (e.g., `d8r773ra7437`).

:::tip Click to Copy
Simply click on the script tag in the Installation page to automatically copy it to your clipboard.
:::

## Installation Methods

Choose the method that works best for your tech stack. Most teams are up and running in under 5 minutes.

### Method 1: Direct HTML Installation (Recommended)

The fastest way to get started. Add the script directly to your website's HTML in the `<head>` section:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  <!-- Abmatic AI Tracking Script -->
  <script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
</head>
<body>
  <!-- Your website content -->
</body>
</html>
```

**Important**: Place the script as high as possible in the `<head>` section for best performance.

### Method 2: Google Tag Manager

Perfect for teams that manage scripts centrally through GTM:

1. Log in to [Google Tag Manager](https://tagmanager.google.com)
2. Select your container
3. Click **Tags** → **New**
4. Click **Tag Configuration** → **Custom HTML**
5. Paste your Abmatic script:
   ```html
   <script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
   ```
6. Under **Triggering**, select **All Pages**
7. Name your tag (e.g., "Abmatic AI Tracking")
8. Click **Save**
9. **Publish** your changes

:::info No Code Changes Required
GTM lets marketing teams add Abmatic without involving engineering. Changes go live as soon as you publish.
:::

### Method 3: WordPress

WordPress powers millions of B2B websites. Here's how to add Abmatic:

**Option A: Using a Plugin (Easiest)**
1. Install "Insert Headers and Footers" or "WPCode" plugin
2. Go to the plugin settings
3. Paste your Abmatic script in the header section
4. Save changes

**Option B: Using Theme Settings**
1. Go to **Appearance** → **Theme Editor** or your theme's customizer
2. Find the header scripts option
3. Paste your Abmatic script
4. Save and clear any caches

### Method 4: React / Next.js / Single Page Apps

Modern JavaScript frameworks work seamlessly with Abmatic. Choose your approach:

**Next.js (App Router)**
```jsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**React (Create React App)**
```html
<!-- public/index.html -->
<script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
```

**Using React Helmet**
```jsx
import { Helmet } from 'react-helmet';

<Helmet>
  <script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
</Helmet>
```

:::tip SPA Page Tracking
Abmatic automatically detects route changes in single-page applications. No additional configuration needed for client-side navigation.
:::

## Verify Installation

After installing the script, return to the Installation page to confirm everything is working. The status indicator shows:

| Status | What It Means |
|--------|--------------|
| **Active** ✅ | Script detected, visitor data flowing |
| **Inactive** ⏳ | Waiting for first visitor detection |

![Installation Status - Verify your script is working](/img/screenshots/installation-script.png)

### Manual Verification

Want to double-check? Here's how to verify in your browser:

1. Visit your website
2. Open browser Developer Tools (F12 or right-click → Inspect)
3. Go to the **Network** tab
4. Filter by "abmatic"
5. Look for a successful request to `clients.abmatic.ai/YOUR_ID.js`

:::success Quick Test
Visit your own website after installation, then check the Abmatic dashboard. You should see your company appear in the visitor list within minutes.
:::

## Troubleshooting

Most installation issues are quick to resolve. Here are the most common scenarios:

### Script Not Loading

| Issue | Solution |
|-------|----------|
| Script not in `<head>` | Move the script tag to the `<head>` section |
| JavaScript errors | Check browser console for conflicts with other scripts |
| Ad blocker interference | Test in incognito mode or whitelist your domain |
| Wrong script ID | Copy a fresh script from the Installation page |

### No Data Appearing

| Issue | Solution |
|-------|----------|
| Just installed | Wait 2-3 minutes for initial data to appear |
| No visitors yet | Visit your own website to trigger detection |
| Partial installation | Ensure script is on all pages (not just homepage) |
| Caching | Clear CDN/browser cache if using cached pages |

### Google Tag Manager Issues

| Issue | Solution |
|-------|----------|
| Tag not live | Click **Publish** (saving alone isn't enough) |
| Wrong trigger | Set trigger to "All Pages" |
| Testing issues | Use GTM Preview mode to debug |

## Content Security Policy (CSP)

If your website uses Content Security Policy headers, whitelist these Abmatic domains:

```
script-src: https://clients.abmatic.ai
connect-src: https://clients.abmatic.ai https://api.abmatic.ai
```

## What Happens Next?

Once your script shows "Active" status, Abmatic immediately starts working:

1. **Company identification begins** - See which companies visit your site in real-time
2. **Engagement tracking starts** - Page views, time on site, and visit frequency are captured
3. **Intent signals accumulate** - Build a complete picture of buyer interest

## Next Steps

You're ready to start converting anonymous traffic into pipeline:

| Action | Benefit |
|--------|---------|
| [Create Your First Campaign](/getting-started/first-campaign) | Personalize your website for target accounts |
| [Connect Your CRM](/integrations/overview) | Sync visitor data to Salesforce, HubSpot, Pipedrive |
| [Set Up Conversions](/conversions/overview) | Track which campaigns drive results |
| [Explore AI Agents](/ai-agents/ai-agents-overview) | Let AI help you prioritize and engage accounts |

---

:::info Need Help?
Having trouble with installation? Contact support at support@abmatic.ai or use the chat widget in the app.
:::
