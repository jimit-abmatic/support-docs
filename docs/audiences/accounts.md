---
id: accounts
title: Account Lists
sidebar_label: Account Lists
sidebar_position: 2
---

# Account Lists

Build targeted account lists in minutes -- not hours. Abmatic AI helps you identify, organize, and activate your highest-value accounts for ABM campaigns that actually convert.

![Account Collections](/img/screenshots/accounts-collections-final.png)

## Why Account Lists Drive ABM Success

| Before Abmatic | With Abmatic |
|----------------|--------------|
| Manually researching companies one by one | 30,000+ accounts automatically identified from website traffic |
| Scattered data across spreadsheets and CRMs | Unified view with 100+ firmographic data points |
| Static lists that become outdated | Dynamic collections that update automatically |
| Hours spent building target lists | Create focused segments in minutes |
| Guessing which accounts to prioritize | AI-powered scoring highlights ready-to-buy accounts |

## Understanding Your Account Views

Abmatic provides two tabs for working with your accounts:

### Collections Tab (Recommended Starting Point)

Collections are organized groups of accounts you use for campaigns. The summary cards at the top give you instant visibility into how many lists you have and their types.

| Collection Type | How It Works | Best For |
|-----------------|--------------|----------|
| **Dynamic** | Auto-updates based on filter rules you set | ICP targeting, engagement-based lists that stay current |
| **Static** | Fixed list created from a one-time filter snapshot | Named account programs, ABM tiers, event follow-ups |
| **CSV** | Uploaded from a spreadsheet file | Existing prospect lists, event attendees, purchased data |
| **Salesforce / HubSpot** | Pulled from your connected CRM | Current pipeline accounts, existing customers |
| **Auto Generated** | Created automatically by Abmatic features | Company Reveal visitors, campaign audience groups, inbound segments |
| **Abmatic Filters** | Built using Abmatic's filter builder | Custom segments based on firmographic or engagement data |

### All Accounts Tab

The master database of every account in your system. Use this view to:

- **Search** any company by name or domain
- **Create** new individual account records manually
- **Browse** the full enriched database

---

## Static vs. Dynamic Lists: Which Should You Use?

This is the most important decision when creating an account list. Here is a side-by-side comparison:

| Feature | Static List | Dynamic List |
|---------|-------------|--------------|
| **How it works** | Takes a snapshot of accounts matching your filters at the moment you save | Continuously monitors for new accounts that match your filter rules |
| **Updates automatically?** | No -- the list stays fixed after creation | Yes -- new matching accounts are added automatically |
| **When to use** | One-time campaigns, hand-curated ABM tiers, event follow-up lists | Ongoing campaigns, always-on targeting, growing prospect pools |
| **Duplicate handling** | You choose: Skip, Overwrite, or Update Missing | Not applicable (managed automatically) |
| **Can you manually add/remove?** | Yes | No -- membership is controlled by filter rules |
| **Preview before saving?** | Yes -- see estimated account count | No preview, but filters apply immediately after save |
| **Best example** | "Q1 2026 ABM Tier-1 Named Accounts" | "All Enterprise Tech Companies in the US with 500+ Employees" |

:::tip When in doubt, go Dynamic
If you want your list to stay current as new companies visit your website or get enriched, choose Dynamic. Use Static only when you need a fixed, unchanging list.
:::

---

## Creating Account Lists

Click the **+ Account List** button in the top right corner of the Accounts page to see all your options:

![Account Create Modal](/img/screenshots/account-create-modal.png)

The modal gives you four methods, split into two sections:

**Import** -- bring in existing data:
- Upload from CSV
- Import from CRM

**Create** -- build a new list from scratch:
- Static Collection
- Dynamic Collection

### Method 1: Static Collection (Filter Once, Fixed List)

A static collection takes a one-time snapshot of accounts that match your filter criteria. The list does not change after you save it.

![Static Collection Builder](/img/screenshots/accounts-static-list.png)

**Step-by-step:**

1. Click **+ Account List** on the Accounts page
2. Select **Static Collection** under the Create section
3. Enter a descriptive name in the **Name** field (e.g., "Enterprise Tech - US - Q1 2026")
4. Build your filter conditions in the **Select Filters** panel:
   - Choose a **Selector** (the field to filter on, such as Industry or Employee Count)
   - Choose an **Operator** (how to match, such as "is" or "isAbove")
   - Enter a **Value** (what to match against, such as "Software" or "500")
   - Click the checkmark to confirm the rule
5. Click **+ Rule** to add more conditions (they combine with AND logic by default)
6. Click **Preview** (top right) to see how many accounts match
7. Choose your **duplicate handling** option on the right:
   - **Skip and keep existing fields** -- do not overwrite any existing account data
   - **Overwrite existing fields** -- replace data with the latest from this import
   - **Update only missing fields** -- fill in blanks but keep existing values
8. Click **Save** to create your list

**Example: Build an Enterprise Tech ICP List**
```
Selector: Industry    Operator: is       Value: "Software"
Selector: Employee Count  Operator: isAbove  Value: 500
Selector: Country     Operator: is       Value: "United States"
```
This creates a fixed list of US-based software companies with 500+ employees.

### Method 2: Dynamic Collection (Auto-Updating List)

A dynamic collection uses the same filter builder but keeps the list current. New accounts that match your criteria are automatically added over time.

![Dynamic Collection Builder](/img/screenshots/accounts-dynamic-list.png)

**Step-by-step:**

1. Click **+ Account List** on the Accounts page
2. Select **Dynamic Collection** under the Create section
3. Enter a name in the **Name** field (Abmatic auto-generates one, but rename it to something meaningful)
4. Build your filter conditions in the **Select Filters** panel (same Selector / Operator / Value workflow as Static)
5. Click **+ Rule** to add more conditions
6. Click **Save Dynamic Collection** (top right) to activate

:::info How Dynamic Collections Work
The right panel explains it clearly: "New visitors that match your filters will automatically be added to this collection." This means your list grows organically as Abmatic identifies new companies from website traffic, CRM syncs, or enrichment.
:::

**Example: Always-Current Mid-Market Prospects**
```
Selector: Employee Count  Operator: isAbove    Value: 50
Selector: Employee Count  Operator: isBelow    Value: 500
Selector: Country         Operator: is         Value: "United States"
```
This dynamic list continuously captures every US mid-market company that Abmatic identifies.

### Method 3: Upload from CSV (Import Existing Data)

Import account lists from spreadsheets, event attendee lists, or purchased data:

1. Click **+ Account List** on the Accounts page
2. Select **Upload from CSV** under the Import section
3. Upload your .csv file (max 1,000 rows per import)
4. Map your CSV columns to Abmatic fields:
   - **Website** (required) -- the company domain is how Abmatic identifies and enriches accounts
   - Map additional fields as needed (Company Name, Industry, etc.)
5. Choose duplicate handling (Skip, Overwrite All, or Overwrite Missing)
6. Name your collection and click **Import**

:::tip CSV Best Practice
Always include the website domain column. It is the primary identifier Abmatic uses to match and enrich account data. Use root domains like `company.com` rather than `www.company.com` or subdomains.
:::

### Method 4: Import from CRM

Pull accounts directly from your connected CRM system:

1. Click **+ Account List** on the Accounts page
2. Select **Import from CRM** under the Import section
3. Choose your CRM (Salesforce, HubSpot, or Pipedrive)
4. Build filters using CRM-native fields to select which accounts to import
5. Preview the matched accounts
6. Click **Import**

:::info CRM Connection Required
You need a connected CRM integration to use this method. Visit **Integrations** in Settings to connect your CRM first.
:::

---

## Account Data at Your Fingertips

Every account includes comprehensive firmographic intelligence. Here is what Abmatic enriches for each company:

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

---

## Real-World Use Cases for Marketers

Here are practical examples of account lists you can build for common marketing scenarios:

| Marketing Goal | List Type | Filter Setup |
|----------------|-----------|--------------|
| **ABM Tier-1 Program** | Static | Hand-pick 50-100 named accounts from your ICP |
| **Enterprise Pipeline** | Dynamic | Industry is "Software" AND Employee Count > 1,000 AND Country is "United States" |
| **Competitor Displacement** | Static | Import a CSV of companies using a competitor product |
| **Event Follow-Up** | Static (CSV) | Upload attendee list from a trade show or webinar |
| **Website Visitor Retargeting** | Dynamic | Use the auto-generated Company Reveal collection |
| **Expansion Opportunities** | Dynamic | Industry is "Technology" AND Temperature is "Hot" |
| **New Market Entry** | Dynamic | Country is "United Kingdom" AND Employee Count > 200 |

---

## Managing Your Account Lists

### Collection Status

After creating or importing a list, it processes in the background:

| Status | What It Means |
|--------|---------------|
| **Draft** | Created but not yet processed |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use in campaigns |
| **Error** | Something went wrong -- check the filters or contact support |

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Use the search bar above the collections grid |
| **Filter by type** | Click a summary card (Dynamic, CSV, etc.) to filter the list |
| **Sort** | Use the Sort By dropdown (Last Updated At, Name, etc.) |
| **Rename** | Click the collection name to edit inline |
| **Delete** | Select the checkbox next to a collection and click Delete |
| **Export** | Open a collection and click the export/download icon |

:::note
Deleting a collection does not delete the underlying accounts. They remain in your All Accounts database and can be added to other collections.
:::

### Editing Collections

**Dynamic collections:** Modify the filter rules anytime. The account membership updates automatically based on the new criteria.

**Static/CSV collections:** Add or remove individual accounts manually. The list only changes when you make explicit edits.

---

## Automatic Account Enrichment

Abmatic enriches every account with data from premium providers:

### What Gets Enriched

- **Firmographics** -- employee count, revenue, industry, company type
- **Technographics** -- technology stack detection
- **Social profiles** -- LinkedIn company page
- **Funding data** -- investment rounds, valuations

### When Enrichment Happens

- New accounts added via CSV import
- Companies identified through Company Reveal
- Accounts synced from your CRM
- Manual enrichment requests

---

## Company Reveal Integration

Your website visitors automatically become accounts through Company Reveal:

1. An anonymous visitor arrives on your website
2. Abmatic identifies their company in real-time
3. The account is automatically added to the **Company Reveal** collection
4. Full firmographic data is enriched instantly

### Accessing Revealed Accounts

Navigate to **Audiences > Accounts** and find the **Company Reveal** collection in your list. It contains every company that has visited your site.

:::info
The Company Reveal collection updates in real-time and cannot be deleted. It is your continuously growing prospect database.
:::

---

## CRM Synchronization

Keep your account data in sync across systems:

| Sync Direction | What Happens |
|----------------|--------------|
| **To Abmatic** | Import accounts from your CRM |
| **From Abmatic** | Push new accounts to your CRM |
| **Two-Way** | Continuous bidirectional sync |

### Enable Auto-Push

1. Go to **Integrations > [Your CRM]**
2. Enable **Auto-push new accounts**
3. Configure field mappings
4. New accounts automatically sync on creation

---

## Best Practices

### List Organization

| Do | Don't |
|----|-------|
| Use descriptive names: "2026-Q1-Enterprise-Tech-USA" | Generic names: "List 1", "New accounts" |
| Create focused segments for specific campaigns | One massive list for everything |
| Use Dynamic lists for ongoing campaigns | Manually update lists that could be automated |
| Archive outdated lists regularly | Let inactive lists clutter your workspace |
| Filter collections by type using the summary cards | Scroll through hundreds of unorganized lists |

### Data Quality

| Do | Don't |
|----|-------|
| Use root domains (company.com) in CSV imports | Include www or subdomains |
| Deduplicate after imports | Let duplicates accumulate |
| Keep enrichment current | Rely on stale data from months ago |
| Verify domain resolves before importing | Import typo-filled spreadsheets |

### Targeting Strategy

| Do | Don't |
|----|-------|
| Start broad, then narrow based on engagement | Begin with overly restrictive filters |
| Combine firmographic + behavioral filters | Use only one type of filter |
| Preview results before saving a Static list | Save without checking the estimated count |
| Test targeting with a small campaign first | Launch to your entire database at once |
| Monitor engagement and adjust filters over time | Set and forget |

---

## Troubleshooting

### Accounts Not Importing

| Issue | Solution |
|-------|----------|
| CSV not uploading | Check the file is UTF-8 encoded and under 1,000 rows |
| Accounts not appearing after import | Verify the website/domain column is mapped correctly |
| Import stuck in Processing | Wait a few minutes for large imports; contact support if it stays stuck |
| Duplicate accounts created | Use "Skip and keep existing fields" for the duplicate handling option |

### Collection Shows 0 Records

| Issue | Solution |
|-------|----------|
| Filters too restrictive | Remove filters one by one to find the blocker |
| No matching data in the system | Check if accounts exist in the All Accounts tab first |
| Dynamic collection just created | Give it time -- it populates as new matching accounts are identified |
| Typo in filter value | Double-check spelling in your Selector values |

### Missing Enrichment Data

| Issue | Solution |
|-------|----------|
| Fields showing empty | The domain may not be in the enrichment database |
| Enrichment not running | Verify the domain resolves correctly (no typos) |
| Partial data | Some companies have limited public information available |

---

## Recommend by AI (AI-Powered List Building)

Skip the filter builder entirely and describe the account list you want in plain English. Abmatic's **Recommend by AI** feature uses AI to interpret your request, generate the right filters, and build a targeted list -- all from a single prompt.

![Recommend by AI interface showing sample prompts and chat input](/img/screenshots/recommend-by-ai-interface.png)

### How It Works

1. Navigate to **Audiences > Accounts** and click **+ Account List**
2. Select **Static Collection** (the AI recommendation feature works on top of a new collection)
3. From the collection editor, navigate to the **Recommend by AI** view
4. You will see a chat-like interface with sample prompts and an "Ask the AI..." input field
5. Type a natural language description of the account list you want -- or click one of the suggested prompts to get started
6. AI analyzes your request and automatically generates the matching filter conditions
7. Review the **Estimated Accounts** count and click **Preview** to see the matching companies
8. Refine your list with follow-up prompts in the same conversation

### Sample Prompts to Try

Recommend by AI shows four starter prompts to help you get going:

| Sample Prompt | What It Does |
|---------------|--------------|
| "Create an account list for India-based Electronics companies with 200-2000 employees" | Builds a geo + industry + company size filter in one step |
| "I want a more focused list with around 100 companies from my SAM list" | Narrows an existing segment to a tighter set |
| "Based on last year's event, create a target account list for upcoming SaaStr event in San Francisco" | Uses event context to build a geo-targeted list for conference outreach |
| "AE2 is looking for a target account list. Create a similar one to AE1 but in electronics industry" | Clones the logic from one rep's list and adapts it for another vertical |

You can also type any custom request -- the AI understands firmographic criteria like industry, employee count, geography, revenue range, and more.

### Reading the Results

After you submit a prompt, the AI responds with:

![Recommend by AI results showing estimated accounts and applied filters](/img/screenshots/recommend-by-ai-results.png)

- **Estimated Accounts** -- the number of accounts matching the generated filters
- **Preview** button -- opens the full account list so you can review individual companies
- **See Applied Filters** -- expand this accordion to inspect the exact filter rules the AI created (Selector, Operator, Value)

### Refining with Follow-Up Prompts

The conversation is persistent within the session. After the initial results, you can send follow-up messages to narrow or expand the list:

- *"Remove companies with fewer than 50 employees"*
- *"Also include companies in the UK"*
- *"Narrow this down to only SaaS companies"*

Each follow-up updates the filters and recalculates the estimated account count in real time.

:::tip When to Use Recommend by AI
Use Recommend by AI when you know *what* you want but don't want to spend time picking through the filter builder. It is especially useful for complex, multi-condition lists and for teams that prefer describing segments in business language rather than database fields.
:::

---

## Related Documentation

- [Contact Lists](/audiences/contacts) -- Manage individual contacts
- [Target Groups](/audiences/target-groups) -- Combine accounts and contacts for campaigns
- [Filters](/audiences/filters) -- Complete guide to all available filters
- [CSV Import](/audiences/csv-import) -- Detailed import instructions
- [CRM Sync](/audiences/crm-sync) -- Integration setup guide
