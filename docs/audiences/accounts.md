---
id: accounts
title: Account Lists
sidebar_label: Account Lists
sidebar_position: 2
---

# Account Lists

Account Lists (Collections) are how you organize the companies you want to target. Identify, enrich, and group your highest-value accounts, then activate them in ABM campaigns, ads, and CRM sync.

<div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:'12px',overflow:'hidden',margin:'1.5rem 0'}}>
  <video controls preload="metadata" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} src="https://cdn.abmatic.ai/training/05-audiences.mp4"></video>
</div>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/05-audiences/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


![Account Collections list with summary cards and the collection table](/img/screenshots/acc-collections.png)

## Why Account Lists Drive ABM Success

| Before Abmatic AI | With Abmatic AI |
|----------------|--------------|
| Researching companies one by one | Accounts identified automatically from website traffic |
| Scattered data across spreadsheets and CRMs | A unified view with firmographic enrichment |
| Static lists that go stale | Dynamic Collections that update themselves |
| Hours spent building lists | Build focused segments quickly |

## Understanding Your Account Views

The Accounts page has two tabs.

### Collections Tab (Recommended Starting Point)

Collections are organized groups of accounts you use for campaigns. The summary cards at the top let you see and filter your lists by source.

| Collection Type | How It Works | Best For |
|-----------------|--------------|----------|
| **Dynamic** | Auto-updates based on your filter rules | ICP targeting, engagement-based lists that stay current |
| **Static** (Abmatic Filters) | A fixed snapshot from a one-time filter | Named account programs, ABM tiers, event follow-ups |
| **CSV** | Uploaded from a spreadsheet | Existing prospect lists, event attendees, purchased data |
| **Salesforce / HubSpot** | Pulled from your connected CRM | Pipeline accounts, existing customers |
| **Auto Generated** | Created automatically by Abmatic AI features | Visitor Reveal companies, campaign audience groups |

### All Accounts Tab

The master database of every account in your system, shown in a high-performance data grid.

![The All Accounts grid showing enriched columns such as Industry, Total Engagement Score, Name and LinkedIn URL](/img/screenshots/acc-all-ssrm.png)

Use this view to:

- **Search** any company by name or domain
- **Sort and filter** by any column (handled server-side — see below)
- **Create** a single account by LinkedIn URL with **+ Create Account**
- **Run bulk actions** across the whole database

#### How the grid works (server-side)

The Accounts and Contacts grids load data **server-side**. This means:

- **Filtering and sorting happen on the server**, so the grid stays fast even with very large databases.
- **Infinite scroll** loads more rows as you scroll — there's no "load all rows at once."
- A **live total count** (Rows) shows how many records match your current view.
- Column filter dropdowns fetch their available values from the server.
- **Select all / select all-except** works across pages: you can select everything (or everything except a few rows you uncheck) even for records that haven't loaded yet. Bulk actions then apply to that whole selection.

#### Engagement temperature

Accounts are bucketed by engagement score:

| Bucket | Score |
|--------|-------|
| **None** | No recorded engagement |
| **Cold** | 1–33 |
| **Warm** | 34–66 |
| **Hot** | 67+ |

#### New and notable columns

Recent additions to the grid (and to Performance tables on account detail):

| Column | What It Shows |
|--------|---------------|
| **Total / LinkedIn / Website / Agentic Chat Engagement Score** | The overall engagement score, broken down by channel — including a dedicated **Agentic Chat Engagement Score** |
| **Reveal Confidence** | How confident Abmatic AI is in the visitor-reveal match (see [Company Identification](/visitor-tracking/company-identification)) |
| **Technologies** | Detected technologies in the company's stack |
| **Demo Booked** | Whether a demo has been booked for this account |
| **Demo Booked At** | When the demo was booked |
| **Demo Scheduled At** | When the demo is scheduled to take place |
| **Conversations** / **Last Conversation** | Agentic Chat conversation activity |

:::tip Demo Booked tracking
When a demo is booked (for example, through Agentic Chat's meeting-booking handoff), the account shows a green **Demo Booked** badge on its Overview, Engagement, and Performance views, and the Demo Booked / Demo Booked At / Demo Scheduled At columns populate in the grid. The Performance table also shows **Demo AE** and **Demo Time**.
:::

---

## Static vs. Dynamic Lists: Which Should You Use?

This is the most important decision when creating a list.

| Feature | Static List | Dynamic List |
|---------|-------------|--------------|
| **How it works** | Snapshot of accounts matching your filters at save time | Continuously adds new accounts that match your rules |
| **Updates automatically?** | No — stays fixed | Yes — new matches are added over time |
| **When to use** | One-time campaigns, hand-curated ABM tiers, event lists | Ongoing campaigns, always-on targeting |
| **Manually add/remove?** | Yes | No — membership is controlled by filters |
| **Preview before saving?** | Yes — see estimated count | Saves immediately, then populates |

:::tip When in doubt, go Dynamic
If you want your list to stay current as new companies appear, choose Dynamic. Use Static only when you need a fixed, unchanging list.
:::

---

## Creating Account Lists

Click **+ Account List** in the top right of the Accounts page.

![The Target Accounts dialog with Import and Create options](/img/screenshots/aud-create-modal.png)

The dialog has two sections:

**Import** — bring in existing data:
- Upload from CSV
- Import from CRM

**Create** — build a new list from scratch:
- Static Collection
- Dynamic Collection

### Method 1: Static Collection (Filter Once, Fixed List)

A static collection takes a one-time snapshot of accounts that match your filters.

![The Static Collection filter builder with Selector, Operator and Value fields, an Estimated Accounts panel, and duplicate-handling options](/img/screenshots/acc-static-builder.png)

**Step-by-step:**

1. Click **+ Account List** → **Static Collection**.
2. Enter a descriptive name in the **Name** field (or rename the auto-generated one).
3. Build filter conditions in the **Select Filters** panel:
   - Choose a **Selector** (the field, e.g. Industry or Employee Count)
   - Choose an **Operator** (e.g. *is*, *is above*, *is below*)
   - Enter a **Value** (e.g. *Software* or *500*)
   - Click the **checkmark** to confirm the rule
4. Click **+ RULE** to add more conditions (they combine with AND by default).
5. Click **PREVIEW** (top right) to see the **Estimated Accounts** count.
6. Under **"What would you like to do with duplicates?"**, choose:
   - **Skip and keep existing fields** — don't overwrite any existing account data
   - **Overwrite existing fields** — replace data with the latest from this import
   - **Update only missing fields** — fill in blanks but keep existing values
7. Click **SAVE**.

**Example: an Enterprise Tech ICP list**

```
Selector: Industry         Operator: is        Value: Software
Selector: Employee Count   Operator: is above  Value: 500
Selector: Country          Operator: is        Value: United States
```

This creates a fixed list of US-based software companies with 500+ employees.

### Method 2: Dynamic Collection (Auto-Updating List)

A dynamic collection uses the same filter builder but keeps the list current. New accounts that match your criteria are added automatically.

**Step-by-step:**

1. Click **+ Account List** → **Dynamic Collection**.
2. Enter a meaningful name (the name must be at least 3 characters).
3. Build your filter conditions (same Selector / Operator / Value workflow).
4. Click **+ RULE** to add more conditions.
5. Click **Save Dynamic Collection**.

:::info How Dynamic Collections work
The helper panel sums it up: *"New visitors that match your filters will automatically be added to this collection."* Your list grows on its own as Abmatic AI identifies new companies from website traffic, CRM syncs, or enrichment — there is no manual refresh-frequency setting.
:::

### Method 3: Upload from CSV

1. Click **+ Account List** → **Upload from CSV**.
2. Upload your `.csv` file. Limits: **100 MB** and **10,000 records** per import.
3. Abmatic AI **auto-maps your columns** to its fields using AI; review and adjust any mappings on the **Map Fields** screen.
   - **Website / Domain** is the key identifier Abmatic AI uses to match and enrich accounts.
4. Choose duplicate handling, then click **CREATE MAPPING**.

:::tip CSV Best Practice
Always include the website domain column. Use root domains like `company.com` rather than `www.company.com`. See the full [CSV Import guide](/audiences/csv-import).
:::

### Method 4: Import from CRM

1. Click **+ Account List** → **Import from CRM**.
2. Choose your connected CRM (Salesforce, HubSpot, Pipedrive, or ActiveCampaign).
3. Build filters using CRM-native fields to choose which accounts to import.
4. Preview the matched accounts and pull them in.

:::info CRM Connection Required
You need a connected CRM for this method. If none is connected, the flow sends you to **Integrations**. See [CRM Sync](/audiences/crm-sync).
:::

---

## Account Data at Your Fingertips

Every account is enriched with firmographic intelligence:

### Company Basics

| Field | What It Tells You |
|-------|-------------------|
| **Website** | Primary identifier (domain) |
| **Name** | Official company name |
| **Industry / Sub-Industry** | Business sector for targeting |
| **Employee Count** | Company size for segmentation |
| **Revenue** | Estimated annual revenue |
| **Founded** | Company maturity indicator |

### Location & Enrichment

| Field | Use Case |
|-------|----------|
| **City, State, Country, Region, Timezone** | Geographic targeting and outreach timing |
| **LinkedIn URL** | Research and social selling |
| **Technologies** | Tech-stack compatibility |
| **Funding Stage** | Growth signals |
| **Parent Company** | Enterprise hierarchy mapping |

### Scoring

| Score | What It Indicates |
|-------|-------------------|
| **Fit Score** | How well the account matches your ICP |
| **Total Engagement Score** | Overall engagement, with LinkedIn / Website / Agentic Chat sub-scores |
| **Temperature** | Buying intent (Hot / Warm / Cold / None) |

---

## Real-World Use Cases

| Marketing Goal | List Type | Filter Setup |
|----------------|-----------|--------------|
| **ABM Tier-1 Program** | Static | Hand-pick 50–100 named accounts |
| **Enterprise Pipeline** | Dynamic | Industry is "Software" AND Employee Count is above 1,000 AND Country is "United States" |
| **Competitor Displacement** | Static | Import a CSV of companies using a competitor product |
| **Event Follow-Up** | Static (CSV) | Upload the attendee list |
| **Website Visitor Retargeting** | Dynamic | Use the auto-generated Visitor Reveal collection |
| **Expansion Opportunities** | Dynamic | Industry is "Technology" AND Temperature is "Hot" |

---

## Managing Your Account Lists

### Collection Status

| Status | What It Means |
|--------|---------------|
| **Draft** | Created but not yet processed |
| **Preview** | Sample data fetched (estimated count shown) |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use |
| **Error** | Something went wrong — check the filters or contact support |

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Use the search bar above the grid |
| **Filter by type** | Click a summary card (Dynamic, CSV, etc.) |
| **Sort** | Use the **Sort By** dropdown (default: Last Updated At) |
| **Rename** | Click the collection name to edit inline |
| **Per-list actions** | Open the row's `...` menu |
| **Delete** | Select the checkbox, then Delete |

:::note
Deleting a collection does not delete the underlying accounts. They stay in your All Accounts database.
:::

### Bulk actions on the grid

From the All Accounts tab (and inside a collection), the bulk-actions menu offers:

- **Show Filter Definition**
- **Export to CSV**
- **Push to CRM**
- **Push to Outreach** (when the Outreach integration is active)
- **Enrich**
- **Add to Group** / **Remove from Group**
- **Delete permanently** (All tab only)

You can also push to CRM or Outreach from the `...` menu on an individual account's **Overview** tab.

---

## Automatic Account Enrichment

Abmatic AI enriches every account with firmographic, technographic, social, and funding data. Enrichment runs automatically when accounts are added via CSV import, identified through Visitor Reveal, synced from your CRM, or when you trigger **Enrich** manually.

---

## Visitor Reveal Integration

Your website visitors automatically become accounts through Visitor Reveal:

1. An anonymous visitor arrives on your website.
2. Abmatic AI identifies their company in real time.
3. The company is added to your auto-generated **Visitor Reveal** collection.
4. Firmographic data is enriched.

Each revealed account carries a **Reveal Confidence** value, so you can prioritize the most certain matches. For details, see [Company Identification](/visitor-tracking/company-identification).

:::info
The Visitor Reveal collection updates in real time and can't be deleted — it's your continuously growing prospect database.
:::

---

## CRM Synchronization

Keep account data aligned across systems by importing from your CRM, pushing enriched accounts back, or enabling auto-push so new accounts sync on creation. You can also map fields such as **demo_booked** so demo activity flows to your CRM. See [CRM Sync](/audiences/crm-sync) for the full setup.

---

## Best Practices

| Do | Don't |
|----|-------|
| Use descriptive names ("2026-Q1-Enterprise-Tech-USA") | Generic names ("List 1", "New accounts") |
| Create focused segments per campaign | One massive list for everything |
| Use Dynamic lists for ongoing campaigns | Manually maintain lists that could auto-update |
| Use root domains in CSV imports | Include `www` or subdomains |
| Preview Static lists before saving | Save without checking the estimated count |

---

## Troubleshooting

### Accounts Not Importing

| Issue | Solution |
|-------|----------|
| CSV not uploading | Check the file is UTF-8 and under 100 MB / 10,000 rows |
| Accounts missing after import | Verify the website/domain column is mapped |
| Stuck in Processing | Wait for large imports; contact support if it stays stuck |
| Duplicate accounts | Use "Skip and keep existing fields" for duplicate handling |

### Collection Shows 0 Records

| Issue | Solution |
|-------|----------|
| Filters too restrictive | Remove filters one at a time to find the blocker |
| No matching data | Check the All Accounts tab first |
| Dynamic collection just created | Give it time to populate as new matches arrive |

---

## Recommend by AI (AI-Powered List Building)

Describe the account list you want in plain English and let AI build the filters for you. **Recommend by AI** interprets your request, generates the matching filter conditions, and writes them onto a new collection.

![The Recommend by AI screen showing four sample prompts and an "Ask the AI..." input](/img/screenshots/recommend-by-ai-interface.png)

### How to reach it

Recommend by AI opens as its own view (Collections → **Recommend by AI**) where you give the new list a name and describe what you want.

1. You'll see a chat-style screen with sample prompts and an **"Ask the AI..."** input.
2. Type a natural-language description of the list you want — or click one of the starter prompts.
3. AI generates the matching filter conditions and writes them onto the collection.
4. Review the **Estimated Accounts** count and **Preview** the matching companies.
5. Send follow-up messages in the same conversation to refine the list.

### Sample Prompts

The screen seeds four starter prompts:

| Sample Prompt | What It Does |
|---------------|--------------|
| "Create an account list for India-based Electronics companies with 200-2000 employees" | Builds a geo + industry + size filter in one step |
| "I want a more focused list with around 100 companies from my SAM list" | Narrows an existing segment to a tighter set |
| "Based on last year's event, create a target account list for upcoming SaaStr event in San Francisco" | Builds a geo-targeted list for conference outreach |
| "AE2 is looking for a target account list. Create a similar one to AE1 but in electronics industry" | Clones one rep's list and adapts it for another vertical |

You can also type any custom request — the AI understands industry, employee count, geography, revenue range, and more.

### Refining with follow-ups

The conversation is persistent within the session. After the first results, send messages like:

- *"Remove companies with fewer than 50 employees"*
- *"Also include companies in the UK"*
- *"Narrow this down to only SaaS companies"*

Each follow-up updates the filters and recalculates the estimated count.

:::tip When to use Recommend by AI
Use it when you know *what* you want but don't want to pick through the filter builder — especially for complex, multi-condition lists.
:::

---

## Related Documentation

- [Contact Lists](/audiences/contacts) — Manage individual contacts
- [Filters](/audiences/filters) — Complete guide to all available filters
- [CSV Import](/audiences/csv-import) — Detailed import instructions
- [CRM Sync](/audiences/crm-sync) — Integration setup guide
- [Company Identification](/visitor-tracking/company-identification) — How Visitor Reveal works
