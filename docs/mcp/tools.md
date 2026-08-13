---
id: tools
title: Tool Reference
sidebar_label: Tool Reference
sidebar_position: 3
---

# MCP Tool Reference

The server publishes **28 tools**. Every one of them is read only and maps to a `GET` on the Abmatic AI public API. There are no create, update, or delete tools.

All tools are scoped to the single Abmatic AI account that the API key belongs to. A request for an object that belongs to another account returns "not found", never the object.

---

## Connection and identity

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `ping` | none | `pong`. Confirms the MCP transport is reachable without touching Abmatic AI data or requiring a key. Use it to separate transport problems from key problems. |
| `whoami` | `GET /v1/me` | Account id, name, website, plan tier, and the API key **prefix**. Never the full key. |

---

## Companies and people

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `list_accounts` | `GET /v1/accounts` | Companies Abmatic AI tracks for you, with fit, engagement, and overall scores. Filter by search text, industry, score range, and activity window. Sort by any exposed field. |
| `get_account` | `GET /v1/accounts/{identifier}` | One company by website or Abmatic AI id. |
| `list_contacts` | `GET /v1/contacts` | People associated with your account: work email, name, job title and level, department, company, LinkedIn URL, city and country, engagement and overall score. Filter by company, search text, score range, and last matched date. |
| `get_engagement` | `GET /v1/engagement` | Engagement history (session timeline) for one company website, one contact work email, or one campaign id. Requires `resource_id`. |

---

## Website visitors and reveal

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `list_revealed_companies` | `GET /v1/reveal` | Companies de-anonymized from your website traffic, filterable by date window, name search, and score. Defaults to the last 7 days. Returns an empty result with an explanatory note if reveal is not on your plan. |
| `list_visitors` | `GET /v1/visitors` | Individual website sessions: session id, timestamps, source, visit score, pages viewed, time on page, scroll depth, form counts, and the company level reveal for that session. |
| `get_visitor` | `GET /v1/visitors/{session_id}` | One visitor session by id. |

Visitor sessions never include IP addresses, internal visitor identifiers, or person level reveal fields. See [what is never exposed](#what-is-never-exposed).

---

## Campaigns, audiences, and pipeline

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `list_campaigns` | `GET /v1/campaigns` | Your campaigns (called segments internally), filterable by status, type, name search, and creation window. |
| `get_campaign` | `GET /v1/campaigns/{id}` | One campaign's configuration and summary. |
| `get_campaign_sequence` | `GET /v1/campaigns/{id}/sequence` | SDR sequence steps for a campaign. |
| `get_campaign_sequence_tasks` | `GET /v1/campaigns/{id}/sequence_tasks` | SDR sequence tasks for a campaign. |
| `list_target_groups` | `GET /v1/target-groups` | Target groups and audiences, filterable by name, group type, and status. |
| `get_target_group` | `GET /v1/target-groups/{id}` | One target group by id. |
| `list_opportunities` | `GET /v1/opportunities` | Opportunities, filterable by company website, stage, open/won/lost status, name search, and creation window. |
| `get_opportunity` | `GET /v1/opportunities/{id}` | One opportunity by id. |

---

## Conversions, meetings, and reporting

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `list_conversions` | `GET /v1/conversions` | Conversion events: event id, label, type, timestamp, campaign, and variation. Filterable by date window and type. No company scope, because a raw conversion record carries no company key. |
| `get_conversion` | `GET /v1/conversions/{id}` | One conversion by id. |
| `get_conversion_analytics` | `GET /v1/conversions/analytics` | Conversion performance rollup for the whole account, all time. Takes no window and no company scope. |
| `list_meetings` | `GET /v1/meetings` | Meetings booked through Abmatic AI: booker name and email, timezone, start and end time, duration, status, meeting type, and the assigned calendar owner. Filterable by company (booker email domain), status, and meeting time window. |
| `get_meeting` | `GET /v1/meetings/{id}` | One meeting by id. |
| `list_reports` | `GET /v1/reports` | Saved reports. |
| `get_report` | `GET /v1/reports/{id}` | One saved report and its configuration. |
| `list_dashboards` | `GET /v1/dashboards` | Dashboards. |
| `get_dashboard` | `GET /v1/dashboards/{id}` | One dashboard and its widgets. |

---

## Configuration and integrations

| Tool | Backing endpoint | What it returns |
|------|------------------|-----------------|
| `get_website_context` | `GET /v1/website-context` | Your site knowledge and website context as configured in Abmatic AI. |
| `get_crm_sync_status` | `GET /v1/integrations/sync-status` | CRM sync status only: last sync time, record counts, and error summaries. Never OAuth tokens, refresh tokens, or credentials. |

---

## Filtering, sorting, and paging

Every list tool accepts the same shape of arguments:

| Argument | Meaning |
|----------|---------|
| `q` | Search text against the object's natural identifiers (for example company name and website) |
| `min_score` / `max_score` | Bound the score server side, so totals and paging reflect the filter |
| `since` / `until` | ISO 8601 date window |
| `sort_by` / `order_by` | Sort key and direction (`asc` or `desc`). An unknown key returns `400` naming the valid keys, in snake_case. |
| `fields` | Comma separated projection, restricted to the exposed allowlist |
| `page` / `per_page` | Paging. Default 50 per page, maximum 100. |

Every response carries an `applied` block that states the filters and sort the server **actually** ran, plus a `request_id` in `meta` for support correlation.

:::tip Reading `applied`
If a filter appears as `null` in `applied`, that filter did not run. Ask your assistant to check `applied` before it describes a result as filtered.
:::

---

## What is never exposed {#what-is-never-exposed}

The API projects an explicit allowlist of fields per object. Anything outside the allowlist cannot be returned, including by a `fields` request. The following are excluded by construction:

| Category | Examples |
|----------|----------|
| Credentials and tokens | Integration OAuth and refresh tokens, meeting reschedule and cancel tokens, API keys (the response layer also strips token shaped fields as a backstop) |
| Tenant and internal ids | Mongo `_id`, `user_account_id`, `accountId`, `visitorId`, internal linked ids |
| Person level de-anonymization | `person_full_name`, `person_work_email`, `person_linkedin_url`, and the rest of the person level reveal fields on visitor sessions |
| Personal (non business) contact data | Mobile phone, personal emails, phone numbers, birth date, sex |
| Your own team's user records | Owner user ids, owner emails and names, user and role records, admin surfaces |
| Shared enrichment caches | IP to company enrichment tables, Apollo, PDL, BuiltWith, ZoomInfo, technology scraper caches, global settings |
| Live join surfaces | Calendar event ids, Google Meet and video links, Zoom meeting ids |
| Raw internals | Raw session data, runtime analytics, behavioral data, scoring internals, campaign plumbing |

Shared enrichment caches are not tenant scoped, so they are never reachable through the API at all. Company data you see is what **your** account de-anonymized, not the global company graph.

---

## Rate limits and errors

| Code | Meaning |
|------|---------|
| `401` | Key missing, blank, unknown, or revoked |
| `403` | Key valid, but the account is not on a paid plan |
| `404` | Object does not exist **or** belongs to another account (deliberately indistinguishable) |
| `429` | More than 100 requests per minute for this key. The server returns a retry hint and honors `Retry-After`. |
| `400` | Invalid argument, for example an unknown `sort_by`. The message names the valid keys. |

See [Troubleshooting](/mcp/troubleshooting) for what to do about each one.
