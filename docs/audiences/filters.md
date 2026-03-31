---
id: filters
title: Using Filters to Build Audiences
sidebar_label: Filters
sidebar_position: 3
---

# Using Filters to Build Audiences

Stop wasting ad spend on the wrong visitors. Filters let you laser-target exactly who sees your personalized content, ensuring every impression counts. Whether you are building account lists, contact lists, or campaign audiences, the filter builder is your most powerful tool.

## Why Smart Filtering Drives Results

| Without Filters | With Abmatic Filters |
|-----------------|---------------------|
| Generic content for everyone | Personalized experiences for target accounts |
| Wasted ad spend on unqualified visitors | Budget focused on high-value prospects |
| Low conversion rates | 2-3x higher engagement from relevant audiences |
| Manual list management | Automatic audience updates in real-time |
| Guessing who your ICP is | Data-driven segmentation based on firmographics and behavior |

---

## How the Filter Builder Works

Every filter follows a simple three-part structure: **Selector + Operator + Value**.

![Filter Builder Interface](/img/screenshots/accounts-static-list.png)

1. **Selector** -- The data field you want to filter on (e.g., Industry, Employee Count, Country)
2. **Operator** -- How to match (e.g., "is", "isAbove", "contains")
3. **Value** -- What to match against (e.g., "Technology", "500", "United States")

**To build a filter:**
1. Click the **Selector** dropdown and search for your field
2. Choose an **Operator** from the second dropdown
3. Enter your **Value** in the third field
4. Click the checkmark to confirm the rule
5. Click **+ Rule** to add more conditions (combined with AND by default)
6. Click **Save** when your filter set is complete

You can add multiple rules, and they combine with AND/OR logic to create precise targeting criteria that match your ideal customer profile.

---

## Where Filters Are Used

Filters appear in multiple places across Abmatic:

| Location | What It Filters | How to Access |
|----------|----------------|---------------|
| **Account Collections** | Company-level targeting for lists | Audiences > Accounts > + Account List > Static/Dynamic |
| **Contact Collections** | People-level targeting for lists | Audiences > Contacts > + Contact List > Static/Dynamic |
| **Campaign Audiences** | Who sees your personalized content | Campaigns > Edit Campaign > Audience tab |
| **Collections page** | Filter the list of collections itself | Audiences > Accounts/Contacts > FILTERS button |

The filter builder interface is the same everywhere. Once you learn it in one place, you can use it everywhere.

---

## Filter Categories

### Geolocation Filters

Target visitors based on their geographic location to deliver region-specific messaging:

| Field | What It Does | Example Use Case |
|-------|--------------|------------------|
| **Country** | Match by visitor's country | Target North American prospects only |
| **City** | Match by specific city | Run local event promotions |
| **Region** | Match by state/province | Comply with regional regulations |
| **Time Zone** | Match by timezone | Schedule content for business hours |

**Example: Target Enterprise Buyers in North America**
```
Country IS ANY OF canada, united states
AND Time Zone IS BETWEEN -08:00, -05:00
```

### Company Firmographics

Filter by company characteristics to focus on your ideal customer profile:

| Field | What It Does | Best For |
|-------|--------------|----------|
| **Company Name** | Match specific companies | Named account targeting |
| **Domain** | Match by website domain | Account-based campaigns |
| **Employee Count** | Filter by company size (headcount) | Segment by market tier |
| **Annual Revenue** | Filter by revenue range | Qualify by buying power |
| **Industry** | Filter by business sector (GICS standard) | Industry-specific messaging |
| **Sub-Industry** | Filter by vertical within an industry | Niche targeting |
| **Company Type** | Filter by organization type | Public, Private, Nonprofit |
| **Company Size** | Filter by size range buckets | Quick segmentation (e.g., 501-1000, 1001-5000) |
| **Founded Year** | Filter by company age | Target startups vs. established companies |

**Example: Target Mid-Market SaaS Companies**
```
Employee Count IS ABOVE 50
AND Employee Count IS BELOW 500
AND Industry IS Information Technology
AND Business Classification IS SAAS
```

### Behavioral Filters

Identify high-intent visitors based on their engagement with your website:

| Field | What It Does | Why It Matters |
|-------|--------------|----------------|
| **Total Page Views** | Pages viewed across all sessions | Higher views = higher interest |
| **Total Sessions** | Number of visits to your site | Repeat visitors are warmer |
| **Visited Pages** | Specific URLs they have seen | Shows what topics interest them |
| **Referrer** | Where traffic came from | Identify quality traffic sources |

**Example: Target High-Intent Visitors**
```
Total Page Views IS ABOVE 5
AND Visited Pages CONTAINS /pricing
```

This catches visitors who have explored your site and checked pricing -- a strong buying signal.

### UTM Parameters

Filter by marketing campaign attribution to coordinate your multi-channel strategy:

| Field | What It Does | Example Values |
|-------|--------------|----------------|
| **utm_campaign** | Match specific campaigns | `spring-launch`, `webinar-2026` |
| **utm_medium** | Match traffic medium | `email`, `cpc`, `social`, `organic` |
| **utm_source** | Match traffic source | `google`, `linkedin`, `facebook` |
| **utm_term** | Match paid keywords | Search terms from ads |
| **utm_content** | Match ad content | A/B test variations |

**Example: Personalize for LinkedIn Campaign Visitors**
```
utm_source IS linkedin
AND utm_medium IS cpc
```

Show LinkedIn ad visitors messaging that continues the conversation from your ad creative.

### Engagement and Scoring Filters

| Field | What It Does | Best For |
|-------|--------------|----------|
| **Temperature** | Match by engagement heat (Hot, Warm, Cold) | Prioritize follow-up |
| **Total Engagement Score** | Combined engagement metric | Find most active accounts |
| **Website Engagement Score** | Website-specific activity level | Find frequent site visitors |
| **LinkedIn Engagement Score** | LinkedIn activity metric | Find socially active contacts |
| **Account List** | Match by membership in another collection | Include/exclude specific lists |

**Example: Target Hot Accounts Not Already Customers**
```
Temperature IS Hot
AND Account List IS NONE Abmatic AI Customer List
```

### Contact-Specific Filters (IP Lookup)

When building contact lists, you have access to person-level filters:

| Field | What It Does | Best For |
|-------|--------------|----------|
| **Person Job Title Role** | Standardized job function (Marketing, Sales, Engineering, etc.) | Role-based targeting |
| **Person Job Title Sub Role** | More specific function (Content Marketing, SDR, etc.) | Niche role targeting |
| **Person Job Title Levels** | Seniority level (C-Level, VP, Director, Manager, IC) | Decision-maker targeting |
| **Company Name** | Contact's employer | Account-based contact targeting |
| **Company Size** | Employer's headcount range | Size-based segmentation |

**Example: Target Marketing Decision-Makers at Enterprise Companies**
```
Person Job Title Role IS Marketing
AND Person Job Title Levels IS ANY OF Director, VP, C-Level
AND Company Size IS ANY OF 1001-5000, 5001-10000, 10001+
```

### CRM Filters

If you have Salesforce or HubSpot connected, CRM-specific fields are available:

**Salesforce Fields:**

| Field | What It Does |
|-------|--------------|
| **Account Name (Salesforce)** | Match by Salesforce account name |
| **Account Phone (Salesforce)** | Match by account phone number |
| **Billing City / Country (Salesforce)** | Match by billing address |
| **Shipping City / Country (Salesforce)** | Match by shipping address |
| **Temperature (Salesforce)** | Abmatic engagement temperature synced to Salesforce |
| **Total / Website / LinkedIn Engagement Score (Salesforce)** | Engagement metrics synced to Salesforce |
| **Jigsaw Company ID (Salesforce)** | Data.com identifier |

**HubSpot Fields:**

| Field | What It Does |
|-------|--------------|
| **Company Domain Name (HubSpot)** | Match by HubSpot company domain |
| **Company Name (HubSpot)** | Match by HubSpot company name |
| **Deal Name (HubSpot)** | Match by associated deal |

### Custom Fields

| Field | What It Does |
|-------|--------------|
| **Custom Fields (Account)** | Any custom fields you have defined on accounts (e.g., Natural name, Company Logo) |
| **Query String** | Match custom URL parameters for specialized tracking |

### Language Filters

| Field | What It Does |
|-------|--------------|
| **Preferred Language** | Browser language setting (en, es, fr, de, ja, zh) |

Use this to show content in your visitor's preferred language or route them to localized pages.

---

## Standardized Field Values

Abmatic uses canonicalized (standardized) values to ensure consistent filtering across your data. When you see these fields in the Selector, the values below are what you can match against:

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

### Job Title Functions

- Sales / Business Development
- Marketing
- Engineering / Technical
- Product
- Finance / Accounting
- HR / People Operations
- Operations
- Customer Success / Support
- Legal
- IT / Security

### Industry (GICS Classification)

Major industry categories following the Global Industry Classification Standard:

- Consumer Discretionary
- Consumer Staples
- Energy
- Financials
- Health Care
- Industrials
- Information Technology
- Materials
- Telecommunication Services
- Utilities

### Business Classification

- B2B
- B2C
- E-commerce
- Enterprise
- ISP
- Marketplace
- Mobile
- SAAS

### Company Size Ranges

When using the Company Size field (as opposed to Employee Count which takes exact numbers), these are the standard buckets:

- 1-10
- 11-50
- 51-200
- 201-500
- 501-1000
- 1001-5000
- 5001-10000
- 10001+

---

## Filter Conditions Reference

Different field types support different matching conditions:

### Text Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is** | Exact match | Known specific values |
| **is not** | Excludes exact match | Block specific values |
| **contains** | Text appears anywhere in the field | Partial matching |
| **does not contain** | Text does not appear | Exclude partial matches |
| **begins with** | Starts with value | URL path matching |
| **ends with** | Ends with value | Domain suffix matching |

### Numeric Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is** | Equals exact number | Specific thresholds |
| **is above** | Greater than | Minimum requirements (e.g., Employee Count > 500) |
| **is below** | Less than | Maximum caps (e.g., Revenue < 10M) |
| **is between** | Within range | Size or revenue bands |

### Enum/List Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is any of** | Matches any of the selected values | Include multiple values |
| **is not any of** / **is none of** | Excludes all selected values | Block multiple values |

---

## Using AND/OR Logic

Build sophisticated targeting with logical grouping:

### AND Logic (All Must Match)
Every condition must be true. Use this to narrow your audience:
```
Industry IS Technology
AND Employee Count IS ABOVE 100
AND Country IS United States
```
Result: Only US tech companies with 100+ employees.

### OR Logic (Any Can Match)
Any condition can be true. Use this to broaden your audience:
```
Industry IS Technology
OR Industry IS Financial Services
OR Industry IS Healthcare
```
Result: Companies in any of these three industries.

### Combining AND/OR with Groups

Create complex rules by nesting groups. In campaign audience filters, you can click **+ Group** to create nested logic blocks:

![Filter Groups with AND/OR](/img/screenshots/wp-audience-tab.png)

This real example from the "Inbound Enterprise" campaign shows:
1. **Country** is any of: Canada, US, UK, Germany, France, Spain, Italy
2. **AND Account List** is none of: Abmatic AI Customer List (excludes existing customers)
3. **AND** a grouped OR condition:
   - **Employee Count** is above 501
   - **OR Company Size** is any of: 501-1000, 1001-5000, 5001-10000, 10001+

This targets enterprise companies in key markets while excluding current customers -- a common pattern for ABM campaigns.

---

## Step-by-Step: Building Effective Audiences

### Step 1: Define Your ICP

Start with your Ideal Customer Profile and map each element to a filter:

| ICP Element | Filter Approach |
|-------------|-----------------|
| Company size | Employee Count or Company Size filters |
| Industry | Industry + Sub-Industry filters |
| Geography | Country, Region, or City filters |
| Job function | Person Job Title Role + Person Job Title Levels filters |
| Buying signals | Temperature, Total Page Views, Visited Pages |

### Step 2: Layer Behavioral Signals

Add intent indicators to find engaged visitors among your ICP matches:

| Behavioral Signal | What It Indicates | Filter to Use |
|-------------------|-------------------|---------------|
| 5+ page views | Active research phase | Total Page Views IS ABOVE 5 |
| Pricing page visit | Evaluating options | Visited Pages CONTAINS /pricing |
| Return visitor | Continued interest | Total Sessions IS ABOVE 2 |
| Multiple sessions | Building familiarity | Total Sessions IS ABOVE 3 |
| Hot temperature | Ready to buy | Temperature IS Hot |

### Step 3: Exclude Non-Targets

Use exclusion filters to avoid wasting spend:

| What to Exclude | How to Filter |
|-----------------|---------------|
| Existing customers | Account List IS NONE "Customer List" |
| Competitors | Account List IS NONE "Competitor List" |
| Unqualified visitors | Employee Count IS ABOVE 10 (remove very small companies) |
| Thank-you page visitors | Visited Pages DOES NOT CONTAIN /thank-you |

### Step 4: Test and Refine

| Action | Why |
|--------|-----|
| Start broad | Ensure sufficient audience size to learn from |
| Use Preview | Check estimated count before saving a Static list |
| Monitor engagement | Track which filters produce the best conversion rates |
| Add filters gradually | Narrow based on performance data, not assumptions |
| Review quarterly | Update for evolving ICP and market conditions |

---

## Common Filter Recipes

Here are ready-to-use filter combinations for popular marketing scenarios:

### Enterprise ABM Campaign
```
Account List IS ANY OF Target Accounts Q1
AND Country IS ANY OF United States, Canada, United Kingdom
AND Employee Count IS ABOVE 1000
```

### High-Intent SMB Prospects
```
Employee Count IS BETWEEN 50, 500
AND Total Page Views IS ABOVE 3
AND Visited Pages CONTAINS /pricing
```

### Industry-Specific Decision-Maker Outreach
```
Industry IS Healthcare
AND Person Job Title Levels IS ANY OF Director, VP, C-Level
AND Country IS United States
```

### Retarget Engaged Visitors (Not Yet Converted)
```
Total Sessions IS ABOVE 2
AND Total Page Views IS ABOVE 5
AND Visited Pages DOES NOT CONTAIN /thank-you
```

### LinkedIn Campaign Follow-Up
```
utm_source IS linkedin
AND utm_medium IS cpc
AND Total Page Views IS ABOVE 2
```

### New Market Expansion
```
Country IS ANY OF United Kingdom, Germany, France
AND Industry IS Information Technology
AND Employee Count IS ABOVE 200
```

### Hot Leads for Sales
```
Temperature IS Hot
AND Person Job Title Levels IS ANY OF Director, VP, C-Level
AND Account List IS NONE Customer List
```

---

## Dynamic vs. Static Audiences

| Type | How It Works | Best For |
|------|--------------|----------|
| **Dynamic** | Auto-updates as new visitors match your filters | Ongoing campaigns, always-on targeting |
| **Static** | Fixed membership captured at creation time | Specific account lists, one-time campaigns, event follow-ups |

**Use Dynamic audiences for most campaigns.** They automatically include new matching visitors without manual updates. Reserve Static for situations where you need a fixed, unchanging list.

---

## Discovering New Accounts with Filters and AI

Filters are not just for building campaign audiences. They are your primary tool for discovering new accounts and contacts in your database:

### Discovery Workflow

1. **Start in All Accounts or All Contacts** -- go to the complete database view
2. **Apply exploratory filters** -- try different combinations to uncover segments you did not know existed
3. **Check the count** -- see how many records match your criteria
4. **Save as a collection** -- if the results look promising, save them as a Static or Dynamic collection
5. **Activate in a campaign** -- use the new collection to power website personalization, ads, or sequences

### Using the Company Reveal Collection for Discovery

The auto-generated **Company Reveal** collection is a goldmine. It contains every company identified from your website traffic. Combine it with filters to find hidden opportunities:

```
Account List IS Company Reveal
AND Industry IS Information Technology
AND Employee Count IS ABOVE 500
AND Temperature IS Warm
```

This discovers enterprise tech companies that are visiting your website and showing interest -- but you might not have reached out to them yet.

---

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Name filters descriptively | "Enterprise Tech - West Coast" beats "Filter 1" |
| Combine firmographic + behavioral | Company fit + engagement = highest quality leads |
| Start broad, then narrow | Ensures you do not miss opportunities |
| Use Account Lists to exclude customers | Avoid wasting impressions on existing buyers |
| Preview before saving Static lists | Catch issues before committing |
| Use standardized fields when available | Consistent values = reliable filtering |

### Don'ts

| Avoid | Why |
|-------|-----|
| Over-filtering from the start | May result in zero audience |
| Ignoring behavioral signals | Misses high-intent visitors who fit your ICP |
| Set-and-forget audiences | Your ICP evolves; filters should too |
| Duplicate filters across campaigns | Creates maintenance headaches |
| Using only one filter type | Combining firmographic + behavioral + CRM filters produces the best results |

---

## Troubleshooting

### Zero Audience Matches

| Cause | Solution |
|-------|----------|
| Filters too restrictive | Remove filters one by one to identify which condition is blocking results |
| Conflicting conditions | Check for contradictory rules (e.g., Country IS US AND Country IS UK) |
| No data for that field | Not all accounts have every field populated -- try a different filter |
| Typo in value | Double-check spelling in your filter values |

### Audience Too Large

| Cause | Solution |
|-------|----------|
| Filters too broad | Add firmographic or behavioral qualifiers to narrow down |
| Missing exclusions | Add "Account List IS NONE" to exclude customers or non-targets |
| Only using one filter | Layer multiple conditions to get a more focused audience |

### Filters Not Saving

| Cause | Solution |
|-------|----------|
| Incomplete filter row | Ensure all three fields (Selector, Operator, Value) are filled in |
| Invalid value for the field type | Check that numeric fields have numbers and text fields have text |
| Missing checkmark confirmation | Click the checkmark after entering each rule |

### Missing Expected Companies

| Cause | Solution |
|-------|----------|
| Data not enriched yet | Check if the company has been identified and enriched in All Accounts |
| Wrong field selected | The same data may exist under different field names (e.g., Employee Count vs. Company Size) |
| Filter logic error | Review AND/OR grouping to make sure your logic matches your intent |

---

## Related Documentation

- [Audiences Overview](/audiences/overview) -- Getting started with audiences
- [Account Lists](/audiences/accounts) -- Build and manage account collections
- [Contact Lists](/audiences/contacts) -- Build and manage contact collections
- [Target Groups](/audiences/target-groups) -- Organize audiences for campaigns
- [CSV Import](/audiences/csv-import) -- Import data from spreadsheets
- [CRM Sync](/audiences/crm-sync) -- Sync with Salesforce, HubSpot, Pipedrive
