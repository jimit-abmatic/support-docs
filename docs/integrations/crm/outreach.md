---
id: outreach
title: Outreach Integration
sidebar_label: Outreach
sidebar_position: 5
---

# Outreach Integration

Connect Abmatic AI with Outreach to supercharge your sales engagement with ABM intelligence.

## Why Connect Outreach?

Outreach is the leading sales execution platform trusted by thousands of revenue teams. Connecting it with Abmatic AI transforms how your SDRs and AEs engage prospects.

| Before Integration | After Integration |
|-------------------|-------------------|
| Reps research accounts manually | Account intelligence pushed to Outreach automatically |
| Generic outbound sequences | Sequences informed by real website engagement |
| No visibility into prospect intent | Know when target accounts visit your site |
| Disconnected sales and marketing | Unified view of account engagement |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Sync prospects and accounts** | Keep your sales data aligned across platforms |
| **Push engaged visitors** | Alert reps when target accounts show buying intent |
| **Enrich prospect data** | Add firmographic and engagement data to Outreach records |
| **Import target lists** | Build Outreach sequences from Abmatic account lists |
| **Track engagement** | See Outreach activity alongside website behavior |

## Getting Started

### Prerequisites

Before connecting, ensure you have:
- An Outreach account with API access
- Admin permissions in both Outreach and Abmatic
- At least one account list in Abmatic ready to sync

### Step 1: Navigate to Integrations

1. Click **Settings** in the left sidebar
2. Select the **Integrations** tab
3. Scroll to the **Automation Tools** section
4. Find the **Outreach** card

![Integrations page showing various integration options](/img/screenshots/integrations-hub.png)
*The Integrations page - scroll down to the Automation Tools section to find Outreach*

### Step 2: Authorize the Connection

1. Click **AUTHORIZE** on the Outreach card
2. You'll be redirected to Outreach's login page
3. Sign in with your Outreach credentials
4. Review and approve the requested permissions
5. You'll be redirected back to Abmatic

The connection is now active and ready to configure.

## Understanding What Syncs

### Object Mapping

| Outreach Object | Abmatic Object | Match Key |
|-----------------|----------------|-----------|
| Accounts | Accounts | Domain |
| Prospects | Contacts | Email |

### Account Fields

| Outreach Field | Abmatic Field | Description |
|----------------|---------------|-------------|
| Name | Company Name | Primary account name |
| Domain | Website | Company website domain |
| Industry | Industry | Business sector |
| Company Size | Employee Count | Number of employees |
| Custom Fields | Custom Fields | Your defined fields |

### Prospect Fields

| Outreach Field | Abmatic Field | Description |
|----------------|---------------|-------------|
| First Name | First Name | Contact first name |
| Last Name | Last Name | Contact last name |
| Email | Work Email | Primary contact email |
| Title | Job Title | Current position |
| Phone | Phone | Contact phone number |
| Company | Company Name | Associated company |

## Configuring Sync Settings

After connecting, click **SETTINGS** on the Outreach card to configure sync behavior.

### Sync Tabs

| Tab | What It Controls |
|-----|------------------|
| **Accounts** | Company sync settings and field mappings |
| **Contacts** | Prospect sync settings and field mappings |
| **Activity Log** | View sync history and troubleshoot issues |

### Sync Direction Options

| Direction | What It Does | Best For |
|-----------|--------------|----------|
| Don't sync | Field not synchronized | Sensitive data you want to keep separate |
| Fill | Only populate empty fields | Preserving existing Outreach data |
| Overwrite | Always update with Abmatic data | Keeping Abmatic as source of truth |

### Sync Operations

| Operation | Description |
|-----------|-------------|
| **Create new records** | Create Outreach records for new Abmatic contacts/accounts |
| **Update existing records** | Update Outreach records when Abmatic data changes |

### Sync Frequency

| Frequency | Best For |
|-----------|----------|
| Manual | Full control over when syncs occur |
| Every 24 hours | Standard use, balances freshness with API usage |
| Every 12 hours | Active sales cycles needing current data |
| Every 6 hours | High-velocity sales environments |

## Importing from Outreach

Pull your existing Outreach data into Abmatic:

### Import Sources

| Source | What You Get |
|--------|--------------|
| All Prospects | Complete prospect database |
| Filtered Prospects | Prospects matching specific criteria |
| All Accounts | Complete account database |
| Specific Sequences | Prospects enrolled in certain sequences |

### Import Steps

1. Go to **Audiences** > **Accounts** or **Contacts**
2. Click **Create New** > **Import from CRM**
3. Select **Outreach** as the source
4. Choose what to import (accounts or prospects)
5. Apply filters if needed
6. Click **Import**

Your imported records will be enriched with Abmatic's firmographic data.

## Pushing to Outreach

Send Abmatic audiences to Outreach for sales engagement:

### Manual Push

1. Navigate to **Audiences** > **Accounts** or **Contacts**
2. Select the records you want to push
3. Click **Push to CRM**
4. Select **Outreach**
5. Map fields and confirm
6. Records are created or updated in Outreach

### Automatic Push (Auto-Push)

Enable auto-push to automatically send records to Outreach:

1. Open Outreach integration settings
2. Enable **Auto-push new records**
3. Set your push criteria

| Auto-Push Option | What It Does |
|------------------|--------------|
| Push all new accounts | Every new Abmatic account goes to Outreach |
| Push all new contacts | Every new Abmatic contact goes to Outreach |
| Push on engagement | Push when engagement score exceeds threshold |

### Required Fields for Push

| Object | Required Field | Why |
|--------|----------------|-----|
| Accounts | Domain | Primary match key in Outreach |
| Prospects | Email | Primary match key in Outreach |

## Sync Logs and Monitoring

### Viewing Activity Log

1. Open Outreach integration settings
2. Click the **Activity Log** tab
3. Review recent sync activity

### Log Information

| Field | Description |
|-------|-------------|
| Timestamp | When the sync occurred |
| Type | Success, warning, or error |
| Message | Details about what happened |
| Records | Number of records affected |

### Common Status Messages

| Status | Meaning | Action |
|--------|---------|--------|
| Success | Sync completed normally | None required |
| Warning | Sync completed with issues | Review warnings |
| Error | Sync failed | Check error details |

## Best Practices

### Initial Setup

| Do | Don't |
|----|-------|
| Start with a test sync of limited records | Sync your entire database immediately |
| Map only essential fields first | Map every possible field |
| Verify field mappings with sample data | Assume mappings are correct |
| Review Activity Log after first sync | Ignore initial sync results |

### Ongoing Management

| Do | Don't |
|----|-------|
| Monitor sync logs weekly | Let syncs run unmonitored |
| Review and clean duplicate records | Let duplicates accumulate |
| Update field mappings as needs change | Set and forget mappings |
| Use "Fill" mode for enrichment | Overwrite existing Outreach data unnecessarily |

### Data Quality Tips

- **Deduplicate before syncing** - Clean up both systems first
- **Standardize domains** - Use consistent URL formats (no www, trailing slashes)
- **Validate emails** - Ensure email addresses are properly formatted
- **Map custom fields carefully** - Verify data types match between systems

## Use Cases

### 1. Intent-Based Outreach

Push engaged website visitors to Outreach sequences:

1. Create a dynamic account list with "Engagement Score > 50"
2. Enable auto-push for this list
3. Build an Outreach sequence for high-intent prospects
4. Reps receive pre-qualified leads with context

### 2. ABM Account Targeting

Align sales sequences with marketing campaigns:

1. Import your target account list from Outreach
2. Create personalized website experiences for these accounts
3. Track engagement by account
4. Push engagement data back to Outreach for rep visibility

### 3. Sequence Performance

Measure how Outreach engagement correlates with website behavior:

1. Import sequence membership from Outreach
2. Track website visits from sequence prospects
3. Identify which sequences drive the most engagement
4. Optimize sequences based on conversion data

## Troubleshooting

### Connection Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Authorization fails | Expired credentials | Re-authorize from Integrations page |
| "Insufficient permissions" | Limited Outreach access | Ensure you have admin-level Outreach permissions |
| Connection drops | Token expired | Click Authorize again to refresh |

### Sync Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Records not syncing | Sync disabled | Check sync settings are enabled |
| Duplicates created | Missing match key | Ensure email/domain fields are populated |
| Fields not updating | Fill mode active | Change to Overwrite if you want updates |
| Slow sync | Large dataset | Consider filtering to sync only needed records |

### Data Quality Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Wrong data in fields | Incorrect mapping | Review and correct field mappings |
| Missing enrichment | No domain match | Ensure accounts have valid domains |
| Stale data | Infrequent sync | Increase sync frequency |

## Related Documentation

| Topic | Link |
|-------|------|
| Integrations Overview | [View](/integrations/overview) |
| Target Accounts | [View](/audiences/accounts) |
| Contacts | [View](/audiences/contacts) |
| Email Sequences | [View](/campaigns/email-campaigns) |
| CRM Sync Behavior | [View](/integrations/crm/sync-behavior) |
