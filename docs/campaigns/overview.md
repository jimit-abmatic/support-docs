---
id: overview
title: Campaigns Overview
sidebar_label: Overview
sidebar_position: 1
---

# Campaigns Overview

**Transform every website visit into a personalized experience.** Abmatic AI campaigns let you show the right message to the right visitor at the right time—turning anonymous traffic into engaged prospects and customers.

## Why Campaigns Matter

| Without Campaigns | With Abmatic AI Campaigns |
|-------------------|------------------------|
| Same generic content for everyone | Tailored messaging for each visitor |
| No way to test what works | Built-in A/B testing with statistical significance |
| Manual updates for each audience | Rules-based automation that scales |
| No visibility into impact | Real-time analytics across every channel |

## The Campaigns Dashboard

Navigate to **Campaigns** in the left sidebar to see all your personalization and advertising campaigns in one place. The list opens on the **Table** tab.

![Campaigns dashboard — Co-Pilot card, summary cards by type, and the campaign table with Preference and Status columns](/img/screenshots/campaigns-list.png)

### At a Glance

The dashboard gives you complete visibility into your campaigns:

| Element | Purpose |
|---------|---------|
| **+ Campaign** button | Create a new campaign |
| **Co-Pilot card** | Quick access to Personalized Campaigns help powered by Abmatic AI's Co-Pilot |
| **Summary Cards** | Quick counts by campaign type (for example All Campaigns, Salesforce Campaigns, LinkedIn, A/B Test, Agentic Chat, Email, Widget) — click a card to filter |
| **Search & Filters** | Find campaigns instantly |
| **Campaign Table** | See status, visitors, preference, and timestamps at a glance |

### Campaign Types

Abmatic AI organizes campaign types into **three categories** in the Create Campaign dialog: **Personalization**, **Advertising**, and **Agentic**.

![Create Campaign dialog showing all campaign types organized into Personalization, Advertising, and Agentic columns](/img/screenshots/campaigns-create-modal.png)

#### Personalization

| Type | Best For | Example Use Case |
|------|----------|------------------|
| **[Inbound](/campaigns/website-personalization)** | Visitors matching firmographic criteria | Show enterprise pricing to Fortune 500 companies |
| **Outbound** | Specific named accounts (ABM) | Personalize landing pages for your top 100 target accounts |
| **[A/B Testing](/campaigns/ab-testing)** | Testing messaging variations | Compare two headlines to find the highest-converting one |
| **[Widget](/campaigns/widget)** | On-page banners, popups, and sidebar cards | Show targeted offers without modifying page content |

#### Advertising

| Type | Best For | Example Use Case |
|------|----------|------------------|
| **[Display Advertising](/campaigns/advertising-campaigns)** | Awareness and engagement ads | Run display campaigns against target account lists |
| **[LinkedIn](/campaigns/linkedin-ads)** | Social ad personalization | Retarget website visitors on LinkedIn |
| **[OpenAI Ads](/campaigns/openai-ads)** | Reaching buyers inside ChatGPT | Run ads on OpenAI's network with AI-built creatives |
| **[Retargeting](/campaigns/advertising-campaigns)** | Re-engaging visitors | Run campaigns against visitors who didn't convert |

:::note Meta is no longer selectable
The **Meta** (Facebook/Instagram) tile shows as "Coming Soon" and cannot be created. OpenAI Ads now occupies this slot.
:::

#### Agentic

| Type | Best For | Example Use Case |
|------|----------|------------------|
| **[Agentic Flow](/campaigns/agentic-flow)** | AI-crafted 1:1 personalized outreach | Let AI write unique messages for each prospect |
| **[Sequence](/campaigns/email-campaigns)** | AI-powered multi-channel sequences | AI personalizes emails, calls, and LinkedIn messages |
| **[Intent](/campaigns/intent)** | Finding in-market accounts | Identify hot accounts from first-party and third-party intent signals |
| **[Agentic Chat](/campaigns/agentic-chat)** | AI-powered website chat | Engage visitors with an intelligent chat widget |

:::info The "Agentic" category was previously called "Advanced"
The create-campaign category is now **Agentic**. The campaign once shown as "AI Sequences" appears in the dialog simply as **Sequence**.
:::

#### Auxiliary: Google Ads and CRM Campaigns

Two more campaign-related features exist outside the three create-campaign columns:

- **[Google Ads](/campaigns/google-ads)** — created through the **Customer Match** upload flow from Accounts/Contacts, not from a campaign tile. The Google tile is currently hidden in the Create Campaign dialog.
- **[CRM Campaigns](/campaigns/crm-campaigns)** — link Abmatic AI campaigns to Salesforce or HubSpot campaigns for member sync and attribution. Salesforce-synced campaigns appear on the Campaigns list (see the **Salesforce Campaigns** summary card).

### Understanding the Campaign Table

| Column | What It Tells You |
|--------|-------------------|
| **Campaign Name** | Campaign title and type (Inbound/Outbound/etc.) |
| **Preference** | Priority ranking—when a visitor matches multiple campaigns, highest preference wins |
| **Status** | Current state: Full personalization, Experiment, or Inactive |
| **Unique Visitors** | How many people saw personalized content vs. control group |
| **Created/Updated** | Timeline for tracking changes |

### Status Types Explained

Personalization campaigns use a status menu that sets how much traffic sees the personalized experience versus the control group:

| Status | What It Means | When to Use |
|--------|---------------|-------------|
| **Full personalization (100%)** | All matching visitors see personalized content | After validating a winning variation |
| **Ongoing (90%)** | Most matching visitors see personalized content, with a small control group held back | Keep a winner live while still measuring lift |
| **Experiment (50%)** | A/B split — half see personalized, half see the original | When testing new messaging |
| **Inactive (0%)** | Campaign is paused | During setup or when taking a break |

You may also see **No Active Page** when a campaign has no published page yet.

:::note Ad-network campaigns use a simpler toggle
Ad-network campaigns (like OpenAI Ads) don't use these A/B weights. They use a straightforward **live / inactive** toggle — set the campaign live on the ad network or pause it.
:::

### Reading Visitor Metrics

The **Unique Visitors** column shows your campaign's reach:

- **First number**: Visitors who saw personalized content
- **"vs X in control"**: Visitors who saw the original page

**Example:** "422 vs 437 in control" means:
- 422 visitors experienced your personalization
- 437 visitors served as your control group
- You can now compare conversion rates to measure true impact

### Priority System (Preference)

When a visitor qualifies for multiple campaigns, **Preference** determines what they see:

| Preference | Behavior |
|------------|----------|
| **#1** | Always wins when matched |
| **#2** | Shows only if visitor doesn't match #1 |
| **#3, #4...** | Falls through in order |

**Pro tip:** Put your highest-value campaigns (like competitor blocking or top accounts) at Preference #1.

## Quick Actions

From the dashboard you can:

- **Click any campaign** to open its editor and settings
- **Click + Campaign** to create a new campaign
- **Click a summary card** to filter (for example, click the **Agentic Chat** card to see only agentic chat campaigns)
- **Use checkboxes** to select multiple campaigns for bulk actions
- **Click column headers** to sort by any field

## Getting Started

Ready to create your first campaign? Here's the fastest path to value:

1. **[Website Personalization](/campaigns/website-personalization)** — Create targeted web experiences in minutes
2. **[First Campaign Tutorial](/getting-started/first-campaign)** — Step-by-step guide for beginners
3. **[Agentic Flow](/campaigns/agentic-flow)** — Let AI craft personalized outreach at scale
4. **[A/B Testing](/campaigns/ab-testing)** — Learn to run statistically valid experiments

---

## Campaign Playbook: Which Campaign Type Should I Use?

Not sure where to start? Match your marketing goal to the right campaign type below.

### Awareness and Top-of-Funnel

| Your Goal | Recommended Campaign | Why This Type |
|-----------|---------------------|---------------|
| "I want visitors from target accounts to see relevant content when they land on our site" | **[Inbound Personalization](/campaigns/website-personalization)** | Automatically tailors your existing pages based on who is visiting--no new pages needed |
| "I want to build brand recognition at target accounts before our SDRs reach out" | **[LinkedIn Ads](/campaigns/linkedin-ads)** | Puts your brand in front of decision-makers at specific companies on the platform where they spend the most professional time |
| "I want to retarget website visitors who didn't convert" | **[Retargeting](/campaigns/advertising-campaigns)** or **[Google Ads](/campaigns/google-ads)** | Keeps your brand visible across the web after someone visits your site, nudging them back when they are ready |
| "I want to reach buyers researching us inside ChatGPT" | **[OpenAI Ads](/campaigns/openai-ads)** | Puts your message in front of buyers while they are actively asking questions in AI conversations |
| "I want to promote an upcoming webinar or event to target accounts" | **[Widget](/campaigns/widget)** | Catches attention with time-sensitive banners or popups without requiring any page redesign |

### Engagement and Mid-Funnel

| Your Goal | Recommended Campaign | Why This Type |
|-----------|---------------------|---------------|
| "I want to create personalized landing pages for specific accounts our sales team is pursuing" | **Outbound Personalization** | Lets sales send prospects to a page that says their company name, references their industry, and speaks to their specific pain points |
| "I want to test whether our new headline converts better than the current one" | **[A/B Testing](/campaigns/ab-testing)** | Splits traffic between versions and measures which one actually drives more conversions--no guessing |
| "I want visitors to get instant answers to product questions 24/7" | **[Agentic Chat](/campaigns/agentic-chat)** | An AI assistant on your website that knows your product, qualifies leads, and captures emails around the clock |
| "I want to identify which target accounts are showing buying intent right now" | **[Intent Campaign](/campaigns/intent)** | Surfaces accounts actively researching your category based on first-party website behavior signals |

### Conversion and Bottom-of-Funnel

| Your Goal | Recommended Campaign | Why This Type |
|-----------|---------------------|---------------|
| "I want AI to write truly personalized outreach for each prospect at scale" | **[Agentic Flow](/campaigns/agentic-flow)** | AI generates unique messages for every contact based on their company, role, and behavior--not just mail merge variables |
| "I want to run a multi-step email and LinkedIn outreach sequence" | **[AI Sequence](/campaigns/email-campaigns)** | Orchestrates emails, calls, and LinkedIn touches with AI personalization on a timed cadence |
| "I want to sync our campaign engagement data back to Salesforce/HubSpot" | **[CRM Campaigns](/campaigns/crm-campaigns)** | Creates a direct link between Abmatic campaigns and CRM campaigns for attribution and pipeline reporting |
| "I want to show a targeted discount or demo offer to visitors about to leave the pricing page" | **[Widget](/campaigns/widget)** | Exit-intent popups catch high-intent visitors at the critical moment and recover otherwise-lost conversions |

### Multi-Channel ABM Programs

For a coordinated ABM program, combine multiple campaign types. Here is a proven sequence:

```
Week 1-2:  LinkedIn Ads → Build brand awareness at target accounts
              ↓
Week 2-4:  Inbound Personalization → Tailor your website for those accounts
              ↓
Week 3-5:  Agentic Flow → AI-personalized outreach to key contacts
              ↓
Week 4-6:  Widget → Nudge pricing page visitors toward demos
              ↓
Ongoing:   Intent Campaign → Monitor which accounts are heating up
              ↓
Ongoing:   CRM Campaigns → Sync all engagement back to Salesforce/HubSpot
```

:::tip Start with one, then layer
You do not need to launch all campaign types at once. Start with one that addresses your biggest gap (most teams start with **Inbound Personalization** or **Agentic Flow**), prove the value, then add complementary campaigns.
:::

---

## More Resources

| Topic | What You'll Learn |
|-------|-------------------|
| [Agentic Flow](/campaigns/agentic-flow) | AI-powered 1:1 personalized sequences |
| [Widget](/campaigns/widget) | Targeted banners, popups, and sidebar cards |
| [Sequence (AI Sequences)](/campaigns/email-campaigns) | AI-powered multi-channel outreach |
| [OpenAI Ads](/campaigns/openai-ads) | Run ads inside ChatGPT conversations |
| [Advertising Campaigns](/campaigns/advertising-campaigns) | Display and Retargeting ads |
| [Page Editor](/campaigns/page-editor) | How to customize any webpage element |
| [Dynamic Content](/campaigns/dynamic-content) | Insert personalized tokens automatically |
| [LinkedIn Ads](/campaigns/linkedin-ads) | Retarget visitors on LinkedIn |
| [Google Ads](/campaigns/google-ads) | Sync audiences to Google Ads |
| [AI Agents](/ai-agents/ai-agents-overview) | Clara and Alex for automated campaigns |
| [Troubleshooting](/troubleshooting/campaign-issues) | Fix common campaign issues |
