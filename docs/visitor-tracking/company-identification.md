---
id: company-identification
title: Company Identification
sidebar_label: Company Identification
sidebar_position: 2
---

# Company Identification

**Turn anonymous website traffic into actionable account intelligence.** Abmatic AI identifies which companies are visiting your website—even when visitors don't fill out a form—giving you the foundation for effective account-based marketing.

:::tip Why This Matters
98% of your website visitors leave without identifying themselves. Company identification reveals who they are, so your sales team can prioritize outreach based on real intent signals rather than guesswork.
:::

---

## The Business Impact

| Before Abmatic | With Abmatic |
|----------------|--------------|
| "Someone visited our site" | "ServiceNow visited our pricing page 3 times this week" |
| React to form fills only | Proactively engage high-intent accounts |
| Unknown visitor intent | Clear buying signals by company |
| Spray-and-pray outreach | Targeted sales follow-up |

---

## How Company Identification Works

When someone visits your website, Abmatic runs a sophisticated identification process in milliseconds:

```
Visitor lands on your site
        ↓
Abmatic script captures visit data
        ↓
IP address matched against company database
        ↓
Company enriched with firmographic data
        ↓
Visit logged to company profile
```

### What Gets Captured

| Data Type | Examples | Why It Matters |
|-----------|----------|----------------|
| **Company Identity** | Name, domain, logo | Know exactly who's visiting |
| **Firmographics** | Industry, size, revenue | Qualify fit instantly |
| **Location** | Country, city, timezone | Target by geography |
| **Visit Behavior** | Pages, time, sessions | Gauge buying intent |
| **Confidence Level** | Very High to Very Low | Prioritize reliable data |

---

## Viewing Identified Companies

### Navigate to Reveal

1. Click **Reveal** in the left sidebar
2. Select **Accounts** tab

You'll see a list of all companies that have visited your website, complete with firmographic data and engagement metrics.

![Visitor Reveal - Accounts](/img/screenshots/reveal-accounts.png)

*The Visitor Reveal Accounts view shows 30,458 identified companies with confidence levels, industry, revenue, and company summaries.*

### Understanding the Dashboard

The top row shows your identification metrics at a glance:

| Metric | What It Shows | How to Use It |
|--------|---------------|---------------|
| **All Accounts** | Total companies identified | Track growth over time |
| **Very High** | Highest confidence matches | Prioritize for sales |
| **High** | Strong matches | Add to target lists |
| **Moderate** | Good matches | Include in campaigns |
| **Low** | Possible matches | Verify before acting |
| **Very Low** | Needs verification | Review manually |

### Account List Columns

| Column | What It Shows | Why It's Useful |
|--------|---------------|-----------------|
| **Domain** | Company website URL | Quick identification |
| **Name** | Company name | Match to CRM records |
| **Industry** | Business sector | Filter by vertical |
| **LinkedIn URL** | Company LinkedIn page | Research accounts |
| **Inferred Revenue** | Estimated annual revenue | Qualify by company size |
| **Summary** | AI-generated company description | Quick context |
| **Ticker** | Stock symbol (if public) | Identify enterprise accounts |

---

## Confidence Levels Explained

Not all identifications are equal. Abmatic provides confidence scores so you can prioritize reliable data:

| Confidence Level | Score Range | What It Means | Recommended Action |
|------------------|-------------|---------------|-------------------|
| **Very High** | 71-100% | Highly reliable identification | Prioritize for immediate sales outreach |
| **High** | 51-70% | Strong identification | Add to target account lists |
| **Moderate** | 31-50% | Good match, some uncertainty | Include in personalization campaigns |
| **Low** | 21-30% | Possible match | Verify before sales contact |
| **Very Low** | 6-20% | Needs verification | Review manually or monitor |

:::tip Focus on Quality
Start with High and Very High confidence companies for sales outreach. Use Moderate confidence for broader marketing campaigns where false positives matter less.
:::

---

## Filtering and Searching

### Quick Filters

Use the filter bar to narrow down results instantly:

| Filter | Options | Best Use Case |
|--------|---------|---------------|
| **Industry** | Dropdown of industries | Find healthcare or tech companies |
| **Revenue** | Revenue ranges | Target enterprise ($1B+) or mid-market |
| **Location** | Country/region | Focus on specific territories |
| **Confidence** | Very High to Very Low | Prioritize reliable data |
| **Last Seen** | Date range | Find recent visitors |

### Search

Type in the search box to find specific companies:
- Search by company name ("ServiceNow")
- Search by domain ("servicenow.com")
- Search by industry keyword ("software")

### Advanced Filtering

Click **FILTERS** for additional criteria:

| Advanced Filter | Description | Example |
|-----------------|-------------|---------|
| **Pages Visited** | Filter by specific URLs | Companies who visited /pricing |
| **Total Visits** | Visit count threshold | Companies with 3+ visits |
| **Total Page Views** | Engagement depth | Companies viewing 10+ pages |
| **First Visit Date** | New vs returning | New visitors this week |

---

## Understanding Identification Rates

Your identification rate depends on your traffic sources. Here's what to expect:

### Typical Rates by Traffic Source

| Traffic Source | Expected Rate | Why |
|----------------|---------------|-----|
| **Corporate Networks** | 60-80% | Static IP ranges map to companies |
| **LinkedIn Ad Traffic** | 50-70% | Users typically on corporate networks |
| **Email Campaigns** | 40-60% | Office hours, corporate devices |
| **Small Business** | 40-60% | May use shared IPs |
| **Home/Remote** | 10-20% | Residential IPs hard to map |
| **Mobile** | 5-15% | Carrier IPs are shared |
| **VPN Traffic** | 5-10% | Masks original IP |

### Why Some Visitors Can't Be Identified

| Reason | Explanation | Workaround |
|--------|-------------|------------|
| **Residential IP** | Working from home on personal internet | Use Contact Reveal for known visitors |
| **VPN/Proxy** | Company VPN or privacy tools | Identify via form fills |
| **Mobile Network** | Cellular data uses carrier IPs | Focus on desktop traffic |
| **Small Company** | May not have registered IP space | Enrich via CRM data |
| **Bot Traffic** | Search engines, monitoring tools | Auto-filtered by Abmatic |

:::tip Maximize Identification Rates
- Traffic from LinkedIn campaigns identifies well (corporate networks)
- Email campaigns clicking through often identify
- Morning/office hours traffic identifies better than evening
- Paid search traffic from branded terms often identifies
:::

---

## Taking Action on Identified Companies

### Add to Target Lists

Build campaign audiences from identified companies:

1. **Select** companies using checkboxes
2. Click **Add to List** (or use bulk actions)
3. Choose an existing list or create new

These lists power your:
- Website personalization campaigns
- LinkedIn Matched Audiences
- Google Customer Match
- CRM campaigns

### Push to CRM

Send company data to Salesforce or HubSpot:

1. **Select** companies to push
2. Click **Push to CRM**
3. Choose options:
   - Create new Account records
   - Update existing records
   - Add to specific campaign

The sync includes:
- Company name and domain
- Industry and revenue
- Location data
- First/last visit dates
- Page view count

### Export Data

Download company data for offline analysis:

1. **Select** companies (or select all)
2. Click **Export**
3. Choose format (CSV)

Export includes all visible columns plus additional firmographic data.

### Exclude Companies

Remove companies you don't want to track:

1. **Select** companies to exclude
2. Click **Exclude**
3. Confirm exclusion

Use exclusions for:
- **Competitors** - Don't reveal your hand
- **Existing customers** - Focus on new business
- **Partners** - Keep relationships separate
- **Internal traffic** - Your own employees

---

## Best Practices

### Daily Review Process

| Time | Action | Goal |
|------|--------|------|
| **Morning** | Check High/Very High confidence visitors | Identify hot leads |
| **Review** | Look at target accounts that visited | Prioritize sales follow-up |
| **Action** | Push top accounts to CRM | Enable sales outreach |
| **Build** | Add good-fit companies to lists | Grow campaign audiences |

### Sales Integration Workflows

| Use Case | How to Do It | Impact |
|----------|--------------|--------|
| **Real-time alerts** | Set up Slack notifications for target accounts | Instant awareness |
| **CRM sync** | Auto-push high-engagement companies | Enrich sales data |
| **Meeting prep** | Check if prospect visited before calls | Informed conversations |
| **Lead scoring** | Use engagement + fit for prioritization | Better conversion |

### Common Workflows

**"Who visited our pricing page?"**
1. Open Reveal > Accounts
2. Click FILTERS
3. Add filter: Pages Visited contains "/pricing"
4. Sort by Last Seen
5. Push High confidence matches to CRM

**"Which target accounts are engaged?"**
1. Open Reveal > Accounts
2. Filter by Confidence = High or Very High
3. Export or cross-reference with your target account list
4. Alert sales for follow-up

**"Find enterprise companies in my territory"**
1. Open Reveal > Accounts
2. Filter: Revenue > $100M
3. Filter: Location = [your territory]
4. Add to target list for personalization

---

## Troubleshooting

### No Companies Appearing

| Issue | Cause | Solution |
|-------|-------|----------|
| Empty list | Script not installed | Check [Install Script guide](/getting-started/install-script) |
| No new data | Low traffic volume | Allow 24-48 hours for data |
| All filtered out | Filters too restrictive | Clear filters and try again |

### Low Identification Rate

| Issue | Cause | Solution |
|-------|-------|----------|
| Under 20% | Mostly remote traffic | Focus on LinkedIn/email campaigns |
| Many "Very Low" | Mixed traffic sources | Filter to High confidence only |
| Declining rate | Traffic mix changing | Review traffic sources in analytics |

### Wrong Company Showing

| Issue | Cause | Solution |
|-------|-------|----------|
| Incorrect match | IP database error | Click "Report Incorrect" to flag |
| Old company name | Company rebranded | Will update in next data refresh |
| ISP showing | Shared IP address | Filter by confidence level |

---

## Related Features

| Feature | What It Does | Link |
|---------|--------------|------|
| **Contact Reveal** | Identify specific people, not just companies | [Contact Reveal](/visitor-tracking/contact-reveal) |
| **Page Views** | See detailed page-level activity | [Page Views](/visitor-tracking/page-views) |
| **Audiences** | Build targeted lists from identified companies | [Audiences Overview](/audiences/overview) |
| **Slack Alerts** | Get notified when key accounts visit | [Slack Integration](/integrations/slack) |
