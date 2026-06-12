---
id: ai-agents-overview
title: AI Agents
sidebar_label: Overview
sidebar_position: 1
---

# AI Agents

Abmatic AI's agents do the work that usually takes your team hours — prospecting, building lists, creating campaigns, personalizing pages, and pulling reports — through plain conversation. Instead of clicking through forms, you tell an agent what you want and it does it.

| What AI Agents help with | What you'd normally do by hand |
|--------------------------|--------------------------------|
| Campaign creation | Set up targeting and personalization manually |
| Account research | Look up each company yourself |
| List building | Filter accounts and contacts one segment at a time |
| Performance analysis | Build reports and read them yourself |

---

## The agent surfaces

Abmatic AI has a few different "agent" experiences. They're easy to mix up, so here's the map:

| Surface | What it is | Where you find it |
|---------|-----------|-------------------|
| **Clara (AI ABM)** and **Alex (AI SDR)** | Page-level conversational agents. You ask, they do. | **AI Agent** in the left sidebar |
| **In-App Co-Pilot** | A helper that opens over your current page, with a roster of specialists. | The **Co-Pilot** card / floating button on many pages |
| **Oracle** | The autonomous agent — pursues goals on its own (gated). | **Goals** and **Oracle Inbox** in the sidebar |

The rest of this page covers Clara and Alex. The Co-Pilot and Oracle each have their own guides — see [In-App Co-Pilot](/ai-agents/co-pilot) and [Oracle Overview](/ai-agents/oracle-overview).

---

## Accessing the AI Agent

1. Click **AI Agent** in the left sidebar.
2. Meet your AI partner and start a conversation.

![The AI Agent page showing Clara delivering a friendly greeting and a short business update](/img/screenshots/aia-hub.png)

*The AI Agent page. Your agent greets you and is ready to help with campaigns, audiences, and analysis. Use **+ NEW CHAT** to start fresh.*

:::note The landing screen shows Clara
The **AI Agent** landing screen ("Meet Your AI Partner") currently features the **Clara** card. **Alex** is still available — open the AI Agent area and navigate to Alex (or go to `/ai-agents/sdr`) to use the AI SDR.
:::

---

## Meet your AI partners

### Clara — AI ABM

**Clara is your ABM agent.** She executes campaigns, personalizes your site at scale, and reports on performance — all from a conversation. Her landing heading reads *"Campaigns That Convert, Powered by AI,"* and her focus areas are:

| What Clara does |
|-----------------|
| **Campaign execution** — launch targeted campaigns for any segment |
| **Personalization at scale** — tailor pages to each visitor's company |
| **Performance analytics** — see what's working and why |

Ask Clara to build account and contact lists, create campaigns, generate reports, and suggest personalization. For a deep dive, see **[Clara — AI ABM Agent](/ai-agents/abm-agent)**.

### Alex — AI SDR

**Alex is your SDR agent.** Alex's landing heading reads *"Let Alex Find Your Next Big Client,"* with capabilities described as *"Multichannel Outreach, ICP Qualification, and Dynamic Lead Prioritization."* Alex includes a **voice call** flow — *"Speak to Alex — Your AI SDR"* — where you provide a prospect's LinkedIn URL and email so Alex can personalize and place an AI voice call.

| What Alex does |
|-----------------|
| **Multichannel outreach** — engage prospects across channels |
| **ICP qualification** — score and prioritize against your ideal profile |
| **Dynamic lead prioritization** — surface who to focus on |

For a deep dive, see **[Alex — AI SDR Agent](/ai-agents/sdr-agent)**.

### Website AI — Agentic Chat

Beyond your internal agents, Abmatic AI offers a customer-facing assistant through the **[Agentic Chat Widget](/ai-agents/agentic-chat-widget)** — an AI that lives on your website, answers visitor questions, and captures and qualifies leads. It's deployed through Agentic Chat campaigns.

| AI tool | Where it lives | Who uses it |
|---------|---------------|-------------|
| **Clara** (AI ABM) | Abmatic AI dashboard | Your marketing team |
| **Alex** (AI SDR) | Abmatic AI dashboard | Your sales team |
| **[Agentic Chat Widget](/ai-agents/agentic-chat-widget)** | Your website | Your website visitors |

---

## Getting started

### Step 1: Open the AI Agent

1. Log in to [app.abmatic.ai](https://app.abmatic.ai).
2. Click **AI Agent** in the left sidebar.

### Step 2: Start talking

Type what you need, like messaging a colleague:

- "Create a campaign targeting healthcare companies."
- "Research Acme Corp for me."
- "What accounts visited our pricing page this week?"

### Step 3: Let the agent work

The agent handles the steps — creating campaigns with proper targeting, gathering company intelligence, and surfacing insights from your data. As it works, it shows its thinking and the steps it's running inline, so you can follow along.

---

## Powerful prompts to try

AI agents understand natural language. Just ask for what you need.

### Clara (AI ABM) — campaigns & personalization

| Try this prompt | What happens |
|-----------------|--------------|
| "Create a campaign for enterprise tech companies" | Clara builds a campaign with targeting |
| "Personalize the homepage for healthcare visitors" | Sets up industry-specific website content |
| "What's my best performing campaign?" | Performance analysis |
| "Show engagement for my target accounts" | Account-level engagement data |

### Alex (AI SDR) — research & outreach

| Try this prompt | What happens |
|-----------------|--------------|
| "Research Acme Corp for my next call" | Company intel pulled together |
| "Who should I prioritize today?" | Ranked list of hot leads |
| "Find companies matching our ICP" | Qualified prospect list |

:::tip Build on your conversation
Agents keep context within a conversation, so you can chain requests:
1. "Show me high-engagement accounts."
2. "Which are in healthcare?"
3. "Create a campaign targeting those accounts."
:::

---

## Voice Mode

You can talk to your AI agents instead of typing. Start voice mode and speak naturally — useful when you're multitasking or brainstorming.

| Action | How |
|--------|-----|
| Start voice | Start voice mode (microphone) |
| Stop | Stop the recording or pause speaking |
| Switch to text | Return to the keyboard input |

Voice conversations are still saved as text in the chat.

---

## Giving your agents context

The more your agents know about your business, the more on-brand and accurate their responses. Configure this in **Settings → AI Agents**, which has two context tabs — **Agentic Chat** (for the website chat assistant) and **Agentic Sequence** (for AI email outreach).

For what to put in each tab and how it interacts with campaign-level instructions, see **[Configuring AI Agents](/ai-agents/ai-agents-configuration)**.

---

## Real-world workflows

### Launch a personalized campaign

**You:** "Create a campaign for enterprise technology accounts."
**Clara:** "What pages should I personalize?"
**You:** "Homepage and pricing page."
**Clara:** "What personalization do you want?"
**You:** "Show their company name in the headline and industry-relevant case studies."
**Clara:** *Creates the campaign with the targeting and personalization rules.*

### Research a prospect

**You:** "Research TechCorp for my call tomorrow."
**Alex:** *Provides a company overview and key context.*
**You:** "Who should I reach out to there?"
**Alex:** *Surfaces relevant contacts to prioritize.*

### Quick performance review

**You:** "How are my campaigns performing?"
**Clara:** *Shows a summary with metrics.*
**You:** "Which has the best conversion rate?"
**Clara:** *Identifies the top performer and explains why.*

---

## Plan availability

AI agents are part of Abmatic AI's paid plans. Exactly which agents and how much capacity you get depends on your plan. To confirm what's included on your plan or to turn on additional agents, contact your Abmatic AI rep or email **support@abmatic.ai**.

:::note Oracle is gated separately
The autonomous **Oracle** agent (**Goals** and **Oracle Inbox**) is enabled per account and may be off for yours. See [Oracle Overview](/ai-agents/oracle-overview) for how to request it.
:::

---

## Tips for best results

| Instead of… | Try… |
|-------------|------|
| "Create a campaign" | "Create an inbound campaign for healthcare accounts targeting our pricing page" |
| "Show me data" | "Show conversion rates for all campaigns in the last 30 days" |
| "Help with a list" | "Build a contact list of VP and Director-level Marketing contacts at my Q2 target accounts" |

**Pro tips:**

- Mention specific account or campaign names.
- Include timeframes for analytics requests.
- Build on previous messages within the same conversation.

---

## Troubleshooting

| Issue | Quick fix |
|-------|-----------|
| Slow response | Larger requests take a few seconds — this is normal. |
| Generic responses | Add more context in **Settings → AI Agents**. |
| Can't access an agent | Confirm your plan includes that agent (contact your Abmatic AI rep). |
| No **Goals** / **Oracle Inbox** in the sidebar | Oracle is gated; see [Oracle Overview](/ai-agents/oracle-overview). |

---

## Copy-paste prompt library for marketers

Ready-to-use prompts for common tasks. Copy them into Clara or Alex and adjust the bracketed values for your business.

### Account list building

```
Create a dynamic account list of [Healthcare] companies in the
[United States] with more than [500] employees that have visited
our website in the last [30] days.
```

```
Create an account list of companies in the [Technology] sector
with inferred revenue between [$10M] and [$500M] that are NOT
in our current customer list.
```

### Contact list building

```
Create a contact list of [VP and Director level] contacts in
[Marketing and Sales] departments at companies in our
"[Q2 Target Accounts]" account list.
```

```
Create a contact list of [C-level executives] at [Financial Services]
companies with more than [1,000] employees in [North America].
```

### Campaign creation

```
Create an inbound personalization campaign targeting [Enterprise
Technology] companies in the [United States and Canada] that
have visited more than [5] pages. Personalize our [homepage]
and [pricing page] with industry-specific messaging.
```

```
Create an outbound campaign for our "[Q2 Strategic Accounts]"
list. Focus on personalizing the [/demo] page with their
company name in the headline and [Technology] case studies.
```

```
Create a Widget campaign showing a [webinar promotion]
to visitors from our target accounts on all pages except
[/admin] and [/login]. Use an exit-intent trigger on the
[pricing page].
```

### Performance analysis

```
Show me all campaign performance for the last [90] days.
Which campaigns have the highest conversion rate? Which have
the most visitors but low conversions?
```

```
Create a report showing which of my target accounts have
visited the [pricing page] in the last [7] days but have NOT
submitted a [demo request] form.
```

### Content personalization

```
From the content on our [homepage], suggest [3] headline
variations for [Enterprise Healthcare] visitors that
emphasize [HIPAA compliance and patient data security].
```

```
Suggest personalized CTA button text for our [pricing page]
for each of these segments: [Enterprise 1000+ employees],
[Mid-Market 100-999], and [SMB under 100].
```

:::tip Make your prompts more specific for better results
The more detail you provide, the better the output. Instead of "create a campaign for tech companies," try "create an inbound campaign targeting SaaS companies with 200-1000 employees in North America that have visited our pricing page at least twice in the last 30 days."
:::

---

## Next steps

- **[Configuring AI Agents](/ai-agents/ai-agents-configuration)** — give your agents company context.
- **[Alex — AI SDR Agent](/ai-agents/sdr-agent)** — deep dive on prospecting and voice calls.
- **[Clara — AI ABM Agent](/ai-agents/abm-agent)** — deep dive on campaigns and personalization.
- **[In-App Co-Pilot](/ai-agents/co-pilot)** — the helper that works alongside you in the dashboard.
- **[Oracle Overview](/ai-agents/oracle-overview)** — the autonomous agent.
