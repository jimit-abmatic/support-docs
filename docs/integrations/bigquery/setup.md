---
id: setup
title: Google BigQuery Export Setup
sidebar_label: Setup Guide
sidebar_position: 2
---

# Setting Up the Google BigQuery Export

This guide walks through the whole setup inside Abmatic AI, from the card to the first rows in your table. Allow about ten minutes. If you are using the recommended service account route, do the Google Cloud part first: [Service account setup](/integrations/bigquery/service-account).

## Step 1: Open the Google BigQuery card

1. In Abmatic AI, click **Settings**, then open the **Integrations** tab.
2. Scroll to the **Data Warehouse** section ("Push your Abmatic AI data into your own warehouse automatically, every day.").
3. Find the **Google BigQuery** card. While it is not connected, its chip reads **Inactive**.

![The Data Warehouse section with the Google BigQuery card, an Inactive chip and an Authorize button](/img/screenshots/bigquery-card-disconnected.png)

:::info Don't see the Data Warehouse section?
The BigQuery export is enabled per workspace by Abmatic AI. Ask your Abmatic AI contact to enable **Google BigQuery export** for your workspace, then reload the Integrations page.
:::

## Step 2: Connect

Click **Authorize** on the card. The **Connect Google BigQuery** dialog offers two ways to connect.

![The Connect Google BigQuery dialog with a Sign in with Google button, and below it the Abmatic AI service account email and an I have granted access button](/img/screenshots/bigquery-connect-chooser.png)

### Option A: Grant the Abmatic AI service account (recommended)

The dialog shows two values to copy: the service account email and the dataset label with your workspace ID (`abmatic_workspace: <your workspace ID>`).

1. In Google Cloud, **create a dataset** for the export and **add the label** shown in the dialog to it. Abmatic AI only lists, and only writes to, datasets carrying your workspace label.
2. **Grant** `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` **BigQuery Job User** on the project and **BigQuery Data Editor** on that dataset (or on the project).

   The [Service account setup](/integrations/bigquery/service-account) page has the exact Cloud Console clicks and the `bq`, `gcloud` and SQL commands for both steps.

3. Back in the dialog, click **I have granted access**.
4. The dialog changes to **Google BigQuery export** and the first line reads **Using Abmatic AI service account abmatic-bigquery-export@abmatic.iam.gserviceaccount.com**. Only projects and datasets labeled for your workspace are offered.

![The Google BigQuery export settings dialog connected with the Abmatic AI service account, with the labeled dataset selected and no Create a new dataset option](/img/screenshots/bigquery-sa-connected.png)

:::tip Grant first, then click
Google IAM changes usually apply within a minute or two, but can take a few minutes. If your project is missing from the project list, wait a moment, close the dialog and open it again with **Settings** on the card.
:::

### Option B: Sign in with Google

1. Click **Sign in with Google**.
2. Choose a Google user that has **BigQuery Data Editor** and **BigQuery Job User** on the project you will export to.
3. On Google's consent screen, **allow BigQuery access**. If Google shows a checkbox for the BigQuery permission, tick it. Without it the connection is refused.
4. Google sends you back to the Integrations page and the settings dialog opens with the message "Google BigQuery connected. Now pick where to send your data." The first line reads **Connected as** followed by the Google user you signed in with.

![The Google BigQuery export settings dialog after signing in with Google, showing Connected as and an empty project picker](/img/screenshots/bigquery-settings-connected.png)

#### If Google shows "Google hasn't verified this app"

Abmatic AI's Google app is going through Google's standard verification for the BigQuery permission. Until Google completes that review, Google may show a warning screen. To continue:

1. Click **Advanced** (bottom left of the warning).
2. Click **Go to Abmatic AI (unsafe)** (Google's wording; the name shown is the app's name).
3. Continue to the normal consent screen and allow BigQuery access.

If instead you see **Access blocked** or **Error 400: admin_policy_enforced**, your Google Workspace only allows approved apps. Ask your Google Workspace admin to trust Abmatic AI's app:

1. In the **Google Admin console**, go to **Security > Access and data control > API controls**.
2. Click **Manage Third-Party App Access**, then **Add app > OAuth App Name Or Client ID**.
3. Search for this client ID and select it:

   ```
   527705226247-fj7vog7lsbd81prfjmqrit2k6j5at0pc.apps.googleusercontent.com
   ```

4. Choose who it applies to and set access to **Trusted**, then save.

Or skip all of this by using the [service account](/integrations/bigquery/service-account) instead, which has no consent screen.

## Step 3: Pick the destination

### Google Cloud project

Open **Google Cloud project** and choose the project to export into. With **Sign in with Google**, the list shows every project where that Google user has a BigQuery role. With the **service account**, it shows only projects that contain a dataset labeled for your workspace.

![The Google Cloud project picker open, listing two example projects by name and id](/img/screenshots/bigquery-project-picker.png)

If the list says "No projects with BigQuery access were found for this Google account", see [Troubleshooting](/integrations/bigquery/troubleshooting#project-not-listed).

### Dataset: existing or new

Once a project is picked, choose where the table goes:

- **Existing dataset** lists the datasets in that project that the connected identity can see, with their location, for example `marketing (US)`. With the service account, only datasets labeled for your workspace are listed.

![Existing dataset selected, with a dataset picked from the list and the Table field below showing abmatic_page_views](/img/screenshots/bigquery-dataset-existing.png)

- **Create a new dataset** (**Sign in with Google** only) lets Abmatic AI create one for you. Enter a **New dataset name** (letters, numbers and underscores only) and a **Location**: `US`, `EU`, `us-central1`, `us-east1`, `us-west1`, `europe-west1`, `europe-west2` or `asia-southeast1`. If a dataset with that name already exists, Abmatic AI uses it as it is.

![Create a new dataset selected, with the Location list open showing US, EU and six regions](/img/screenshots/bigquery-dataset-locations.png)

:::note Creating a dataset: Google sign-in only
**Create a new dataset** is offered only when you connected with **Sign in with Google**, and that user needs **BigQuery Data Editor at the project level**. With the service account, you create and label the dataset yourself ([how](/integrations/bigquery/service-account#step-3-create-the-dataset-and-label-it)) and pick it under **Existing dataset**.
:::

### Table

**Table** defaults to `abmatic_page_views`. You don't create it: Abmatic AI creates it on save, partitioned by day on `event_date` and clustered on `company_domain` and `contact_email`. Table names may use letters, numbers, underscores and dashes.

:::caution Use a table only Abmatic AI writes to
Each load replaces whole day partitions of this table. Don't point it at a table that holds other data.
:::

## Step 4: Schedule and data

![The Schedule and data section: the Push new data every day switch, Daily push time, Include data from, and three filter checkboxes](/img/screenshots/bigquery-schedule-filters.png)

| Setting | What it does | Default |
|---|---|---|
| **Push new data every day** | Turns the daily push on or off. With it off, nothing is pushed except when you click **Sync now**. | On |
| **Daily push time** | The UTC hour after which yesterday's data is pushed. The menu also shows the time in your own time zone, for example "09:00 UTC (2:00 AM your time)". | 09:00 UTC |
| **Include data from** | The first UTC day to export. Earlier days, from this date to yesterday, are backfilled on the first sync. The latest date you can pick is yesterday. Backfill reaches back at most 400 days. | 30 days ago |
| **Exclude internal traffic (your own company)** | Drops every session whose identified company, or whose identified visitor's email domain, is your own website domain (or Abmatic AI's own domain). | On |
| **Only pages on your own website domain** | Keeps only page views on your website domain and its subdomains. Turn it off to include other sites where your tracking script runs. | On |
| **Only page views from companies matched to a CRM account** | Keeps only rows with a `salesforce_account_id` or `hubspot_company_id`. Useful when you only want known accounts. | Off |

"Your website domain" is the domain set on your Abmatic AI workspace. Page views on pages hosted by Abmatic AI itself are never exported.

## Step 5: Save and start

Click **Save and start**. Abmatic AI checks that it can reach the project and dataset (and, with the service account, that the dataset carries your workspace label), creates the dataset (if you chose a new one) and the table, and saves your settings. You will see "Saved. Your data will be pushed to BigQuery daily."

![The settings dialog after Save and start, with the new dataset selected and a Sync status section showing Not synced yet and a Sync now button](/img/screenshots/bigquery-saved-not-synced.png)

The first sync runs on the next hourly check. To start it now, click **Sync now**. While it runs, the status reads **Sync running now...** and the panel refreshes by itself.

![The Sync status section while a sync is running](/img/screenshots/bigquery-sync-running.png)

**Sync now** is greyed out while a sync is already running, and while the form has unsaved changes. Click **Save** first.

## Step 6: Check the sync status

Open **Settings** on the card at any time to see how the export is doing.

![The Sync status panel with the last sync time and rows loaded, Complete through date, a sample query, and two recent runs](/img/screenshots/bigquery-sync-status.png)

| Item | Meaning |
|---|---|
| **Last sync ...: N rows loaded** | When the most recent run finished (shown in your browser's time zone), and how many rows it loaded. Shows **failed** if it failed. |
| **Complete through YYYY-MM-DD (UTC)** | The last **complete** UTC day that is in your table. Rows for today loaded by **Sync now** are not counted here. |
| **Query it** | A ready-to-run query for yesterday's rows in your table |
| **Recent runs** | Up to five latest runs: start time, **manual** (Sync now) or **daily** (scheduled), rows loaded, and the UTC day range covered. A failed run shows **failed:** and the error. |
| Warning box | The error from the latest failed run. See [Troubleshooting](/integrations/bigquery/troubleshooting). |

On the card itself you will see **Synced through YYYY-MM-DD** (or **Waiting for first sync**) and a chip:

| Chip | Meaning |
|---|---|
| **Active** (green) | Connected, destination set, last run fine |
| **Setup needed** (amber) | Connected but no destination saved yet. Open **Settings** and finish Step 3 to Step 5. |
| **Reconnect** (amber) | Google no longer accepts the saved access. See [Reconnecting](#reconnecting). |
| **Active** (amber) | Connected, but the most recent run failed. Open **Settings** to see the error. |
| **Inactive** (grey) | Not connected |

Then check your table in BigQuery:

```sql
SELECT event_date, COUNT(*) AS page_views
FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
GROUP BY event_date
ORDER BY event_date;
```

More queries: [Data dictionary and sample SQL](/integrations/bigquery/data-dictionary#sample-sql).

## How changes to settings apply

| You change | What happens |
|---|---|
| **Project, dataset or table** | The export starts over into the new table and backfills everything from **Include data from**. The old table is left as it is. |
| **Include data from** | Every day from the new date is loaded again on the next sync, replacing those partitions. This is also how you reload history, for example after changing a filter. |
| **A filter** | Applies to days loaded from now on. Days already in the table keep the rows they were loaded with. To apply the filter to past days, change **Include data from** as well (days are replaced, never duplicated). |
| **Daily push time** or **Push new data every day** | Applies from the next hourly check |

:::note Days with no page views
A day with no matching page views is skipped, so its partition is left as it was. After tightening a filter, a past day that no longer has any matching rows keeps its earlier rows until you delete that partition yourself.
:::

## Reconnecting

If Google stops accepting the saved access (the signed-in user's access was revoked, the user was removed, or the password or security settings changed), the card chip turns to **Reconnect** and the settings dialog shows:

> Google rejected the saved BigQuery authorization (it was revoked or expired). Please reconnect BigQuery.

![The Google BigQuery card with an amber Reconnect chip](/img/screenshots/bigquery-card-reconnect.png)

![The settings dialog with a red alert saying Google rejected the saved BigQuery authorization and a Reconnect button](/img/screenshots/bigquery-reconnect-alert.png)

- **Signed in with Google:** click **Reconnect** in the alert and sign in again with a Google user that has the two roles. Your destination and settings are kept, and missed days are backfilled on the next run.
- **Service account:** if someone removes the service account's roles, runs fail with a "Google denied access" error in the warning box (the chip turns amber) rather than showing Reconnect. Restore the roles ([how to check](/integrations/bigquery/service-account#step-5-verify)). The same applies if the dataset's `abmatic_workspace` label was removed or changed: runs fail with "This dataset is not labeled for your workspace" until you restore it. The next automatic retry, within about three hours, or a click on **Sync now**, catches up every missed day. You don't need to reconnect.

## Disabling the export

Click **Disable** on the card and confirm.

![The Disable Integration confirmation dialog with Cancel and Disable buttons](/img/screenshots/bigquery-disable-confirm.png)

Disabling:

- stops the daily push,
- revokes Abmatic AI's Google access at Google, if you connected with **Sign in with Google**,
- keeps your destination and filter choices, so reconnecting later is quick,
- leaves your BigQuery table and its data untouched. It is your data.

If you connected with the service account, also remove its IAM roles to fully revoke access: see [Revoking access](/integrations/bigquery/security#revoking-access).

To turn the export back on later, click **Authorize**, connect again, then open the settings, switch **Push new data every day** back on and click **Save**.
