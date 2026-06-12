---
id: agentic-chat
title: Agentic Chat Campaigns
sidebar_label: Agentic Chat
sidebar_position: 3
---

# Agentic Chat Campaigns

**Turn every website visitor into a conversation.** Agentic Chat embeds an AI-powered assistant directly on your website. It greets visitors automatically, answers questions in your brand's voice, captures work emails, and can even hand a visitor off to book a meeting — all without a human in the loop.

<div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:'12px',overflow:'hidden',margin:'1.5rem 0'}}>
  <video controls preload="metadata" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} src="https://cdn.abmatic.ai/training/03-agentic-chat.mp4"></video>
</div>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/03-agentic-chat/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


## Why Agentic Chat Matters

| Without Agentic Chat | With Agentic Chat |
|----------------------|-------------------|
| Visitors leave with unanswered questions | The AI answers instantly, any time |
| Generic chatbots with scripted replies | Context-aware AI that knows your business |
| Manual lead qualification | Automatic email capture and topic clustering |
| Miss after-hours opportunities | 24/7 engagement captures global visitors |
| Text-only interaction | Voice and text chat for natural conversations |

---

## Getting Started

### Step 1: Create an Agentic Chat Campaign

1. Navigate to **Campaigns** in the left sidebar.
2. Click **+ Campaign**.
3. In the **Agentic** column of the Create Campaign dialog, select **Agentic Chat** ("AI-powered chat widget for visitor engagement").

![Create Campaign dialog with Agentic Chat in the Agentic column](/img/screenshots/campaigns-create-modal.png)

:::info "Agentic" was previously "Advanced"
Agentic Chat now lives under the **Agentic** category (the column was renamed from "Advanced").
:::

The campaign is created and opens to its detail view.

---

### Step 2: Configure Your Campaign

An Agentic Chat campaign has these tabs:

| Tab | Purpose |
|-----|---------|
| **Insights** | Conversation analytics and performance metrics |
| **Audience** | Define which visitors see the chat widget |
| **Instructions** | Give the AI context and set the email-handoff behavior |
| **Pages** | Set URL patterns for where the widget appears |
| **Engagement** | Review individual visitor activity |
| **Performance** | Visitor-level results, demo bookings, and the AI Conversation Summary |

---

### Step 3: Set Up AI Instructions

The **Instructions** tab is where you make the AI yours. It has two parts: the **AI Instructions** context and the **email-handoff mode**.

![Instructions tab showing the AI Instructions context box and a Save button](/img/screenshots/ac-widget-preview.png)

#### AI Instructions (context)

The **AI Instructions** box is a free-text field where you describe your company, product, and how the assistant should behave. The richer the context, the better the conversations.

```
Company: Acme Analytics
Industry: B2B Marketing Technology
What we do: Multi-touch attribution for marketing teams

Tone: Professional but friendly. Never pushy.
Goal: Answer questions, qualify interest, and capture a work email.

Always:
- Reference specific features when relevant
- Offer to book a demo for interested visitors
Never:
- Discuss competitor pricing
- Make promises about custom features
```

Click **Save** to apply your instructions.

#### Email-Handoff Modes

Below the instructions, the section **"When the visitor shares their work email"** lets you choose what the assistant does once it captures a work email. Pick one mode:

| Mode | What Happens |
|------|--------------|
| **Book a meeting** | The chat shows live calendar slots from the routed account executive's Google Calendar so the visitor can book a demo right there |
| **Send a thank-you** | The assistant sends a thank-you message; you can customize the thank-you line |
| **Show a HubSpot form** | The assistant embeds a HubSpot form in the chat, and Abmatic AI sends a Slack notification when it's submitted |

Choose the mode, fill in the optional fields (custom thank-you message or the HubSpot form to embed), and click **Save**.

:::tip Book-a-meeting needs Google Calendar
"Book a meeting" pulls slots from the routed AE's **Google Calendar**. Connect Google Calendar and set up meeting types / a default AE so the assistant has slots to offer. "Show a HubSpot form" needs a connected HubSpot account.
:::

---

### Step 4: Define Your Audience

Use the **Audience** tab to target the right visitors:

- **All visitors** — show the chat to everyone
- **Firmographic targeting** — filter by company size, industry, or location
- **Behavioral targeting** — target by page views or time on site
- **AI Conversations** — segment by the number of AI chat conversations a visitor has had (is above / is below a number)
- **Named accounts** — show only to specific target accounts

---

### Step 5: Set Where the Widget Appears

Use the **Pages** tab to control which URLs show the widget with include/exclude patterns:

| Pattern | Matches |
|---------|---------|
| `*` | All pages |
| `/pricing*` | Pricing page and subpages |
| `/blog/*` | All blog posts |
| `!/admin/*` | Exclude admin pages |

---

### Step 6: Activate Your Campaign

Set the campaign status to active and the widget appears on matching pages for qualifying visitors, greeting them automatically.

---

## The Chat Widget

The widget adapts to different display states. The assistant greets visitors automatically, shows a thinking/tool-step indicator while it works, and presents a **Book demo** action alongside a **talk** (voice) button.

### Display Modes

| Mode | What Visitors See | Best For |
|------|-------------------|----------|
| **Minimized** | A floating button in the corner; click to expand | Non-intrusive presence on all pages |
| **Welcome** | A welcome card with a preview message inviting conversation | High-intent pages where you want engagement |
| **Sidebar** | A compact chat panel on the side of the page | Persistent access alongside page content |
| **Expanded** | A larger view with the full conversation | Dedicated support or conversation pages |
| **Voice** | Audio interaction — visitors speak naturally | Hands-free engagement, accessibility |

:::tip Choosing a display mode
Start with **Minimized** or **Welcome** on most pages. Use **Expanded** on high-value pages like pricing or demo request where visitors are most likely to have questions.
:::

### Text Chat

Real-time messaging with streaming responses. The AI draws on your website content (automatically scraped), your AI Instructions, the visitor's company and behavior data, and the current page.

### Voice Chat

The widget includes a voice mode:

- Click the **talk** button (or open the widget in voice mode) to speak.
- The AI responds with a natural voice.
- Choose from **six voice options** in settings.
- Transcripts are saved for review.

### Email Capture

The AI captures contact details naturally during the conversation:

- Pulls work emails from the conversation
- Filters out personal domains (Gmail, Yahoo, etc.) and asks for a work email instead
- Triggers a Slack notification on capture
- Kicks off your chosen email-handoff mode (book a meeting / thank-you / HubSpot form)

---

## Website Context

Agentic Chat learns about your site automatically:

1. **Page scraping** — reads content from key pages (homepage, pricing, about, features)
2. **AI summarization** — builds concise summaries for quick reference
3. **Contextual answers** — uses page content to answer accurately

### Managing Website Context

Go to **Settings > AI Agents** and open the Agentic Chat configuration to review scraped pages, refresh content, or add context beyond what's scraped. You can also add company/product context directly in the campaign's **Instructions** tab.

---

## Analytics and Reporting

### Insights Tab

The **Insights** tab shows high-level metrics and trends over time, with a date-range selector and Compare Date Ranges:

| Metric | What It Measures |
|--------|------------------|
| **CTA Clicks** | Engagement with chat CTAs |
| **Conversions** | Goal completions from chat visitors |
| **CVRL** | Conversion rate for the **personalized** group |
| **CTRL** | Conversion rate for the **control** group |
| **Total Impressions** | Times the chat widget was displayed |

:::note CVRL / CTRL
Across Abmatic AI personalization campaigns, **CVRL** is the conversion rate of the **personalized** group and **CTRL** is the conversion rate of the **control** group. Compare the two to see the lift personalization is driving.
:::

### Engagement Tab

The **Engagement** tab shows individual visitor activity — form submissions, page views, scroll depth, time on page, and an engagement score (0–100).

### Performance Tab

The **Performance** tab gives you visitor-level detail. It has these sub-tabs:

- **Visitors** — individual visitor records with domain, variation, chat history, and demo-booking columns
- **CTA Clicks** — which CTAs are getting clicks
- **Accounts** — company-level aggregated data
- **Conversions** — conversion event details
- **AI Conversation Summary** — topic clustering across conversations (see below)

#### Demo-Booking Columns

The **Visitors** sub-tab includes demo-booking columns so you can see who booked from chat:

![Performance Visitors sub-tab showing Domain, Visitor, Variation, Chat History, and Demo Booked / Demo AE / Demo Time columns](/img/screenshots/ac-demo-columns.png)

| Column | What It Shows |
|--------|---------------|
| **Chat History** | A "View (N messages)" link to read the conversation |
| **Demo Booked** | Whether a demo was booked from this conversation |
| **Demo AE** | The account executive the demo was booked with |
| **Demo Time** | The scheduled demo time |

#### AI Conversation Summary

The **AI Conversation Summary** sub-tab automatically clusters visitor conversations into topics so you can see, at a glance, what people are asking about and whether those conversations convert:

![AI Conversation Summary table with Topic, Description, Visitors with Chat, Converted, and Sentiment columns, plus Show Visitors backlinks](/img/screenshots/ac-conversation-summary.png)

| Column | What It Shows |
|--------|---------------|
| **Topic** | The auto-detected topic (e.g. Product features, Demo scheduling, Pricing) |
| **Description** | A short summary of what visitors in this topic want |
| **Visitors with Chat** | How many visitors had a conversation on this topic |
| **Converted** | How many of them converted |
| **Sentiment** | A Positive or Negative pill for the topic |
| **Visitors** | A **Show visitors (N)** link that jumps to the Visitors sub-tab filtered to that topic |

Use the refresh control to regenerate the topic insights as new conversations come in.

---

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Provide detailed AI Instructions | Better context = more relevant responses |
| Pick the right email-handoff mode | Book-a-meeting converts high-intent chats into demos automatically |
| Include pricing context | Visitors frequently ask about cost |
| Review the AI Conversation Summary | Learn what visitors actually ask, and which topics convert |
| Target high-intent pages | Pricing and demo pages convert best |

### Don'ts

| Avoid | Why |
|-------|-----|
| Vague instructions | The AI won't know how to represent your brand |
| Showing on every informational page | May overwhelm visitors browsing content |
| Ignoring captured emails | Follow up while interest is hot |
| Leaving handoff mode unconfigured | You miss the chance to book demos straight from chat |

---

## Troubleshooting

### Widget Not Appearing

| Check | Solution |
|-------|----------|
| Campaign status | Must be active |
| Page patterns | The URL must match your configured patterns |
| Audience rules | The visitor must match your targeting criteria |
| Script installed | The Abmatic AI script must be on the page |

### AI Not Responding

| Issue | Fix |
|-------|-----|
| Empty instructions | Add context in the Instructions tab |
| Website not scraped | Check the Agentic Chat config in Settings > AI Agents |
| Rate limiting | Wait a moment and retry |

### Book-a-Meeting Shows No Slots

| Issue | Fix |
|-------|-----|
| No Google Calendar connected | Connect Google Calendar and set up meeting types |
| No default AE / routing | Set a default account executive so the assistant has a calendar to read |

### Voice Chat Issues

| Issue | Fix |
|-------|-----|
| Microphone not working | Grant browser microphone permission |
| No audio response | Check volume and speaker settings |
| Connection failed | Verify a stable internet connection |

---

## Slack Notifications

Get notified when visitors engage:

1. Connect Slack in **Settings > Integrations > Slack**.
2. Enable Agentic Chat notifications.
3. Receive alerts for new conversations, captured work emails, and HubSpot-form submissions from the handoff flow.

---

## Related Resources

- [AI Agents Overview](/ai-agents/ai-agents-overview) — Learn about Clara and Alex
- [AI Agents Configuration](/ai-agents/ai-agents-configuration) — Set up default AI context
- [Agentic Chat Widget](/ai-agents/agentic-chat-widget) — Technical widget details
- [Widget Campaigns](/campaigns/widget) — Other on-page widget types
- [Website Personalization](/campaigns/website-personalization) — Combine with personalization
