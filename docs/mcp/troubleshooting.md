---
id: troubleshooting
title: MCP Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 6
---

# MCP Server Troubleshooting

Start by isolating where the problem is:

| Test | What it proves |
|------|----------------|
| Ask the assistant to run the `ping` tool | The MCP transport is reachable. `ping` does not touch Abmatic AI data and needs no key. |
| Ask "which Abmatic AI account am I connected to?" (`whoami`) | The key is valid and maps to the expected account. |
| `curl -sI https://mcp.abmatic.ai/healthz` | The service itself is up, independently of your client. |

If `ping` works but `whoami` fails, the problem is the key, not the connection.

---

## Error codes

### 401 unauthorized

The key is missing, blank, unknown, or revoked.

- Confirm the header is exactly `Authorization: Bearer abm_your_key_here`, with the word `Bearer` and a single space.
- Check for a copied trailing space or line break in the key.
- Confirm the key was not regenerated or revoked. There is one active key per account, so a teammate regenerating it invalidates yours. Generate a fresh key at [app.abmatic.ai/settings/api-keys](https://app.abmatic.ai/settings/api-keys) and update every client that used the old value.

### 403 forbidden

The key is valid, but the account is not on a paid plan. API access requires a paid Enterprise plan. Contact [support@abmatic.ai](mailto:support@abmatic.ai).

### 404 not found

The object does not exist, or it belongs to a different Abmatic AI account. These are deliberately indistinguishable so the API does not confirm the existence of other accounts' records. Check the id or website you asked for.

### 429 rate limited

More than 100 requests per minute for this key. The server returns a retry hint and honors `Retry-After`. Ask the assistant to narrow the question, since broad questions can fan out into many calls. If your workload genuinely needs a higher ceiling, contact [support@abmatic.ai](mailto:support@abmatic.ai).

### 400 invalid request

An argument was not accepted, most often an unknown `sort_by`. The message names the valid keys. Sort keys are snake_case, for example `engagement_score`, never camelCase.

---

## Connection problems

### The server does not appear in my client

- Confirm the transport is set to **HTTP** or **streamable HTTP**, not stdio or SSE.
- Confirm the URL includes the path: `https://mcp.abmatic.ai/mcp`, not just the hostname.
- In Claude Code, run `/mcp` to see the connection state. Re-add with:

  ```bash
  claude mcp add --transport http abmatic https://mcp.abmatic.ai/mcp \
    --header "Authorization: Bearer abm_your_key_here"
  ```

- Some clients cache connector configuration. Restart the app after changing a header or key.
- In a managed Claude workspace, custom connectors may be restricted to an admin approved list. Ask your workspace administrator to add it. See [Setup and Connection](/mcp/setup).

### Corporate network blocks it

The client needs outbound HTTPS to `mcp.abmatic.ai` on port 443. There are no static IPs to allowlist, so allowlist the hostname at your proxy or firewall.

---

## Result problems

### The assistant says a filter was applied but the numbers look wrong

Every response includes an `applied` block stating the filters and sort the server actually ran. If a filter shows as `null` there, it did not run. Ask the assistant to show you the `applied` block.

### Reveal returns nothing, with a note

Company reveal is plan gated. If it is not enabled on your plan, reveal tools return an empty result with an explanatory note instead of an error. See [Contact Reveal](/settings/contact-reveal).

### A tool is not available

Confirm your client finished discovery (re-open the connector, or run `/mcp` in Claude Code). The server publishes 28 tools; if you see fewer, the client is probably showing a cached or partial list.

### A large query times out

Very large accounts can exceed the request window on a broad, unfiltered sort. Narrow with a date window (`since` / `until`), a search term (`q`), or a score bound, and page through results rather than requesting everything at once.

---

## Still stuck

Contact [support@abmatic.ai](mailto:support@abmatic.ai). Include the `request_id` from the response `meta` block if you have it, the tool name, and the approximate time of the call. That is enough for us to find the request in our logs. Never send us your full API key.
