---
id: linkedin-ads
title: LinkedIn Ads Integration
sidebar_label: LinkedIn Ads
---

# LinkedIn Ads Integration

Connect Abmatic AI to LinkedIn Ads to reach your target accounts with precision-targeted advertising. Push your carefully curated account lists directly to LinkedIn Matched Audiences—no manual CSV exports required.

## Why Connect LinkedIn Ads?

| Without Integration | With Abmatic AI Integration |
|--------------------|----------------------------|
| Export CSVs, format for LinkedIn, upload manually | One-click push from any account collection |
| Lists go stale within weeks | Automatic sync keeps audiences current |
| Marketing and sales target different accounts | Same account list powers ads and outreach |
| No visibility into which accounts engage | Full attribution from impression to pipeline |

**The result:** LinkedIn ads that reach exactly the accounts your sales team is targeting—with complete visibility into what's working.

## What You Can Do

| Capability | Business Impact |
|-----------|-----------------|
| **Push Account Lists** | Create LinkedIn Matched Audiences from any Abmatic collection |
| **Sync Contact Lists** | Target specific people at target accounts |
| **Automatic Updates** | Dynamic lists stay current without manual intervention |
| **Campaign Creation** | Create LinkedIn campaigns directly from Abmatic |
| **Performance Tracking** | See which accounts and contacts engage with your ads |

## Getting Started

### Prerequisites

Before connecting, ensure you have:

| Requirement | Details |
|-------------|---------|
| **LinkedIn Account** | With login credentials |
| **Campaign Manager Access** | Admin role on a LinkedIn Ad Account |
| **Company Page Access** | Associated with your Ad Account |

### Step 1: Navigate to Integrations

1. Log in to Abmatic AI
2. Click **Integrations** in the left sidebar
3. Scroll down to the **Advertising** section (below CRM and Communications)
4. Find the **LinkedIn** card

![Integrations page showing CRM section - scroll down to find Advertising](/img/screenshots/integrations-hub.png)

The LinkedIn card is in the **Advertising** section alongside Google Ads and Meta.

### Step 2: Authorize LinkedIn

1. Click the **Authorize** button on the LinkedIn card
2. You'll be redirected to LinkedIn's authorization page
3. Sign in with your LinkedIn credentials (if not already logged in)
4. Review the permissions Abmatic is requesting
5. Click **Allow** to grant access

### Permissions Requested

| Permission | Why It's Needed |
|-----------|-----------------|
| **Manage ad accounts** | Create and manage Matched Audiences |
| **Read organization data** | Access your Company Page information |
| **Manage campaigns** | Create and configure LinkedIn ad campaigns |

### Step 3: Select Ad Account

If you have access to multiple LinkedIn Ad Accounts:

1. A selector will appear showing available accounts
2. Choose the Ad Account you want to use
3. Click **Confirm**

The integration will activate and show "Active" status.

## Understanding the Connection

### Integration Status

| Status | Meaning | Action |
|--------|---------|--------|
| **Active** | Connected and ready to use | Push audiences, create campaigns |
| **Inactive** | Not connected | Click Authorize to connect |
| **Error** | Connection issue | Check error message, reconnect if needed |

### What Gets Synced

When you push data to LinkedIn:

| Data Type | What LinkedIn Receives | Match Rate |
|-----------|----------------------|------------|
| **Company Domains** | Matched to LinkedIn Company Pages | 60-80% |
| **Company Names** | Secondary matching signal | Improves accuracy |
| **Contact Emails** | Matched to LinkedIn member profiles | 30-50% |

:::info Match Rates Vary
Match rates depend on your data quality and target company size. Enterprise accounts typically match better than small businesses because they have active LinkedIn Company Pages.
:::

## Using the Integration

### Creating LinkedIn Matched Audiences

Once connected, you can push account lists to LinkedIn:

1. Go to **Audiences > Accounts**
2. Select the collection(s) you want to push
3. Click **More Actions** (three dots menu)
4. Select **Create LinkedIn Matched Audience**
5. Confirm to start the sync

The process takes 24-48 hours for LinkedIn to match your data.

For detailed instructions, see: [LinkedIn Matched Audiences Guide](/audiences/linkedin-dmp)

### Creating LinkedIn Ad Campaigns

You can also create full LinkedIn campaigns from Abmatic:

1. Go to **Campaigns**
2. Click **Create Campaign**
3. Select **LinkedIn** under Advertising
4. Choose Account or Contact targeting
5. Select your collection and configure the campaign

For detailed instructions, see: [LinkedIn Campaigns Guide](/campaigns/linkedin-ads)

## Managing the Integration

### Viewing Connection Details

To see your connection details:

1. Go to **Integrations**
2. Find the LinkedIn card
3. Click **Settings** (if available)

### Disconnecting LinkedIn

If you need to disconnect:

1. Go to **Integrations**
2. Find the LinkedIn card
3. Click **Disable** or **Disconnect**
4. Confirm the disconnection

:::warning Before Disconnecting
Disconnecting will:
- Stop all audience syncs
- Prevent new campaign creation from Abmatic
- Not delete existing audiences in LinkedIn Campaign Manager
:::

### Reconnecting

If your connection expires or you need to reconnect:

1. Go to **Integrations**
2. Click **Authorize** on the LinkedIn card
3. Complete the authorization flow again

## Best Practices

### Do's

| Practice | Why It Matters |
|----------|---------------|
| Use an admin account | Ensures full access to Campaign Manager features |
| Connect to a production Ad Account | Allows real campaign creation and audience sync |
| Include domains in your account lists | Significantly improves LinkedIn match rates |
| Test with a small list first | Verify the connection before pushing large audiences |

### Don'ts

| Avoid | Why |
|-------|-----|
| Using personal LinkedIn accounts | May have limited permissions |
| Sharing credentials | Security risk and audit issues |
| Pushing incomplete data | Low match rates waste ad budget |
| Ignoring match rate reports | Low rates signal data quality issues |

## Troubleshooting

### Connection Issues

| Issue | Solution |
|-------|----------|
| Authorization fails | Clear browser cache, try incognito mode |
| "Access denied" error | Verify you have Campaign Manager admin access |
| No Ad Accounts shown | Ensure your LinkedIn account is associated with an Ad Account |
| Connection expired | Re-authorize through Integrations page |

### Sync Issues

| Issue | Solution |
|-------|----------|
| Audience not appearing in Campaign Manager | Wait 24-48 hours for processing |
| Below minimum size error | Add more accounts (need 300+ matched members) |
| "Invalid data" error | Check for special characters in company names |
| Sync stuck in progress | Check Abmatic status, contact support if persists |

### Permission Errors

| Issue | Solution |
|-------|----------|
| Can't create campaigns | Verify Campaign Manager admin access |
| Can't push audiences | Re-authorize with proper permissions |
| Read-only access | Use an account with full permissions |

## Privacy and Security

### Data Handling

- **Secure transfer:** Data is encrypted in transit to LinkedIn
- **No PII exposure:** LinkedIn matches internally—you don't see member data
- **Compliance:** Abmatic follows LinkedIn's API terms and data policies

### Access Control

- Only users with Abmatic admin access can manage integrations
- LinkedIn credentials are stored securely
- OAuth tokens refresh automatically

## Related Documentation

| Topic | Link |
|-------|------|
| Push audiences to LinkedIn | [LinkedIn Matched Audiences](/audiences/linkedin-dmp) |
| Create LinkedIn campaigns | [LinkedIn Campaigns](/campaigns/linkedin-ads) |
| Manage target accounts | [Audiences Overview](/audiences/overview) |
| Other integrations | [Integrations Overview](/integrations/overview) |
| Google Ads integration | [Google Ads Integration](/integrations/advertising/google-ads) |
