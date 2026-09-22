---
id: service-account
title: BigQuery Service Account Setup (Google Cloud)
sidebar_label: Service Account Setup
sidebar_position: 3
---

# Granting the Abmatic AI Service Account (Google Cloud)

This is the **recommended** way to connect the BigQuery export. You grant a Google service account owned by Abmatic AI two BigQuery roles in your Google Cloud project. Abmatic AI then writes to BigQuery as that service account.

**Why this route:**

- **It survives people leaving.** Access belongs to your project, not to an employee's Google login, so the export never breaks because someone changed teams.
- **No consent screen** and no Google Workspace third-party app approval.
- **Least privilege.** You decide exactly what it can touch, down to one dataset, and you can see and remove the grant in IAM at any time.
- **No key to manage.** You never create, download or rotate a key. Abmatic AI holds its own service account's credentials.

| | |
|---|---|
| Principal to grant | `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com` |
| Role 1 | **BigQuery Job User** (`roles/bigquery.jobUser`) on the **project**. Lets it run load jobs in your project. |
| Role 2 | **BigQuery Data Editor** (`roles/bigquery.dataEditor`) on the **project**, or only on **one dataset**. Lets it create and write the table. |

The Google Cloud steps take a few minutes and need someone with permission to change IAM on the project (for example **Project IAM Admin** or **Owner**), or on the dataset (**BigQuery Data Owner** or **BigQuery Admin**).

:::note Abmatic AI changes nothing in your Google Cloud
Everything on this page is done by you, in your own project. Abmatic AI never asks for owner access and cannot grant itself anything.
:::

## Choose your access level

| Option | Grant | Abmatic AI can | Pick in the app |
|---|---|---|---|
| **A. Project level** (simplest) | Job User + Data Editor on the project | Create a new dataset for you, and create and write its table | **Create a new dataset** or **Existing dataset** |
| **B. One dataset only** (least privilege) | Job User on the project + Data Editor on **one** dataset you create | Create and write tables in that dataset only. It can't see or change any other dataset. | **Existing dataset** |

We recommend **Option B** for most data teams. The steps below cover both.

## Step 1: Make sure the BigQuery API is enabled

It is on by default in new projects. To check, open **Google Cloud console > APIs & Services > Enabled APIs & services** for your project and look for **BigQuery API**. If it is missing, click **+ Enable APIs and services**, search for **BigQuery API** and click **Enable**.

Or with `gcloud`:

```bash
gcloud services enable bigquery.googleapis.com --project=YOUR_PROJECT_ID
```

## Step 2: Grant the roles

### Option A: project level

**In the Cloud Console**

1. Open **Google Cloud console > IAM & Admin > IAM** and select your project at the top.
2. Click **Grant access**.
3. In **New principals**, paste `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com`.
4. In **Select a role**, choose **BigQuery > BigQuery Job User**.
5. Click **Add another role** and choose **BigQuery > BigQuery Data Editor**.
6. Click **Save**.

**With gcloud**

```bash
PROJECT_ID=your-project-id
SA=abmatic-bigquery-export@abmatic.iam.gserviceaccount.com

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.jobUser" --condition=None

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.dataEditor" --condition=None
```

### Option B: one dataset only (least privilege)

First grant **BigQuery Job User** on the project (load jobs always run at project level), then create the dataset and grant **BigQuery Data Editor** on that dataset only.

**In the Cloud Console**

1. **Job User on the project:** follow Option A steps 1 to 4 (**IAM & Admin > IAM > Grant access**, principal `abmatic-bigquery-export@abmatic.iam.gserviceaccount.com`, role **BigQuery Job User**) and click **Save**.
2. **Create the dataset:** open **BigQuery** (BigQuery Studio). In the **Explorer** pane, click the three-dot menu next to your project, then **Create dataset**. Enter a **Dataset ID** such as `abmatic`, choose a **Location** (for example `US` or `EU`), and click **Create dataset**.
3. **Data Editor on the dataset:** in the **Explorer**, click the three-dot menu next to the new dataset and choose **Share** (in some console versions, open the dataset and click **Sharing > Permissions**). Click **Add principal**, paste the service account email, choose the role **BigQuery Data Editor**, and click **Save**.

**With gcloud, bq and SQL**

```bash
PROJECT_ID=your-project-id
DATASET=abmatic
LOCATION=US
SA=abmatic-bigquery-export@abmatic.iam.gserviceaccount.com

# 1. Job User on the project
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SA" --role="roles/bigquery.jobUser" --condition=None

# 2. Create the dataset
bq --location="$LOCATION" mk --dataset \
  --description "Abmatic AI page-view export" "$PROJECT_ID:$DATASET"

# 3. Data Editor on that dataset only
bq query --use_legacy_sql=false --location="$LOCATION" \
  "GRANT \`roles/bigquery.dataEditor\` ON SCHEMA \`$PROJECT_ID.$DATASET\` TO \"serviceAccount:$SA\""
```

You can also run the `GRANT` statement on its own in the BigQuery SQL editor:

```sql
GRANT `roles/bigquery.dataEditor`
ON SCHEMA `your-project-id.abmatic`
TO "serviceAccount:abmatic-bigquery-export@abmatic.iam.gserviceaccount.com";
```

:::tip Pick the dataset location once
BigQuery can't move a dataset to another location. Choose the location where the rest of your warehouse lives, because queries that join tables must run in one location.
:::

## Step 3: Verify the grant

Project-level roles held by the service account:

```bash
gcloud projects get-iam-policy "$PROJECT_ID" \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:$SA" \
  --format="table(bindings.role)"
```

You should see `roles/bigquery.jobUser` (and, for Option A, `roles/bigquery.dataEditor`).

Dataset-level access (Option B):

```bash
bq show --format=prettyjson "$PROJECT_ID:$DATASET" | grep -B2 -A2 abmatic-bigquery-export
```

## Step 4: Connect in Abmatic AI

1. In Abmatic AI, go to **Settings > Integrations > Data Warehouse** and click **Authorize** on the **Google BigQuery** card.
2. In the **Connect Google BigQuery** dialog, click **I have granted access**.
3. Pick your **Google Cloud project**, then your dataset (**Existing dataset** for Option B), check the schedule and filters, and click **Save and start**.

The rest of the walkthrough, with screenshots, is in the [Setup guide](/integrations/bigquery/setup#step-3-pick-the-destination).

## If your organization blocks outside service accounts

Many organizations turn on the **Domain restricted sharing** organization policy (`constraints/iam.allowedPolicyMemberDomains`). It allows only identities from your own Google organization in IAM policies. When it is on, adding Abmatic AI's service account fails with an error like:

> One or more users named in the policy do not belong to a permitted customer.

To allow it for the export project only, an **Organization Policy Administrator** can override the constraint on that one project. The rest of the organization stays locked down.

**In the Cloud Console**

1. Select the export project, then open **IAM & Admin > Organization Policies**.
2. Find **Domain restricted sharing** (`iam.allowedPolicyMemberDomains`) and click it, then **Manage policy**.
3. Under **Policy source**, choose **Override parent's policy**.
4. Add a rule with **Policy values: Allow All**, then click **Set policy**.
5. Grant the roles as in Step 2.
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

# grant the roles (Step 2), then optionally restore inheritance:
gcloud org-policies reset iam.allowedPolicyMemberDomains --project="$PROJECT_ID"
```

:::tip A dedicated export project
If your security team prefers not to touch policy on an existing project, create a small dedicated project for the export (for example `yourcompany-abmatic-export`), apply the exception only there, and query the table from your main project. BigQuery queries can read tables across projects in the same location.
:::

If none of that is possible, use **Sign in with Google** instead. That route uses a person in your own organization, so the constraint doesn't apply. See [Setup, Option B](/integrations/bigquery/setup#option-b-sign-in-with-google).

## Other organization policies to know about

| Policy | Effect on the export | What to do |
|---|---|---|
| **Resource location restriction** (`gcp.resourceLocations`) | Creating a dataset in a location your org doesn't allow fails | Create the dataset yourself in an allowed location and choose **Existing dataset** |
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

Also click **Disable** on the card in Abmatic AI so the schedule stops trying. See [Security and privacy](/integrations/bigquery/security#revoking-access).
