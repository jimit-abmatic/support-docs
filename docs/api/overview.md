---
id: api-overview
title: API Overview
sidebar_label: Overview
sidebar_position: 1
---

# Abmatic API Overview

Build powerful integrations that sync your ABM data across your entire tech stack. The Abmatic API gives you programmatic access to accounts, contacts, campaigns, and visitor data—enabling custom workflows, real-time dashboards, and automated data pipelines.

:::tip Why Use the API?
- **Automate workflows**: Trigger actions based on account activity
- **Build custom dashboards**: Pull data into your BI tools
- **Sync across systems**: Keep Abmatic data in sync with internal tools
- **Create real-time alerts**: Get notified instantly when key accounts visit
:::

:::note API Access
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

## Quick Start

**Base URL:** `https://api.abmatic.ai/v1`

```bash
# Test your connection
curl -X GET "https://api.abmatic.ai/v1/accounts" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

---

## Authentication

The Abmatic API uses API keys for secure authentication.

### Getting Your API Key

1. Navigate to **Settings** > **Account** in Abmatic
2. Scroll to **API Settings**
3. Click **Generate API Key**
4. Copy and securely store your key

:::warning Keep Your Key Secure
Your API key provides full access to your account data. Follow these security practices:
- Store keys in environment variables, not code
- Never commit keys to version control
- Rotate keys periodically (recommended: every 90 days)
- Use separate keys for development and production
:::

### Request Headers

| Header | Value | Required |
|--------|-------|----------|
| `Authorization` | `Bearer YOUR_API_KEY` | Yes |
| `Content-Type` | `application/json` | Yes for POST/PUT |
| `Accept` | `application/json` | Recommended |

---

## Rate Limits

To ensure fair usage and optimal performance for all users:

| Plan | Rate Limit | Best For |
|------|------------|----------|
| Professional | 100 requests/min | Standard integrations |
| Enterprise | 500 requests/min | High-volume workflows |
| Custom | Contact sales | Real-time applications |

### Monitoring Your Usage

Every response includes rate limit headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704672000
```

### Handling Rate Limits

If you exceed the limit, you'll receive a `429 Too Many Requests` response:

```json
{
  "error": "rate_limit_exceeded",
  "message": "Too many requests. Please wait before retrying.",
  "retry_after": 60
}
```

:::tip Best Practice
Implement exponential backoff in your integration. Start with a 1-second delay, then double it with each retry (1s, 2s, 4s, etc.).
:::

---

## Response Format

All responses use consistent JSON structures for easy parsing.

### Successful Responses

Successful requests return JSON with a `200`, `201`, or `204` status code:

```json
{
  "data": {
    "id": "acc_123abc",
    "name": "Acme Corp",
    "website": "acme.com",
    "industry": "Technology",
    "employee_count": 500,
    "engagement_score": 85
  },
  "meta": {
    "request_id": "req_xyz789"
  }
}
```

### List Responses

List endpoints return paginated results with metadata:

```json
{
  "data": [
    {"id": "acc_123", "name": "Acme Corp", "engagement_score": 85},
    {"id": "acc_456", "name": "Globex Inc", "engagement_score": 72}
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "per_page": 50,
    "total_pages": 3
  }
}
```

### Error Responses

Errors include details to help you debug quickly:

```json
{
  "error": "invalid_request",
  "message": "The 'name' field is required",
  "code": "MISSING_REQUIRED_FIELD",
  "meta": {
    "field": "name",
    "request_id": "req_xyz789"
  }
}
```

### Error Code Reference

| Status | Error | Description | How to Fix |
|--------|-------|-------------|------------|
| 400 | `invalid_request` | Request was malformed | Check request body and parameters |
| 401 | `unauthorized` | Invalid or missing API key | Verify your API key is correct |
| 403 | `forbidden` | API key doesn't have access | Check your plan permissions |
| 404 | `not_found` | Resource doesn't exist | Verify the resource ID |
| 429 | `rate_limit_exceeded` | Too many requests | Wait and retry with backoff |
| 500 | `internal_error` | Server error | Contact support with request_id |

---

## Pagination

Efficiently fetch large datasets with pagination:

```bash
GET /v1/accounts?page=2&per_page=25
```

| Parameter | Default | Max | Description |
|-----------|---------|-----|-------------|
| `page` | 1 | - | Page number (1-indexed) |
| `per_page` | 50 | 100 | Results per page |

:::tip Efficient Pagination
For large exports, start with `per_page=100` and iterate through pages. Use the `total_pages` field to know when you've fetched everything.
:::

---

## Filtering

Retrieve exactly the data you need with powerful filters:

```bash
# Get technology companies with 1000+ employees
GET /v1/accounts?industry=Technology&size=1000+

# Get high-engagement accounts created this month
GET /v1/accounts?engagement_score_min=80&created_after=2026-01-01
```

### Common Filter Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `created_after` | ISO 8601 date | Records created after date | `2026-01-01` |
| `created_before` | ISO 8601 date | Records created before date | `2026-12-31` |
| `updated_after` | ISO 8601 date | Records updated after date | `2026-01-15` |
| `industry` | string | Filter by industry | `Technology` |
| `engagement_score_min` | integer | Minimum engagement score | `50` |

---

## Available Endpoints

### Accounts

Manage your target accounts programmatically. Perfect for syncing with your CRM or building custom ABM workflows.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/accounts` | List all accounts (with filters) |
| GET | `/v1/accounts/:id` | Get single account with full details |
| POST | `/v1/accounts` | Create a new target account |
| PUT | `/v1/accounts/:id` | Update account properties |

**Example: Get high-value accounts**
```bash
GET /v1/accounts?engagement_score_min=80&industry=Technology
```

### Contacts

Access contact data for outreach and enrichment workflows.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/contacts` | List all contacts (with filters) |
| GET | `/v1/contacts/:id` | Get single contact with account info |
| POST | `/v1/contacts` | Create a new contact |
| PUT | `/v1/contacts/:id` | Update contact properties |

**Example: Get decision-makers at target accounts**
```bash
GET /v1/contacts?account_id=acc_123&seniority=executive
```

### Campaigns

Monitor campaign performance and pull analytics into your dashboards.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/campaigns` | List all campaigns |
| GET | `/v1/campaigns/:id` | Get campaign details and settings |
| GET | `/v1/campaigns/:id/analytics` | Get performance metrics |

**Example: Get campaign conversion data**
```bash
GET /v1/campaigns/camp_123/analytics?start_date=2026-01-01
```

### Visitors

Access real-time visitor identification data for alerts and workflows.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/visitors` | List identified visitors |
| GET | `/v1/visitors/:id` | Get visitor details with page views |

**Example: Get today's visitors**
```bash
GET /v1/visitors?created_after=2026-01-16
```

### Target Groups

Manage audience segments for campaigns and reporting.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/groups` | List target groups |
| GET | `/v1/groups/:id` | Get group details and criteria |
| GET | `/v1/groups/:id/members` | Get accounts in the group |
| POST | `/v1/groups` | Create a new target group |

---

## Webhooks

Receive real-time notifications when events occur in Abmatic—no polling required. Build instant alerts, trigger workflows, and keep systems in sync automatically.

### Supported Events

| Event | Description | Use Case |
|-------|-------------|----------|
| `visitor.identified` | New company identified on your site | Alert sales when target accounts visit |
| `contact.revealed` | Contact information revealed | Push new contacts to CRM |
| `campaign.activated` | Campaign went live | Update project management tools |
| `conversion.tracked` | Conversion goal completed | Trigger follow-up workflows |
| `account.engagement_changed` | Engagement score updated | Route hot accounts to sales |

### Webhook Payload

Every webhook includes the event type, timestamp, and relevant data:

```json
{
  "event": "visitor.identified",
  "timestamp": "2026-01-16T12:00:00Z",
  "data": {
    "visitor_id": "vis_123",
    "company": {
      "id": "acc_456",
      "name": "Acme Corp",
      "website": "acme.com",
      "industry": "Technology",
      "employee_count": 500
    },
    "pages_viewed": ["/pricing", "/demo"],
    "engagement_score": 85
  }
}
```

### Setting Up Webhooks

1. Navigate to **Settings** > **API Settings**
2. Enter your webhook endpoint URL
3. Select the events you want to receive
4. Click **Save** and verify with a test event

:::tip Webhook Best Practices
- **Respond quickly**: Return a 200 status within 5 seconds
- **Process async**: Queue heavy processing for background jobs
- **Handle retries**: Abmatic retries failed webhooks 3 times with exponential backoff
- **Verify signatures**: Check the `X-Abmatic-Signature` header for authenticity
:::

---

## SDKs and Libraries

Get started faster with official SDKs for popular languages.

### JavaScript/Node.js

```javascript
const Abmatic = require('abmatic-api');

const client = new Abmatic({ apiKey: process.env.ABMATIC_API_KEY });

// Get high-engagement accounts
const accounts = await client.accounts.list({
  engagement_score_min: 80,
  industry: 'Technology'
});

// Create a contact and associate with account
const contact = await client.contacts.create({
  email: 'john@acme.com',
  firstName: 'John',
  lastName: 'Doe',
  title: 'VP of Engineering',
  accountId: 'acc_123'
});

// Get campaign analytics
const analytics = await client.campaigns.getAnalytics('camp_456', {
  start_date: '2026-01-01',
  end_date: '2026-01-31'
});
```

### Python

```python
import os
from abmatic import AbmaticClient

client = AbmaticClient(api_key=os.environ['ABMATIC_API_KEY'])

# Get high-engagement accounts
accounts = client.accounts.list(
    engagement_score_min=80,
    industry='Technology'
)

# Create a contact and associate with account
contact = client.contacts.create(
    email='john@acme.com',
    first_name='John',
    last_name='Doe',
    title='VP of Engineering',
    account_id='acc_123'
)

# Get campaign analytics
analytics = client.campaigns.get_analytics(
    'camp_456',
    start_date='2026-01-01',
    end_date='2026-01-31'
)
```

---

## Common Use Cases

### Real-Time Sales Alerts

Alert your sales team when target accounts visit your website:

```javascript
// Webhook handler for visitor identification
app.post('/webhooks/abmatic', (req, res) => {
  const { event, data } = req.body;

  if (event === 'visitor.identified' && data.engagement_score > 70) {
    sendSlackAlert(`🎯 ${data.company.name} is on your site!`);
  }

  res.status(200).send('OK');
});
```

### CRM Sync

Keep your CRM updated with the latest account engagement:

```python
# Sync high-engagement accounts to Salesforce
accounts = client.accounts.list(engagement_score_min=50)

for account in accounts:
    salesforce.update_account(
        website=account.website,
        abmatic_score=account.engagement_score,
        last_visit=account.last_seen_at
    )
```

### Custom Analytics Dashboard

Pull campaign data into your BI tools:

```javascript
// Export campaign performance to data warehouse
const campaigns = await client.campaigns.list();

for (const campaign of campaigns) {
  const analytics = await client.campaigns.getAnalytics(campaign.id);
  await dataWarehouse.insert('campaign_metrics', {
    campaign_id: campaign.id,
    impressions: analytics.impressions,
    conversions: analytics.conversions,
    date: new Date()
  });
}
```

---

## Best Practices

| Practice | Why It Matters |
|----------|----------------|
| **Cache frequently accessed data** | Reduce API calls and stay within rate limits |
| **Use webhooks instead of polling** | Get real-time updates without wasting requests |
| **Implement exponential backoff** | Handle rate limits and transient errors gracefully |
| **Paginate large requests** | Avoid timeouts and memory issues |
| **Secure your API key** | Protect your account data from unauthorized access |

---

## Getting Help

| Resource | Contact |
|----------|---------|
| API Issues | support@abmatic.ai |
| Feature Requests | support@abmatic.ai |
| Status Page | [status.abmatic.ai](https://status.abmatic.ai) |

:::tip Need Custom Integration Help?
Our solutions team can help design and implement custom integrations for Enterprise customers. Contact your account manager to schedule a consultation.
:::
