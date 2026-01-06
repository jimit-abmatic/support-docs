---
id: filters
title: Using Filters to Build Audiences
sidebar_label: Filters
sidebar_position: 3
---

# Using Filters to Build Audiences

Filters allow you to create targeted audiences based on company firmographics, visitor behavior, and contact attributes. This guide covers all available filter fields and how to use them effectively.

## How Filters Work

Filters use a **field + condition + value** structure:

1. **Field** - What attribute to filter on (e.g., Industry, Company Size)
2. **Condition** - How to match (e.g., "is", "contains", "is not")
3. **Value** - What to match against (e.g., "Technology", "1000+")

You can combine multiple filters with AND/OR logic to create complex targeting criteria.

![Accounts List with Filters](/img/screenshots/accounts-list.png)

## Filter Categories

### Geolocation Filters

Target visitors based on their geographic location:

| Field | Description | Example Values |
|-------|-------------|----------------|
| **Country** | Visitor's country | United States, Canada, United Kingdom |
| **City** | Visitor's city | San Francisco (US), London (UK), Toronto (CA) |
| **Region** | State/Province | California (US), Ontario (CA) |
| **Time Zone** | Visitor's timezone | -08:00, +00:00, +05:30 |

**Example**: Target visitors from the United States in Pacific timezone
- Country `is` United States
- AND Time Zone `is` -08:00

### Company Firmographics

Filter by company characteristics (requires data enrichment):

| Field | Description | Example Values |
|-------|-------------|----------------|
| **Company Name** | Organization name | Free text search |
| **Domain** | Company website | company.com |
| **Employee Count** | Company size | 1-10, 11-50, 51-250, 251-1K, 1K-5K, 5K-10K, 10K+ |
| **Annual Revenue** | Estimated revenue | $0-$1M, $1M-$10M, $10M-$50M, $50M-$100M, $100M+ |
| **Industry** | Business sector | Technology, Healthcare, Financial Services |
| **Sub-Industry** | Specific industry vertical | SaaS, Biotechnology, Investment Banking |
| **Company Type** | Organization type | Private, Public, Nonprofit, Government, Education |
| **Founded Year** | When company was founded | 2018-2020, 2014-2017, 2010-2013, etc. |

**Example**: Target mid-market SaaS companies
- Employee Count `is` 51-250
- AND Industry `is` Information Technology
- AND Business Classification `is` SAAS

### Behavior Filters

Filter based on visitor activity on your website:

| Field | Description | Conditions |
|-------|-------------|------------|
| **Total Page Views** | Number of pages viewed | is above, is below, is between |
| **Total Sessions** | Number of visit sessions | is above, is below, is between |
| **Visited Pages** | Specific pages visited | contains, begins with |
| **Referrer** | Traffic source | contains, begins with, is |

**Example**: Target high-intent visitors
- Total Page Views `is above` 5
- AND Visited Pages `contains` /pricing

### UTM Parameters

Filter by marketing campaign attribution:

| Field | Description | Usage |
|-------|-------------|-------|
| **utm_campaign** | Campaign name | Match specific campaigns |
| **utm_medium** | Traffic medium | email, cpc, social, organic |
| **utm_source** | Traffic source | google, linkedin, facebook |
| **utm_term** | Paid keywords | Search terms |
| **utm_content** | Ad content | A/B test variations |

**Example**: Target visitors from LinkedIn ads
- utm_source `is` linkedin
- AND utm_medium `is` cpc

### Language Filters

| Field | Description |
|-------|-------------|
| **Preferred Language** | Browser language setting |

Common values: English (en), Spanish (es), French (fr), German (de), Japanese (ja), Chinese (zh)

### Custom Values

| Field | Description |
|-------|-------------|
| **Query String** | URL parameters | Match custom tracking parameters |

## Canonicalized Fields

Abmatic AI uses standardized (canonicalized) values for certain fields to ensure consistent filtering:

### Job Title Role

Standardized job function categories:

- Executive / C-Suite
- Vice President
- Director
- Manager
- Individual Contributor
- Consultant
- Intern

### Job Title Sub-Role

More specific job function:

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

### Job Title Levels

Seniority levels:

- C-Level (CEO, CTO, CFO, etc.)
- VP Level
- Director Level
- Manager Level
- Senior Individual Contributor
- Individual Contributor
- Entry Level

### Industry (Standardized)

Major industry categories following GICS classification:

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

Different field types support different conditions:

### Text Fields

| Condition | Description |
|-----------|-------------|
| **is** | Exact match |
| **is not** | Does not match |
| **contains** | Text appears anywhere |
| **does not contain** | Text does not appear |
| **begins with** | Text starts with value |

### Numeric Fields

| Condition | Description |
|-----------|-------------|
| **is** | Equals exact number |
| **is above** | Greater than |
| **is below** | Less than |
| **is between** | Within range (min-max) |

### Enum/List Fields

| Condition | Description |
|-----------|-------------|
| **is any of** | Matches any selected values |
| **is not any of** | Does not match any selected values |

## Building Effective Audiences

### 1. Start with ICP (Ideal Customer Profile)

Define your target based on:
- Company size that fits your product
- Industries you serve
- Geographic regions you target

### 2. Layer Behavioral Signals

Add intent indicators:
- High page view count
- Visits to key pages (pricing, demo, case studies)
- Return visitors

### 3. Use AND/OR Logic

- **AND** - All conditions must match (narrower audience)
- **OR** - Any condition can match (broader audience)

### 4. Test and Refine

- Start with broader filters
- Analyze results
- Add filters to narrow down
- Monitor conversion rates

## Dynamic vs. Static Audiences

### Dynamic Audiences

- Automatically update as new visitors match filters
- Real-time membership changes
- Ideal for ongoing campaigns

### Static Audiences

- Fixed membership at time of creation
- Manual updates required
- Ideal for specific account lists

## Best Practices

1. **Name filters descriptively** - "Enterprise Tech Companies - West Coast" is better than "Filter 1"

2. **Don't over-filter** - Start broad and narrow down based on results

3. **Combine firmographic + behavioral** - Best results come from combining company fit with engagement signals

4. **Review regularly** - Audit your filter logic quarterly to ensure it matches your evolving ICP

5. **Use saved filters** - Save commonly-used filter combinations for reuse

## Related

- [Audiences Overview](/audiences/overview)
- [Target Groups](/audiences/target-groups)
- [CSV Import](/audiences/csv-import)
- [CRM Sync](/audiences/crm-sync)
