---
id: google-ads
title: Google Ads (Customer Match)
sidebar_label: Google Ads
sidebar_position: 10
---

# Google Ads (Customer Match)

Reach your target accounts on Google Search, Display, YouTube, and Gmail by syncing your Abmatic AI account and contact lists to Google Ads as **Customer Match** audiences.

:::info Not a campaign tile — it's an audience sync
Google Ads is **not** created from a tile in the **Create Campaign** dialog (the Google tile is currently hidden there). Instead, you push an account or contact collection to Google Ads as a **Customer Match** audience using the collection's menu. You then build and run the actual ad campaigns inside Google Ads, targeting the audience Abmatic AI created.
:::

## How it works

1. **Connect** — Authorize Google Ads in **Integrations**.
2. **Build** — Create an account or contact collection with your target criteria.
3. **Upload** — Push the collection to Google Ads as a Customer Match audience from its menu.
4. **Advertise** — Target that audience in your Google Ads campaigns (Search, Display, YouTube, Remarketing).

## Getting started

### Step 1: Connect Google Ads

**Prerequisites:**
- A Google Ads account with Customer Match access.
- Admin access to authorize the integration.

**Connect your account:**

1. Open **Integrations** from the sidebar.
2. Find the **Google Ads** card.
3. Click **Authorize** and sign in with your Google account.
4. Select which Google Ads account to connect (if you have more than one) and confirm the permissions.

Once connected, the card status shows **Active**.

### Step 2: Build an account or contact collection

Create a list of the companies or people you want to reach:

1. Go to **Accounts** or **Contacts**.
2. Create a collection and define your criteria (for example industry, company size, revenue, technologies, or CRM properties).
3. Save the collection.

### Step 3: Create a Customer Match audience

Push the collection to Google Ads:

1. In **Accounts** or **Contacts**, open the collection you want to sync.
2. Click the collection's **menu** (three dots).
3. Select **Create Google Ads Customer Match**.

Abmatic AI then runs a short upload, shown in a **three-step popup**:

| Step | What happens |
|------|--------------|
| **Preparing** | Abmatic AI assembles and enriches the records in your collection |
| **Creating** | A new Customer Match user list is created in Google Ads |
| **Uploading** | The matched records are uploaded to that list |

When it finishes, the popup confirms how many records were sent — for example **"Uploaded N of M contacts."** If some records couldn't be uploaded (for example, they were missing the data Google needs), the popup shows a **skipped-records summary** so you know exactly what was left out.

:::tip Audience processing
After the upload, Google needs time to match your records against its user base and make the audience available for targeting. The matched audience won't be usable in Google Ads immediately — allow time for Google to process it before you launch a campaign against it.
:::

## Using the audience in Google Ads

Once your Customer Match list is processed inside Google Ads, you can target it across Google's properties. These are standard Google Ads campaign types — you build and manage them in Google Ads, not in Abmatic AI:

| Google Ads campaign type | Good for |
|--------------------------|----------|
| **Search** | Capturing target accounts who are actively searching |
| **Display** | Building awareness across the Google Display Network |
| **YouTube** | Reaching target accounts with video |
| **Remarketing** | Re-engaging visitors from your target accounts |

**Tips that apply to any of them:**
- Create separate ad groups or campaigns for your target-account audience so you can measure them cleanly.
- Pair the Customer Match audience with Google's own in-market or intent segments for tighter targeting.
- Send clicks to a personalized landing page (see [Website Personalization](/campaigns/website-personalization)).

## Match rates

Google matches the contact data you upload against its own user base, so not every record results in a reachable user. Match rates vary with the quality and completeness of your data — including more and cleaner identifiers (such as email addresses) generally improves the match.

:::note Improving match rates
- Keep contact data clean and current.
- Include as many usable identifiers as your records have.
- Allow time for Google to finish processing after each upload.
:::

## Privacy and compliance

Customer Match requires that you handle contact data appropriately:

- **Consent** — Make sure you have the right to use the contact data for advertising.
- **First-party data** — Use data you collected directly.
- **Opt-outs** — Honor opt-out and unsubscribe requests.

Google enforces its own Customer Match policies and eligibility requirements, and these can change. Check the current Google Ads Customer Match policy requirements in Google's own documentation before you rely on this audience.

## Troubleshooting

### The upload reported skipped records

The skipped-records summary in the upload popup tells you how many records were left out. Usually this is because those records were missing the identifiers Google needs to match a user. Add the missing data to those records and re-run **Create Google Ads Customer Match**.

### The audience isn't showing in Google Ads

| Issue | Solution |
|-------|----------|
| Still processing | Wait for Google to finish matching after the upload |
| Below Google's minimum | Google requires an audience to reach a minimum matched size before it can be targeted; add more records |
| Authorization issue | Re-check the Google Ads connection in **Integrations** |
| Policy / eligibility | Review Google's current Customer Match policy requirements |

## Related

- [Google Customer Match](/audiences/google-customer-match) — detailed audience-sync guide
- [Account Lists](/audiences/accounts) — building target account collections
- [Conversions](/conversions/overview) — tracking campaign results
