---
id: security
title: BigQuery Export Security and Privacy
sidebar_label: Security and Privacy
sidebar_position: 6
---

# BigQuery Export Security and Privacy

## Summary

| Question | Answer |
|---|---|
| What does Abmatic AI get access to? | **BigQuery only**, and only what you grant. No other Google Cloud service, no Google Drive, Gmail or other Google data. |
| What does Abmatic AI do with it? | Lists projects and datasets so you can pick a destination, creates the dataset (only if you ask) and the table, and runs **load jobs** into that one table. |
| Does Abmatic AI read or query my BigQuery data? | **No.** It never runs queries and never reads rows from your tables. It only reads table metadata (the schema) to add new columns. |
| What data is written? | Your own website's page-view data, which Abmatic AI already collects for your workspace through its tracking script. See the [data dictionary](/integrations/bigquery/data-dictionary). |
| Where does the data go? | Into the project, dataset and location you choose, in your Google Cloud account. Storage and query costs, retention, access control and deletion are all under your control. |
| How is it transferred? | Over HTTPS to Google's BigQuery API |
| Can I cut access at any time? | Yes. See [Revoking access](#revoking-access). |

## Access by connection method

### Service account (recommended)

- You grant `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` **BigQuery Job User** on the project and **BigQuery Data Editor** on the project or on a single dataset. It can do only what those roles allow, where you granted them.
- With a **dataset-level** grant it can't see or change any other dataset in your project. See [Option B](/integrations/bigquery/service-account#option-b-one-dataset-only-least-privilege).
- The grant is visible in your IAM policy and in your Cloud Audit Logs like any other principal, and you can remove it at any time.
- You never create or handle a key. The service account's credentials are held by Abmatic AI in its encrypted secret store and are used only by the export.

### Sign in with Google

- Abmatic AI asks Google for the BigQuery permission plus your basic identity (`openid` and `email`, used only to show **Connected as** on the card).
- Google's BigQuery permission covers **everything that Google user can do in BigQuery**. Abmatic AI only makes the calls listed in the summary above, but if you need the grant itself to be limited, use the service account.
- Abmatic AI stores a Google **refresh token** for that user, so the daily push can run without anyone signed in. It is kept in Abmatic AI's platform database, which is encrypted at rest. It is never shown in the app and never returned by Abmatic AI's API.
- If that user leaves or loses the roles, the export stops until someone reconnects. That is one reason the service account is recommended.

## Who in Abmatic AI can change the export

Any user of your Abmatic AI workspace who can open **Settings > Integrations** can connect, change or disable the export. The destination is saved per workspace, and each workspace's export writes only to the project, dataset and table saved in that workspace's settings.

## Revoking access

You can use any of these, alone or together:

1. **Disable in Abmatic AI.** Click **Disable** on the Google BigQuery card. This stops the schedule at once and, for **Sign in with Google**, revokes the refresh token at Google. Your settings are kept so you can reconnect later.
2. **Remove the IAM grant (service account).** Remove the roles from `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` in **IAM & Admin > IAM**, and from the dataset's sharing permissions if you granted it there. Commands are in [Removing access later](/integrations/bigquery/service-account#removing-access-later).
3. **Revoke the Google sign-in (Sign in with Google).** The Google user can remove Abmatic AI under **Google Account > Security > Your connections to third-party apps and services**. A Google Workspace admin can block the app for the whole organization in the **Admin console** under **Security > Access and data control > API controls**.

After revoking, Abmatic AI can no longer write to your project. Data already in your table stays there. It is yours to keep or delete.

## Deleting exported data

The table lives in your project, so you delete it with normal BigQuery tools. For example, to drop one day:

```sql
DELETE FROM `your-project-id.your_dataset.abmatic_page_views`
WHERE event_date = '2026-01-15';
```

Or remove the whole table:

```sql
DROP TABLE `your-project-id.your_dataset.abmatic_page_views`;
```

If the export is still enabled, a dropped table is recreated on the next run with new days only. Disable the export first if you want it to stay gone.

## Personal data

Rows can contain personal data about identified visitors (`contact_email`, `contact_name`, `contact_title`, `contact_linkedin_url`, plus approximate IP-based location). It is the same data your team already sees in Abmatic AI for your workspace. Once it is in your BigQuery project, your own access controls, retention rules and data processing terms apply to it. To export only company-level data, restrict who can read those columns with BigQuery column-level security, or build a view without them for wider audiences.
