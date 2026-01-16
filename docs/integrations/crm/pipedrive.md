---
id: pipedrive
title: Pipedrive Integration
sidebar_label: Pipedrive
sidebar_position: 3
---

# Pipedrive Integration

Connect Pipedrive with Abmatic AI to synchronize your sales pipeline with your ABM activities. Enrich your Pipedrive data with website visitor intelligence and ensure your sales team always has the latest engagement information.

## Why Connect Pipedrive?

| Without Integration | With Pipedrive + Abmatic |
|---------------------|--------------------------|
| Manual data entry between systems | Automatic two-way sync keeps data fresh |
| Sales misses website engagement signals | Deals enriched with visitor activity |
| Duplicate records across tools | Single source of truth for accounts |
| No visibility into prospect research | See which pages contacts visited |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Import Organizations** | Pull your Pipedrive organizations into Abmatic for ABM targeting |
| **Push Revealed Companies** | Send identified website visitors directly to Pipedrive |
| **Sync Contact Data** | Keep contact information consistent across both platforms |
| **Enrich Deals** | Add website engagement data to your opportunities |
| **Automate Updates** | Configure automatic sync to eliminate manual work |

## Getting Started

### Prerequisites

Before connecting, ensure you have:
- A Pipedrive account with admin or appropriate permissions
- Access to Abmatic Integrations settings

### Step 1: Connect Your Pipedrive Account

1. Navigate to **Settings** → **Integrations** in the left sidebar
2. Find the **Pipedrive** card in the CRM section
3. Click **Authorize**
4. Sign in to Pipedrive when prompted
5. Grant Abmatic the requested permissions
6. You'll be redirected back to Abmatic with the connection active

![Pipedrive integration card](/img/screenshots/integrations-hub.png)
*The Integrations page showing available CRM connections including Pipedrive*

### Step 2: Configure Sync Settings

After connecting, click **Settings** on the Pipedrive card to configure:

1. **Accounts tab**: Configure organization sync
2. **Contacts tab**: Configure person sync
3. **Opportunities tab**: Configure deal sync
4. **Activity Log tab**: View sync history and errors

## Understanding What Syncs

### Object Mapping

| Pipedrive Object | Abmatic Object | Match Key |
|------------------|----------------|-----------|
| Organizations | Accounts | Website domain |
| Persons | Contacts | Email address |
| Deals | Opportunities | Pipedrive Deal ID |

### Organization Fields

Default mappings for organization sync:

| Pipedrive Field | Abmatic Field | Description |
|-----------------|---------------|-------------|
| Name | Company Name | Organization name |
| Web Address | Website | Primary domain (match key) |
| Address | Address | Full address |
| Owner | Account Owner | Assigned sales rep |
| Add Time | Created Date | When record was created |

### Person Fields

Default mappings for contact sync:

| Pipedrive Field | Abmatic Field | Description |
|-----------------|---------------|-------------|
| Name | Full Name | Contact's full name |
| Email | Work Email | Primary email (match key) |
| Phone | Phone | Contact phone number |
| Organization | Company | Associated company |
| Owner | Contact Owner | Assigned sales rep |

### Deal Fields

Default mappings for opportunity sync:

| Pipedrive Field | Abmatic Field | Description |
|-----------------|---------------|-------------|
| Title | Opportunity Name | Deal name |
| Value | Amount | Deal value |
| Currency | Currency | Deal currency |
| Stage | Stage | Pipeline stage |
| Expected Close Date | Close Date | Target close date |
| Status | Status | Won/Lost/Open |

## Configuring Sync Settings

### Sync Directions

Configure how data flows between Pipedrive and Abmatic:

| Direction | What It Does | When to Use |
|-----------|--------------|-------------|
| **Pipedrive → Abmatic** | Imports data from Pipedrive | Keep Abmatic updated with CRM changes |
| **Abmatic → Pipedrive** | Pushes data to Pipedrive | Send enriched data and revealed companies |
| **Both Ways** | Bidirectional sync | Full synchronization between systems |

### Sync Operations

For each direction, you can enable:

| Operation | Description |
|-----------|-------------|
| **Create** | Create new records when they don't exist |
| **Update** | Update existing records with new data |

### Field Mapping Options

For each field, choose how sync behaves:

| Mode | Behavior | Best For |
|------|----------|----------|
| **Don't sync** | Field is not synchronized | Fields you want to manage manually |
| **Fill** | Only fills empty fields, won't overwrite | Preserving existing Pipedrive data |
| **Overwrite** | Always updates with Abmatic value | Fields where Abmatic has better data |

### Sync Frequency

Choose when Abmatic checks for updates:

| Frequency | Best For | API Impact |
|-----------|----------|------------|
| **Manual only** | Small databases, controlled updates | Lowest |
| **Every 24 hours** | Standard use case | Low |
| **Every 6 hours** | Active sales teams | Moderate |
| **Every 1 hour** | High-velocity sales | Higher |

:::tip Optimize API Usage
Start with less frequent syncs and adjust based on your needs. More frequent polling uses more Pipedrive API calls.
:::

### Auto-Push Settings

Enable automatic pushing to have Abmatic send updates to Pipedrive whenever:
- New companies are revealed on your website
- Contact information is enriched
- Engagement scores change significantly

## Importing from Pipedrive

Import your existing Pipedrive data into Abmatic to build target account lists.

### Import Sources

| Source | Description | Best For |
|--------|-------------|----------|
| **All Organizations** | Import your entire database | Initial setup |
| **Filtered Organizations** | Import based on criteria | Specific segments |
| **Pipeline Stage** | Import deals at certain stages | Active opportunities |

### How to Import

1. Go to **Audiences** → **Accounts** (or **Contacts**)
2. Click **Create New**
3. Select **Import from CRM**
4. Choose **Pipedrive**
5. Apply any filters to narrow results
6. Select **Duplicate Handling** preference:
   - Skip duplicates
   - Update existing records
   - Create duplicates
7. Click **Import**

### Example Import Filters

```
# Import high-value prospects
Filter: Value > 10000
         AND Stage = "Proposal"
```

```
# Import recent additions
Filter: Add Time > last 30 days
         AND Owner = current user
```

## Pushing to Pipedrive

Send Abmatic data to Pipedrive to keep your sales team informed.

### Manual Push

1. Navigate to **Audiences** → **Accounts** or **Contacts**
2. Select the records you want to push
3. Click **Push to CRM**
4. Select **Pipedrive**
5. Review field mapping
6. Click **Push**

### Automatic Push

Enable automatic pushing in integration settings:

1. Go to **Settings** → **Integrations** → **Pipedrive** → **Settings**
2. In the Sync Frequency section, check **Automatically push changes to Pipedrive**
3. Save your settings

### What Gets Pushed

| Data Type | Pushed Automatically | Requires Manual Push |
|-----------|---------------------|---------------------|
| Revealed companies | ✅ (if enabled) | ✅ |
| Enriched contacts | ✅ (if enabled) | ✅ |
| Engagement scores | ✅ (if enabled) | ✅ |
| Custom fields | ❌ | ✅ |
| Account lists | ❌ | ✅ |

### Required Fields

When pushing new records to Pipedrive, these fields are required:

| Record Type | Required Fields |
|-------------|-----------------|
| Organizations | Name |
| Persons | Name, Email |
| Deals | Title, Organization or Person |

## Sync Logs and Monitoring

### Viewing Activity

1. Go to **Settings** → **Integrations** → **Pipedrive** → **Settings**
2. Click the **Activity Log** tab
3. Review sync history:
   - Timestamp of each sync
   - Records created/updated/failed
   - Error messages if any

### Understanding Sync Status

| Status | Meaning |
|--------|---------|
| `Success` | Sync completed without errors |
| `Warning` | Sync completed with some skipped records |
| `Error` | Sync failed - check error message |

### Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `Invalid API key` | Token expired or revoked | Reconnect the integration |
| `Rate limit exceeded` | Too many API calls | Reduce sync frequency |
| `Duplicate found` | Record already exists | Check duplicate handling settings |
| `Required field missing` | Missing organization name or email | Ensure records have required data |

## Best Practices

### Initial Setup

| Do | Don't |
|----|-------|
| Start with manual sync to test | Enable auto-sync immediately |
| Map only essential fields first | Map every field at once |
| Test with small batches | Import entire database first |
| Review Activity Log regularly | Ignore sync errors |

### Ongoing Management

| Do | Don't |
|----|-------|
| Keep field mappings consistent | Change mappings frequently |
| Monitor API usage | Ignore rate limit warnings |
| Clean duplicates periodically | Let duplicates accumulate |
| Update sync frequency as needed | Set and forget |

### Data Quality Tips

- **Normalize domains**: Ensure website URLs are consistent (e.g., `example.com` not `www.example.com`)
- **Standardize emails**: Use work emails, not personal addresses
- **Fill required fields**: Ensure all organizations have names and contacts have emails
- **Regular cleanup**: Remove or merge duplicate records monthly

## Use Cases

### Use Case 1: Enrich Sales Pipeline

**Goal**: Give sales reps visibility into prospect website activity

**Setup**:
1. Connect Pipedrive and enable two-way sync
2. Enable auto-push for revealed companies
3. Map engagement score to a custom Pipedrive field

**Result**: Sales sees which deals are actively researching your solution

### Use Case 2: ABM Account Targeting

**Goal**: Target your best Pipedrive accounts with personalized campaigns

**Setup**:
1. Import high-value opportunities from Pipedrive
2. Create website personalization campaigns for those accounts
3. Sync engagement data back to Pipedrive

**Result**: Marketing supports sales with targeted ABM while CRM stays updated

### Use Case 3: Lead Qualification

**Goal**: Prioritize leads based on website engagement

**Setup**:
1. Sync contacts from Pipedrive
2. Track their website behavior in Abmatic
3. Push engagement scores back to Pipedrive

**Result**: Sales prioritizes leads who are actively engaged

## Troubleshooting

### Connection Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| Can't connect | Browser blocking popup | Allow popups for app.abmatic.ai |
| Connection drops | Token expired | Reconnect the integration |
| Permission denied | Insufficient Pipedrive permissions | Ask Pipedrive admin for access |

### Sync Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| Records not syncing | Sync disabled | Check sync direction settings |
| Missing fields | Field not mapped | Add field mapping |
| Slow sync | Large database | Increase sync frequency interval |
| Duplicate records | Match key not found | Ensure domains/emails are populated |

### Data Quality Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| Wrong records matching | Domain mismatch | Normalize website URLs |
| Contacts not linking | Missing organization | Associate contacts with organizations |
| Enrichment not working | Missing domain | Add website field to organizations |

## Related Documentation

| Topic | Description |
|-------|-------------|
| [Integrations Overview](/integrations/overview) | All available integrations |
| [CRM Sync Behavior](/integrations/crm/sync-behavior) | How sync works across CRMs |
| [Target Accounts](/audiences/accounts) | Managing account lists |
| [Contacts](/audiences/contacts) | Managing contact lists |
| [Company Identification](/visitor-tracking/company-identification) | Understanding revealed companies |
