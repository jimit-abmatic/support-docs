---
id: csv-import
title: CSV Import
sidebar_label: CSV Import
sidebar_position: 5
---

# CSV Import

**Import your existing account and contact lists in minutes, not hours.** Upload any spreadsheet, map your columns to Abmatic fields, and watch your data automatically enrich with company intelligence, engagement scores, and CRM links.

![Account Collections showing CSV imports](/img/screenshots/accounts-list.png)

## Why CSV Import Accelerates Your ABM

| Without CSV Import | With Abmatic CSV Import |
|-------------------|------------------------|
| Manual data entry for each account | Bulk import 1,000 records at once |
| No enrichment or verification | Auto-enrichment with 50+ data points |
| Separate lists across tools | Unified view with all your audiences |
| Hours of data preparation | Minutes from upload to activation |

## How It Works

```
Upload CSV → Map Columns → Handle Duplicates → Auto-Enrich → Ready to Target
     ↓            ↓              ↓                 ↓              ↓
   5 secs      2 mins        Set & forget     Background      Campaigns
```

## Getting Started

### Step 1: Prepare Your File

| Requirement | Specification | Why It Matters |
|-------------|---------------|----------------|
| Format | .csv (comma-separated) | Universal spreadsheet format |
| Encoding | UTF-8 | Ensures special characters display correctly |
| Max Rows | 1,000 per import | Optimal for fast processing |
| Max Columns | 200 | Room for all your custom fields |
| Headers | Required in first row | Enables automatic field mapping |

### Step 2: Navigate to Upload

1. Go to **Audiences → Accounts** (or **Contacts**)
2. Click the **+ Account List** (or **+ Contact List**) button
3. Select **Upload from CSV**

![Create account list modal with CSV option](/img/screenshots/account-create-modal.png)

### Step 3: Upload and Map

1. Select your CSV file
2. Review the auto-detected column mappings
3. Adjust any mappings that need correction
4. Name your new collection
5. Choose duplicate handling
6. Click **Create Mapping**

## Required Fields

To successfully import records, your CSV must include:

### For Accounts

| Required Field | Accepts | Example |
|---------------|---------|---------|
| Website/Domain | `website` or `domain` column | `acme.com`, `https://www.techco.io` |

:::tip Domain Cleaning
Abmatic automatically normalizes domains. `https://www.EXAMPLE.com/page` becomes `example.com`.
:::

### For Contacts

| Required Field | Accepts | Example |
|---------------|---------|---------|
| Work Email | `work_email` or `email` | `john@acme.com` |
| **OR** LinkedIn URL | `linkedin_url` | `linkedin.com/in/johndoe` |

## Column Mapping Reference

### Account Fields

| Your CSV Column | Maps To | What Gets Enriched |
|----------------|---------|-------------------|
| `domain`, `website` | Website | Full company profile |
| `company`, `name` | Company Name | Logo, description |
| `industry` | Industry | Industry classification |
| `employees`, `employee_count` | Employee Count | Company size tier |
| `revenue` | Inferred Revenue | Revenue range |
| `city` | Location City | Full address data |
| `country` | Location Country | Region, timezone |

### Contact Fields

| Your CSV Column | Maps To | What Gets Enriched |
|----------------|---------|-------------------|
| `email`, `work_email` | Work Email | Email verification |
| `first`, `first_name` | First Name | Full name formatting |
| `last`, `last_name` | Last Name | — |
| `title`, `job_title` | Job Title | Seniority level |
| `company` | Company Name | Account linking |
| `linkedin`, `linkedin_url` | LinkedIn URL | Professional profile |
| `phone` | Phone | Phone formatting |

### Custom Fields

Map to custom fields for data unique to your business:

| Custom Field | Use For |
|-------------|---------|
| `field_01` through `field_30` | Any custom data |

:::note
Define custom field names in **Settings → Custom Fields** before importing.
:::

## Duplicate Handling

Choose how imported records interact with existing data:

| Option | What Happens | Best For |
|--------|--------------|----------|
| **Skip** | Keep existing records unchanged | Preserving manual updates |
| **Overwrite All** | Replace all fields with CSV values | Complete data refresh |
| **Overwrite Missing** | Only fill in empty fields | Enrichment imports |

### Recommendations

- **First import?** Use **Overwrite All** to establish your baseline
- **Updating records?** Use **Overwrite Missing** to add new data without losing existing work
- **Preserving edits?** Use **Skip** to protect manual corrections

## What Happens After Upload

### Automatic Processing

1. **Validation** — File format and size verified
2. **Mapping** — Your columns matched to Abmatic fields
3. **Cleaning** — Domains normalized, emails validated
4. **Deduplication** — Handled per your settings
5. **Storage** — Records saved to your collection
6. **Enrichment** — Company and contact data enriched automatically
7. **Notification** — Email sent when complete

### Processing Status

| Status | Meaning |
|--------|---------|
| **IN_QUEUE** | Waiting to process |
| **PROCESSING** | Import in progress |
| **DONE** | Complete and ready to use |
| **ERROR** | Issue found—check the error message |

### Processing Time

| Import Size | Typical Time |
|-------------|--------------|
| Under 100 records | Seconds |
| 100-500 records | 1-2 minutes |
| 500-1,000 records | 2-5 minutes |

## Auto-Enrichment

After import, Abmatic automatically enriches your records with additional intelligence:

### Account Enrichment

| Data Added | Source |
|------------|--------|
| Company description | Web scraping |
| Employee count | Public data |
| Industry classification | ML classification |
| Technologies used | Technographics |
| Social profiles | LinkedIn, Twitter |
| Funding information | Public records |

### Contact Enrichment

| Data Added | Source |
|------------|--------|
| Full name formatting | Data normalization |
| Job title standardization | ML classification |
| Seniority level | Title analysis |
| Company linking | Domain matching |
| LinkedIn profile | Email/name matching |

:::info Enrichment Timing
Enrichment runs in the background and may take several hours for large imports. Records are immediately available for targeting—enrichment adds data as it completes.
:::

## CRM Auto-Push

Automatically push imported records to your connected CRM:

### Enabling Auto-Push

1. Go to **Integrations → [Your CRM]**
2. Enable **Auto-push new records**
3. Configure field mappings

### Push Workflow

```
CSV Import Complete → Check Sync Settings → Push to CRM → Store CRM IDs
```

This creates a two-way sync: your imported records appear in your CRM, and CRM IDs are stored back in Abmatic for future syncing.

## Example CSV Files

### Account Import Example

```csv
website,name,industry,employee_count,country
acme.com,Acme Inc,Software,500,United States
techco.io,TechCo,Technology,150,Canada
enterprise.com,Enterprise Corp,Financial Services,5000,United Kingdom
startup.ai,Startup AI,Artificial Intelligence,50,Germany
```

### Contact Import Example

```csv
work_email,first_name,last_name,job_title,job_company_name,linkedin_url
john@acme.com,John,Smith,VP Marketing,Acme Inc,linkedin.com/in/johnsmith
jane@techco.io,Jane,Doe,Director of Sales,TechCo,linkedin.com/in/janedoe
bob@enterprise.com,Bob,Johnson,CEO,Enterprise Corp,linkedin.com/in/bobjohnson
```

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Clean data before upload | Fewer errors, faster processing |
| Test with 10 rows first | Verify mapping before full import |
| Use clear column names | Better auto-mapping accuracy |
| Include primary keys | Every row needs website or email |
| Keep under 1,000 rows | Split large files for reliability |

### Don'ts

| Avoid | Why |
|-------|-----|
| Including duplicates | Creates unnecessary deduplication work |
| Empty primary key rows | These rows get skipped |
| Special characters in headers | Can cause mapping issues |
| Files over 1,000 rows | Split into multiple imports |

### Column Naming Tips

```
✅ Good: website, email, first_name, company, industry
❌ Bad: col1, col2, data, field, misc
```

## Troubleshooting

### Import Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Import fails | Wrong file format | Ensure file is .csv (not .xlsx) |
| Encoding errors | Non-UTF-8 encoding | Re-save as UTF-8 in Excel/Sheets |
| "File too large" | Over 1,000 rows | Split file into smaller chunks |
| Missing required field | No website/email column | Add the required primary key column |

### Data Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Missing data after import | Column not mapped | Check mapping screen for unmapped columns |
| Wrong data in fields | Incorrect mapping | Re-import with corrected mappings |
| Duplicates created | Wrong duplicate handling | Re-import with "Overwrite All" option |

### Enrichment Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| No enrichment data | Still processing | Wait 1-2 hours for background enrichment |
| Missing company info | Invalid domain | Verify domain is correct and accessible |
| No LinkedIn match | Insufficient data | Provide more contact details for matching |

## Importing for Contacts

The process for contacts is identical—just navigate to **Audiences → Contacts** instead:

![Create contact list modal with CSV option](/img/screenshots/contact-create-modal.png)

## Next Steps

After importing your lists:

| Next Action | Where | What You'll Achieve |
|-------------|-------|---------------------|
| [Create a Campaign](/campaigns/overview) | Campaigns | Target your imported accounts with personalization |
| [Set Up CRM Sync](/audiences/crm-sync) | Integrations | Keep your CRM in sync automatically |
| [Build Dynamic Lists](/audiences/target-groups) | Audiences | Create auto-updating segments from your imports |
| [Push to Ad Platforms](/audiences/linkedin-dmp) | Audiences | Target your accounts on LinkedIn and Google |
