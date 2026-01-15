---
id: overview
title: Integrations Overview
sidebar_label: Overview
sidebar_position: 1
---

# Integrations Overview

Connect your marketing and sales stack to Abmatic AI and transform disconnected tools into a unified ABM powerhouse. When your systems work together, you spend less time on manual data entry and more time closing deals.

---

## Why Integrations Drive ABM Success

| Before Integrations | With Abmatic Integrations |
|---------------------|---------------------------|
| Export CSVs between systems daily | Automatic real-time data sync |
| Miss hot prospects visiting your site | Instant Slack alerts for sales |
| Duplicate records in CRM | Smart deduplication on sync |
| Guessing which campaigns work | Full attribution tracking |
| Manual lead enrichment | Automatic data enrichment |
| Siloed advertising audiences | One-click audience sync to ads |

---

## The Integrations Hub

Access all integrations from **Settings > Integrations**. You'll see every available integration organized by category, with clear status indicators showing what's connected.

![Integrations Hub](/img/screenshots/integrations-hub.png)

*The Integrations Hub shows all available integrations with their connection status. Drag connected CRMs to set priority order.*

---

## Available Integrations

### CRM Platforms

Sync account and contact data bidirectionally with your CRM—no more CSV exports or manual updates.

| Platform | Key Benefits | Setup Guide |
|----------|--------------|-------------|
| **Salesforce** | Two-way sync accounts, contacts, opportunities. Campaign member sync. Real-time updates. | [Setup Guide](/integrations/crm/salesforce-setup) |
| **HubSpot** | Company and contact sync. Custom properties. Deal attribution. | [Setup Guide](/integrations/crm/hubspot-setup) |
| **Pipedrive** | Organization and person sync. Pipeline visibility. | [Learn more](/integrations/crm/pipedrive) |
| **ActiveCampaign** | Contact sync. Tag mapping. Automation triggers. | [Learn more](/integrations/crm/activecampaign) |
| **Outreach** | Sequence triggers. Activity logging. Prospect matching. | [Learn more](/integrations/crm/outreach) |

:::tip CRM Priority Order
Drag and drop connected CRM cards to set the priority order. When syncing data, Abmatic uses this order to resolve conflicts.
:::

### Advertising Platforms

Push your target account lists directly to ad platforms—no manual audience building required.

| Platform | Key Benefits | Setup Guide |
|----------|--------------|-------------|
| **LinkedIn Ads** | Matched Audiences from account lists. Company targeting at scale. | [Setup Guide](/integrations/advertising/linkedin-ads) |
| **Google Ads** | Customer Match audiences. Search, Display, YouTube targeting. | [Setup Guide](/integrations/advertising/google-ads) |
| **Meta Ads** | Custom audiences. Retargeting. Lookalike expansion. | Coming soon |

### Communication

Get real-time notifications where your team already works.

| Platform | Key Benefits | Setup Guide |
|----------|--------------|-------------|
| **Slack** | Instant alerts for account visits, conversions, and high-intent signals. Route to specific channels. | [Setup Guide](/integrations/slack) |
| **Gmail** | Email tracking integration. | Coming soon |

### Conversion Tracking

Connect your analytics to understand the full customer journey.

| Platform | Key Benefits | Setup Guide |
|----------|--------------|-------------|
| **Google Analytics** | Send personalization events. Custom dimensions. | [Setup Guide](/integrations/google-analytics) |
| **Segment** | Event streaming. Unified customer data. | [Setup Guide](/integrations/segment) |

:::note One at a Time
You can only have one conversion tracking integration active at a time to prevent duplicate events.
:::

### Company Lookup Providers

Enhance visitor identification with multiple data sources.

| Provider | What It Provides |
|----------|------------------|
| **Abmatic AI** | Primary identification using IP intelligence and proprietary data |
| **6sense** | Additional company intelligence (requires separate subscription) |
| **Clearbit** | Enrichment data (requires separate subscription) |

### Data Sources

Import and enrich accounts and contacts from additional sources.

| Source | What It Provides |
|--------|------------------|
| **Apollo.io** | Contact data enrichment. Email discovery. |
| **ZoomInfo** | Company and contact intelligence. |

---

## Connecting an Integration

Most integrations take under 2 minutes to connect. Here's the typical flow:

### Step 1: Click the Integration Card

Navigate to **Settings > Integrations** and click on the integration you want to connect.

### Step 2: Authorize Access

For OAuth integrations (Salesforce, HubSpot, LinkedIn, etc.):

1. Click **Authorize** or **Connect**
2. Sign in to the platform with your credentials
3. Review the requested permissions
4. Click **Allow** or **Authorize**
5. You'll be redirected back to Abmatic

For API key integrations (ActiveCampaign, Apollo):

1. Click **Settings** on the integration card
2. Enter your API key and any required credentials
3. Click **Save** or **Connect**

:::tip Use an Admin Account
Connect using an account with full API access. Consider creating a dedicated integration user whose credentials won't change frequently.
:::

### Step 3: Configure Settings

After connecting, configure sync behavior:

| Setting | Description | Recommendation |
|---------|-------------|----------------|
| **Sync Direction** | Import only, Export only, or Two-way | Two-way for CRMs |
| **Duplicate Handling** | Create new, Update existing, or Skip | Update existing |
| **Field Mapping** | Match fields between systems | Map all critical fields |
| **Auto-Push** | Automatically sync new records | Enable for revealed companies |

---

## Understanding Sync Behavior

### What Flows Where

**Abmatic → CRM (Export)**

| Data Type | What Gets Synced |
|-----------|------------------|
| Revealed companies | New accounts visiting your site |
| Engagement data | Page views, session counts, scores |
| Revealed contacts | Identified individuals with emails |
| Campaign attribution | Which campaigns influenced accounts |
| Custom fields | Any mapped custom data |

**CRM → Abmatic (Import)**

| Data Type | What Gets Synced |
|-----------|------------------|
| Account lists | Target accounts for campaigns |
| Contact lists | Contacts for personalization |
| Custom fields | CRM fields for filtering |
| Opportunity data | Pipeline stage for targeting |
| Owner assignment | For routing and notifications |

### Sync Modes

| Mode | Behavior | Best For |
|------|----------|----------|
| **Fill** | Only updates empty fields | Preserving manual data entry |
| **Overwrite** | Always updates with latest value | Keeping data current |

:::warning Be Careful with Overwrite
"Overwrite" mode replaces existing values. If your sales team manually updates fields, use "Fill" for those fields to avoid losing their work.
:::

### Sync Frequency

| Frequency | Updates | Best For |
|-----------|---------|----------|
| **Real-time** | Within seconds | Hot lead alerts, urgent data |
| **Hourly** | Every 60 minutes | Most standard use cases |
| **Daily** | Once per day | Large datasets, historical sync |

---

## Integration Status Indicators

Each integration card shows its current status:

| Status | Indicator | What It Means |
|--------|-----------|---------------|
| **Active** | Green badge | Connected and syncing correctly |
| **Inactive** | Gray badge | Not connected or disabled |
| **Syncing** | Blue spinner | Currently processing data |
| **Error** | Red indicator | Connection issue (check settings) |

---

## Common Integration Workflows

### Website Visitors → CRM Leads

Turn anonymous traffic into actionable CRM records:

```
Visitor identified on website
        ↓
Meets engagement threshold (e.g., 3+ pages)
        ↓
Abmatic enriches company data
        ↓
Auto-pushes to CRM as new lead
        ↓
Sales receives Slack notification
        ↓
Rep follows up while intent is hot
```

**How to set up:**
1. Connect your CRM (Salesforce or HubSpot)
2. Enable "Auto-Push to CRM" in Company Reveal settings
3. Set engagement threshold (recommended: 3+ page views)
4. Connect Slack for real-time alerts

### Target Accounts → Ad Campaigns

Reach your ideal accounts wherever they browse:

```
Import target accounts from CRM
        ↓
Create account collection in Abmatic
        ↓
Push to LinkedIn Matched Audiences
        ↓
Run targeted ad campaigns
        ↓
Track engagement in Abmatic
```

**How to set up:**
1. Import accounts from CRM
2. Connect LinkedIn Ads integration
3. Select collection → Click "Push to LinkedIn"
4. Create campaign in LinkedIn Campaign Manager

### Real-Time Sales Alerts

Never miss a hot prospect visiting your site:

```
Target account visits pricing page
        ↓
Abmatic identifies company
        ↓
Checks against target account list
        ↓
Sends Slack notification instantly
        ↓
Sales engages while prospect is active
```

**How to set up:**
1. Connect Slack integration
2. Create target account list
3. Configure notification rules (which accounts, which pages)
4. Set destination channel

---

## Field Mapping

Field mapping ensures your data transfers correctly between systems.

### Default Mappings

Standard fields map automatically:

| Abmatic Field | Salesforce | HubSpot |
|---------------|------------|---------|
| Company Name | Account Name | Company Name |
| Domain | Website | Website |
| Industry | Industry | Industry |
| Employee Count | Employees | Number of Employees |
| Country | Billing Country | Country/Region |
| Revenue | Annual Revenue | Annual Revenue |

### Custom Field Mapping

Map your specific fields:

1. Go to **Settings > Custom Fields**
2. Click **Add Field Mapping**
3. Select the Abmatic field (source)
4. Select the CRM field (destination)
5. Choose sync mode (Fill or Overwrite)
6. Click **Save**

---

## Best Practices

### Before Connecting

| Step | Why It Matters |
|------|----------------|
| Clean CRM data | Prevents duplicates and sync errors |
| Document field mapping plan | Ensures consistency |
| Create integration user | Avoids password expiration issues |
| Test in sandbox first | Prevents production data issues |

### After Connecting

| Step | Why It Matters |
|------|----------------|
| Verify sample records | Confirms data flows correctly |
| Check field mappings | Ensures all critical fields sync |
| Monitor first sync | Catches issues early |
| Enable key automations | Gets immediate value |

### Ongoing Maintenance

| Task | Frequency |
|------|-----------|
| Review sync logs | Weekly |
| Check for auth errors | Weekly |
| Update field mappings | As needed |
| Audit data quality | Quarterly |

---

## Troubleshooting

### Connection Issues

| Problem | Solution |
|---------|----------|
| "Invalid credentials" | Re-authenticate with correct account |
| "Insufficient permissions" | Use admin account or add API permissions |
| "Token expired" | Disconnect and reconnect the integration |
| "API not enabled" | Enable API access in the platform settings |

### Sync Issues

| Problem | Solution |
|---------|----------|
| Sync stuck on "Processing" | Wait 30 minutes, then contact support |
| "Sync failed" error | Check sync logs for specific error message |
| No data appearing | Verify field mapping is configured |
| Partial data synced | Check if filters are too restrictive |

### Data Issues

| Problem | Solution |
|---------|----------|
| Duplicate records | Review matching rules (use domain for accounts, email for contacts) |
| Missing fields | Ensure field is mapped and has "Read" permission |
| Wrong values | Verify field types match (text to text, number to number) |
| Stale data | Check sync frequency settings |

---

## Related Documentation

### CRM Setup Guides
- [Salesforce Setup](/integrations/crm/salesforce-setup)
- [HubSpot Setup](/integrations/crm/hubspot-setup)
- [Pipedrive](/integrations/crm/pipedrive)
- [ActiveCampaign](/integrations/crm/activecampaign)
- [Sync Behavior Guide](/integrations/crm/sync-behavior)

### Advertising
- [LinkedIn Ads](/integrations/advertising/linkedin-ads)
- [Google Ads](/integrations/advertising/google-ads)

### Other Integrations
- [Slack](/integrations/slack)
- [Google Analytics](/integrations/google-analytics)
- [Segment](/integrations/segment)

### Related Features
- [CRM Sync for Audiences](/audiences/crm-sync)
- [LinkedIn DMP](/audiences/linkedin-dmp)
- [Google Customer Match](/audiences/google-customer-match)
