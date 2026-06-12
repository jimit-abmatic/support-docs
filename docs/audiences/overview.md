---
id: overview
title: Audiences Overview
sidebar_label: Overview
sidebar_position: 1
---

# Audiences Overview

Audiences are how you decide *who* every Abmatic AI campaign reaches. You build, enrich, and organize your target companies and people into **Collections**, then point your campaigns, ads, and CRM sync at those Collections.

## Why Audience Management Matters

Targeting the right accounts means your website personalization, ads, and outreach all reach the companies and people who actually fit your ideal customer profile (ICP) — instead of spending budget on everyone.

| Without Targeted Audiences | With Abmatic AI Audiences |
|---------------------------|------------------------|
| Spray-and-pray campaigns | Focused, ICP-based targeting |
| Manual list building in spreadsheets | AI-assisted enrichment and list building |
| Lists that go stale | Dynamic Collections that auto-update |
| Siloed channel data | One unified view across web, ads, and CRM |

---

## Getting Started

Open the left icon sidebar and choose **Accounts** or **Contacts**:

- **Accounts** — target companies for ABM campaigns.
- **Contacts** — target individuals (people) for outreach and personalization.

![The Accounts page showing the Collections tab with summary cards and the collection table](/img/screenshots/aud-collections.png)

*Your audience command center: summary cards by source, a searchable collection table, and one-click list creation with the **+ Account List** button.*

---

## Understanding the Interface

### Collections vs All Accounts / All Contacts

Each page has two tabs:

| Tab | What You See | Best For |
|-----|--------------|----------|
| **Collections** | The organized target lists you've built or imported | Running campaigns, syncing to ads, CRM push |
| **All Accounts** / **All Contacts** | Every account or contact in your database | Searching specific companies/people, bulk actions |

### Collection Summary Cards

The cards across the top of the Collections tab let you see — and filter — your lists by source. Click a card to filter the table to that type:

| Card | What It Shows |
|------|---------------|
| **All Collections** | Total number of lists |
| **Dynamic** | Auto-updating lists built from filters |
| **Salesforce / HubSpot** | Lists synced from your connected CRM |
| **CSV** | Lists imported from a spreadsheet |
| **Abmatic** | Lists built with Abmatic filters |
| **Auto Generated** | System-created lists (e.g. Visitor Reveal, campaign audiences, form submissions) |

:::note
The exact set of cards depends on which sources you use. For example, you'll only see a **HubSpot** card if you have HubSpot connected and lists imported from it.
:::

### Collection Table

| Column | Description |
|--------|-------------|
| **Name** | The collection name, with its type shown underneath (Dynamic, CSV, Salesforce, Abmatic Filters, etc.) |
| **Total Accounts** / **Total Contacts** | How many records are in the list |
| **Status** | Draft, Processing, Preview, or Done |
| **Last Updated At** | When the list last changed |

Each row has a `...` menu for per-list actions, plus search and a **Sort By** control (default: Last Updated At).

---

## Creating Your First Collection

Click **+ Account List** (or **+ Contact List**) in the top right to open the creation dialog.

![The Target Accounts dialog with Import options (Upload from CSV, Import from CRM) and Create options (Static Collection, Dynamic Collection)](/img/screenshots/aud-create-modal.png)

*The dialog has two sections — Import existing data, or Create a new list from filters.*

### Import Options

| Method | Best For |
|--------|----------|
| **Upload from CSV** | Existing spreadsheets, event lists, purchased data |
| **Import from CRM** | Pulling segments from Salesforce, HubSpot, Pipedrive, or ActiveCampaign |

### Create Options

| Method | Best For | How It Works |
|--------|----------|--------------|
| **Static Collection** | Fixed target lists, event attendees, named accounts | Filter once; the list stays fixed |
| **Dynamic Collection** | Always-current segments, engagement-based targeting | New matching records are added automatically over time |

---

## Method 1: Static Collection (Filter Once)

Best for fixed target lists that shouldn't change after you build them.

1. Click **+ Account List** → **Static Collection**.
2. Build your filter conditions (Selector → Operator → Value). See the [Filters guide](/audiences/filters) for the full reference.
3. Click **Preview** (top right) to check the **Estimated Accounts** count.
4. Choose how to handle duplicates (Skip and keep existing fields / Overwrite existing fields / Update only missing fields).
5. Click **Save**.

---

## Method 2: Dynamic Collection (Auto-Update)

Best for lists that should stay current as new companies and people are identified.

1. Click **+ Account List** → **Dynamic Collection**.
2. Build the same kind of filter conditions as a Static Collection.
3. Click **Save Dynamic Collection**.

:::info How Dynamic Collections stay current
A Dynamic Collection re-runs its filters automatically. As the helper panel explains: *"New visitors that match your filters will automatically be added to this collection."* There is no manual "refresh frequency" setting — Abmatic AI keeps the list up to date for you.
:::

---

## Method 3: CSV Import

Best for uploading existing lists from spreadsheets or external sources.

1. Click **+ Account List** → **Upload from CSV**.
2. Upload your `.csv` file. Limits: **100 MB** and **10,000 records** per import.
3. Abmatic AI auto-maps your columns to its fields (you can adjust any mapping).
4. Choose duplicate handling, name your list, and click **Create Mapping**.

See the full [CSV Import guide](/audiences/csv-import) for column mapping details.

---

## Method 4: CRM Import

Best for leveraging your existing CRM segments and lists.

1. Click **+ Account List** → **Import from CRM**.
2. Choose your connected CRM and build filters using CRM-native fields.
3. Preview the matched records, then pull them in.

| CRM | What You Can Import |
|-----|---------------------|
| **Salesforce** | Accounts, Contacts, Leads, Opportunities |
| **HubSpot** | Companies, Contacts, Deals |
| **Pipedrive** | Organizations, Persons, Deals |
| **ActiveCampaign** | Accounts, Contacts, Deals |

:::info CRM Connection Required
You need a connected CRM first. If none is connected, the **Import from CRM** flow sends you to **Integrations** to set one up. See the [CRM Sync guide](/audiences/crm-sync).
:::

---

## Activating Your Audiences

Collections aren't just for organizing — they power every channel.

### Use in Campaigns

When you create any Abmatic AI campaign:

1. Go to **Campaigns** and click **+ CAMPAIGN**.
2. Pick a campaign type.
3. In the **Audience** tab, add an **Account List** (or **Contact List**) condition and choose your Collection.

Your personalization, ads, or sequence now reaches exactly the accounts in that list.

### Push to Advertising Platforms

You can push Collections to advertising audiences such as **LinkedIn Matched Audiences** and **Google Customer Match**, directly from a collection's `...` menu. Actual match rates are controlled by each ad platform.

### Sync to CRM

Push enriched accounts and contacts back to your CRM, or set up auto-push so new records flow automatically. See [CRM Sync](/audiences/crm-sync).

---

## Managing Contacts

The **Contacts** section works just like Accounts, but focuses on individuals.

### Contact Sources

| Source | How They're Added |
|--------|-------------------|
| **Form Submissions** | Visitors who fill out tracked forms |
| **Visitor Reveal** | People identified from website visits |
| **CRM Import** | Synced from your CRM |
| **CSV Upload** | Manually imported |

For details on identifying website visitors, see [Contact Reveal](/visitor-tracking/contact-reveal).

---

## Best Practices

:::tip Focus on Your ICP
A smaller list of high-fit accounts often outperforms a large, generic one. Quality targeting beats raw volume.
:::

### Naming Conventions

| Good Names | Why They Work |
|------------|---------------|
| "Enterprise Tech - US - Q1 2026" | Clear audience, location, timeframe |
| "Healthcare 500+ Employees" | Clear industry and size |
| "High Engagement Last 30 Days" | Clear behavioral criteria |

Avoid vague names like "List 1", "Test", or "Accounts" — they become impossible to manage once you have dozens of collections.

### Keep Data Fresh

| Task | Frequency | Why It Matters |
|------|-----------|----------------|
| Review engagement scores | Weekly | Prioritize hot accounts |
| Use Dynamic Collections for ongoing campaigns | — | They update themselves; no manual refresh |
| Verify CRM sync | Weekly | Keep data consistent across systems |

---

## Building Your First Audience: A Walkthrough

New to Abmatic AI audiences? This gets your first audience ready to power campaigns in about 10 minutes.

### Before You Start

Make sure you have:
- An Abmatic AI account with the tracking script installed ([Quick Start Guide](/getting-started/quick-start))
- A sense of who your ideal customer is (industry, size, geography)
- Optionally: a CSV of target accounts or a connected CRM

### Step 1: Decide what you're trying to accomplish

| Your Goal | Audience Type | Method |
|-----------|--------------|--------|
| Personalize the website for a specific industry | Dynamic Account Collection | Build from filters |
| Target a fixed list of accounts from sales | Static Account Collection | Upload CSV or import from CRM |
| Send personalized outreach to specific people | Contact Collection | Upload CSV with emails or import from CRM |
| Target companies that already visited your site | Dynamic Account Collection | Filter by engagement score or page views |
| Push an account list to LinkedIn for ads | Account Collection (any type) | Build it first, then push to LinkedIn |

### Step 2: Create a Dynamic Account Collection

1. Open **Accounts** from the left sidebar.
2. Click **+ Account List** → **Dynamic Collection**.
3. Build filters, for example:

```
Industry        is        Information Technology
Employee Count  is above  100
Employee Count  is below  1000
Country         is any of United States, Canada, United Kingdom
```

4. Click **Preview** to see how many accounts match.
5. Name it descriptively (e.g. `Mid-Market Tech - US/CA/UK - 100-1000 Employees`).
6. Click **Save Dynamic Collection**.

### Step 3: Use Your Audience in a Campaign

1. Go to **Campaigns** and click **+ CAMPAIGN**.
2. Choose a campaign type.
3. Open the **Audience** tab and add an **Account List** rule pointing at your new collection.
4. Optionally layer more rules (e.g. `Visited Pages contains /pricing` for higher intent).
5. Save.

As new accounts match your dynamic filters, they automatically enter the campaign.

### Common Mistakes to Avoid

| Mistake | What Happens | Instead |
|---------|-------------|---------|
| Filters too narrow | Collection has only a handful of accounts | Start broad (industry + country), then narrow |
| One huge list for everything | Can't personalize messaging | Separate collections per campaign or segment |
| Forgetting to exclude customers | Customers see acquisition messaging | Keep a "Customers" list and use it as an exclusion |
| Never updating static lists | Lists go stale within weeks | Use Dynamic Collections for ongoing campaigns |

---

## Troubleshooting

### Collection Shows 0 Records

| Cause | Solution |
|-------|----------|
| Filters too restrictive | Broaden criteria or remove conditions |
| No matching data | Check the All Accounts / All Contacts tab |
| Still processing | Wait for the import or build to finish |

### Import Failed

| Error | Solution |
|-------|----------|
| "File too large" | Reduce the CSV to under 100 MB |
| "Too many records" | Split into batches of 10,000 |
| "Invalid format" | Make sure the file is a valid `.csv` |
| "CRM connection error" | Reconnect the integration in Settings |

---

## Next Steps

- **[Account Lists](/audiences/accounts)** — Deep dive into account targeting
- **[Contact Lists](/audiences/contacts)** — Target specific people
- **[Filters](/audiences/filters)** — Master audience segmentation
- **[CSV Import](/audiences/csv-import)** — Detailed import instructions
- **[CRM Sync](/audiences/crm-sync)** — CRM integration details
