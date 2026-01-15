---
id: filters
title: Using Filters to Build Audiences
sidebar_label: Filters
sidebar_position: 3
---

# Using Filters to Build Audiences

Stop wasting ad spend on the wrong visitors. Filters let you laser-target exactly who sees your personalized content, ensuring every impression counts.

## Why Smart Filtering Drives Results

| Without Filters | With Abmatic Filters |
|-----------------|---------------------|
| Generic content for everyone | Personalized experiences for target accounts |
| Wasted ad spend on unqualified visitors | Budget focused on high-value prospects |
| Low conversion rates | 2-3x higher engagement from relevant audiences |
| Manual list management | Automatic audience updates in real-time |

## How Filters Work

Every filter follows a simple **field + condition + value** structure:

1. **Field** - What attribute to filter on (e.g., Industry, Company Size)
2. **Condition** - How to match (e.g., "is", "contains", "is above")
3. **Value** - What to match against (e.g., "Technology", "500+")

Combine multiple filters with AND/OR logic to create precise targeting criteria that match your ideal customer profile.

![Filter Builder with AND/OR Logic](/img/screenshots/wp-audience-tab.png)
*The filter builder in the "Inbound Enterprise" campaign showing Country, Account List, Employee Count, and Company Size filters with AND/OR grouping*

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
| **Employee Count** | Filter by company size | Segment by market tier |
| **Annual Revenue** | Filter by revenue range | Qualify by buying power |
| **Industry** | Filter by business sector | Industry-specific messaging |
| **Sub-Industry** | Filter by vertical | Niche targeting |
| **Company Type** | Filter by org type | Public, Private, Nonprofit |
| **Founded Year** | Filter by company age | Target startups vs. established |

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
| **Visited Pages** | Specific URLs they've seen | Shows what topics interest them |
| **Referrer** | Where traffic came from | Identify quality sources |

**Example: Target High-Intent Visitors**
```
Total Page Views IS ABOVE 5
AND Visited Pages CONTAINS /pricing
```

This filter catches visitors who've explored your site and checked pricing—a strong buying signal.

### UTM Parameters

Filter by marketing campaign attribution to coordinate your multi-channel strategy:

| Field | What It Does | Example Values |
|-------|--------------|----------------|
| **utm_campaign** | Match specific campaigns | `spring-launch`, `webinar-2024` |
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

### Language Filters

| Field | What It Does |
|-------|--------------|
| **Preferred Language** | Browser language setting (en, es, fr, de, ja, zh) |

Use this to show content in your visitor's preferred language or route them to localized pages.

### Custom Values

| Field | What It Does |
|-------|--------------|
| **Query String** | Match custom URL parameters |

Perfect for tracking custom UTM variants or internal routing parameters.

## Standardized Fields

Abmatic uses canonicalized (standardized) values to ensure consistent filtering across your data:

### Job Title Role

Standardized job function categories for consistent targeting:

- Executive / C-Suite
- Vice President
- Director
- Manager
- Individual Contributor
- Consultant
- Intern

### Job Title Seniority

| Level | Who It Includes |
|-------|-----------------|
| **C-Level** | CEO, CTO, CFO, CMO, COO |
| **VP Level** | VPs and SVPs |
| **Director Level** | Directors and Sr. Directors |
| **Manager Level** | Managers and Team Leads |
| **Senior IC** | Senior Engineers, Senior Analysts |
| **Individual Contributor** | Engineers, Analysts, Specialists |
| **Entry Level** | Associates, Assistants, Interns |

### Job Title Function

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

Major industry categories following Global Industry Classification Standard:

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

## Filter Conditions

Different field types support different matching conditions:

### Text Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is** | Exact match | Known specific values |
| **is not** | Excludes exact match | Block specific values |
| **contains** | Text appears anywhere | Partial matching |
| **does not contain** | Text doesn't appear | Exclude partial matches |
| **begins with** | Starts with value | URL path matching |

### Numeric Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is** | Equals exact number | Specific thresholds |
| **is above** | Greater than | Minimum requirements |
| **is below** | Less than | Maximum caps |
| **is between** | Within range | Size or revenue bands |

### Enum/List Fields

| Condition | What It Does | When to Use |
|-----------|--------------|-------------|
| **is any of** | Matches any selected | Include multiple values |
| **is not any of** | Excludes selected | Block multiple values |

## Using AND/OR Logic

Build sophisticated targeting with logical grouping:

### AND Logic (All Must Match)
Every condition must be true. Use this to narrow your audience:
```
Industry IS Technology
AND Employee Count IS ABOVE 100
AND Country IS United States
```
Result: Only US tech companies with 100+ employees

### OR Logic (Any Can Match)
Any condition can be true. Use this to broaden your audience:
```
Industry IS Technology
OR Industry IS Financial Services
OR Industry IS Healthcare
```
Result: Companies in any of these three industries

### Combining AND/OR with Groups

Create complex rules by nesting groups. The screenshot above shows:
1. **Country** is any of: Canada, US, UK, Germany, France, Spain, Italy
2. **AND Account List** is none of: Abmatic AI Customer List (exclude existing customers)
3. **AND** a grouped OR condition:
   - **Employee Count** is above 501
   - **OR Company Size** is any of: 501-1000, 1001-5000, 5001-10000, 10001+

This targets enterprise companies in key markets while excluding current customers.

## Building Effective Audiences

### Step 1: Define Your ICP

Start with your Ideal Customer Profile:

| ICP Element | Filter Approach |
|-------------|-----------------|
| Company size | Employee Count or Revenue filters |
| Industry | Industry + Sub-Industry filters |
| Geography | Country, Region, or City filters |
| Job function | Job Title Role + Seniority filters |

### Step 2: Layer Behavioral Signals

Add intent indicators to find engaged visitors:

| Behavioral Signal | What It Indicates |
|-------------------|-------------------|
| 5+ page views | Active research phase |
| Pricing page visit | Evaluating options |
| Return visitor | Continued interest |
| Multiple sessions | Building familiarity |

### Step 3: Test and Refine

| Action | Why |
|--------|-----|
| Start broad | Ensure sufficient audience size |
| Monitor performance | Track engagement and conversions |
| Add filters gradually | Narrow based on data |
| Review quarterly | Update for evolving ICP |

## Dynamic vs. Static Audiences

| Type | How It Works | Best For |
|------|--------------|----------|
| **Dynamic** | Auto-updates as new visitors match | Ongoing campaigns, always-on targeting |
| **Static** | Fixed membership at creation time | Specific account lists, one-time campaigns |

**Pro Tip**: Use dynamic audiences for most campaigns—they automatically include new matching visitors without manual updates.

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Name filters descriptively | "Enterprise Tech - West Coast" beats "Filter 1" |
| Combine firmographic + behavioral | Company fit + engagement = highest quality |
| Start broad, then narrow | Ensures you don't miss opportunities |
| Use Account Lists to exclude customers | Avoid wasting impressions on existing buyers |

### Don'ts

| Avoid | Why |
|-------|-----|
| Over-filtering from the start | May result in zero audience |
| Ignoring behavioral signals | Misses high-intent visitors |
| Set-and-forget audiences | ICP evolves, filters should too |
| Duplicate filters across campaigns | Creates maintenance headaches |

## Common Filter Combinations

### Enterprise ABM
```
Account List IS ANY OF Target Accounts Q1
AND Country IS ANY OF United States, Canada, United Kingdom
AND Employee Count IS ABOVE 1000
```

### High-Intent SMB
```
Employee Count IS BETWEEN 50, 500
AND Total Page Views IS ABOVE 3
AND Visited Pages CONTAINS /pricing
```

### Industry-Specific Campaign
```
Industry IS Healthcare
AND Job Title Role IS ANY OF Executive, Vice President, Director
AND Country IS United States
```

### Retargeting Engaged Visitors
```
Total Sessions IS ABOVE 2
AND Total Page Views IS ABOVE 5
AND Visited Pages DOES NOT CONTAIN /thank-you
```

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Zero audience matches | Filters too restrictive | Remove filters one by one to identify the blocker |
| Audience too large | Filters too broad | Add firmographic or behavioral qualifiers |
| Missing expected companies | Data not enriched | Check if companies have been identified and enriched |
| Filters not saving | Incomplete filter row | Ensure all fields (selector, condition, value) are filled |

## Related

- [Audiences Overview](/audiences/overview)
- [Target Accounts](/audiences/accounts)
- [Target Groups](/audiences/target-groups)
- [CSV Import](/audiences/csv-import)
- [CRM Sync](/audiences/crm-sync)
