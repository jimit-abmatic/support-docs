---
id: ai-agents-configuration
title: Configuring AI Agents
sidebar_label: Configuration
sidebar_position: 2
---

# Configuring AI Agents

This guide is about the **strategy** of giving your AI agents context: what to write, how to structure it, and how settings-level context interacts with campaign-level instructions. With the right context, your agents answer visitor questions accurately, sound on-brand, and qualify leads the way your team would.

:::note Where this fits
This page focuses on *what to put in your agent context and why*. For a walkthrough of the **Settings → AI Agents** screen itself (the tabs and buttons), see the **AI Agents** page under **Settings**.
:::

## Why context matters

| Without context | With context |
|-----------------|--------------|
| Generic responses | On-brand messaging that matches your voice |
| Basic product info | Accurate pricing, features, and differentiators |
| Missed opportunities | Intelligent qualification and next steps |
| Inconsistent answers | Approved responses to common questions |

The more your agents know about your business, the better they represent it.

## Where to set agent context

Go to **Settings** in the left sidebar, then **AI Agents**. There are two context tabs:

| Tab | Purpose |
|-----|---------|
| **Agentic Chat** | Context for the website visitor chat assistant — company overview, products, pricing, FAQs. |
| **Agentic Sequence** | Context for AI-powered email outreach — value props, tone, and follow-up cadence. |

Each tab has a large context text box, a **Refresh Context** button (regenerates a draft context from your scraped website pages using AI — a useful starting point you can then edit), and a **Save Context** button. Always click **Save Context** after making changes.

![The Settings AI Agents screen with the Agentic Chat and Agentic Sequence tabs, a Refresh Context button, and a large assistant context document](/img/screenshots/cfg-settings-ai.png)

*Settings → AI Agents. Switch between the **Agentic Chat** and **Agentic Sequence** tabs, edit the context, and click **Save Context**. Use **Refresh Context** to generate a draft from your website.*

:::tip Start with Refresh Context, then edit
Click **Refresh Context** to have the AI draft context from your scraped website pages, then tighten it up — fix pricing, add FAQs, and remove anything inaccurate. It's faster than starting from a blank box.
:::

---

## Agentic Chat Context

Give your AI assistant everything it needs to engage website visitors with confidence and convert them into qualified leads.

:::info Settings vs. campaign Instructions
The context you configure here provides **default instructions** for all Agentic Chat campaigns. You can override these defaults with campaign-specific instructions in each campaign's **Instructions** tab. **Campaign-level instructions take precedence** when both exist.

- **Settings context**: global defaults for all campaigns
- **Campaign Instructions**: specific overrides for individual campaigns

See [Agentic Chat Campaigns](/campaigns/agentic-chat) for campaign-level configuration.
:::

### What to Include

Build comprehensive context around these four pillars:

#### 1. Company Overview

Help the AI represent your brand accurately:

```
Company Name: Acme Analytics
Industry: B2B Marketing Technology
Founded: 2019
Mission: Help marketing teams prove ROI and optimize campaigns

What we're known for:
- Multi-touch attribution that actually works
- Real-time pipeline visibility
- Integrations with 50+ marketing tools
```

#### 2. Products & Pricing

Enable accurate conversations about your offerings:

```
Products:

Starter Plan - $199/month
- Up to 10,000 monthly visitors
- Basic attribution modeling
- Email support
- Best for: Small marketing teams getting started

Professional Plan - $499/month
- Up to 100,000 monthly visitors
- Advanced multi-touch attribution
- CRM integrations (HubSpot, Salesforce)
- Priority support
- Best for: Growing teams with complex funnels

Enterprise Plan - Custom pricing
- Unlimited visitors
- Custom attribution models
- Dedicated success manager
- SLA guarantees
- Best for: Large organizations with multiple brands
```

#### 3. Key Differentiators

Arm the AI with competitive advantages:

```
What makes us different:
- 50% faster implementation than competitors (2 weeks vs 6+ weeks)
- No-code setup—marketers can configure without engineering
- Real-time data (not 24-48 hour delays)
- Customer success team with 95% satisfaction rating

Proof points:
- "3x ROI within 90 days" - G2 Reviews
- 500+ B2B companies trust us
- SOC 2 Type II certified
```

#### 4. Common Questions & Approved Answers

Ensure consistent, accurate responses:

```
Q: How does attribution work with our existing CRM?
A: We sync bi-directionally with Salesforce and HubSpot. Once connected, attribution data appears directly on your contact and opportunity records within 15 minutes.

Q: What's the implementation timeline?
A: Most customers are fully live within 2 weeks. We provide a dedicated onboarding specialist who handles 90% of the setup for you.

Q: Do you offer a free trial?
A: We offer a 14-day free trial with full access to Professional features. No credit card required to start.

Q: How is pricing structured for teams?
A: Pricing is based on monthly website visitors, not seats. Your entire team gets unlimited access on any plan.
```

---

## Agentic Sequence Context

Guide your AI to write personalized, high-converting outreach that sounds authentically human.

### What to Include

#### 1. Value Propositions

Give the AI compelling reasons to engage prospects:

```
Primary value propositions:

For Marketing Leaders:
- "See exactly which campaigns drive revenue, not just leads"
- "Cut reporting time from hours to minutes"
- "Prove marketing's impact in language the CFO understands"

For Revenue Operations:
- "Unify marketing and sales data in one view"
- "Automate attribution without engineering resources"
- "Identify pipeline bottlenecks before they cost you deals"

ROI proof points:
- Average 3.2x return within 6 months
- 10+ hours/week saved on manual reporting
- 28% improvement in marketing-sourced pipeline
```

#### 2. Tone & Voice Guidelines

Maintain brand consistency across all outreach:

```
Our voice is:
- Professional but approachable (not stiff or overly casual)
- Confident but not arrogant
- Data-driven with clear proof points
- Helpful, not pushy

Always include:
- Specific, relevant personalization
- One clear call-to-action per email
- Value before ask

Never include:
- Excessive exclamation points
- Phrases like "just checking in" or "touching base"
- Generic flattery ("I love your company!")
- More than one meeting request
```

#### 3. Follow-up Strategy

Define the cadence and approach for sequences:

```
Follow-up cadence:
- Day 1: Initial outreach highlighting specific pain point
- Day 3: Share relevant case study or social proof
- Day 7: Offer something of value (demo, audit, resource)
- Day 14: Final touch with new angle or insight

Objection handling:
- "Not the right time": Ask about future planning cycles, offer to reconnect
- "Already have a solution": Ask about gaps, share competitive differentiators
- "Need to involve others": Offer to include stakeholders, send shareable resources
```

#### 4. Personalization Rules

Help the AI tailor messages by segment:

```
Personalization by company size:

Enterprise (1000+ employees):
- Emphasize: Security, compliance, dedicated support, SLAs
- Mention: Enterprise customer logos (Cisco, Adobe, Salesforce)
- Approach: Executive-level language, strategic focus

Mid-Market (100-999 employees):
- Emphasize: Time to value, ease of use, integrations
- Mention: Similar-sized customer success stories
- Approach: Tactical benefits, quick wins

SMB (under 100 employees):
- Emphasize: Affordable, self-service, immediate ROI
- Mention: Starter plan pricing, free trial
- Approach: Direct, benefit-focused, no fluff
```

---

## Best Practices

### Do This

| Practice | Why It Matters |
|----------|---------------|
| **Be specific with numbers** | "3x ROI" beats "significant improvement" |
| **Update quarterly** | Keep messaging aligned with current positioning |
| **Include real FAQs** | Pull from support tickets and sales calls |
| **Define boundaries** | Specify topics to avoid (competitors, unreleased features) |
| **Test thoroughly** | Try edge cases before going live |

### Avoid This

| Mistake | Better Approach |
|---------|----------------|
| Vague statements | Replace "we're the best" with specific proof points |
| Confidential data | Never include internal metrics or competitive intel |
| Outdated pricing | Review and update when plans change |
| Forgetting to save | Always click **Save Context** after changes |

---

## Testing Your Configuration

Before going live, validate your context is working:

1. **Test common scenarios**: Ask questions visitors typically ask
2. **Try edge cases**: Test pricing questions, competitor comparisons
3. **Check accuracy**: Verify numbers, features, and policies are correct
4. **Review tone**: Ensure responses match your brand voice
5. **Iterate**: Refine context based on test results

:::tip Pro Tip
Keep a running document of questions that stumped the AI. Add answers to your context quarterly to continuously improve.
:::

---

## Related

- [AI Agents Overview](/ai-agents/ai-agents-overview) — learn about Clara and Alex
- [Agentic Chat Widget](/ai-agents/agentic-chat-widget) — the website chat assistant your Agentic Chat context powers
- [Agentic Chat Campaigns](/campaigns/agentic-chat) — campaign-level **Instructions** and handoff settings
- The **AI Agents** page under **Settings** — the screen where you save Agentic Chat / Agentic Sequence context
