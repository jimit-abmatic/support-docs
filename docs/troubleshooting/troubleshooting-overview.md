---
id: troubleshooting-overview
title: Troubleshooting Guide
sidebar_label: Overview
sidebar_position: 1
---

# Troubleshooting Guide

Get your Abmatic AI issues resolved quickly. This guide provides fast solutions to common problems, helping you get back to converting visitors in minutes, not hours.

:::tip Resolve 90% of Issues in Under 5 Minutes
Most issues stem from one of three areas: script installation, CRM connectivity, or campaign configuration. Use the Quick Diagnostics below to identify and fix the problem immediately.
:::

## Quick Diagnostics Checklist

Run through this checklist first—most issues resolve with one of these fixes:

| Check | How to Verify | Quick Fix |
|-------|---------------|-----------|
| **Script installed** | Browser DevTools → Network → filter "abmatic" | [Install script guide](/getting-started/install-script) |
| **Script verified** | Installation page shows green checkmark | Wait 5 minutes after install, then refresh |
| **CRM connected** | Integrations page shows "Connected" status | Click **Reconnect** to re-authorize |
| **Modern browser** | Using Chrome, Firefox, Safari, or Edge | Update to the latest version |
| **No ad blocker interference** | Disable extensions temporarily | Whitelist `*.abmatic.ai` |

![Installation verification status](/img/screenshots/verified/installation-script.png)

---

## Issues by Category

### Script & Tracking Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Script not loading | CSP blocking or incorrect placement | Check CSP headers allow abmatic.ai; verify script is in `<head>` |
| No visitors appearing | Script not verified | Go to **Settings → Installation** and verify tracking |
| Low identification rate | Normal behavior | ~30% of visitors can be identified; focus on high-intent accounts |
| SPA pages not tracking | Missing page view calls | Add `abmatic.page()` calls on route changes |
| Events not recording | SDK not initialized | Ensure `abmatic.track()` called after script loads |

**[Complete Script Troubleshooting →](/troubleshooting/script-issues)**

### CRM Integration Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Sync failing | Expired authentication | Go to **Integrations** → Click **Reconnect** |
| Data not appearing in CRM | Field mapping mismatch | Review field mapping in integration settings |
| Duplicate records | Matching rules too loose | Tighten domain/email matching criteria |
| Sync delay | Normal processing time | Allow up to 15 minutes for sync completion |
| Permission errors | Insufficient CRM access | Use an admin account or request proper permissions |

**[Complete CRM Troubleshooting →](/troubleshooting/crm-sync)**

### Campaign Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Personalization not showing | Campaign paused or targeting mismatch | Check campaign status and targeting rules |
| Wrong content displayed | Multiple campaigns competing | Review campaign priorities and targeting overlap |
| Editor not loading | Browser cache or extensions | Clear cache and disable extensions |
| No analytics data | New campaign or low traffic | Allow 24-48 hours for data collection |
| A/B test not working | Traffic allocation issue | Verify variation split percentages |

**[Complete Campaign Troubleshooting →](/troubleshooting/campaign-issues)**

---

## Error Messages Explained

When you see an error, find it below for a clear explanation and fix.

### Rate Limit Errors

**Error:** `Request failed with status code 429`

**What this means:** You've exceeded the API request limit, typically from bulk operations or rapid page refreshes.

**How to fix:**
1. Wait 2-3 minutes, then retry your action
2. For bulk operations, process records in smaller batches
3. If this happens frequently, contact support to review your plan limits

### Server Errors

**Error:** `Request failed with status code 500`

**What this means:** Our servers encountered an unexpected issue processing your request.

**How to fix:**
1. Refresh the page and try again
2. Clear your browser cache and cookies for abmatic.ai
3. If the problem persists, it's likely being addressed by our team—try again in 10 minutes
4. Still seeing it? Email support@abmatic.ai with:
   - The action you were performing
   - Exact time of the error
   - Screenshot of the error message

### Session Errors

**Error:** `Account not found. Signing out.`

**What this means:** Your session expired or there's an account access issue.

**How to fix:**
1. Sign in again with your credentials
2. If you can't sign in, contact your account administrator
3. Check if your user account is still active in **Settings → Users**

### Authentication Errors

**Error:** `Authentication failed` (CRM integrations)

**What this means:** The connection to your CRM was lost, typically due to password change or expired OAuth tokens.

**How to fix:**
1. Navigate to **Integrations**
2. Find the affected integration and click **Reconnect**
3. Complete the authorization flow with valid credentials
4. **Pro tip:** Use a dedicated service account for integrations to avoid disruption when employees change passwords

---

## Before Contacting Support

Gather this information to get faster resolution:

### Information to Include

| Category | What to Provide |
|----------|-----------------|
| **Account details** | Your login email and company name |
| **Issue description** | What you were trying to do, and what happened instead |
| **Steps to reproduce** | Numbered steps to recreate the issue |
| **Browser info** | Browser name/version, operating system |
| **Timing** | When the issue started, if it's intermittent or constant |
| **Evidence** | Screenshots, error messages, or screen recording |

### How to Capture Helpful Screenshots

1. **Full page context:** Capture the entire page, not just the error
2. **Browser console:** Press F12, go to Console tab, screenshot any red errors
3. **Network tab:** If page isn't loading, capture Network tab with failed requests
4. **URL visible:** Include the address bar in your screenshot

---

## Getting Help

**Self-service resources:**
- [Frequently Asked Questions](/faq/general) - Answers to common questions
- [Script Issues](/troubleshooting/script-issues) - Tracking and installation help
- [CRM Sync Issues](/troubleshooting/crm-sync) - Integration troubleshooting
- [Campaign Issues](/troubleshooting/campaign-issues) - Personalization and targeting help

**Contact support:**
- **Email:** support@abmatic.ai
- **Response time:** Within 24 hours on business days
- **Include:** Account email, issue description, and screenshots

---

## Related Resources

| Resource | Description |
|----------|-------------|
| [Script Installation Guide](/getting-started/install-script) | Complete installation walkthrough |
| [Salesforce Setup](/integrations/crm/salesforce-setup) | Salesforce integration configuration |
| [HubSpot Setup](/integrations/crm/hubspot-setup) | HubSpot integration configuration |
| [Campaign Setup](/campaigns/overview) | Campaign creation and configuration |
| [Common Errors](/troubleshooting/common-errors) | Full error message reference |
