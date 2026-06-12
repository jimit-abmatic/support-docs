---
id: hubspot
title: HubSpot Integration
sidebar_label: HubSpot
sidebar_position: 2
---

# HubSpot Integration

Transform your HubSpot CRM into an ABM powerhouse. The Abmatic AI HubSpot integration creates a seamless bi-directional sync between your CRM and website visitor intelligence, enabling personalized marketing at scale.

## Why Connect HubSpot?

| Before Integration | After Integration |
|-------------------|-------------------|
| Manual data entry from website leads | Automatic sync of enriched visitor data |
| Generic outreach to all contacts | Personalized campaigns based on behavior |
| Unknown website visitors | Identified companies with full context |
| Siloed marketing and sales data | Unified view across all touchpoints |
| Delayed lead follow-up | Real-time alerts for high-intent visitors |

## What You Can Do

The HubSpot integration enables powerful ABM workflows:

| Capability | Business Impact |
|------------|-----------------|
| **Bi-directional sync** | Companies, contacts, and deals flow automatically between systems |
| **Property mapping** | Custom fields sync exactly where you need them |
| **Lifecycle tracking** | Personalize content based on lead stage |
| **Deal pipeline sync** | Attribute revenue to campaigns accurately |
| **Timeline activities** | See website engagement directly in HubSpot |
| **Target account sync** | Keep ABM lists in perfect alignment |

![HubSpot CRM Settings showing the object tabs and sync configuration](/img/screenshots/hs-settings.png)
*The HubSpot settings dialog. Object tabs run across the top (Accounts, Contacts, Opportunities, Activity Log), with the object-syncing matrix and field mapping below.*

## Getting Started

### Prerequisites

Before connecting, ensure you have:

| Requirement | Why It's Needed |
|-------------|-----------------|
| HubSpot admin access | Required to authorize the OAuth connection |
| Marketing or Sales Hub | Full features require a paid Hub subscription |
| API access enabled | Allows Abmatic to sync data programmatically |

### Connect in 3 Steps

**Step 1: Navigate to Integrations**

Go to **Settings > Integrations** in Abmatic AI and find the HubSpot card in the CRM section.

**Step 2: Authorize Connection**

Click **Authorize** and log in to HubSpot when prompted. Grant Abmatic AI the requested permissions to access your CRM data.

**Step 3: Configure Sync Settings**

Once connected, click **Settings** to configure:
- Which objects to sync (accounts, contacts, deals)
- Sync direction (one-way or bi-directional)
- Field mappings between systems
- Sync frequency

## Understanding What Syncs

### Object Mapping

| HubSpot Object | Abmatic Object | Primary Key | Use Case |
|----------------|----------------|-------------|----------|
| **Companies** | Accounts | Domain | Sync target accounts and firmographic data |
| **Contacts** | Contacts | Email | Sync leads with engagement data |
| **Deals** | Opportunities | HubSpot ID | Track pipeline and revenue attribution |

### Company Properties

These HubSpot company properties sync to Abmatic accounts:

| Property | What Syncs |
|----------|------------|
| `name` | Company name |
| `domain` | Website domain (primary key) |
| `industry` | Industry sector |
| `numberofemployees` | Employee count range |
| `annualrevenue` | Annual revenue |
| `founded_year` | Year company was founded |
| `type` | Company type (prospect, customer, etc.) |
| `is_public` | Public/private indicator |
| `total_money_raised` | Total funding raised |
| `web_technologies` | Technology stack detected |

### Contact Properties

| HubSpot Property | Abmatic Field | Notes |
|------------------|---------------|-------|
| `email` | `work_email` | Primary key for matching |
| `firstname` | `first_name` | Used in personalization |
| `lastname` | `last_name` | Used in personalization |
| `jobtitle` | `job_title` | Filter by seniority |
| `phone` | `phone` | For sales outreach |
| `company` | `job_company_name` | Company association |
| `lifecyclestage` | `lifecycle_stage` | Lead qualification |
| `hs_lead_status` | `lead_status` | Sales pipeline status |

### Deal Properties

| Property | Description | Why It Matters |
|----------|-------------|----------------|
| `amount` | Deal value | Revenue attribution |
| `dealstage` | Pipeline stage | Track progression |
| `dealtype` | Deal category | Segment opportunities |
| `hs_acv` | Annual contract value | SaaS metrics |
| `hs_arr` | Annual recurring revenue | SaaS metrics |
| `hs_mrr` | Monthly recurring revenue | SaaS metrics |
| `closedate` | Expected close | Forecast accuracy |

### Analytics Properties (Read-Only)

HubSpot analytics data imports to Abmatic for enhanced targeting:

| Property | What It Tells You |
|----------|-------------------|
| `hs_analytics_source` | How the contact found you |
| `hs_analytics_num_page_views` | Total engagement level |
| `hs_analytics_num_visits` | Visit frequency |
| `hs_analytics_first_url` | Entry point to your site |

## Configuring Sync Settings

### Sync Direction Options

Choose how data flows between systems:

| Direction | When to Use | Example |
|-----------|-------------|---------|
| **HubSpot → Abmatic** | Import existing CRM data for targeting | Sync target account list for campaigns |
| **Abmatic → HubSpot** | Enrich CRM with visitor intelligence | Push revealed companies to CRM |
| **Two-way sync** | Keep both systems in perfect alignment | Full ABM orchestration |

### Sync Options by Direction

For each direction, configure:

| Option | Behavior | Recommendation |
|--------|----------|----------------|
| **Create new records** | Adds records that don't exist | Enable for lead capture |
| **Update existing records** | Updates matched records | Enable for enrichment |

### Sync Frequency

| Mode | Behavior | Best For |
|------|----------|----------|
| **Manual** | Sync only when triggered | Testing, initial setup |
| **Automatic** | Scheduled sync (configurable hours) | Production use |

**Tip:** Start with a longer sync interval (24 hours) and reduce once you've verified data quality.

### Auto-Push Setting

Enable **"Automatically push changes to HubSpot"** to send updates in real-time when:
- A revealed company matches a target account
- Contact engagement scores change
- New contacts are identified

## Object Tabs

The HubSpot settings dialog has tabs for **Accounts**, **Contacts**, **Opportunities**, and **Activity Log**. (HubSpot doesn't have separate Lead and Campaign objects the way Salesforce does, so there are no Leads or Campaigns tabs here.)

Each object tab has a **Set object syncing** matrix: tick **Create** and **Update** on each side — HubSpot on the left, Abmatic on the right — and the chip in the middle summarizes the direction (**Sync both ways** / **Sync into HubSpot** / **Sync into Abmatic** / **Not syncing**).

## Property Mapping

### Accessing Field Mapping

1. Go to **Settings > Integrations** and click **Settings** on the HubSpot card
2. Select the object tab (Accounts, Contacts, Opportunities)
3. View the field mapping table under **Set field mapping**
4. Click **Add Mapping** to create new mappings

### Mapping Options

Each field mapping has a **Sync to CRM** mode and a **Sync to Abmatic** checkbox:

| Sync to CRM Option | Behavior |
|-------------------|----------|
| **Don't sync** | Field won't update in HubSpot |
| **Fill** | Only update if the HubSpot field is empty |
| **Overwrite** | Always update with the Abmatic AI value |

| Sync to Abmatic | Behavior |
|-----------------|----------|
| **Checked** | Import this field from HubSpot |
| **Unchecked** | Don't import this field |

The field selector includes **demo_booked** (whether the contact has booked a demo), which you can map like any other field.

### Push Filters

On the Accounts and Contacts tabs, the **"Set up filters for pushing records"** section pushes only matching records to HubSpot. Leave it empty to push all records; an active filter shows a "*N* filter(s) active" chip.

### Read-Only Properties

Some HubSpot properties cannot be updated:

- `hs_object_id` - System-generated ID
- `createdate` - Set automatically by HubSpot
- Analytics properties - Calculated by HubSpot

## Lifecycle Stage Integration

### Using Lifecycle Stages for Personalization

HubSpot lifecycle stages sync to Abmatic for powerful targeting:

| Stage | Typical Use | Personalization Example |
|-------|-------------|------------------------|
| `subscriber` | Newsletter opt-ins | Educational content |
| `lead` | Website conversions | Product benefits |
| `marketingqualifiedlead` | Engaged prospects | Case studies, ROI |
| `salesqualifiedlead` | Sales-ready leads | Pricing, demo CTAs |
| `opportunity` | In active pipeline | Competitive differentiators |
| `customer` | Closed won | Upsell, loyalty content |
| `evangelist` | Advocates | Referral programs |

### Campaign Use Cases

- **Filter audiences** by lifecycle stage for targeted campaigns
- **Personalize content** showing different messages per stage
- **Track progression** to measure campaign impact on pipeline
- **Trigger sequences** when contacts reach specific stages

## Deal Pipeline Sync

### What Syncs

Deals import with full context:

| Data | What You Get |
|------|--------------|
| Pipeline stages | Complete sales process visibility |
| Deal associations | Links to companies and contacts |
| Revenue metrics | ACV, ARR, MRR for SaaS businesses |
| Close dates | Forecast and timing data |

### Revenue Attribution

Track how campaigns influence revenue:

1. **Associate deals** with campaign members automatically
2. **Calculate influenced pipeline** from website personalization
3. **Measure closed-won attribution** to prove ROI

## Importing from HubSpot

### Import Sources

| Source | Description | Best For |
|--------|-------------|----------|
| **Active Lists** | Dynamic HubSpot lists | Segments that update automatically |
| **Static Lists** | Fixed record sets | Point-in-time snapshots |
| **Views** | Saved filter views | Quick imports from existing filters |
| **All Records** | Complete sync | Initial data migration |

### How to Import

1. Navigate to **Audiences > Accounts** or **Contacts**
2. Click **Create > Import from CRM**
3. Select **HubSpot** as the source
4. Choose your list, view, or all records
5. Preview the records that will import
6. Click **Import**

The import runs in the background. Check the collection for status.

## Pushing to HubSpot

### Creating New Records

Push revealed contacts to HubSpot:

1. Select contacts in Abmatic (from Reveal or collections)
2. Click **Push to CRM > HubSpot**
3. Map required fields (email, first name, last name)
4. Choose company association (optional)
5. Click **Push**

### Updating Existing Records

Enrich existing HubSpot records:

1. Select contacts that have HubSpot IDs
2. Click **Push to CRM > HubSpot**
3. Select properties to update
4. Review the changes preview
5. Click **Update**

### Automatic Company Association

When creating contacts, Abmatic:

1. Checks for existing company by domain
2. Associates contact automatically if found
3. Can create new company if needed
4. Uses HubSpot's standard association type

## Timeline Activities

### What Gets Logged

Abmatic can write activities to HubSpot contact and company timelines:

| Activity Type | What's Recorded |
|---------------|-----------------|
| Website visit | Pages viewed, session duration |
| Personalization | Which personalized content was served |
| Form submission | Form data captured on your site |
| Campaign engagement | Interactions with campaigns |

### Where to View

Activities appear in:
- Contact record timeline
- Company record timeline
- Activity feed
- HubSpot reporting dashboards

## Marketing Hub vs Sales Hub Features

### Marketing Hub Enables

| Feature | Minimum Tier |
|---------|--------------|
| Contact lifecycle stages | Starter |
| Email engagement tracking | Starter |
| Form submission sync | Starter |
| Campaign attribution | Professional |
| Full analytics properties | Professional |

### Sales Hub Enables

| Feature | Minimum Tier |
|---------|--------------|
| Deal/Opportunity sync | Starter |
| Deal pipelines and stages | Starter |
| Revenue metrics (ACV, ARR, MRR) | Professional |
| Contact roles on deals | Professional |
| Sales activities | Starter |

### Important Notes

- Deal sync may be limited on sandbox/developer accounts
- Some analytics properties require Marketing Hub Pro+
- Pipeline customization requires Sales Hub

## Target Account Sync

Keep your ABM target lists aligned between HubSpot and Abmatic AI. HubSpot's target-account properties (such as `hs_is_target_account`) can sync so that accounts flagged as targets in one system are reflected in the other. Map these properties in the Accounts field mapping if you use HubSpot's ABM features.

:::note Confirm your HubSpot ABM properties
HubSpot's target-account properties are part of its ABM tooling and may not exist on every portal. Confirm the property exists in HubSpot before mapping it, then set the **Sync to CRM** mode and **Sync to Abmatic** checkbox to match the direction you want.
:::

## Importing HubSpot Users and Owners

Beyond CRM records, you can import your **HubSpot users** so HubSpot owners are available in Abmatic AI for routing and segmentation — mirroring how Salesforce owners work.

- On the **Users** page (**Settings > Users**), use **Import from HubSpot** (next to "Import from Salesforce"). This option is available when HubSpot is connected and active.
- Imported owners add a **HubSpot owner** column and a HubSpot owner selector in segmentation, so you can filter and route by owner.

:::warning Reconnect required for owner sync
Owner sync uses a HubSpot permission (`crm.objects.owners.read`) that was added recently. If you connected HubSpot **before** owner sync was available, you must **Disable** and re-**Authorize** the HubSpot integration to grant the new permission. Without reconnecting, owners (and owner-based meeting routing) won't sync.
:::

## HubSpot Forms in Campaigns

If you build your forms in HubSpot, you can reuse them inside Abmatic AI instead of rebuilding them:

- **Popups and exit-intent widgets:** the widget editor includes a **HubSpot form picker** so you can drop a HubSpot form straight into the popup.
- **Agentic Chat:** you can show a HubSpot form as one of the chat's email-handoff options, so visitors fill out your real HubSpot form in the conversation.

Submissions flow into HubSpot as usual, keeping your existing form logic and workflows intact.

## Sync Logs and Monitoring

### Viewing Activity Logs

1. Go to **Integrations > HubSpot > Settings**
2. Click the **Activity Log** tab
3. View recent sync operations

### Log Information

| Field | Description |
|-------|-------------|
| Timestamp | When the operation occurred |
| Resource Type | Contact, Account, or Deal |
| Status | Created, Updated, Failed, or Skipped |
| Direction | To Abmatic or From Abmatic |
| Message | Details or error information |

### Monitoring Sync Health

Track these metrics:
- **Last Sync with HubSpot** - When data last pushed to CRM
- **Last Sync with Abmatic** - When data last imported from CRM
- **Failed records** - Review logs for errors to fix

## Best Practices

### Initial Setup

| Step | Why It Matters |
|------|----------------|
| Start with HubSpot → Abmatic | Validate data before enabling two-way sync |
| Review matched records | Ensure correct duplicate handling |
| Map essential properties first | Get core data flowing before custom fields |
| Test with small batch | Verify sync behavior before full import |

### Ongoing Management

| Practice | Benefit |
|----------|---------|
| Monitor sync logs weekly | Catch errors before they compound |
| Handle failures promptly | Prevent data drift |
| Update mappings as needed | Keep pace with field changes |
| Maintain property consistency | Ensure clean data in both systems |

### Data Quality Tips

| Do | Don't |
|----|-------|
| Standardize company domains | Use inconsistent domain formats |
| Validate email addresses | Sync invalid emails |
| Use HubSpot workflows for cleanup | Let dirty data accumulate |
| Merge duplicates regularly | Ignore duplicate warnings |

## Troubleshooting

### Connection Issues

| Problem | Solution |
|---------|----------|
| Authorization expired | On the HubSpot card, click **Disable**, then **Authorize** to re-connect |
| Insufficient permissions | Verify you have admin access and API is enabled |
| Connection timeout | Check HubSpot service status; retry in a few minutes |

### Sync Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Records not syncing | Sync direction disabled | Enable create/update in settings |
| Missing properties | Field not mapped | Add mapping in settings |
| Duplicate records | No matching key found | Ensure domain/email consistency |
| Deals not syncing | No Sales Hub | Upgrade to Sales Hub or skip deals |

### Common Errors

| Error | Meaning | Fix |
|-------|---------|-----|
| Property not found | HubSpot property doesn't exist | Check property name or create in HubSpot |
| 403 Forbidden | Permission denied | Re-authorize with admin account |
| Rate limited | Too many API calls | Increase sync interval |
| Invalid value | Data type mismatch | Fix source data format |

## Related Documentation

- [Salesforce Integration](/integrations/crm/salesforce) - Alternative CRM option
- [CRM Campaigns](/campaigns/crm-campaigns) - Sync campaign membership
- [Integrations Overview](/integrations/overview) - All integration options
- [Contact Lists](/audiences/contacts) - Manage synced contacts
- [CRM Sync](/audiences/crm-sync) - Detailed sync configuration
