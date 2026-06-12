---
id: google-customer-match
title: Google Customer Match
sidebar_label: Google Customer Match
sidebar_position: 8
---

# Google Customer Match

Reach your target contacts across Google's advertising ecosystem. Push a contact collection from Abmatic AI straight to Google Ads Customer Match, then target those known people on Search, Display, YouTube, Gmail, and Demand Gen—without manual uploads.

## Why use Customer Match

| Doing it manually | With Abmatic AI |
|-------------------|-----------------|
| Format and upload audience files by hand | Push a contact collection in a few clicks |
| Lists decay the moment you upload them | Dynamic collections refresh automatically |
| Generic ad targeting | Target known contacts by their email |
| Disconnected campaigns | One set of audiences across all Google properties |

## How it works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Build a        │ ──► │  Push to Google │ ──► │   Google Ads    │
│  Contact List   │     │  Customer Match │     │   Campaigns     │
│  in Abmatic AI  │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
   Add emails &           Hashed & uploaded        Target across
   phone numbers          securely                 Search, Display,
                                                   YouTube, Gmail
```

1. **Build your audience** — Create a contact collection in Abmatic AI with email addresses.
2. **Push to Google** — Select the collection and choose **Push to Google Ads**.
3. **Google matches** — Google hashes and matches your data against its users.
4. **Run targeted ads** — Build campaigns aimed at the matched audience.

## Requirements

### Google Ads account requirements

Customer Match is available to most active Google Ads accounts in good standing. Google's current eligibility checks are based on **account history, payment record, and policy compliance**—not on hitting a fixed spend amount.

| Requirement | What Google looks for |
|-------------|-----------------------|
| Account history | An established account in good standing |
| Payment history | Billing in good standing |
| Policy compliance | A clean policy record |

:::tip Check your eligibility
In Google Ads, go to **Tools > Audience Manager > Your data segments** to confirm Customer Match is available for your account. If it isn't, contact your Google Ads representative—eligibility rules are set and changed by Google, not by Abmatic AI.
:::

:::note
Google updates its Customer Match policies from time to time. Treat Google's own documentation as the source of truth for current eligibility and minimum-size rules.
:::

### Data requirements

| Requirement | Notes |
|-------------|-------|
| Email addresses | Required—this is the main matching key |
| List size | Larger lists produce more matched users |
| Marketing consent | Only sync contacts who have opted in |
| Phone numbers | Optional—they can improve match rates |

## Getting started

### Step 1: Connect Google Ads

1. Go to **Settings > Integrations**.
2. Scroll to the **Advertising** section and find **Google Ads**.
3. Click **Connect**.
4. Sign in with your Google account.
5. Select your Google Ads account and authorize Abmatic AI.

![Settings > Integrations page where you connect advertising integrations](/img/screenshots/integrations-hub.png)
*Open Settings > Integrations and scroll to the Advertising section to connect Google Ads.*

### Step 2: Prepare your contact collection

![Contacts Collections list with email-based contact lists](/img/screenshots/contacts-list.png)
*Customer Match pushes from a contact collection, so it works best on lists rich in email addresses.*

Build a contact collection optimized for Customer Match:

| Field | Impact on match rate | Priority |
|-------|----------------------|----------|
| Email (work) | Medium | Required |
| Email (personal) | High | Recommended |
| Phone number | Medium–High | Recommended |
| First / last name | Small boost | Optional |

**Good sources for Customer Match lists:**

- CRM contacts with email addresses
- Event registrants who opted in
- Newsletter subscribers
- Form submissions
- Revealed website visitors with emails

### Step 3: Push to Google Ads

Pushing is done from the **Collections** tab on the Contacts page.

1. Go to **Contacts** and stay on the **Collections** tab.
2. Tick the checkbox next to the contact collection you want to push.
3. Click the **kebab menu** (the three-dots `⋮` icon above the table).
4. Choose **Push to Google Ads**.
5. Select your Google Ads account, give the audience a name, and click **Create**.

![Contacts Collections list, where you select a collection and use the three-dots menu to push to Google Ads](/img/screenshots/gcm-push-menu.png)
*Select a contact collection on the Collections tab, then use the three-dots menu to push it to Google Ads.*

**What happens after you push:**

| Step | Timing | Status |
|------|--------|--------|
| Data preparation | Immediate | Processing |
| Enrichment & upload | Within about an hour | Uploading |
| Google matching | 24–48 hours | Matching |
| Audience ready | After matching | Ready |

The push dialog also shows an **enrichment step** and a summary of any records that were **skipped** (for example, contacts with no usable email), so you can see exactly what was uploaded.

![Customer Match sync status on the Contacts Collections page](/img/screenshots/gcm-status.png)
*Track the Customer Match sync status from the Contacts Collections list.*

## Understanding match rates

### Typical match rates by list type

| List type | Expected match rate | Why |
|-----------|---------------------|-----|
| Personal emails | 40–60% | Personal emails are usually linked to Google accounts |
| Work emails (B2B) | 20–40% | Work emails are often not linked to a personal Google account |
| Mixed list | 30–50% | Depends on the ratio of email types |
| With phone numbers | +5–15% boost | An additional matching signal |

### Why B2B match rates are lower

Work email addresses (name@company.com) often aren't tied to a personal Google account. That's normal for B2B audiences—you're still reaching the contacts who *are* matched, so the campaign can still perform well.

### Improving your match rates

| Strategy | Impact | How to do it |
|----------|--------|--------------|
| Include personal emails | High | Add a secondary email field to forms |
| Add phone numbers | Medium–High | Collect phone numbers at registration |
| Keep emails current | Medium | Remove bounced addresses regularly |
| Grow the list | Medium | Bigger lists yield more absolute matches |
| Combine data points | Medium | Use email + phone + name together |

:::tip Quality over quantity
A 30% match on 5,000 engaged contacts (1,500 matches) is usually worth more than a 50% match on 10,000 cold contacts. Focus on list quality first.
:::

## Sync behavior

### Schedule

| Event | Timing |
|-------|--------|
| Initial push | Within about an hour |
| Google processing | 24–48 hours |
| Dynamic collection updates | Daily |
| Manual refresh | On demand |

### Sync status

| Status | Meaning | What to do |
|--------|---------|------------|
| Processing | Abmatic AI is preparing the data | Wait |
| Uploading | Sending to Google | Wait |
| Matching | Google is processing | Wait 24–48 hours |
| Ready | Available for campaigns | Use it in Google Ads |
| Too Small | The matched audience is below Google's minimum | Add contacts or improve match quality |
| Error | The sync failed | Check the error message |

### How different collection types stay current

| Collection type | Sync behavior | Best for |
|-----------------|---------------|----------|
| Dynamic (filter-based) | Auto-updates daily | Growing audiences |
| Static | Manual refresh only | Fixed campaigns |
| CSV import | Manual refresh only | One-time uploads |

## Using your Customer Match audiences

Once the audience is **Ready** (24–48 hours after the push):

1. Open **Google Ads**.
2. Go to **Tools > Audience Manager**.
3. Find your Abmatic AI–synced audience.
4. Apply it to your campaigns.

### Campaign types and best uses

| Campaign type | Customer Match use | Tip |
|---------------|--------------------|-----|
| **Search** | Targeting or bid adjustments | Raise bids for known accounts |
| **Display** | Primary targeting | Pair with contextual targeting |
| **YouTube** | Video remarketing | Good for awareness |
| **Gmail** | Inbox targeting | Personalized promotions |
| **Demand Gen** | Cross-platform reach | Brand awareness across Google surfaces |

:::note
Google retired **Discovery campaigns** and replaced them with **Demand Gen** campaigns. If you're following older guides, use Demand Gen for the equivalent cross-platform reach.
:::

### Targeting strategies

**Observation mode (recommended for Search)**

- Add the audience as "Observation."
- Raise bids for matched users.
- Still reach other searchers.

**Targeting mode (best for Display and YouTube)**

- Add the audience as "Targeting."
- Only matched users see the ads.
- Maximum precision.

:::caution Similar Audiences are gone
Google **sunset Similar Audiences (lookalikes)** and no longer creates them from Customer Match lists. For prospecting, use Google's optimized targeting and Demand Gen audience expansion instead.
:::

## Coordinating with ABM campaigns

Use Customer Match as one channel in a coordinated, multi-touch program:

```
Week 1: Website Personalization (Abmatic AI)
    ↓
Week 2: LinkedIn Ads (Matched Audiences)
    ↓
Week 3: Google Display (Customer Match)
    ↓
Week 4: Google Search (Customer Match + bid boost)
    ↓
Week 5: YouTube (Customer Match retargeting)
```

| Channel | Message type | Goal |
|---------|--------------|------|
| Website | Personalized content | Engagement |
| LinkedIn | Thought leadership | Awareness |
| Google Display | Brand reinforcement | Recognition |
| Google Search | Solution-focused | Intent capture |
| YouTube | Customer stories | Trust |

## Privacy and compliance

### Data security

| Protection | Description |
|------------|-------------|
| Hashing | Emails are SHA-256 hashed before upload |
| No plaintext | Google never receives raw email addresses |
| Secure transmission | Data is sent encrypted |
| Auto-deletion | Google deletes records it can't match |

### Consent and privacy

| Requirement | Your responsibility |
|-------------|---------------------|
| Consent | Only sync contacts with marketing opt-in |
| Privacy policy | Disclose your use of Customer Match |
| Opt-out | Honor unsubscribe requests promptly |
| Data minimization | Only sync the data you need |

:::warning Stay compliant
Only push contacts who have explicitly opted in to marketing communications. Remove opted-out contacts before syncing.
:::

## Best practices

| Do | Why it matters |
|----|----------------|
| Segment by intent | High-intent for Search, broad for Display |
| Layer targeting | Combine Customer Match with demographics |
| Create exclusion lists | Keep customers separate from prospects |
| Monitor performance | Track results by audience segment |
| Keep lists fresh | Remove bounced and opted-out contacts |

| Avoid | Why |
|-------|-----|
| Syncing cold lists | Poor match rates and wasted spend |
| Ignoring opt-outs | Legal and trust problems |
| Over-frequent ads | Audience fatigue |
| Broad messaging | You lose the personalization advantage |
| Skipping exclusions | Budget wasted on the wrong audiences |

## Troubleshooting

### "Not eligible" message

| Cause | Solution |
|-------|----------|
| Account too new | Let the account mature |
| Policy violations | Resolve outstanding policy issues |
| Payment issues | Update your payment method |

**Action:** Contact Google Ads support or your Google representative for an eligibility review.

### Low match rates

| Issue | Likely cause | Solution |
|-------|--------------|----------|
| Very low match rate | All work emails | Add personal emails where you have them |
| Declining matches | Stale data | Remove bounced emails |
| Inconsistent results | Formatting issues | Standardize email formatting |

### Audience too small ("Too Small" status)

| Cause | Solution |
|-------|----------|
| Matched audience below Google's minimum | Add more contacts to the collection |
| Low match rate | Improve data quality |
| Many duplicates | Deduplicate before pushing |

**Quick fix:** Combine related collections to clear Google's minimum.

### Sync failures

| Error | Cause | Solution |
|-------|-------|----------|
| Authorization failed | Token expired | Reconnect Google Ads |
| Upload error | Data format issue | Check email formatting |
| Timeout | Large list | Wait and retry |

## Comparing your audience options

| Feature | Customer Match | LinkedIn DMP | Retargeting |
|---------|----------------|--------------|-------------|
| Data source | Your contact list | Your account list | Website visitors |
| Match type | Email / phone | Company match | Cookie-based |
| B2B match rate | 20–40% | 60–80% | N/A |
| Best for | Known contacts | Known accounts | Anonymous visitors |
| Setup effort | Medium | Medium | Low |

:::tip Use both for full coverage
Customer Match and LinkedIn DMP do different jobs. Use Customer Match for contact-level targeting and LinkedIn DMP for account-level targeting.
:::

## Related documentation

- [Google Ads Campaigns](/campaigns/google-ads) — Creating Google Ads campaigns in Abmatic AI
- [Contact Lists](/audiences/contacts) — Building contact collections
- [LinkedIn DMP](/audiences/linkedin-dmp) — Account-based LinkedIn targeting
- [Integrations Overview](/integrations/overview) — All available integrations
