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
| **Clara** (ABM Agent) | Abmatic dashboard | Your marketing team | Build campaigns, analyze accounts |
| **Alex** (SDR Agent) | Abmatic dashboard | Your sales team | Research prospects, draft outreach |
| **Agentic Chat Widget** | Your website | Your website visitors | Answer questions, qualify leads, capture emails |

Think of it this way: Clara and Alex help **you** work smarter. The Chat Widget helps your **visitors** get answers faster.

---

## How It Works

### The Visitor Journey

```
1. Visitor lands on your website
          ↓
2. Abmatic identifies company (if possible)
          ↓
3. Widget appears based on campaign targeting
          ↓
4. Visitor starts conversation
          ↓
5. AI responds with contextual answers
          ↓
6. AI captures work email naturally
          ↓
7. You get notified in Slack
```

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

Configure the AI voice in Settings:

| Voice | Character |
|-------|-----------|
| Alloy | Neutral, professional |
| Echo | Warm, conversational |
| Fable | Expressive, engaging |
| Onyx | Deep, authoritative |
| Nova | Bright, energetic |
| Shimmer | Soft, approachable |

### Best For

Voice chat works especially well for:
- Mobile visitors who prefer speaking
- Complex questions that are easier to explain verbally
- Visitors multitasking on your site
- Accessibility needs

---

## Integration with ABmatic

### Visitor Tracking

The widget connects with Abmatic's visitor identification:
- Company enrichment appears in chat context
- Conversation history stored per visitor
- Intent scores sync with visitor profiles

### Campaign System

Deploy the widget through Agentic Chat campaigns:
- Target specific audiences and pages
- A/B test different AI instructions
- Measure performance with standard campaign analytics

### Slack Notifications

Stay informed in real-time:
- **First message alert**: Know when conversations start
- **Email capture notification**: Get notified immediately when leads are qualified
- **High intent signals**: Prioritize hot leads

### CRM Potential

Captured data can flow to your CRM:
- Work emails synced to contacts
- Conversation summaries for context
- Intent scores for prioritization

---

## Configuration

### Settings-Level Context

Default AI context applies to all Agentic Chat campaigns:

1. Go to **Settings** > **AI Agents**
2. Select **Agentic Chat** tab
3. Add company context, products, pricing, FAQs
4. Click **Save Context**

### Campaign-Level Instructions

Override defaults for specific campaigns:

1. Open your Agentic Chat campaign
2. Click **Instructions** tab
3. Add campaign-specific context or guidelines
4. Click **Save**

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

Track these metrics to optimize:

| Metric | Target | Optimization |
|--------|--------|--------------|
| **Conversation rate** | 5-15% of targeted visitors | Test different triggers |
| **Email capture rate** | 20-40% of conversations | Improve value exchange |
| **High intent rate** | 10-25% of conversations | Refine qualification criteria |

---

## Security and Privacy

### Data Handling

- Conversations stored securely in your Abmatic account
- No visitor data shared with third parties
- Compliant with standard data protection practices

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
