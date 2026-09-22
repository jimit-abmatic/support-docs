---
id: overview
title: Google BigQuery Export
sidebar_label: Overview
sidebar_position: 1
---

# Google BigQuery Export

The Google BigQuery export pushes your website's **hit-level page views** from Abmatic AI into a table in **your own** Google BigQuery project every day, with no one on either side having to run anything. Every row is one page view, enriched with the visiting company, the identified contact (when known), and the matching **Salesforce** and **HubSpot** ids, so you can join Abmatic AI data straight onto your CRM and warehouse models.

![The Data Warehouse section of the Integrations page with the Google BigQuery card connected and synced](/img/screenshots/bigquery-card-connected.png)
*The Google BigQuery card in Settings > Integrations > Data Warehouse, connected and showing the last complete day loaded.*

## At a glance

| | |
|---|---|
| Where in the app | **Settings > Integrations > Data Warehouse > Google BigQuery** |
| What is exported | One row per page view on your website, with company, contact and CRM ids ([full column list](/integrations/bigquery/data-dictionary)) |
| Destination | `your-project.your_dataset.abmatic_page_views` (the table name is editable) |
| Table layout | Partitioned by day on `event_date`, clustered on `company_domain` and `contact_email`. Created for you. |
| Schedule | Once a day, at the UTC hour you choose. Each **complete** UTC day is pushed once. |
| History | Backfilled from the **Include data from** date you pick (up to 400 days back) |
| Re-runs | Safe. Every load **replaces** whole day partitions, so data is never duplicated. |
| How Abmatic AI connects | **Recommended:** grant Abmatic AI's service account access. Or: sign in with a Google account. |
| Cost | BigQuery storage and queries are billed to your Google Cloud project by Google. Load jobs themselves are free in BigQuery. |

## Before you start

You need:

1. **The Google BigQuery card enabled on your workspace.** The export is switched on per workspace by Abmatic AI. If you do not see a **Data Warehouse** section on your Integrations page, ask your Abmatic AI contact to enable **Google BigQuery export** for your workspace. This is the only thing you need from Abmatic AI.
2. **A Google Cloud project with the BigQuery API enabled.** New projects have it enabled by default.
3. **Someone who can grant IAM roles on that project** (for the recommended service account route), or **a Google user with the BigQuery Data Editor and BigQuery Job User roles** on it (for the sign-in route).
4. **The Abmatic AI tracking script on your website**, so there are page views to export.

## Choose how Abmatic AI connects

| | Service account (recommended) | Sign in with Google |
|---|---|---|
| What you do | Create a dataset, add the label `abmatic_workspace` = your workspace ID (shown in the app), grant `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` two roles, then click **I have granted access** | Sign in with a Google user that has the roles, and approve the consent screen |
| Survives people leaving or changing roles | **Yes.** Access belongs to your project, not to a person. | No. If that user loses access or is removed, the export stops until someone reconnects. |
| Consent screen | None | Yes. Google may show an "unverified app" screen while Google's review of the app is pending. |
| Least privilege | You grant exactly what you want, down to a single dataset, and Abmatic AI only writes to a dataset you labeled for your workspace | Google's BigQuery sign-in scope covers everything that user can do in BigQuery |
| Workspace admin approval | Not needed. Some organizations need an org policy exception for outside service accounts ([details](/integrations/bigquery/service-account#if-your-organization-blocks-outside-service-accounts)). | May be needed if your Google Workspace restricts third-party apps |
| Guide | [Service account setup](/integrations/bigquery/service-account) | [Setup guide](/integrations/bigquery/setup#option-b-sign-in-with-google) |

:::tip Recommendation for data teams
Use the **service account** route. It keeps working when people change teams, it has no consent screen, and you can scope it to a single dataset. Most cloud engineers finish it in under ten minutes.
:::

## How the daily push works

- **Days are UTC.** A day is complete at 00:00 UTC the following day.
- **Abmatic AI checks every hour.** On each check it pushes every complete day that has not been loaded yet, as long as your chosen **Daily push time** (a UTC hour) has passed. In practice yesterday's data lands within an hour after that time.
- **Each day is loaded once, as a whole.** Every load **replaces** the `event_date` partition for that day (it does not append), so re-running a day can never create duplicates.
- **Missed days catch up by themselves.** If a push fails (for example Google was unavailable, or access was removed for a while), the next successful run loads every day that was missed. After a failed scheduled run Abmatic AI waits about three hours before trying again.
- **The first sync** starts on the next hourly check after you click **Save and start** and backfills everything from your **Include data from** date through yesterday. You can also start it straight away with **Sync now**.
- **Sync now** loads all pending complete days **plus today so far**. Today's partition is replaced again with the full day once it is complete, so nothing is duplicated.
- **New columns may be added over time.** They are always appended at the end of the table and existing columns are never renamed or retyped. Select the columns you need by name, and do not depend on `SELECT *` column order.

See [Setup](/integrations/bigquery/setup#how-changes-to-settings-apply) for what happens when you change settings after the first sync.

## Where to go next

| Page | What it covers |
|---|---|
| [Setup guide](/integrations/bigquery/setup) | Connecting, picking the destination, schedule and filters, Sync now, the status panel, reconnecting and disabling |
| [Service account setup (Google Cloud)](/integrations/bigquery/service-account) | Exact Cloud Console clicks and `gcloud` / `bq` commands, dataset-level least privilege, org policy exceptions |
| [Data dictionary and sample SQL](/integrations/bigquery/data-dictionary) | Every column, its type and meaning, identification and CRM matching rules, ready-to-run queries |
| [Troubleshooting](/integrations/bigquery/troubleshooting) | Every error message and what to do about it, and what to check first |
| [Security and privacy](/integrations/bigquery/security) | What access Abmatic AI gets, where credentials live, and how to revoke access |
