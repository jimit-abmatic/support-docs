---
id: troubleshooting
title: BigQuery Export Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 5
---

# BigQuery Export Troubleshooting

## What to check first

1. **Open Settings on the Google BigQuery card** and read the **Sync status** panel: the last run, **Complete through**, the warning box and **Recent runs**. The error text there is usually specific enough to act on. It is listed in the tables below.
2. **Check the chip on the card.** **Reconnect** means Google no longer accepts the saved sign-in. An amber **Active** means the last run failed.
3. **Service account:** check the dataset still has the label `abmatic_workspace` = your workspace ID (shown in the connect dialog).
4. **Check the roles** of the connected identity on the project and dataset: **BigQuery Job User** on the project and **BigQuery Data Editor** on the project or dataset ([how to verify](/integrations/bigquery/service-account#step-5-verify)).
5. **Check the timing.** A complete UTC day lands within about an hour after your **Daily push time** on the next day. Before that, "missing yesterday" is expected.
6. **Click Sync now** after fixing anything. It catches up every missed day at once.

## Common situations

### The Data Warehouse section or the Google BigQuery card is missing

The export is enabled per workspace. Ask your Abmatic AI contact to enable **Google BigQuery export** for your workspace, then reload **Settings > Integrations**.

### Project not listed

The project picker shows "No projects with BigQuery access were found for this Google account", or your project is not in the list.

- The connected identity has no BigQuery role on that project yet. Grant **BigQuery Job User** on the project (the project only appears once the identity has a role at the project level).
- **Service account:** only projects that contain a dataset labeled `abmatic_workspace` = your workspace ID are listed. The picker then says "No project has a dataset labeled abmatic_workspace: ... that our service account can access yet". Add the label to your export dataset ([how](/integrations/bigquery/service-account#step-3-create-the-dataset-and-label-it)) and grant the service account access to it. Check the value matches the workspace ID in the connect dialog exactly.
- **Service account:** IAM and label changes can take a few minutes. Close the dialog, wait a minute, then open **Settings** on the card again to reload the list.
- **Signed in with Google:** you may have signed in with a different Google user than the one that has the roles. **Disable** the card and connect again with the right user.

### Dataset not listed under Existing dataset

The list shows only datasets the connected identity can see. Grant **BigQuery Data Editor** on that dataset (or on the project). With the service account, the dataset must also carry the `abmatic_workspace` label with your workspace ID. There is no **Create a new dataset** option in service account mode: create and label the dataset in Google Cloud first. If you granted it seconds ago, pick another project and then your project again to reload the list.

### Yesterday's data is not there yet

- Check **Complete through** in the status panel. If it shows yesterday, the data is loaded. Query with `WHERE event_date = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)`, since dates are UTC.
- If it shows the day before, your **Daily push time** may not have passed yet. The daily push runs within about an hour after it.
- If **Push new data every day** is off, only **Sync now** loads data.
- If the last run failed, fix the error below. Missed days are loaded on the next good run.

### Row counts look different from other tools

- Only page views on your own website domain are included when **Only pages on your own website domain** is on (the default).
- Your own company's traffic is excluded when **Exclude internal traffic** is on (the default).
- **Only page views from companies matched to a CRM account** drops every anonymous or unmatched visit.
- Dates are **UTC**. Other tools often report in your local time zone.
- Filter changes only apply to days loaded after the change. To reload past days, change **Include data from** ([details](/integrations/bigquery/setup#how-changes-to-settings-apply)).

### Today's rows disappeared or changed

Expected. **Sync now** loads today so far, and the daily push replaces today's partition with the complete day once it is over.

## Error messages

### While connecting

| Message | Cause | What to do |
|---|---|---|
| Google BigQuery access was not granted | You clicked **Cancel** or **Deny** on Google's consent screen | Connect again and allow access |
| Google did not grant BigQuery access. Please allow BigQuery on the Google consent screen. | The BigQuery permission checkbox on Google's consent screen was left unticked | Connect again and tick the BigQuery permission |
| Google did not return offline access. Please connect again. | Google did not issue a long-lived sign-in | Connect again. If it repeats, remove Abmatic AI from your Google account's **Third-party apps with account access** page, then connect again. |
| Your Google BigQuery authorization expired or was already used. Please start the Google BigQuery connect flow again. | The sign-in took too long, or the page was reloaded during the Google redirect | Click **Authorize** and connect again |
| Connecting Google BigQuery failed. Please try again. | Google refused the sign-in exchange | Try again. If it repeats, check whether your Workspace blocks the app (below). |
| Google hasn't verified this app | Google's review of Abmatic AI's app is pending | Click **Advanced**, then **Go to Abmatic AI (unsafe)**. See [Setup](/integrations/bigquery/setup#if-google-shows-google-hasnt-verified-this-app). |
| Access blocked, or Error 400: admin_policy_enforced | Your Google Workspace only allows approved third-party apps | A Workspace admin trusts client ID `527705226247-fj7vog7lsbd81prfjmqrit2k6j5at0pc.apps.googleusercontent.com` under **Security > Access and data control > API controls**, or use the [service account](/integrations/bigquery/service-account) |
| Google BigQuery export is not enabled for this workspace. | The feature is not switched on for your workspace | Ask your Abmatic AI contact to enable it |
| Service account access is not available yet. Please sign in with Google. | Service account connections are temporarily unavailable | Use **Sign in with Google** for now |
| Could not switch to service account access | The request failed | Try again. The text after it, if any, gives the reason. |
| Could not list your Google Cloud projects | Listing projects failed | Reload the page and open **Settings** again. Check the roles. |
| No project has a dataset labeled abmatic_workspace: ... that our service account can access yet | Service account mode: no dataset the service account can see carries your workspace label | Create or pick a dataset, add the label shown in the connect dialog, grant the roles, then reopen **Settings**. See [Service account setup](/integrations/bigquery/service-account#step-3-create-the-dataset-and-label-it). |

### While saving the destination

| Message | Cause | What to do |
|---|---|---|
| Connect BigQuery first. | The card is not connected | Click **Authorize** and connect |
| Pick a valid Google Cloud project. | No project chosen, or an invalid project id | Pick a project from the list |
| Dataset names may only contain letters, numbers and underscores. | The new dataset name has spaces, dashes or other characters | Use only `A-Z`, `a-z`, `0-9` and `_` |
| Table names may only contain letters, numbers, underscores and dashes. | Invalid table name | Rename the table |
| Pick a valid dataset location. | Invalid location | Pick one from the list |
| Start date must be YYYY-MM-DD. | Invalid **Include data from** date | Pick a date with the date picker |
| Sync hour must be between 0 and 23 (UTC). | Invalid push time | Pick a time from the list |
| Google denied access. The connected Google user needs the BigQuery Data Editor and BigQuery Job User roles on this project. | Google returned **403**. The identity lacks a role, the **BigQuery API is disabled** on the project, or an organization policy blocks the call. | Grant the roles ([service account](/integrations/bigquery/service-account#step-4-grant-the-roles)). Check the BigQuery API is enabled. With a dataset-level grant, choose **Existing dataset** because creating a dataset needs project-level Data Editor. |
| That BigQuery project or dataset was not found, or the connected user cannot see it. | Google returned **404** | Check the project and dataset still exist and that the identity can see them |
| This dataset is not labeled for your workspace. Add the label abmatic_workspace = your workspace ID (shown in the connect dialog) to the dataset, then try again. | Service account mode: the dataset has no `abmatic_workspace` label, or its value is not your workspace ID | Add or correct the label ([how](/integrations/bigquery/service-account#step-3-create-the-dataset-and-label-it)). The value must be the workspace ID from the connect dialog, in lowercase. Then **Save** again. |
| With service account access, create the dataset in your project, label it abmatic_workspace = your workspace ID, grant access, then pick it here. | Service account mode does not create datasets | Create and label the dataset in Google Cloud, then pick it under **Existing dataset** |
| Saving BigQuery settings failed | The request failed without a specific reason | Try again |

### During a sync (status panel and Recent runs)

| Message | Cause | What to do |
|---|---|---|
| Google rejected the saved BigQuery authorization (it was revoked or expired). Please reconnect BigQuery. | The signed-in user's access was revoked, the user was removed, or Google expired the sign-in | Click **Reconnect** in the alert. See [Reconnecting](/integrations/bigquery/setup#reconnecting). |
| Google rejected the saved BigQuery authorization. Please reconnect BigQuery. | Same as above | Same as above |
| Google is not connected. Please connect BigQuery again. | No saved sign-in | Connect again |
| Abmatic AI service account is not configured. Please contact support. | A problem on Abmatic AI's side | Contact your Abmatic AI contact |
| Pick a BigQuery project and dataset first. | No destination saved | Open **Settings**, pick the destination and click **Save** |
| This dataset is not labeled for your workspace. Add the label abmatic_workspace = your workspace ID (shown in the connect dialog) to the dataset, then try again. | Service account mode: the label was removed or changed after setup. Abmatic AI checks it before every push. | Restore the label, then click **Sync now**. Missed days are caught up. |
| Access Denied: ... / Permission ... denied | The identity lost a role after setup | Restore the roles. The next retry, within about three hours, or **Sync now** catches up. |
| Not found: Dataset ... / Not found: Table ... | The dataset or table was deleted, renamed, or moved | If the table was deleted, it is recreated on the next run with new days only. To reload history into it, change **Include data from** and **Save**. If the dataset was deleted, recreate it or pick another one and **Save**. |
| Not found: Dataset ... was not found in location ... | **Dataset location mismatch.** The dataset was deleted and recreated in another location. | Open **Settings**, pick the dataset again under **Existing dataset** and click **Save**. Abmatic AI reads its location when you save. |
| ... has not been used in project ... before or it is disabled | The BigQuery API is disabled on the project | Enable the **BigQuery API** ([how](/integrations/bigquery/service-account#step-2-make-sure-the-bigquery-api-is-enabled)), then **Sync now** |
| Incompatible table partitioning specification, or a schema mismatch | The table name points at an existing table that Abmatic AI did not create | Use a table only Abmatic AI writes to: change **Table** to a new name, or drop the old table, then **Save** |
| Quota exceeded ... | A BigQuery quota in your project was hit | Usually temporary. The next run retries. |
| BigQuery load job ... did not finish in time | BigQuery was slow | Nothing. The next run retries and replaces the day. |
| BigQuery returned HTTP ... | Google returned an error without a message | Usually temporary. Try **Sync now** later. |
| Unexpected error: ... | An unexpected problem inside Abmatic AI | Try **Sync now**. If it repeats, send the exact text to your Abmatic AI contact. |

### Other messages

| Message | What to do |
|---|---|
| A sync is already running. / Could not start the sync | Wait for the running sync to finish. The panel shows **Sync running now...** and refreshes by itself. |
| Connect BigQuery and pick a destination first. | Save a destination before clicking **Sync now** |
| Failed to disconnect Google BigQuery | Try **Disable** again. To cut access at once, remove the IAM roles or revoke access in your Google account ([how](/integrations/bigquery/security#revoking-access)). |

## Organization policies

### Adding the service account fails: "do not belong to a permitted customer"

Your organization uses **Domain restricted sharing** (`iam.allowedPolicyMemberDomains`). An Organization Policy Administrator can allow it on the export project only, or you can use a dedicated project. Step-by-step: [If your organization blocks outside service accounts](/integrations/bigquery/service-account#if-your-organization-blocks-outside-service-accounts).

### Creating the dataset fails because of a location policy

Your organization restricts resource locations. Create the dataset yourself in an allowed location, then pick it under **Existing dataset**.
