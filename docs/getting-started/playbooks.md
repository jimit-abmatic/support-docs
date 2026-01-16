---
id: playbooks
title: ABM Playbooks
sidebar_label: Playbooks
sidebar_position: 5
---

# ABM Playbooks

Proven, step-by-step strategies that transform how you target, engage, and convert your best-fit accounts. Each playbook is designed to deliver measurable results within weeks, not months.

![Campaign management in Abmatic AI](/img/screenshots/verified/campaigns-list.png)

---

## Choose Your Playbook

| Playbook | Best For | Accounts | Time to Value |
|----------|----------|----------|---------------|
| Enterprise ABM (1:1) | Strategic accounts with $100K+ potential | 10-25 | 2-4 weeks |
| Mid-Market ABM (1:Few) | Industry/segment-based targeting | 50-200 | 2-3 weeks |
| Demand Gen ABM (1:Many) | ICP-based targeting at scale | 1,000+ | 1-2 weeks |
| Sales-Marketing Alignment | Better coordination between teams | Any | 1 week |
| Website Optimization | Higher conversion rates | Any | 2-3 weeks |

---

## Playbook 1: Enterprise ABM (1:1 Accounts)

**Best for:** Strategic accounts with $100K+ deal potential
**Expected outcome:** 3-5x higher engagement rates and accelerated deal velocity

### Why It Works

Enterprise buyers expect personalized experiences. When a $500K prospect visits your website and sees generic messaging, you've already lost ground to competitors who personalize. This playbook ensures every touchpoint reinforces why you're the right choice for that specific account.

### Prerequisites

- Abmatic script installed and verified
- CRM connected (Salesforce or HubSpot)
- 10-25 strategic accounts identified with your sales team

### Step 1: Build Your Strategic Account List

1. Navigate to **Audiences** → **Target Groups**
2. Click **Create Target Group**
3. Choose **Import from CSV** or **Import from CRM**
4. Import your strategic accounts
5. Name it "Enterprise Strategic Accounts"

**Pro tip:** Only include accounts where you have executive alignment. Quality over quantity drives results.

![Account management in Abmatic AI](/img/screenshots/verified/accounts-list.png)

### Step 2: Create Account-Specific Content

For each target account, prepare personalized content:

| Content Type | Purpose | Example |
|--------------|---------|---------|
| Custom headline | Immediate recognition | "Welcome, [Company Name]" |
| Industry case study | Prove you understand their world | Same industry, similar size |
| Personalized CTA | Reduce friction | "Talk to [AE Name], Your Account Manager" |
| Industry content | Align with their priorities | Compliance docs, use cases |

### Step 3: Configure Personalization Campaigns

For each strategic account:

1. Go to **Campaigns** → **Create Campaign**
2. Select **Website Personalization**
3. Name it: "[Company Name] - Strategic Personalization"
4. Set targeting: **Account Name = [Company Name]**
5. Open the page editor and customize:
   - Hero headline with their company name
   - Case study section featuring their industry
   - CTA with direct line to their account executive

### Step 4: Coordinate with Sales

Transform marketing into a sales enablement engine:

1. Share personalized page URLs with the account executive
2. Configure Slack alerts when the account visits
3. Create response playbooks:
   - **Pricing page visit** → Send proposal email within 1 hour
   - **Case study view** → Follow up with related content
   - **Demo request** → Respond within 5 minutes

### Step 5: Enable AI SDR Support

Let Alex handle initial engagement while you focus on closing:

1. Go to **AI Agents** → **Alex (SDR)**
2. Enter account contact information
3. Configure personalized outreach sequences
4. Alex researches the account and crafts relevant messaging

### Measuring Success

Track these metrics for each account:

| Metric | What It Tells You |
|--------|-------------------|
| Engagement depth | How interested are they? (pages viewed, time on site) |
| Meeting conversion | Is personalization driving action? |
| Deal velocity | Are deals closing faster? |
| Content engagement | Which elements resonate? |

---

## Playbook 2: Mid-Market ABM (1:Few)

**Best for:** 50-200 accounts segmented by industry or use case
**Expected outcome:** 2-3x better engagement than generic campaigns

### Why It Works

You can't create individual experiences for hundreds of accounts, but you can create experiences for *types* of accounts. Group similar accounts together and personalize by what they have in common.

### Prerequisites

- Abmatic script installed and verified
- CRM connected
- Accounts segmented by industry, size, or use case

### Step 1: Segment Your Accounts

Create segments based on shared characteristics:

| Segment | Filter Criteria | Example Accounts |
|---------|-----------------|------------------|
| Industry vertical | `Industry = [value]` | All healthcare companies |
| Company size | `Employees = [range]` | Mid-market (200-2,000) |
| Use case | `Interest = [product]` | Visitor ID prospects |
| Region | `Country = [value]` | EMEA accounts |

**In Abmatic:**
1. Go to **Audiences** → **Target Groups**
2. Create one group per segment
3. Use filters like: `Industry = Healthcare AND Employees > 200`

### Step 2: Create Segment-Specific Campaigns

For each segment, build one campaign:

1. **Campaigns** → **Create** → **Website Personalization**
2. Target your segment group
3. Customize messaging:
   - Industry-specific headline
   - Relevant customer logos
   - Industry-specific use cases
   - Appropriate pricing tier CTA

**Healthcare segment example:**
- Headline: "HIPAA-Compliant ABM for Healthcare Marketers"
- Case studies: Healthcare customers only
- Resources: Compliance documentation, healthcare ROI calculator

### Step 3: Amplify with LinkedIn Advertising

Drive your segments to personalized experiences:

1. Create a LinkedIn Ads campaign targeting your segment
2. Push your segment to LinkedIn as a matched audience
3. Run sponsored content with segment-specific messaging
4. Website personalization reinforces ad messaging

### Step 4: Configure Conversion Tracking

Track what matters:

1. Go to **Conversions** → **Manage**
2. Create goals:
   - **Demo request** (primary conversion)
   - **Resource download** (engagement)
   - **Pricing page view** (intent signal)

![Conversions dashboard](/img/screenshots/verified/conversions-overview.png)

### Step 5: Report by Segment

Build dashboards showing:
- Engagement by industry vertical
- Conversion rates by segment
- Pipeline influenced by segment
- Which segments deliver best ROI

---

## Playbook 3: Demand Generation ABM (1:Many)

**Best for:** ICP-based targeting at scale (1,000+ accounts)
**Expected outcome:** Convert anonymous traffic into qualified pipeline

### Why It Works

Most B2B websites convert less than 3% of traffic. With Abmatic, you identify the 97% who leave, prioritize based on fit and intent, and create personalized experiences that convert—all automatically.

### Prerequisites

- Abmatic script installed and verified
- ICP criteria defined

### Step 1: Define Your ICP

Analyze your best customers to identify common characteristics:

| Attribute | Your ICP Value |
|-----------|----------------|
| Industry | Technology, Healthcare, Financial Services |
| Employees | 200 - 5,000 |
| Revenue | $10M - $500M |
| Geography | North America |
| Tech stack | Salesforce, HubSpot users |

### Step 2: Create Dynamic Audiences

Let Abmatic automatically build your audience:

1. **Audiences** → **Create** → **Dynamic Collection**
2. Set filters matching your ICP criteria
3. Enable auto-update for continuous growth
4. Your audience grows automatically as new visitors match

### Step 3: Implement Tiered Personalization

Not all visitors deserve the same experience:

**Tier 1: ICP Match (Basic)**
- Industry-aware messaging
- Relevant case studies
- Generic but targeted CTAs

**Tier 2: High Engagement (Enhanced)**
- When `Page Views > 3`: More aggressive CTA
- When `Visited Pricing`: Trigger sales follow-up
- When `Downloaded Content`: Add to nurture sequence

**Tier 3: High Intent (Priority)**
- When `Visited Pricing AND Demo Page`: Alert sales immediately
- Show "Talk to Sales" overlay
- Priority routing in CRM

### Step 4: Leverage AI ABM Agent

Let Clara automate multi-channel execution:

1. **AI Agents** → **Clara (ABM)**
2. Configure automated campaign management
3. Clara optimizes:
   - Content selection for each account
   - Channel mix and timing
   - Performance across campaigns

![AI Agents hub](/img/screenshots/verified/ai-agents-hub.png)

### Step 5: Scale with Advertising

Extend reach across channels:

1. Push ICP audience to:
   - **LinkedIn** for company targeting
   - **Google Ads** for remarketing
2. AI optimizes ad creative and targeting
3. Track view-through conversions in Abmatic

---

## Playbook 4: Sales-Marketing Alignment

**Best for:** Teams needing better coordination
**Expected outcome:** Faster response times, higher conversion rates, and shared accountability

### Why It Works

When sales and marketing operate from the same data, magic happens. Sales sees exactly what marketing is doing, marketing sees what sales needs, and prospects get a seamless experience.

### Step 1: Create Shared Visibility

Give sales access to marketing intelligence:

1. Add sales reps as users with View permissions
2. Configure Slack integration for real-time alerts
3. Enable CRM sync so visitor data appears in Salesforce/HubSpot

![Integrations hub](/img/screenshots/verified/integrations-hub.png)

### Step 2: Configure Lead Routing Rules

Automate handoffs based on account activity:

| Buying Signal | Automated Action |
|---------------|------------------|
| New high-fit account visits | Alert assigned AE, add to outreach sequence |
| Pricing page view | Notify AE, update lead score in CRM |
| Demo request | Create task for immediate follow-up |
| Multiple contacts from same account | Flag as "buying committee" |

### Step 3: Coordinate Outbound + Inbound

**For outbound campaigns:**
1. Sales shares their target account list
2. Marketing creates personalized landing pages
3. Sales sends outreach linking to custom pages
4. Track which accounts engage after outreach

**For inbound leads:**
1. Marketing identifies high-intent accounts
2. Real-time Slack alerts notify sales
3. Sales responds within 5 minutes (track this!)
4. Marketing measures speed-to-lead by rep

### Step 4: Implement Closed-Loop Reporting

Track the complete buyer journey:

```
Website Visits → Engaged Accounts → MQLs → Opportunities → Revenue
```

In Abmatic Analytics, measure:
- Accounts reached by marketing campaigns
- Accounts engaged (2+ pages, return visits)
- Accounts with conversions
- Pipeline created (from CRM sync)
- Revenue influenced and attributed

![Analytics reports](/img/screenshots/verified/analytics-reports.png)

---

## Playbook 5: Website Optimization for ABM

**Best for:** Improving conversion rates for target accounts
**Expected outcome:** 30-50% improvement in conversion rates for personalized experiences

### Step 1: Audit Your Current Experience

For your target accounts, evaluate:
- What do they see on first visit?
- How many clicks to find relevant content?
- Is the CTA relevant to their stage?
- Does anything reference their industry/company?

### Step 2: Prioritize Changes

Focus on high-impact pages first:

| Page | Personalization | Expected Impact |
|------|-----------------|-----------------|
| Homepage | Industry-specific headline | High - first impression |
| Case studies | Filter by visitor's industry | High - builds trust |
| Pricing | Enterprise callout for large companies | Medium - reduces friction |
| Resources | Surface relevant content | Medium - increases engagement |

### Step 3: Implement with Abmatic

**Start with homepage:**
1. Create industry variants (Technology, Healthcare, Finance, etc.)
2. A/B test personalized vs. generic
3. Measure engagement and conversion lift

**Expand to product pages:**
1. Use case messaging by persona
2. Feature highlights by need
3. Social proof from relevant customers

**Optimize conversion pages:**
1. Pre-fill known information
2. Reference their company or industry
3. Show relevant testimonials

### Step 4: Measure and Iterate

Track per audience segment:

| Metric | What to Look For |
|--------|------------------|
| Bounce rate | Lower = better relevance |
| Pages per session | Higher = more engagement |
| Time on site | Longer = better content fit |
| Conversion rate | Primary success metric |
| Pipeline influenced | Revenue impact |

---

## Getting Started

1. **Choose one playbook** that matches your current priority
2. **Verify prerequisites** are complete (script installed, CRM connected)
3. **Follow steps in order**—each builds on the previous
4. **Track metrics from day one** to measure impact
5. **Iterate based on results**—optimize what works

**Need help implementing these playbooks?**
Contact [support@abmatic.ai](mailto:support@abmatic.ai) or visit our [Help Center](/faq/general) for guidance.
