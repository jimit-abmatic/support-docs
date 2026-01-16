---
id: common-errors
title: Common Error Messages
sidebar_label: Error Messages
sidebar_position: 5
---

# Common Error Messages

Encountering an error can be frustrating, but most issues have simple solutions. This reference guide helps you quickly identify and resolve error messages in Abmatic AI.

:::tip Quick Lookup
Press **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for your specific error message.
:::

## Error Quick Reference

Find your error type instantly:

| Error Category | Common Causes | Typical Resolution Time |
|----------------|---------------|------------------------|
| [HTTP Errors (400-500)](#http-error-codes) | Network, permissions, server | 1-5 minutes |
| [Authentication](#authentication-errors) | Session expired, credentials | 1-2 minutes |
| [CRM Integration](#crm-integration-errors) | Token expired, permissions | 5-10 minutes |
| [Slack Integration](#slack-integration-errors) | Bot permissions, channels | 2-5 minutes |
| [Campaign & Editor](#campaign--editor-errors) | Page security, elements | 5-15 minutes |
| [Data & Analytics](#data--analytics-errors) | Date range, filters | 1-5 minutes |

---

## HTTP Error Codes

These standard HTTP errors indicate what went wrong with your request.

### 400 Bad Request

**What it means:** The request couldn't be processed due to invalid data.

| Cause | Solution |
|-------|----------|
| Required field missing | Complete all required form fields |
| Invalid data format | Check email format, number ranges, date formats |
| Validation failed | Review highlighted fields for specific errors |
| Corrupted browser data | Clear browser cache and cookies, then retry |

:::info Self-Resolution Rate: 95%
Most 400 errors are resolved by checking required fields and data formats.
:::

---

### 401 Unauthorized

**What it means:** Your session has ended or credentials are invalid.

| Solution | Details |
|----------|---------|
| Log in again | Your session may have timed out |
| Check account status | Verify with your administrator that your account is active |
| Reset password | Use "Forgot Password" if you can't remember your credentials |

---

### 403 Forbidden

**What it means:** You don't have permission to perform this action.

| Cause | Solution | Who Can Help |
|-------|----------|--------------|
| Missing role permissions | Request appropriate role from admin | Workspace Admin |
| Feature not on your plan | Upgrade to access this feature | Account Owner |
| Account-level restriction | Check account settings | Account Owner |

:::tip Check Your Role
Go to **Settings** > **Users** to see your assigned role and permissions.
:::

---

### 404 Not Found

**What it means:** The page or resource doesn't exist.

| Cause | Solution |
|-------|----------|
| Resource deleted | Search for the content—it may have been moved or removed |
| Outdated bookmark | Navigate using the app menu instead |
| Typo in URL | Double-check the URL for errors |
| Moved location | The item may have been renamed or reorganized |

---

### 429 Too Many Requests

**What it means:** You've temporarily exceeded the rate limit.

| Cause | Solution | Wait Time |
|-------|----------|-----------|
| Rapid API calls | Pause and retry in a few minutes | 1-5 minutes |
| Multiple browser tabs | Close extra tabs making requests | Immediate |
| Bulk operations | Slow down batch processing | 1-5 minutes |
| Heavy usage | Contact support for limit increase | Varies |

---

### 500 Internal Server Error

**What it means:** Something unexpected happened on our servers.

**Quick steps:**
1. **Wait 30 seconds** and refresh the page
2. **Try again** - transient issues often resolve automatically
3. **Clear cache** if the error persists
4. **Contact support** if it continues (we're likely already aware and working on it)

**When contacting support, include:**

| Information | Why It Helps |
|-------------|--------------|
| Error timestamp | Helps us find the exact issue in our logs |
| What you were doing | Helps us reproduce and diagnose |
| Screenshot | Shows any specific error details |
| Browser/device | Some issues are browser-specific |

---

## Authentication Errors

### "Account not found. Signing out."

**What it means:** Your user account couldn't be verified in the system.

| Cause | Solution |
|-------|----------|
| Account deactivated | Contact your workspace administrator |
| Removed from workspace | Request re-invitation from workspace admin |
| Session data corrupted | Clear browser cookies for app.abmatic.ai |
| Account migration issue | Contact support@abmatic.ai |

---

### "Invalid credentials"

**What it means:** The email or password you entered doesn't match our records.

| Check | Solution |
|-------|----------|
| Email address | Ensure you're using the email registered with Abmatic |
| Password | Use "Forgot Password" to reset if unsure |
| Caps Lock | Passwords are case-sensitive |
| Account locked | Contact your administrator after multiple failed attempts |

:::tip Password Reset
Click **"Forgot Password"** on the login page—you'll receive a reset link within minutes.
:::

---

### "Session expired"

**What it means:** You've been inactive for too long and need to log in again.

**This is normal security behavior.** Sessions expire after periods of inactivity to protect your account.

| Tip | Benefit |
|-----|---------|
| Save work frequently | Prevents loss if session expires |
| Use browser autofill | Makes re-logging in quick |
| Check "Remember me" | Extends session duration (if available) |

---

## CRM Integration Errors

### "Authentication failed" / "Invalid Grant"

**What it means:** The connection between Abmatic and your CRM has expired or been revoked.

| Cause | Why It Happens |
|-------|----------------|
| Password changed | CRM requires re-authorization when credentials change |
| Token expired | OAuth tokens have limited lifespans |
| Admin revoked access | Your CRM admin disconnected the integration |
| User deactivated | The connected user account was disabled |

**Resolution steps:**

1. Go to **Integrations** in Abmatic
2. Find your CRM and click **Disconnect**
3. Click **Connect** and complete the authorization flow
4. Your data and settings will remain intact

:::tip Stability Best Practice
Use a dedicated "integration user" account rather than a personal account. This prevents disruption when employees change passwords or leave the company.
:::

---

### "Insufficient privileges" / "Missing permissions"

**What it means:** The connected CRM user account doesn't have the required permissions.

**Salesforce Required Permissions:**

| Permission | Purpose | Required For |
|------------|---------|--------------|
| API Enabled | Connect via API | All operations |
| View All Data | Read CRM records | Syncing accounts/contacts |
| Modify All Data | Write to CRM | Creating/updating records |

**HubSpot Required Scopes:**

| Scope | Purpose |
|-------|---------|
| crm.objects.contacts.read | Read contact records |
| crm.objects.contacts.write | Create/update contacts |
| crm.objects.companies.read | Read company records |
| crm.objects.companies.write | Create/update companies |

**Resolution:** Have your CRM administrator grant the required permissions, then reconnect the integration.

---

### "API limit exceeded"

**What it means:** You've reached your CRM's API rate limit for the current period.

| CRM | Typical Limit | Reset Period |
|-----|---------------|--------------|
| Salesforce | Varies by edition (15K-100K+/day) | Daily |
| HubSpot | 100-500K calls/day depending on plan | Daily |
| Pipedrive | 10 calls/second | Per second |

**Solutions:**

| Action | Impact |
|--------|--------|
| Wait for reset | Limits typically reset at midnight (CRM timezone) |
| Reduce sync scope | Sync only essential objects/fields |
| Contact CRM vendor | Request limit increase if needed regularly |

---

### "Duplicate record"

**What it means:** Abmatic tried to create a record that already exists in your CRM.

| Solution | Details |
|----------|---------|
| Review matching rules | Go to **Integrations** > **Sync Settings** > **Matching Rules** |
| Clean up CRM duplicates | Merge or delete duplicate records in your CRM |
| Adjust deduplication | Configure stricter matching (domain, email, company name) |

:::info Good News
This error prevents unwanted duplicates—your data stays clean!
:::

---

## Slack Integration Errors

### "Missing scope"

**What it means:** The Abmatic Slack app doesn't have all required permissions.

**Resolution:**
1. Go to **Integrations** > **Slack**
2. Click **Disconnect**
3. Click **Connect** and **approve all requested permissions**
4. Select your notification channel

Can't grant permissions? Your Slack workspace may require admin approval for apps.

---

### "Invalid name specials"

**What it means:** The Slack channel name contains invalid characters.

**Slack channel naming rules:**

| Allowed | Not Allowed |
|---------|-------------|
| Lowercase letters (a-z) | Uppercase letters |
| Numbers (0-9) | Spaces |
| Hyphens (-) | Underscores, periods |
| | Special characters (!@#$%^&*) |

**Example:** `abmatic-alerts` is valid, `Abmatic_Alerts!` is not.

---

### "Not in channel"

**What it means:** The Abmatic bot hasn't been added to the target Slack channel.

**Add the bot:**
1. Open your target Slack channel
2. Type `/invite @Abmatic` and press Enter
3. Or: Click the channel name > **Settings** > **Add apps** > Select Abmatic

:::tip Private Channels
For private channels, you must explicitly invite the Abmatic bot—it can't join automatically.
:::

---

## Campaign & Editor Errors

### "Failed to load page"

**What it means:** The visual editor couldn't display your website page.

| Cause | Solution | Requires |
|-------|----------|----------|
| X-Frame-Options header | Add `ALLOW-FROM` for Abmatic domains | Web team |
| Content Security Policy | Update CSP to allow app.abmatic.ai | Web team |
| Login required | Use a public page or configure auth bypass | Web team |
| Incorrect URL | Verify the page URL is correct and live | Self |
| VPN/network block | Try from a different network | Self |

:::info Most Common Cause
**Security headers** are the #1 reason pages don't load in the editor. Contact your web team to allow iframing from Abmatic.
:::

**See also:** [Page Editor Troubleshooting](/campaigns/page-editor#troubleshooting)

---

### "Element not found"

**What it means:** An element you previously selected for personalization no longer exists on the page.

| Cause | What Happened |
|-------|---------------|
| Website redesign | Page structure changed |
| Dynamic content | Element loads after editor initialized |
| ID/class changed | Element identifier was modified |
| A/B test variant | Element only exists in some variants |

**Resolution:**
1. Open the campaign in the editor
2. The affected element will be highlighted
3. Re-select the element or update your personalization
4. Save and republish

---

### "Changes couldn't be saved"

**What it means:** Your edits failed to save to our servers.

| Solution | Details |
|----------|---------|
| Check internet connection | Verify you're online |
| Refresh and retry | Reload the editor page |
| Save smaller batches | Large changes may timeout—save incrementally |
| Copy your work | Before refreshing, copy any unsaved changes |

---

## Data & Analytics Errors

### "No data available"

**What it means:** There's nothing to display for your selected criteria.

| Cause | Solution |
|-------|----------|
| Date range too narrow | Expand to last 7 or 30 days |
| New campaign/feature | Wait 24-48 hours for data to accumulate |
| Overly restrictive filters | Remove or broaden filter criteria |
| Tracking not configured | Verify your script is installed correctly |

:::tip New Campaigns
Data typically appears within **24-48 hours** of campaign launch. Allow time for visitors to trigger your personalization.
:::

---

### "Report failed to generate"

**What it means:** The analytics query couldn't complete processing.

| Cause | Solution |
|-------|----------|
| Large data set | Try a smaller date range (e.g., 7 days instead of 90) |
| Complex query | Simplify filters—remove some conditions |
| Server timeout | Wait a few minutes and retry |
| Peak usage time | Try again during off-peak hours |

For **very large data requests** (multi-year, millions of records), contact support—we can generate custom exports.

---

## Error Prevention Tips

Minimize errors with these best practices:

| Best Practice | Prevents |
|---------------|----------|
| Use a dedicated CRM integration user | Authentication and permission errors |
| Save work frequently | Lost changes from session timeouts |
| Keep browser updated | Compatibility issues |
| Bookmark the app (not specific pages) | 404 errors from changed URLs |
| Monitor API usage | Rate limit errors |

---

## Getting Help

If your error isn't listed here or you need additional assistance:

**Contact:** support@abmatic.ai

**Include in your message:**

| Information | Format |
|-------------|--------|
| Exact error message | Screenshot or copy-paste |
| What you were doing | Step-by-step description |
| Time and date | Include your timezone |
| Browser and version | e.g., Chrome 120, Safari 17 |
| Steps to reproduce | How to trigger the error |

**Response times:**

| Plan | Response Time |
|------|---------------|
| Standard | Within 24 business hours |
| Professional | Within 8 business hours |
| Enterprise | Within 4 business hours |

---

## Related Resources

- [Script Installation Troubleshooting](/troubleshooting/script-issues) - Tracking and installation errors
- [CRM Sync Troubleshooting](/troubleshooting/crm-sync) - Detailed CRM error resolution
- [Campaign Troubleshooting](/troubleshooting/campaign-issues) - Campaign-specific errors
- [Troubleshooting Overview](/troubleshooting/troubleshooting-overview) - General troubleshooting guide
