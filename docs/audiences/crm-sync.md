---
id: crm-sync
title: CRM Sync
sidebar_label: CRM Sync
sidebar_position: 6
---

# CRM Sync

Keep your CRM and Abmatic AI perfectly aligned with bidirectional synchronization. Import your best accounts, push enriched data back, and ensure every team works from the same source of truth.

## Why CRM Sync Matters

| Without CRM Sync | With Abmatic CRM Sync |
|------------------|----------------------|
| Manual data exports and imports | Automatic bidirectional sync |
| Stale data in campaigns | Always-fresh account data |
| Siloed enrichment data | Enrichment flows back to CRM |
| Missed opportunities | Complete visibility across teams |
| Hours of data hygiene | Set it and forget it |

## How It Works

```
┌─────────────────┐         ┌─────────────────┐
│                 │  Import │                 │
│    Your CRM     │ ─────── │   Abmatic AI    │
│                 │         │                 │
│  • Accounts     │  Push   │  • Enrichment   │
│  • Contacts     │ ─────── │  • Scoring      │
│  • Leads        │         │  • Campaigns    │
└─────────────────┘         └─────────────────┘
        ↕ Bidirectional Sync ↕
```

1. **Connect** your CRM with one-click OAuth
2. **Import** accounts and contacts using CRM filters
3. **Enrich** with Abmatic's company and contact data
4. **Push** enhanced records back to your CRM
5. **Sync** automatically to keep everything updated

## Supported CRMs

Abmatic AI integrates with the leading CRM platforms:

![CRM Integrations Hub](/img/screenshots/integrations-hub.png)

| CRM | Accounts | Contacts | Leads | Opportunities |
|-----|----------|----------|-------|---------------|
| **Salesforce** | Yes | Yes | Yes | Yes |
| **HubSpot** | Yes (Companies) | Yes | N/A | Yes (Deals) |
| **Pipedrive** | Yes (Organizations) | Yes (Persons) | N/A | Yes (Deals) |
| **ActiveCampaign** | Yes | Yes | N/A | Yes (Deals) |

## Getting Started

### Step 1: Connect Your CRM

1. Go to **Settings > Integrations**
2. Find your CRM card
3. Click **Authorize**
4. Complete the OAuth flow
5. Your CRM shows as **Active**

### Step 2: Import from CRM

Import accounts or contacts directly from your CRM:

![Import from CRM](/img/screenshots/account-create-modal.png)

1. Go to **Accounts** or **Contacts**
2. Click **+ Account List** or **+ Contact List**
3. Select **Import from CRM**
4. Build filter criteria (optional)
5. Preview matching records
6. Click **Pull** to import

### Step 3: Configure Sync Settings

Fine-tune how data flows between systems:

1. Go to **Settings > Integrations > [Your CRM]**
2. Click **Settings**
3. Configure sync direction and frequency

## Sync Directions

### Import (CRM → Abmatic)

Pull data from your CRM into Abmatic:

| Setting | What It Does | Best For |
|---------|--------------|----------|
| **Create** | Creates new Abmatic records from CRM | Initial import |
| **Update** | Updates existing records with CRM changes | Keeping data fresh |

### Export (Abmatic → CRM)

Push enriched data back to your CRM:

| Setting | What It Does | Best For |
|---------|--------------|----------|
| **Create** | Creates new CRM records from Abmatic | Revealed companies |
| **Update** | Updates CRM records with enrichment | Adding missing data |

### Two-Way Sync

Enable bidirectional synchronization for real-time alignment:

- Changes in either system sync automatically
- Most recent update wins
- Conflict resolution based on timestamp
- Perfect for sales-marketing alignment

## Importing from CRM

### Using CRM Filters

Build precise imports using native CRM fields:

**Salesforce Example:**
```
Type = "Customer"
Industry = "Technology"
AnnualRevenue > 1000000
```

**HubSpot Example:**
```
lifecyclestage = "customer"
industry = "SOFTWARE"
hs_is_target_account = true
```

### Import Options

| Option | Description | When to Use |
|--------|-------------|-------------|
| **All Records** | Import entire object | Small CRM, full sync |
| **Filtered** | Import matching criteria | Targeted campaigns |
| **List/View** | Import from saved list | Existing segments |

### Duplicate Handling

When importing, choose how to handle existing records:

| Option | Behavior | Best For |
|--------|----------|----------|
| **Skip** | Keep existing data unchanged | Preserving manual edits |
| **Overwrite All** | Replace all fields with CRM data | CRM as source of truth |
| **Update Missing** | Only fill empty fields | Adding enrichment |

## Pushing to CRM

### Manual Push

Push selected records on demand:

1. Select accounts or contacts in Abmatic
2. Click **Push to CRM**
3. Choose destination (Contact or Lead for contacts)
4. Review field mappings
5. Click **Push**

### Auto-Push

Automatically push new records as they're created:

1. Enable auto-push in sync settings
2. New records (imports, reveals) push automatically
3. Works great with Contact Reveal

### Required Fields

Ensure these fields have values before pushing:

**Salesforce:**
| Object | Required | Recommended |
|--------|----------|-------------|
| Contact | LastName | AccountId, Email |
| Lead | LastName, Company | Email, Phone |
| Account | Name | Website, Industry |

**HubSpot:**
| Object | Required | Recommended |
|--------|----------|-------------|
| Contact | None | email |
| Company | None | domain |

## Field Mapping

### Default Mappings

Standard fields map automatically:

**Account Fields:**
| Abmatic | Salesforce | HubSpot | Pipedrive |
|---------|------------|---------|-----------|
| name | Name | name | name |
| website | Website | domain | - |
| industry | Industry | industry | - |
| employee_count | NumberOfEmployees | numberofemployees | - |

**Contact Fields:**
| Abmatic | Salesforce | HubSpot | Pipedrive |
|---------|------------|---------|-----------|
| work_email | Email | email | email |
| first_name | FirstName | firstname | first_name |
| last_name | LastName | lastname | last_name |
| job_title | Title | jobtitle | - |

### Custom Field Mapping

Map your custom fields:

1. Go to **Settings > Integrations > [CRM] > Settings**
2. Navigate to field mapping section
3. Select Abmatic field (field_01 through field_30)
4. Select corresponding CRM field
5. Set sync direction
6. Save mapping

## Record Matching

### How Abmatic Matches Records

**Accounts:**
1. Match by CRM ID (if previously synced)
2. Match by domain/website
3. Create new if no match found

**Contacts:**
1. Match by CRM ID (if previously synced)
2. Match by email address
3. Create new if no match found

### Avoiding Duplicates

| Strategy | Implementation |
|----------|----------------|
| Standardize domains | Clean `www.` and `http://` variations |
| Validate emails | Ensure valid email formats |
| Use CRM IDs | Maintain ID links when possible |
| Regular cleanup | Deduplicate monthly |

## Sync Logs and Monitoring

### Viewing Sync Activity

1. Go to **Settings > Integrations > [CRM]**
2. View recent sync operations
3. Check for errors or warnings

### Log Information

| Field | What It Shows |
|-------|---------------|
| **Resource Type** | Account, Contact, or Lead |
| **Status** | Created, Updated, Failed, or Skipped |
| **Direction** | To Abmatic or From Abmatic |
| **Timestamp** | When the operation occurred |
| **Message** | Details or error information |

### Common Sync Errors

| Error | Cause | Solution |
|-------|-------|----------|
| REQUIRED_FIELD_MISSING | Missing required CRM field | Add required data before push |
| INVALID_FIELD | Field mapping doesn't exist | Update field mapping |
| INSUFFICIENT_ACCESS | No API permission | Check CRM user permissions |
| DUPLICATE_VALUE | Record already exists | Handle duplicate or merge |

## Best Practices

### Do's

| Practice | Why It Matters |
|----------|----------------|
| Start with import | Build your audience from existing CRM data |
| Map required fields | Prevent push failures |
| Enable auto-push for reveals | Capture new accounts automatically |
| Monitor sync logs weekly | Catch issues early |
| Use CRM filters | Import only relevant records |

### Don'ts

| Avoid | Why |
|-------|-----|
| Syncing everything | Creates noise and slows sync |
| Ignoring errors | Failed syncs mean missing data |
| Mapping incompatible types | Causes data corruption |
| Skipping deduplication | Creates confusion and extra costs |

### Data Quality Tips

1. **Standardize before sync**: Clean domains (remove www, http)
2. **Validate emails**: Ensure proper format
3. **Match data types**: Text to text, number to number
4. **Set clear ownership**: Decide which system is source of truth per field

## Use Cases

### 1. Import Target Accounts for ABM

Pull your strategic accounts from CRM:

```
Salesforce Filter:
Type = "Strategic"
AnnualRevenue > 10000000
Industry IN ("Technology", "Finance")
```

Then activate in Abmatic campaigns with full enrichment.

### 2. Push Revealed Companies

Capture website visitors and add to CRM:

1. Enable Contact Reveal
2. Turn on auto-push
3. New companies automatically create CRM records
4. Sales sees hot leads immediately

### 3. Enrich Existing Contacts

Import contacts, let Abmatic enrich, push back:

1. Import contacts from CRM
2. Abmatic adds company data, job titles, social profiles
3. Push enriched data back
4. CRM contacts now have complete profiles

### 4. Sync Campaign Engagement

Keep CRM updated with marketing activity:

1. Create campaigns in Abmatic
2. Track engagement and conversions
3. Sync activity back to CRM
4. Sales has full engagement history

## Troubleshooting

### Records Not Syncing

| Check | Solution |
|-------|----------|
| Sync enabled? | Toggle sync on in settings |
| Direction correct? | Verify import/export settings |
| Field mappings set? | Map required fields |
| Check sync logs | Review for specific errors |

### Wrong Data Syncing

| Issue | Fix |
|-------|-----|
| Wrong field values | Review field mappings |
| Overwriting good data | Change to "Update Missing" |
| Missing enrichment | Ensure push is enabled |

### Sync Delays

| Cause | Resolution |
|-------|------------|
| Large dataset | Normal - allow time to complete |
| API rate limits | Sync will resume automatically |
| Manual trigger needed | Click sync button to force |

### Permission Errors

1. Verify CRM API access is enabled
2. Check user has correct permissions
3. Try reconnecting the integration
4. Review object-level permissions in CRM

## Related Documentation

- [Salesforce Integration](/integrations/crm/salesforce)
- [HubSpot Integration](/integrations/crm/hubspot)
- [Account Lists](/audiences/accounts)
- [Contact Lists](/audiences/contacts)
- [CSV Import](/audiences/csv-import)
