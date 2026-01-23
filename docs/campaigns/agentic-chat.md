---
id: agentic-chat
title: Agentic Chat Campaigns
sidebar_label: Agentic Chat
sidebar_position: 3
---

# Agentic Chat Campaigns

**Turn every website visitor into a conversation.** Agentic Chat embeds an AI-powered assistant directly on your website, engaging visitors 24/7 with personalized, context-aware responses that qualify leads and capture contact information automatically.

## Why Agentic Chat Matters

| Without Agentic Chat | With Agentic Chat |
|---------------------|-------------------|
| Visitors leave with unanswered questions | AI answers questions instantly, any time |
| Generic chatbots with scripted responses | Context-aware AI that knows your business |
| Manual lead qualification takes hours | Automatic email capture and intent scoring |
| Miss after-hours opportunities | 24/7 engagement captures global visitors |
| Text-only interaction | Voice and text chat for natural conversations |

**Teams using Agentic Chat see 3x more qualified conversations** compared to traditional chatbots or contact forms.

---

## Getting Started

### Step 1: Create an Agentic Chat Campaign

1. Navigate to **Campaigns** in the left sidebar
2. Click **+ CAMPAIGN**
3. Select **Agentic Chat** from the campaign types (found under the **Advanced** category)

![Create Agentic Chat Campaign](/img/screenshots/agentic-chat/ac-create-modal.png)

---

### Step 2: Configure Your Campaign

Your campaign has several configuration tabs:

| Tab | Purpose |
|-----|---------|
| **Insights** | View conversation analytics and performance metrics |
| **Audience** | Define which visitors see the chat widget |
| **Instructions** | Customize AI behavior and context |
| **Pages** | Set URL patterns for widget display |
| **Engagement** | Review individual visitor conversations |
| **Performance** | Track conversions and ROI |

The widget configuration panel on the right lets you customize the chat experience:

![Widget Configuration Panel](/img/screenshots/agentic-chat/ac-widget-config.png)

---

### Step 3: Set Up AI Instructions

The **Instructions** tab is where you make the AI yours:

1. Click the **Instructions** tab
2. Add your company context, product information, and conversation guidelines
3. Configure quick prompts for common visitor questions
4. Click **Save**

### Step 4: Define Your Audience

Target the right visitors in the **Audience** tab:

![Audience Tab](/img/screenshots/agentic-chat/ac-audience-tab.png)

- **All visitors**: Show chat to everyone
- **Firmographic targeting**: Filter by company size, industry, location
- **Behavioral targeting**: Target based on page views, time on site
- **Named accounts**: Show to specific target accounts only

---

### Step 5: Activate Your Campaign

1. Set the campaign status to **Active**
2. The widget will appear on matching pages for qualifying visitors

---

## AI Instructions

The AI Instructions define how your chat assistant behaves. Provide rich context for better conversations.

### What to Include

#### Company Context
```
Company: Acme Analytics
Industry: B2B Marketing Technology
What we do: Multi-touch attribution for marketing teams

Key products:
- Starter ($199/mo): Basic attribution for small teams
- Professional ($499/mo): Advanced analytics with CRM integration
- Enterprise (Custom): Unlimited usage with dedicated support
```

#### Conversation Guidelines
```
Tone: Professional but friendly. Never pushy.
Goal: Answer questions, qualify interest, capture work email

Always:
- Reference specific features when relevant
- Offer to schedule a demo for interested visitors
- Ask for work email to send helpful resources

Never:
- Discuss competitor pricing
- Make promises about custom features
- Share internal roadmap details
```

#### Quick Prompts

Configure suggested prompts that appear to visitors:

| Prompt | Purpose |
|--------|---------|
| "What does your product do?" | Product overview |
| "How much does it cost?" | Pricing conversation |
| "Can I see a demo?" | Sales qualification |
| "How do you integrate with Salesforce?" | Technical questions |

---

## Display Modes

The chat widget adapts to different interaction states. Configure the initial display mode in the widget settings panel.

### Minimized Mode
A minimized floating button in the corner of the page. Visitors click to expand.

![Minimized Mode](/img/screenshots/agentic-chat/ac-preview-minimized.png)

### Welcome Mode
A welcome card that introduces the AI assistant and invites conversation with a preview message.

![Welcome Mode](/img/screenshots/agentic-chat/ac-preview-welcome.png)

### Sidebar Mode
A compact chat interface positioned on the side of the page.

![Sidebar Mode](/img/screenshots/agentic-chat/ac-preview-sidebar.png)

### Expanded Mode
A larger two-column view for detailed conversations, showing the assistant avatar alongside the chat.

![Expanded Mode](/img/screenshots/agentic-chat/ac-preview-expanded.png)

### Voice Mode
Audio interaction with visual feedback. Visitors speak naturally and receive voice responses.

---

## Features

### Text Chat
Real-time messaging with streaming responses. The AI processes context from:
- Your website content (automatically scraped)
- Custom instructions you provide
- Visitor's company and behavioral data
- Current page content

### Voice Chat
WebRTC-powered voice interaction:
- Click the microphone icon to speak
- AI responds with natural voice
- Supports six voice options (configure in settings)
- Transcripts saved for review

### Email Capture
The AI naturally captures contact information:
- Extracts work emails from conversation
- Filters personal email domains (Gmail, Yahoo, etc.)
- Requests work email when personal provided
- Triggers Slack notification on capture

### Lead Qualification
Automatic intent scoring:

| Intent Level | Meaning |
|--------------|---------|
| **High** | Strong buying signals, requested demo or pricing |
| **Medium** | Engaged with product questions |
| **Low** | General browsing, basic questions |

---

## Website Context

Agentic Chat automatically learns about your website:

1. **Page Scraping**: Reads content from key pages (homepage, pricing, about, features)
2. **AI Summarization**: Creates concise summaries for quick reference
3. **Contextual Answers**: Uses page content to answer visitor questions accurately

### Managing Website Context

Go to **Settings** > **AI Agents** > **Agentic Chat** tab to:
- View scraped pages and summaries
- Manually refresh website content
- Add custom context beyond what's scraped

---

## Targeting and Placement

### URL Patterns

Control where the widget appears using the **Pages** tab:

![Pages Tab](/img/screenshots/agentic-chat/ac-pages-tab.png)

| Pattern | Matches |
|---------|---------|
| `*` | All pages |
| `/pricing*` | Pricing page and subpages |
| `/blog/*` | All blog posts |
| `!/admin/*` | Exclude admin pages |

### Audience Rules

Combine targeting conditions:

```
Show widget when:
- Company size > 100 employees
- AND Industry = Technology
- AND Has visited pricing page
```

---

## Best Practices

### Do's

| Practice | Why It Works |
|----------|-------------|
| **Provide detailed AI instructions** | Better context = more relevant responses |
| **Include pricing information** | Visitors frequently ask about cost |
| **Set up quick prompts** | Guides visitors to valuable conversations |
| **Review conversations regularly** | Learn what visitors actually ask |
| **Target high-intent pages** | Pricing and demo pages convert best |

### Don'ts

| Avoid | Why |
|-------|-----|
| **Vague instructions** | AI won't know how to represent your brand |
| **Showing to all pages** | May overwhelm visitors on informational content |
| **Ignoring captured emails** | Follow up while interest is hot |
| **Skipping voice setup** | Many visitors prefer speaking to typing |

---

## Analytics and Reporting

Track Agentic Chat performance in the campaign dashboard.

### Insights Tab

View high-level metrics and trends:

![Insights Tab](/img/screenshots/agentic-chat/ac-insights-tab.png)

| Metric | What It Measures |
|--------|-----------------|
| **CTA Clicks** | Engagement with chat CTAs |
| **Conversions** | Goal completions from chat visitors |
| **CVRL** | Conversion rate - personalized group |
| **CTRL** | Conversion rate - control group |

### Engagement Tab

Review individual visitor interactions and page visit data:

![Engagement Tab](/img/screenshots/agentic-chat/ac-engagement-tab.png)

Each visit shows:
- **Total Form Submissions** - Forms completed
- **Total Page Views** - Pages visited
- **Scroll Depth** - How far they scrolled
- **Time on Page** - Engagement duration
- **Engagement Score** - 0-100 composite score

### Performance Tab

Dive into visitor-level analytics:

![Performance Tab](/img/screenshots/agentic-chat/ac-performance-tab.png)

Sub-tabs available:
- **VISITORS** - Individual visitor data with company domain and chat history
- **CTA CLICKS** - Which CTAs are getting clicks
- **ACCOUNTS** - Company-level aggregated data
- **CONVERSIONS** - Conversion event details

---

## Troubleshooting

### Widget Not Appearing

| Check | Solution |
|-------|----------|
| Campaign status | Must be **Active** |
| Page patterns | URL must match configured patterns |
| Audience rules | Visitor must match targeting criteria |
| Script installed | Abmatic script must be on the page |

### AI Not Responding

| Issue | Fix |
|-------|-----|
| Empty instructions | Add context in Instructions tab |
| Website not scraped | Check Settings > AI Agents > Agentic Chat |
| Rate limiting | Wait a moment and retry |

### Voice Chat Issues

| Issue | Fix |
|-------|-----|
| Microphone not working | Grant browser microphone permission |
| No audio response | Check volume and speaker settings |
| Connection failed | Verify stable internet connection |

---

## Slack Notifications

Get notified when visitors engage:

1. Connect Slack in **Settings** > **Integrations** > **Slack**
2. Enable Agentic Chat notifications
3. Receive alerts for:
   - New conversations started
   - Work emails captured
   - High intent conversations

---

## Related Resources

- [AI Agents Overview](/ai-agents/ai-agents-overview) - Learn about all AI capabilities
- [AI Agents Configuration](/ai-agents/ai-agents-configuration) - Set up default AI context
- [Agentic Chat Widget](/ai-agents/agentic-chat-widget) - Technical widget details
- [Website Personalization](/campaigns/website-personalization) - Combine with personalization
- [Visitor Tracking](/visitor-tracking/overview) - How visitors are identified
