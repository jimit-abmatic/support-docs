---
id: usage
title: Usage
sidebar_label: Usage
sidebar_position: 7
---

# Usage

The **Usage** page shows how much of your Abmatic AI credits you have consumed across each service. It's a monitoring dashboard — you check it to see where your usage stands and whether any service is approaching or over its limit.

## Accessing Usage

1. Open **Settings** from the left icon sidebar
2. Open the **Usage** tab in the top navigation (`/settings/usage`)

![Usage page showing the Credits section with per-service lines: Apollo Contacts, Campaigns, OpenAI Tokens, Abmatic Accounts, Abmatic Contacts, and Abmatic IP Reveal, each with a "used/total <unit> used" figure](/img/screenshots/set-usage.png)

## Credits

The **Credits** section lists each metered service with a `used / total` figure and the unit being counted. Each line reads like `used/total <unit> used` — for example, `24,171/4,000,000 credits used`.

| Service | What it measures | Unit |
|---------|------------------|------|
| **Apollo Contacts** | Contact enrichment performed through Apollo | credits |
| **Campaigns** | Visitors served by your active campaigns | visitors |
| **OpenAI Tokens** | AI tokens consumed by Abmatic AI's AI features | tokens |
| **Abmatic Accounts** | Company/account data lookups | credits |
| **Abmatic Contacts** | Contact data lookups | credits |
| **Abmatic IP Reveal** | IP-to-company reveal lookups | lookups |

:::info "Abmatic" data sources
The **Abmatic Accounts**, **Abmatic Contacts**, and **Abmatic IP Reveal** lines are Abmatic AI's own enriched data services. They appear under the Abmatic name — that's the correct label to look for on this page.
:::

### Reading the numbers

- The **first number** is how much you've used in the current period.
- The **second number** is your total allowance for that service.
- The **unit** (credits, visitors, tokens, or lookups) tells you what's being counted.

### Over-quota indicator

When a service goes over its allowance, its line **turns red** so it's easy to spot at a glance. A red line means you've exhausted that allowance for the current billing period — usage that depends on it may pause until the period resets or you add capacity.

:::tip Check Usage before big pushes
Before launching a large campaign or a heavy enrichment run, glance at the Usage page so you know how much headroom you have in each service.
:::

## Current plan limits

Below the credits breakdown, Abmatic AI surfaces your **current plan limits** for the core capacity lines — such as **Inbound visitors** and **Company lookups**. Each shows your limit along with how much remains (for example, the amount "left").

## Current billing period

The page also shows your **current billing period** so you know the window the usage figures cover. Usage figures reset at the start of each new period.

## Need more capacity?

The Usage page is for monitoring, not self-serve purchasing. To raise a limit or add credits:

- **More credits / higher limits:** contact **sales@abmatic.ai**
- **Billing questions:** contact **billing@abmatic.ai**

## Related

- [Account Settings](/settings/account) — Manage your company profile and branding
- [Contact Reveal](/settings/contact-reveal) — Control reveal accuracy, which affects IP Reveal and contact usage
- [API Keys](/settings/api-keys) — Programmatic access to your account data
