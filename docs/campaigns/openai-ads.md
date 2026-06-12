---
id: openai-ads
title: OpenAI Ads Campaigns
sidebar_label: OpenAI Ads
sidebar_position: 9
---

# OpenAI Ads Campaigns

Reach buyers where they are already asking questions — inside ChatGPT conversations. OpenAI Ads campaigns let you run ads on OpenAI's advertising network directly from Abmatic AI. You can build the whole campaign by hand, or describe your strategy in a sentence and let an AI agent draft the objective, bids, and creatives for you.

:::info OpenAI Ads replaces Meta
OpenAI Ads is the current ad type in this slot. The older Meta (Facebook/Instagram) tile is no longer a selectable campaign type — it appears as "Coming Soon" and cannot be created.
:::

## Before You Start: Connect the Integration

OpenAI Ads requires an OpenAI Ads API key connected in **Integrations** before you can use it.

1. Go to **Integrations** in Abmatic AI.
2. Find the **OpenAI Ads** card in the ad-network section.
3. Connect your OpenAI Ads account / API key.

If you try to create an OpenAI Ads campaign before the integration is connected, Abmatic AI sends you to the **Integrations** page with a message asking you to connect it first. Once the key is in place, you can create OpenAI Ads campaigns normally.

## Create an OpenAI Ads Campaign

1. Go to **Campaigns** in the left sidebar.
2. Click **+ Campaign**.
3. In the **Advertising** column of the Create Campaign dialog, select **OpenAI Ads** ("Reach buyers in ChatGPT conversations").

![Create Campaign dialog with OpenAI Ads in the Advertising column, alongside Display Advertising, LinkedIn, and Retargeting](/img/screenshots/campaigns-create-modal.png)

The campaign is created and opens to its detail view, where you configure the audience, build ads, and review performance.

## Campaign Tabs

An OpenAI Ads campaign has these tabs:

| Tab | What It's For |
|-----|---------------|
| **Insights** | Impressions, clicks, spend, CTR, CPC, and CPM over time |
| **Audience** | Define targeting, including locations |
| **Ads** | Build and manage your ad creatives (this is the "Creatives" tab, labeled **Ads** for OpenAI) |
| **Engagement** | Timeline of account/contact engagement (OpenAI clicks attribute via `utm_campaign`) |
| **Performance** | Visitor- and account-level results |

:::note Creatives are called "Ads" here
For OpenAI Ads campaigns, the creatives tab is labeled **Ads**, and the add button reads **+ Ad** (it opens an inline ad editor rather than the full creative editor used by display campaigns).
:::

## Building Ads

Open the **Ads** tab and click **+ Ad** to open the inline ad editor (`OpenAIAdDialog`). Each ad has these fields:

| Field | Description |
|-------|-------------|
| **Ad Name** | Internal name to identify the ad |
| **Title** | The headline shown to buyers |
| **Description** | The body copy |
| **Link** | The destination URL when someone clicks |
| **Image** | The ad image — click the image to enlarge it in a lightbox |

Add as many ads as you like. The grid shows each ad's stats and status, and import polling keeps statuses up to date for ads pulled in from OpenAI.

## AI Strategy: One-Click Campaign Builder

If you would rather not build everything by hand, use **AI Strategy**. Describe what you want in plain language and an Abmatic AI agent builds the campaign for you.

1. Open the **AI Strategy** dialog from the campaign.
2. Describe your strategy (for example: "Drive demo signups from mid-market SaaS companies evaluating ABM platforms").
3. The agent reads your brand and website, then automatically builds:
   - The campaign **objective**
   - Suggested **bids**
   - **Context hints** for targeting
   - **5 ad copies**
   - **5 brand-aware images**
4. The generated campaign is synced to OpenAI Ads in a **PAUSED** state so you can review everything before it goes live.

:::tip Always review before going live
AI Strategy publishes the campaign **paused**. Review the objective, bids, copy, and images, edit anything you want, then set the campaign live yourself.
:::

## Locations

OpenAI Ads targeting is limited to a fixed set of locations. You can target:

- **United States (US)**
- **Canada (CA)**
- **Australia (AU)**
- **New Zealand (NZ)**

Choose one or more of these in the **Audience** tab.

## Insights and Metrics

The **Insights** tab tracks ad-network performance over time:

| Metric | What It Measures |
|--------|------------------|
| **Impressions** | How many times your ads were shown |
| **Clicks** | Clicks on your ads |
| **Spend** | Total spend for the period |
| **CTR** | Click-through rate (clicks ÷ impressions) |
| **CPC** | Cost per click |
| **CPM** | Cost per thousand impressions |

Use the date-range selector to focus on a specific period, and Compare Date Ranges to see changes between two periods.

## Setting a Campaign Live or Inactive

OpenAI Ads campaigns use a simple **live / inactive** toggle rather than the personalization weight options (Full personalization / Experiment / Inactive) used by website campaigns. From the campaign-status control you can:

- **Set the campaign live on OpenAI Ads** — start serving ads
- **Pause the campaign on OpenAI Ads** — stop serving ads

You can also toggle live/inactive directly from the Campaigns list.

## Importing Existing Campaigns

If you already run OpenAI Ads outside Abmatic AI, use **Import Campaigns** (in Settings) to pull them in. Import runs asynchronously and polls for status, and once imported, ad-level stats and statuses appear in Abmatic AI alongside campaigns you built here.

## Related

- [Campaigns Overview](/campaigns/overview) — All campaign types
- [Advertising Campaigns](/campaigns/advertising-campaigns) — Display and Retargeting ads
- [LinkedIn Ads](/campaigns/linkedin-ads) — Advertise on LinkedIn
- [Conversions](/conversions/overview) — Track conversion goals
