---
id: salesforce
title: Salesforce Integration
sidebar_label: Salesforce
sidebar_position: 1
---

# Salesforce Integration

Turn anonymous website visitors into pipeline opportunities by connecting Abmatic AI with Salesforce. Enable bi-directional sync of accounts, contacts, leads, opportunities, and campaigns — giving your sales team instant access to buyer-intent signals.

![Salesforce CRM Settings showing the object tabs and sync configuration](/img/screenshots/sf-settings.png)
*The Salesforce settings dialog. Object tabs run across the top (Accounts, Contacts, Opportunities, Leads, Campaigns, Activity Log), with the object-syncing matrix and field mapping below.*

## Why Connect Salesforce?

| Without Integration | With Salesforce Connected |
|---------------------|---------------------------|
| Website visitors remain anonymous | Every visitor matched to Salesforce accounts |
| Sales works from outdated lists | Real-time buyer intent signals in Salesforce |
| Manual data entry and exports | Automatic sync of enriched data |
| No visibility into website engagement | Activity timeline shows every page view |
| Campaign attribution is guesswork | Multi-touch attribution in Campaign Influence |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Bi-directional Account Sync** | Keep account data consistent across both systems |
| **Lead & Contact Sync** | Auto-create leads from revealed website visitors |
| **Opportunity Sync** | Track pipeline influenced by website personalization |
| **Campaign Member Sync** | Attribute conversions to the right campaigns |
| **Activity Logging** | See page views, form submissions, and personalization in Salesforce |
| **Field Mapping** | Map custom fields between both systems |

## Getting Started

### Prerequisites

Before connecting, ensure you have:

| Requirement | Details |
|-------------|---------|
| **Salesforce Edition** | Enterprise, Unlimited, or Developer (API access required) |
| **User Permissions** | System Administrator or user with API access |
| **Object Access** | Read/Write on Account, Contact, Lead, Opportunity, Campaign |
| **Field-Level Security** | Access to fields you want to sync |

### Step 1: Connect Salesforce

1. Go to **Settings > Integrations** in Abmatic AI
2. Find the **Salesforce** card in the CRM section and click **Authorize**
3. Log in to your Salesforce org when prompted
4. Authorize Abmatic AI to access your data
5. You'll be redirected back to Abmatic AI and the card shows **Active**

### Step 2: Configure Sync Settings

After connecting, click the **Settings** gear to configure how data syncs:

1. Select the object tab (Accounts, Contacts, Opportunities, Leads, Campaigns)
2. Set the object-syncing matrix (Create/Update in each direction)
3. Set up field mappings (Don't sync / Fill / Overwrite per field)
4. Optionally add push filters
5. Choose sync frequency
6. Click **Save**

## Understanding What Syncs

### Salesforce-Specific Features

Salesforce supports more sync options than other CRMs:

| Feature | Description |
|---------|-------------|
| **Leads Tab** | Sync leads separately from contacts |
| **Campaigns Tab** | Sync Salesforce Campaigns for attribution |
| **Activity Log** | View all sync operations and errors |
| **Opportunity Sync** | Import deal data for pipeline reporting |

### Object Mapping

| Salesforce Object | Abmatic Object | Match Key |
|-------------------|----------------|-----------|
| **Account** | Account | Website Domain |
| **Contact** | Contact | Email Address |
| **Lead** | Contact (source: lead) | Email Address |
| **Opportunity** | Opportunity Data | Salesforce ID |
| **Campaign** | Campaign | Salesforce ID |

### Account Fields

Standard fields that sync between systems:

| Salesforce Field | Description | Use Case |
|------------------|-------------|----------|
| Website | Company domain | Account matching |
| Name | Company name | Display and search |
| AnnualRevenue | Revenue tier | Targeting campaigns |
| NumberOfEmployees | Company size | Segmentation |
| Industry | Industry sector | Personalization |
| Type | Account type | Prioritization |
| BillingCountry | Location | Geo-targeting |
| OwnerId | Account owner | Routing and alerts |

### Contact/Lead Fields

| Salesforce Field | Abmatic Field | Notes |
|------------------|---------------|-------|
| FirstName | first_name | Required for display |
| LastName | last_name | Required field |
| Email | work_email | Primary match key |
| Title | job_title | Persona targeting |
| Phone | phone | Contact info |
| AccountId | account_id | Links contact to account |

### Opportunity Fields

| Salesforce Field | Description |
|------------------|-------------|
| StageName | Current pipeline stage |
| Amount | Deal value |
| CloseDate | Expected close date |
| Type | Opportunity type |
| LeadSource | Source attribution |

## Configuring Sync Settings

### Sync Direction Options

For each object, configure how data flows:

| Direction | What It Does | When to Use |
|-----------|--------------|-------------|
| **Salesforce → Abmatic** | Import records from Salesforce | Initial setup, keeping Abmatic updated |
| **Abmatic → Salesforce** | Push enriched data to Salesforce | Creating leads, updating accounts |
| **Two-way Sync** | Sync in both directions | Keep both systems in sync |

### Object Syncing Matrix

Each object tab has a **Set object syncing** matrix. You enable **Create** and **Update** checkboxes on each side — Salesforce on the left, Abmatic on the right — and a directional chip in the middle summarizes the result:

| Chip | Meaning |
|------|---------|
| **Sync both ways** | Records sync to and from Salesforce |
| **Sync into Salesforce** | Abmatic AI pushes to Salesforce only |
| **Sync into Abmatic** | Abmatic AI pulls from Salesforce only |
| **Not syncing** | This object is not synced |

**Tip:** Start with Salesforce → Abmatic only, review the data, then enable two-way sync.

### Field Mapping Options

In the **Set field mapping** section, each mapped field has a **Sync to CRM** mode and a **Sync to Abmatic** checkbox:

| Sync to CRM Mode | Behavior | Best For |
|------------------|----------|----------|
| **Don't sync** | Field not pushed to Salesforce | Read-only fields |
| **Fill** | Only fills the Salesforce field when it's empty | Enrichment without overwriting |
| **Overwrite** | Always updates the Salesforce field | Keeping Abmatic AI as source of truth |

Check **Sync to Abmatic** on a field to pull that field's value from Salesforce into Abmatic AI. Click **Add Mapping** to map additional or custom fields, including **demo_booked** (whether the contact has booked a demo), which is available in the field selector.

### Push Filters

Each Accounts and Contacts tab has a **"Set up filters for pushing records"** section. Only records that match these filters are pushed to Salesforce. Leave the filters empty to push all records. When filters are set, the section shows a "*N* filter(s) active" chip.

### Sync Frequency

| Setting | Description | Recommendation |
|---------|-------------|----------------|
| **Manual Only** | Sync when you click the button | Testing, low-volume use |
| **Every 24 hours** | Daily automatic sync | Standard use |
| **Every 6 hours** | More frequent updates | High-volume accounts |
| **Every 1 hour** | Near real-time sync | Time-sensitive sales motions |

**Note:** Frequent syncing uses more Salesforce API calls. Monitor your API usage.

### Auto-Push Setting

Enable **Automatically push changes to Salesforce** to:
- Push newly revealed contacts as leads immediately
- Update account data as enrichment happens
- Sync engagement data in near real-time

## Account Matching

Abmatic matches accounts to Salesforce using domain-based logic:

### Matching Priority

1. **Salesforce ID** — Direct match via stored ID
2. **Website Field** — Match by company website domain
3. **Email Domain** — Extract domain from contact email
4. **Create New** — If no match, optionally create new record

### Domain Normalization

Before matching, domains are cleaned:
- `www.acme.com` → `acme.com`
- `https://acme.com/about` → `acme.com`
- `subdomain.acme.com` → `acme.com` (configurable)

## Campaign Integration

### Syncing Salesforce Campaigns

Import Salesforce campaigns to track attribution:

1. Go to **Campaigns** in Abmatic
2. Click **Import from CRM**
3. Select **Salesforce**
4. Choose campaigns to import
5. Campaign members sync automatically

### Campaign Member Status

When you import a Salesforce campaign, its members sync into Abmatic AI. Campaign member status is mapped between the two systems so engagement is reflected in your Salesforce campaign reporting. The exact status values depend on how your Salesforce campaigns are configured.

:::note Confirm your status values
Salesforce campaign member statuses are customizable per org. Check your campaign's member-status picklist in Salesforce so it matches how you expect engagement to be recorded.
:::

### Campaign Influence

Campaign engagement flows to Salesforce for attribution:

- Campaign members added automatically
- Opportunities linked via Campaign Influence
- Revenue attribution visible in Salesforce reports
- First-touch and multi-touch models supported

## Importing from Salesforce

### Import Sources

| Source | Description | Best For |
|--------|-------------|----------|
| **List Views** | Import saved Salesforce list views | Existing segments |
| **Reports** | Import report results | Complex filtered data |
| **SOQL Query** | Custom query import | Advanced users |

### Import Process

1. Go to **Audiences > Accounts** or **Contacts**
2. Click **Create > Import from CRM**
3. Select **Salesforce**
4. Choose your import source
5. Preview the records
6. Click **Import**

### Import Tips

- Import target accounts first, then contacts
- Use Salesforce reports for complex filters
- Large imports may take several minutes
- Duplicates are handled based on email/domain

## Pushing to Salesforce

### Creating New Records

Push revealed visitors to Salesforce:

1. Select contacts in Abmatic
2. Click **Push to CRM > Salesforce**
3. Choose **Create as Lead** or **Create as Contact**
4. Map required fields
5. Click **Push**

### Required Fields by Object

**For Leads:**
| Field | Requirement |
|-------|-------------|
| LastName | Required |
| Company | Required |
| Email | Recommended |

**For Contacts:**
| Field | Requirement |
|-------|-------------|
| LastName | Required |
| AccountId | Recommended for account linking |
| Email | Recommended |

### Updating Existing Records

To update records already in Salesforce:

1. Select contacts with Salesforce IDs
2. Click **Push to CRM > Salesforce**
3. Select fields to update
4. Review the changes
5. Click **Update**

## Activity Logging

### What Gets Logged

When activity logging is enabled, Abmatic AI can record visitor activity — such as website visits, personalization shown, and form submissions — against the matched Salesforce account or contact, and update campaign membership where a Salesforce campaign is synced.

### Viewing in Salesforce

Logged activity appears on the related Salesforce records, including:
- Account activity timeline
- Contact and lead activity history
- Campaign member details (for synced campaigns)

## Sync Logs and Monitoring

### Viewing Sync Logs

1. Go to **Integrations > Salesforce**
2. Click **Settings**
3. Select the **Activity Log** tab

### Log Information

| Field | Description |
|-------|-------------|
| Timestamp | When the operation occurred |
| Operation | Create, update, or error |
| Record Type | Account, contact, lead, etc. |
| Details | Record ID and field changes |
| Error Message | Details if sync failed |

## Lead vs Contact Handling

### Understanding the Difference

Abmatic syncs both Salesforce leads and contacts:

| Type | In Abmatic | When to Use |
|------|------------|-------------|
| **Lead** | Contact with source: "lead" | New prospects not yet qualified |
| **Contact** | Contact with source: "contact" | Qualified contacts with accounts |

### Duplicate Handling

When duplicates are detected:

1. Primary Salesforce ID remains linked
2. Additional IDs tracked for reference
3. Sync logs show duplicate detection
4. Manual merge may be required in Salesforce

## Troubleshooting

### Connection Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Authorization expired | Token refresh failed | Click **Disable**, then **Authorize** to re-connect |
| Insufficient permissions | User lacks API access | Verify API enabled for profile |
| Sandbox vs Production | Connected to wrong org | Disconnect, reconnect to correct org |

### Sync Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Records not syncing | Sync direction not enabled | Enable Create/Update for direction |
| Fields not updating | Field not mapped | Add field to mapping |
| Missing data | Field-level security | Grant access in Salesforce |
| Required field error | Missing required value | Ensure required fields have data |

### Common Errors

| Error | Meaning | Solution |
|-------|---------|----------|
| INVALID_FIELD | Field doesn't exist | Update field mapping |
| REQUIRED_FIELD_MISSING | Required value empty | Provide required data |
| INSUFFICIENT_ACCESS | No permission | Update Salesforce permissions |
| DUPLICATE_VALUE | Duplicate record exists | Handle duplicate in Salesforce |
| INVALID_CROSS_REFERENCE | Invalid reference ID | Check AccountId exists |

## Best Practices

### Initial Setup

| Step | Why It Matters |
|------|----------------|
| Start with import only | Review data before enabling two-way |
| Map minimal fields first | Add more after validating |
| Test with small batch | Catch issues before full sync |
| Document your mappings | Help team understand the integration |

### Ongoing Management

| Practice | Frequency |
|----------|-----------|
| Review sync logs | Weekly |
| Check failed syncs | Daily |
| Update field mappings | As needed |
| Clean up duplicates | Monthly |
| Audit data quality | Quarterly |

### Data Quality Tips

1. **Standardize domains** — Use consistent format (no www, no https)
2. **Validate emails** — Required for contact matching
3. **Use Salesforce validation rules** — Catch issues at source
4. **Keep owners assigned** — Enable proper routing
5. **Regular deduplication** — Maintain clean data in both systems

## Related Documentation

- [Salesforce Setup Guide](/integrations/crm/salesforce-setup) — Detailed setup walkthrough
- [CRM Campaigns](/campaigns/crm-campaigns) — Campaign sync details
- [Integrations Overview](/integrations/overview) — All integration options
- [Account Lists](/audiences/accounts) — Managing account data
- [CRM Sync Behavior](/integrations/crm/sync-behavior) — How sync works
