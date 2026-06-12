---
id: hubspot-setup
title: "HubSpot Setup: Connect in Minutes"
sidebar_label: HubSpot Setup Guide
sidebar_position: 1
---

# HubSpot Setup: Connect in Minutes

Connect HubSpot to Abmatic AI and unlock powerful ABM capabilities. This step-by-step guide walks you through the entire setup process.

## Why Connect HubSpot?

| Before Connection | After Connection |
|-------------------|------------------|
| Manual data entry between systems | Automatic bidirectional sync |
| Stale account data | Real-time enriched profiles |
| No website visitor context in CRM | Full engagement history in HubSpot |
| Generic outreach | Personalized campaigns based on CRM data |

## Before You Start

### What You'll Need

| Requirement | Details |
|-------------|---------|
| **HubSpot Account** | Any tier (Free CRM, Starter, Professional, or Enterprise) |
| **Admin Access** | Super Admin, or an Admin who is allowed to install marketplace/connected apps in your HubSpot account |
| **Abmatic AI Account** | Active account with the tracking script installed |

:::note Permission naming
HubSpot controls who can install third-party apps through the **App Marketplace Access** permission set. If you can browse and install apps from the HubSpot App Marketplace, you have what you need to connect Abmatic AI. If you are unsure, a Super Admin can always complete the connection for you.
:::

### Feature Availability by HubSpot Tier

| Feature | Free CRM | Starter | Professional | Enterprise |
|---------|----------|---------|--------------|------------|
| Company sync | Yes | Yes | Yes | Yes |
| Contact sync | Yes | Yes | Yes | Yes |
| Deal/Opportunity sync | No | Yes | Yes | Yes |
| Lifecycle stage sync | No | Yes | Yes | Yes |
| Custom properties | Limited | Yes | Yes | Yes |
| Higher API limits | No | No | Yes | Yes |

:::tip Check Your Subscription
In HubSpot: **Settings** (gear icon) > **Account & Billing** > **Products & Add-ons**
:::

---

## Step 1: Start the Connection

1. In Abmatic AI, click **Settings** in the left sidebar
2. Click the **Integrations** tab
3. Find the **HubSpot** card in the **Customer Relationship Management (CRM)** section
4. Click **Authorize** (or the **Settings** gear if HubSpot is already connected)

![Integrations page with the HubSpot card in the CRM section](/img/screenshots/pd-settings.png)
*The Integrations tab under Settings. HubSpot sits in the Customer Relationship Management (CRM) row and shows a green "Active" badge once connected, with a red "Disable" button to disconnect.*

---

## Step 2: Authorize HubSpot Access

When you click Authorize, a new window opens:

1. **Sign in** to your HubSpot account (if not already logged in)
2. **Select your portal** if you have multiple HubSpot accounts
3. **Review the permissions** Abmatic AI requests
4. Click **Connect app** to authorize

### Permissions Requested

| Permission | What It Enables |
|------------|-----------------|
| Read/write companies | Sync company records bidirectionally |
| Read/write contacts | Sync contact records bidirectionally |
| Read/write deals | Sync opportunity data for pipeline visibility |
| Read/write lists | Create and manage HubSpot lists from Abmatic |
| Timeline activities | Log Abmatic AI engagement as HubSpot activities |

:::warning Multiple Portals?
If you have both sandbox and production HubSpot accounts, make sure to select the correct portal. You can always disconnect and reconnect to switch portals.
:::

---

## Step 3: Configure Sync Settings

After authorization, the HubSpot **Settings** dialog opens with a tab for each object type along the top.

![HubSpot CRM Settings dialog showing the object tabs and the object-syncing matrix](/img/screenshots/hs-setup-tabs.png)
*The HubSpot Settings dialog. The Accounts, Contacts, Opportunities and Activity Log tabs run across the top. Each object tab has a "Set object syncing" matrix with Create/Update checkboxes on both sides, a "Set up filters for pushing records" section, and a "Set field mapping" table further down.*

### Understanding the Settings Interface

The settings dialog includes these tabs:

| Tab | What You Configure |
|-----|-------------------|
| **Accounts** | Company sync rules and field mappings |
| **Contacts** | Contact sync rules and field mappings |
| **Opportunities** | Deal sync (imported from HubSpot; read-only in Abmatic AI) |
| **Activity Log** | View sync history and troubleshoot issues |

:::note Opportunities are read-only
The **Opportunities** tab imports your HubSpot deals into Abmatic AI so you can see and segment on pipeline data, but Abmatic AI does not create or edit deals in HubSpot. Sync for Opportunities flows HubSpot → Abmatic AI only.
:::

### Object Sync Options

Each object tab shows a **Set object syncing** matrix. For each object you turn on the operations you want, in each direction:

| Setting | What It Does | Recommendation |
|---------|--------------|----------------|
| **Create** (HubSpot side) | New Abmatic AI records are created in HubSpot | Enable for revealed companies |
| **Update** (HubSpot side) | Abmatic AI changes update existing HubSpot records | Enable to keep HubSpot fresh |
| **Create** (Abmatic side) | New HubSpot records are imported into Abmatic AI | Enable for target account lists |
| **Update** (Abmatic side) | HubSpot changes update existing Abmatic AI records | Enable for two-way sync |

The **Sync** chip in the middle of the matrix updates to show the resulting direction: **Sync both ways**, **Sync into HubSpot**, **Sync into Abmatic**, or **Not syncing**.

**First-time setup tip:** Start by importing from HubSpot only (turn on the Abmatic-side Create/Update). Add the HubSpot-side operations after you have reviewed the data quality.

### Filter Which Records Push to HubSpot

Below the object-syncing matrix, the **Set up filters for pushing records** section lets you limit which accounts or contacts are pushed to HubSpot. Only records matching your filters are pushed; leave it empty to push all records. A "N filter(s) active" chip shows when a filter is in place. This is useful when, for example, you only want to push companies above a certain employee count or revenue.

---

## Step 4: Map Your Fields

Field mapping ensures data flows correctly between systems.

### Default Company Mappings

| HubSpot Property | Abmatic Field | Notes |
|------------------|---------------|-------|
| `name` | Company Name | Primary display name |
| `domain` | Website | **Primary key** - used for matching |
| `industry` | Industry | For segmentation and targeting |
| `numberofemployees` | Employee Count | Company size filter |
| `annualrevenue` | Revenue | Revenue-based targeting |
| `country` | Country | Location targeting |
| `city` | City | Granular location data |

### Default Contact Mappings

| HubSpot Property | Abmatic Field | Notes |
|------------------|---------------|-------|
| `email` | Work Email | **Primary key** - used for matching |
| `firstname` | First Name | Personalization |
| `lastname` | Last Name | Personalization |
| `jobtitle` | Job Title | Role-based targeting |
| `company` | Company Name | Company association |
| `phone` | Phone | Contact information |

### Sync Direction Options

For each field mapping, choose how data flows:

| Option | Behavior | Best For |
|--------|----------|----------|
| **Don't sync** | Field ignored | Fields you manage separately |
| **Fill** | Only sync if destination is empty | Preserving existing data |
| **Overwrite** | Always sync, replacing existing | Keeping data authoritative |

### Adding Custom Properties

1. Click **Add Mapping** at the bottom of the field list
2. Select the HubSpot property from the dropdown
3. Choose or create the matching Abmatic field
4. Set the sync direction (Fill or Overwrite)
5. Click **Save**

:::tip Custom Properties
Map your most important custom HubSpot properties (like `icp_tier`, `buying_stage`, or industry-specific fields) to use them in Abmatic campaigns.
:::

---

## Step 5: Set Sync Frequency

Configure how often Abmatic AI checks for changes.

### Polling Options

| Setting | Behavior | Best For |
|---------|----------|----------|
| **Manual only** | Sync only when you click "Sync" | Full control, testing |
| **Automatic** | Check on schedule | Production use |

### Recommended Frequencies

| Database Size | Recommended Frequency | Why |
|---------------|----------------------|-----|
| Under 1,000 records | Every 1-2 hours | Real-time campaigns |
| 1,000-10,000 records | Every 6 hours | Balance speed and API usage |
| 10,000+ records | Every 12-24 hours | Stay within API limits |

### Auto-Push Setting

Enable **"Automatically push changes to HubSpot"** to:
- Push newly revealed companies immediately
- Sync enrichment data as it's collected
- Keep engagement scores updated

---

## Step 6: Run Your First Sync

1. Review all your settings
2. Click **Save** to save your configuration
3. Click **Sync Accounts Manually** to start the initial import

### Initial Sync Times

| Record Count | Estimated Time |
|--------------|----------------|
| Under 1,000 | 2-5 minutes |
| 1,000-10,000 | 10-30 minutes |
| 10,000-50,000 | 30-60 minutes |
| 50,000+ | 1-2 hours |

You can continue using Abmatic AI while the sync runs in the background.

---

## Step 7: Verify Your Connection

After the sync completes:

### Check Your Data

1. Go to **Audiences** > **Accounts** > **All Accounts**
2. Look for companies with HubSpot data (industry, lifecycle stage, etc.)
3. Click any account to see the full synced profile

### Check Sync Logs

1. Go to **Settings** > **Integrations** > **HubSpot**
2. Click the **Activity Log** tab
3. Review recent sync operations

| Log Entry | Meaning |
|-----------|---------|
| "Synced X companies from HubSpot" | Import successful |
| "Updated X contacts in HubSpot" | Export successful |
| "Error: Rate limited" | Too many API calls - reduce frequency |
| "Error: Invalid property" | Field mapping issue - check mappings |

---

## Troubleshooting

### Connection Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| "Authorization failed" | Insufficient HubSpot permissions | Get Super Admin access or ask admin to connect |
| "Portal not found" | Wrong portal selected | Disconnect and reconnect, select correct portal |
| "Token expired" | Session timeout | Click Reconnect to re-authorize |

### Sync Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Deals not syncing | Free CRM tier | Upgrade to Starter or Professional |
| Contacts missing | No company association | Associate contacts with companies in HubSpot |
| Rate limited | Too many API calls | Reduce sync frequency or upgrade HubSpot tier |
| Fields not updating | Wrong sync direction | Check Fill vs Overwrite settings |

### Data Quality Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Duplicate records | Missing domain/email | Ensure primary key fields are populated |
| Wrong company match | Domain mismatch | Update domains in HubSpot |
| Missing enrichment | Company not found | Verify company name and domain accuracy |

---

## HubSpot-Specific Features

### Lifecycle Stage Sync

HubSpot lifecycle stages sync automatically and can be used for:

| Stage | Campaign Use Case |
|-------|-------------------|
| Subscriber | Top-of-funnel content |
| Lead | Educational nurture |
| MQL | Product-focused messaging |
| SQL | Demo/trial offers |
| Opportunity | Deal acceleration |
| Customer | Upsell/cross-sell |

### Company Domain Matching

Abmatic AI uses the HubSpot `domain` property as the primary matching key. Best practices:

- Ensure all HubSpot companies have accurate domains
- Use the root domain (e.g., `acme.com` not `www.acme.com`)
- Avoid duplicate companies with the same domain

### Timeline Activities

When enabled, Abmatic AI logs activities to HubSpot including:

- Page views on your website
- Campaign interactions
- Engagement score changes
- Form submissions

### Import HubSpot Users (Owners)

Once HubSpot is connected, you can import your HubSpot users so their ownership carries into Abmatic AI:

1. Go to the **Users** page in Settings
2. Open the menu and choose **Import from HubSpot** (this appears alongside **Import from Salesforce** when each CRM is active)

This adds a **HubSpot Owner** value to records and lets you segment and route by HubSpot owner, the same way Salesforce owners work.

:::caution Reconnect to enable owner sync
HubSpot owner import relies on an owners-read permission that was added to the integration. If you connected HubSpot before this feature shipped, **disconnect and reconnect** HubSpot so Abmatic AI can request the owner permission. Without reconnecting, owner import and owner-based meeting routing will not work.
:::

### Use HubSpot Forms in Campaigns

After connecting HubSpot, you can drop your existing HubSpot forms into Abmatic AI experiences. A HubSpot form picker is available in the popup and exit-intent Widget editors and in Agentic Chat, so visitors can submit a native HubSpot form without leaving your personalized experience.

---

## Next Steps

Now that HubSpot is connected:

| Next Step | Description |
|-----------|-------------|
| [Import target accounts](/audiences/crm-sync) | Pull your key accounts into Abmatic |
| [Configure sync behavior](/integrations/crm/sync-behavior) | Fine-tune Fill vs Overwrite settings |
| [Create a campaign](/campaigns/overview) | Use HubSpot data for personalization |
| [Full HubSpot reference](/integrations/crm/hubspot) | Detailed property and feature documentation |

---

## Need Help?

- **Connection issues?** Ensure you have HubSpot Admin access
- **Sync problems?** Check the Activity Log tab for error details
- **Still stuck?** Email support@abmatic.ai with your Activity Log export
