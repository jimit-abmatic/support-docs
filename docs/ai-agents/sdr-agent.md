---
id: sdr-agent
title: Alex - AI SDR Agent
sidebar_label: AI SDR (Alex)
sidebar_position: 3
---

# Alex - AI SDR Agent

Alex is the AI SDR (Sales Development Representative) in Abmatic AI. Alex's job is to reach out to a prospect by **AI voice call** — a phone conversation that introduces your company, qualifies the prospect, and works toward booking a meeting. You give Alex a little context about who you're calling, and Alex places the call.

Alex is one of the two page-level AI agents in the platform. The other is **[Clara, the AI ABM agent](/ai-agents/abm-agent)**. You'll find both under the **AI Agent** item at the top of the left icon sidebar.

:::note Voice-first
Alex is built around the voice call. When you fill in the form below, Alex either calls the prospect directly (if you give a mobile number) or starts a test call inside the app (if you leave it blank). The LinkedIn URL and work email you provide are used to **personalize that call** — they help Alex tailor what it says, not to run a separate email or LinkedIn campaign.
:::

## Getting Started with Alex

### Step 1: Open Alex

1. Click **AI Agent** at the top of the left icon sidebar.
2. Go to the Alex page (the AI SDR). The header reads **"Speak to Alex - Your AI SDR."**

![Alex, the AI SDR agent, showing the prospect engagement form with Mobile Number, LinkedIn URL, and Work Email fields](/img/screenshots/alex-sdr.png)

### Step 2: Enter the prospect's details

Fill in the form on Alex's page:

| Field | Purpose | Notes |
|-------|---------|-------|
| **Mobile Number** | The number Alex will call | Use country-code format, e.g. `+14155550123`. Leave blank to run a test call in the app instead (see below). |
| **LinkedIn URL** | Helps Alex personalize the call | Must start with `https://www.linkedin.com/...`. Optional. |
| **Work Email** | Helps Alex personalize the call | Optional. |

Below the fields you'll see a consent line:

> *"By clicking 'Call Me,' you consent to receive automated responses and agree to our Terms of Service and Privacy Policy."*

### Step 3: Start the call

Click **Get in touch with Alex**.

- **If you entered a mobile number:** Alex places an AI voice call to that number. The page confirms with *"Alex will be calling the prospect shortly."* Use **Go Back** to set up another call.
- **If you left the mobile number blank:** a voice conversation opens **inside the app** so you can hear Alex yourself. This is the easiest way to test how Alex sounds and what it says before calling a real prospect.

:::tip Test Alex before you call a prospect
Leave **Mobile Number** empty and click **Get in touch with Alex**. The call runs in your browser using your microphone and speakers, so you can experience the conversation firsthand and decide whether the messaging is right.
:::

## What Alex does on the page

The Alex page summarizes its focus as **Multichannel Outreach, ICP Qualification, and Dynamic Lead Prioritization**. In practice, what you trigger directly from this page today is the **AI voice call**:

- **Personalized voice outreach** — Alex calls the prospect and has a real-time conversation.
- **Context-aware** — when you supply a LinkedIn URL and work email, Alex uses them to make the call relevant to that person and company.
- **In-app test calls** — try the experience yourself without dialing a real prospect.

:::caution Get consent before calling
Automated voice outreach is subject to the laws and regulations that apply to you (for example, calling and consent rules in your region). Make sure you have a lawful basis and any required consent before placing calls to prospects.
:::

## Best Practices

| Practice | Why it helps |
|----------|--------------|
| **Test in-app first** | Hear exactly what Alex says before any real prospect does. |
| **Add the LinkedIn URL** | Gives Alex the person's role and company so the call feels relevant. |
| **Add the work email** | Adds another personalization signal for the call. |
| **Use the correct number format** | Numbers must be in country-code format (e.g. `+1...`) or the call won't start. |
| **Respect consent rules** | Only call prospects you're permitted to contact. |

## Common Questions

**Q: What does Alex actually do when I submit the form?**
A: Alex starts a voice call. With a mobile number, it calls the prospect. Without one, it runs the call inside the app so you can test it.

**Q: Does Alex also send emails or LinkedIn messages from this page?**
A: The form on this page initiates a **voice call**. The LinkedIn URL and email are used to personalize that call. For automated AI email sequences, see the **Agentic Sequence** context in Settings and the agentic campaign types.

**Q: Will the prospect know they're talking to an AI?**
A: Alex is an automated (AI) caller, and the consent line on the form makes that clear. Be transparent and follow the rules that apply to you.

**Q: Why won't my call start?**
A: Check the field formats — the mobile number must be in country-code format and the LinkedIn URL must start with `https://www.linkedin.com/`.

---

## Related

- [AI Agents Overview](/ai-agents/ai-agents-overview)
- [Configuring AI Agents](/ai-agents/ai-agents-configuration)
- [Clara - AI ABM Agent](/ai-agents/abm-agent)
