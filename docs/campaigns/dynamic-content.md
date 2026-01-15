---
id: dynamic-content
title: Dynamic Content
sidebar_label: Dynamic Content
sidebar_position: 5
---

# Dynamic Content

Transform your static website into a personalized experience that speaks directly to each visitor. Dynamic content automatically replaces placeholders with real visitor data—company names, industries, locations, and CRM fields—creating 1:1 messaging at scale.

## Why Dynamic Content Drives Results

| Traditional Approach | With Abmatic Dynamic Content |
|---------------------|------------------------------|
| Generic "Welcome to our site" messaging | "Welcome back, Acme! See why Technology leaders choose us" |
| Same content for everyone | Industry-specific value propositions |
| Manual copy variations | Automatic personalization at scale |
| Low engagement rates | 2-3x higher conversion rates |

## How It Works

Dynamic content uses **personalization variables**—simple placeholders that automatically populate with real visitor data when the page loads.

**What you write:**
```
Welcome back, {{mt_company}}! See why {{mt_industry}} leaders choose us.
```

**What a visitor from Acme (Technology) sees:**
```
Welcome back, Acme! See why Technology leaders choose us.
```

No coding required. No complex logic. Just wrap any variable in double curly braces and Abmatic handles the rest.

## Available Variables

### Location Variables

Personalize based on where your visitors are browsing from:

| Variable | Description | Example | Best For |
|----------|-------------|---------|----------|
| `{{mt_country}}` | Country name | United States | Regional offers, compliance messaging |
| `{{mt_region}}` | State/Province | California | Local events, regional case studies |
| `{{mt_city}}` | City name | San Francisco | Hyper-local personalization |
| `{{mt_timezone}}` | Timezone offset | -08:00 | Scheduling, time-sensitive offers |
| `{{mt_preferredLanguage}}` | Browser language | English | Language-specific CTAs |

### Company Variables

Leverage Abmatic's IP-based company identification:

| Variable | Description | Example | Best For |
|----------|-------------|---------|----------|
| `{{mt_companyName}}` | Company name | Salesforce | Hero headlines, ABM messaging |
| `{{mt_industry}}` | Industry sector | Technology | Industry-specific value props |
| `{{mt_employees}}` | Employee range | 1000+ | Enterprise vs SMB messaging |
| `{{mt_revenue}}` | Revenue range | $1M-$5M | Pricing tier recommendations |
| `{{mt_website}}` | Company domain | salesforce.com | Competitive intelligence |

### CRM Variables

Pull real data from your connected CRM for known accounts:

**HubSpot:**
| Variable | Description | Best For |
|----------|-------------|----------|
| `{{mt_hubspot_company_name}}` | Company name | Accurate company naming |
| `{{mt_hubspot_contact_firstname}}` | Contact first name | Personal greetings |
| `{{mt_hubspot_contact_lastname}}` | Contact last name | Formal communications |
| `{{mt_hubspot_contact_jobtitle}}` | Job title | Role-based messaging |
| `{{mt_hubspot_company_industry}}` | Industry | Segment-specific content |

**Salesforce:**
| Variable | Description | Best For |
|----------|-------------|----------|
| `{{mt_salesforce_account_Name}}` | Account name | Named account personalization |
| `{{mt_salesforce_account_Industry}}` | Account industry | Vertical messaging |
| `{{mt_salesforce_contact_FirstName}}` | Contact first name | Personal touches |
| `{{mt_salesforce_contact_Title}}` | Contact title | Seniority-based CTAs |
| `{{mt_salesforce_account_OwnerId}}` | Account owner | Sales-aligned messaging |

### CSV Import Variables

Use your own data from CSV uploads:

| Variable | Description |
|----------|-------------|
| `{{mt_csv_[column_name]}}` | Any column from your uploaded CSV |

This lets you bring in custom fields like customer tier, renewal date, product usage, and more.

### Custom Variables

Create campaign-specific variables for maximum flexibility:

1. Open your campaign
2. In the page editor, click **Personalize**
3. Go to the **Custom Variables** tab
4. Click **+ Variable** to add your own

Custom variables are perfect for:
- A/B testing different value propositions
- Campaign-specific offers or messaging
- Seasonal promotions

## Using Dynamic Content

### In the Page Editor

![Page editor with personalization button](/img/screenshots/dynamic-content-editor.png)

1. Select any text element on your page
2. Click the **Personalize** button in the editor panel
3. Browse variables by category (Account Details, IP Reveal Details, Custom Variables)
4. Click a variable to insert it at your cursor position

### The Personalization Menu

![Personalization variables menu](/img/screenshots/dynamic-content-menu.png)

The menu organizes variables into tabs:

| Tab | What It Contains |
|-----|------------------|
| **Account Details** | CRM data (HubSpot, Salesforce) and CSV imports |
| **IP Reveal Details** | Location and company data from IP detection |
| **Custom Variables** | Campaign-specific variables you create |

### Fallback Values

Handle cases where data might not be available:

```
Welcome, {{mt_companyName|there}}!
```

If the company name isn't detected, visitors see: "Welcome, there!"

**Best practice:** Always set fallbacks for variables in hero headlines and primary CTAs.

## High-Impact Use Cases

### Industry-Specific Headlines

**Template:**
```
The #1 Platform for {{mt_industry}} Companies
```

**Visitors see:**
- "The #1 Platform for Healthcare Companies"
- "The #1 Platform for Financial Services Companies"
- "The #1 Platform for Technology Companies"

### Account-Based Hero Sections

**Template:**
```
{{mt_companyName}}, here's your personalized demo

Discover how we help {{mt_industry}} companies like yours achieve 3x growth.
```

### Location-Based Social Proof

**Template:**
```
See {{mt_region}} Success Stories →
```

**Visitors see:**
- "See California Success Stories →"
- "See Texas Success Stories →"
- "See New York Success Stories →"

### Personalized CTAs

**Template:**
```
Get Your {{mt_companyName}} Demo
```

Creates urgency and relevance compared to generic "Get a Demo" buttons.

### Role-Based Messaging

**Template:**
```
Hi {{mt_hubspot_contact_firstname}},

As {{mt_hubspot_contact_jobtitle}} at {{mt_companyName}}, you understand
the importance of [value proposition].
```

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Use in headlines | Maximum visibility and impact |
| Add to CTAs | Increases relevance and click-through |
| Include in social proof | "See how {{mt_industry}} leaders succeed" |
| Set fallback values | Ensures graceful degradation |
| Test with sample data | Catches formatting issues before launch |
| Combine with targeting | Show personalized content to the right segments |

### Don'ts

| Avoid | Why |
|-------|-----|
| Overusing variables | 2-3 per section is enough; more feels robotic |
| Navigation personalization | Too dynamic, can confuse users |
| Critical info without fallbacks | Missing data breaks the experience |
| Long variable names in short spaces | Can break layouts |
| Being "creepy" | Don't over-personalize; keep it helpful |

### Variable Length Considerations

| Variable Type | Typical Length | Layout Tip |
|---------------|----------------|------------|
| Company names | 5-30 characters | Allow for long names like "International Business Machines" |
| Cities | 5-20 characters | Most fit easily |
| Industries | 10-30 characters | Test with "Financial Services" |
| First names | 3-15 characters | Usually safe |

## Testing Your Dynamic Content

### Preview Mode

1. Open the page editor
2. Click **Preview**
3. The preview shows how variables will render with sample data
4. Test different scenarios (known vs unknown companies)

### Test Scenarios to Cover

| Scenario | What to Test |
|----------|--------------|
| Known company | Real company name, accurate industry |
| Unknown visitor | Fallback values display correctly |
| Short values | "IBM" (3 chars) doesn't break layout |
| Long values | "International Business Machines" fits |
| Special characters | "Johnson & Johnson" renders properly |
| Missing CRM data | Fallbacks work when CRM fields are empty |

### Live Testing

1. Create a test campaign with narrow targeting (e.g., your company's IP)
2. Visit your site matching the campaign criteria
3. Verify personalization appears correctly
4. Test in multiple browsers

## Troubleshooting

### Variable Shows {{mt_variable}} Instead of Value

| Cause | Solution |
|-------|----------|
| Typo in variable name | Check spelling: `{{mt_company}}` not `{{mt_compny}}` |
| Visitor doesn't match targeting | Verify campaign rules match the visitor |
| Data not available | Add a fallback: `{{mt_company|there}}` |
| Campaign not published | Publish the campaign to go live |

### Wrong Data Displaying

| Cause | Solution |
|-------|----------|
| IP detection inaccuracy | IP data is 80-90% accurate—use as supplement, not sole source |
| Stale CRM data | Check last sync time in Integrations |
| Wrong variable selected | Verify you're using the right CRM prefix (hubspot vs salesforce) |

### Layout Breaking

| Cause | Solution |
|-------|----------|
| Value longer than expected | Use CSS `overflow: hidden` or `text-overflow: ellipsis` |
| Missing data breaks sentence | Add fallback values for critical text |
| Variable in fixed-width element | Design flexible containers |

## Advanced Strategies

### Layered Personalization

Combine dynamic content with campaign targeting for sophisticated experiences:

**Campaign 1 - Enterprise Accounts:**
- Target: Employee Count > 1000
- Message: `Enterprise-grade security for {{mt_companyName}}`

**Campaign 2 - Growth Companies:**
- Target: Employee Count 50-500
- Message: `Scale faster with {{mt_companyName}}'s secret weapon`

### Progressive Personalization

Build richer experiences as you learn more about visitors:

| Stage | Available Data | Personalization Level |
|-------|---------------|----------------------|
| First visit | IP-based (company, location) | Industry headlines, regional proof |
| After form fill | Email domain, name | Personal greetings, role-based content |
| CRM match | Full CRM fields | Deep personalization with all fields |

### Multi-Campaign Orchestration

Use campaign priority to layer personalization:
1. Create industry-specific campaigns (highest priority)
2. Add company-size campaigns (medium priority)
3. Set location-based defaults (lowest priority)

Visitors see the most relevant personalization based on campaign matching.

## Related Resources

- [Website Personalization](/campaigns/website-personalization) - Create personalized campaigns
- [Page Editor](/campaigns/page-editor) - Edit pages with the visual editor
- [CRM Integrations](/integrations/overview) - Connect your CRM for richer data
- [Audience Filters](/audiences/filters) - Target the right visitors
