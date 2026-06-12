---
id: filters
title: Using Filters to Build Audiences
sidebar_label: Filters
sidebar_position: 7
---

# Using Filters to Build Audiences

Filters decide exactly who lands in a Collection or campaign audience. Whether you're building account lists, contact lists, or campaign audiences, the filter builder is the same tool everywhere.

## Why Smart Filtering Drives Results

| Without Filters | With Abmatic AI Filters |
|-----------------|---------------------|
| Generic content for everyone | Personalized experiences for target accounts |
| Wasted spend on unqualified visitors | Budget focused on high-value prospects |
| Manual list management | Automatic audience updates for Dynamic Collections |
| Guessing who your ICP is | Data-driven segmentation by firmographics and behavior |

---

## How the Filter Builder Works

Every filter rule follows a simple three-part structure: **Selector → Operator → Value**.

![The filter builder showing the Selector, Operator and Value fields, the Add Rule control, and the Estimated Accounts panel](/img/screenshots/filt-builder.png)

1. **Selector** — the field to filter on (e.g. Industry, Employee Count, Country)
2. **Operator** — how to match (e.g. *is*, *is above*, *contains*)
3. **Value** — what to match against (e.g. *Information Technology*, *500*, *United States*)

**To build a filter:**

1. Click the **Selector** dropdown and pick your field.
2. Choose an **Operator** from the second dropdown.
3. Enter your **Value** in the third field.
4. Click the **checkmark** to confirm the rule.
5. Click **+ RULE** to add more conditions (combined with AND by default).
6. Click **Save** (or **Save Dynamic Collection** for a dynamic list) when done.

:::note Operator labels
The builder shows operators as readable phrases — *is*, *is not*, *is above*, *is below*, *is any of*, *is none of* — not code-style names. This page uses those exact labels.
:::

---

## Where Filters Are Used

| Location | What It Filters | How to Access |
|----------|----------------|---------------|
| **Account Collections** | Company-level targeting | Accounts → + Account List → Static/Dynamic |
| **Contact Collections** | People-level targeting | Contacts → + Contact List → Static/Dynamic |
| **Campaign Audiences** | Who sees your campaign | Campaigns → edit a campaign → **Audience** tab |
| **Collections page** | Filter the list of collections itself | Accounts/Contacts → **FILTERS** button |

The interface is identical everywhere — learn it once, use it everywhere.

---

## Filter Categories

### Geolocation

| Field | What It Does |
|-------|-------------|
| **Country** | Match by country |
| **City** | Match by specific city |
| **Region** | Match by state/province |
| **Time Zone** | Match by timezone |

### Company Firmographics

| Field | What It Does |
|-------|-------------|
| **Company Name** | Match specific companies |
| **Domain** | Match by website domain |
| **Employee Count** | Filter by exact headcount |
| **Annual Revenue** | Filter by revenue |
| **Industry** | Business sector (GICS standard) |
| **Sub-Industry** | Vertical within an industry |
| **Company Type** | Public, Private, Nonprofit, etc. |
| **Company Size** | Size-range buckets (e.g. 501-1000) |
| **Founded Year** | Company age |

### Behavioral

| Field | What It Does |
|-------|-------------|
| **Total Page Views** | Pages viewed across sessions |
| **Total Sessions** | Number of visits |
| **Visited Pages** | Specific URLs they've seen |
| **Referrer** | Where traffic came from |
| **Technologies** | Detected technologies in the company's stack |
| **AI Conversations** | Whether/how the account has engaged Agentic Chat |

:::tip New selectors
**Technologies** and **AI Conversations** are recent additions to the filter builder — handy for technographic targeting and for finding accounts that have already chatted with your agent.
:::

### UTM Parameters

| Field | Example Values |
|-------|----------------|
| **utm_campaign** | `spring-launch`, `webinar-2026` |
| **utm_medium** | `email`, `cpc`, `social`, `organic` |
| **utm_source** | `google`, `linkedin` |
| **utm_term** | Paid search keywords |
| **utm_content** | A/B test variations |

### Engagement & Scoring

| Field | What It Does |
|-------|-------------|
| **Temperature** | Engagement heat (Hot, Warm, Cold, None) |
| **Total Engagement Score** | Combined engagement metric |
| **Website Engagement Score** | Website-specific activity |
| **LinkedIn Engagement Score** | LinkedIn activity |
| **Agentic Chat Engagement Score** | Engagement from AI chat conversations |
| **Account List** | Membership in another collection (great for include/exclude) |

### Contact-Specific (IP Lookup)

| Field | What It Does |
|-------|-------------|
| **Person Job Title Role** | Standardized function (Marketing, Sales, Engineering) |
| **Person Job Title Sub Role** | More specific function (Content Marketing, SDR) |
| **Person Job Title Levels** | Seniority (C-Level, VP, Director, Manager, IC) |
| **Company Name** | Contact's employer |
| **Company Size** | Employer headcount range |

### CRM Filters

If you have Salesforce or HubSpot connected, CRM-specific fields appear:

**Salesforce:** Account Name, Account Phone, Billing/Shipping City and Country, Temperature, and Total / Website / LinkedIn Engagement Scores.

**HubSpot:** Company Domain Name, Company Name, Deal Name.

### Custom & Language

| Field | What It Does |
|-------|-------------|
| **Custom Fields (Account)** | Any custom fields you've defined in **Settings → Custom Fields** |
| **Query String** | Match custom URL parameters for specialized tracking |
| **Preferred Language** | Browser language (en, es, fr, de, ja, zh) |

---

## Standardized Field Values

Some fields use standardized values so filtering stays consistent.

### Job Title Seniority Levels

| Level | Who It Includes |
|-------|-----------------|
| **C-Level** | CEO, CTO, CFO, CMO, COO |
| **VP Level** | VPs and SVPs |
| **Director Level** | Directors and Sr. Directors |
| **Manager Level** | Managers and Team Leads |
| **Senior IC** | Senior Engineers, Senior Analysts |
| **Individual Contributor** | Engineers, Analysts, Specialists |
| **Entry Level** | Associates, Assistants, Interns |

### Industry (GICS)

Consumer Discretionary · Consumer Staples · Energy · Financials · Health Care · Industrials · Information Technology · Materials · Telecommunication Services · Utilities

### Company Size Ranges

1-10 · 11-50 · 51-200 · 201-500 · 501-1000 · 1001-5000 · 5001-10000 · 10001+

---

## Operator Reference

Different field types support different operators. These are the exact labels shown in the builder.

### Text Fields

| Operator | What It Does |
|-----------|--------------|
| **is** | Exact match |
| **is not** | Excludes an exact match |
| **contains** | Text appears anywhere in the field |
| **does not contain** | Text does not appear |
| **begins with** | Starts with the value |
| **ends with** | Ends with the value |

### Numeric Fields

| Operator | What It Does |
|-----------|--------------|
| **is** | Equals an exact number |
| **is above** | Greater than |
| **is below** | Less than |
| **is between** | Within a range |

### List / Multi-Value Fields

| Operator | What It Does |
|-----------|--------------|
| **is any of** | Matches any of the selected values |
| **is none of** | Excludes all of the selected values |

---

## Using AND/OR Logic

### AND (all must match)

```
Industry is Technology
AND Employee Count is above 100
AND Country is United States
```

Result: only US tech companies with 100+ employees.

### OR (any can match)

```
Industry is Technology
OR Industry is Financial Services
OR Industry is Healthcare
```

Result: companies in any of these industries.

### Combining with Groups

Nest AND/OR blocks to express complex logic. Add a group to create nested conditions:

![A campaign audience filter using nested AND/OR groups](/img/screenshots/filt-groups.png)

This real "Inbound Enterprise" example shows:

1. **Country** is any of: Canada, US, UK, Germany, France, Spain, Italy
2. **AND Account List** is none of: Abmatic AI Customer List (excludes existing customers)
3. **AND** a grouped OR condition:
   - **Employee Count** is above 501
   - **OR Company Size** is any of: 501-1000, 1001-5000, 5001-10000, 10001+

This targets enterprise companies in key markets while excluding current customers — a common ABM pattern.

---

## Step-by-Step: Building Effective Audiences

### Step 1: Map your ICP to filters

| ICP Element | Filter Approach |
|-------------|-----------------|
| Company size | Employee Count or Company Size |
| Industry | Industry + Sub-Industry |
| Geography | Country, Region, or City |
| Job function | Person Job Title Role + Levels |
| Buying signals | Temperature, Total Page Views, Visited Pages |

### Step 2: Layer behavioral signals

| Signal | Filter |
|--------|--------|
| 5+ page views | Total Page Views is above 5 |
| Pricing page visit | Visited Pages contains /pricing |
| Return visitor | Total Sessions is above 2 |
| Hot temperature | Temperature is Hot |

### Step 3: Exclude non-targets

| Exclude | Filter |
|---------|--------|
| Existing customers | Account List is none of "Customer List" |
| Competitors | Account List is none of "Competitor List" |
| Thank-you visitors | Visited Pages does not contain /thank-you |

### Step 4: Test and refine

Start broad, use **Preview** to check the estimated count before saving a Static list, and narrow based on performance.

---

## Common Filter Recipes

### Enterprise ABM Campaign
```
Account List is any of Target Accounts Q1
AND Country is any of United States, Canada, United Kingdom
AND Employee Count is above 1000
```

### High-Intent SMB Prospects
```
Employee Count is between 50, 500
AND Total Page Views is above 3
AND Visited Pages contains /pricing
```

### Industry-Specific Decision-Maker Outreach
```
Industry is Healthcare
AND Person Job Title Levels is any of Director, VP, C-Level
AND Country is United States
```

### Hot Leads for Sales
```
Temperature is Hot
AND Person Job Title Levels is any of Director, VP, C-Level
AND Account List is none of Customer List
```

---

## Discovering New Accounts with Filters

Filters aren't only for campaign audiences — they're also your tool for exploring your database.

1. Start in **All Accounts** or **All Contacts**.
2. Apply exploratory filters and watch the live count update.
3. When the results look good, save them as a Static or Dynamic Collection.
4. Activate the new Collection in a campaign.

The auto-generated **Visitor Reveal** collection pairs well with filters — combine it with firmographic and engagement filters to surface high-intent companies already on your site.

---

## Best Practices

| Do | Don't |
|----|-------|
| Name filters descriptively | Use "Filter 1" |
| Combine firmographic + behavioral signals | Rely on a single filter type |
| Start broad, then narrow | Over-filter from the start |
| Use Account List to exclude customers | Waste impressions on existing buyers |
| Preview before saving Static lists | Save without checking the count |

---

## Troubleshooting

### Zero Audience Matches

| Cause | Solution |
|-------|----------|
| Filters too restrictive | Remove rules one at a time |
| Conflicting conditions | Check for contradictions (e.g. Country is US AND Country is UK) |
| No data for that field | Not every record has every field — try another filter |
| Typo in value | Double-check spelling |

### Filters Not Saving

| Cause | Solution |
|-------|----------|
| Incomplete rule | Fill in all three fields (Selector, Operator, Value) |
| Wrong value type | Numeric fields need numbers; text fields need text |
| Missing checkmark | Click the checkmark to confirm each rule |

---

## Related Documentation

- [Audiences Overview](/audiences/overview) — Getting started with audiences
- [Account Lists](/audiences/accounts) — Build and manage account collections
- [Contact Lists](/audiences/contacts) — Build and manage contact collections
- [Target Groups](/audiences/target-groups) — Organize audiences for campaigns
- [CSV Import](/audiences/csv-import) — Import data from spreadsheets
- [CRM Sync](/audiences/crm-sync) — Sync with your CRM
