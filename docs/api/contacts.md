---
id: api-contacts
title: Contacts API
sidebar_label: Contacts
sidebar_position: 3
---

# Contacts API

Retrieve the people in your workspace programmatically. The Contacts API returns every contact Abmatic AI knows about: contacts synced from your CRM, people identified on your website by **Contact Reveal**, and ICP contacts Abmatic AI sourced for your accounts. Each contact carries job title, role, seniority, department, employer, LinkedIn profile, and engagement scores.

A common use is **persona lookup**: once your website, chatbot, or app knows a visitor's work email, call this endpoint with `?q=<email>` and read `job_title_role` and `job_title_levels` to decide which message, offer, or nudge to show.

:::note API Access
API access is available on Enterprise plans. Contact support@abmatic.ai to enable API access for your account.
:::

---

## List Contacts

```
GET /v1/contacts
```

Returns a paginated list of contacts in your workspace.

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
| `fields` | string | _(default set)_ | Comma-separated list of fields to include. `work_email` is always included. |
| `sort_by` | string | `work_email` | Field to sort by (see Sortable Fields) |
| `order_by` | string | `asc` | Sort direction: `asc` or `desc` |
| `q` | string | | Case-insensitive substring match on `work_email`, `full_name`, `first_name`, and `last_name`. Pass a full work email to look up one person. |
| `account` | string | | Only contacts at this company. Pass the company website or domain, for example `acme.com` (the same identifier `/v1/accounts` returns as `website`). |
| `job_title_level` | string | | Case-insensitive match on `job_title_levels`, for example `cxo`, `vp`, `director`, `manager`, `senior`, or `entry`. |
| `min_score` | number | | Only contacts with `overall_score` at or above this value |
| `max_score` | number | | Only contacts with `overall_score` at or below this value |
| `since` | string | | Only contacts updated at or after this ISO-8601 date or datetime (`2026-08-01` or `2026-08-01T09:30:00Z`) |
| `until` | string | | Only contacts updated before this ISO-8601 date or datetime (exclusive) |

### Default Fields

When no `fields` parameter is provided, the following fields are returned:

```
work_email, full_name, first_name, last_name, job_title, job_title_role,
job_title_levels, department, job_company_name, job_company_website,
job_company_industry, linkedin_url, location_name, location_country,
engagement_score, overall_score, created_at, updated_at
```

### Sortable Fields

The `sort_by` parameter accepts these fields:

`work_email`, `full_name`, `first_name`, `last_name`, `job_title`, `job_title_role`, `job_company_name`, `job_company_industry`, `engagement_score`, `overall_score`, `created_at`, `updated_at`, `last_seen`

---

## Example Requests

### Basic — Default Fields

```bash
curl -X GET "https://api.abmatic.ai/v1/contacts" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Look Up One Person by Work Email

```bash
curl -X GET "https://api.abmatic.ai/v1/contacts?q=jane.doe@acme.com&fields=full_name,job_title,job_title_role,job_title_levels,department" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Senior Decision Makers Only

```bash
curl -X GET "https://api.abmatic.ai/v1/contacts?job_title_level=vp&sort_by=overall_score&order_by=desc&per_page=25" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Everyone at One Company

```bash
curl -X GET "https://api.abmatic.ai/v1/contacts?account=acme.com" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Contacts Updated in a Date Window

```bash
curl -X GET "https://api.abmatic.ai/v1/contacts?since=2026-08-01&until=2026-09-01&sort_by=updated_at&order_by=desc" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Paginate Through Results

```bash
# Page 1 (first 100 results)
curl -X GET "https://api.abmatic.ai/v1/contacts?page=1&per_page=100" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Page 2 (next 100 results)
curl -X GET "https://api.abmatic.ai/v1/contacts?page=2&per_page=100" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Response

```json
{
  "data": [
    {
      "work_email": "jane.doe@acme.com",
      "full_name": "Jane Doe",
      "first_name": "Jane",
      "last_name": "Doe",
      "job_title": "VP of Marketing",
      "job_title_role": "marketing",
      "job_title_levels": ["vp"],
      "department": "Marketing",
      "job_company_name": "Acme Corporation",
      "job_company_website": "acme.com",
      "job_company_industry": "computer software",
      "linkedin_url": "https://linkedin.com/in/janedoe",
      "location_name": "San Francisco, California, United States",
      "location_country": "United States",
      "engagement_score": 71,
      "overall_score": 78,
      "created_at": "2026-02-10T16:04:00.000Z",
      "updated_at": "2026-09-28T08:12:00.000Z"
    }
  ],
  "pagination": {
    "total": 1840,
    "page": 1,
    "per_page": 50,
    "total_pages": 37
  },
  "meta": {
    "request_id": "a1b2c3d4e5f6",
    "filters": {
      "q": "jane.doe@acme.com",
      "account": null,
      "job_title_level": null,
      "min_score": null,
      "max_score": null,
      "since": null,
      "until": null
    },
    "sort": {
      "sort_by": "work_email",
      "order_by": "asc"
    }
  }
}
```

---

## Available Fields

Below are the fields you can request via the `fields` parameter, organized by category. Fields marked **Enriched** come from third-party people and firmographic enrichment. Fields marked **Abmatic** are computed by Abmatic AI from your visitor tracking, campaigns, and integrations.

### Identity

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `work_email` | string | Abmatic | Work email address. Used as the unique contact identifier and always included in every response. |
| `full_name` | string | Enriched | Full name. |
| `first_name` | string | Enriched | First name. |
| `last_name` | string | Enriched | Last name. |
| `linkedin_url` | string | Enriched | LinkedIn profile URL. |
| `linkedin_username` | string | Enriched | LinkedIn handle. |
| `headline` | string | Enriched | Professional headline from the contact's public profile. |
| `photo_url` | string | Enriched | Profile photo URL. |

### Role & Seniority

These fields describe what the person does and how senior they are. They are the inputs for persona-based personalization.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `job_title` | string | Enriched | Current job title as written, for example "VP of Marketing". |
| `job_title_role` | string | Enriched | Canonical job function, for example `marketing`, `sales`, `engineering`, `finance`, `operations`, `legal`, or `human_resources`. |
| `job_title_sub_role` | string | Enriched | More specific function within the role, for example `product_marketing` or `devops`. |
| `job_title_levels` | array of strings | Enriched | Seniority levels, for example `cxo`, `vp`, `director`, `manager`, `senior`, `entry`, `owner`, or `partner`. |
| `seniority` | string | Enriched | Seniority label from an alternate enrichment source, when available. |
| `department` | string | Enriched | Department name. |
| `departments` | array of strings | Enriched | All departments the contact is associated with, when available. |
| `job_start_date` | string | Enriched | When the contact started their current role. |
| `job_last_changed` | datetime | Enriched | When the contact's job information last changed. |

### Employer

Firmographic data for the contact's current company.

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `job_company_name` | string | Enriched | Employer name. |
| `job_company_website` | string | Enriched | Employer website. Matches the `website` identifier in `/v1/accounts`. |
| `job_company_industry` | string | Enriched | Employer industry. |
| `job_company_sub_industry` | string | Enriched | Employer sub-industry. |
| `job_company_size` | string | Enriched | Employer size band, for example `201-500`. |
| `job_company_employee_count` | integer | Enriched | Employer employee count. |
| `job_company_founded` | integer | Enriched | Employer founding year. |
| `job_company_linkedin_url` | string | Enriched | Employer LinkedIn page. |
| `job_company_location_name` | string | Enriched | Employer headquarters location. |
| `job_company_location_country` | string | Enriched | Employer headquarters country. |

### Location

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `location_name` | string | Enriched | Full location, for example "San Francisco, California, United States". |
| `location_locality` | string | Enriched | City. |
| `location_region` | string | Enriched | State or region. |
| `location_country` | string | Enriched | Country. |
| `location_continent` | string | Enriched | Continent. |
| `time_zone` | string | Enriched | Time zone, when available. |

### Scoring & Engagement

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `engagement_score` | float | Abmatic | Overall engagement score (0 to 100) across website, ads, and chat activity. |
| `website_engagement_score` | float | Abmatic | Engagement score from website activity only. |
| `hubspot_engagement_score` | float | Abmatic | Engagement score from HubSpot activity, when HubSpot is connected. |
| `agentic_chat_engagement_score` | float | Abmatic | Engagement score from the contact's Agentic Chat conversations. |
| `overall_score` | float | Abmatic | Combined score blending engagement and fit. |
| `pmf_score` | float | Abmatic | Product-market fit score. |
| `temperature` | string | Abmatic | `hot`, `warm`, or `cold`, based on recent engagement. |
| `last_turned_hot_at` | datetime | Abmatic | When the contact last became hot. |
| `account_engagement_score` | float | Abmatic | Engagement score of the contact's account. |
| `account_temperature` | string | Abmatic | Temperature of the contact's account. |

### Website Activity (Rolling Windows)

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `last_seen` | datetime | Abmatic | Last time the contact was seen on your website. |
| `visited_pages` | array | Abmatic | Pages the contact has visited. |
| `visitors_count` | integer | Abmatic | Number of sessions attributed to the contact. |
| `last_7_days_sessions` | integer | Abmatic | Sessions in the last 7 days. Also available as `last_30_days_sessions` and `last_90_days_sessions`. |
| `last_7_days_page_views` | integer | Abmatic | Page views in the last 7 days. Also available for 30 and 90 days. |
| `last_7_days_time_on_page` | float | Abmatic | Time on page in the last 7 days. Also available for 30 and 90 days. |
| `last_7_days_form_submissions` | integer | Abmatic | Form submissions in the last 7 days. Also available for 30 and 90 days. |
| `last_7_days_conversions` | integer | Abmatic | Conversions in the last 7 days. Also available for 30 and 90 days. |
| `conversion_events` | array | Abmatic | Conversion events recorded for the contact. |
| `last_conversion_at` | datetime | Abmatic | Most recent conversion. |
| `utm_params.utm_source` | string | Abmatic | UTM source of the contact's first attributed visit. Also `utm_params.utm_medium`, `utm_params.utm_campaign`, and `utm_params.utm_term`. |

### Chat & Meetings

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `chat_last_interaction_at` | datetime | Abmatic | Last Agentic Chat interaction. |
| `chat_intent_level` | string | Abmatic | Intent level inferred from Agentic Chat conversations. |
| `chat_summary` | string | Abmatic | Summary of the contact's Agentic Chat conversations. |
| `demo_booked` | boolean | Abmatic | Whether the contact booked a meeting through Agentic Chat. |
| `demo_booked_at` | datetime | Abmatic | When the meeting was booked. |
| `demo_scheduled_at` | datetime | Abmatic | When the meeting is scheduled for. |

### CRM Integration IDs

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `salesforce_id` | string | Abmatic | Salesforce Contact or Lead ID, when Salesforce is connected. |
| `salesforce_account_id` | string | Abmatic | Salesforce Account ID of the contact's company. |
| `hubspot_id` | string | Abmatic | HubSpot Contact ID, when HubSpot is connected. |
| `hubspot_account_id` | string | Abmatic | HubSpot Company ID of the contact's company. |
| `pipedrive_id` | string | Abmatic | Pipedrive Person ID, when Pipedrive is connected. |
| `lead_source` | string | Abmatic | Lead source as recorded in your CRM. |
| `hubspot_recent_conversion_event_name` | string | Abmatic | Most recent HubSpot conversion event. Also `hubspot_recent_conversion_date`, `hubspot_first_conversion_event_name`, `hubspot_first_conversion_date`, `hubspot_num_conversion_events`, and `hubspot_num_unique_conversion_events`. |

### Custom Fields

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `field_01` to `field_30` | string | Abmatic | Contact custom fields configured in **Settings** > **Custom Fields**. |

### Timestamps

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `created_at` | datetime | Abmatic | When the contact was added to your workspace. |
| `updated_at` | datetime | Abmatic | When the contact was last updated. |
| `reveal_added_at` | datetime | Abmatic | When the contact was identified on your website by Contact Reveal, if applicable. |
| `enriched_at` | datetime | Abmatic | When the contact was last enriched. |

---

## What Is Never Returned

To protect personal privacy, the Contacts API never returns personal (non-work) email addresses, phone numbers, date of birth, gender, internal record IDs, CRM owner details, sync tokens, or pre-personalized outreach message bodies. Requesting one of these in `fields` returns a `400 invalid_request` error.

---

## Error Responses

| Status | Error | Cause |
|--------|-------|-------|
| `400` | `invalid_request` | Unknown field in `fields`, invalid `sort_by`, malformed `since`/`until`, or a non-numeric score bound. The `message` names the problem. |
| `401` | `unauthorized` | Missing or invalid API key. |
| `403` | `forbidden` | Your plan does not include API access. |
| `429` | _(plain `Too Many Requests` body)_ | More than 100 requests per minute. Back off and retry. |

---

## Related

- [Accounts API](/api/api-accounts) for the companies these contacts belong to.
- [Visitors API](/api/api-visitors) for individual website sessions.
- [Contact Reveal settings](/settings/contact-reveal) to control which website visitors are identified as contacts.
