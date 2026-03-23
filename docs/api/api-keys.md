---
id: api-keys
title: API Keys
sidebar_label: API Keys
sidebar_position: 3
---

# API Keys

API keys provide secure, programmatic access to your Abmatic data. Each key is scoped to a single account and grants read access to all account data available via the API.

:::note Enterprise Feature
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

---

## Generating an API Key

### Via the Dashboard

1. Log in to [Abmatic](https://app.abmatic.ai)
2. Navigate to **Settings** > **Account**
3. Scroll to the **API Settings** section
4. Click **Generate API Key**
5. **Copy your key immediately** — it will only be shown once

### Via the API (for automation)

If you already have a valid session, you can generate a key programmatically:

```bash
# Generate a new API key (requires JWT session auth)
curl -X POST "https://api.abmatic.ai/account/api-key" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"
```

**Response:**

```json
{
  "data": {
    "key": "abm_Kx7fG2...<full key>",
    "prefix": "abm_Kx7f",
    "created_at": "2026-03-23T14:30:00"
  },
  "success": true,
  "warning": "Store this key securely. It will not be shown again."
}
```

---

## Using Your API Key

Include your API key as a Bearer token in the `Authorization` header of every request:

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts" \
  -H "Authorization: Bearer abm_Kx7fG2..."
```

### Required Headers

| Header | Value | Required |
|--------|-------|----------|
| `Authorization` | `Bearer YOUR_API_KEY` | Yes |
| `Content-Type` | `application/json` | For POST/PUT requests |
| `Accept` | `application/json` | Recommended |

---

## Viewing Your Key Status

You can check whether you have an active API key and when it was created:

```bash
curl -X GET "https://api.abmatic.ai/account/api-key" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Response (key exists):**

```json
{
  "data": {
    "prefix": "abm_Kx7f",
    "created_at": "2026-03-23T14:30:00"
  },
  "has_key": true,
  "success": true
}
```

**Response (no key):**

```json
{
  "data": null,
  "has_key": false,
  "success": true
}
```

The `prefix` field shows the first 8 characters of your key, helping you identify which key is active without exposing the full value.

---

## Revoking a Key

If your key is compromised or you need to rotate it, revoke it immediately:

### Via the Dashboard

1. Navigate to **Settings** > **Account** > **API Settings**
2. Click **Revoke Key**
3. Confirm the revocation

### Via the API

```bash
curl -X DELETE "https://api.abmatic.ai/account/api-key" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Response:**

```json
{
  "message": "API key revoked successfully",
  "success": true
}
```

:::warning
Revoking a key is immediate and irreversible. All integrations using the revoked key will stop working. Generate a new key and update your integrations.
:::

---

## Key Rotation

To rotate your key (recommended every 365 days):

1. **Generate a new key** — this automatically replaces the old key
2. **Update your integrations** with the new key
3. The old key is invalidated immediately upon generating a new one

:::tip Rotation Best Practice
Set a calendar reminder to rotate your API key every 365 days. When rotating:
1. Generate the new key
2. Update your environment variables / secrets manager
3. Verify your integrations are working with the new key
:::

---

## Security Best Practices

### Do

- **Store keys in environment variables** — never hardcode them in source code
- **Use a secrets manager** (AWS Secrets Manager, HashiCorp Vault, etc.) for production deployments
- **Rotate keys every 365 days** as a preventive measure
- **Use separate keys for development and production** by using separate Abmatic accounts
- **Monitor API usage** for unexpected patterns
- **Revoke immediately** if a key is compromised

### Don't

- **Don't commit keys** to version control (Git, SVN)
- **Don't share keys** via email, Slack, or other messaging tools
- **Don't embed keys** in client-side code (JavaScript running in browsers)
- **Don't log keys** in application logs or error messages

### Example: Environment Variables

```bash
# .env file (add to .gitignore!)
ABMATIC_API_KEY=abm_Kx7fG2...
```

```python
# Python
import os
api_key = os.environ["ABMATIC_API_KEY"]
```

```javascript
// Node.js
const apiKey = process.env.ABMATIC_API_KEY;
```

---

## Troubleshooting

### "Invalid or missing API key" (401)

- Verify the key is included in the `Authorization` header
- Ensure the format is `Bearer YOUR_API_KEY` (with a space after "Bearer")
- Check that the key hasn't been revoked
- Confirm you're using the correct key for the environment

### "API access requires an Enterprise plan" (403)

- API access is only available on Enterprise plans
- Contact support@abmatic.ai to upgrade your plan

### "Too many requests" (429)

- You've exceeded the rate limit (100 requests/minute)
- Wait for the period specified in the `retry_after` field
- Implement exponential backoff in your integration

---

## API Key Management Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/account/api-key` | JWT | View key status (prefix + created date) |
| `POST` | `/account/api-key` | JWT | Generate new key (replaces existing) |
| `DELETE` | `/account/api-key` | JWT | Revoke current key |

:::info
These management endpoints use your regular Abmatic session token (JWT), not the API key itself. You must be logged into the Abmatic dashboard or have a valid session to manage keys.
:::
