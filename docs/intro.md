---
id: intro
title: Welcome to Abmatic AI
sidebar_label: Welcome
slug: /
sidebar_position: 1
---

# Abmatic AI Documentation

Welcome to Abmatic AI — the account-based marketing platform that helps you identify, engage, and convert your best-fit accounts. Turn anonymous website visitors into pipeline opportunities with AI-powered personalization and intelligent automation.

![Abmatic AI Home Overview with summary cards and recently viewed panels](/img/screenshots/intro-home.png)

---

## Quick Navigation

<div className="row">
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <h3>New to Abmatic?</h3>
      </div>
      <div className="card__body">
        <p>Get up and running quickly with our step-by-step quick start guide.</p>
      </div>
      <div className="card__footer">
        <a className="button button--primary button--block" href="/getting-started/quick-start">Quick Start Guide</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <h3>Having Issues?</h3>
      </div>
      <div className="card__body">
        <p>Find solutions to common problems in our troubleshooting guides.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/troubleshooting/troubleshooting-overview">Troubleshooting</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <h3>New Features</h3>
      </div>
      <div className="card__body">
        <p>Check out our AI Agents and other new capabilities.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/ai-agents/ai-agents-overview">AI Agents</a>
      </div>
    </div>
  </div>
</div>

---

## What Can I Do With Abmatic?

| Capability | What It Does | Who Uses It | Learn More |
|------------|--------------|-------------|------------|
| **Visitor Reveal** | See which companies and contacts visit your website, even without form fills | Marketing, Sales | [Learn more](/visitor-tracking/company-identification) |
| **Website Personalization** | Show different content to different visitors based on company, industry, or behavior | Marketing | [Learn more](/campaigns/website-personalization) |
| **Agentic Chat** | An AI chat widget that answers visitor questions, books meetings, and hands off to your team | Marketing, Sales | [Learn more](/campaigns/agentic-chat) |
| **AI Agents** | Get help from in-app AI assistants (Clara for ABM, Alex for SDR) | Marketing, Sales | [Learn more](/ai-agents/ai-agents-overview) |
| **Oracle (Autonomous Agent)** | Set goals and let Abmatic AI propose and run actions, with your approval | Marketing, Leadership | [Learn more](/ai-agents/oracle-overview) |
| **CRM Integration** | Sync data with Salesforce, HubSpot, and other CRMs | Marketing Ops, RevOps | [Learn more](/integrations/overview) |
| **Advertising** | Reach target accounts on LinkedIn, Google Ads, and OpenAI Ads | Marketing | [Learn more](/campaigns/openai-ads) |
| **Conversions** | Track demos, trials, and form fills, including Demo Booked details | Marketing, RevOps | [Learn more](/conversions/overview) |
| **Campaign Analytics** | Measure how campaigns influence pipeline and revenue | Marketing, Leadership | [Learn more](/analytics/overview) |

---

## Start Here

### I'm brand new to Abmatic

1. [Quick Start Guide](/getting-started/quick-start) - Set up your account step by step
2. [Navigating Abmatic AI](/getting-started/navigation) - Learn the sidebar, search, and top bar
3. [Install the Tracking Script](/getting-started/install-script) - Start identifying visitors
4. [Create Your First Campaign](/getting-started/first-campaign) - Launch personalization
5. [Use Cases](/getting-started/use-cases) - See what you can achieve

### I need to set up a CRM integration

1. [Integrations Overview](/integrations/overview) - See available integrations
2. [Salesforce Setup Guide](/integrations/crm/salesforce-setup) - Step-by-step walkthrough
3. [HubSpot Setup Guide](/integrations/crm/hubspot-setup) - Step-by-step walkthrough
4. [Sync Behavior Guide](/integrations/crm/sync-behavior) - Understand fill vs overwrite

### I want to create a campaign

1. [Campaigns Overview](/campaigns/overview) - Types of campaigns you can run
2. [Website Personalization](/campaigns/website-personalization) - Personalize your site
3. [Page Editor Guide](/campaigns/page-editor) - Visual editing tools
4. [A/B Testing](/campaigns/ab-testing) - Experiment and optimize

### I want to see who's visiting my website

1. [Company Identification](/visitor-tracking/company-identification) - How Visitor Reveal works
2. [Contact Reveal](/visitor-tracking/contact-reveal) - Identify specific people
3. [Audiences](/audiences/overview) - Build lists from visitors

### I want to use AI Agents

1. [AI Agents Overview](/ai-agents/ai-agents-overview) - Meet Clara and Alex
2. [Configuration Guide](/ai-agents/ai-agents-configuration) - Set up your context
3. [AI SDR Agent](/ai-agents/sdr-agent) - Prospecting help
4. [AI ABM Agent](/ai-agents/abm-agent) - Campaign help
5. [Oracle Overview](/ai-agents/oracle-overview) - Goals and approvals for the autonomous agent

---

## Quick Links by Role

<details>
<summary><strong>Marketing Manager</strong></summary>

You'll spend most of your time creating campaigns and analyzing results:

- [Create Your First Campaign](/getting-started/first-campaign)
- [Website Personalization](/campaigns/website-personalization)
- [AI ABM Agent (Clara)](/ai-agents/abm-agent)
- [Campaign Performance](/analytics/campaign-performance)
- [Use Cases](/getting-started/use-cases)

</details>

<details>
<summary><strong>Marketing Operations / RevOps</strong></summary>

You'll focus on integrations, data sync, and tracking setup:

- [Salesforce Setup Guide](/integrations/crm/salesforce-setup)
- [HubSpot Setup Guide](/integrations/crm/hubspot-setup)
- [Sync Behavior (Fill vs Overwrite)](/integrations/crm/sync-behavior)
- [CRM Sync Troubleshooting](/troubleshooting/crm-sync)
- [Conversion Tracking](/conversions/overview)

</details>

<details>
<summary><strong>Sales Representative</strong></summary>

You'll use visitor data to prioritize outreach:

- [Company Identification](/visitor-tracking/company-identification)
- [Contact Reveal](/visitor-tracking/contact-reveal)
- [AI SDR Agent (Alex)](/ai-agents/sdr-agent)
- [CRM Sync](/audiences/crm-sync) - How data appears in Salesforce

</details>

<details>
<summary><strong>Developer / Technical Team</strong></summary>

You'll handle implementation and custom integrations:

- [Install Tracking Script](/getting-started/install-script)
- [Accounts API](/api/api-accounts)
- [API Reference](/api/api-overview)
- [API Keys](/api/api-keys)
- [Script Troubleshooting](/troubleshooting/script-issues)

</details>

---

## Platform Overview

```
                    ┌─────────────────────────────────────┐
                    │         YOUR WEBSITE                 │
                    │    (with Abmatic tracking script)    │
                    └───────────────┬─────────────────────┘
                                    │
                                    ▼
┌─────────────┐            ┌─────────────────┐            ┌──────────────┐
│  SALESFORCE │◄──────────►│   ABMATIC AI    │◄──────────►│   LINKEDIN   │
│   HUBSPOT   │   Sync     │                 │    Push    │  GOOGLE ADS  │
└─────────────┘            │  - Reveal       │            │  OPENAI ADS  │
                           │  - Personalize  │            └──────────────┘
                           │  - AI Agents    │
                           │  - Oracle       │
                           │  - Measure      │
                           └─────────────────┘
```

---

## Popular Articles

### Getting Started
- [Quick Start Guide](/getting-started/quick-start)
- [Install Script](/getting-started/install-script)
- [Glossary](/getting-started/glossary)

### Campaigns
- [Website Personalization](/campaigns/website-personalization)
- [Page Editor](/campaigns/page-editor)
- [A/B Testing](/campaigns/ab-testing)

### Integrations
- [Salesforce Setup](/integrations/crm/salesforce-setup)
- [HubSpot Setup](/integrations/crm/hubspot-setup)
- [Slack Integration](/integrations/slack)

### Troubleshooting
- [Script Issues](/troubleshooting/script-issues)
- [CRM Sync Problems](/troubleshooting/crm-sync)
- [Common Errors](/troubleshooting/common-errors)

---

## Need Help?

- **Email Support**: [support@abmatic.ai](mailto:support@abmatic.ai) - Response within 24 hours
- **Feature Requests**: [feedback@abmatic.ai](mailto:feedback@abmatic.ai)
- **Platform**: [app.abmatic.ai](https://app.abmatic.ai)
- **Website**: [abmatic.ai](https://abmatic.ai)

---

## What's New

Check out our latest features and updates in the [Changelog](/changelog).

Recent highlights:
- **Oracle (Autonomous Agent)** - Set goals and approve agent-proposed actions from the Oracle Inbox *(available on accounts where it's enabled)*
- **Agentic Chat handoffs** - The chat widget can book a meeting, send a thank-you, or show a HubSpot form, plus an AI Conversation Summary view
- **OpenAI Ads** - Reach buyers inside ChatGPT conversations as a campaign type
- **Visitor Reveal** - Identified companies and contacts, with Reveal Confidence buckets (Very High to Very Low)
- **Demo Booked tracking** - Demo Booked details surface on accounts and in Analytics
- **API Keys** - Generate and manage API keys from Settings
- **Customizable Home Dashboard** - Build a personal dashboard of report widgets on your Home page
