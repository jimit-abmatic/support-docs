---
id: csv-import
title: CSV Import
sidebar_label: CSV Import
sidebar_position: 5
---

# CSV Import

Import your existing account and contact lists in minutes. Upload a spreadsheet, let Abmatic AI map your columns automatically, and your data enriches in the background with company intelligence and engagement scores.

![The Accounts page create dialog with the Upload from CSV option](/img/screenshots/csv-upload.png)

## Why CSV Import Accelerates Your ABM

| Without CSV Import | With Abmatic AI CSV Import |
|-------------------|------------------------|
| Manual data entry per account | Bulk import up to 10,000 records at once |
| No enrichment | Auto-enrichment after upload |
| Separate lists across tools | One unified view of your audiences |
| Hours of data prep | Minutes from upload to activation |

## How It Works

```
Upload CSV → Map Columns (AI-assisted) → Handle Duplicates → Auto-Enrich → Ready to Target
```

## Getting Started

### Step 1: Prepare Your File

| Requirement | Specification |
|-------------|---------------|
| Format | `.csv` (comma-separated) |
| Encoding | UTF-8 |
| Max file size | **100 MB** |
| Max records | **10,000 per import** |
| Headers | Required in the first row |

### Step 2: Navigate to Upload

1. Go to **Accounts** (or **Contacts**).
2. Click **+ Account List** (or **+ Contact List**).
3. Select **Upload from CSV**.

### Step 3: Upload and Map

After you choose your file, Abmatic AI takes you to the **Map Fields** screen, where it has already **auto-mapped your columns using AI**.

![The Map Fields screen showing Your Field Name mapped to Abmatic Field Name, with duplicate-handling options](/img/screenshots/csv-column-map.png)

1. Review the suggested mappings — your CSV column (**Your Field Name**) on the left, the **Abmatic Field Name** on the right.
2. Adjust any mapping that needs correcting (or leave a column unmapped).
3. Name your new collection in the **Name** field.
4. Choose how to handle duplicates (see below).
5. Click **CREATE MAPPING** to start the import.

:::tip AI column mapping
You don't have to map columns by hand. Abmatic AI reads your headers and sample rows and proposes the best match for each field — you just confirm or tweak.
:::

## Required Fields

### For Accounts

| Required Field | Accepts | Example |
|---------------|---------|---------|
| Website / Domain | `website` or `domain` column | `acme.com`, `https://www.techco.io` |

:::tip Domain Cleaning
Abmatic AI normalizes domains automatically. `https://www.EXAMPLE.com/page` becomes `example.com`.
:::

### For Contacts

| Required Field | Accepts | Example |
|---------------|---------|---------|
| Work Email | `work_email` or `email` | `john@acme.com` |
| **OR** LinkedIn URL | `linkedin_url` | `linkedin.com/in/johndoe` |

## Column Mapping Reference

### Account Fields

| Your CSV Column | Maps To |
|----------------|---------|
| `domain`, `website` | Domain |
| `company`, `name` | Display Name |
| `industry` | Industry / Summary |
| `employees`, `employee_count` | Employee Count |
| `revenue` | Inferred Revenue |
| `city` | Location City |
| `country` | Location Country |
| `linkedin`, `linkedin_url` | LinkedIn URL |

### Contact Fields

| Your CSV Column | Maps To |
|----------------|---------|
| `email`, `work_email` | Work Email |
| `first`, `first_name` | First Name |
| `last`, `last_name` | Last Name |
| `title`, `job_title` | Job Title |
| `company` | Company Name |
| `linkedin`, `linkedin_url` | LinkedIn URL |
| `phone` | Phone |

### Custom Fields

Map columns to custom fields for data unique to your business:

| Custom Field | Use For |
|-------------|---------|
| `field_01` through `field_30` | Any custom data |

:::note
Define custom field names in **[Settings → Custom Fields](/settings/custom-fields)** before importing.
:::

## Duplicate Handling

On the Map Fields screen, choose how imported records interact with existing data. These are the three options shown:

| Option | What Happens | Best For |
|--------|--------------|----------|
| **Skip and keep existing fields** | Leave existing records unchanged | Preserving manual updates |
| **Overwrite existing fields** | Replace fields with the CSV values | A complete data refresh |
| **Update only missing fields** | Only fill in empty fields | Enrichment imports |

### Recommendations

- **First import?** Use **Overwrite existing fields** to set your baseline.
- **Updating records?** Use **Update only missing fields** to add data without losing existing work.
- **Protecting edits?** Use **Skip and keep existing fields**.

## What Happens After Upload

1. **Validation** — format and size checked
2. **Mapping** — your columns matched to Abmatic AI fields
3. **Cleaning** — domains normalized, emails validated
4. **Deduplication** — handled per your setting
5. **Storage** — records saved to your collection
6. **Enrichment** — company and contact data enriched in the background
7. **Notification** — an email is sent when the import completes

### Processing Status

| Status | Meaning |
|--------|---------|
| **In Queue** | Waiting to process |
| **Processing** | Import in progress |
| **Done** | Complete and ready to use |
| **Error** | Issue found — check the message |

:::info Enrichment timing
Records are available for targeting as soon as the import finishes. Enrichment continues in the background and may take longer for large imports.
:::

## CRM Auto-Push

If a CRM is connected, you can automatically push imported records to it. Enable auto-push in **Integrations → [Your CRM]** sync settings. See [CRM Sync](/audiences/crm-sync).

## Example CSV Files

### Account Import

```csv
website,name,industry,employee_count,country
acme.com,Acme Inc,Software,500,United States
techco.io,TechCo,Technology,150,Canada
enterprise.com,Enterprise Corp,Financial Services,5000,United Kingdom
```

### Contact Import

```csv
work_email,first_name,last_name,job_title,company,linkedin_url
john@acme.com,John,Smith,VP Marketing,Acme Inc,linkedin.com/in/johnsmith
jane@techco.io,Jane,Doe,Director of Sales,TechCo,linkedin.com/in/janedoe
```

## Best Practices

| Do | Don't |
|----|-------|
| Clean data before upload | Include duplicates |
| Test with a small file first | Leave primary-key (website/email) cells empty |
| Use clear column names | Use special characters in headers |
| Keep imports under 10,000 rows | Exceed the 100 MB / 10,000-record limits |

## Troubleshooting

### Import Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Import fails | Wrong file format | Use `.csv`, not `.xlsx` |
| Encoding errors | Non-UTF-8 file | Re-save as UTF-8 |
| "File too large" | Over 100 MB or 10,000 rows | Split into smaller files |
| Missing required field | No website/email column | Add the required primary key |

### Data Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Missing data after import | Column not mapped | Check the Map Fields screen |
| Wrong data in fields | Incorrect mapping | Re-import with corrected mappings |
| Duplicates created | Wrong duplicate setting | Re-import with "Overwrite existing fields" |

## Importing Contacts

The process for contacts is identical — start from **Contacts** instead of Accounts, then **+ Contact List → Upload from CSV**. The only difference is the required field: contacts need a **Work Email** or **LinkedIn URL**.

## Next Steps

| Next Action | Where | Goal |
|-------------|-------|------|
| [Create a Campaign](/campaigns/overview) | Campaigns | Target your imported accounts |
| [Set Up CRM Sync](/audiences/crm-sync) | Integrations | Keep your CRM in sync |
| [Build Dynamic Lists](/audiences/target-groups) | Audiences | Auto-updating segments |
