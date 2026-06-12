---
id: crm-sync
title: CRM Sync
sidebar_label: CRM Sync
sidebar_position: 6
---

# CRM Sync

Keep your CRM and Abmatic AI aligned with bidirectional synchronization. Import your best accounts, push enriched data back, and ensure every team works from the same source of truth.

## Why CRM Sync Matters

| Without CRM Sync | With Abmatic AI CRM Sync |
|------------------|----------------------|
| Manual exports and imports | Automatic bidirectional sync |
| Stale data in campaigns | Always-fresh account data |
| Siloed enrichment | Enrichment flows back to the CRM |
| Hours of data hygiene | Set it and forget it |

## Supported CRMs

| CRM | Accounts | Contacts | Leads | Opportunities / Deals |
|-----|----------|----------|-------|---------------|
| **Salesforce** | Yes | Yes | Yes | Yes |
| **HubSpot** | Yes (Companies) | Yes | — | Yes (Deals) |
| **Pipedrive** | Yes (Organizations) | Yes (Persons) | — | Yes (Deals) |
| **ActiveCampaign** | Yes | Yes | — | Yes (Deals) |

For provider-specific setup, see [Salesforce](/integrations/crm/salesforce), [HubSpot](/integrations/crm/hubspot), [Pipedrive](/integrations/crm/pipedrive), and [ActiveCampaign](/integrations/crm/activecampaign).

## How It Works

1. **Connect** your CRM with OAuth.
2. **Import** accounts and contacts using CRM filters.
3. **Enrich** them with Abmatic AI's company and contact data.
4. **Push** enriched records back to your CRM.
5. **Sync** automatically to keep everything updated.

---

## Getting Started

### Step 1: Connect Your CRM

1. Go to **Settings → Integrations**.
2. Find your CRM card.
3. Click **Connect** / **Authorize** and complete the OAuth flow.
4. The CRM shows as **Active**.

### Step 2: Import from CRM

Pull accounts or contacts directly from your CRM.

![The Accounts page create dialog with the Import from CRM option](/img/screenshots/crm-import.png)

1. Go to **Accounts** or **Contacts**.
2. Click **+ Account List** or **+ Contact List**.
3. Select **Import from CRM**.
4. Build filter criteria using CRM-native fields (optional).
5. Preview the matching records.
6. Pull them in to create a new collection.

:::info Connection required
If no CRM is connected, the Import from CRM flow sends you to **Integrations** to set one up first.
:::

### Step 3: Configure Sync Settings

Fine-tune how data flows between systems in **Settings → Integrations → [Your CRM] → Settings**.

![The Salesforce CRM Settings modal showing object-syncing toggles, push filters, and field mapping across Accounts, Contacts, Opportunities, Leads, and Campaigns tabs](/img/screenshots/crm-sync-settings.png)

The Settings modal has a tab per object (Accounts, Contacts, Opportunities, Leads, Campaigns, and an Activity Log) and three sections per tab:

- **Set object syncing** — control **Create** and **Update** in each direction. The **Sync** chip in the middle shows the resulting direction (for example, **Sync both ways**).
- **Set up filters for pushing records** — only records matching these filters are pushed to the CRM. Leave the filters empty to push all records.
- **Set field mapping** — control how each field maps and syncs (see below).

You can also push everything immediately with **Sync Accounts Manually** (or the equivalent for the active object).

---

## Sync Directions

| Direction | What It Does |
|-----------|--------------|
| **Import (CRM → Abmatic AI)** | Create new records from the CRM and/or update existing ones |
| **Export (Abmatic AI → CRM)** | Create new CRM records (e.g. revealed companies) and/or update them with enrichment |
| **Sync both ways** | Bidirectional sync; the most recent update wins |

Set these per object using the **Create** and **Update** checkboxes in **Set object syncing**.

---

## Field Mapping: Don't sync / Fill / Overwrite

Field mapping is configured per field in the **Set field mapping** table. Each field has a mode that controls how Abmatic AI writes to the CRM:

| Mode | What It Does | Best For |
|------|--------------|----------|
| **Don't sync** | The field is never pushed to the CRM | Protected, manual-only fields |
| **Fill** | Only fills the CRM field when it's empty | Enrichment without overwriting |
| **Overwrite** | Always updates the CRM field | Keeping Abmatic AI as the source of truth |

Each row also has:

- A **Sync** direction chip (Sync both ways / Sync into [CRM] / Sync into Abmatic / Not syncing).
- A **Sync to Abmatic** checkbox to pull the CRM value back into Abmatic AI.
- An **Add Mapping** action to map additional or custom fields.

:::tip Map demo_booked
**demo_booked** (whether the record has booked a demo) is available in the field selector. Map it so demo activity flows to your CRM alongside your enrichment data. For the full mapping reference, see [Fill vs Overwrite](/integrations/crm/sync-behavior).
:::

### Default mappings

Standard fields map automatically. A few examples:

**Account Fields**

| Abmatic AI | Salesforce | HubSpot | Pipedrive |
|---------|------------|---------|-----------|
| name | Name | name | name |
| website | Website | domain | — |
| industry | Industry | industry | — |
| employee_count | NumberOfEmployees | numberofemployees | — |

**Contact Fields**

| Abmatic AI | Salesforce | HubSpot | Pipedrive |
|---------|------------|---------|-----------|
| work_email | Email | email | email |
| first_name | FirstName | firstname | first_name |
| last_name | LastName | lastname | last_name |
| job_title | Title | jobtitle | — |

Custom fields (`field_01` through `field_30`) can be mapped to any CRM field.

---

## Pushing Records to CRM

### Manual Push

1. Select accounts or contacts (in a grid or open one record).
2. Click **Push to CRM**.
3. For contacts, choose the destination: **Create as Contact** or **Create as Lead**.
4. Review the field mappings.
5. Push.

You can push from the grid's bulk-actions menu or from an individual record's **Overview** tab `...` menu. If the **Outreach** integration is active, **Push to Outreach** is also available.

### Auto-Push

Turn on auto-push in the sync settings so new records (imports, reveals) push automatically. This pairs well with [Contact Reveal](/visitor-tracking/contact-reveal).

### Required Fields

**Salesforce**

| Object | Required | Recommended |
|--------|----------|-------------|
| Contact | LastName | AccountId, Email |
| Lead | LastName, Company | Email, Phone |
| Account | Name | Website, Industry |

**HubSpot**

| Object | Required | Recommended |
|--------|----------|-------------|
| Contact | — | email |
| Company | — | domain |

---

## Record Matching

**Accounts:** match by CRM ID (if previously synced) → match by domain/website → create new if no match.

**Contacts:** match by CRM ID → match by email → create new if no match.

To avoid duplicates: standardize domains (remove `www.` / `http://`), validate emails, and keep CRM ID links intact.

---

## Sync Logs and Monitoring

Each CRM's **Settings** modal includes an **Activity Log** tab. The log shows:

| Field | What It Shows |
|-------|---------------|
| **Resource Type** | Account, Contact, or Lead |
| **Status** | Created, Updated, Failed, or Skipped |
| **Direction** | To Abmatic AI or From the CRM |
| **Timestamp** | When the operation ran |
| **Message** | Details or error information |

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| REQUIRED_FIELD_MISSING | Missing required CRM field | Add the data before pushing |
| INVALID_FIELD | Field mapping doesn't exist | Update the field mapping |
| INSUFFICIENT_ACCESS | No API permission | Check CRM user permissions |
| DUPLICATE_VALUE | Record already exists | Handle the duplicate or merge |

---

## Best Practices

| Do | Don't |
|----|-------|
| Start with import to build your audience | Sync everything (creates noise) |
| Map required fields before pushing | Ignore sync errors |
| Use **push filters** to sync only relevant records | Map incompatible field types |
| Enable auto-push for reveals | Skip deduplication |
| Review the Activity Log weekly | Overwrite good CRM data — use **Fill** for those fields |

---

## Troubleshooting

### Records Not Syncing

| Check | Solution |
|-------|----------|
| Is syncing enabled for the object? | Turn on Create/Update in **Set object syncing** |
| Is the direction correct? | Verify import/export settings |
| Are required fields mapped? | Map them in **Set field mapping** |
| Any errors? | Review the Activity Log |

### Wrong Data Syncing

| Issue | Fix |
|-------|-----|
| Wrong field values | Review the field mappings |
| Overwriting good CRM data | Switch that field to **Fill** |
| Missing enrichment | Ensure the field is set to push (Fill or Overwrite) |

### Sync Delays

| Cause | Resolution |
|-------|------------|
| Large dataset | Normal — allow time to complete |
| API rate limits | Sync resumes automatically |
| Need it now | Use **Sync Manually** |

---

## Related Documentation

- [Salesforce Integration](/integrations/crm/salesforce)
- [HubSpot Integration](/integrations/crm/hubspot)
- [Pipedrive Integration](/integrations/crm/pipedrive)
- [ActiveCampaign Integration](/integrations/crm/activecampaign)
- [CRM Sync Behavior: Fill vs Overwrite](/integrations/crm/sync-behavior)
- [Account Lists](/audiences/accounts)
- [Contact Lists](/audiences/contacts)
- [CSV Import](/audiences/csv-import)
