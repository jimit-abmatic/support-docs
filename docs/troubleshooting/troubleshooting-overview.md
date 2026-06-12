---
id: troubleshooting-overview
title: Troubleshooting Guide
sidebar_label: Overview
sidebar_position: 1
---

# Troubleshooting Guide

Get your Abmatic AI issues resolved quickly. This guide gives you fast, practical fixes for the most common problems so you can get back to identifying visitors and personalizing your site.

:::tip Start here
Most issues come down to one of a few areas: script installation, CRM connectivity, or campaign configuration. Run through the Quick Diagnostics below first — many problems are fixed in a few minutes.
:::

## Quick Diagnostics Checklist

Run through this checklist first. Most issues resolve with one of these checks:

| Check | How to Verify | Quick Fix |
|-------|---------------|-----------|
| **Script installed** | Open browser DevTools → Network → filter "abmatic" | [Install script guide](/getting-started/install-script) |
| **Script verified** | The **Installation** page shows Status: **Active** | Wait a few minutes after install, then revisit your site |
| **CRM connected** | The **Integrations** page shows the CRM as **Active** | Click **SETTINGS** → re-authorize, or Disconnect and Connect again |
| **Modern browser** | Using Chrome, Firefox, Safari, or Edge | Update to the latest version |
| **No ad blocker interference** | Disable extensions temporarily | Allow `*.abmatic.ai` in your blocker |

![Installation page showing the Status indicator set to Active after the script detects its first visitor](/img/screenshots/ts-install-verify.png)
*On the Installation page, the **Status** badge turns to **Active** once Abmatic AI detects the first visitor on your site. You'll also see when the last visitor was seen.*

---

## Issues by Category

### Script & Tracking Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Script not loading | CSP blocking or incorrect placement | Make sure CSP allows `clients.abmatic.ai`; verify the script is in `<head>` |
| No visitors appearing | Script not detected yet | Open the **Installation** page and confirm Status shows **Active** |
| Low identification rate | Normal behavior | Identification depends on the visitor's network — corporate traffic resolves best (see [rates](/troubleshooting/script-issues#visitors-not-identified-company-unknown)) |
| SPA pages not tracking | Script loaded too late | The script tracks route changes automatically — make sure it loads on the first render |
| Form data not captured | Custom form library | Use manual form tracking with `window.abmatic.identify(...)` |

**[Complete Script Troubleshooting →](/troubleshooting/script-issues)**

### CRM Integration Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Sync failing | Expired authentication | Go to **Settings → Integrations** → open the CRM **SETTINGS** → re-authorize |
| Data not appearing in CRM | Field mapping mismatch | Review **Field Mapping** for the CRM |
| Duplicate records | Matching rules too loose | Tighten domain/email matching in **Matching Rules** |
| Sync delay | Normal processing time | Allow time for the sync to complete; use **Sync Logs** to check |
| Permission errors | Insufficient CRM access | Connect with an admin or dedicated integration user |

**[Complete CRM Troubleshooting →](/troubleshooting/crm-sync)**

### Campaign Issues

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Personalization not showing | Campaign inactive or targeting mismatch | Check the campaign **Status** and **Audience** rules |
| Wrong content displayed | Multiple campaigns competing | Reorder the **Preference** column to set priority |
| Editor not loading | Browser cache or page security headers | Clear cache, try incognito, check X-Frame-Options/CSP |
| No analytics data | New campaign or low traffic | Allow 24–48 hours for data to collect |
| A/B test inconclusive | Insufficient sample size | Wait for more traffic to reach significance |

**[Complete Campaign Troubleshooting →](/troubleshooting/campaign-issues)**

### AI Agents, Oracle & Agentic Chat

Abmatic AI's autonomous features have their own common questions.

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Agentic Chat widget not appearing | Tracking script not loaded, or chat campaign inactive | Confirm the Installation status is **Active** and the Agentic Chat campaign is live |
| Chat not booking meetings | Email handoff or calendar not configured | In the Agentic Chat campaign, set the email-handoff mode (book a meeting / send a thank-you / show a HubSpot form) and connect **Google Calendar** under Integrations |
| Oracle Goals / Oracle Inbox not visible | The Oracle product is feature-flagged and may be off for your account | If you see a "not enabled for your account" message, that's expected — request access from your Abmatic AI rep or email support@abmatic.ai |
| Oracle actions not running | Trust tier set to **supervised** | High-impact actions need approval in the **Oracle Inbox**; review and approve pending items |

:::info Oracle availability
Oracle (Oracle Goals and the Oracle Approvals/Inbox) is gated behind a feature flag and may not appear for every account. A "not enabled for your account" screen is the correct current state, not an error. To enable it, contact your Abmatic AI representative or email support@abmatic.ai.
:::

### Integrations & Calendar

| Problem | Most Likely Cause | Solution |
|---------|-------------------|----------|
| Google Calendar not connected | Authorization not completed | Go to **Settings → Integrations → Google Calendar → SETTINGS** and complete authorization |
| Meeting links not generated | Zoom not connected | Connect **Zoom** under **Settings → Integrations** to create meeting links |
| Slack alerts not arriving | App not in channel or missing scopes | Reconnect Slack and invite the bot to the channel |

**[Complete CRM & Integration Troubleshooting →](/troubleshooting/crm-sync)**

---

## Error Messages Explained

When you see an error, find it below for a clear explanation and fix. For a complete list, see [Common Error Messages](/troubleshooting/common-errors).

### Rate Limit Errors

**Error:** `Request failed with status code 429`

**What this means:** You've exceeded the request limit, usually from bulk operations or rapid page refreshes.

**How to fix:**
1. Wait 2–3 minutes, then retry your action
2. For bulk operations, process records in smaller batches
3. If this happens frequently, contact support to review your limits

### Server Errors

**Error:** `Request failed with status code 500`

**What this means:** Our servers hit an unexpected issue processing your request.

**How to fix:**
1. Refresh the page and try again
2. Clear your browser cache and cookies for `app.abmatic.ai`
3. If it persists, our team is likely already on it — try again in a few minutes
4. Still seeing it? Email support@abmatic.ai with the action you took, the exact time, and a screenshot

### Session Errors

**Error:** `Account not found. Signing out.`

**What this means:** Your session expired or there's an account access issue.

**How to fix:**
1. Sign in again with your credentials
2. If you can't sign in, contact your account administrator
3. Confirm your user is still active in **Settings → Users**

### Authentication Errors

**Error:** `Authentication failed` (CRM integrations)

**What this means:** The connection to your CRM was lost — often after a password change or expired OAuth token.

**How to fix:**
1. Go to **Settings → Integrations**
2. Open the affected CRM's **SETTINGS** and re-authorize (or Disconnect, then Connect)
3. Complete the authorization flow with valid credentials
4. **Tip:** Use a dedicated service account for integrations so password changes don't break the connection

---

## Before Contacting Support

Gather this information for a faster resolution:

| Category | What to Provide |
|----------|-----------------|
| **Account details** | Your login email and company name |
| **Issue description** | What you were trying to do, and what happened instead |
| **Steps to reproduce** | Numbered steps to recreate the issue |
| **Browser info** | Browser name/version, operating system |
| **Timing** | When the issue started; intermittent or constant |
| **Evidence** | Screenshots, error messages, or a screen recording |

### How to Capture Helpful Screenshots

1. **Full page context:** Capture the whole page, not just the error
2. **Browser console:** Press F12, open the Console tab, screenshot any red errors
3. **Network tab:** If a page won't load, capture the Network tab with failed requests
4. **URL visible:** Include the address bar in your screenshot

---

## Getting Help

**Self-service resources:**
- [Frequently Asked Questions](/faq/general) — Answers to common questions
- [Script Issues](/troubleshooting/script-issues) — Tracking and installation help
- [CRM Sync Issues](/troubleshooting/crm-sync) — Integration troubleshooting
- [Campaign Issues](/troubleshooting/campaign-issues) — Personalization and targeting help

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
</content>
</invoke>
