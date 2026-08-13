---
id: overview
title: MCP Server Overview
sidebar_label: Overview
sidebar_position: 1
---

# Abmatic AI MCP Server

The Abmatic AI MCP server lets the AI tools your team already uses (Claude, Claude Code, Cursor, Codex, or any other MCP client) read your Abmatic AI data directly. No exports, no CSVs, no copy and paste.

- **Server URL:** `https://mcp.abmatic.ai/mcp`
- **Protocol:** Model Context Protocol (MCP), Streamable HTTP transport
- **Access:** read only, scoped to the single Abmatic AI account your API key belongs to
- **Tools:** 28 read tools covering accounts, contacts, campaigns, visitors, reveal, conversions, meetings, opportunities, reports, and dashboards

:::info Enterprise feature
The MCP server authenticates with an Abmatic AI API key, and API keys require a paid Enterprise plan. Contact [support@abmatic.ai](mailto:support@abmatic.ai) if API access is not enabled on your account.
:::

:::note For security teams
If you are reviewing this connector before approving it, start with the [Security and Architecture](/mcp/security) page, then the [Security Review Pack](/mcp/security-review), which answers standard vendor questionnaire items in one place.
:::

---

## What is MCP?

The Model Context Protocol is an open standard for connecting AI assistants to external systems. An MCP server publishes a set of **tools** (functions the assistant can call). When you ask your assistant a question, it decides which tools to call, calls them, and answers using what comes back.

The Abmatic AI MCP server publishes only **read** tools. Every tool maps to a `GET` request against the Abmatic AI public API (`https://api.abmatic.ai/v1/*`). There are no create, update, or delete tools, so an assistant connected to it cannot change or delete anything in your account.

---

## What you can ask

Once connected, your team can ask questions in plain language instead of building reports:

| Question | Tools it uses |
|----------|---------------|
| "Show me the 5 most recently de-anonymized companies scoring above 80." | `list_revealed_companies`, `list_accounts` |
| "Which companies hit our site this week and are not in a campaign yet?" | `list_visitors`, `list_campaigns` |
| "Draft an outreach angle for acme.com based on how they have engaged." | `get_account`, `get_engagement` |
| "Which campaigns actually drove pipeline last quarter?" | `list_campaigns`, `list_opportunities` |
| "Who from Acme has engaged in the last 30 days, and what are their titles?" | `list_contacts`, `get_engagement` |
| "Did our CRM sync run, and did it error?" | `get_crm_sync_status` |

Every list tool supports search (`q`), score bounds (`min_score` / `max_score`), date windows (`since` / `until`), sorting (`sort_by`, `order_by`), field projection (`fields`), and paging.

---

## How it fits together

```text
  Your AI client                 Abmatic AI MCP server           Abmatic AI API
  (Claude, Claude Code,          mcp.abmatic.ai                  api.abmatic.ai
   Cursor, Codex, SDK)
        |                                |                              |
        |  MCP over HTTPS                |  HTTPS GET /v1/*             |
        |  Authorization: Bearer abm_... |  same bearer, forwarded      |
        |------------------------------->|----------------------------->|
        |                                |                              |
        |  tool results (JSON)           |  JSON, scoped to your account|
        |<-------------------------------|<-----------------------------|
```

The MCP server is a **stateless translation layer**. It holds no database credentials, stores no customer data, and keeps no copy of your API key. It forwards the key you supply on each request and returns what the API returns. All tenant scoping and authorization happen in the Abmatic AI API, which is the same enforcement path the dashboard and the public API already use.

---

## What it costs you to set up

Two minutes:

1. Generate an API key at [app.abmatic.ai/settings/api-keys](https://app.abmatic.ai/settings/api-keys).
2. Add `https://mcp.abmatic.ai/mcp` to your AI client with the key as a bearer token.
3. Ask "which Abmatic AI account am I connected to?" to confirm.

Full instructions, including the admin flow for managed Claude workspaces, are on the [Setup and Connection](/mcp/setup) page.

---

## Before you hand out the key

An Abmatic AI API key is an **account level** credential, like a Stripe or HubSpot API key.

:::warning Read this before sharing a key
An Abmatic AI API key used with the MCP server grants read access to all of that account's exposed data, regardless of individual user permissions in the dashboard. Treat it like a password. Anyone who holds the key (or connects an agent with it) can read the account's accounts, contacts, campaigns, reveal data, and analytics. Rotate it from the dashboard if it may be exposed.
:::

There is **one key per account**. Regenerating or revoking takes effect immediately and breaks every agent still using the old value, so plan rotations as a single coordinated change. See [Security and Architecture](/mcp/security) for the full control set and the limitations we are explicit about.

---

## Where to go next

| Page | What it covers |
|------|----------------|
| [Setup and Connection](/mcp/setup) | Connecting claude.ai, Claude Code, Cursor, Codex, and the Agent SDK, including admin-managed workspaces |
| [Tool Reference](/mcp/tools) | All 28 tools, what each returns, and what is never exposed |
| [Security and Architecture](/mcp/security) | Architecture, authentication, tenant isolation, encryption, logging, data handling, threat model, limitations |
| [Security Review Pack](/mcp/security-review) | Questionnaire style answers and an approval checklist for security reviewers |
| [Troubleshooting](/mcp/troubleshooting) | Error codes and what to do about them |
