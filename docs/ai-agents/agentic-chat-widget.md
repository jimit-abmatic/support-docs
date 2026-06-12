---
id: agentic-chat-widget
title: Agentic Chat Widget
sidebar_label: Chat Widget
sidebar_position: 5
---

# Agentic Chat Widget

**Your AI sales rep that never sleeps.** The Agentic Chat Widget is a customer-facing AI assistant that lives on your website, engaging visitors with intelligent conversations while you focus on closing deals.

## How It's Different

Unlike Clara and Alex (your internal AI partners), the Agentic Chat Widget works externally:

| AI Tool | Where It Lives | Who Uses It | Purpose |
|---------|---------------|-------------|---------|
| **Clara** (AI ABM) | Abmatic AI dashboard | Your marketing team | Build campaigns, analyze accounts |
| **Alex** (AI SDR) | Abmatic AI dashboard | Your sales team | Research prospects, draft outreach |
| **Agentic Chat Widget** | Your website | Your website visitors | Answer questions, qualify leads, capture emails |

Think of it this way: Clara and Alex help **you** work smarter. The Chat Widget helps your **visitors** get answers faster.

---

## How It Works

### The Visitor Journey

```
1. Visitor lands on your website
          ↓
2. Abmatic AI identifies the company (if possible)
          ↓
3. Widget appears based on campaign targeting
          ↓
4. Visitor starts a conversation
          ↓
5. AI responds with contextual answers
          ↓
6. AI captures the work email naturally
          ↓
7. Handoff runs (book a meeting / thank-you / HubSpot form)
   and you can be notified in Slack
```

:::info Deployed through Agentic Chat campaigns
The widget isn't configured on its own page — you deploy and configure it through an **Agentic Chat** campaign (one of the **Agentic** campaign types). The campaign controls who sees the widget, the AI's **Instructions**, and what happens when a visitor shares their email. See [Agentic Chat Campaigns](/campaigns/agentic-chat).
:::

![The Agentic Chat campaign view, with tabs for Insights, Audience, Instructions, Pages, Engagement, and Performance](/img/screenshots/acw-widget.png)

*An Agentic Chat campaign. The **Instructions** tab holds the AI's guidance and email-handoff behavior; **Performance** includes the AI Conversation Summary and demo-booking columns.*

### Intelligence Sources

The widget draws from multiple sources to provide relevant responses:

| Source | What It Provides |
|--------|-----------------|
| **Website Content** | Automatically scraped pages provide product and company context |
| **Custom Instructions** | Your guidelines for tone, pricing, and specific information |
| **Visitor Data** | Company identification enriches responses with relevant details |
| **Current Page** | Content from the page visitor is viewing for contextual answers |
| **Conversation History** | Previous messages maintain context throughout the chat |

---

## AI Capabilities

### Natural Language Understanding

The widget uses advanced language models to:
- Understand visitor intent, not just keywords
- Handle follow-up questions with context
- Recognize buying signals and qualification criteria
- Extract structured data (emails, company names) from natural conversation

### Context-Aware Responses

Every response considers:
- **Who** they are (company, role, industry)
- **Where** they are (which page they're viewing)
- **What** they've asked (conversation history)
- **Why** they might be asking (intent signals)

### Lead Qualification

The AI automatically assesses visitor interest:

| Signal | Intent Level | Next Action |
|--------|-------------|-------------|
| Requests demo or pricing | **High** | Priority follow-up |
| Asks about specific features | **Medium** | Nurture with content |
| General browsing questions | **Low** | Standard engagement |

---

## Voice Interaction

### How Voice Works

1. **Visitor clicks microphone** - Initiates WebRTC connection
2. **Audio streams to AI** - Real-time processing via OpenAI Realtime API
3. **AI generates voice response** - Natural speech in selected voice
4. **Conversation transcribed** - All audio saved as text for your records

### Voice Options

Pick the AI voice for the widget. The voice picker offers six options:

| Voice | Character |
|-------|-----------|
| Alloy | Neutral, professional |
| Echo | Warm, conversational |
| Fable | Expressive, engaging |
| Onyx | Deep, authoritative |
| Nova | Bright, energetic |
| Shimmer | Soft, approachable |

:::note
Voice is powered by OpenAI's Realtime API, and the available voices can change over time. If the picker in your account shows a different set, go with what's listed there.
:::

### Best For

Voice chat works especially well for:
- Mobile visitors who prefer speaking
- Complex questions that are easier to explain verbally
- Visitors multitasking on your site
- Accessibility needs

---

## Integration with Abmatic AI

### Visitor Tracking

The widget connects with Abmatic AI's visitor identification:
- Company enrichment appears in chat context
- Conversation history stored per visitor
- Intent scores sync with visitor profiles

### Campaign System

Deploy the widget through Agentic Chat campaigns:
- Target specific audiences and pages
- A/B test different AI instructions
- Measure performance with standard campaign analytics

### Email handoff

When a visitor shares their **work email**, the widget runs the handoff you choose in the campaign's **Instructions**. There are three modes:

| Handoff mode | What happens |
|--------------|--------------|
| **Book a meeting** | The visitor is guided to book a meeting (for example, with your AE). |
| **Send a thank-you** | The visitor sees a thank-you message — you can set a custom thank-you line. |
| **Show a HubSpot form** | A HubSpot form you pick is shown to capture more details. |

You configure the handoff mode (and its options, like the HubSpot form to show) in the campaign's **Instructions** tab, then **Save**.

### Slack notifications

You can also be notified in Slack as conversations happen — for example when a chat starts or a visitor shares an email — so your team can follow up on hot leads quickly.

---

## Configuration

### Settings-Level Context

Default AI context applies to all Agentic Chat campaigns:

1. Go to **Settings** > **AI Agents**
2. Select **Agentic Chat** tab
3. Add company context, products, pricing, FAQs
4. Click **Save Context**

### Campaign-Level Instructions

Override defaults and set the email handoff for a specific campaign:

1. Open your Agentic Chat campaign
2. Click the **Instructions** tab
3. Add campaign-specific context or guidelines
4. Choose the **email handoff** mode (book a meeting / send a thank-you / show a HubSpot form) and its options
5. Click **Save**

:::info Precedence Rule
Campaign-level instructions **override** settings-level context when both exist. Use settings for global defaults, campaigns for targeted variations.
:::

---

## Performance Optimization

### Writing Better Instructions

| Approach | Example |
|----------|---------|
| **Be specific about products** | List features, pricing tiers, integrations |
| **Define the tone** | "Professional but friendly, never pushy" |
| **Handle objections** | Include responses to common concerns |
| **Set boundaries** | Specify topics to avoid or redirect |

### Targeting High-Value Pages

Focus the widget where it converts best:

| Page Type | Why It Works |
|-----------|-------------|
| **Pricing page** | High intent, ready to evaluate |
| **Demo request page** | Already interested in seeing more |
| **Product pages** | Researching specific solutions |
| **Comparison pages** | Evaluating against competitors |

### Measuring Success

Track these metrics over time to see what's working and where to improve:

| Metric | What to watch | How to improve |
|--------|---------------|----------------|
| **Conversation rate** | Share of targeted visitors who start a chat | Test different triggers and pages |
| **Email capture rate** | Share of conversations where a work email is shared | Improve the value exchange before the ask |
| **High-intent rate** | Share of conversations that show buying signals | Refine your qualification criteria |

The campaign's **Performance** tab — including the **AI Conversation Summary** (topics, sentiment, who converted) and demo-booking columns — is where you'll review these. See [Agentic Chat Campaigns](/campaigns/agentic-chat).

---

## Security and Privacy

### Data Handling

- Conversations are stored in your Abmatic AI account
- Voice is processed through OpenAI's Realtime API to generate responses
- Transcripts are saved as text alongside your other visitor data

### Visitor Transparency

- Widget identifies as an AI assistant
- Clear visual indicators for bot vs. human
- Visitors can end conversations anytime

---

## Related Resources

- [Agentic Chat Campaigns](/campaigns/agentic-chat) - Create and configure campaigns
- [AI Agents Configuration](/ai-agents/ai-agents-configuration) - Set up default context
- [AI Agents Overview](/ai-agents/ai-agents-overview) - All AI capabilities
- [Visitor Tracking](/visitor-tracking/overview) - How identification works
