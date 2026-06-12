---
id: playbooks
title: ABM Playbooks
sidebar_label: Playbooks
sidebar_position: 5
---

# ABM Playbooks

Step-by-step strategies for targeting, engaging, and converting your best-fit accounts with Abmatic AI. Each playbook walks through the exact nav paths and settings to use, so you can follow along in the app.

![Campaign management in Abmatic AI](/img/screenshots/verified/campaigns-list.png)

:::note Navigation has changed
Abmatic AI now uses a left **icon sidebar** (collapsed, hover to expand). The items you'll use in these playbooks are: **AI Agent**, **Home**, **Accounts**, **Contacts**, **Campaigns**, **Conversions**, **Visitor Reveal**, and **Analytics**. Account lists are called **Collections** and live under **Accounts**.
:::

---

## Choose Your Playbook

| Playbook | Best For | Accounts |
|----------|----------|----------|
| Enterprise ABM (1:1) | Strategic accounts with high deal potential | 10-25 |
| Mid-Market ABM (1:Few) | Industry/segment-based targeting | 50-200 |
| Demand Gen ABM (1:Many) | ICP-based targeting at scale | 1,000+ |
| Sales-Marketing Alignment | Better coordination between teams | Any |
| Website Optimization | Higher conversion on key pages | Any |
| Book More Meetings (Agentic Chat) | Turning website visits into booked demos | Any |

---

## Playbook 1: Enterprise ABM (1:1 Accounts)

**Best for:** A small set of strategic, high-value accounts.

### Why It Works

Enterprise buyers expect personalized experiences. When a high-value prospect visits your website and sees generic messaging, you've lost ground to competitors who personalize. This playbook makes sure every touchpoint reinforces why you're the right choice for that specific account.

### Prerequisites

- Abmatic AI script installed and verified (see [Install the Tracking Script](/getting-started/install-script))
- CRM connected (Salesforce or HubSpot)
- 10-25 strategic accounts identified with your sales team

### Step 1: Build Your Strategic Account List

1. Go to **Accounts** in the sidebar.
2. Create a **Collection** for your strategic accounts.
3. Choose **Import from CSV** or **Import from CRM**.
4. Import your strategic accounts.
5. Name it "Enterprise Strategic Accounts".

**Pro tip:** Only include accounts where you have executive alignment. Quality over quantity drives results.

![Account management in Abmatic AI](/img/screenshots/verified/accounts-list.png)

### Step 2: Plan Account-Specific Content

For each target account, prepare personalized content:

| Content Type | Purpose | Example |
|--------------|---------|---------|
| Custom headline | Immediate recognition | "Welcome, [Company Name]" |
| Industry case study | Prove you understand their world | Same industry, similar size |
| Personalized CTA | Reduce friction | "Talk to [AE Name], Your Account Manager" |
| Industry content | Align with their priorities | Compliance docs, use cases |

### Step 3: Configure Personalization Campaigns

For each strategic account:

1. Go to **Campaigns** and click **+ CAMPAIGN**.
2. Under **Personalization**, choose **Inbound** (Website Personalization).
3. Name it: "[Company Name] - Strategic Personalization".
4. Set targeting so the campaign matches that account.
5. Open the page editor and customize:
   - Hero headline with their company name
   - Case study section featuring their industry
   - CTA with a direct line to their account executive

:::tip Personalization variables
In the page editor you can insert visitor-specific values like `{{mt_company}}`, `{{mt_industry}}`, and `{{mt_city}}`. Type `{{` to see the list.
:::

### Step 4: Coordinate with Sales

Turn marketing into a sales enablement engine:

1. Share personalized page URLs with the account executive.
2. Configure Slack alerts when the account visits.
3. Create response playbooks:
   - **Pricing page visit** → Send a proposal email
   - **Case study view** → Follow up with related content
   - **Demo request** → Respond quickly

### Step 5: Enable AI SDR Support

Let **Alex (AI SDR)** handle initial prospecting and outreach research while your team focuses on closing.

1. Open the **AI Agent** entry at the top of the sidebar.
2. Switch to **Alex (AI SDR)**.
3. Provide the account context you want Alex to work from.
4. Alex researches the account and drafts relevant messaging for your review.

### Measuring Success

Track these signals for each account:

| Signal | What It Tells You |
|--------|-------------------|
| Engagement depth | How interested are they? (pages viewed, time on site) |
| Meeting conversion | Is personalization driving action? |
| Deal velocity | Are deals closing faster? |
| Content engagement | Which elements resonate? |

---

## Playbook 2: Mid-Market ABM (1:Few)

**Best for:** 50-200 accounts grouped by industry or use case.

### Why It Works

You can't create individual experiences for hundreds of accounts, but you can create experiences for *types* of accounts. Group similar accounts together and personalize by what they have in common.

### Prerequisites

- Abmatic AI script installed and verified
- CRM connected
- Accounts grouped by industry, size, or use case

### Step 1: Segment Your Accounts

Create segments based on shared characteristics:

| Segment | Filter Criteria | Example Accounts |
|---------|-----------------|------------------|
| Industry vertical | `Industry = [value]` | All healthcare companies |
| Company size | `Employees = [range]` | Mid-market (200-2,000) |
| Use case | `Interest = [product]` | Visitor ID prospects |
| Region | `Country = [value]` | EMEA accounts |

**In Abmatic AI:**
1. Go to **Accounts** and create a **Collection** per segment.
2. Use filters like: `Industry = Healthcare AND Employees > 200`.

### Step 2: Create Segment-Specific Campaigns

For each segment, build one campaign:

1. Go to **Campaigns** → **+ CAMPAIGN** → **Inbound** (Website Personalization).
2. Target your segment Collection.
3. Customize messaging:
   - Industry-specific headline
   - Relevant customer logos
   - Industry-specific use cases
   - Appropriate pricing tier CTA

**Healthcare segment example:**
- Headline: "HIPAA-Compliant ABM for Healthcare Marketers"
- Case studies: Healthcare customers only
- Resources: Compliance documentation, healthcare ROI calculator

### Step 3: Amplify with Advertising

Drive your segments to personalized experiences:

1. Create an advertising campaign from **Campaigns** → **+ CAMPAIGN** → **Advertising**.
2. Push your segment to **LinkedIn** as a matched audience.
3. Run ads with segment-specific messaging.
4. Website personalization reinforces the ad messaging.

:::note Available ad channels
The **Advertising** column offers **Display**, **LinkedIn**, **OpenAI Ads**, and **Retargeting**. Meta/Facebook ads show as "Coming Soon" and are not available yet.
:::

### Step 4: Configure Conversion Tracking

Track what matters:

1. Go to **Conversions** in the sidebar and open the **MANAGE** tab.
2. Create goals such as:
   - **Demo request** (primary conversion)
   - **Resource download** (engagement)
   - **Pricing page view** (intent signal)

![Conversions overview showing per-campaign conversion rates](/img/screenshots/pb-conversions.png)

### Step 5: Report by Segment

In **Analytics**, build reports showing:
- Engagement by industry vertical
- Conversion rates by segment
- Pipeline influenced by segment
- Which segments deliver the best return

---

## Playbook 3: Demand Generation ABM (1:Many)

**Best for:** ICP-based targeting at scale (1,000+ accounts).

### Why It Works

Most B2B websites convert a small fraction of their traffic. With Abmatic AI, you identify the companies who leave without converting, prioritize them by fit and intent, and create personalized experiences that convert—automatically.

### Prerequisites

- Abmatic AI script installed and verified
- ICP criteria defined

### Step 1: Define Your ICP

Look at your best customers to find common characteristics:

| Attribute | Example ICP Value |
|-----------|-------------------|
| Industry | Technology, Healthcare, Financial Services |
| Employees | 200 - 5,000 |
| Revenue | $10M - $500M |
| Geography | North America |
| Tech stack | Salesforce, HubSpot users |

### Step 2: Create a Dynamic Collection

Let Abmatic AI build your audience automatically:

1. Go to **Accounts** and create a new **Collection** from filters.
2. Set filters matching your ICP criteria.
3. A dynamic Collection updates automatically as new visitors match.

### Step 3: Implement Tiered Personalization

Not all visitors deserve the same experience:

**Tier 1: ICP Match (Basic)**
- Industry-aware messaging
- Relevant case studies
- Targeted CTAs

**Tier 2: High Engagement (Enhanced)**
- When `Page Views > 3`: More direct CTA
- When `Visited Pricing`: Trigger sales follow-up
- When `Downloaded Content`: Add to a nurture sequence

**Tier 3: High Intent (Priority)**
- When `Visited Pricing AND Demo Page`: Alert sales immediately
- Show a "Talk to Sales" overlay
- Priority routing in CRM

### Step 4: Leverage the AI ABM Agent

Let **Clara (AI ABM)** help manage execution across accounts.

1. Open the **AI Agent** entry at the top of the sidebar (Clara is the default ABM agent).
2. Ask Clara to review campaigns, surface high-engagement accounts, and suggest next steps.
3. Clara can help with content selection, channel mix, and timing across your campaigns.

![The AI Agent hub with Clara, the AI ABM agent](/img/screenshots/pb-ai-agents.png)

:::tip Clara vs. Alex
**Clara** is the **AI ABM** agent (campaign execution and personalization). **Alex** is the **AI SDR** agent (prospecting and outreach). You can switch between them inside the AI Agent area. These are different from any in-app **Co-Pilot** assistants that may also appear in the app.
:::

### Step 5: Scale with Advertising

Extend reach across channels:

1. From **Campaigns** → **+ CAMPAIGN** → **Advertising**, push your ICP audience to:
   - **LinkedIn** for company targeting
   - **Retargeting** to re-engage recent visitors
   - **OpenAI Ads** for additional reach
2. Track conversions back in **Analytics**.

---

## Playbook 4: Sales-Marketing Alignment

**Best for:** Teams that need better coordination.

### Why It Works

When sales and marketing work from the same data, prospects get a seamless experience. Sales sees what marketing is doing, and marketing sees what sales needs.

### Step 1: Create Shared Visibility

Give sales access to marketing intelligence:

1. Invite sales reps as users in **Settings**. Abmatic AI now includes a **Sales** user role with Google sign-in and a focused sales experience—use it for reps who only need visitor and account intelligence.
2. Configure the Slack integration for real-time alerts.
3. Enable CRM sync so visitor data appears in Salesforce or HubSpot.

![Integrations hub](/img/screenshots/verified/integrations-hub.png)

:::note Verify roles in Settings
Available roles and what each can see are managed under **Settings**. The **Sales** role is a restricted experience aimed at reps; confirm the exact permissions for your plan in **Settings** before rolling it out widely.
:::

### Step 2: Configure Lead Routing Rules

Automate handoffs based on account activity:

| Buying Signal | Suggested Action |
|---------------|------------------|
| New high-fit account visits | Alert the assigned AE, add to outreach |
| Pricing page view | Notify AE, update lead score in CRM |
| Demo request | Create a task for immediate follow-up |
| Multiple contacts from same account | Flag as a "buying committee" |

### Step 3: Coordinate Outbound + Inbound

**For outbound campaigns:**
1. Sales shares their target account list.
2. Marketing creates personalized landing pages.
3. Sales sends outreach linking to the custom pages.
4. Track which accounts engage after outreach.

**For inbound leads:**
1. Marketing identifies high-intent accounts in **Visitor Reveal**.
2. Real-time Slack alerts notify sales.
3. Sales responds quickly (track this).
4. Marketing measures speed-to-lead by rep.

### Step 4: Implement Closed-Loop Reporting

Track the complete buyer journey:

```
Website Visits → Engaged Accounts → MQLs → Opportunities → Revenue
```

In **Analytics**, measure:
- Accounts reached by marketing campaigns
- Accounts engaged (2+ pages, return visits)
- Accounts with conversions
- Pipeline created (from CRM sync)
- Revenue influenced and attributed

![Analytics reports](/img/screenshots/verified/analytics-reports.png)

---

## Playbook 5: Website Optimization for ABM

**Best for:** Improving conversion on the pages that matter most to your target accounts.

### Step 1: Audit Your Current Experience

For your target accounts, evaluate:
- What do they see on first visit?
- How many clicks to find relevant content?
- Is the CTA relevant to their stage?
- Does anything reference their industry or company?

### Step 2: Prioritize Changes

Focus on high-impact pages first:

| Page | Personalization | Why It Matters |
|------|-----------------|----------------|
| Homepage | Industry-specific headline | First impression |
| Case studies | Filter by visitor's industry | Builds trust |
| Pricing | Enterprise callout for large companies | Reduces friction |
| Resources | Surface relevant content | Increases engagement |

### Step 3: Implement with Abmatic AI

**Start with the homepage:**
1. Create industry variants (Technology, Healthcare, Finance, etc.).
2. A/B test personalized vs. generic using a control group.
3. Measure engagement and conversion lift.

**Expand to product pages:**
1. Use case messaging by persona.
2. Feature highlights by need.
3. Social proof from relevant customers.

**Optimize conversion pages:**
1. Pre-fill known information.
2. Reference their company or industry.
3. Show relevant testimonials.

### Step 4: Measure and Iterate

Track per audience segment in **Analytics**:

| Signal | What to Look For |
|--------|------------------|
| Bounce rate | Lower = better relevance |
| Pages per session | Higher = more engagement |
| Time on site | Longer = better content fit |
| Conversion rate | Primary success metric |
| Pipeline influenced | Revenue impact |

---

## Playbook 6: Book More Meetings with Agentic Chat

**Best for:** Turning website visits into booked demos automatically.

### Why It Works

An **Agentic Chat** widget answers visitor questions 24/7 using your company and product knowledge, then hands off to a meeting booking when a visitor is ready. Demos booked through chat are tracked end-to-end, so you can see exactly which conversations turned into pipeline.

### Prerequisites

- Abmatic AI script installed and verified
- A meeting/calendar option to book against (Google Calendar can be connected for meeting types and a default AE)

### Step 1: Create an Agentic Chat Campaign

1. Go to **Campaigns** and click **+ CAMPAIGN**.
2. In the **Agentic** column, choose **Agentic Chat**.
3. Name the campaign and choose where it should appear on your site.

### Step 2: Give the Agent Instructions

1. Open the campaign and go to the **Instructions** tab.
2. Describe what the agent should know and how it should talk to visitors (tone, key value props, what to do with common questions).

### Step 3: Set the Email Handoff Mode

Agentic Chat supports several handoff modes when a visitor shares their email. Pick the one that fits your goal:

- **Book a meeting** — offer available times so the visitor can schedule a demo
- **Send a thank-you** — confirm and follow up by email
- **Show a HubSpot form** — surface an embedded HubSpot form to capture the lead

For this playbook, choose **Book a meeting**. If you've connected **Google Calendar**, the agent can offer real availability and route to a default AE.

### Step 4: Watch the Conversations and Bookings

1. Open the campaign's **Performance** view.
2. Use the **AI Conversation Summary** sub-tab to see each conversation's **Topic**, **Sentiment**, and whether it **Converted**, with a "Show visitors" link to jump to the underlying visitors.
3. Look for the **Demo Booked** columns to see which conversations resulted in a scheduled meeting.

:::tip Find booked demos in Analytics
**Analytics** reports include **Demo Booked**, **Demo Booked At**, **Demo Scheduled At**, **Demo AE**, and **Demo Time** columns, plus an **Agentic Chat Engagement Score**. Use these to measure how much pipeline your chat is creating.
:::

### Measuring Success

| Signal | What It Tells You |
|--------|-------------------|
| Conversations started | How many visitors the agent engaged |
| Sentiment | Whether conversations are going well |
| Demo Booked | Meetings scheduled directly from chat |
| Agentic Chat Engagement Score | Overall quality of chat engagement |

---

## Getting Started

1. **Choose one playbook** that matches your current priority.
2. **Verify prerequisites** (script installed, CRM connected).
3. **Follow the steps in order**—each builds on the previous.
4. **Track signals from day one** so you can measure impact.
5. **Iterate based on results**—do more of what works.

**Need help implementing these playbooks?**
Contact [support@abmatic.ai](mailto:support@abmatic.ai) for guidance.
