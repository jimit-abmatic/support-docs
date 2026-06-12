---
id: general
title: General FAQ
sidebar_label: General
---

# General FAQ

Get quick answers to the most common questions about Abmatic AI. Can't find what you're looking for? [Contact support](mailto:support@abmatic.ai).

:::tip Quick Navigation
Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search this page for specific topics.
:::

---

## Getting Started

### What is Abmatic AI?

Abmatic AI is an account-based marketing (ABM) platform that helps B2B teams identify the companies visiting their website, personalize the experience for target accounts, and automate outreach with AI agents:

| Capability | What You Get |
|------------|--------------|
| **Identify** | See which companies (and, with reveal, which people) visit your website |
| **Personalize** | Tailor your website and ads for specific accounts and segments |
| **Automate** | AI agents help research accounts, draft outreach, and recommend campaigns |
| **Integrate** | Connect your CRM, ad platforms, calendar, and other tools |
| **Measure** | Track engagement and conversions by account |

### Who is Abmatic AI for?

Abmatic AI is built for B2B marketing and sales teams running account-based programs. You'll get the most value if you have:

| Your Situation | How Abmatic AI Helps |
|---------------|-------------------|
| A defined target account list | Focus on your best-fit accounts first |
| Longer sales cycles (30+ days) | Track multi-touch engagement over time |
| Higher deal values | Justify personalized, account-based marketing |
| Sales + marketing alignment goals | Give both teams shared visibility into accounts |
| Growing website traffic | Convert more visitors without more ad spend |

### How is Abmatic AI different from other ABM tools?

Abmatic AI brings the core pieces of an ABM program into one platform:

| What's Different | Why It Matters |
|------------------|----------------|
| **Built-in AI agents** | Help with account research, outreach drafts, and campaign ideas |
| **Visual page editor** | Personalize your website without writing code |
| **Real-time personalization** | Matching visitors see tailored content as the page loads |
| **One platform** | Identification, personalization, ads, and analytics in a single place |

### What AI agents does Abmatic AI have?

Abmatic AI has a few different AI helpers. It's worth keeping them straight:

| Agent | Role |
|-------|------|
| **Clara (AI ABM)** | The account-based marketing persona — helps with account strategy, campaigns, and analysis |
| **Alex (AI SDR)** | The sales-development persona — focuses on outreach and prospecting tasks |
| **Co-Pilot** | A separate in-app assistant roster that helps you get things done across the app |
| **Oracle** | The autonomous-agent product that can carry out work and check in for approvals (see below) |

The **AI Agent** chat lives at the top of the left sidebar. You can ask it about your accounts, campaigns, and recent visitor activity in plain language.

![The AI Agent chat in Abmatic AI, with the Clara persona summarizing recent campaign and visitor activity](/img/screenshots/faq-ai-hub.png)
*The AI Agent chat helps you review campaigns and spot active accounts.*

:::note Oracle is an advanced, opt-in product
**Oracle** lets AI agents act more autonomously, with weekly goals (**Oracle Goals**) and an approvals inbox (**Oracle Inbox**) where you approve or deny higher-impact actions. It runs at one of three trust tiers — supervised, standard, or autonomous. Oracle is gated and may not be turned on for your account. If you'd like access, contact your Abmatic AI rep or email [support@abmatic.ai](mailto:support@abmatic.ai).
:::

### Do I need technical skills to use Abmatic AI?

No technical skills are required for most features. Here's what each one needs:

| Feature | Skill Level | Details |
|---------|-------------|---------|
| Script installation | One-time copy/paste | Or use Google Tag Manager |
| Campaign creation | None | Point-and-click visual editor |
| CRM integration | None | One-click OAuth connection |
| Audience building | None | Visual filters |
| Website personalization | None | Visual editor — no code |
| Custom event tracking | Basic JavaScript (optional) | Only for advanced use cases |

### How long does setup take?

Most teams start seeing identified visitors within an hour of installing the script. A fuller setup usually takes less than a day:

| Setup Task | Roughly |
|------------|---------|
| Install tracking script | 15-30 minutes |
| Connect your CRM | 10-15 minutes |
| Import target accounts | 15-30 minutes |
| Create your first campaign | 30-45 minutes |

---

## Visitor Identification

### How does visitor identification work?

When someone visits your website, Abmatic AI works through these steps:

1. **Capture**: A lightweight script records the visit
2. **Match**: The visitor's IP is matched to a company
3. **Enrich**: Company details are returned (name, industry, size, location, technologies)
4. **Associate**: The visit is linked to that company's engagement history

You see the results in **Visitor Reveal** under **Accounts** and **Contacts**.

![The Visitor Reveal accounts view showing identified companies](/img/screenshots/reveal-accounts.png)
*Visitor Reveal shows which companies are visiting your website.*

:::info About the reveal source and confidence
The match source shown to you is **Abmatic** with an internal confidence rating. Each identified account also carries a **Reveal Confidence** bucket — from **Very High** down to **Very Low** — so you can judge how sure a match is before acting on it.
:::

### What's the identification rate?

Identification depends heavily on your traffic mix. As a rough guide:

| Traffic Source | Typically Identified | Why |
|----------------|---------------------|-----|
| Corporate networks | Higher | Office IPs map cleanly to companies |
| Small business | Moderate | Many have registered business IPs |
| Work-from-home | Lower | Some use corporate VPNs, many don't |
| Mobile networks | Low | Carrier IPs are shared |
| Consumer VPNs | Very low | Intentionally anonymized |

:::tip Identify more visitors
Pair IP-based identification with **Form Tracking** and **Contact Reveal** to catch visitors that IP matching alone can't.
:::

### Why can't all visitors be identified?

Some traffic can't be matched to a company for technical reasons:

| Traffic Type | Why It's Unidentifiable | What You Can Do |
|--------------|------------------------|-----------------|
| Residential IPs | Home internet doesn't map to companies | Use form tracking to capture email |
| VPN users | VPNs mask the actual origin | Offer gated content to encourage form fills |
| Mobile carriers | Shared carrier IPs | Use Contact Reveal on high-value pages |
| Very small businesses | No registered IP ranges | Match against your CRM contacts |

### Can I identify specific people, not just companies?

Yes. Abmatic AI offers three ways to identify individuals:

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Form tracking** | Captures form submissions automatically | Free, works with any form |
| **Contact Reveal** | Credit-based service that identifies individuals | High-value pages, no form needed |
| **CRM matching** | Matches visitors against your contact database | Existing prospects and customers |

![The Visitor Reveal contacts view](/img/screenshots/reveal-contacts.png)
*Visitor Reveal can identify individual contacts, not just their companies.*

---

## Data & Privacy

### What data does Abmatic AI collect?

Abmatic AI collects what's needed to identify and engage target accounts:

| Data Category | What's Collected | Your Control |
|---------------|-----------------|--------------|
| **Company data** | Name, industry, size, location (from IP) | Automatic — no personal data involved |
| **Behavioral data** | Page views, sessions, time on site | Configure tracking scope |
| **Form data** | Submitted form fields | Only when form tracking is enabled |
| **CRM data** | Synced from your connected CRM | You control what syncs |
| **Contact Reveal** | Business email, title, profile | Only when you spend credits |

:::info Privacy-first approach
Abmatic AI does **not** collect personal information unless a visitor submits a form, you sync it from your CRM, or you spend Contact Reveal credits.
:::

### Is Abmatic AI GDPR compliant?

Yes. Highlights of how data is handled:

| Compliance Area | How It's Handled |
|-----------------|------------------|
| Data basis | IP-based identification is company-level, not personal data |
| Legal agreements | Data Processing Agreements (DPAs) are available |
| Data control | You control what's collected and how it's used |
| Data subject rights | Access and deletion requests are supported |
| Data sales | Personal data is **never** sold to third parties |

### Is Abmatic AI SOC 2 compliant?

Yes. Contact [sales@abmatic.ai](mailto:sales@abmatic.ai) for SOC 2 reports, security questionnaire responses, and related documentation.

### Where is data stored?

| Region | Infrastructure | Notes |
|--------|---------------|-------|
| United States | AWS (us-east-1, us-west-2) | Standard for all accounts |
| European Union | Available on request | Contact sales |

Data is encrypted at rest (AES-256) and in transit (TLS 1.3).

### How long is data retained?

Detailed visitor and session activity is kept in the live analytics views for a rolling window of about **90 days**. Older activity is moved to long-term archive storage and can still be retrieved for historical reporting. Your account and contact records are kept until you delete them.

:::note
If you need data from more than ~90 days ago, it's available through archived/historical reporting rather than the live dashboards. Contact [support@abmatic.ai](mailto:support@abmatic.ai) if you need help pulling an older date range, and ask your rep about custom retention arrangements.
:::

---

## Pricing & Plans

### What plans are available?

Abmatic AI plans are packaged around the volume of accounts and contacts you identify, the features you need, and your team size. Plans are sold on an annual basis. For current packaging and pricing tailored to your traffic, contact [sales@abmatic.ai](mailto:sales@abmatic.ai).

You can always see exactly how much of each credit type you've used in **Settings → Usage**. See the [Billing FAQ](/faq/billing) for details on credits and usage.

### Is there a free trial?

Yes — you can start with a free trial that includes full feature access. [Get started →](https://app.abmatic.ai/signup)

### What counts toward my limits?

Your plan counts **unique identified companies**, not total page views:

| What Counts | What Doesn't Count |
|-------------|-------------------|
| Each unique identified company | Repeat visits from the same company |
| | Page views (unlimited) |
| | Unidentified visitors |
| | Your own team's visits |

:::tip More headroom than you'd think
A single identified company can represent dozens of visits and hundreds of page views — all counted as one company.
:::

---

## Technical Questions

### Does Abmatic AI slow down my website?

No. The script is built to stay out of the way:

| Optimization | Details |
|--------------|---------|
| Async loading | The script loads after page content and never blocks rendering |
| Small footprint | Lightweight compared with most analytics scripts |
| CDN delivered | Served from edge locations worldwide |
| Browser cached | Fast on repeat page loads |

### Does Abmatic AI work with single-page applications (SPAs)?

Yes. It supports modern JavaScript frameworks via the History API:

| Framework | Support | Detection |
|-----------|---------|-----------|
| React | Full | History API |
| Vue | Full | History API |
| Angular | Full | History API |
| Next.js | Full | History API |
| Nuxt | Full | History API |
| Custom SPAs | Full | pushState / popstate |

For advanced implementations, see the [API Reference](/api/api-overview).

### Can I use Abmatic AI with Google Tag Manager?

Yes — GTM is a recommended install method:

1. Create a new **Custom HTML** tag
2. Paste your Abmatic AI script
3. Set the trigger to **All Pages**
4. Publish your container

See the [Script Installation Guide](/getting-started/install-script) for details.

### Does Abmatic AI work behind a CDN or load balancer?

Yes. The following are supported with no special configuration:

| Service | Support |
|---------|---------|
| Cloudflare | Yes |
| AWS CloudFront | Yes |
| Fastly | Yes |
| Akamai | Yes |
| nginx / HAProxy | Yes |

Standard X-Forwarded-For headers are used to identify the real visitor IP.

---

## Support

### How do I get help?

| Channel | Best For |
|---------|----------|
| **Documentation** | Self-service answers |
| **Email**: support@abmatic.ai | General questions and issues |
| **In-app chat** | Quick questions |
| **Your rep / CSM** | Strategic guidance (where applicable) |

### How do I report a bug?

Email [support@abmatic.ai](mailto:support@abmatic.ai) with:

- A description of the issue
- Steps to reproduce it
- Screenshots or a screen recording
- Your browser and device
- Your account email

### How do I request a feature?

Email feedback to [feedback@abmatic.ai](mailto:feedback@abmatic.ai), or mention it to your rep. Product feedback is reviewed regularly.

---

## Related Resources

| Resource | What You'll Learn |
|----------|-------------------|
| [Quick Start Guide](/getting-started/quick-start) | Get up and running |
| [Use Cases](/getting-started/use-cases) | How other teams use Abmatic AI |
| [Troubleshooting](/troubleshooting/troubleshooting-overview) | Fix common issues yourself |
| [Billing FAQ](/faq/billing) | Understand credits, usage, and billing |
| [Contact Support](mailto:support@abmatic.ai) | Get personalized help |
