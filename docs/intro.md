---
id: intro
title: Welcome to Abmatic AI
sidebar_label: Welcome
slug: /
sidebar_position: 1
---

# Abmatic AI Documentation

Welcome to Abmatic AI — the account-based marketing platform that helps you identify, engage, and convert your best-fit accounts. Turn anonymous website visitors into pipeline opportunities with AI-powered personalization and intelligent automation.

![Abmatic AI Dashboard](/img/screenshots/home-dashboard.png)

---

## Quick Navigation

<div className="row">
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <h3>New to Abmatic?</h3>
      </div>
      <div className="card__body">
        <p>Get up and running in 15 minutes with our quick start guide.</p>
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
| **Visitor Identification** | See which companies visit your website, even without form fills | Marketing, Sales | [Learn more](/visitor-tracking/company-identification) |
| **Contact Reveal** | Identify specific people visiting your site | Marketing, Sales | [Learn more](/visitor-tracking/contact-reveal) |
| **Website Personalization** | Show different content to different visitors based on company, industry, or behavior | Marketing | [Learn more](/campaigns/website-personalization) |
| **AI Agents** | Automate prospecting and ABM campaigns with AI-powered agents | Marketing, Sales | [Learn more](/ai-agents/ai-agents-overview) |
| **CRM Integration** | Sync data with Salesforce, HubSpot, and other CRMs | Marketing Ops, RevOps | [Learn more](/integrations/overview) |
| **Advertising Audiences** | Push target accounts to LinkedIn and Google Ads | Marketing | [Learn more](/audiences/linkedin-dmp) |
| **Campaign Analytics** | Measure how campaigns influence pipeline and revenue | Marketing, Leadership | [Learn more](/analytics/overview) |

---

## Start Here

### I'm brand new to Abmatic

1. [Quick Start Guide](/getting-started/quick-start) - Set up your account in 15 minutes
2. [Install the Tracking Script](/getting-started/install-script) - Start identifying visitors
3. [Create Your First Campaign](/getting-started/first-campaign) - Launch personalization
4. [Use Cases](/getting-started/use-cases) - See what you can achieve

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

1. [Company Identification](/visitor-tracking/company-identification) - How it works
2. [Contact Reveal](/visitor-tracking/contact-reveal) - Identify specific people
3. [Audiences](/audiences/overview) - Build lists from visitors

### I want to use AI Agents

1. [AI Agents Overview](/ai-agents/ai-agents-overview) - Meet Alex and Clara
2. [Configuration Guide](/ai-agents/ai-agents-configuration) - Set up your context
3. [AI SDR Agent](/ai-agents/sdr-agent) - Automated prospecting
4. [AI ABM Agent](/ai-agents/abm-agent) - Campaign automation

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
- [JavaScript SDK](/api/javascript-sdk)
- [API Reference](/api/api-overview)
- [Script Troubleshooting](/troubleshooting/script-issues)

</details>

---

## Platform Overview

```
                    ┌─────────────────────────────────────┐
                    │         YOUR WEBSITE                │
                    │    (with Abmatic tracking script)   │
                    └───────────────┬─────────────────────┘
                                    │
                                    ▼
┌─────────────┐            ┌─────────────────┐            ┌─────────────┐
│  SALESFORCE │◄──────────►│   ABMATIC AI    │◄──────────►│  LINKEDIN   │
│   HUBSPOT   │   Sync     │                 │    Push    │  GOOGLE ADS │
└─────────────┘            │  - Identify     │            └─────────────┘
                           │  - Personalize  │
                           │  - AI Agents    │
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

Check out our latest features and updates in the [What's New](/changelog) section.

Recent highlights:
- **AI Agents GA** - Alex (SDR) and Clara (ABM) now generally available
- **Enhanced Dashboards** - Custom widget creation and sharing
- **Google Customer Match** - Direct audience sync to Google Ads
