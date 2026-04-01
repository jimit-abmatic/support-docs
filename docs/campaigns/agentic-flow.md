---
id: agentic-flow
title: Agentic Flow Campaigns
sidebar_label: Agentic Flow
sidebar_position: 7
---

# Agentic Flow Campaigns

Let AI agents craft truly 1:1 personalized outreach for every prospect. Agentic Flow campaigns combine the multi-channel sequence structure you know—emails, calls, and LinkedIn messages—with AI that dynamically generates unique, personalized content for each contact based on their company, role, behavior, and engagement history.

## Why Agentic Flow Drives Results

| Traditional Sequences | With Agentic Flow |
|----------------------|-------------------|
| One template sent to all contacts | AI writes unique messages per prospect |
| Manual personalization with variables | Dynamic content tailored to each company |
| Same value prop regardless of persona | Messaging adapts to role and seniority |
| Static follow-ups | AI adjusts tone based on engagement signals |
| Hours spent writing variations | Agents generate at scale in seconds |

:::tip When to use Agentic Flow vs. Sequence
Use **Agentic Flow** when you want AI agents to fully own the personalization—ideal for high-value target accounts where every message should be unique. Use **[AI Sequence](/campaigns/email-campaigns)** when you want AI to dynamically personalize your templates while you maintain control over the base messaging framework.
:::

## How Agentic Flow Works

Agentic Flow uses the same multi-step sequence structure as regular sequences, but adds an AI personalization layer:

```
Step 1: AI writes personalized intro email per contact
    ↓ 3 days
Step 2: AI crafts unique follow-up based on engagement
    ↓ 2 days
Step 3: AI generates LinkedIn message with company context
    ↓ 4 days
Step 4: AI prepares call script with prospect-specific talking points
```

The AI agent uses your configured context—value propositions, tone guidelines, and personalization rules—to craft messages that feel hand-written for each prospect.

![Campaigns list showing Agentic Flow campaigns alongside other campaign types](/img/screenshots/campaigns-main-list.png)

## Getting Started

### Step 1: Create an Agentic Flow Campaign

1. Navigate to **Campaigns**
2. Click **+ Campaign**
3. Under **Advanced**, select **Agentic Flow**

![Create Campaign modal showing all campaign types including Agentic Flow under Advanced](/img/screenshots/campaign-create-wizard.png)

4. Choose a **Contact Collection** to target
5. Click **Create**

The next step asks you to select a contact collection:

![Select a contact collection to target for your Agentic Flow campaign](/img/screenshots/agentic-flow-select-contact.png)

### Step 2: Define Your Audience

The Audience tab lets you configure targeting rules that determine which contacts from your collection will receive outreach.

1. Click the **Audience** tab
2. Under **Campaign rules**, configure your filters:
   - **Account List** — target specific account collections
   - **Industry** — focus on specific verticals
   - **Company Size** — segment by employee count
   - **Location** — geographic targeting
   - **Behavior** — visitors who viewed specific pages
3. Click **Save** to apply your audience rules

![Agentic Flow campaign Audience tab showing campaign rules and filter builder](/img/screenshots/agentic-flow-audience-tab.png)

:::info Campaign rules apply on revealed contacts
Rules filter the contacts in your selected collection. Only contacts matching your criteria will be enrolled in the sequence.
:::

### Step 3: Build Your Sequence

1. Click the **Sequence** tab
2. Click **+ Step** to add a sequence step
3. Select the step type:
   - **Manual Email** — AI drafts, you review before sending
   - **Automatic Email** — AI personalizes and sends automatically
   - **Call** — AI generates call script with prospect context
   - **LinkedIn** — AI crafts personalized connection message

![Agentic Flow Sequence tab showing the step grid with + Step and Activate buttons](/img/screenshots/agentic-flow-sequence-tab.png)

4. Create your base template—the AI will personalize it for each contact
5. Set the **trigger delay** (days, hours, minutes after previous step)
6. Repeat for each step in your sequence

![Create Sequence Step dialog showing all four step types: Manual Email, Automatic Email, Call, and LinkedIn](/img/screenshots/agentic-flow-add-step.png)

### Step 4: Activate and Monitor

1. Review your sequence steps in the grid
2. Click **Activate** to start the campaign
3. AI agents will begin personalizing and sending messages
4. Monitor results in the **Engagement** and **Performance** tabs

## Sequence Step Types

| Step Type | How AI Personalizes | Best For |
|-----------|-------------------|----------|
| **Manual Email** | AI drafts personalized version; rep reviews and sends | High-value prospects, complex deals |
| **Automatic Email** | AI personalizes and sends automatically at scheduled time | Scale outreach, initial touches |
| **Call** | AI generates talking points based on prospect's company and role | Discovery conversations, follow-ups |
| **LinkedIn** | AI crafts connection request or message with company context | Social selling, warm introductions |

## Configuring AI Personalization

The quality of AI-generated messages depends on the context you provide. Configure your AI agent settings to get the best results.

### Setting Up Agentic Sequence Context

1. Go to **Settings** → **AI Agents**
2. Select the **Agentic Sequence** tab
3. Configure these key areas:

**Value Propositions** — What problems you solve and proof points:
```
We help B2B SaaS companies increase website conversion by 2-3x
through AI-powered personalization. Case study: Acme Corp saw
47% lift in demo requests within 30 days.
```

**Tone & Voice** — How the AI should write:
```
Professional but approachable. Write like a knowledgeable peer,
not a salesperson. Use data when available. Keep emails concise.
```

**Personalization Rules** — How to adapt by segment:
```
Enterprise (1000+ employees): Lead with ROI and compliance
Mid-Market (100-999): Focus on ease of implementation
SMB (under 100): Emphasize quick time-to-value
```

For full configuration details, see [Configuring AI Agents](/ai-agents/ai-agents-configuration).

## Campaign Tabs

### Insights

View aggregate campaign metrics including unique visitors, engagement rates, and conversion performance. Use the date range selector to analyze specific time periods.

### Audience

Configure targeting rules and filters to refine which contacts receive outreach. Campaign rules are applied to your selected contact collection.

### Sequence

Manage your multi-step sequence:

| Column | Description |
|--------|-------------|
| **Step** | Order in the sequence (sortable) |
| **Step Type** | Manual Email, Automatic Email, Call, or LinkedIn |
| **Step Template** | Preview of the base template content |
| **Created At** | When the step was added |
| **Updated At** | Last modification date |

**Key actions:**
- **+ Step** — Add a new sequence step
- **Activate** — Start sending the sequence
- **Clear Personalizations** — Regenerate AI content for all contacts (via the menu icon)

### Engagement

Track individual contact interactions—opens, clicks, replies, and meeting bookings across all sequence steps.

### Performance

Analyze campaign performance with metrics comparing personalized outreach vs. control groups, conversion rates, and ROI attribution.

## High-Impact Agentic Flow Strategies

### Target Account Outreach

Build a sequence targeting key decision-makers at your highest-priority accounts:

**Step 1: Personalized Intro (Day 0)**
- AI references the prospect's company, recent news, or tech stack
- One clear question tied to a relevant pain point

**Step 2: LinkedIn Connection (Day 3)**
- AI crafts a connection request mentioning mutual context
- Reference something specific about their role

**Step 3: Value-Add Email (Day 6)**
- AI selects the most relevant case study for their industry
- No ask—demonstrate understanding of their challenges

**Step 4: Call Script (Day 10)**
- AI prepares discovery questions based on their company profile
- Talking points tailored to their seniority and function

### Multi-Persona Account Strategy

Coordinate outreach to multiple contacts at the same account:

1. **Executive** — AI emphasizes strategic ROI and competitive advantage
2. **Technical evaluator** — AI highlights product capabilities and integrations
3. **End user** — AI focuses on daily workflow improvements
4. Time the sequence so contacts receive messages in coordinated waves

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Provide detailed AI context in Settings | Better context = more relevant personalization |
| Start with Manual Email steps | Review AI output before scaling to automatic |
| Keep sequences to 4-5 steps | Quality over quantity in each touchpoint |
| Mix channels across steps | Multi-touch across email, LinkedIn, and calls |
| Monitor and refine AI output | Provide feedback by editing drafts to improve over time |
| Use specific value propositions | Generic inputs produce generic AI output |

### Don'ts

| Avoid | Why |
|-------|-----|
| Leaving AI context empty | AI falls back to generic messaging without your input |
| Using only Automatic Email steps | Some prospects deserve a human review before send |
| Skipping the audience rules | Better targeting = higher response rates |
| Running too many contacts at once | Start small, validate AI quality, then scale |
| Ignoring the Performance tab | Data tells you which steps and messages work best |

## Troubleshooting

### AI Messages Feel Generic

| Issue | Solution |
|-------|----------|
| Limited context configured | Add detailed value props, tone, and rules in [AI Agent Settings](/ai-agents/ai-agents-configuration) |
| Contact data is sparse | Enrich your contact list with company and role information |
| Too broad audience | Narrow targeting so AI can personalize more specifically |

### Low Response Rates

| Issue | Solution |
|-------|----------|
| Wrong persona targeting | Refine contact list to match your ICP |
| Weak opening line | Configure AI to lead with pain points, not features |
| Poor timing between steps | Space steps 2-5 days apart for optimal cadence |
| Too many contacts per account | Limit to 2-3 contacts per target account |

### Sequence Not Activating

| Issue | Solution |
|-------|----------|
| No contacts in collection | Verify your contact collection has members |
| Empty sequence steps | Add at least one step before activating |
| Missing template content | Ensure each step has a subject and body |

---

## Real-World Use Cases

These three scenarios show how marketing teams use Agentic Flow campaigns to drive pipeline and revenue in practice. Use them as templates and adapt to your business.

### Use Case 1: Enterprise ABM Outreach

**Scenario:** Your company sells a data analytics platform. Sales has identified 50 enterprise accounts (1,000+ employees) in financial services as the top-priority segment for Q2. You need to book meetings with VPs of Data and Analytics at each account, but your team of 3 SDRs cannot personalize outreach at that scale.

**Setup in Abmatic:**

1. **Audience:** Import the 50-account list from Salesforce. Set campaign rules to `Industry = Financial Services` AND `Employee Count > 1000` AND `Job Title Level = VP or Director`.
2. **AI Context (Settings > AI Agents > Agentic Sequence):**
   ```
   Value Propositions:
   - Financial institutions using our platform reduce reporting cycles by 60%
   - SOC 2 Type II certified, meets FINRA and SEC audit requirements
   - Case study: Regional bank cut compliance reporting from 3 weeks to 2 days

   Personalization Rules:
   - For banks: Lead with compliance and regulatory reporting
   - For insurance: Lead with claims analytics and fraud detection
   - For asset management: Lead with portfolio risk modeling
   ```
3. **Sequence Steps:**

| Step | Type | Timing | Sample AI-Generated Subject Line |
|------|------|--------|----------------------------------|
| 1 | Automatic Email | Day 0 | "How [Bank Name] cut compliance reporting by 60%" |
| 2 | LinkedIn Connection | Day 3 | "Hi [Name], fellow [City] data leader here" |
| 3 | Value-Add Email | Day 6 | "[Name], FINRA reporting benchmark for [Company]" |
| 4 | Call Script | Day 10 | Talking points: their recent 10-K filing, data team size, regulatory burden |
| 5 | Manual Email | Day 14 | "Quick thought on [Company]'s analytics roadmap" |

**Expected Results:**
- 15-25% reply rate (vs. 3-5% for generic sequences)
- 8-12 meetings booked from 50 accounts within 30 days
- Each message references the prospect's specific regulatory environment, company size, and role

:::tip Why this works
AI researches each financial institution's specific compliance challenges, recent news, and leadership structure. A VP of Data at JPMorgan Chase gets a completely different message than a VP of Analytics at a regional credit union--even though both are in the same campaign.
:::

---

### Use Case 2: Product Launch Campaign with Multi-Persona Sequencing

**Scenario:** You are launching a new AI-powered forecasting module. Three personas need to hear about it at each target account: the CMO (budget holder), the Director of Marketing Operations (technical evaluator), and the Demand Gen Manager (daily user). Each persona cares about different things.

**Setup in Abmatic:**

1. **Create three Agentic Flow campaigns**, one per persona, all targeting the same 200 mid-market SaaS accounts:
   - Campaign A: "Forecasting Launch - CMOs"
   - Campaign B: "Forecasting Launch - Marketing Ops Directors"
   - Campaign C: "Forecasting Launch - Demand Gen Managers"

2. **AI Context tailored per campaign:**

| Persona | AI Personalization Focus | Sample Opening Hook |
|---------|-------------------------|---------------------|
| **CMO** | Board-level ROI, competitive advantage, revenue predictability | "Your board wants predictable revenue. Here is how [Company] can deliver it next quarter." |
| **Director of Mktg Ops** | Implementation timeline, integration with existing stack, data accuracy | "[Name], this plugs into your existing HubSpot/Salesforce setup in under a week." |
| **Demand Gen Manager** | Daily workflow improvement, campaign optimization, time savings | "Imagine knowing which campaigns will hit target before they launch, [Name]." |

3. **Coordinated timing:** Stagger the three campaigns so the CMO receives outreach on Day 0, the Director of Ops on Day 2, and the Demand Gen Manager on Day 4. This creates a surround-sound effect at the account level.

4. **Sequence structure per persona (4 steps each):**
   - Day 0: AI-personalized intro email highlighting their specific concern
   - Day 3: LinkedIn message referencing a relevant feature for their role
   - Day 7: Value-add email with a persona-appropriate asset (ROI calculator for CMO, integration docs for Ops, workflow demo for Demand Gen)
   - Day 12: Call script with role-specific discovery questions

**Expected Results:**
- Multi-threaded engagement at 30-40% of target accounts
- 2x higher meeting conversion than single-persona outreach
- Shorter sales cycles because the buying committee is already informed

---

### Use Case 3: Competitive Win-Back with Intelligence-Driven Personalization

**Scenario:** 75 accounts in your CRM are marked as "Closed-Lost to Competitor X." Six months have passed, and you have shipped several features that address the exact gaps that caused those losses. You want to re-engage these accounts with outreach that directly addresses what they found lacking.

**Setup in Abmatic:**

1. **Audience:** Import the "Closed-Lost to Competitor X" list from your CRM. Enrich with current data (new contacts, recent funding, leadership changes).

2. **AI Context (Settings > AI Agents > Agentic Sequence):**
   ```
   Competitive Intelligence:
   - Competitor X lacks native Salesforce integration (we launched this in Jan)
   - Competitor X charges $50/user/month extra for analytics (ours is included)
   - Competitor X has 2-star G2 reviews for customer support (we have 4.7 stars)

   Win-back positioning:
   - Do NOT trash the competitor. Acknowledge they are a good product.
   - Lead with "things have changed since we last spoke"
   - Reference the specific feature gap that caused the loss (from CRM notes)
   - Offer a side-by-side comparison, not a hard sell

   Tone: Humble, curious, consultative. We are not desperate--we are confident.
   ```

3. **Sequence Steps:**

| Step | Type | Timing | Purpose |
|------|------|--------|---------|
| 1 | Manual Email | Day 0 | "A lot has changed at [Our Company] since we last spoke, [Name]" -- AI references the specific loss reason |
| 2 | LinkedIn Message | Day 4 | Casual check-in, share a relevant customer story (AI picks by industry) |
| 3 | Value-Add Email | Day 8 | Side-by-side feature comparison, personalized to what matters for their role |
| 4 | Call Script | Day 12 | Discovery questions focused on whether Competitor X is meeting expectations |

**Why Manual Email for Step 1:** These are sensitive re-engagement messages. A rep should review the AI's draft before sending to ensure the competitive messaging is tactful and the loss-reason reference is accurate.

**Expected Results:**
- 10-15% reply rate (warm leads who already know your product)
- 5-8 re-opened opportunities from 75 accounts within 45 days
- Average deal size 20% higher than initial opportunity (they now understand your full value)

:::info Re-engagement timing matters
The best window for win-back campaigns is 6-12 months after the loss. Earlier feels desperate; later means they are too entrenched with the competitor. If the competitor raised prices or had a major outage, that is your signal to move.
:::

---

## Related

- [AI Sequences](/campaigns/email-campaigns) — AI-powered sequences with template-based control
- [Configuring AI Agents](/ai-agents/ai-agents-configuration) — Set up AI context for better personalization
- [AI Agents Overview](/ai-agents/ai-agents-overview) — Meet Clara and Alex
- [Contacts Management](/audiences/contacts) — Build your target contact lists
- [Dynamic Content](/campaigns/dynamic-content) — Variable syntax reference
