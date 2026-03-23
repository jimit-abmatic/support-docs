---
id: api-accounts
title: Accounts API
sidebar_label: Accounts
sidebar_position: 2
---

# Accounts API

Retrieve your ABM account data programmatically. The Accounts API gives you access to all company accounts in your workspace — including firmographic data, engagement scores, CRM IDs, website activity metrics, and more.

:::note API Access
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

---

## List Accounts

```
GET /v1/accounts
```

Returns a paginated list of accounts in your workspace.

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
| `fields` | string | _(default set)_ | Comma-separated list of fields to include |
| `sort_by` | string | `website` | Field to sort by (see Sortable Fields) |
| `order_by` | string | `asc` | Sort direction: `asc` or `desc` |

### Default Fields

When no `fields` parameter is provided, the following fields are returned:

```
website, name, industry, employee_count, size, location.name,
location.country, linkedin_url, logo, engagement_score, fit_score,
overall_score, created_at, updated_at
```

### Sortable Fields

The `sort_by` parameter accepts these fields:

`website`, `name`, `industry`, `employee_count`, `engagement_score`, `fit_score`, `overall_score`, `created_at`, `updated_at`, `last_seen`

---

## Example Requests

### Basic — Default Fields

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Select Specific Fields

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts?fields=website,name,industry,engagement_score,employee_count,linkedin_url" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Paginate Through Results

```bash
# Page 1 (first 25 results)
curl -X GET "https://api.abmatic.ai/v1/accounts?page=1&per_page=25" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Page 2 (next 25 results)
curl -X GET "https://api.abmatic.ai/v1/accounts?page=2&per_page=25" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Sort by Engagement Score (Descending)

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts?sort_by=engagement_score&order_by=desc&per_page=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Export All Fields

```bash
curl -X GET "https://api.abmatic.ai/v1/accounts?fields=website,name,display_name,industry,sub_industry,employee_count,size,inferred_revenue,founded,type,summary,headline,linkedin_url,twitter_url,facebook_url,linkedin_follower_count,location.name,location.country,location.city,location.state,location.region,engagement_score,fit_score,overall_score,website_engagement_score,linkedin_engagement_score,temperature,last_seen,created_at,updated_at,salesforce_id,hubspot_id,pipedrive_id&per_page=100" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Response

```json
{
  "data": [
    {
      "website": "acme.com",
      "name": "Acme Corporation",
      "industry": "Technology",
      "employee_count": 500,
      "size": "201-500",
      "location.name": "San Francisco, California, United States",
      "location.country": "United States",
      "linkedin_url": "https://linkedin.com/company/acme",
      "logo": "https://logo.clearbit.com/acme.com",
      "engagement_score": 85,
      "fit_score": 72,
      "overall_score": 78,
      "created_at": "2025-06-15T10:30:00.000Z",
      "updated_at": "2026-03-20T14:22:00.000Z"
    },
    {
      "website": "globex.io",
      "name": "Globex Inc",
      "industry": "Software",
      "employee_count": 1200,
      "size": "1001-5000",
      "location.name": "New York, New York, United States",
      "location.country": "United States",
      "linkedin_url": "https://linkedin.com/company/globex",
      "logo": "https://logo.clearbit.com/globex.io",
      "engagement_score": 62,
      "fit_score": 88,
      "overall_score": 75,
      "created_at": "2025-09-01T08:00:00.000Z",
      "updated_at": "2026-03-18T11:45:00.000Z"
    }
  ],
  "pagination": {
    "total": 1250,
    "page": 1,
    "per_page": 50,
    "total_pages": 25
  },
  "meta": {
    "request_id": "a1b2c3d4e5f6"
  }
}
```

---

## Available Fields

Below is the complete list of fields you can request via the `fields` parameter, organized by category. Fields marked with **Enriched** come from third-party firmographic data enrichment. Fields marked with **Abmatic** are computed by Abmatic from your visitor tracking, campaigns, and integrations.

### Basic Info

Firmographic data from third-party enrichment.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `website` | string | Enriched | Primary company domain. Used as the unique account identifier. |
| `name` | string | Enriched | Lowercase company name, not guaranteed unique across companies. |
| `display_name` | string | Enriched | Properly capitalized company name using the company's self-reported name. |
| `companyName` | string | Abmatic | Company name as entered in Abmatic (may differ from enriched name). |
| `industry` | string | Enriched | Self-reported industry from a canonical industry list (e.g., "computer software", "financial services"). |
| `sub_industry` | string | Enriched | More specific industry classification within the primary industry. |
| `type` | string | Enriched | Company type: `public`, `private`, `public_subsidiary`, `private_subsidiary`, `nonprofit`, or `government`. |
| `headline` | string | Enriched | Short company description, max 300 characters. |
| `summary` | string | Enriched | Longer company description, max 1000 characters. |
| `founded` | integer | Enriched | Founding year of the company (e.g., `2015`). |
| `ticker` | string | Enriched | Stock ticker symbol, uppercase. Only present for publicly traded companies. |
| `logo` | string | Abmatic | URL to the company's logo image. |

### Scoring & Engagement

Scores computed by Abmatic based on visitor behavior, ad engagement, and AI interactions.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `engagement_score` | float | Abmatic | Overall engagement score (0–100) combining website visits, ad clicks, form fills, and chat interactions. |
| `website_engagement_score` | float | Abmatic | Engagement score based solely on website activity (sessions, page views, time on site, scroll depth). |
| `linkedin_engagement_score` | float | Abmatic | Engagement score based on LinkedIn ad interactions (impressions, clicks, conversions). |
| `agentic_chat_engagement_score` | float | Abmatic | Engagement score from AI chat widget interactions. |
| `third_party_intent_score` | float | Abmatic | Intent signals aggregated from third-party data sources. |
| `fit_score` | float | Abmatic | Ideal Customer Profile (ICP) fit score based on firmographic match (industry, size, revenue, location). |
| `overall_score` | float | Abmatic | Combined score blending engagement and fit scores. |
| `pmf_score` | float | Abmatic | Product-market fit score measuring alignment between the account's profile and your product offering. |
| `temperature` | string | Abmatic | Account temperature classification: `hot`, `warm`, or `cold`, based on recent engagement activity. |
| `last_turned_hot_at` | datetime | Abmatic | Timestamp when the account's temperature last changed to "hot". |

### Company Size & Financials

Company sizing and financial data from third-party enrichment.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `employee_count` | integer | Enriched | Current number of employees based on the count of profiles associated with the company. |
| `no_of_employees` | integer | Enriched | Alternate employee count field (same source, legacy naming). |
| `size` | string | Enriched | Self-reported employee range: `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1001-5000`, `5001-10000`, or `10001+`. |
| `inferred_revenue` | string | Enriched | Estimated annual revenue range in USD, inferred from employee count and industry benchmarks. |
| `total_funding_raised` | float | Enriched | Cumulative amount of disclosed funding raised by the company, in USD. |
| `number_funding_rounds` | integer | Enriched | Total number of disclosed funding rounds announced by the company. |
| `latest_funding_stage` | string | Enriched | Stage of the most recent funding event (e.g., `seed`, `series_a`, `series_b`, `ipo`). |
| `last_funding_date` | string | Enriched | Date of the company's most recent funding event (YYYY-MM-DD). |
| `average_employee_tenure` | float | Enriched | Average number of years employees have worked at the company. |

### Location

Headquarters location from third-party enrichment.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `location` | object | Enriched | Full headquarters location object containing all subfields below. |
| `location.name` | string | Enriched | Fully formatted location string (e.g., "San Francisco, California, United States"). |
| `location.country` | string | Enriched | Country name (e.g., "united states"). |
| `location.state` | string | Enriched | State or province name. |
| `location.city` | string | Enriched | City name. |
| `location.locality` | string | Enriched | City or locality name (more granular than city in some regions). |
| `location.region` | string | Enriched | State, province, or administrative region. |
| `location.continent` | string | Enriched | Continent name (e.g., "north america"). |
| `location.metro` | string | Enriched | Metropolitan area (e.g., "san francisco, california"). |
| `location.postal_code` | string | Enriched | Postal or ZIP code. |
| `location.street_address` | string | Enriched | Street address of the headquarters. |
| `location.address_line_2` | string | Enriched | Additional address information (suite, floor, etc.). |
| `location.geo` | string | Enriched | Geographic coordinates in "latitude,longitude" format. |
| `city` | string | Abmatic | City name (alternate source). |
| `countryShort` | string | Abmatic | Two-letter country code (e.g., "US"). |
| `countryLong` | string | Abmatic | Full country name (e.g., "United States"). |

### Social & Web

Social media presence from third-party enrichment.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `linkedin_url` | string | Enriched | Main LinkedIn company profile URL. |
| `linkedin_id` | string | Enriched | LinkedIn numeric company ID. |
| `linkedin_slug` | string | Enriched | LinkedIn URL slug (the part after `/company/`). |
| `linkedin_follower_count` | integer | Enriched | Number of LinkedIn followers. |
| `twitter_url` | string | Enriched | Main Twitter/X profile URL. |
| `facebook_url` | string | Enriched | Main Facebook page URL. |
| `abmatic_link` | string | Abmatic | Direct link to the account's profile in Abmatic. |

### CRM Integration IDs

IDs synced from your connected CRM integrations.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `salesforce_id` | string | CRM Sync | Salesforce Account record ID (18-character). |
| `salesforce_account_id` | string | CRM Sync | Salesforce Account ID (alternate field, same value). |
| `salesforce_ownerId` | string | CRM Sync | Salesforce User ID of the account owner. |
| `hubspot_id` | string | CRM Sync | HubSpot Company record ID. |
| `hubspot_ownerId` | string | CRM Sync | HubSpot User ID of the company owner. |
| `pipedrive_id` | string | CRM Sync | Pipedrive Organization record ID. |
| `primary_outreach_id` | string | CRM Sync | Outreach Account record ID. |
| `outreach_ownerId` | string | CRM Sync | Outreach User ID of the account owner. |
| `duplicate_salesforce_ids` | array | CRM Sync | Additional Salesforce Account IDs if the account maps to multiple Salesforce records. |
| `duplicate_hubspot_ids` | array | CRM Sync | Additional HubSpot Company IDs if the account maps to multiple HubSpot records. |
| `external_id` | string | CRM Sync | Generic external system ID for custom integrations. |

### Website Performance (Rolling Windows)

Visitor activity metrics computed by Abmatic from your website tracking script. Available in 7-day, 30-day, and 90-day rolling windows.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `last_7_days_sessions` | integer | Abmatic | Total browsing sessions from this account in the last 7 days. |
| `last_7_days_visitors` | integer | Abmatic | Unique visitors from this account in the last 7 days. |
| `last_7_days_page_views` | integer | Abmatic | Total page views from this account in the last 7 days. |
| `last_7_days_unique_page_views` | integer | Abmatic | Unique pages viewed by this account in the last 7 days. |
| `last_7_days_time_on_page` | float | Abmatic | Average time spent on page in seconds (last 7 days). |
| `last_7_days_form_submissions` | integer | Abmatic | Number of form submissions from this account in the last 7 days. |
| `last_7_days_avg_scroll_depth` | float | Abmatic | Average scroll depth percentage across all page views (last 7 days). |
| `last_30_days_sessions` | integer | Abmatic | Total browsing sessions from this account in the last 30 days. |
| `last_30_days_visitors` | integer | Abmatic | Unique visitors from this account in the last 30 days. |
| `last_30_days_page_views` | integer | Abmatic | Total page views from this account in the last 30 days. |
| `last_30_days_unique_page_views` | integer | Abmatic | Unique pages viewed by this account in the last 30 days. |
| `last_30_days_time_on_page` | float | Abmatic | Average time spent on page in seconds (last 30 days). |
| `last_30_days_form_submissions` | integer | Abmatic | Number of form submissions from this account in the last 30 days. |
| `last_30_days_avg_scroll_depth` | float | Abmatic | Average scroll depth percentage across all page views (last 30 days). |
| `last_90_days_sessions` | integer | Abmatic | Total browsing sessions from this account in the last 90 days. |
| `last_90_days_visitors` | integer | Abmatic | Unique visitors from this account in the last 90 days. |
| `last_90_days_page_views` | integer | Abmatic | Total page views from this account in the last 90 days. |
| `last_90_days_unique_page_views` | integer | Abmatic | Unique pages viewed by this account in the last 90 days. |
| `last_90_days_time_on_page` | float | Abmatic | Average time spent on page in seconds (last 90 days). |
| `last_90_days_form_submissions` | integer | Abmatic | Number of form submissions from this account in the last 90 days. |
| `last_90_days_avg_scroll_depth` | float | Abmatic | Average scroll depth percentage across all page views (last 90 days). |

### LinkedIn Advertising

LinkedIn ad engagement metrics synced from your connected LinkedIn Ads account. Available in 7-day, 30-day, 60-day, and 90-day rolling windows.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `linkedin_last_7_days_impressions` | integer | LinkedIn Ads | Number of times your LinkedIn ads were shown to people at this account (last 7 days). |
| `linkedin_last_7_days_clicks` | integer | LinkedIn Ads | Number of clicks on your LinkedIn ads by people at this account (last 7 days). |
| `linkedin_last_7_days_externalWebsiteConversions` | integer | LinkedIn Ads | Number of LinkedIn ad-attributed website conversions from this account (last 7 days). |
| `linkedin_last_30_days_impressions` | integer | LinkedIn Ads | LinkedIn ad impressions (last 30 days). |
| `linkedin_last_30_days_clicks` | integer | LinkedIn Ads | LinkedIn ad clicks (last 30 days). |
| `linkedin_last_30_days_externalWebsiteConversions` | integer | LinkedIn Ads | LinkedIn ad-attributed conversions (last 30 days). |
| `linkedin_last_60_days_impressions` | integer | LinkedIn Ads | LinkedIn ad impressions (last 60 days). |
| `linkedin_last_60_days_clicks` | integer | LinkedIn Ads | LinkedIn ad clicks (last 60 days). |
| `linkedin_last_60_days_externalWebsiteConversions` | integer | LinkedIn Ads | LinkedIn ad-attributed conversions (last 60 days). |
| `linkedin_last_90_days_impressions` | integer | LinkedIn Ads | LinkedIn ad impressions (last 90 days). |
| `linkedin_last_90_days_clicks` | integer | LinkedIn Ads | LinkedIn ad clicks (last 90 days). |
| `linkedin_last_90_days_externalWebsiteConversions` | integer | LinkedIn Ads | LinkedIn ad-attributed conversions (last 90 days). |
| `linkedin_last_visited_at` | datetime | LinkedIn Ads | Timestamp of the most recent LinkedIn ad interaction by someone at this account. |
| `linkedin_recently_visited_campaign_id` | string | LinkedIn Ads | ID of the LinkedIn campaign that most recently received engagement from this account. |
| `linkedin_recently_visited_campaign_name` | string | LinkedIn Ads | Name of the LinkedIn campaign that most recently received engagement from this account. |

### Visitor Tracking

Visitor identification data from Abmatic's reverse-IP identification and tracking script.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `last_seen` | datetime | Abmatic | Timestamp of the most recent visit to your website from someone at this account. |
| `confidence` | float | Abmatic | Confidence level (0–1) of the company identification from reverse-IP lookup. |
| `ip_source` | string | Abmatic | Data provider used for the reverse-IP identification. |
| `visited_pages` | array | Abmatic | List of page URLs visited by people from this account. |
| `visitors_count` | integer | Abmatic | Total number of unique visitors identified from this account. |

### UTM Parameters

UTM tracking parameters captured from the most recent visit by this account.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `utm_params.utm_source` | string | Abmatic | Traffic source (e.g., "google", "linkedin", "newsletter"). |
| `utm_params.utm_medium` | string | Abmatic | Marketing medium (e.g., "cpc", "email", "social"). |
| `utm_params.utm_campaign` | string | Abmatic | Campaign name or identifier. |
| `utm_params.utm_term` | string | Abmatic | Paid search keyword or term. |

### AI Chat Engagement

Data from Abmatic's AI chat widget (Clara) interactions with visitors from this account.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `chat_last_interaction_at` | datetime | Abmatic | Timestamp of the most recent AI chat interaction with someone from this account. |
| `chat_has_high_intent` | boolean | Abmatic | Whether the AI detected high purchase intent during chat conversations (e.g., pricing questions, demo requests). |
| `chat_summary` | string | Abmatic | AI-generated summary of all chat conversations with visitors from this account. |

### Conversions

Conversion goal tracking from Abmatic's conversion events (form fills, button clicks, page visits, custom events).

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `last_7_days_conversions` | integer | Abmatic | Total conversion events attributed to this account in the last 7 days. |
| `last_30_days_conversions` | integer | Abmatic | Total conversion events attributed to this account in the last 30 days. |
| `last_90_days_conversions` | integer | Abmatic | Total conversion events attributed to this account in the last 90 days. |
| `conversion_events` | array | Abmatic | List of individual conversion events with event name, timestamp, and page URL. |
| `last_conversion_at` | datetime | Abmatic | Timestamp of the most recent conversion event from this account. |

### Enrichment & Metadata

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `is_enriched` | boolean | Abmatic | Whether this account has been enriched with third-party firmographic data. |
| `enriched_at` | datetime | Abmatic | Timestamp of the most recent enrichment for this account. |
| `source` | string | Abmatic | How this account was added: `ip_reveal`, `csv_import`, `crm_sync`, `manual`, or `enrichment`. |
| `created_at` | datetime | Abmatic | Timestamp when this account was first added to your workspace. |
| `updated_at` | datetime | Abmatic | Timestamp of the most recent update to any field on this account. |
| `tags` | array | Enriched | Lowercase tags associated with the company (e.g., "saas", "b2b", "enterprise"). |

### Classification

Industry classification codes and corporate hierarchy from third-party enrichment.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `NAICS Code` | string | Enriched | Six-digit North American Industry Classification System code. |
| `naicsDesc` | string | Enriched | Human-readable description of the NAICS national industry classification. |
| `naicsGroup` | string | Enriched | NAICS industry group (first four digits classification). |
| `gics_sector` | string | Enriched | Global Industry Classification Standard sector. |
| `tradeName` | string | Enriched | Trade name or "doing business as" (DBA) name, if different from the legal name. |
| `immediate_parent` | string | Enriched | Name of the immediate parent company (for subsidiaries). |
| `ultimate_parent` | string | Enriched | Name of the top-level parent company in the corporate hierarchy. |
| `mic_exchange` | string | Enriched | Market Identifier Code for the stock exchange where the company is listed (e.g., "XNAS" for NASDAQ). |

### Custom Fields

Custom fields `field_01` through `field_30` are available. These correspond to the custom field labels configured in your account settings under **Settings > Custom Fields**. Values can be set manually, via CSV import, or via CRM sync.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `field_01` ... `field_30` | string | Abmatic | User-defined custom fields. Labels and usage vary by account. |

### Other

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `associated_account_collections` | string | Abmatic | Comma-separated list of Target Group names this account belongs to. |

---

## Error Responses

### 400 — Invalid Request

```json
{
  "error": "invalid_request",
  "message": "Invalid fields: nonexistent_field",
  "meta": { "request_id": "a1b2c3d4e5f6" }
}
```

### 401 — Unauthorized

```json
{
  "error": "unauthorized",
  "message": "Invalid or missing API key"
}
```

### 403 — Forbidden

```json
{
  "error": "forbidden",
  "message": "API access requires an Enterprise plan"
}
```

### 429 — Rate Limited

```json
{
  "error": "rate_limit_exceeded",
  "message": "Too many requests. Please wait before retrying.",
  "retry_after": 60
}
```

---

## Rate Limiting

Public API endpoints are limited to **100 requests per minute** per IP address.

Every response includes rate limit headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704672000
```

:::tip Best Practice
Implement exponential backoff in your integration. Start with a 1-second delay, then double it with each retry (1s, 2s, 4s, etc.).
:::

---

## Common Use Cases

### Export All Accounts to CSV

```python
import requests
import csv

API_KEY = "your_api_key"
BASE_URL = "https://api.abmatic.ai/v1"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

fields = "website,name,industry,employee_count,engagement_score,fit_score,location.country,linkedin_url"
all_accounts = []
page = 1

while True:
    response = requests.get(
        f"{BASE_URL}/accounts",
        headers=HEADERS,
        params={"page": page, "per_page": 100, "fields": fields}
    )
    data = response.json()
    all_accounts.extend(data["data"])

    if page >= data["pagination"]["total_pages"]:
        break
    page += 1

# Write to CSV
with open("accounts_export.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fields.split(","))
    writer.writeheader()
    writer.writerows(all_accounts)

print(f"Exported {len(all_accounts)} accounts")
```

### Sync High-Engagement Accounts to CRM

```python
import requests

API_KEY = "your_api_key"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

response = requests.get(
    "https://api.abmatic.ai/v1/accounts",
    headers=HEADERS,
    params={
        "fields": "website,name,engagement_score,salesforce_id,hubspot_id",
        "sort_by": "engagement_score",
        "order_by": "desc",
        "per_page": 50,
    }
)

accounts = response.json()["data"]
for account in accounts:
    if account.get("engagement_score", 0) >= 70:
        # Sync to your CRM
        print(f"High engagement: {account['name']} ({account['engagement_score']})")
```

### Build a Custom Dashboard

```javascript
const API_KEY = process.env.ABMATIC_API_KEY;

async function getAccountMetrics() {
  const response = await fetch(
    'https://api.abmatic.ai/v1/accounts?fields=website,name,engagement_score,fit_score,last_30_days_sessions,last_30_days_conversions&sort_by=engagement_score&order_by=desc&per_page=20',
    {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    }
  );

  const { data, pagination } = await response.json();

  console.log(`Top 20 accounts by engagement (${pagination.total} total):`);
  data.forEach(account => {
    console.log(`  ${account.name}: score=${account.engagement_score}, sessions=${account.last_30_days_sessions || 0}`);
  });
}
```
