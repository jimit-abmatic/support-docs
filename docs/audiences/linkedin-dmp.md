---
id: linkedin-dmp
title: LinkedIn Matched Audiences
sidebar_label: LinkedIn DMP
sidebar_position: 7
---

# LinkedIn Matched Audiences

Turn the account and contact collections you build in Abmatic AI into LinkedIn advertising audiences—without exporting CSVs or uploading files by hand. Pick a collection, push it to LinkedIn, and Abmatic AI handles the formatting and upload for you.

## Why use Matched Audiences

| Doing it manually | With Abmatic AI |
|-------------------|-----------------|
| Export a CSV, reformat it for LinkedIn, upload it | Push a collection to LinkedIn in a few clicks |
| Lists go stale the moment you upload them | Dynamic collections keep the audience current |
| Ads are disconnected from website behavior | Target the same accounts showing buying signals on your site |
| Data spread across separate tools | One set of audiences powering web and ads together |

## How it works

```
┌─────────────────┐    ┌──────────────────┐    ┌────────────────────┐
│  Abmatic AI     │───▸│  LinkedIn        │───▸│  Campaign Manager  │
│  Collection     │    │  Matched Upload  │    │  Matched Audience  │
└─────────────────┘    └──────────────────┘    └────────────────────┘
         │                     │                        │
   Your target           Company data              Ready to use
   accounts              matched to                in LinkedIn
                         LinkedIn members          ad campaigns
```

1. **Select a collection** — Any account or contact list in Abmatic AI.
2. **Create a Matched Audience** — Abmatic AI formats the records and uploads them to LinkedIn.
3. **LinkedIn matches and processes** — LinkedIn matches your companies to its member database (this takes 24–48 hours).
4. **Target in campaigns** — Use the audience in LinkedIn Campaign Manager.

## Before you start

You need:

- **Admin access to a LinkedIn Campaign Manager account.**
- The **LinkedIn Ads integration connected** in Abmatic AI.

### Connect LinkedIn Ads

1. Go to **Settings > Integrations**.
2. Scroll to the **Advertising** section and find **LinkedIn Ads**.
3. Click **Connect** (or **Authorize**).
4. Sign in with your LinkedIn credentials and authorize Abmatic AI.
5. Select which LinkedIn Ad Account to use.

![Settings > Integrations page where you connect advertising integrations](/img/screenshots/integrations-hub.png)
*Open Settings > Integrations and scroll to the Advertising section to connect LinkedIn Ads.*

## Prepare your collection

Match quality depends on the data in your collection. The more identifying information each account has, the more companies LinkedIn can match.

| Data element | Impact on match rate |
|--------------|----------------------|
| **Company name** | Essential — use official names, not abbreviations |
| **Website domain** | High — the single biggest factor for matching |
| **Employee emails** | High — known contacts boost match accuracy |
| **Company size** | Medium — helps LinkedIn pick the right company |

:::tip
Run **Enrich** on a collection before pushing it. Filling in missing domains and company details usually lifts the match rate.
:::

## Create a Matched Audience

Pushing to LinkedIn is done from the **Collections** list on the Accounts or Contacts page.

1. Go to **Accounts** (or **Contacts**) and stay on the **Collections** tab.
2. Tick the checkbox next to the collection you want to push.
3. Click the **kebab menu** (the three-dots `⋮` icon above the table, next to the refresh/sort controls).
4. Choose **Create LinkedIn Matched Audience**.

![Accounts Collections list with a collection selected and the kebab menu open, showing Create LinkedIn Matched Audience](/img/screenshots/ldmp-push-menu.png)
*Select a collection, then open the three-dots menu and choose **Create LinkedIn Matched Audience**.*

A dialog opens and walks through three steps automatically:

1. **Preparing data** — Abmatic AI formats your records for LinkedIn.
2. **Uploading CSV** — The data is sent securely to LinkedIn.
3. **Creating Matched Audience** — LinkedIn receives the upload and starts building the audience.

Click **Create** to start, or **Cancel** to back out.

![Create LinkedIn Matched Audience dialog showing the three steps: Preparing data, Uploading CSV, Creating Matched Audience](/img/screenshots/ldmp-status.png)
*The Create LinkedIn Matched Audience dialog runs through Preparing data, Uploading CSV, and Creating Matched Audience.*

After the upload finishes, LinkedIn still needs **24–48 hours** to match and process the audience before you can use it in a campaign.

## Understanding match rates

LinkedIn matches your company data against its member database. Not every company will match—here's what to expect:

| Match rate | Quality | What to do |
|------------|---------|------------|
| **70%+** | Excellent | Ready to launch campaigns |
| **50–70%** | Good | Usable; consider enriching the records that didn't match |
| **Below 50%** | Needs attention | Review data quality, add domains and emails |

### Improving your match rate

1. **Clean up company names** — Use "Microsoft Corporation," not "MSFT" or "Microsoft Inc."
2. **Add website domains** — The single biggest improvement you can make.
3. **Include employee contacts** — Known emails help LinkedIn match.
4. **Lean toward larger companies** — LinkedIn has better coverage for enterprises.
5. **Enrich your data** — Use Abmatic AI's enrichment to fill in gaps before pushing.

## Sync behavior

### Timing

| Event | Timing |
|-------|--------|
| **Initial push** | Uploaded to LinkedIn right away |
| **LinkedIn processing** | 24–48 hours before the audience is usable |
| **Automatic updates** | About every 24 hours for dynamic collections |

### How different collection types stay current

| Collection type | Sync behavior |
|-----------------|---------------|
| **Dynamic (filter-based)** | Auto-updates as matching accounts change |
| **Static** | Updates only when you edit the collection |
| **CSV imports** | Re-push manually after you update the data |
| **CRM-synced** | Updates when the CRM sync runs |

## Using your audience in LinkedIn

Once the audience is active (24–48 hours after the push):

1. Open **LinkedIn Campaign Manager**.
2. Create or edit a campaign.
3. Under **Audience**, choose **Matched Audiences**.
4. Pick your Abmatic AI–synced audience.
5. Layer on additional LinkedIn targeting as needed.

### Campaign ideas

| Objective | Recommended format | Why it works |
|-----------|--------------------|--------------|
| **Awareness** | Sponsored Content | Reach decision-makers in target accounts |
| **Engagement** | Video Ads | Educate and build brand recall |
| **Direct outreach** | Message Ads | Land in the inbox of key contacts |
| **Lead capture** | Lead Gen Forms | Convert without leaving LinkedIn |
| **Retargeting** | Dynamic Ads | Re-engage website visitors on LinkedIn |

### Coordinating ads with website personalization

The real value comes from running LinkedIn ads alongside website personalization for the same accounts:

```
Day 1-7:   LinkedIn awareness ads to target accounts
           ↓
Day 7+:    An account visits your website
           ↓
           Abmatic AI detects the company and shows personalized content
           ↓
Day 14+:   LinkedIn retargeting with a case study or demo offer
           ↓
           Website shows a "Schedule a Demo" personalization
```

## Audience size requirements

LinkedIn enforces a minimum audience size for advertising. After matching, your audience must have at least **300 members**:

| Campaign type | Minimum audience |
|---------------|------------------|
| Sponsored Content | 300 members |
| Message Ads | 300 members |
| Dynamic Ads | 300 members |
| Lead Gen Forms | 300 members |

:::note
The 300-member minimum applies to *matched* members, not the size of your Abmatic AI collection. If a collection has 500 companies but only 40% match, you'll have roughly 200 matched members—below the threshold. Add more accounts or improve match quality.
:::

## Best practices

| Do | Why it matters |
|----|----------------|
| Start with your best accounts | Higher match rates and clearer results |
| Push enriched data | Domains and emails improve matching |
| Segment for different messages | Enterprise and mid-market need different ads |
| Coordinate with website personalization | A consistent experience across touchpoints |
| Watch your match rates | Low rates usually signal a data-quality problem |

| Avoid | Why |
|-------|-----|
| Pushing incomplete data | Low match rates waste ad budget |
| One giant audience | Limits personalization and optimization |
| Forgetting the minimum size | LinkedIn requires 300+ matched members |
| Ignoring processing time | Plan for 48 hours before launch |
| Stale lists | Outdated data means wasted spend |

## Troubleshooting

### Audience not appearing in Campaign Manager

| Cause | Solution |
|-------|----------|
| Still processing | Wait 24–48 hours after the push |
| Below the minimum size | Add more accounts or improve match rate |
| Wrong Ad Account | Confirm you selected the right account when connecting |
| Sync error | Check Abmatic AI for an error message |

### Low match rate

| Cause | Solution |
|-------|----------|
| Company name variations | Standardize to official names |
| Missing domains | Add website URLs to your records |
| Small or private companies | LinkedIn has limited coverage—supplement with other channels |
| Outdated company data | Re-enrich through Abmatic AI |

### Sync errors

| Error type | Resolution |
|------------|------------|
| Authentication failed | Reconnect LinkedIn in Settings > Integrations |
| Rate limit exceeded | Wait and retry—large lists may upload in batches |
| Invalid data format | Check for special characters in company names |
| Permission denied | Verify admin access to your LinkedIn Ad Account |

## Privacy and compliance

- **Data handling:** Company data is uploaded securely to LinkedIn for matching.
- **No member data exposed:** LinkedIn matches against its own database—you never see member-level data.
- **Consent:** Make sure your data practices comply with applicable regulations.
- **LinkedIn terms:** Usage is subject to LinkedIn's Matched Audiences terms of service.

## Related resources

- [LinkedIn Ads Campaigns](/campaigns/linkedin-ads) — Running campaigns with Matched Audiences
- [Audiences Overview](/audiences/overview) — Building and managing collections
- [Google Customer Match](/audiences/google-customer-match) — Similar functionality for Google Ads
- [Integrations Overview](/integrations/overview) — All available integrations
