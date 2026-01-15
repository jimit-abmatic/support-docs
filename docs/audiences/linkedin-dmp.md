---
id: linkedin-dmp
title: LinkedIn Matched Audiences
sidebar_label: LinkedIn DMP
---

# LinkedIn Matched Audiences

Turn your carefully curated account lists into LinkedIn advertising audiences—without manual CSV exports or messy uploads.

## Why LinkedIn Matched Audiences Drive Results

| Without Abmatic | With Abmatic |
|-----------------|--------------|
| Export CSVs, format for LinkedIn, upload manually | One-click push from any account collection |
| Static lists that go stale | Automatic sync keeps audiences current |
| No connection to website behavior | Target accounts showing buying signals |
| Separate systems, fragmented data | Unified ABM across web and ads |

**The result:** Your LinkedIn ads reach the exact accounts you've identified as high-value—and stay synchronized as your target lists evolve.

## How It Works

```
┌─────────────────┐    ┌──────────────────┐    ┌────────────────────┐
│  Abmatic        │───▸│  LinkedIn DMP    │───▸│  Campaign Manager  │
│  Account List   │    │  Matched Upload  │    │  Matched Audience  │
└─────────────────┘    └──────────────────┘    └────────────────────┘
         │                     │                        │
    Your target           Company data              Ready to use
    accounts              matched to                in LinkedIn
                          LinkedIn members          ad campaigns
```

1. **Select your collection** — Any account or contact list in Abmatic
2. **Create Matched Audience** — Abmatic formats and uploads to LinkedIn
3. **LinkedIn processes** — Matches companies to their member database (24-48 hours)
4. **Target in campaigns** — Use the audience in Campaign Manager

## Getting Started

### Step 1: Connect LinkedIn Ads

Navigate to **Integrations** and connect your LinkedIn Ads account:

1. Go to **Integrations > LinkedIn Ads**
2. Click **Connect**
3. Sign in with your LinkedIn credentials
4. Authorize Abmatic to access your Ad Account
5. Select which Ad Account to use

![LinkedIn Ads integration setup](/img/screenshots/linkedin-integration.png)

> **Prerequisite:** You need admin access to a LinkedIn Campaign Manager account.

### Step 2: Prepare Your Account List

Before pushing to LinkedIn, ensure your collection has quality data:

| Data Element | Impact on Match Rate |
|-------------|---------------------|
| **Company Name** | Essential — use official names, not abbreviations |
| **Website Domain** | High — significantly improves matching |
| **Employee Emails** | High — known contacts boost match accuracy |
| **Company Size** | Medium — helps LinkedIn identify the right entity |

**Pro Tip:** Collections with website domains typically see 20-30% higher match rates than those with company names alone.

### Step 3: Create Matched Audience

From your account or contact collection:

1. Go to **Audiences > Accounts** (or **Contacts**)
2. Select the collection(s) you want to push
3. Click the **More Actions** menu (three dots)
4. Select **Create LinkedIn Matched Audience**
5. Confirm the creation

![Creating LinkedIn Matched Audience from collection](/img/screenshots/accounts-list.png)

The sync process has three steps:
- **Preparing data** — Formatting your records for LinkedIn
- **Uploading CSV** — Sending data securely to LinkedIn
- **Creating Matched Audience** — LinkedIn processes and creates the audience

## Understanding Match Rates

LinkedIn matches your company data against their member database. Not every company will match—here's what to expect:

| Match Rate | Quality | Action |
|-----------|---------|--------|
| **70%+** | Excellent | Ready to launch campaigns |
| **50-70%** | Good | Usable, consider enriching low-match records |
| **Below 50%** | Needs attention | Review data quality, add domains/emails |

### Improving Your Match Rate

1. **Clean company names** — Use "Microsoft Corporation" not "MSFT" or "Microsoft Inc"
2. **Add website domains** — The single biggest improvement you can make
3. **Include employee contacts** — Known emails help LinkedIn match
4. **Target larger companies** — LinkedIn has better coverage for enterprises
5. **Enrich your data** — Use Abmatic's auto-enrichment to fill gaps

## Audience Sync Behavior

### Sync Timing

| Event | Timing |
|-------|--------|
| **Initial push** | Immediate upload to LinkedIn |
| **LinkedIn processing** | 24-48 hours to become usable |
| **Automatic updates** | Every 24 hours for dynamic lists |

### Sync Status

Check your audience status in the collection details:

| Status | Meaning |
|--------|---------|
| **Syncing** | Upload in progress |
| **Active** | Available in LinkedIn Campaign Manager |
| **Error** | Check the error message for details |

### Dynamic vs. Static Lists

| List Type | Sync Behavior |
|-----------|--------------|
| **Dynamic (filter-based)** | Auto-updates as matching accounts change |
| **Static (manual)** | Updates only when you modify the list |
| **CSV imports** | Requires manual re-push after updates |
| **CRM synced** | Updates when CRM sync runs |

## Using Your Matched Audiences

### In LinkedIn Campaign Manager

Once your audience is active (24-48 hours after push):

1. Open LinkedIn Campaign Manager
2. Create or edit a campaign
3. Under **Audience**, select **Matched Audiences**
4. Choose your Abmatic-synced audience
5. Layer additional targeting as needed

### Campaign Strategies

| Objective | Recommended Format | Why It Works |
|-----------|-------------------|--------------|
| **Awareness** | Sponsored Content | Reach decision-makers in target accounts |
| **Engagement** | Video Ads | Educate on solutions, build brand recall |
| **Direct Outreach** | Message Ads | Personal inbox delivery to key contacts |
| **Lead Capture** | Lead Gen Forms | Frictionless conversion within LinkedIn |
| **Retargeting** | Dynamic Ads | Re-engage website visitors on LinkedIn |

### Combining with Website Personalization

The real power comes from coordinating LinkedIn ads with website personalization:

```
Day 1-7:   LinkedIn awareness ads to target accounts
           ↓
Day 7+:    Account visits your website
           ↓
           Abmatic detects the company, shows personalized content
           ↓
Day 14+:   LinkedIn retargeting with case study/demo offer
           ↓
           Website shows "Schedule a Demo" personalization
```

This multi-touch approach ensures consistent messaging across channels.

## Best Practices

### Do's

| Practice | Why It Matters |
|----------|---------------|
| Start with your best accounts | Higher match rates, clearer ROI |
| Use enriched data | Domains and emails improve matching |
| Segment for different messages | "Enterprise" vs "Mid-Market" need different ads |
| Coordinate with web personalization | Consistent experience across touchpoints |
| Monitor match rates | Low rates signal data quality issues |

### Don'ts

| Avoid | Why |
|-------|-----|
| Pushing incomplete data | Wastes budget on low match rates |
| One giant audience | Limits personalization and optimization |
| Forgetting minimum size | LinkedIn requires 300+ members |
| Ignoring processing time | Plan 48 hours before campaign launch |
| Stale lists | Outdated data = wasted ad spend |

## Audience Size Requirements

LinkedIn has minimum audience requirements for advertising:

| Campaign Type | Minimum Audience |
|--------------|------------------|
| Sponsored Content | 300 members |
| Message Ads | 300 members |
| Dynamic Ads | 300 members |
| Lead Gen Forms | 300 members |

**Note:** After matching, your audience must meet these minimums. If your Abmatic list has 500 companies but only 40% match, you'll have ~200 matched members—below the threshold.

## Troubleshooting

### Audience Not Appearing in Campaign Manager

| Cause | Solution |
|-------|----------|
| Processing in progress | Wait 24-48 hours after push |
| Below minimum size | Add more accounts or improve match rate |
| Wrong Ad Account | Verify you selected the correct account during setup |
| Sync error | Check Abmatic for error messages |

### Low Match Rate

| Cause | Solution |
|-------|----------|
| Company name variations | Standardize to official names |
| Missing domains | Add website URLs to your records |
| Small/private companies | LinkedIn has limited coverage—consider supplementing with other channels |
| Outdated company data | Re-enrich through Abmatic |

### Sync Errors

| Error Type | Resolution |
|-----------|------------|
| Authentication failed | Reconnect LinkedIn in Integrations |
| Rate limit exceeded | Wait and retry—large lists may need multiple batches |
| Invalid data format | Check for special characters in company names |
| Permission denied | Verify admin access to LinkedIn Ad Account |

## Privacy and Compliance

- **Data handling:** Company data is uploaded securely to LinkedIn's DMP
- **No PII exposure:** LinkedIn matches against their database—you don't see member data
- **Consent:** Ensure your data collection practices comply with applicable regulations
- **LinkedIn Terms:** Usage subject to LinkedIn's Matched Audiences terms of service

## Related Resources

- [LinkedIn Ads Campaigns](/campaigns/linkedin-ads) — Running campaigns with Matched Audiences
- [Audiences Overview](/audiences/overview) — Building and managing account lists
- [Google Customer Match](/audiences/google-customer-match) — Similar functionality for Google Ads
- [Integrations Overview](/integrations/overview) — All available integrations
