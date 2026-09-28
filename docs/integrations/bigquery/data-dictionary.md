---
id: data-dictionary
title: BigQuery Export Data Dictionary and Sample SQL
sidebar_label: Data Dictionary and SQL
sidebar_position: 4
---

# Data Dictionary and Sample SQL

The export writes one table, `abmatic_page_views` by default, in the project and dataset you chose.

## Table basics

| | |
|---|---|
| Grain | **One row per page view** on your website |
| Partitioning | By day on `event_date` (DATE, UTC). Filter on `event_date` in every query to keep scans and cost small. |
| Clustering | `company_domain`, then `contact_email` |
| Time zone | All timestamps and dates are **UTC** |
| Row key | The pair (`session_id`, `hit_id`). `hit_id` alone can repeat. |
| Loading | Each load **replaces** whole `event_date` partitions. Rows are never appended twice. |
| Schema changes | New columns may be added at the **end** of the table. Existing columns are never renamed, retyped or removed. All columns are NULLABLE. |

:::caution Don't rely on column order
Because new columns can be appended, name the columns you need instead of relying on `SELECT *` order in downstream jobs.
:::

## Columns

| Column | Type | Meaning |
|---|---|---|
| `hit_id` | STRING | Abmatic AI page-view id. **Not unique on its own:** the tracker can reuse the same id across different sessions of one visitor. Use (`session_id`, `hit_id`) as the row key. |
| `event_timestamp` | TIMESTAMP | When the page view happened (UTC) |
| `event_date` | DATE | UTC date of `event_timestamp`. The partition column. |
| `session_id` | STRING | Abmatic AI session id. In practice most sessions contain a single page view, so for visit-level analysis use `visitor_id` plus a time gap (see [Visits](#visits-per-visitor)). |
| `visitor_id` | STRING | Abmatic AI visitor id. Cookie scoped: the same browser keeps the same id across visits. |
| `page_url` | STRING | Full page URL, including any query string |
| `referrer_url` | STRING | The referrer of the **session** (the page the visitor came from when the visit started), repeated on every page view of that session. `"direct"` when there was none. |
| `time_on_page_seconds` | INTEGER | Seconds on the page, when measured. NULL when it was not measured. |
| `scroll_depth_percent` | INTEGER | Maximum scroll depth reached, 0 to 100, when measured. NULL when not measured. |
| `company_domain` | STRING | Domain of the identified visiting company. NULL when the company was not identified. |
| `company_name` | STRING | Name of the visiting company as stored on the account record in Abmatic AI (it can be lowercase), otherwise the identified company name. Filled even when there is no CRM id. |
| `salesforce_account_id` | STRING | Salesforce Account id of the visiting company (see [CRM matching](#company-contact-and-crm-matching)) |
| `hubspot_company_id` | STRING | HubSpot Company id of the visiting company |
| `contact_email` | STRING | Email of the identified visitor, lower case. NULL for anonymous visitors. |
| `contact_name` | STRING | Name of the identified visitor |
| `contact_title` | STRING | Job title of the identified visitor. Your CRM title when matched, otherwise the identified title. |
| `contact_linkedin_url` | STRING | LinkedIn profile URL of the identified visitor |
| `salesforce_contact_id` | STRING | Salesforce **Contact or Lead** id of the visitor |
| `hubspot_contact_id` | STRING | HubSpot Contact id of the visitor |
| `country` | STRING | Visitor country, from the IP address |
| `region` | STRING | Visitor region or state, from the IP address |
| `city` | STRING | Visitor city, from the IP address |
| `device_type` | STRING | `desktop`, `mobile` or `tablet` |
| `is_bounce` | BOOLEAN | TRUE when the visit was a single-page session |
| `is_new_visitor` | BOOLEAN | TRUE when this was the visitor's first session |
| `exported_at` | TIMESTAMP | When Abmatic AI loaded this row (UTC). All rows of one load share it. |

## How rows are built

- **What is included:** page views on your website recorded by the Abmatic AI tracking script, from real sessions. Simulated sessions are never exported.
- **Which day a row belongs to:** each page view is placed by **its own** timestamp, not by when its session started. That includes page views appended to a session that started up to 30 days earlier, and a visit that starts at 23:58 UTC and continues after midnight has page views on two dates.
- **Filters** from the settings (internal traffic, own domain only, CRM-matched only) are applied before loading. See [Schedule and data](/integrations/bigquery/setup#step-4-schedule-and-data).
- **Session-level values** (`referrer_url`, company and contact fields, location, `device_type`, `is_new_visitor`) are the same on every page view of a session.

### Company, contact and CRM matching

- **Company:** `company_domain` is the company Abmatic AI identified for the visit, from the visitor's IP address or, when known, from the identified contact.
- **Contact:** `contact_email` is filled when Abmatic AI has identified the individual, for example from a form fill or from Abmatic AI's visitor identification. Anonymous visitors have NULL contact fields.
- **Account ids:** `salesforce_account_id` and `hubspot_company_id` come from the accounts Abmatic AI has synced from your CRM, matched on the company's website domain. When the company does not match directly, the matched contact's account is used instead.
- **Contact ids:** `salesforce_contact_id` and `hubspot_contact_id` come from the contacts synced from your CRM, matched on the visitor's email. A record with a Salesforce id wins when there are several.
- The ids are only as current as your CRM sync in Abmatic AI. A company created in your CRM after a day was loaded is not matched on that day's rows unless that day is loaded again (see [How changes to settings apply](/integrations/bigquery/setup#how-changes-to-settings-apply)).

### Freshness

| Data | Lands in BigQuery |
|---|---|
| A complete UTC day | Once, within about an hour after your **Daily push time** on the following day |
| Today so far | Only when you click **Sync now**. It is replaced by the complete day at the next daily push. |
| A day missed because of an error | On the next successful run, automatically |

## Sample SQL

Replace `your-project-id.your_dataset` with your project and dataset. `CURRENT_DATE()` is UTC in BigQuery, which matches `event_date`.

### Yesterday's page views

```sql
SELECT
  event_timestamp,
  page_url,
  referrer_url,
  company_name,
  company_domain,
  contact_email,
  salesforce_account_id
FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
ORDER BY event_timestamp;
```

### Page views per company per day

```sql
SELECT
  event_date,
  company_domain,
  ANY_VALUE(company_name)        AS company_name,
  ANY_VALUE(salesforce_account_id) AS salesforce_account_id,
  COUNT(*)                       AS page_views,
  COUNT(DISTINCT visitor_id)     AS visitors,
  COUNT(DISTINCT contact_email)  AS known_visitors
FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
  AND company_domain IS NOT NULL
GROUP BY event_date, company_domain
ORDER BY event_date DESC, page_views DESC;
```

Counts are per day here, so no cross-day handling is needed. Totals that span several days should keep the newest copy of each key: see [Reading across days](#reading-across-days).

### Join to your Salesforce Account table

This assumes you already replicate Salesforce into BigQuery, for example with a table `crm.salesforce_account` that has `Id`, `Name` and `OwnerId`. Adjust names to your replica.

```sql
SELECT
  a.Id      AS account_id,
  a.Name    AS account_name,
  a.OwnerId AS owner_id,
  COUNT(*)                   AS page_views_7d,
  COUNT(DISTINCT pv.visitor_id) AS visitors_7d,
  MAX(pv.event_timestamp)    AS last_visit_at
FROM (
  SELECT *
  FROM `your-project-id.your_dataset.abmatic_page_views`
  WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
  QUALIFY ROW_NUMBER() OVER (PARTITION BY session_id, hit_id ORDER BY exported_at DESC) = 1
) AS pv
JOIN `your-project-id.crm.salesforce_account` AS a
  ON a.Id = pv.salesforce_account_id
GROUP BY account_id, account_name, owner_id
ORDER BY page_views_7d DESC;
```

:::tip 15 or 18 character Salesforce ids
Salesforce ids come in a 15-character and an 18-character form. If your replica stores the other form, join on the first 15 characters: `ON LEFT(a.Id, 15) = LEFT(pv.salesforce_account_id, 15)`.
:::

### Reading across days

Within one `event_date` partition the pair (`session_id`, `hit_id`) is unique, and our loads never duplicate rows: each day is loaded by **replacing** its whole partition, so re-running a day replaces its earlier rows.

Across days the same page view can appear more than once. The tracker sometimes updates an existing page view's timestamp instead of adding a new one, which moves it to a later day, and the copy already written on the earlier day stays there. It is a small effect (on our own tenant, 11 keys in a 12,000-row table), but it inflates totals that span several days.

So when you read more than one day, keep the newest copy of each key. This is the recommended pattern for models and joins:

```sql
SELECT *
FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date BETWEEN '2026-09-01' AND '2026-09-30'
QUALIFY ROW_NUMBER() OVER (PARTITION BY session_id, hit_id ORDER BY exported_at DESC) = 1;
```

Per-day counts and single-day queries need no such handling. Note also that `hit_id` on its own is not a key: the tracker can reuse one page-view id across different sessions of the same visitor.

If a downstream tool copies rows out of this table incrementally, key it on (`session_id`, `hit_id`) and re-read whole `event_date` partitions rather than filtering on `exported_at`.

### Visits per visitor

Because most sessions hold a single page view, group a visitor's page views into visits yourself, for example starting a new visit after 30 minutes without a page view:

```sql
WITH deduped AS (
  SELECT *
  FROM `your-project-id.your_dataset.abmatic_page_views`
  WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
  QUALIFY ROW_NUMBER() OVER (PARTITION BY session_id, hit_id ORDER BY exported_at DESC) = 1
),
ordered AS (
  SELECT
    visitor_id,
    event_timestamp,
    IF(TIMESTAMP_DIFF(event_timestamp,
         LAG(event_timestamp) OVER (PARTITION BY visitor_id ORDER BY event_timestamp),
         MINUTE) <= 30, 0, 1) AS new_visit
  FROM deduped
)
SELECT
  visitor_id,
  SUM(new_visit) AS visits,
  COUNT(*)       AS page_views
FROM ordered
GROUP BY visitor_id
ORDER BY visits DESC;
```

### A scheduled query for a daily rollup

BigQuery **scheduled queries** can build your own models on top of the export. Schedule them **after** your Daily push time. For example, if the push time is 09:00 UTC, schedule the query for 11:00 UTC. This script rebuilds yesterday's slice of an account engagement table, so re-running it is safe too:

```sql
-- Target table, created once:
-- CREATE TABLE `your-project-id.analytics.account_daily_engagement` (
--   event_date DATE, salesforce_account_id STRING, company_name STRING,
--   page_views INT64, visitors INT64, known_visitors INT64, pricing_views INT64)
-- PARTITION BY event_date;

DECLARE d DATE DEFAULT DATE_SUB(@run_date, INTERVAL 1 DAY);

DELETE FROM `your-project-id.analytics.account_daily_engagement`
WHERE event_date = d;

INSERT INTO `your-project-id.analytics.account_daily_engagement`
SELECT
  event_date,
  salesforce_account_id,
  ANY_VALUE(company_name),
  COUNT(*),
  COUNT(DISTINCT visitor_id),
  COUNT(DISTINCT contact_email),
  COUNTIF(page_url LIKE '%/pricing%')
FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date = d
  AND salesforce_account_id IS NOT NULL
GROUP BY event_date, salesforce_account_id;
```

To schedule it in the console, open the query in **BigQuery Studio**, click **Schedule**, set it to repeat daily at your chosen UTC time, and save. `@run_date` is filled in by the scheduler.
