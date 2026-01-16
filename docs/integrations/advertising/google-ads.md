---
id: google-ads
title: Google Ads Integration
sidebar_label: Google Ads
---

# Google Ads Integration

Connect your Google Ads account to Abmatic AI and unlock precision advertising across Search, Display, YouTube, and Gmail. Target your exact accounts with Customer Match audiences—ensuring every ad dollar reaches the companies that matter most to your pipeline.

## Why Connect Google Ads?

| Without Integration | With Abmatic + Google Ads |
|---------------------|---------------------------|
| Manual CSV uploads to Google Ads | One-click audience sync from any list |
| Static audiences that decay | Dynamic lists that auto-update |
| No account-level visibility | Track ad engagement by company |
| Generic targeting | Target your exact ICP with Customer Match |
| Siloed advertising data | Unified ABM across Google properties |

## What You Can Do

Once connected, you can:

| Capability | Business Impact |
|------------|-----------------|
| Push account lists to Customer Match | Target known companies, not random traffic |
| Push contact lists for precision targeting | Reach decision-makers at your target accounts |
| Sync across Search, Display, YouTube, Gmail | Multi-channel ABM with one integration |
| Track engagement back to accounts | Attribute pipeline to ad spend |
| Exclude current customers | Focus budget on new opportunities |

## Getting Started

### Prerequisites

Before connecting, ensure your Google Ads account meets these requirements:

| Requirement | Details |
|-------------|---------|
| Account history | At least 90 days old |
| Payment history | Good standing, no unpaid balances |
| Policy compliance | No active policy violations |
| Total spend | $50,000+ lifetime (varies by region) |
| Admin access | You can authorize third-party integrations |

:::tip Check Customer Match Eligibility
Go to **Google Ads > Tools > Audience Manager** to verify Customer Match is available for your account. If not eligible, contact your Google representative.
:::

### Step 1: Navigate to Integrations

![Integrations page](/img/screenshots/integrations-hub.png)

1. Click **Integrations** in the main navigation
2. Scroll down to the **Advertising** section
3. Find the **Google Ads** card

### Step 2: Authorize Abmatic

1. Click the **Authorize** button on the Google Ads card
2. You'll be redirected to Google's sign-in page
3. Select the Google account that has access to your Google Ads
4. Review the permissions Abmatic is requesting
5. Click **Allow** to authorize

**Permissions requested:**

| Permission | What It Enables |
|------------|-----------------|
| View your Google Ads accounts | Identify which ad accounts you have access to |
| Manage your Google Ads campaigns | Create and update Customer Match audiences |

### Step 3: Select Your Ad Account

If you have multiple Google Ads accounts:

1. A dialog will appear with your available accounts
2. Each account shows:
   - Account name
   - Account ID
   - Currency
3. Click on the account you want to connect
4. Abmatic will complete the connection

If you have only one account, it will be selected automatically.

### Step 4: Verify the Connection

Once authorized, you'll see:
- The Google Ads card status changes to **Active** (green)
- The **Authorize** button changes to **Disable**
- A confirmation notification appears

## Understanding the Integration

### Integration Status

| Status | Meaning |
|--------|---------|
| Active (green) | Connected and ready to sync audiences |
| Inactive (gray) | Not connected, click Authorize to set up |

### What Gets Synced

Abmatic pushes audience data to Google Ads via Customer Match:

| Data Type | Format | Match Rate |
|-----------|--------|------------|
| Work emails | Hashed before upload | 30-50% |
| Personal emails | Hashed before upload | 60-80% |
| Phone numbers | Hashed before upload | 40-60% |
| Combined data | All fields together | 50-70% |

:::note Security First
All contact data is cryptographically hashed (SHA-256) before being sent to Google. Your raw customer data never leaves Abmatic unencrypted.
:::

### Audience Sync Process

When you push a list to Google Ads, Abmatic:

1. **Prepares data** - Formats and validates contact information
2. **Creates user list** - Sets up a new Customer Match audience in Google Ads
3. **Uploads user data** - Securely transfers hashed data to Google

This process typically takes 1-5 minutes depending on list size. Google then takes 24-48 hours to match users.

## Using the Integration

Once connected, you can create Customer Match audiences from:

### Account Collections

1. Go to **Accounts** > **Collections**
2. Select the collection you want to sync
3. Click the **more menu** (three dots)
4. Select **Create Google Ads Customer Match**
5. Monitor the progress stepper

### Contact Collections

1. Go to **Contacts** > **Collections**
2. Select the collection with email data
3. Click the **more menu** (three dots)
4. Select **Create Google Ads Customer Match**
5. Monitor the progress stepper

For detailed audience strategies, see:
- [Google Customer Match Guide](/audiences/google-customer-match) - Optimizing match rates and audience strategies
- [Google Ads Campaigns](/campaigns/google-ads) - Running effective campaigns with your audiences

## Managing the Integration

### Viewing Connection Details

The integration card shows:
- Connection status (Active/Inactive)
- Connected account name (after authorization)

### Disconnecting Google Ads

If you need to disconnect:

1. Go to **Integrations**
2. Find the **Google Ads** card
3. Click **Disable**
4. Confirm the disconnection

:::warning What Happens When You Disconnect
- No new audiences can be pushed to Google Ads
- Existing audiences in Google Ads remain but won't update
- You'll need to re-authorize to reconnect
:::

### Reconnecting

To connect a different account or reconnect:

1. Disable the current connection (if active)
2. Click **Authorize**
3. Sign in with the new Google account
4. Select the desired ad account

## Best Practices

### Do's

| Practice | Why |
|----------|-----|
| Verify Customer Match eligibility first | Avoid setup issues |
| Build lists with 5,000+ contacts | Better match rates and campaign reach |
| Include both work and personal emails | Significantly improves matching |
| Allow 24-48 hours after syncing | Google needs time to process matches |
| Keep source lists updated | Dynamic lists auto-sync changes |

### Don'ts

| Avoid | Why |
|-------|-----|
| Syncing lists under 1,000 contacts | Won't meet Google's minimum threshold |
| Using only work emails | Lower match rates vs. mixed data |
| Expecting immediate results | Google processing takes 24-48 hours |
| Sharing accounts across organizations | May cause policy issues |

## Troubleshooting

### Connection Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Authorization fails | Popup blocked | Allow popups for app.abmatic.ai |
| No accounts shown | Wrong Google account | Sign out and use correct account |
| Account selection empty | No Google Ads access | Verify your Google account has admin access |
| "Integration failed" error | Permission denied | Re-authorize with full permissions |

### Sync Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| "Preparing data" hangs | Large list processing | Wait up to 5 minutes for large lists |
| "Creating user list" fails | Google Ads API error | Check account status, try again |
| "Uploading user data" fails | Network timeout | Retry the sync |
| Upload succeeds but 0 matches | Processing pending | Wait 24-48 hours |

### Customer Match Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Audience not appearing | Under 1,000 matches | Add more contacts to list |
| Very low match rate | Work emails only | Add personal emails and phone numbers |
| "Not eligible" message | Account doesn't qualify | Contact Google about eligibility |
| Audience shows as "Too small" | Insufficient matches | Expand your source list |

## Privacy and Security

### Data Handling

- All data is hashed locally before transmission
- We use SHA-256 encryption (Google's required format)
- No plain-text customer data is sent to Google
- You control which lists are synced

### Access Control

- Only account admins can manage the integration
- OAuth tokens are stored securely
- You can revoke access at any time

### Compliance

- Only sync contacts with proper marketing consent
- Use first-party data you've collected directly
- Review Google's [Customer Match Policy](https://support.google.com/google-ads/answer/6334160) for requirements

## Related Documentation

| Resource | Description |
|----------|-------------|
| [Google Customer Match](/audiences/google-customer-match) | Audience strategies and match rate optimization |
| [Google Ads Campaigns](/campaigns/google-ads) | Running targeted campaigns with your audiences |
| [LinkedIn Ads Integration](/integrations/advertising/linkedin-ads) | Alternative ad platform integration |
| [Account Lists](/audiences/accounts) | Building target account lists |
| [Contact Lists](/audiences/contacts) | Creating contact collections |
