---
id: linkedin-ads
title: LinkedIn Campaigns
sidebar_label: LinkedIn Ads
sidebar_position: 7
---

# LinkedIn Campaigns

Turn your target account lists into precision-targeted LinkedIn audiences. Abmatic AI syncs your ABM data directly to LinkedIn Matched Audiences, so you can reach decision-makers at target accounts with highly relevant ads—without manual list uploads or spreadsheet management.

## Why LinkedIn Campaigns Matter

LinkedIn is where B2B buyers research solutions and make decisions. But generic LinkedIn targeting wastes budget on the wrong accounts.

| Challenge | Without Abmatic AI | With Abmatic AI |
|-----------|-------------------|-----------------|
| **Audience Targeting** | Broad job title/industry filters | Your exact target account list |
| **List Management** | Manual CSV uploads, constantly outdated | Automatic sync, always current |
| **Sales Alignment** | Marketing and sales target different accounts | Same account list powers ads and outreach |
| **Attribution** | Can't connect ads to pipeline | Full visibility from impression to revenue |

## How It Works

Abmatic AI bridges your ABM strategy with LinkedIn advertising in three steps:

1. **Build Your Account List** — Create or import your target accounts in Abmatic AI
2. **Sync to LinkedIn** — Push the list to LinkedIn Matched Audiences with one click
3. **Run Targeted Ads** — Launch campaigns that reach only employees at your target accounts

Your audience stays automatically updated as you add or remove accounts from your list.

## Getting Started

### Step 1: Connect LinkedIn

Before you can sync audiences, connect your LinkedIn Ads account:

1. Navigate to **Integrations** from the sidebar
2. Find the **LinkedIn** card
3. Click **Authorize**
4. Sign in with a LinkedIn account that has Campaign Manager admin access
5. Select the Ad Account you want to use

Once connected, the status shows "Active" and you're ready to sync audiences.

### Step 2: Create an Account List

If you don't already have a target account list:

1. Go to **Audiences > Accounts**
2. Click **Create Collection** or **Upload from CSV**
3. Add your target companies (company domains required for matching)
4. Save your collection

:::tip Best Practice
Include company website domains (e.g., `acme.com`) rather than email domains. LinkedIn matches on company pages, which are linked to website domains.
:::

### Step 3: Create a LinkedIn Campaign

1. Navigate to **Campaigns**
2. Click **Create Campaign**
3. Select **LinkedIn** under the Advertising section

![Campaign creation showing LinkedIn option](/img/screenshots/linkedin-create-modal.png)

4. Choose **Account** or **Contact** targeting:
   - **Account**: Target employees at specific companies
   - **Contact**: Target specific individuals (requires contact data)

![Select Account or Contact targeting](/img/screenshots/linkedin-campaign-account-select.png)

5. Select your account/contact collection
6. Click **Create Campaign**

![Select a collection for your campaign](/img/screenshots/linkedin-campaign-collection-select.png)

### Step 4: Configure Audience and Budget

Once your campaign is created, configure your targeting:

1. Select your **Audience** from your account collections
2. Set your **Budget** (daily, lifetime, or both)
3. Configure your **Schedule** (start/end dates or run continuously)

![LinkedIn campaign audience and budget configuration](/img/screenshots/linkedin-campaign-audience.png)

### Step 5: Push to LinkedIn

When your campaign is ready:

1. Review the accounts/contacts in your campaign
2. Click **Push to LinkedIn**
3. Wait for confirmation (usually instant)
4. Access your audience in LinkedIn Campaign Manager

## LinkedIn Matched Audiences

### What Gets Synced

When you push to LinkedIn, Abmatic AI sends:

| Data Type | What LinkedIn Uses | Match Rate |
|-----------|-------------------|------------|
| **Company Domains** | Matched to LinkedIn Company Pages | 60-80% |
| **Contact Emails** | Matched to LinkedIn member profiles | 30-50% |
| **Company Names** | Secondary matching signal | Improves accuracy |

### Audience Requirements

| Requirement | Details |
|-------------|---------|
| **Minimum Companies** | 300 matched companies for targeting |
| **Data Quality** | Valid company domains required |
| **Processing Time** | 24-48 hours for full matching |
| **Updates** | Automatic based on your sync settings |

:::info Match Rates Vary
Match rates depend on your data quality and whether target companies have active LinkedIn Company Pages. Enterprise accounts typically match at higher rates than small businesses.
:::

## Running Effective LinkedIn Ads

### Campaign Types That Work Best

| Campaign Type | Best For | Recommendation |
|---------------|----------|----------------|
| **Sponsored Content** | Building awareness at target accounts | Start here—highest reach |
| **Message Ads** | Direct outreach at scale | Use for event invites, content offers |
| **Conversation Ads** | Interactive engagement | Great for qualifying interest |
| **Video Ads** | Telling your story | Use for brand building at key accounts |

### Targeting Layers

For maximum precision, layer your Abmatic audience with LinkedIn's native targeting:

**Recommended Combinations:**
- Your account list + Job Function (e.g., Marketing, IT)
- Your account list + Seniority (e.g., Director+)
- Your account list + Job Title keywords

**Exclusions to Consider:**
- Current customers (use CRM sync to identify)
- Competitors
- Job seekers

### Creative Best Practices

| Element | Do This | Avoid This |
|---------|---------|------------|
| **Headlines** | Speak to specific challenges your audience faces | Generic industry claims |
| **Images** | Professional, relevant to your value prop | Stock photos of handshakes |
| **Copy** | Reference their industry or company size | One-size-fits-all messaging |
| **CTA** | Specific action ("See the demo", "Get the report") | Vague ("Learn more") |

## Tracking Performance

### Campaign Analytics in Abmatic AI

View performance data directly in Abmatic AI:

1. Open your LinkedIn campaign
2. Select a date range
3. View metrics grouped by:
   - **Account** — See which companies engaged
   - **Campaign** — Compare campaign performance
   - **Creative** — Identify top-performing ads

![LinkedIn campaign insights showing metrics](/img/screenshots/linkedin-campaign-detail.png)

### Key Metrics

| Metric | What It Measures | Why It Matters |
|--------|-----------------|----------------|
| **Impressions** | Times your ad was shown | Reach at target accounts |
| **Clicks** | Clicks to your content | Interest signal |
| **Spend** | Budget consumed | Cost efficiency |
| **Cost Per Click** | Average spend per click | Benchmark against industry ($5-15 typical) |

### Multi-Channel Attribution

Abmatic AI connects LinkedIn ad engagement to:
- Website visits from those accounts
- Conversions and form fills
- CRM opportunities and pipeline

This gives you full visibility into how LinkedIn ads contribute to revenue—not just clicks and impressions.

## Use Cases

### Warm Up Target Accounts Before Outreach

**Goal:** Increase response rates when sales reaches out

1. Create a list of accounts your SDRs are targeting this quarter
2. Sync to LinkedIn and run awareness ads for 2-3 weeks
3. Monitor which accounts engage with your ads
4. Prioritize outreach to engaged accounts
5. Use ad engagement in outreach messaging ("You may have seen...")

**Result:** Prospects recognize your brand, leading to higher reply rates.

### Support Product Launches

**Goal:** Ensure target accounts know about new capabilities

1. Create a list of accounts that would benefit from the new feature
2. Run video ads explaining the value
3. Follow up with demo invite messages
4. Track which accounts view videos and request demos

### Accelerate Deals in Pipeline

**Goal:** Stay top-of-mind during long sales cycles

1. Create a list of accounts with open opportunities
2. Run case study and social proof content
3. Target the entire buying committee (not just your champion)
4. Monitor engagement to identify additional stakeholders

### Event Promotion

**Goal:** Drive registrations from priority accounts

1. Create a list of accounts you want at your event
2. Run countdown-style awareness ads
3. Send personalized Message Ads with invite
4. Track registrations by account

## Troubleshooting

### Low Match Rates

If fewer companies matched than expected:

| Issue | Solution |
|-------|----------|
| Using email domains | Switch to company website domains (acme.com, not @acme.com) |
| Small/new companies | These often lack LinkedIn Company Pages |
| Invalid domains | Verify domains resolve to company websites |
| Processing delay | Wait 48 hours for full matching |

### Audience Not Syncing

| Issue | Solution |
|-------|----------|
| Integration disconnected | Re-authorize LinkedIn in Integrations |
| Insufficient permissions | Ensure your LinkedIn account has Campaign Manager admin access |
| Below minimum size | Add more accounts (need 300+ matched companies) |
| Sync error | Check the campaign status for error messages |

### Low Engagement

| Issue | Solution |
|-------|----------|
| Wrong audience layer | Adjust job function/seniority targeting |
| Creative fatigue | Rotate new ad variations |
| Low bid | Increase bid to win more auctions |
| Poor creative | Test new headlines, images, and CTAs |

## Next Steps

| What to Do | Link |
|------------|------|
| Set up LinkedIn integration | [Integrations Overview](/integrations/overview) |
| Build your target account list | [Target Accounts](/audiences/accounts) |
| Sync audiences to LinkedIn DMP | [LinkedIn DMP](/audiences/linkedin-dmp) |
| Learn about multi-channel attribution | [Analytics Overview](/analytics/overview) |
