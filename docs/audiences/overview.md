---
id: overview
title: Audiences Overview
sidebar_label: Overview
sidebar_position: 1
---

# Audiences Overview

Stop wasting budget on the wrong accounts. Abmatic AI helps you build, enrich, and activate precision-targeted audiences that convert - across every marketing channel.

## Why Audience Management Matters

| Without Targeted Audiences | With Abmatic Audiences |
|---------------------------|------------------------|
| Spray-and-pray campaigns | Laser-focused targeting |
| Low conversion rates | 2-3x higher engagement |
| Wasted ad spend | Every dollar reaches decision-makers |
| Manual list building | AI-powered enrichment |
| Siloed channel data | Unified view across all touchpoints |

---

## Getting Started

Navigate to **Audiences** in the left sidebar to access:

- **Accounts** - Target companies for ABM campaigns
- **Contacts** - Target individuals for outreach

![Accounts List](/img/screenshots/accounts-list.png)

*Your audience command center: 260 collections, instant source filtering, and one-click list creation.*

---

## Understanding the Interface

### Collections vs All Accounts

| Tab | What You See | Best For |
|-----|--------------|----------|
| **Collections** | Organized target lists you've built | Running campaigns, syncing to ads |
| **All Accounts** | Every account in your system | Finding specific companies, bulk actions |

### Collection Summary Cards

The cards at the top give you instant visibility:

| Card | What It Shows |
|------|---------------|
| **All Collections** | Total number of lists |
| **Dynamic** | Auto-updating lists based on filters |
| **Salesforce/HubSpot** | CRM-synced collections |
| **Auto Generated** | System-created engagement lists |
| **CSV** | Manually imported lists |
| **Abmatic** | Lists built with Abmatic filters |

### Collection Table

| Column | Description |
|--------|-------------|
| **Name** | Collection name and type (Dynamic, CSV, etc.) |
| **Total Accounts** | Number of accounts in the list |
| **Status** | Done, Processing, or Draft |
| **Last Updated At** | When the list was last refreshed |

---

## Creating Your First Collection

Click **+ Account List** in the top right to open the creation modal.

![Account Create Modal](/img/screenshots/workflows/audience-02-create-modal.png)

*Four ways to build your target list: import existing data or create new segments.*

### Import Options

| Method | Best For | Time to Complete |
|--------|----------|------------------|
| **Upload from CSV** | Existing spreadsheets, event lists, purchased data | Minutes |
| **Import from CRM** | Leveraging Salesforce, HubSpot, or Pipedrive segments | Minutes |

### Create Options

| Method | Best For | How It Works |
|--------|----------|--------------|
| **Static Collection** | Fixed target lists, event attendees, named accounts | Filter once, list stays fixed |
| **Dynamic Collection** | Always-current segments, engagement-based targeting | Filters auto-refresh the list |

---

## Method 1: Static Collection (Filter Once)

Best for fixed target lists that won't change.

### Step 1: Click Static Collection

Select **Static Collection** from the Create section.

### Step 2: Build Your Filters

Add conditions to define your ideal accounts:

| Filter Category | Example Conditions | Why Use It |
|-----------------|-------------------|------------|
| **Firmographic** | Industry = Technology, Employees > 100 | Match your ICP |
| **Geographic** | Country = United States, Region = California | Local targeting |
| **Engagement** | Score = High, Visited last 30 days | Prioritize hot accounts |
| **CRM Data** | Stage = Prospect, Owner = Your SDR | Align with sales |

### Step 3: Preview and Save

1. Review matching account count
2. Enter a descriptive name (e.g., "Enterprise Tech - US - Q1 2026")
3. Click **Save Collection**

---

## Method 2: Dynamic Collection (Auto-Update)

Best for lists that should stay current as data changes.

### Step 1: Click Dynamic Collection

Select **Dynamic Collection** from the Create section.

### Step 2: Configure Filter Rules

Same filter options as static, but results update automatically.

### Step 3: Set Refresh Frequency

| Frequency | Best For | Trade-off |
|-----------|----------|-----------|
| **Real-time** | High-priority campaigns | Uses more resources |
| **Hourly** | Most use cases | Good balance |
| **Daily** | Large lists, less urgent campaigns | Best performance |

### Step 4: Save

1. Name your collection
2. Click **Save Collection**
3. Watch it update automatically as accounts match your criteria

---

## Method 3: CSV Import

Best for uploading existing lists from spreadsheets or external sources.

### Step 1: Click Upload from CSV

Select **Upload from CSV** from the Import section.

### Step 2: Upload Your File

- Maximum file size: 100 MB
- Maximum records: 1,000 per import
- Supported format: .csv files

### Step 3: Map Columns

Abmatic AI auto-suggests field mappings:

| Your CSV Column | Maps To |
|-----------------|---------|
| Company Name | Account Name |
| Website | Domain |
| Industry | Industry |
| Employee Count | Company Size |

### Step 4: Complete Import

1. Review the preview
2. Click **Import**
3. Your new collection appears in the list

---

## Method 4: CRM Import

Best for leveraging your existing CRM segments and lists.

### Step 1: Click Import from CRM

:::info CRM Connection Required
You'll need a connected CRM. If not set up, visit **Integrations** first.
:::

### Step 2: Select Source

| CRM | What You Can Import |
|-----|---------------------|
| **Salesforce** | Accounts, Contacts, Campaigns, Reports |
| **HubSpot** | Companies, Contacts, Lists |
| **Pipedrive** | Organizations, People |

### Step 3: Choose Records

- **All Records** - Import everything
- **By List/Segment** - Choose specific CRM lists
- **By Custom Filter** - Apply CRM filters

### Step 4: Start Import

1. Review settings
2. Click **Import**
3. Monitor progress in the collection list

---

## Activating Your Audiences

Your collections aren't just for organizing - they power every channel.

### Push to Advertising Platforms

| Platform | How to Activate | Match Rates |
|----------|-----------------|-------------|
| **LinkedIn Ads** | Click collection → Push to LinkedIn | 60-80% |
| **Google Ads** | Click collection → Push to Google | 40-60% |

### Sync to CRM

| Action | What Happens |
|--------|--------------|
| **Create Records** | New accounts added to CRM |
| **Update Existing** | Enrich existing CRM records |
| **Add to Campaign** | Associate with CRM campaign |

### Use in Campaigns

When creating any Abmatic campaign:
1. Go to **Campaigns** → **Create Campaign**
2. In the Audience tab, select your collection
3. Your personalization reaches exactly those accounts

---

## Managing Contacts

The **Contacts** section works similarly to Accounts, but focuses on individuals.

### Contact-Specific Fields

| Field | Description |
|-------|-------------|
| **Name** | Full name |
| **Email** | Email address |
| **Title** | Job title |
| **Company** | Associated account |
| **LinkedIn** | Profile URL |
| **Phone** | Phone number |

### Contact Sources

| Source | How They're Added |
|--------|-------------------|
| **Form Submissions** | Visitors who fill out tracked forms |
| **Contact Reveal** | Identified through IP intelligence |
| **CRM Import** | Synced from your CRM |
| **CSV Upload** | Manually imported |

---

## Best Practices

### Quality Over Quantity

:::tip Focus on Your ICP
A smaller list of high-fit accounts (100-500) often outperforms a large list of generic targets (5,000+). Quality targeting beats volume every time.
:::

### Naming Conventions

| Good Names | Why They Work |
|------------|---------------|
| "Enterprise Tech - US - Q1 2026" | Clear audience, location, timeframe |
| "Healthcare 500+ Employees" | Clear industry and size |
| "High Engagement Last 30 Days" | Clear behavioral criteria |

| Avoid | Why |
|-------|-----|
| "List 1", "Test", "Accounts" | No context, impossible to manage at scale |

### Keep Data Fresh

| Task | Frequency | Why It Matters |
|------|-----------|----------------|
| Review engagement scores | Weekly | Prioritize hot accounts |
| Clean stale records | Monthly | Remove outdated data |
| Verify CRM sync | Weekly | Ensure data consistency |
| Review collection performance | After campaigns | Optimize targeting |

---

## Troubleshooting

### Collection Shows 0 Records

| Cause | Solution |
|-------|----------|
| Filters too restrictive | Broaden criteria or remove conditions |
| No matching data | Check if data exists in "All Accounts" view |
| Still processing | Wait for import to complete |

### Import Failed

| Error | Solution |
|-------|----------|
| "File too large" | Reduce CSV to under 100 MB |
| "Too many records" | Split into batches of 1,000 |
| "Invalid format" | Ensure file is valid .csv format |
| "CRM connection error" | Reconnect integration in Settings |

### Records Not Syncing

| Issue | Solution |
|-------|----------|
| Sync delayed | Check logs in Integrations settings |
| Missing fields | Verify field mapping configuration |
| Duplicates created | Review matching rules |

---

## Next Steps

- **[Create Account Lists](/audiences/accounts)** - Deep dive into account targeting
- **[Build Contact Lists](/audiences/contacts)** - Target specific people
- **[Use Filters](/audiences/filters)** - Master audience segmentation
- **[CSV Import Guide](/audiences/csv-import)** - Detailed import instructions
- **[CRM Sync Guide](/audiences/crm-sync)** - CRM integration details
