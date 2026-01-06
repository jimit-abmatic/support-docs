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
2. Navigate to **Settings** → **Script Installation**
3. Copy your unique tracking script

![Script Installation Settings](/img/screenshots/settings-script.png)

Your script will look similar to this:

```html
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'abm.start':
  new Date().getTime(),event:'abm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='abmatic'?'&l='+l:'';j.async=true;j.src=
  'https://cdn.abmatic.ai/abmatic.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','abmatic','YOUR-ACCOUNT-ID');
</script>
```

## Installation Methods

### Method 1: Direct HTML Installation

Add the script directly to your website's HTML, ideally in the `<head>` section:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  <!-- Abmatic AI Tracking Script -->
  <script>
    (function(w,d,s,l,i){/* ... your script ... */})(window,document,'script','abmatic','YOUR-ACCOUNT-ID');
  </script>
</head>
<body>
  <!-- Your website content -->
</body>
</html>
```

### Method 2: Google Tag Manager

1. Log in to [Google Tag Manager](https://tagmanager.google.com)
2. Select your container
3. Click **Tags** → **New**
4. Click **Tag Configuration** → **Custom HTML**
5. Paste your Abmatic script
6. Under **Triggering**, select **All Pages**
7. Name your tag (e.g., "Abmatic AI Tracking")
8. Click **Save**
9. **Publish** your changes

### Method 3: Segment

If you use Segment as your CDP:

1. Go to your Segment workspace
2. Navigate to **Connections** → **Catalog**
3. Search for "Abmatic" or add as a custom destination
4. Configure with your Abmatic Account ID

## Verify Installation

After installing the script:

1. Visit your website
2. Open browser Developer Tools (F12 or right-click → Inspect)
3. Go to the **Network** tab
4. Filter by "abmatic"
5. You should see requests to `cdn.abmatic.ai`

Alternatively, in Abmatic:
1. Go to **Settings** → **Script Installation**
2. Click **Verify Installation**
3. Enter your website URL
4. The system will confirm if the script is detected

## Troubleshooting

### Script Not Loading

- Ensure the script is placed in the `<head>` section
- Check for JavaScript errors in the browser console
- Verify the script isn't blocked by ad blockers or CSP policies

### No Data Appearing

- Wait up to 30 minutes for initial data to appear
- Verify the Account ID in your script matches your account
- Check that visitors are accessing pages where the script is installed

### Google Tag Manager Issues

- Ensure the tag is published (not just saved)
- Verify the trigger is set to "All Pages"
- Use GTM's Preview mode to test

## Content Security Policy (CSP)

If your website uses CSP, add these domains:

```
script-src: https://cdn.abmatic.ai
connect-src: https://api.abmatic.ai https://cdn.abmatic.ai
```

## Next Steps

- [Create Your First Campaign](/getting-started/first-campaign)
- [Connect Your CRM](/integrations/overview)
- [Set Up Conversion Tracking](/conversions/overview)
