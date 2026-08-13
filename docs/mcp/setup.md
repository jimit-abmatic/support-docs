---
id: setup
title: Setup and Connection
sidebar_label: Setup and Connection
sidebar_position: 2
---

# Connecting to the Abmatic AI MCP Server

Every client authenticates the same way: an Abmatic AI API key sent as a bearer token to `https://mcp.abmatic.ai/mcp`.

| Setting | Value |
|---------|-------|
| Server URL | `https://mcp.abmatic.ai/mcp` |
| Transport | Streamable HTTP (the current remote MCP transport) |
| Auth header | `Authorization: Bearer abm_your_key_here` |
| Auth type in most UIs | API key, bearer token, or "custom header" |
| OAuth | Not supported today. API key only. |

---

## Step 1: Generate an API key

1. Sign in at [app.abmatic.ai](https://app.abmatic.ai).
2. Go to **Settings**, then the **API Keys** tab ([app.abmatic.ai/settings/api-keys](https://app.abmatic.ai/settings/api-keys)).
3. Click **Generate API Key**.
4. **Copy the key immediately.** The full value is shown once, at creation. After that the dashboard only ever shows the prefix (for example `abm_VlAa...`).
5. Store it in your password manager or your agent platform's secret store.

![The API Keys tab in Settings, showing the Active API Key card with its prefix and created date, the Regenerate and Revoke buttons, and the Base URL and rate limit below](/img/screenshots/apikeys-ui.png)

:::caution One key per account
There is a single active key per Abmatic AI account. **Regenerate** and **Revoke** both invalidate the previous key immediately, and every agent still using the old value stops working at that moment. Coordinate rotation across your team.
:::

For the dashboard walkthrough see the [API Keys settings guide](/settings/api-keys). For the key endpoints see the [API Keys developer reference](/api/api-keys).

---

## Step 2: Add the server to your AI tool

### Claude Code

One command:

```bash
claude mcp add --transport http abmatic https://mcp.abmatic.ai/mcp \
  --header "Authorization: Bearer abm_your_key_here"
```

Then run `/mcp` inside Claude Code. You should see `abmatic` connected with its tools listed.

### claude.ai (personal connector)

1. In claude.ai, open **Settings**, then **Connectors**.
2. Choose **Add custom connector**.
3. Set the URL to `https://mcp.abmatic.ai/mcp`.
4. When asked for authentication, choose the API key or bearer token option and supply:

   ```
   Authorization: Bearer abm_your_key_here
   ```

5. Save. Claude connects, discovers the Abmatic AI tools, and lists them.

### claude.ai (organization managed connector)

If your workspace restricts connectors to an admin approved list, which is common on Team and Enterprise plans, an owner or admin adds it once for everyone:

1. Open the **Admin settings** for the organization, then **Connectors**.
2. Add a custom connector with URL `https://mcp.abmatic.ai/mcp`.
3. Supply the bearer credential and choose who can use the connector.
4. Members then enable it from their own **Connectors** list without re-entering the key.

:::tip What to send your security reviewer
Reviewers typically want the server URL, the transport, the auth model, the data the tools return, and where the service runs. All of it is on the [Security and Architecture](/mcp/security) page and summarized as questionnaire answers in the [Security Review Pack](/mcp/security-review).
:::

### Cursor

Add the server to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (per project):

```json
{
  "mcpServers": {
    "abmatic": {
      "url": "https://mcp.abmatic.ai/mcp",
      "headers": {
        "Authorization": "Bearer abm_your_key_here"
      }
    }
  }
}
```

Reload Cursor, then check **Settings**, **MCP**, and confirm `abmatic` shows as connected.

### Codex CLI

Remote MCP servers are configured in `~/.codex/config.toml`:

```toml
[mcp_servers.abmatic]
url = "https://mcp.abmatic.ai/mcp"
bearer_token_env_var = "ABMATIC_API_KEY"
```

Export the key in your shell (`export ABMATIC_API_KEY=abm_your_key_here`) so it is not written into the config file. Remote streamable HTTP servers need a recent Codex build, and some versions require `experimental_use_rmcp_client = true` in the same file. Check your Codex version's documentation if the server does not appear.

### Agent SDK, Managed Agents, and other MCP clients

Register a remote MCP server with:

- URL: `https://mcp.abmatic.ai/mcp`
- Transport: streamable HTTP
- Credential type: static bearer
- Credential value: `abm_your_key_here`, stored in the runtime's vault or secret store

The runtime attaches the bearer to every request to that URL. Keep the key in the vault, never in prompt text, source code, or a committed config file.

---

## Step 3: Verify the connection

Ask your assistant:

> Which Abmatic AI account am I connected to?

That calls the `whoami` tool and returns your account id, name, website, plan tier, and the key **prefix** (never the full key). If it answers with your company, you are connected.

Two useful follow-ups:

> List my hot accounts.

> Which companies did we de-anonymize this week?

If something fails, the [Troubleshooting](/mcp/troubleshooting) page maps each error code to its cause.

---

## Network requirements

The connection is outbound only. Nothing is installed in your environment and nothing connects inbound to your network.

| Requirement | Value |
|-------------|-------|
| Destination | `mcp.abmatic.ai` |
| Port and protocol | TCP 443, HTTPS |
| Direction | Outbound from your AI client or agent runtime |
| Inbound to your network | None |
| Static IPs | Not offered. The service is behind an AWS load balancer, so allowlist the hostname, not an address. |

If your AI client runs in a locked down environment (for example a self hosted agent runtime behind an egress proxy), allow `mcp.abmatic.ai` on 443.

---

## Rotating and revoking

| Action | Where | Effect |
|--------|-------|--------|
| Regenerate | Settings, API Keys, **Regenerate** | Issues a new key and invalidates the old one immediately |
| Revoke | Settings, API Keys, **Revoke** | Invalidates the key immediately, no replacement issued |

After either action, connected agents receive `401` on their next call. Update the credential wherever it is stored (connector settings, agent vault, `mcp.json`, shell environment) as part of the same change.

Rotate when someone with access to the key leaves, when the key may have been exposed, and on whatever periodic schedule your policy requires.
