---
id: accounts
title: Account Lists
sidebar_label: Account Lists
sidebar_position: 2
---

# Account Lists

Build targeted account lists in minutes—not hours. Abmatic AI helps you identify, organize, and activate your highest-value accounts for ABM campaigns that actually convert.

![Account Collections](/img/screenshots/accounts-list.png)

## Why Account Lists Drive ABM Success

| Before Abmatic | With Abmatic |
|----------------|--------------|
| Manually researching companies one by one | 30,000+ accounts automatically identified from website traffic |
| Scattered data across spreadsheets and CRMs | Unified view with 100+ firmographic data points |
| Static lists that become outdated | Dynamic collections that update automatically |
| Hours spent building target lists | Create focused segments in minutes |
| Guessing which accounts to prioritize | AI-powered scoring highlights ready-to-buy accounts |

## Understanding Your Account Views

Abmatic provides two powerful ways to work with accounts:

### Collections Tab (Recommended Starting Point)

Collections are organized groups of accounts for specific purposes:

| Collection Type | How It Works | Best For |
|-----------------|--------------|----------|
| **Dynamic** | Auto-updates based on filter rules | ICP targeting, engagement-based lists |
| **Static** | Fixed list you manually manage | Named account programs, ABM tiers |
| **CSV Import** | Uploaded from spreadsheet | Existing prospect lists, event attendees |
| **CRM Sync** | Pulled from Salesforce/HubSpot | Current pipeline, existing customers |
| **Auto Generated** | Created by Abmatic (Company Reveal) | Website visitor intelligence |

### All Accounts Tab

The master database of every account in your system:

- **Search** any company by name or domain
- **Filter** using advanced conditions
- **Export** to CSV for external analysis
- **Create** new account records manually

## Account Data at Your Fingertips

Every account includes comprehensive firmographic intelligence:

### Company Basics

| Field | What It Tells You |
|-------|-------------------|
| **Website** | Primary identifier (domain) |
| **Name** | Official company name |
| **Industry** | Business sector for targeting |
| **Employee Count** | Company size for segmentation |
| **Revenue** | Estimated annual revenue |
| **Founded** | Company maturity indicator |

### Location Intelligence

| Field | Use Case |
|-------|----------|
| **City, State, Country** | Geographic targeting |
| **Region** | Territory assignment |
| **Timezone** | Optimal outreach timing |

### Enrichment Data

| Field | Why It Matters |
|-------|----------------|
| **LinkedIn URL** | Social selling research |
| **Technologies** | Tech stack compatibility |
| **Funding Stage** | Growth trajectory signals |
| **Parent Company** | Enterprise hierarchy mapping |

### Engagement Scoring

| Score | What It Indicates |
|-------|-------------------|
| **Fit Score** | How well they match your ICP |
| **Engagement Score** | Website activity level |
| **Temperature** | Current buying intent (Hot/Warm/Cold) |
| **Overall Score** | Combined prioritization metric |

## Creating Account Lists

### Method 1: Build from Filters (Dynamic)

Create lists that automatically update as new accounts match your criteria:

1. Click **+ Account List**
2. Select **Dynamic Collection**
3. Build your filter conditions:

**Example: Enterprise Tech ICP**
```
Industry is "Software" OR "Technology"
AND Employee Count isAbove 500
AND Country is "United States"
```

4. Preview matching accounts
5. Name your collection and **Save**

**Available Filter Operators:**

| Operator | Use When |
|----------|----------|
| is / isNot | Exact matching |
| contains / doesNotContain | Partial text matching |
| isAbove / isBelow | Numeric comparisons |
| isBetween | Range filtering |
| isAny / isNone | Multiple value matching |

### Method 2: Upload CSV (Static)

Import existing account lists from spreadsheets:

1. Click **+ Account List**
2. Select **Upload from CSV**
3. Upload your file (max 1,000 rows)
4. Map columns to Abmatic fields:
   - **Website** (required) — company domain
   - Map additional fields as needed
5. Choose duplicate handling:
   - **Overwrite All** — replace existing data
   - **Skip** — keep existing records
   - **Overwrite Missing** — fill empty fields only
6. Name and **Import**

:::tip CSV Best Practice
Always include the website domain column—it's how Abmatic identifies and enriches accounts.
:::

### Method 3: Import from CRM

Pull accounts directly from your connected CRM:

1. Click **+ Account List**
2. Select **Import from CRM**
3. Choose your CRM (Salesforce, HubSpot, Pipedrive)
4. Build filters using CRM fields
5. Preview and **Import**

![Create Account List](/img/screenshots/account-create-modal.png)

### Method 4: Static Collection

Manually curate a fixed list of named accounts:

1. Click **+ Account List**
2. Select **Static Collection**
3. Search and add accounts individually
4. Or bulk-add from existing collections

## Managing Your Account Lists

### Editing Collections

**Dynamic collections:** Modify filter rules anytime—accounts update automatically.

**Static/CSV collections:** Add or remove individual accounts manually.

### Quick Actions

| Action | How To |
|--------|--------|
| **Rename** | Click collection name, edit inline |
| **Delete** | Select checkbox, click Delete |
| **Export** | Open collection, click Export |
| **Duplicate** | Use as template for new collection |

:::note
Deleting a collection doesn't delete the underlying accounts—they remain in your All Accounts database.
:::

## Automatic Account Enrichment

Abmatic enriches every account with data from premium providers:

### What Gets Enriched

- **Firmographics** — employee count, revenue, industry
- **Technographics** — technology stack detection
- **Social profiles** — LinkedIn company page
- **Funding data** — investment rounds, valuations

### When Enrichment Happens

- New accounts added via CSV import
- Companies identified through Company Reveal
- Manual enrichment requests

## Company Reveal Integration

Your website visitors automatically become accounts:

### How It Works

1. Anonymous visitor arrives on your website
2. Abmatic identifies their company in real-time
3. Account automatically added to "Company Reveal" collection
4. Full firmographic data enriched instantly

### Accessing Revealed Accounts

Navigate to **Audiences > Accounts** and find the **Company Reveal** collection—it contains every company that's visited your site.

:::info
The Company Reveal collection updates in real-time and cannot be deleted—it's your continuously growing prospect database.
:::

## CRM Synchronization

Keep your account data in sync across systems:

| Sync Direction | What Happens |
|----------------|--------------|
| **To Abmatic** | Import accounts from your CRM |
| **From Abmatic** | Push new accounts to CRM |
| **Two-Way** | Continuous bidirectional sync |

### Enable Auto-Push

1. Go to **Integrations > [Your CRM]**
2. Enable **Auto-push new accounts**
3. Configure field mappings
4. New accounts automatically sync on creation

## Best Practices

### List Organization

| Do | Don't |
|----|-------|
| Use descriptive names: "2026-Q1-Enterprise-Tech" | Generic names: "List 1", "New accounts" |
| Create focused segments for specific campaigns | One massive list for everything |
| Archive outdated lists regularly | Let inactive lists clutter your workspace |

### Data Quality

| Do | Don't |
|----|-------|
| Use root domains (company.com) | Include www or subdomains |
| Deduplicate after imports | Let duplicates accumulate |
| Keep enrichment current | Rely on stale data |

### Targeting Strategy

| Do | Don't |
|----|-------|
| Start broad, then narrow based on engagement | Begin with overly restrictive filters |
| Test targeting with preview before launching | Launch campaigns without verification |
| Monitor engagement and adjust | Set and forget |

## Troubleshooting

### Accounts Not Importing

| Issue | Solution |
|-------|----------|
| CSV not uploading | Check file is UTF-8 encoded, under 1,000 rows |
| Accounts not appearing | Verify website column is mapped correctly |
| Import errors | Review error log for specific issues |

### Duplicate Accounts

| Issue | Solution |
|-------|----------|
| Same company appearing twice | Accounts are unique by website + ID—merge manually if needed |
| Import creating duplicates | Use "Skip" duplicate handling option |

### Missing Enrichment Data

| Issue | Solution |
|-------|----------|
| Fields showing empty | Domain may not be in enrichment database |
| Enrichment not running | Verify domain resolves (no typos) |
| Partial data | Some companies have limited public information |

## Related Documentation

- [Contact Lists](/audiences/contacts) — Manage individual contacts
- [Target Groups](/audiences/target-groups) — Combine accounts and contacts
- [Filters](/audiences/filters) — Advanced filtering guide
- [CSV Import](/audiences/csv-import) — Detailed import instructions
- [CRM Sync](/audiences/crm-sync) — Integration setup
