---
id: service-account
title: BigQuery Service Account Setup (Google Cloud)
sidebar_label: Service Account Setup
sidebar_position: 3
---

# Granting the Abmatic AI Service Account (Google Cloud)

This is the **recommended** way to connect the BigQuery export. You create a dataset for the export, label it with your Abmatic AI workspace ID, and grant a Google service account owned by Abmatic AI two BigQuery roles. Abmatic AI then writes to that dataset as the service account.

**Why this route:**

- **It survives people leaving.** Access belongs to your project, not to an employee's Google login, so the export never breaks because someone changed teams.
- **No consent screen** and no Google Workspace third-party app approval.
- **Least privilege.** You decide exactly what it can touch, down to one dataset, and you can see and remove the grant in IAM at any time.
- **No key to manage.** You never create, download or rotate a key. Abmatic AI holds its own service account's credentials.

| | |
|---|---|
| Principal to grant | `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` |
| Role 1 | **BigQuery Job User** (`roles/bigquery.jobUser`) on the **project**. Lets it run load jobs in your project. |
| Role 2 | **BigQuery Data Editor** (`roles/bigquery.dataEditor`) on **the export dataset** (recommended) or on the project. Lets it create and write the table. |
| Dataset label | `abmatic_workspace` = **your workspace ID**, shown in the app's connect dialog. Abmatic AI only lists, and only writes to, datasets carrying this label. |

The Google Cloud steps take a few minutes and need someone who can create datasets and change IAM on the project (for example **BigQuery Admin** plus **Project IAM Admin**, or **Owner**).

:::note Abmatic AI changes nothing in your Google Cloud
Everything on this page is done by you, in your own project. Abmatic AI never asks for owner access and cannot grant itself anything. With the service account, Abmatic AI does not create datasets: you create and label the dataset yourself.
:::

Do the steps in this order: create the dataset, label it, grant access, then click **I have granted access** in Abmatic AI.

## Step 1: Find your workspace ID

1. In Abmatic AI, go to **Settings > Integrations > Data Warehouse** and click **Authorize** on the **Google BigQuery** card.
2. The **Connect Google BigQuery** dialog shows the service account email and, below it, the label to add, for example `abmatic_workspace: 1a2b3c4d-...`. The part after the colon is your workspace ID. It is already lowercase.

![The Connect Google BigQuery dialog showing the service account email, the abmatic_workspace label with the workspace ID, and the I have granted access button](/img/screenshots/bigquery-connect-chooser.png)

Keep this dialog open, or copy the label and close it. You come back to it in Step 6.

## Step 2: Make sure the BigQuery API is enabled

It is on by default in new projects. To check, open **Google Cloud console > APIs & Services > Enabled APIs & services** for your project and look for **BigQuery API**. If it is missing, click **+ Enable APIs and services**, search for **BigQuery API** and click **Enable**.

Or with `gcloud`:

```bash
gcloud services enable bigquery.googleapis.com --project=YOUR_PROJECT_ID
```

## Step 3: Create the dataset and label it

The export needs a dataset of its own, with the label `abmatic_workspace` set to your workspace ID.

**In the Cloud Console**

1. Open **BigQuery** (BigQuery Studio). In the **Explorer** pane, click the three-dot menu next to your project, then **Create dataset**.
2. Enter a **Dataset ID** such as `abmatic`, choose a **Location** (for example `US` or `EU`).
3. If the form shows **Labels**, click **Add label** and enter key `abmatic_workspace` and your workspace ID as the value. Click **Create dataset**.
4. If you did not add the label while creating it: in the **Explorer**, click the dataset, then **Edit details** (the pencil next to **Dataset info**). Under **Labels**, click **Add label**, enter key `abmatic_workspace` and value = your workspace ID, and click **Save**.

**With bq**

```bash
PROJECT_ID=your-project-id
DATASET=abmatic
LOCATION=US
WORKSPACE_ID=your-workspace-id   # from Step 1, lowercase

bq --location="$LOCATION" mk --dataset \
  --description "Abmatic AI page-view export" "$PROJECT_ID:$DATASET"

bq update --set_label "abmatic_workspace:$WORKSPACE_ID" "$PROJECT_ID:$DATASET"
```

**With SQL** (in the BigQuery SQL editor)

```sql
CREATE SCHEMA IF NOT EXISTS `your-project-id.abmatic`
OPTIONS (location = 'US');

ALTER SCHEMA `your-project-id.abmatic`
SET OPTIONS (labels = [('abmatic_workspace', 'your-workspace-id')]);
```

:::caution Setting labels with SQL replaces all labels
`ALTER SCHEMA ... SET OPTIONS (labels = ...)` replaces the dataset's whole label list. If the dataset already has labels you want to keep, list them all in the statement, or use `bq update --set_label`, which adds one label and keeps the others.
:::

:::tip Pick the dataset location once
BigQuery can't move a dataset to another location. Choose the location where the rest of your warehouse lives, because queries that join tables must run in one location.
:::

## Step 4: Grant the roles

Grant **BigQuery Job User** on the project (load jobs always run at project level) and **BigQuery Data Editor** on the export dataset. Granting Data Editor on the dataset only, rather than the whole project, is the least-privilege choice: the service account can't see or change any other dataset.

**In the Cloud Console**

1. **Job User on the project:** open **Google Cloud console > IAM & Admin > IAM** and select your project at the top. Click **Grant access**, paste `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` in **New principals**, choose the role **BigQuery > BigQuery Job User**, and click **Save**.
2. **Data Editor on the dataset:** in **BigQuery**, click the three-dot menu next to the dataset in the **Explorer** and choose **Share** (in some console versions, open the dataset and click **Sharing > Permissions**). Click **Add principal**, paste the service account email, choose **BigQuery Data Editor**, and click **Save**.

**With gcloud and bq**

```bash
SA=abmatic-bigquery-export@abmatic.iam.gserviceaccount.com

# Job User on the project
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.jobUser" --condition=None

# Data Editor on the export dataset only
bq query --use_legacy_sql=false --location="$LOCATION" \
  "GRANT \`roles/bigquery.dataEditor\` ON SCHEMA \`$PROJECT_ID.$DATASET\` TO \"serviceAccount:$SA\""
```

You can also run the `GRANT` statement on its own in the BigQuery SQL editor:

```sql
GRANT `roles/bigquery.dataEditor`
ON SCHEMA `your-project-id.abmatic`
TO "serviceAccount:abmatic-bigquery-export@abmatic.iam.gserviceaccount.com";
```

If you prefer project-wide Data Editor instead (simpler, broader):

```bash
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.dataEditor" --condition=None
```

Even with project-wide access, Abmatic AI only writes to datasets carrying your workspace label.

## Step 5: Verify

The label:

```bash
bq show --format=prettyjson "$PROJECT_ID:$DATASET" | grep -A3 '"labels"'
```

You should see `"abmatic_workspace": "<your workspace id>"`.

Project-level roles held by the service account:

```bash
gcloud projects get-iam-policy "$PROJECT_ID" \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:$SA" \
  --format="table(bindings.role)"
```

You should see `roles/bigquery.jobUser` (and `roles/bigquery.dataEditor` if you granted it project-wide).

Dataset-level access:

```bash
bq show --format=prettyjson "$PROJECT_ID:$DATASET" | grep -B2 -A2 abmatic-bigquery-export
```

## Step 6: Connect in Abmatic AI

1. Back in the **Connect Google BigQuery** dialog (**Settings > Integrations > Data Warehouse > Authorize**), click **I have granted access**.
2. Open **Google Cloud project**. Only projects that have a dataset labeled for your workspace are listed.

![The project picker in service account mode, listing only the project that has a labeled dataset](/img/screenshots/bigquery-sa-project-picker.png)

3. Pick the project. Under **Existing dataset**, only datasets labeled for your workspace are listed. Pick yours, check the schedule and filters, and click **Save and start**.

![The settings dialog in service account mode with the project and the labeled dataset selected, a note that only labeled datasets are listed, and no Create a new dataset option](/img/screenshots/bigquery-sa-connected.png)

Abmatic AI checks the label again when you save and before every daily push. If the label is removed or changed, pushes stop with an error until it is restored. The rest of the walkthrough, with screenshots, is in the [Setup guide](/integrations/bigquery/setup#step-4-schedule-and-data).

## If your organization blocks outside service accounts

Many organizations turn on the **Domain restricted sharing** organization policy (`constraints/iam.allowedPolicyMemberDomains`). It allows only identities from your own Google organization in IAM policies. When it is on, adding Abmatic AI's service account fails with an error like:

> One or more users named in the policy do not belong to a permitted customer.

To allow it for the export project only, an **Organization Policy Administrator** can override the constraint on that one project. The rest of the organization stays locked down.

**In the Cloud Console**

1. Select the export project, then open **IAM & Admin > Organization Policies**.
2. Find **Domain restricted sharing** (`iam.allowedPolicyMemberDomains`) and click it, then **Manage policy**.
3. Under **Policy source**, choose **Override parent's policy**.
4. Add a rule with **Policy values: Allow All**, then click **Set policy**.
5. Grant the roles as in Step 4.
6. Optional: set the project back to **Inherit parent's policy**. Google applies this constraint when members are added, not retroactively, so the grant made in step 5 stays in place.

**With gcloud**

```bash
cat > /tmp/allow-abmatic-sa.yaml <<EOF
name: projects/$PROJECT_ID/policies/iam.allowedPolicyMemberDomains
spec:
  inheritFromParent: false
  rules:
  - allowAll: true
EOF
gcloud org-policies set-policy /tmp/allow-abmatic-sa.yaml

# grant the roles (Step 4), then optionally restore inheritance:
gcloud org-policies reset iam.allowedPolicyMemberDomains --project="$PROJECT_ID"
```

:::tip A dedicated export project
If your security team prefers not to touch policy on an existing project, create a small dedicated project for the export (for example `yourcompany-abmatic-export`), apply the exception only there, and query the table from your main project. BigQuery queries can read tables across projects in the same location.
:::

If none of that is possible, use **Sign in with Google** instead. That route uses a person in your own organization, so the constraint doesn't apply. See [Setup, Option B](/integrations/bigquery/setup#option-b-sign-in-with-google).

## Other organization policies to know about

| Policy | Effect on the export | What to do |
|---|---|---|
| **Resource location restriction** (`gcp.resourceLocations`) | Creating the dataset in a location your org doesn't allow fails | Create the dataset in an allowed location (Step 3) |
| **VPC Service Controls** perimeter around BigQuery | Calls from outside the perimeter are refused, even with the right roles | Add an ingress rule for the service account, or export into a project outside the perimeter |

## Removing access later

```bash
gcloud projects remove-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.jobUser" --condition=None
gcloud projects remove-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.dataEditor" --condition=None
```

For a dataset-level grant:

```sql
REVOKE `roles/bigquery.dataEditor`
ON SCHEMA `your-project-id.abmatic`
FROM "serviceAccount:abmatic-bigquery-export@abmatic.iam.gserviceaccount.com";
```

Removing the `abmatic_workspace` label from the dataset also stops every write at once, even while the roles are still in place. Also click **Disable** on the card in Abmatic AI so the schedule stops trying. See [Security and privacy](/integrations/bigquery/security#revoking-access).
