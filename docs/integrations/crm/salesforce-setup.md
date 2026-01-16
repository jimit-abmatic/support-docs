---
id: salesforce-setup
title: "Salesforce Setup: Step-by-Step Guide"
sidebar_label: Salesforce Setup Guide
sidebar_position: 0
---

# Salesforce Setup: Step-by-Step Guide

Connect Salesforce to Abmatic AI in under 20 minutes and unlock the full power of your CRM data for ABM personalization.

## Why Connect Salesforce?

| Before Integration | After Integration |
|-------------------|-------------------|
| CRM data siloed from website | Unified view of accounts across channels |
| Manual list management | Automatic sync keeps data fresh |
| No visibility into website engagement | Salesforce records enriched with engagement data |
| Campaigns disconnected from web personalization | Full attribution from web visit to closed deal |

## Before You Start

### What You'll Need

| Requirement | Details |
|-------------|---------|
| **Salesforce Edition** | Enterprise, Unlimited, Developer, or Performance (API access required) |
| **User Permissions** | System Administrator profile OR custom profile with API Enabled + Modify All Data |
| **Setup Time** | 15-20 minutes for initial configuration |
| **Admin Access** | Ability to authorize OAuth connections |

:::tip Check Your Edition
In Salesforce: **Setup** → **Company Information** → Look for "Organization Edition"

**Not included:** Essentials and Professional editions don't include API access by default (API add-on can be purchased).
:::

---

## Step 1: Start the Connection

1. In Abmatic, navigate to **Settings** → **Integrations**
2. Find **Salesforce** in the CRM section
3. Click **Authorize** to begin

![Integrations page showing Salesforce card](/img/screenshots/integrations-hub.png)
*Find Salesforce in the CRM Platforms section and click Authorize to connect.*

---

## Step 2: Authorize Abmatic in Salesforce

1. A Salesforce login window opens
2. Enter your Salesforce credentials
3. Click **Log In**

:::warning Use a Dedicated Integration User
For production environments, create a dedicated "Abmatic Integration" user rather than using personal credentials. This ensures:
- Sync continues if team members leave
- Clear audit trail for changes
- Simplified permission management
:::

---

## Step 3: Grant Permissions

Review and approve the permissions Abmatic needs:

| Permission | Why It's Needed |
|------------|-----------------|
| **Access basic information** | Identify the connected Salesforce org |
| **Access and manage data** | Sync accounts, contacts, leads, and opportunities |
| **Perform requests at any time** | Enable scheduled background syncs |

Click **Allow** to authorize the connection.

---

## Step 4: Configure Sync Settings

After authorization, the Settings dialog opens with tabs for each object type:

| Tab | What It Controls |
|-----|------------------|
| **Accounts** | Company records syncing |
| **Contacts** | Contact records syncing |
| **Leads** | Lead records syncing (Salesforce-specific) |
| **Opportunities** | Deal/pipeline syncing |
| **Campaigns** | Salesforce Campaign sync (Salesforce-specific) |
| **Activity Log** | View sync history and errors |

### Object-Level Sync Settings

For each object, configure the sync direction:

| Setting | What It Does | Recommendation |
|---------|--------------|----------------|
| **Create in Salesforce** | Push new records from Abmatic to Salesforce | Enable for revealed companies |
| **Update in Salesforce** | Update existing Salesforce records | Enable for enrichment data |
| **Create in Abmatic** | Pull new records from Salesforce | Enable for initial import |
| **Update in Abmatic** | Keep Abmatic updated with Salesforce changes | Enable for ongoing sync |

**First-time setup recommendation:** Start with "Create in Abmatic" and "Update in Abmatic" only. Add export capabilities after reviewing the initial data sync.

---

## Step 5: Configure Field Mapping

Map Salesforce fields to Abmatic fields to control how data flows:

### Sync Direction Options

| Option | Behavior | Use When |
|--------|----------|----------|
| **Don't sync** | Field is not transferred | Field is irrelevant or sensitive |
| **Fill** | Only sync if destination is empty | Preserve existing data |
| **Overwrite** | Always sync, replacing existing values | Abmatic data is authoritative |

### Default Account Field Mappings

| Salesforce Field | Abmatic Field | Sync Direction |
|------------------|---------------|----------------|
| Name | name | Both ways |
| Website | website | Both ways (primary key) |
| Industry | industry | Both ways |
| NumberOfEmployees | employee_count | Both ways |
| AnnualRevenue | revenue | Both ways |
| BillingCountry | country | Both ways |
| BillingCity | city | Both ways |

### Default Contact/Lead Mappings

| Salesforce Field | Abmatic Field | Sync Direction |
|------------------|---------------|----------------|
| Email | work_email | Both ways (primary key) |
| FirstName | first_name | Both ways |
| LastName | last_name | Both ways |
| Title | job_title | Both ways |
| Phone | phone | Both ways |

### Adding Custom Field Mappings

1. Click **Add Mapping** at the bottom of the field list
2. Select the Salesforce field from the dropdown
3. Select the corresponding Abmatic field
4. Choose sync direction (Don't sync / Fill / Overwrite)
5. Check "Sync to Abmatic" if data should flow into Abmatic

:::info Primary Keys
**Website** (for Accounts) and **Work Email** (for Contacts/Leads) are required mappings that cannot be removed. These are used to match records between systems.
:::

---

## Step 6: Set Sync Frequency

Choose how often Abmatic checks for changes:

| Frequency | Best For | API Impact |
|-----------|----------|------------|
| **Every 1 hour** | High-activity teams, real-time campaigns | Higher API usage |
| **Every 6 hours** | Standard usage | Moderate API usage |
| **Every 12 hours** | Large databases | Lower API usage |
| **Every 24 hours** | Stable data, minimal changes | Minimal API usage |
| **Manual only** | Full control, on-demand sync | No automatic API calls |

### Auto-Push Setting

Enable **"Automatically push changes to Salesforce"** to have Abmatic push updates whenever records change, without waiting for the next scheduled sync.

:::info API Limits
Salesforce enforces daily API call limits based on your edition. If you're hitting limits:
- Reduce sync frequency
- Limit the number of synced objects
- Contact your Salesforce admin about increasing limits
:::

---

## Step 7: Save and Start Initial Sync

1. Click **Save** to store your configuration
2. Click **Sync [Object] Manually** to start the initial import

### Initial Sync Times

| Database Size | Expected Time |
|---------------|---------------|
| Under 1,000 records | 2-5 minutes |
| 1,000-10,000 records | 10-30 minutes |
| 10,000-50,000 records | 30-60 minutes |
| 50,000+ records | 1+ hours |

A confirmation dialog appears when sync starts. Records will appear in Abmatic as they're processed.

---

## Step 8: Verify the Connection

After sync completes:

1. Go to **Audiences** → **Accounts**
2. Look for a new collection labeled "Salesforce Import" or check the "All" tab
3. Click any account to verify field data was synced

### Check Sync Status

Return to **Settings** → **Integrations** → **Salesforce** → **Settings**:

- **Last Sync with Salesforce:** When Abmatic last pushed data to Salesforce
- **Last Sync with Abmatic:** When Abmatic last pulled data from Salesforce

### Review Activity Logs

Click the **Activity Log** tab to see:
- Recent sync operations
- Record counts
- Any errors or warnings

---

## Salesforce-Specific Features

### Leads Tab

Unlike other CRMs, Salesforce has separate Lead and Contact objects. Abmatic syncs both:

| Object | Maps To | Primary Key |
|--------|---------|-------------|
| Salesforce Contact | Abmatic Contact | Email |
| Salesforce Lead | Abmatic Contact | Email |

When a lead converts in Salesforce, Abmatic tracks the relationship automatically.

### Campaigns Tab

Sync Salesforce Campaign membership for attribution:

| What Syncs | Why It Matters |
|------------|----------------|
| Campaign members | Attribute website personalization to CRM campaigns |
| Campaign status | Track which campaigns are active |
| Member status | See progression through campaign stages |

### Opportunity Tab

Import opportunity data for revenue attribution:

| Field | Use Case |
|-------|----------|
| Amount | Track pipeline influenced by personalization |
| Stage | Target accounts by deal stage |
| Close Date | Prioritize accounts with upcoming closes |

---

## Troubleshooting

### Connection Issues

| Error | Cause | Solution |
|-------|-------|----------|
| "Invalid Grant" | OAuth token expired or revoked | Click **Reconnect** to re-authorize |
| "Insufficient Privileges" | User lacks API permissions | Add "API Enabled" to user profile |
| "Request limit exceeded" | Daily API limit hit | Reduce sync frequency or wait until reset |

### Sync Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| No records syncing | No sync direction enabled | Enable "Create in Abmatic" for the object |
| Missing fields | Field not mapped | Add mapping in Settings |
| Duplicate records | Multiple matches on primary key | Ensure unique websites/emails |
| Stale data | Sync frequency too low | Increase frequency or sync manually |

### Data Quality Issues

| Problem | Solution |
|---------|----------|
| Wrong data in fields | Check sync direction (Fill vs Overwrite) |
| Custom fields not appearing | Add custom field mapping manually |
| Leads/Contacts duplicated | Check if same email exists as both Lead and Contact |

---

## Next Steps

After setup, explore these features:

| Feature | Link |
|---------|------|
| Configure sync behavior details | [Sync Behavior](/integrations/crm/sync-behavior) |
| Import specific Salesforce views | [CRM Import](/audiences/crm-sync) |
| Push enriched data back | [Push to CRM](/audiences/crm-sync#pushing-to-crm) |
| Sync Salesforce Campaigns | [CRM Campaigns](/campaigns/crm-campaigns) |

---

## Need Help?

If you encounter issues:
- Check the [Salesforce Integration reference](/integrations/crm/salesforce) for detailed feature documentation
- Review the Activity Log for specific error messages
- Contact support@abmatic.ai with your sync logs
