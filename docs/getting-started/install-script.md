---
id: install-script
title: Install Tracking Script
sidebar_label: Install Script
sidebar_position: 2
---

# Install the Abmatic Tracking Script

The Abmatic tracking script is essential for identifying companies visiting your website and enabling website personalization. This guide covers all installation methods.

## Getting Your Script

1. Log in to [app.abmatic.ai](https://app.abmatic.ai)
2. Navigate to the **Installation** page (click "Installation" in the left sidebar)
3. Copy your unique tracking script by clicking on it

![Script Installation Page](/img/screenshots/installation-script.png)

Your script will look like this:

```html
<script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
```

Where `YOUR_UNIQUE_ID` is your account's unique identifier (e.g., `d8r773ra7437`).

:::tip Click to Copy
Simply click on the script tag in the Installation page to automatically copy it to your clipboard.
:::

## Installation Methods

### Method 1: Direct HTML Installation (Recommended)

Add the script directly to your website's HTML in the `<head>` section:

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

### Method 3: WordPress

For WordPress sites:

1. Install a plugin like "Insert Headers and Footers" or use your theme's custom script option
2. Add the Abmatic script to the header section
3. Save and clear any caches

### Method 4: React / Next.js / Single Page Apps

For React-based applications, add the script to your `index.html` or use a script loader:

```jsx
// In your index.html or _document.js (Next.js)
<script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
```

Or using React Helmet:
```jsx
import { Helmet } from 'react-helmet';

<Helmet>
  <script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
</Helmet>
```

## Verify Installation

After installing the script, the Installation page shows the status:

- **Active**: We've detected visitors on your site - the script is working!
- **Inactive**: No visitors detected yet

![Installation Status](/img/screenshots/installation-script.png)

### Manual Verification

1. Visit your website
2. Open browser Developer Tools (F12 or right-click → Inspect)
3. Go to the **Network** tab
4. Filter by "clients.abmatic"
5. You should see a request to `clients.abmatic.ai/YOUR_ID.js`

## Troubleshooting

### Script Not Loading

- Ensure the script is placed in the `<head>` section
- Check for JavaScript errors in the browser console
- Verify the script isn't blocked by ad blockers or CSP policies
- Make sure you're using the correct unique ID from your Installation page

### No Data Appearing

- Wait a few minutes after installation for the first visitor to be detected
- Visit your own website to trigger the first detection
- Check that the script is installed on all pages you want to track

### Google Tag Manager Issues

- Ensure the tag is **published** (not just saved)
- Verify the trigger is set to "All Pages"
- Use GTM's Preview mode to test before publishing

## Content Security Policy (CSP)

If your website uses Content Security Policy, add these domains:

```
script-src: https://clients.abmatic.ai
connect-src: https://clients.abmatic.ai https://api.abmatic.ai
```

## Next Steps

Once your script is installed and showing "Active" status:

- [Create Your First Campaign](/getting-started/first-campaign) - Start personalizing your website
- [Connect Your CRM](/integrations/overview) - Sync with Salesforce, HubSpot, etc.
- [Set Up Conversion Tracking](/conversions/overview) - Measure campaign performance
