---
id: api-visitors
title: Visitors API
sidebar_label: Visitors
sidebar_position: 4
---

# Visitors API

Retrieve individual website sessions programmatically. The Visitors API returns every session the Abmatic AI script recorded on your site, with the pages viewed, engagement metrics, a session score, and (when Company Reveal is enabled) the company the visitor was identified as.

Use it to pull sessions into a warehouse or dashboard, to look up the session behind a conversion, or to find out which company is on your site right now.

:::note API Access
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

:::info Company-level only
Sessions carry **company-level** reveal data. Person-level data (name, work email, job title) is never returned by this endpoint. To work with identified people, use the [Contacts API](/api/api-contacts).
:::

---

## List Visitors

```
GET /v1/visitors
```

Returns a paginated list of sessions, newest first.

### Authentication

Include your API key in the `Authorization` header:

```bash
Authorization: Bearer YOUR_API_KEY
```

See the [API Keys](/api/api-keys) guide for how to generate and manage your key.

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | `1` | Page number (1-indexed) |
| `per_page` | integer | `50` | Results per page (max `100`) |
| `fields` | string | _(all fields)_ | Comma-separated list of fields to include |
| `sort_by` | string | `createdAt` | Field to sort by (see Sortable Fields) |
| `order_by` | string | `desc` | Sort direction: `asc` or `desc` |
| `account` | string | | Only sessions from this company. Pass the company website or domain, for example `acme.com`. Requires Company Reveal. |
| `since` | string | | Only sessions that started at or after this ISO-8601 date or datetime (`2026-08-01` or `2026-08-01T09:30:00Z`). Absent means all history. |

### Sortable Fields

The `sort_by` parameter accepts these fields:

`createdAt`, `updatedAt`, `firstVisitedAt`, `score`, `source`, `sessionId`

---

## Get One Visitor

```
GET /v1/visitors/{session_id}
```

Returns a single session by its `sessionId`. Returns `404 not_found` if the session does not exist in your workspace.

:::tip Session id in the browser
The Abmatic AI script exposes the current session id on the page as `window.abmatic.state.visitId`. A chatbot, form, or analytics tag running on your site can read it and pass it to your backend, which can then call this endpoint to fetch the company behind the session.
:::

---

## Example Requests

### Basic — Newest Sessions

```bash
curl -X GET "https://api.abmatic.ai/v1/visitors" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Sessions Since a Date

```bash
curl -X GET "https://api.abmatic.ai/v1/visitors?since=2026-09-01T00:00:00Z&per_page=100" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Sessions From One Company

```bash
curl -X GET "https://api.abmatic.ai/v1/visitors?account=acme.com" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### One Session by Id

```bash
curl -X GET "https://api.abmatic.ai/v1/visitors/7f3a2c9e-5b1d-4e8a-9c6f-2d4b8a1e3f70" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Select Specific Fields

```bash
curl -X GET "https://api.abmatic.ai/v1/visitors?fields=sessionId,createdAt,score,companyRevealData.company_name,companyRevealData.website,aggregatedPageViewsData.pageUrls" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Response

```json
{
  "data": [
    {
      "sessionId": "7f3a2c9e-5b1d-4e8a-9c6f-2d4b8a1e3f70",
      "createdAt": "2026-09-28T14:02:11.000Z",
      "updatedAt": "2026-09-28T14:09:40.000Z",
      "firstVisitedAt": "2026-06-15T10:30:00.000Z",
      "source": "organic",
      "is_new_visitor": false,
      "score": 42,
      "aggregatedPageViewsData.timeOnPage": 318,
      "aggregatedPageViewsData.formsCount": 0,
      "aggregatedPageViewsData.scrollDepthPercentage": 85,
      "aggregatedPageViewsData.pageUrls": [
        "https://www.example.com/pricing",
        "https://www.example.com/product-tours/overview"
      ],
      "companyRevealData.company_name": "Acme Corporation",
      "companyRevealData.trade_name": "Acme",
      "companyRevealData.website": "acme.com",
      "companyRevealData.industry": "computer software",
      "companyRevealData.size": "201-500",
      "companyRevealData.city": "San Francisco",
      "companyRevealData.region": "California",
      "companyRevealData.country_short": "US"
    }
  ],
  "pagination": {
    "total": 9120,
    "page": 1,
    "per_page": 50,
    "total_pages": 183
  },
  "meta": {
    "request_id": "a1b2c3d4e5f6",
    "filters": {
      "account": null,
      "since": null
    },
    "sort": {
      "sort_by": "createdAt",
      "order_by": "desc"
    }
  }
}
```

If Company Reveal is not enabled on your account, the `companyRevealData.*` fields are omitted and `meta` carries a `note` explaining why.

---

## Available Fields

### Session

| Field | Type | Description |
|-------|------|-------------|
| `sessionId` | string | Unique session identifier. Matches `window.abmatic.state.visitId` in the browser. |
| `createdAt` | datetime | When the session started. |
| `updatedAt` | datetime | When the session was last updated. |
| `firstVisitedAt` | datetime | When this visitor was first seen on your site, across all sessions. |
| `source` | string | Traffic source of the session. |
| `is_new_visitor` | boolean | `true` if this was the visitor's first session. |
| `score` | float | Engagement score for the session. |

### Page Views

| Field | Type | Description |
|-------|------|-------------|
| `aggregatedPageViewsData.pageUrls` | array of strings | Pages viewed during the session, in order. |
| `aggregatedPageViewsData.timeOnPage` | float | Total time on page in seconds. |
| `aggregatedPageViewsData.scrollDepthPercentage` | float | Deepest scroll reached, as a percentage. |
| `aggregatedPageViewsData.formsCount` | integer | Forms submitted during the session. |

### Company Reveal

Returned only when Company Reveal is enabled on your account.

| Field | Type | Description |
|-------|------|-------------|
| `companyRevealData.company_name` | string | Identified company name. |
| `companyRevealData.trade_name` | string | Company trade name. |
| `companyRevealData.website` | string | Company website. Matches the `website` identifier in `/v1/accounts` and the `account` filter on this endpoint. |
| `companyRevealData.industry` | string | Company industry. |
| `companyRevealData.size` | string | Company size band, for example `201-500`. |
| `companyRevealData.city` | string | Company city. |
| `companyRevealData.region` | string | Company state or region. |
| `companyRevealData.country_short` | string | Two-letter country code. |

---

## Error Responses

| Status | Error | Cause |
|--------|-------|-------|
| `400` | `invalid_request` | Unknown field in `fields`, invalid `sort_by`, malformed `since`, or an `account` value that is not a website or domain. The `message` names the problem. |
| `401` | `unauthorized` | Missing or invalid API key. |
| `403` | `forbidden` | Your plan does not include API access. |
| `404` | `not_found` | No session with that `sessionId` in your workspace. |
| `429` | _(plain `Too Many Requests` body)_ | More than 100 requests per minute. Back off and retry. |

---

## Related

- [Contacts API](/api/api-contacts) for identified people and their job titles.
- [Accounts API](/api/api-accounts) for the companies behind these sessions.
