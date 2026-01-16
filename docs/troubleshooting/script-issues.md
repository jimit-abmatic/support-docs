---
id: script-issues
title: Script & Tracking Troubleshooting
sidebar_label: Script Issues
sidebar_position: 2
---

# Script & Tracking Troubleshooting

Get your Abmatic tracking script working correctly to unlock visitor identification, company reveal, and personalization capabilities.

:::tip Quick Check
Most script issues are resolved in under 5 minutes. Start with the [Troubleshooting Checklist](#troubleshooting-checklist) at the bottom of this page for a fast diagnosis.
:::

![Installation page showing script and status](/img/screenshots/installation-script.png)

## Script Not Loading

### What You'll See

| Symptom | What It Means |
|---------|---------------|
| Installation page shows "Inactive" | Script hasn't detected any visitors yet |
| No network requests to `clients.abmatic.ai` | Script isn't loading on your pages |
| Empty Reveal section | Either script isn't working or no visitors yet |

### Step-by-Step Diagnosis

**Step 1: Verify the script is in your page source**

1. Visit your website
2. Right-click and select "View Page Source"
3. Search (Ctrl+F / Cmd+F) for `abmatic`
4. You should find: `<script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>`

**Step 2: Check Network requests in DevTools**

1. Open browser DevTools (F12 or right-click > Inspect)
2. Go to the **Network** tab
3. Refresh the page
4. Filter by "abmatic"
5. Look for a successful request (200 status) to `clients.abmatic.ai`

### Common Causes & Solutions

#### Script not in page source

**If using direct HTML:**
```html
<!-- Add this in your <head> section, as high as possible -->
<script async src="https://clients.abmatic.ai/YOUR_UNIQUE_ID.js"></script>
```

**If using Google Tag Manager:**
1. Log into GTM
2. Verify the tag exists and is **published** (not just saved)
3. Use GTM Preview mode to verify the tag fires on page load

**If using WordPress:**
- Clear all caching plugins (WP Super Cache, W3 Total Cache, LiteSpeed, etc.)
- Verify the script is in your theme's `header.php` or plugin settings
- Some page builders (Elementor, Divi) have their own header script sections

:::info Platform-Specific Installation
For detailed installation instructions on WordPress, Webflow, Squarespace, and other platforms, see our [Script Installation Guide](/getting-started/install-script).
:::

#### Script blocked by ad blocker

Ad blockers may block tracking scripts. To diagnose:

1. Temporarily disable ad blockers (uBlock Origin, AdBlock Plus, etc.)
2. Visit your site in an Incognito/Private window
3. If the script loads, consider:
   - Whitelisting `clients.abmatic.ai` in your ad blocker
   - Most B2B visitors use corporate browsers without ad blockers

#### Script blocked by Content Security Policy (CSP)

If your site uses CSP headers, check the browser console for errors like "Refused to load script." Add these directives:

```
script-src: https://clients.abmatic.ai
connect-src: https://clients.abmatic.ai https://api.abmatic.ai
```

---

## No Visitors Showing

### What's Happening

Your script is loading (network request succeeds, status shows "Active"), but Reveal > Accounts shows no data.

### Possible Causes

| Cause | Solution |
|-------|----------|
| **New installation** | Allow 24-48 hours for data to populate |
| **Low traffic** | You need actual visitors for data to appear |
| **Same-company traffic** | Your own visits may be filtered by default |
| **VPN/Proxy traffic** | Some visitors can't be identified |

### Quick Test

**Test from a different network:**

1. Visit your website from mobile data (disconnect from WiFi)
2. Browse several pages
3. Check Reveal after 5-10 minutes

**Check account filters:**

1. Go to **Settings** > **Account**
2. Review any excluded domains or IPs
3. Ensure your test traffic isn't accidentally filtered

---

## Visitors Not Identified (Company Unknown)

### Understanding Identification Rates

Not all visitors can be identified - this is normal. Here's what to expect:

| Visitor Type | Typical Identification Rate | Why |
|--------------|---------------------------|-----|
| **Corporate networks** | 60-80% | Companies register IP ranges with identifiable info |
| **Small businesses** | 40-60% | Smaller IP footprint, less registration data |
| **Home/residential** | 10-20% | ISPs don't associate IPs with individuals |
| **Mobile/VPN** | 5-15% | IPs are shared or masked |

### Why Some Visitors Can't Be Identified

- **Residential IPs**: Home internet connections aren't linked to companies
- **VPN users**: VPN exit nodes mask the actual company network
- **Mobile visitors**: Cellular IPs are pooled across many users
- **Shared workspaces**: WeWork, coffee shops, etc. have generic IPs

### Boost Your Identification Rates

| Method | Benefit |
|--------|---------|
| **Enable Form Tracking** | Capture email addresses to identify contacts directly |
| **Enable Contact Reveal** | Identify specific people visiting your site (uses credits) |
| **Connect CRM Integration** | Match visitors against your existing contacts database |

:::tip Pro Tip
Combining company identification with form tracking typically increases your identified visitor rate by 30-50%. When someone fills out a form, you capture their email even if their company couldn't be identified by IP.
:::

---

## Page Views Not Tracking

### Single Page Applications (SPAs)

If your site uses React, Vue, Angular, Next.js, or similar frameworks:

The Abmatic script automatically tracks page views in most SPAs by listening to `pushState` and `popstate` events. If pages aren't tracking:

1. **Verify script loads on initial render**: The script must be in the initial HTML, not lazy-loaded
2. **Check for custom routing**: Non-standard routing may need manual page view calls
3. **Test in DevTools**: Watch the Network tab for requests on navigation

### Specific Pages Not Tracking

If certain pages aren't being tracked:

| Issue | Solution |
|-------|----------|
| Script not on all pages | Ensure the script is in a shared header/layout |
| JavaScript errors | Check console for errors that could break execution |
| Content in iframes | Iframe content tracks separately and may need its own script |

---

## Form Submissions Not Tracking

### How Automatic Form Tracking Works

Abmatic automatically captures form submissions when:
- The form contains an `<input type="email">` field
- The form submits via standard HTTP POST or JavaScript `fetch`/`XMLHttpRequest`

### If Forms Aren't Being Captured

| Issue | Solution |
|-------|----------|
| No email field | Add an email input or use manual tracking |
| Custom form library | Some libraries may need manual integration |
| Multi-step forms | Only the final submit may be captured |

### Manual Form Tracking

For custom forms or to capture additional data, use the JavaScript API:

```javascript
// Call after your form submission logic
window.abmatic && window.abmatic.identify({
  email: 'user@company.com',
  firstName: 'John',
  lastName: 'Doe',
  company: 'Acme Corp'  // Optional: helps with matching
});
```

---

## Troubleshooting Checklist

Run through this checklist to quickly diagnose script issues:

| Check | How to Verify |
|-------|---------------|
| Script tag is in page source | View Page Source, search for "abmatic" |
| Script URL matches Installation page | Compare the ID in both places |
| Network request succeeds (200 status) | DevTools > Network > filter "abmatic" |
| No CSP errors in console | DevTools > Console, look for "Refused to load" |
| Ad blockers disabled or whitelisted | Test in Incognito window |
| GTM tag is published | GTM > Check publish status (not draft) |
| Caching cleared | Clear WordPress/CDN cache if applicable |
| Waited for data | Allow at least 24 hours for initial data |

---

## Still Having Issues?

Contact support@abmatic.ai with the following information for faster resolution:

1. **Your website URL** where the script is installed
2. **Screenshots of:**
   - Browser DevTools Network tab (filtered to "abmatic")
   - Browser Console (showing any errors)
   - Your Installation page in Abmatic (showing status)
3. **Description of what you've tried** from this guide

Our support team typically responds within 4 business hours.
