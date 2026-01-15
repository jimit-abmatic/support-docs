---
id: google-customer-match
title: Google Customer Match
sidebar_label: Google Customer Match
---

# Google Customer Match

Reach your target accounts and contacts across Google's entire advertising ecosystem. Push your Abmatic audiences directly to Google Ads for precision targeting on Search, Display, YouTube, and Gmail.

## Why Google Customer Match Drives Results

| Traditional Approach | With Abmatic + Customer Match |
|---------------------|-------------------------------|
| Manual audience uploads | One-click audience sync |
| Static lists that decay | Dynamic lists that auto-update |
| Generic ad targeting | Target known accounts by name |
| Fragmented campaigns | Unified ABM across all Google properties |
| Unknown attribution | Track engagement back to accounts |

## How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Build Contact  │ ──► │  Push to Google │ ──► │   Google Ads    │
│   List in       │     │  Customer Match │     │   Campaigns     │
│    Abmatic      │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
   Add emails &           Automatic hash          Target across
   phone numbers          & secure upload         Search, Display,
                                                  YouTube, Gmail
```

**The process is simple:**

1. **Build your audience** - Create a contact list in Abmatic with emails
2. **Push to Google** - Select your list and click "Push to Google Ads"
3. **Google matches** - Google securely hashes and matches your data
4. **Run targeted ads** - Create campaigns targeting your matched audience

## Requirements

### Google Ads Account Requirements

Customer Match availability depends on your Google Ads account status:

| Requirement | Details | How to Check |
|------------|---------|--------------|
| Account History | At least 90 days | Account age in Google Ads |
| Payment History | Good standing | Billing section |
| Policy Compliance | Clean record | Policy Manager |
| Total Spend | $50,000+ (varies by region) | Account summary |

:::tip Check Your Eligibility
Go to **Google Ads > Tools > Audience Manager** to see if Customer Match is available for your account. If not eligible, contact your Google representative.
:::

### Data Requirements

| Requirement | Minimum | Best Practice |
|------------|---------|---------------|
| Email addresses | Required | Use work + personal emails |
| List size | 1,000 contacts | 5,000+ for best results |
| Marketing consent | Required | Only sync opted-in contacts |
| Phone numbers | Optional | Improves match rates |

## Getting Started

### Step 1: Connect Google Ads

![Integrations page](/img/screenshots/integrations-hub.png)

1. Navigate to **Settings > Integrations**
2. Scroll down to find **Google Ads** in the Advertising section
3. Click **Connect**
4. Sign in with your Google account
5. Select your Google Ads account
6. Authorize Abmatic access

### Step 2: Prepare Your Contact List

![Contact collections with email data](/img/screenshots/contacts-list.png)

Build a contact list optimized for Customer Match:

| Field | Impact on Match Rate | Priority |
|-------|---------------------|----------|
| Email (work) | Medium | Required |
| Email (personal) | High | Recommended |
| Phone number | Medium-High | Recommended |
| First/Last name | Low boost | Optional |

**Best sources for Customer Match lists:**
- CRM contacts with email addresses
- Event registrants with opt-in
- Newsletter subscribers
- Form submissions
- Website visitors (with revealed emails)

### Step 3: Push to Google Ads

1. Go to **Audiences > Contacts**
2. Select your contact collection
3. Click the **Actions menu** (three dots)
4. Select **Push to Google Ads**
5. Choose your Google Ads account
6. Name your audience
7. Click **Create**

**What happens next:**

| Step | Timing | Status |
|------|--------|--------|
| Data preparation | Immediate | Processing |
| Secure upload | Within 1 hour | Uploading |
| Google matching | 24-48 hours | Matching |
| Audience ready | After matching | Ready |

## Understanding Match Rates

### Typical Match Rates by List Type

| List Type | Expected Match Rate | Why |
|-----------|-------------------|-----|
| B2C with personal emails | 40-60% | Personal emails linked to Google accounts |
| B2B with work emails | 20-40% | Work emails often not linked to Google |
| Mixed list | 30-50% | Depends on email type ratio |
| With phone numbers | +5-15% boost | Additional matching signal |

### Why B2B Match Rates Are Lower

Business email addresses (company@company.com) often aren't linked to personal Google accounts. This is normal for B2B audiences and doesn't mean your campaign won't be effective—you're still reaching the contacts who ARE matched.

### Improving Your Match Rates

| Strategy | Impact | How to Implement |
|----------|--------|------------------|
| Include personal emails | High | Add secondary email field to forms |
| Add phone numbers | Medium-High | Collect phone in registration flows |
| Keep emails current | Medium | Remove bounced addresses regularly |
| Expand list size | Medium | Larger lists = more absolute matches |
| Use multiple data points | Medium | Combine email + phone + name |

:::tip Focus on Quality Over Quantity
A 30% match rate on 5,000 engaged contacts (1,500 matches) is often more valuable than a 50% match rate on 10,000 cold contacts. Focus on list quality first.
:::

## Audience Sync Behavior

### Sync Schedule

| Event | Timing |
|-------|--------|
| Initial push | Within 1 hour |
| Google processing | 24-48 hours |
| Dynamic list updates | Daily |
| Manual refresh | On-demand |

### Sync Status Indicators

| Status | Meaning | Action Needed |
|--------|---------|---------------|
| Processing | Abmatic preparing data | Wait |
| Uploading | Sending to Google | Wait |
| Matching | Google processing | Wait 24-48 hours |
| Ready | Available for campaigns | Use in Google Ads |
| Too Small | Below 1,000 matches | Expand your list |
| Error | Sync failed | Check error message |

### Dynamic vs. Static Lists

| List Type | Sync Behavior | Best For |
|-----------|---------------|----------|
| Dynamic (filter-based) | Auto-updates daily | Growing audiences |
| Static | Manual refresh only | Fixed campaigns |
| CSV import | Manual refresh only | One-time uploads |

## Using Your Customer Match Audiences

### In Google Ads Campaign Manager

Once your audience is ready (24-48 hours after push):

1. Open **Google Ads**
2. Go to **Tools & Settings > Audience Manager**
3. Find your Abmatic-synced audience
4. Click **Apply to campaigns**

### Campaign Types & Best Uses

| Campaign Type | Customer Match Use | Best Practice |
|--------------|-------------------|---------------|
| **Search** | Targeting or bid adjustments | +50-100% bid for known accounts |
| **Display** | Primary targeting | Combine with contextual targeting |
| **YouTube** | Video remarketing | Use for awareness campaigns |
| **Gmail** | Inbox targeting | Personalized promotions |
| **Discovery** | Cross-platform reach | Brand awareness |

### Targeting Strategies

**Option 1: Observation Mode (Recommended for Search)**
- Add audience as "Observation"
- Increase bids for matched users
- Still reach other searchers

**Option 2: Targeting Mode (Best for Display/YouTube)**
- Add audience as "Targeting"
- Only matched users see ads
- Maximum precision

### Similar Audiences (Lookalikes)

Google can automatically create "Similar Audiences" based on your Customer Match list:

1. After your list is matched, Google analyzes user characteristics
2. A "Similar to [Your List Name]" audience is created
3. Use for prospecting campaigns to reach people like your customers

| Similar Audience Use | Best Practice |
|---------------------|---------------|
| Top-of-funnel | Broad awareness campaigns |
| Prospecting | New customer acquisition |
| Expansion | Enter new markets |

## Combining with ABM Campaigns

### Multi-Touch Account Engagement

Create a coordinated ABM program across channels:

```
Week 1: Website Personalization (Abmatic)
    ↓
Week 2: LinkedIn Ads (Matched Audiences)
    ↓
Week 3: Google Display (Customer Match)
    ↓
Week 4: Google Search (Customer Match + Bid Boost)
    ↓
Week 5: YouTube (Customer Match Retargeting)
```

### Coordinated Messaging

| Channel | Message Type | Goal |
|---------|-------------|------|
| Website | Personalized content | Engagement |
| LinkedIn | Thought leadership | Awareness |
| Google Display | Brand reinforcement | Recognition |
| Google Search | Solution-focused | Intent capture |
| YouTube | Customer stories | Trust building |

## Privacy & Compliance

### Data Security

| Protection | Description |
|------------|-------------|
| Hashing | Emails are SHA-256 hashed before upload |
| No plaintext | Google never receives raw email addresses |
| Secure transmission | Encrypted data transfer |
| Auto-deletion | Google deletes unmatched records |

### GDPR & Privacy Requirements

| Requirement | Your Responsibility |
|-------------|---------------------|
| Consent | Only sync contacts with marketing opt-in |
| Privacy policy | Disclose Customer Match usage |
| Opt-out | Honor unsubscribe requests promptly |
| Data minimization | Only sync necessary data |

:::warning Stay Compliant
Only push contacts who have explicitly opted in to marketing communications. Remove opted-out contacts from your lists before syncing.
:::

## Best Practices

### Do's

| Practice | Why It Matters |
|----------|----------------|
| Segment by intent | High-intent for Search, broad for Display |
| Layer targeting | Combine Customer Match with demographics |
| Create exclusion lists | Separate customers from prospects |
| Test Similar Audiences | Good prospecting with minimal effort |
| Monitor performance | Track by audience segment |

### Don'ts

| Avoid | Why |
|-------|-----|
| Syncing cold lists | Poor match rates, wasted spend |
| Ignoring opt-outs | Legal and trust issues |
| Over-frequent ads | Audience fatigue |
| Broad messaging | Loses personalization advantage |
| Skipping exclusions | Wastes budget on wrong audiences |

### Campaign Optimization Tips

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Match rate | >25% for B2B | Improve data quality |
| CTR | >2x account average | Refine messaging |
| Conversion rate | >1.5x average | Check landing pages |
| Cost per acquisition | <account average | Tighten targeting |

## Troubleshooting

### "Not Eligible" Error

| Cause | Solution |
|-------|----------|
| Account too new | Wait until 90+ days |
| Spend threshold not met | Increase ad spend or contact Google |
| Policy violations | Resolve policy issues |
| Payment issues | Update payment method |

**Action:** Contact Google Ads support or your Google representative for eligibility review.

### Low Match Rates

| Issue | Possible Cause | Solution |
|-------|---------------|----------|
| <10% match rate | All work emails | Add personal emails where available |
| Declining matches | Stale data | Clean bounced emails |
| Inconsistent results | Data format issues | Standardize email formatting |

### Audience Size Too Small

| Cause | Solution |
|-------|----------|
| Under 1,000 emails | Expand your contact list |
| Low match rate | Improve data quality |
| Many duplicates | Dedupe before upload |

**Quick fix:** Combine multiple related lists to meet the minimum threshold.

### Sync Failures

| Error | Cause | Solution |
|-------|-------|----------|
| Authorization failed | Token expired | Reconnect Google Ads |
| Upload error | Data format issue | Check email formatting |
| Timeout | Large list | Wait and retry |

## Comparing Audience Options

| Feature | Customer Match | LinkedIn DMP | Retargeting |
|---------|---------------|--------------|-------------|
| Data source | Your contact list | Your account list | Website visitors |
| Match type | Email/phone | Company match | Cookie-based |
| B2B match rate | 20-40% | 60-80% | N/A |
| Best for | Known contacts | Known accounts | Anonymous visitors |
| Setup complexity | Medium | Medium | Low |

:::tip Use Both for Maximum Coverage
Customer Match and LinkedIn DMP serve different purposes. Use Customer Match for contact-level targeting and LinkedIn DMP for account-level targeting.
:::

## Related Documentation

- [Google Ads Campaigns](/campaigns/google-ads) - Creating Google Ads campaigns in Abmatic
- [Contact Lists](/audiences/contacts) - Building contact collections
- [LinkedIn DMP](/audiences/linkedin-dmp) - Account-based LinkedIn targeting
- [Integrations Overview](/integrations/overview) - All available integrations
