---
id: advertising-campaigns
title: Advertising Campaigns
sidebar_label: Advertising Campaigns
sidebar_position: 7
---

# Advertising Campaigns

Reach your target accounts and contacts across the web. Abmatic AI advertising campaigns let you serve programmatic display ads and retarget visitors who have already engaged with your website -- all from a single platform with unified audience management, creative tools, and AI-powered bidding.

:::info Looking for OpenAI Ads or LinkedIn?
This page covers **Display Advertising** and **Retargeting**, which share the same workflow. Two other advertising types have their own guides: **[OpenAI Ads](/campaigns/openai-ads)** (run ads inside ChatGPT) and **[LinkedIn](/campaigns/linkedin-ads)**.
:::

:::caution Meta is no longer selectable
**Meta (Facebook/Instagram)** is shown as **"Coming Soon"** in the Create Campaign dialog and cannot be created. OpenAI Ads now occupies that slot. The sections below cover the live advertising types only.
:::

## Campaign Types at a Glance

| | Display Advertising | Retargeting |
|---|---|---|
| **Best for** | Brand awareness and top-of-funnel reach | Re-engaging warm website visitors |
| **Channels** | Programmatic display network | Programmatic display network |
| **Targeting** | Account or Contact collections | Account or Contact collections |
| **Key strength** | Broad reach across thousands of publisher sites | Laser-focused on visitors who already showed intent |
| **Typical use case** | Warm up target accounts before outreach | Bring back pricing-page visitors who did not convert |

:::tip When to use which type
- **Display Advertising** -- You want broad programmatic reach to build awareness with a defined account list.
- **Retargeting** -- You want to re-engage visitors who have already interacted with your website but have not converted.
:::

## How Advertising Campaigns Work

Display and Retargeting campaigns share the same workflow and UI. You define your audience, configure budget and bidding, design creatives, and then monitor performance -- all within a consistent set of tabs.

```
Create Campaign  ->  Select Account or Contact  ->  Choose a Collection
       |
       v
   Audience tab         (budget, bidding, schedule)
   Creatives tab        (design and manage ad creatives)
   Insights tab         (impressions, CTAs, conversions over time)
   Engagement tab       (timeline of account/contact engagement)
   Performance tab      (visitors, CTA clicks, accounts, conversions)
```

## Getting Started

### Step 1: Create an Advertising Campaign

1. Navigate to **Campaigns**
2. Click **+ Campaign**
3. In the **Advertising** column, select the campaign type you want:
   - **Display Advertising** -- Drive awareness and engagement with ads
   - **Retargeting** -- Run campaigns against an engaged audience

![Create Campaign dialog showing the Advertising column with Display Advertising, LinkedIn, OpenAI Ads, and Retargeting (Meta is not selectable)](/img/screenshots/adv-create.png)

### Step 2: Choose Account or Contact Targeting

After selecting a campaign type, you are prompted to choose your targeting mode:

- **Account** -- Target companies in an account collection. Abmatic matches ads to individuals within those organizations.
- **Contact** -- Target specific people in a contact collection. Ideal when you have a named list of decision-makers.

![Account or Contact selection step](/img/screenshots/display-ads-create-step2.png)

### Step 3: Select a Collection

Choose a pre-built collection from your Audiences:

1. Click the **Select Accounts** (or **Select Contacts**) dropdown
2. Pick the collection you want to target
3. Click **Create Campaign**

![Select a collection step](/img/screenshots/display-ads-detail.png)

You will be taken to the campaign detail page where you can configure audience settings, budget, creatives, and more.

## Audience Configuration

The **Audience** tab is the command center for targeting, budget, and bidding. It is organized into four numbered sections, with a sidebar that estimates your reach and spend.

![Advertising campaign Audience tab with Audience Selection, Budget, and Schedule sections, plus a sidebar showing Potential Audience, Estimated Daily Audience, Impressions, and Spend](/img/screenshots/adv-audience-tab.png)

### 1. Audience Selection

Select (or change) the account or contact collection that powers your campaign. The sidebar shows the number of accounts or contacts currently in the collection.

- To change the collection, use the **Select Accounts** / **Select Contacts** dropdown.
- The sidebar panel displays the **Accounts in campaign** count along with estimated potential audience, daily audience, daily impressions, and daily spend.

### 2. Budget

Choose how to allocate your spend:

| Budget Option | Description |
|---|---|
| **Set a daily budget** | Caps daily spend. Actual daily amount may vary by up to 50% on high-opportunity days. |
| **Set a lifetime campaign budget** | Total amount to spend over the life of the campaign. |
| **Set both a daily and lifetime budget** | Combines daily pacing with an overall cap for maximum control. |

Enter the dollar amount for each budget type you select. All amounts are in USD.

### 3. Schedule

Control when your ads run:

| Schedule Option | Description |
|---|---|
| **Run campaign from a start date to an end date** | Fixed flight dates. You set both a start and end date. |
| **Run campaign continuously** | The campaign runs indefinitely from the start date until you pause it. |

### 4. Bidding

Configure your optimization goal and bidding strategy.

#### Optimization Strategy

| Goal | Description |
|---|---|
| **Conversions** | Target people most likely to convert, like signups and purchases. |
| **Clicks** | Focus on increasing traffic by maximizing clicks. |
| **Impressions** | Maximize how many times your ads are shown. |

#### Bidding Strategy

| Strategy | Description |
|---|---|
| **AI-Predicted (Clara)** | Let Abmatic's ABM Agent Clara handle bidding with AI-driven optimization. *Recommended for most campaigns.* |
| **Max Delivery** | Get the most results possible with your full budget. |
| **Cost Cap** | Stay under your desired maximum cost per result. Enter a target cost amount (per click, per thousand impressions, or per landing page click depending on your optimization goal). |
| **Manual** | Control your bids directly in the auction. Enter a specific bidding amount. |

:::tip AI-Predicted bidding
Clara, Abmatic's ABM Agent, continuously analyzes performance data and adjusts bids in real time. This is the recommended strategy for most campaigns because it adapts to changing market conditions automatically.
:::

After configuring all four sections, click **Save changes** at the top of the Audience tab.

## Creative Management

The **Creatives** tab lets you design, manage, and track the status of your ad creatives.

### Adding a Creative

1. Click the **+ Creative** button in the top-right corner of the Creatives tab
2. A new creative is created with a default name and you are taken to the creative editor
3. Design your ad using the visual editor
4. Save and return to the Creatives tab

### Managing Creatives

The creatives grid displays:

| Column | Description |
|---|---|
| **Creative** | Name of the creative (click to open in the editor) |
| **Status** | Active or Inactive -- click to toggle directly in the grid |
| **Updated At** | Last modification timestamp |
| **Created At** | When the creative was added |

You can select multiple creatives using the checkboxes and delete them via the menu (three-dot icon).

### Creative Best Practices

| Practice | Why It Works |
|---|---|
| Create 3-5 creative variations | Allows the system to optimize for the best performer |
| Use clear, concise messaging | Ad viewers decide in milliseconds whether to engage |
| Include a strong call to action | Drives clicks and conversions |
| Match creative to landing page | Consistency improves conversion rates |
| Refresh creatives every 4-6 weeks | Prevents ad fatigue |

## Insights

The **Insights** tab provides a visual overview of campaign performance over time with interactive charts and a detailed breakdown table.

### Key Metrics

| Metric | Description |
|---|---|
| **Impressions** | Total number of times your ads were shown |
| **CTA Clicks** | Number of call-to-action clicks, with click-through rate (CTR) |
| **Conversions** | Number of completed goals, with conversion rate (CVR) |
| **CVRL** | Conversion rate for the **personalized** group |
| **CTRL** | Conversion rate for the **control** group |

:::note CVRL / CTRL
**CVRL** is the conversion rate of the **personalized** group and **CTRL** is the conversion rate of the **control** group. Compare the two to see the lift personalization is driving.
:::

### Chart Views

Toggle between different chart views using the tabs below the metrics cards:

- **Impressions** -- Ad delivery volume over time
- **CTA** -- Click-to-action trend
- **CTR** -- Click-through rate trend
- **Conversion** -- Conversions over time
- **CVR** -- Conversion rate trend

Each chart shows **Total**, **Personalized**, and **Control** lines so you can measure the impact of personalization on your advertising campaigns.

### Date Range Filtering

Use the date range selector in the top-right corner to filter insights to a specific time period. You can also enable **Compare Date Ranges** to see delta changes between two time periods side by side.

## Engagement

The **Engagement** tab displays a chronological timeline of all engagement activity for accounts and contacts touched by the campaign. This includes ad impressions, clicks, website visits, form submissions, and other interactions.

Use this tab to understand the full journey of your target audience from first ad impression through conversion.

## Performance

The **Performance** tab provides granular, row-level data across four sub-views:

| Sub-tab | What It Shows |
|---|---|
| **Visitors** | Individual visitor records with domain, variation (Personalized/Control), visited pages, time on site, sessions, location, and conversion status |
| **CTA Clicks** | Visitors who clicked a call-to-action element |
| **Accounts** | Aggregated account-level view with domain, visited pages, time on site, page views, sessions, and form fills |
| **Conversions** | Visitors who completed a conversion goal, with form submission details |

Each table supports filtering, sorting, and search. Click any domain to navigate to the account detail view, or any visitor to see the contact profile.

## Campaign Type Deep Dives

### Display Advertising

Display advertising campaigns deliver programmatic ads across a vast network of publisher websites. This is ideal for:

- **Top-of-funnel awareness** -- Get your brand in front of target accounts before sales outreach
- **Account-based advertising (ABA)** -- Show ads only to employees at companies on your target list
- **Event promotion** -- Drive registrations from a specific account list
- **Content syndication** -- Promote gated content to a defined audience

**How it works:** Abmatic AI syncs your account or contact collection to programmatic ad exchanges. When a user matching your target audience visits a site in the ad network, your creative is served in real time.

### Retargeting

Retargeting campaigns focus on visitors who have already engaged with your website. This is ideal for:

- **Pricing page drop-offs** -- Bring back visitors who viewed pricing but did not convert
- **Content consumers** -- Re-engage visitors who read your blog or case studies
- **Demo request abandonment** -- Nudge visitors who started but did not complete a demo request
- **Cross-sell / upsell** -- Show relevant ads to existing customers visiting specific product pages

**How it works:** Abmatic AI's tracking script identifies visitors and adds them to your retargeting audience. When those visitors browse other sites in the ad network, your creatives are displayed to bring them back.

## Use Cases

### Warm Up Target Accounts Before Outreach

1. Create an **Account** collection with your target companies
2. Launch a **Display Advertising** campaign targeting that collection
3. Run awareness ads for 2-3 weeks before your sales team begins outreach
4. When reps reach out, prospects already recognize your brand

### Retarget Pricing Page Visitors

1. Create a dynamic collection that captures visitors to your pricing page
2. Launch a **Retargeting** campaign targeting that collection
3. Serve ads with a limited-time offer or case study
4. Monitor the Performance tab to track return visits and conversions

### Multi-Channel ABM Blitz

Combine advertising types for maximum impact:

1. **Display Advertising** -- Build awareness across the web (weeks 1-2)
2. **[LinkedIn](/campaigns/linkedin-ads)** -- Reinforce messaging on social (weeks 2-4)
3. **[OpenAI Ads](/campaigns/openai-ads)** -- Reach buyers researching you inside ChatGPT
4. **Retargeting** -- Capture and convert engaged visitors (ongoing)
5. Pair with [AI Sequences](/campaigns/email-campaigns) for personalized email outreach

## Best Practices

### Do's

| Practice | Why It Works |
|---|---|
| Start with a well-defined account list | Reduces wasted spend and improves relevance |
| Use AI-Predicted bidding (Clara) | Continuously optimizes bids based on real-time signals |
| Create multiple creative variations | Enables performance optimization across designs |
| Set both daily and lifetime budgets | Maintains pacing while capping total spend |
| Monitor the Insights tab weekly | Catch issues early and double down on what works |
| Combine campaign types | Multi-channel reinforcement dramatically improves recall |

### Don'ts

| Avoid | Why |
|---|---|
| Running one creative indefinitely | Ad fatigue reduces click-through rates over time |
| Setting budgets too low for your audience size | Insufficient reach leads to inconclusive data |
| Ignoring the Performance tab | You miss granular visitor-level insights |
| Launching without conversion tracking | You cannot measure ROI without defined goals |
| Targeting overly broad audiences | Dilutes your message and wastes budget |

## Troubleshooting

### Low Impressions

| Issue | Solution |
|---|---|
| Budget too low | Increase daily budget to ensure sufficient delivery |
| Audience too small | Expand your account or contact collection |
| Schedule not started | Verify the start date is today or in the past |
| Campaign paused | Check the campaign status and reactivate |

### Low Click-Through Rate

| Issue | Solution |
|---|---|
| Weak creative messaging | Test new headlines and calls to action |
| Poor audience targeting | Refine your collection to better match your ICP |
| Ad fatigue | Rotate in fresh creatives every 4-6 weeks |
| Wrong optimization goal | Switch from Impressions to Clicks for traffic-focused campaigns |

### Low Conversions

| Issue | Solution |
|---|---|
| Landing page mismatch | Ensure ad creative aligns with landing page content |
| No conversion goals set | Configure goals in **Conversions** before launching |
| Audience not ready to convert | Use Display for awareness first, then Retargeting for conversion |
| Bidding strategy not aligned | Switch to Conversions optimization goal |

### Budget Not Spending

| Issue | Solution |
|---|---|
| No active creatives | Ensure at least one creative is set to Active |
| Audience collection empty | Verify your collection has accounts or contacts |
| Schedule dates incorrect | Check that the start date has passed |
| Bidding amount too low (manual/cost-cap) | Increase your bid to be competitive in auctions |

## Related

- [Website Personalization](/campaigns/website-personalization) -- Personalize the site experience for ad-driven visitors
- [LinkedIn Ads](/campaigns/linkedin-ads) -- Advertise on LinkedIn
- [OpenAI Ads](/campaigns/openai-ads) -- Run ads inside ChatGPT conversations
- [AI Sequences](/campaigns/email-campaigns) -- Multi-channel outreach campaigns
- [Accounts](/audiences/accounts) -- Build target account lists
- [Contacts](/audiences/contacts) -- Build target contact lists
- [Target Groups](/audiences/target-groups) -- Create and manage collections
- [Conversions](/conversions/overview) -- Set up conversion tracking
- [AI Agents](/ai-agents/ai-agents-overview) -- AI-powered optimization including Clara's bidding
