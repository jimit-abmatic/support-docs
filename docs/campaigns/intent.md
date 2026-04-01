---
id: intent
title: Intent Campaigns
sidebar_label: Intent
sidebar_position: 7
---

# Intent Campaigns

**Know which accounts are ready to buy before they raise their hand.** Abmatic AI's Intent campaigns analyze behavioral signals across your website, LinkedIn, email, and chat channels to score accounts by buying readiness -- so your team can focus on the prospects most likely to convert right now.

## Why Intent Scoring Changes the Game

Most B2B teams waste time chasing cold accounts while hot prospects slip away unnoticed. Intent scoring fixes that by surfacing the accounts actively researching solutions like yours.

| Without Intent Scoring | With Abmatic Intent Scoring |
|------------------------|----------------------------|
| Sales works every lead equally | Sales focuses on accounts showing buying behavior |
| No way to know who is "in-market" | Clear scoring reveals which accounts are actively evaluating |
| Rely on form fills as the only signal | Dozens of behavioral signals tracked automatically |
| Outreach feels random | Outreach is timed to buying windows |
| Pipeline feels unpredictable | Pipeline builds on real demand signals |

**Teams using Abmatic Intent campaigns close deals faster** because they engage accounts at the moment of highest interest -- not weeks later.

---

## How Abmatic Intent Works

Abmatic offers two types of intent campaigns that work together to give you the most complete picture of buying activity:

| Intent Type | What It Tracks | Best For |
|-------------|----------------|----------|
| **First-Party Intent** | Behavioral signals from your own website visitors | Strongest signals -- direct engagement with your content |
| **Third-Party Intent** | Topic and keyword research activity across the web | Broader signals -- accounts researching your category elsewhere |

### Multi-Channel Signal Collection

What makes Abmatic's approach uniquely powerful is that it does not just track one channel. It aggregates intent signals from every touchpoint where accounts interact with your brand:

| Channel | Signals Tracked | Why It Matters |
|---------|----------------|----------------|
| **Website Visits** | Page views, time on page, scroll depth, session count | Direct engagement with your content is the strongest buying signal |
| **LinkedIn Engagement** | Ad impressions, clicks, website conversions, message opens | Social engagement reveals accounts actively consuming your thought leadership |
| **Chat Interactions** | Chat messages, conversation depth, chat intent level (Low/Medium/High) | Accounts asking questions are often deep in their evaluation |
| **Email Activity** | Opens, clicks, replies | Email engagement shows active interest in your outreach |
| **Outreach Mailings** | Open count, click count, reply status | Sales touchpoint engagement reveals warm accounts |

Each channel contributes its own engagement score, and Abmatic combines them into a unified intent picture for every account.

---

## First-Party Intent: Scoring Your Website Visitors

First-Party Intent campaigns score accounts based on how they interact with your website. Different actions carry different weights -- because visiting your pricing page signals much stronger intent than landing on your homepage.

### Intent Actions and Default Weights

When you create a First-Party Intent campaign, you configure the weight (0-100) for each action type. Here are the tracked actions:

| Action | Default Weight | Description |
|--------|---------------|-------------|
| **Form Fill** | 50 | Prospect fills out a form on your website |
| **Demo Page Visit** | 10 | Prospect visits your demo or request-a-demo page |
| **Home Page Visit** | 2 | Prospect visits your primary home page |
| **Outbound** | 1.2 | Prospect opens an outbound personalized campaign link |
| **Inbound** | 1.1 | Prospect visits one of your inbound personalized pages |
| **Other Page Count** | 1 | Prospect visits other pages on your site |
| **Blog Page Visit** | 0.8 | Prospect reads one of your blog posts |
| **Time on Page** | 0.5 | Time spent by the prospect on a particular page |
| **Scroll Depth (per 10%)** | 0.1 | Multiplied for every 10% of page scroll by the visitor |

:::tip Why These Defaults Make Sense
A form fill (weight 50) is worth 50x more than a single other-page visit (weight 1) because someone who fills out a form is actively raising their hand. A demo page visit (weight 10) is 5x more valuable than a homepage visit (weight 2) because it shows purposeful evaluation behavior. Scroll depth at 0.1 per 10% means a full-page scroll contributes 1.0 -- rewarding content engagement without overwhelming high-value actions.
:::

### Understanding Score Tiers

Based on the weighted actions, accounts accumulate an engagement score. Use these tiers to guide your response:

| Score Range | Intent Level | What It Means | Recommended Action |
|-------------|-------------|---------------|-------------------|
| **75+** | Very High | Multiple high-value actions -- actively evaluating | Immediate sales outreach, priority follow-up |
| **50-74** | High | Strong engagement -- likely in buying cycle | Route to sales, trigger personalized sequence |
| **25-49** | Medium | Showing interest -- early research phase | Nurture with targeted content, monitor closely |
| **10-24** | Low | Light engagement -- awareness stage | Add to awareness campaigns, continue tracking |
| **0-9** | Minimal | Casual visit or bot traffic | No immediate action needed |

---

## Third-Party Intent: Tracking Topic Research

Third-Party Intent campaigns track whether your target accounts are researching specific topics and keywords across the web -- even when they are not on your site.

### How Third-Party Intent Works

1. You define the **keywords and topics** relevant to your solution (e.g., "account-based marketing," "website personalization," "B2B intent data")
2. You assign a **weight** (0-100) to each keyword based on its relevance to buying intent
3. Abmatic monitors research activity and calculates an **intent score** for each account
4. Accounts are ranked and tagged with a **trend indicator** showing whether intent is increasing or decreasing

### Third-Party Intent Signals

The Insights view shows you at-a-glance metrics for all tracked accounts:

| Metric | What It Shows |
|--------|---------------|
| **Surging Accounts** | Number of accounts with rapidly increasing intent |
| **Average Intent Score** | Mean score across all tracked accounts |
| **Active Signals** | Accounts with an intent score above 40 |
| **Topics Tracked** | Number of keywords you are monitoring |

### Trend Indicators

Each account gets a trend label based on how its intent is changing over time:

| Trend | What It Means | Action |
|-------|---------------|--------|
| **Surging** | Intent spiking significantly (surge > +15) | Act immediately -- this account is actively researching |
| **Heating** | Intent increasing steadily (surge +5 to +15) | Prioritize for outreach within the week |
| **Stable** | Intent holding steady (surge -5 to +5) | Continue monitoring, maintain nurture |
| **Cooling** | Intent declining (surge below -5) | Deprioritize; focus resources elsewhere |

---

## Setting Up an Intent Campaign

### Step 1: Create the Campaign

1. Navigate to **Campaigns** in the left sidebar
2. Click **+ CAMPAIGN**
3. Under **Advanced**, select **Intent**
4. Choose your intent type:
   - **First Party** -- Track intent from your own website visitors
   - **Third Party** -- Track intent from third-party data sources

![Campaign creation wizard showing Intent option under Advanced](/img/screenshots/campaign-create-wizard.png)

### Step 2: Configure Your Intent Campaign

#### For First-Party Intent

1. Give your campaign a descriptive name (e.g., "Website Intent - All Visitors")
2. Review the default weights for each action type
3. Adjust weights using the **slider** or **text input** (range: 0-100)
4. Click **Save**

**Customization tips:**
- Set **Demo Page Visit** higher if your demo page is the primary conversion path
- Increase **Blog Page Visit** if your content marketing drives significant pipeline
- Set **Scroll Depth** higher if your pages contain important conversion content below the fold
- Set any action to **0** to exclude it from scoring entirely

![First-party intent scoring weights configuration](/img/screenshots/intent-scoring-weights.png)

#### For Third-Party Intent

1. Give your campaign a descriptive name (e.g., "Third Party - ABM Keywords")
2. Click **Add Keyword** to add topics and keywords to track
3. Enter each keyword and set its weight (0-100)
4. Click **Save & Show Insights** to see results

**Keyword strategy tips:**
- Start with your core product category (e.g., "website personalization")
- Add competitor brand names (e.g., "Demandbase alternative")
- Include pain-point keywords (e.g., "increase B2B conversion rates")
- Weight branded/competitor keywords higher -- they signal stronger purchase intent

<!-- Screenshot: Third-party intent keyword configuration will be added when the feature UI is captured -->

### Step 3: Review Intent Insights

Once your campaign is active, the Insights tab shows scored accounts ranked by intent. You can:

- **Sort by Intent Score** to find the hottest accounts
- **Filter by Trend** to focus on surging accounts
- **Click any account** to see its full engagement history
- **Export the list** to share with your sales team

---

## Reading and Acting on Intent Signals

### The Engagement History Timeline

Every account in Abmatic has an engagement history that shows a timeline of all interactions across channels. Each entry includes:

| Data Point | What You See |
|------------|-------------|
| **Channel** | Website, LinkedIn, LinkedIn Messaging, or Email (with channel-specific icons) |
| **Visited Pages** | Clickable list of exact pages the account viewed |
| **Page Views** | Total and unique page view counts |
| **Scroll Depth** | How far they scrolled (percentage) |
| **Time on Page** | Total engaged time on your content |
| **Form Submissions** | Any forms filled out during the session |
| **Chat History** | AI chat conversations and chat intent level |
| **Engagement Score** | Calculated score for that specific session |
| **Location** | Visitor's city, region, and country |
| **Referrer URL** | Where the visitor came from |

### LinkedIn Engagement Data

For accounts engaging with your LinkedIn campaigns, you see:

| Metric | What It Tracks |
|--------|----------------|
| **Impressions** | How many times your ads were shown to the account |
| **Clicks** | Number of ad clicks from the account |
| **External Website Conversions** | Conversions driven by LinkedIn ads |
| **Engagement Score** | LinkedIn-specific engagement score |

### LinkedIn Messaging Data

For accounts engaging with your LinkedIn messaging campaigns:

| Metric | What It Tracks |
|--------|----------------|
| **Sends** | Messages sent to the account |
| **Opens** | Messages opened |
| **Action Clicks** | CTA button clicks |
| **Text URL Clicks** | Link clicks within messages |
| **Engagement Score** | Messaging-specific engagement score |

### Email Engagement Data

For accounts engaging with your email outreach:

| Metric | What It Tracks |
|--------|----------------|
| **Open Count** | Number of times the email was opened |
| **Click Count** | Number of link clicks |
| **Replied At** | Whether and when a reply was received |
| **Engagement Score** | Email-specific engagement score |

---

## Use Cases

### Trigger Sales Outreach When a Target Account Shows Buying Intent

**Scenario:** Your sales team needs to know the moment a target account starts actively evaluating solutions.

1. Create a First-Party Intent campaign with high weights on Demo Page Visit (10) and Form Fill (50)
2. Set up a [Slack notification](/integrations/slack) for accounts crossing a score threshold of 50+
3. When an account surges, sales receives an instant alert with the account name, pages visited, and engagement score
4. Sales reaches out while the account is actively engaged

**Result:** Response time drops from days to minutes. Prospects hear from you while your solution is top of mind.

### Prioritize Accounts That Are Actively Evaluating Solutions

**Scenario:** Your team has hundreds of target accounts but limited bandwidth for outreach.

1. Create both First-Party and Third-Party Intent campaigns
2. Use the Intent Score and Trend columns to rank accounts
3. Focus outreach on "Surging" and "Heating" accounts first
4. Deprioritize "Cooling" accounts to free up capacity

**Result:** Sales productivity increases because every conversation is with an account showing active buying signals.

### Identify Anonymous Companies Researching Your Category

**Scenario:** You want to discover net-new accounts in your ICP that are actively in-market.

1. Set up a Third-Party Intent campaign with category keywords (e.g., "ABM platform," "B2B personalization")
2. Review the Insights tab weekly for new accounts with high intent scores
3. Cross-reference with your [Company Identification](/visitor-tracking/company-identification) data
4. Add high-scoring accounts to your target lists and begin nurture campaigns

**Result:** You discover in-market accounts before your competitors do, giving you a first-mover advantage.

### Personalize Website Content Based on Intent Level

**Scenario:** You want accounts showing strong intent to see different content than casual browsers.

1. Use intent scores to create audience segments (High Intent vs. Low Intent)
2. Create a [Website Personalization](/campaigns/website-personalization) campaign targeting high-intent accounts
3. Show direct CTAs ("Book a Demo") to high-intent visitors instead of generic messaging
4. Show educational content to low-intent visitors to nurture them forward

**Result:** Conversion rates increase because your messaging matches each account's stage in the buying journey.

---

## How Intent Feeds Into Other Campaigns

Intent data does not live in isolation -- it powers your entire go-to-market motion:

| Integration | How It Works |
|-------------|-------------|
| **AI Sequences** | Trigger an [AI Sequence campaign](/campaigns/email-campaigns) when an account's intent score crosses a threshold |
| **Website Personalization** | Show [personalized content](/campaigns/website-personalization) based on intent level |
| **LinkedIn Ads** | Push high-intent accounts to [LinkedIn](/campaigns/linkedin-ads) for targeted advertising |
| **Agentic Flow** | Feed intent data into [AI-powered sequences](/campaigns/agentic-flow) for personalized outreach |
| **Agentic Chat** | Use chat intent level to prioritize [live chat](/campaigns/agentic-chat) conversations |
| **Slack Alerts** | Notify sales in [Slack](/integrations/slack) when accounts show buying behavior |
| **CRM Sync** | Push intent scores and engagement data to [Salesforce or HubSpot](/integrations/overview) |
| **Sales Prioritization** | Rank accounts in your CRM by intent score for daily call planning |

---

## Best Practices for Score Weight Configuration

### General Guidelines

| Principle | How to Apply It |
|-----------|----------------|
| **Weight by purchase proximity** | Actions closer to a purchase decision (demo, pricing, form fill) should have higher weights |
| **Start with defaults, then iterate** | The default weights are designed for most B2B SaaS companies -- adjust after you see initial results |
| **Do not zero out low-value actions** | Even low-weight actions like blog visits contribute to a complete picture of engagement |
| **Review weights quarterly** | As your website and content strategy evolve, so should your scoring model |
| **Align with your sales team** | Ask sales which page visits correlate most with closed deals, then weight those pages higher |

### Weight Configuration by Business Model

| Business Model | Emphasize These Actions | Typical Adjustments |
|----------------|------------------------|---------------------|
| **Product-Led Growth** | Form Fill, Demo Page Visit, Time on Page | Increase Demo Page Visit to 20+; increase Time on Page to 1.0+ |
| **Enterprise Sales** | Form Fill, Outbound, Inbound | Increase Form Fill to 75+; increase Outbound to 3.0+ |
| **Content-Led Growth** | Blog Page Visit, Scroll Depth, Time on Page | Increase Blog Page Visit to 3.0+; increase Scroll Depth to 0.5+ |
| **Multi-Product** | Other Page Count, Demo Page Visit | Increase Other Page Count to 2.0+ (product page exploration matters) |

### For Third-Party Keywords

| Practice | Why |
|----------|-----|
| **Use 10-20 keywords to start** | Too many keywords dilute the signal |
| **Weight competitor keywords at 70-100** | Accounts researching competitors are deep in their buying cycle |
| **Weight category keywords at 40-60** | Shows general interest but may not be ready to buy |
| **Weight pain-point keywords at 30-50** | Signals awareness of the problem your product solves |
| **Remove low-performing keywords monthly** | Keep your model focused on signals that actually predict deals |

---

## Troubleshooting

### Low or Zero Intent Scores

| Issue | Cause | Solution |
|-------|-------|----------|
| All scores are 0 | Tracking script not installed | Verify script at **Settings** > **Script Installation** |
| Scores are low across the board | Weights set too conservatively | Increase weights for high-value actions |
| Only a few accounts have scores | Low website traffic | Focus on driving target accounts to your site |
| Third-party scores not updating | Keywords too narrow | Broaden your keyword list |

### Scores Seem Inaccurate

| Issue | Cause | Solution |
|-------|-------|----------|
| Known hot account has low score | They use VPN or work remotely | Combine with Contact Reveal and CRM data |
| Unknown accounts score high | Bot traffic inflating scores | Abmatic auto-filters most bots; check for crawlers |
| Scores change unexpectedly | Weight configuration changed | Review your campaign's weight settings |

### Not Seeing Expected Accounts

| Issue | Cause | Solution |
|-------|-------|----------|
| Target account not appearing | They have not visited your site | Use Third-Party Intent to track off-site activity |
| Account visited but no score | Session too short to register | Lower the minimum thresholds for actions |
| LinkedIn data missing | LinkedIn integration not connected | Connect LinkedIn in **Settings** > **Integrations** |

---

## Related

- [Campaigns Overview](/campaigns/overview) - All campaign types at a glance
- [Website Personalization](/campaigns/website-personalization) - Personalize experiences based on intent
- [AI Sequences](/campaigns/email-campaigns) - Trigger sequences from intent signals
- [Agentic Flow](/campaigns/agentic-flow) - AI-powered outreach using intent data
- [Agentic Chat](/campaigns/agentic-chat) - Chat with high-intent visitors
- [Company Identification](/visitor-tracking/company-identification) - See which companies visit your site
- [Page Views](/visitor-tracking/page-views) - Understand visitor behavior patterns
- [Slack Integration](/integrations/slack) - Get alerts for high-intent accounts
