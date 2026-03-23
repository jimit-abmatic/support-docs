---
id: api-overview
title: API Overview
sidebar_label: Overview
sidebar_position: 1
---

# Abmatic API Overview

The Abmatic API gives you programmatic access to your account data — enabling custom workflows, CRM syncs, data exports, and real-time dashboards.

:::note API Access
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

## Quick Start

**Base URL:** `https://api.abmatic.ai/v1`

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Authentication

The Abmatic API uses API keys for secure authentication. See the [API Keys](/docs/api/api-keys) guide for how to generate and manage your key.

### Request Headers

| Header | Value | Required |
|--------|-------|----------|
| `Authorization` | `Bearer YOUR_API_KEY` | Yes |
| `Accept` | `application/json` | Recommended |

---

## Rate Limits

Public API endpoints are limited to **100 requests per minute** per IP address.

If you exceed the limit, you'll receive a `429 Too Many Requests` response. Implement exponential backoff — start with a 1-second delay, then double it with each retry.

---

## Response Format

### List Responses

```json
{
  "data": [
    {"website": "acme.com", "name": "Acme Corp", "engagement_score": 85},
    {"website": "globex.io", "name": "Globex Inc", "engagement_score": 72}
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "per_page": 50,
    "total_pages": 3
  },
  "meta": {
    "request_id": "a1b2c3d4e5f6"
  }
}
```

### Error Responses

```json
{
  "error": "invalid_request",
  "message": "Invalid fields: fake_field",
  "meta": {
    "request_id": "a1b2c3d4e5f6"
  }
}
```

### Error Code Reference

| Status | Error | Description | How to Fix |
|--------|-------|-------------|------------|
| 400 | `invalid_request` | Request was malformed | Check request parameters |
| 401 | `unauthorized` | Invalid or missing API key | Verify your API key is correct |
| 403 | `forbidden` | API key doesn't have access | Check your plan permissions |
| 429 | `rate_limit_exceeded` | Too many requests | Wait and retry with backoff |
| 500 | `internal_error` | Server error | Contact support with request_id |

---

## Pagination

```bash
GET /v1/accounts?page=2&per_page=25
```

| Parameter | Default | Max | Description |
|-----------|---------|-----|-------------|
| `page` | 1 | - | Page number (1-indexed) |
| `per_page` | 50 | 100 | Results per page |

For large exports, use `per_page=100` and iterate through pages. Use the `total_pages` field to know when you've fetched everything.

---

## Available Endpoints

### Accounts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/accounts` | List all accounts with pagination, field selection, and sorting |

See the [Accounts API](/docs/api/api-accounts) reference for full details, available fields, and examples.

---

## Getting Help

| Resource | Contact |
|----------|---------|
| API Issues | support@abmatic.ai |
| Feature Requests | support@abmatic.ai |
