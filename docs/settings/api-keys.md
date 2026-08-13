---
id: api-keys
title: API Keys
sidebar_label: API Keys
sidebar_position: 10
---

# API Keys

API keys let you access your Abmatic AI account data programmatically through the public API. Use a key to pull accounts, contacts, and other data into your own scripts, internal tools, or data pipelines.

The **API Keys** settings page is where you generate, regenerate, and revoke your account's key.

## Accessing API Keys

1. Click **Settings** in the left sidebar
2. Open the **API Keys** tab in the top navigation (`/settings/api-keys`)

![API Keys settings page showing the Active API Key card with its prefix, created date, and the Regenerate and Revoke buttons, plus the Base URL and rate limit details below](/img/screenshots/settings-api-keys.png)

## How API keys work

Your account has a **single active API key** at a time. When a key exists, the page shows an **Active API Key** card with:

- **Prefix** — the first few characters of the key (e.g. `abm_VlAa...`), shown so you can identify it without exposing the full secret
- **Created** — the date the key was generated

The full secret is only ever shown **once**, at the moment you generate it. After that, only the prefix is visible.

:::info Base URL and rate limit
- **Base URL:** `https://api.abmatic.ai/v1`
- **Rate limit:** 100 requests per minute

These values are shown directly on the API Keys page.
:::

## Generating a key

If you do not have a key yet, click the **Generate** button to create one.

When the key is created, Abmatic AI displays the **full key value one time** with a copy button. Copy it immediately and store it somewhere secure (a password manager or your secrets vault).

:::warning Copy your key right away
The full key is shown **only once**. Once you leave the page, you will only see the prefix — there is no way to view the full key again. If you lose it, you will need to regenerate (which replaces the old key).
:::

After you generate a key, the page switches to the **Active API Key** card showing the prefix and created date.

## Regenerating a key

Click **Regenerate** to replace your current key with a brand-new one.

Regenerating:

- Immediately **invalidates the old key** — any script or integration still using it will start getting authentication errors
- Generates a new key, shown in full **once** (copy it right away)

Use regenerate when you rotate keys on a schedule or if you suspect a key has been exposed.

:::tip Rotate regularly
Abmatic AI recommends **rotating your API key every 365 days**. Build key rotation into your normal security routine and update the key everywhere it is stored when you regenerate.
:::

## Revoking a key

Click **Revoke** to permanently disable the active key without generating a replacement.

Revoking immediately stops all programmatic access that relied on that key. Use it when you are decommissioning an integration or responding to a security incident. When you are ready to use the API again, generate a fresh key.

## Using your key

Send your key with each request to the API base URL `https://api.abmatic.ai/v1`. Keep these in mind:

- Stay within the **100 requests/minute** rate limit
- Never commit keys to source control or share them in plain text
- Treat the key like a password — anyone who has it can read your account data

For endpoints, request/response formats, and authentication details, see the [API Reference](/api/api-keys).

## Related

- [MCP Server](/mcp/overview) - Connect Claude, Cursor, or another AI tool to your Abmatic AI data with this key
- [API Reference](/api/api-keys) — Endpoints, authentication, and examples for the public API
- [Account Settings](/settings/account) — Manage your company profile and branding
- [Usage](/settings/usage) — Monitor credit consumption across Abmatic AI services
