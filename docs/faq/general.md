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

Abmatic AI is a complete account-based marketing (ABM) platform that helps B2B companies convert more of their website visitors into customers:

| Capability | What You Get | Business Impact |
|------------|--------------|-----------------|
| **Identify** | See which companies visit your website | Never miss a potential customer |
| **Personalize** | Tailor web experiences for target accounts | 2-3x higher conversion rates |
| **Automate** | AI agents handle research and outreach | Save 10+ hours per week |
| **Integrate** | Connect with CRMs and ad platforms | Unified data, no silos |
| **Measure** | Track marketing's impact on pipeline | Prove ROI to leadership |

### Who is Abmatic AI for?

Abmatic is designed for B2B marketing and sales teams running account-based programs. You'll see the best results if you have:

| Your Situation | How Abmatic Helps |
|---------------|-------------------|
| Defined target account list | Focus resources on best-fit accounts first |
| Longer sales cycles (30+ days) | Track multi-touch engagement over time |
| Higher deal values ($10K+) | Justify personalized, high-touch marketing |
| Sales + Marketing alignment goals | Give both teams shared visibility into accounts |
| Growing website traffic | Convert more visitors without more ad spend |

:::info Real Results
Customers typically see **40-60% improvement** in engagement rates within the first 30 days of personalizing their website.
:::

### How is Abmatic different from other ABM tools?

Abmatic is the only platform that combines all four pillars of modern ABM:

| What Makes Us Different | Why It Matters |
|------------------------|----------------|
| **AI-powered agents** | Automate research, outreach, and campaign recommendations |
| **Visual page editor** | Create personalized experiences without developers |
| **Real-time personalization** | No page flicker—instant, seamless experiences |
| **Unified platform** | One tool for identification, personalization, and analytics |

![Abmatic AI Agents Hub](/img/screenshots/ai-agents-hub.png)
*AI agents like Alex (SDR) and Clara (ABM) automate time-consuming tasks*

### Do I need technical skills to use Abmatic?

No technical skills required for 95% of features. Here's what each capability requires:

| Feature | Skill Level | Details |
|---------|-------------|---------|
| Script installation | One-time copy/paste | Or use Google Tag Manager |
| Campaign creation | None | Point-and-click visual editor |
| CRM integration | None | One-click OAuth connection |
| Audience building | None | Visual filters and drag-drop |
| Website personalization | None | WYSIWYG editor—no code |
| Custom event tracking | Basic JS (optional) | Only for advanced use cases |

### How long does setup take?

Most teams are seeing their first visitors within an hour. Full implementation typically takes less than a day:

| Setup Task | Time Required | Complexity |
|------------|---------------|------------|
| Install tracking script | 15-30 minutes | Copy/paste one code snippet |
| Connect CRM | 10-15 minutes | OAuth flow—just click and authorize |
| Import target accounts | 15-30 minutes | CSV upload or CRM sync |
| Create first campaign | 30-45 minutes | Visual editor, no coding |
| **Total time to value** | **< 2 hours** | Start seeing visitors immediately |

---

## Visitor Identification

### How does visitor identification work?

The moment someone visits your website, Abmatic goes to work:

1. **Capture**: Our lightweight script (< 50KB) records the visit
2. **Match**: We cross-reference the visitor's IP against our database of 300M+ companies
3. **Enrich**: Company details are returned (name, industry, size, revenue, tech stack)
4. **Associate**: The visit is linked to the company's engagement history

![Reveal Accounts Dashboard](/img/screenshots/reveal-accounts.png)
*See exactly which companies are visiting your website in real-time*

### What's the identification rate?

Identification rates depend on your traffic mix. Here's what to expect:

| Traffic Source | Identification Rate | Why |
|----------------|---------------------|-----|
| Corporate networks | 60-80% | Office IPs map directly to companies |
| Small business | 40-60% | Many have registered business IPs |
| Work-from-home | 20-40% | Some use corporate VPNs |
| Mobile networks | 5-15% | Carrier IPs are shared |
| Consumer VPNs | < 5% | Intentionally anonymized |

:::tip Boost Your Identification Rate
Enable **Form Tracking** and **Contact Reveal** to identify visitors that IP-based matching can't catch. Most customers increase their identification rate by 30-50% with these features.
:::

### Why can't all visitors be identified?

Some traffic can't be matched for technical reasons:

| Traffic Type | Why It's Unidentifiable | What You Can Do |
|--------------|------------------------|-----------------|
| Residential IPs | Home internet doesn't map to companies | Use form tracking to capture email |
| VPN users | VPNs mask the actual origin | Incentivize form fills with gated content |
| Mobile carriers | Shared carrier IPs | Contact Reveal credits for high-value pages |
| Very small businesses | No registered IP ranges | CRM matching against existing contacts |

### Can I identify specific people, not just companies?

Yes! Abmatic offers three ways to identify individuals:

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Form tracking** | Automatically captures form submissions | Free, works with any form |
| **Contact Reveal** | Credits-based service identifies individuals | High-value pages, no form needed |
| **CRM matching** | Match visitors against your contact database | Existing prospects and customers |

![Contact Reveal](/img/screenshots/reveal-contacts.png)
*Contact Reveal identifies individual visitors, not just their companies*

---

## Data & Privacy

### What data does Abmatic collect?

We collect only what's necessary to help you identify and engage target accounts:

| Data Category | What's Collected | Your Control |
|---------------|-----------------|--------------|
| **Company data** | Name, industry, size, location (from IP) | Automatic—no PII involved |
| **Behavioral data** | Page views, sessions, time on site | Configure tracking scope |
| **Form data** | Submitted form fields | Only when form tracking enabled |
| **CRM data** | Synced from your connected CRM | You control what syncs |
| **Contact Reveal** | Business email, title, LinkedIn | Only when you spend credits |

:::info Privacy-First Approach
We do **not** collect personal information unless:
- Visitor submits a form (their choice)
- You sync data from your CRM (your data)
- You use Contact Reveal credits (explicit action)
:::

### Is Abmatic GDPR compliant?

Yes. Our compliance approach protects both you and your visitors:

| Compliance Area | How We Handle It |
|-----------------|------------------|
| Data basis | IP-based identification is B2B/company-level, not personal data |
| Legal agreements | Data Processing Agreements (DPAs) available |
| Data control | You control what data is collected and how it's used |
| Data subject rights | We support access and deletion requests |
| Data sales | We **never** sell personal data to third parties |

### Is Abmatic SOC 2 compliant?

Yes. Contact [sales@abmatic.ai](mailto:sales@abmatic.ai) for:
- SOC 2 Type II audit reports
- Security questionnaire responses
- Penetration test summaries
- Custom security documentation

### Where is data stored?

| Region | Infrastructure | Notes |
|--------|---------------|-------|
| United States | AWS (us-east-1, us-west-2) | Standard for all plans |
| European Union | Available on request | Enterprise plans, contact sales |

All data is encrypted at rest (AES-256) and in transit (TLS 1.3).

### How long is data retained?

| Data Type | Default Retention | Notes |
|-----------|------------------|-------|
| Visitor/session data | 24 months | Rolling window |
| Campaign data | 36 months | For historical analysis |
| Account/contact records | Until deleted | You control deletion |

Custom retention periods available on Enterprise plans.

---

## Pricing & Plans

### What plans are available?

Abmatic offers plans for teams of all sizes:

| Plan | Best For | Key Features |
|------|----------|--------------|
| **Starter** | Getting started with ABM | Identification, basic personalization |
| **Professional** | Growing marketing teams | Full features, AI agents, advanced analytics |
| **Enterprise** | Large organizations | Custom limits, SSO, dedicated support, SLAs |

Contact [sales@abmatic.ai](mailto:sales@abmatic.ai) for detailed pricing.

### Is there a free trial?

Yes! Start with a **14-day free trial** that includes:
- Full feature access (no restrictions)
- AI agent access
- CRM integrations
- No credit card required

[Start your free trial →](https://app.abmatic.ai/signup)

### What counts toward my visitor limit?

Your plan counts **unique identified companies**, not total page views:

| What Counts | What Doesn't Count |
|-------------|-------------------|
| Unique identified companies per month | Repeat visits from same company |
| | Page views (unlimited) |
| | Unidentified visitors |
| | Your own team's visits |

:::tip Most teams have more headroom than they think
If you identify 1,000 unique companies per month, that could represent 50,000+ page views—all included in your plan.
:::

### Can I upgrade or downgrade my plan?

Yes, you have full flexibility:

| Change Type | When It Takes Effect | Billing |
|-------------|---------------------|---------|
| Upgrade | Immediately | Prorated charge |
| Downgrade | Next billing cycle | No refund for current period |
| Add-ons | Immediately | Prorated or per-use |

Contact [support@abmatic.ai](mailto:support@abmatic.ai) for plan changes.

---

## Technical Questions

### Does Abmatic slow down my website?

No. We've optimized for zero impact on user experience:

| Optimization | Details |
|--------------|---------|
| Async loading | Script loads after page content—never blocks |
| Tiny footprint | < 50KB (smaller than most analytics scripts) |
| CDN delivered | Served from edge locations worldwide |
| Browser cached | Fast subsequent page loads |

Typical load time impact: **< 50ms** (imperceptible to users).

### Does Abmatic work with single-page applications (SPAs)?

Yes! Full support for modern JavaScript frameworks:

| Framework | Support Level | Auto-Detection |
|-----------|---------------|----------------|
| React | Full | ✓ History API |
| Vue | Full | ✓ History API |
| Angular | Full | ✓ History API |
| Next.js | Full | ✓ History API |
| Nuxt | Full | ✓ History API |
| Custom SPAs | Full | ✓ pushState/popstate |

For advanced implementations, see our [JavaScript SDK](/api/javascript-sdk).

### Can I use Abmatic with Google Tag Manager?

Yes! GTM is one of our recommended installation methods:

1. Create a new **Custom HTML** tag
2. Paste your Abmatic script
3. Set trigger to **All Pages**
4. Publish your container

See [Script Installation Guide](/getting-started/install-script) for detailed instructions.

### Does Abmatic work behind a CDN or load balancer?

Yes. We automatically handle:

| Service | Support | Configuration Needed |
|---------|---------|---------------------|
| Cloudflare | ✓ | None |
| AWS CloudFront | ✓ | None |
| Fastly | ✓ | None |
| Akamai | ✓ | None |
| nginx/HAProxy | ✓ | None |

We use standard X-Forwarded-For headers to identify real visitor IPs.

---

## Support

### How do I get help?

Multiple support channels to fit your needs:

| Channel | Best For | Response Time |
|---------|----------|---------------|
| **Documentation** | Self-service answers | Instant |
| **Email**: support@abmatic.ai | General questions, issues | < 24 hours |
| **Chat** (in-app) | Quick questions | Business hours |
| **Slack** (Enterprise) | Dedicated channel | < 4 hours |
| **CSM** (Enterprise) | Strategic guidance | Scheduled calls |

### What are support hours?

| Plan | Support Hours | Critical Issue Response |
|------|---------------|------------------------|
| Starter/Professional | Mon-Fri, 9am-6pm ET | Next business day |
| Enterprise | 24/7 for critical issues | < 1 hour |

### How do I report a bug?

Email [support@abmatic.ai](mailto:support@abmatic.ai) with:

| Include This | Why It Helps |
|--------------|--------------|
| Description of the issue | Understand the problem |
| Steps to reproduce | Replicate on our end |
| Screenshots or screen recording | Visual context |
| Browser + device info | Environment-specific issues |
| Account email | Look up your configuration |

### How do I request a feature?

We love hearing from customers! Submit feature requests to:
- **Email**: feedback@abmatic.ai
- **In-app**: Use the feedback widget
- **Your CSM**: If you have a dedicated contact

All requests are reviewed quarterly by our product team.

---

## Related Resources

| Resource | What You'll Learn |
|----------|-------------------|
| [Quick Start Guide](/getting-started/quick-start) | Get up and running in under an hour |
| [Use Cases](/getting-started/use-cases) | See how other teams use Abmatic |
| [Troubleshooting](/troubleshooting/troubleshooting-overview) | Fix common issues yourself |
| [Billing FAQ](/faq/billing) | Understand your plan and billing |
| [Contact Support](mailto:support@abmatic.ai) | Get personalized help |
