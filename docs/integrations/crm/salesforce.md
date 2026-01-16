---
id: salesforce
title: Salesforce Integration
sidebar_label: Salesforce
sidebar_position: 1
---

# Salesforce Integration

Turn anonymous website visitors into pipeline opportunities by connecting Abmatic AI with Salesforce. Enable bi-directional sync of accounts, contacts, leads, opportunities, and campaigns—giving your sales team instant access to buyer intent signals.

![Salesforce Integration](/img/screenshots/integrations-hub.png)
*Salesforce shows Active status when connected*

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

1. Navigate to **Integrations** in Abmatic AI
2. Find **Salesforce** under CRM and click **Connect**
3. Log in to your Salesforce org when prompted
4. Authorize Abmatic to access your data
5. You'll be redirected back to Abmatic with Active status

### Step 2: Configure Sync Settings

After connecting, click **Settings** to configure how data syncs:

1. Select the object type (Accounts, Contacts, Leads, Opportunities, Campaigns)
2. Configure sync direction for each object
3. Set up field mappings
4. Choose sync frequency
5. Click **Save**

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

### Sync Operations

For each direction, enable:

| Option | Effect |
|--------|--------|
| **Create** | Create new records that don't exist |
| **Update** | Update existing matched records |

**Tip:** Start with Salesforce → Abmatic only, review the data, then enable two-way sync.

### Field Mapping Options

For each field, choose how it syncs to Salesforce:

| Mode | Behavior | Best For |
|------|----------|----------|
| **Don't Sync** | Field not synced to CRM | Read-only fields |
| **Fill** | Only fills empty fields | Enrichment without overwriting |
| **Overwrite** | Always updates the field | Keeping Abmatic as source of truth |

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

### Campaign Member Status Mapping

When visitors engage, their status updates in Salesforce:

| Visitor Action | Salesforce Status | When It Updates |
|----------------|-------------------|-----------------|
| Added to campaign | Sent | Upon creation |
| Viewed personalized page | Responded | First engagement |
| Submitted form | Converted | Form completion |
| Requested demo | Qualified | Based on form type |

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

Abmatic logs visitor activities to Salesforce:

| Activity | Salesforce Object | Details Included |
|----------|-------------------|------------------|
| Website visit | Task | Pages viewed, time on site |
| Personalization shown | Task | Campaign name, variation |
| Form submission | Task | Form fields, submission time |
| Campaign engagement | Campaign Member | Status, dates, metrics |

### Viewing in Salesforce

Activities appear in:
- Account Activity Timeline
- Contact Activity History
- Lead Activity History
- Campaign Member Details

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
| Authorization expired | Token refresh failed | Click Reconnect, re-authorize |
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
