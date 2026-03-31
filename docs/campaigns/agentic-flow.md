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
Use **Agentic Flow** when you want AI to generate truly personalized messages for each contact—ideal for high-value target accounts. Use **[Sequence](/campaigns/email-campaigns)** when you want full control over exact templates with variable-based personalization.
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

## Related

- [Email Campaigns (Sequences)](/campaigns/email-campaigns) — Template-based sequences for full control
- [Configuring AI Agents](/ai-agents/ai-agents-configuration) — Set up AI context for better personalization
- [AI Agents Overview](/ai-agents/ai-agents-overview) — Meet Clara and Alex
- [Contacts Management](/audiences/contacts) — Build your target contact lists
- [Dynamic Content](/campaigns/dynamic-content) — Variable syntax reference
