---
id: gmail
title: Gmail Integration
sidebar_label: Gmail
sidebar_position: 2
---

# Gmail Integration

AI Sequences in Abmatic AI can draft and send personalized emails on your behalf, but they need a connected email account to do it. The Gmail integration links your Google account via OAuth so that sequence tasks, both automatic and manual, send from your real Gmail address.

## Why Connect Gmail?

| Without Gmail Integration | With Gmail Integration |
|---------------------------|------------------------|
| Sequence email tasks sit in a queue with no way to send | Emails send automatically when tasks come due |
| Manual copy-paste into your email client | One-click send directly from the Tasks grid |
| No unified sending identity | Emails come from your actual Gmail address |
| No connection between outreach and sequences | Full attribution back to the campaign and sequence step |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Automatic email sending** | AI Sequence steps execute on schedule without manual intervention |
| **Manual send with one click** | Review the personalized draft, then click Send Email in the Tasks grid |
| **Real Gmail identity** | Recipients see your name and address, not a generic sender |
| **OAuth security** | No passwords stored in Abmatic -- Google handles authentication |
| **Revoke anytime** | Disconnect from Abmatic or revoke access in your Google account settings |

![Gmail on the Integrations page](/img/screenshots/integrations-gmail.png)

*The Communications section of the Integrations page showing Gmail and Slack cards with their connection status.*

## Getting Started

### Prerequisites

Before connecting:
- A Google Workspace or personal Gmail account
- Permission to authorize third-party apps (your Google Workspace admin may need to allow the Abmatic AI app)
- At least one AI Sequence campaign that includes email steps

### Step 1: Connect Your Gmail Account

1. Navigate to **Settings > Integrations** in Abmatic AI
2. Find **Gmail** under the **Communications** section
3. Click **Authorize**
4. Google's consent screen opens in the same tab
5. Select the Google account you want to send from
6. Review the requested permissions (see [Required Permissions](#required-permissions) below)
7. Click **Allow**
8. You are redirected back to Abmatic AI and the Gmail card shows **Active**

### Step 2: Verify the Connection

After authorizing, confirm the integration is active:

1. The Gmail integration card should display a green **Active** badge
2. A **Disable** button replaces the **Authorize** button
3. Navigate to any AI Sequence campaign with email steps
4. In the **Tasks** tab, the **Send Email** button should be enabled (it is disabled when Gmail is not connected)

## Required Permissions

During the OAuth flow, Google asks you to grant the following scopes:

| Permission | Scope | Why It Is Needed |
|------------|-------|------------------|
| **Read and modify email** | `gmail.modify` | Allows Abmatic to manage sent messages and track delivery |
| **Basic mail settings** | `gmail.settings.basic` | Reads your sending configuration (display name, signature) |
| **Send email on your behalf** | `gmail.send` | Sends emails from your address when sequence tasks execute |
| **View your email address** | `openid`, `profile`, `email` | Identifies which Google account is connected |

:::tip Least Privilege
Abmatic AI does not request full mailbox access. It cannot read your inbox or delete messages. The `gmail.modify` scope is required by Google's API to manage the messages Abmatic sends, but Abmatic only interacts with outgoing sequence emails.
:::

## How It Works with AI Sequences

The Gmail integration powers the email-sending steps in AI Sequence campaigns.

### Automatic Email Steps

When a sequence step is configured as an **Automatic Email Template**:

1. Abmatic personalizes the subject and body for the contact
2. When the task comes due, Abmatic sends the email through your connected Gmail account automatically
3. The task status updates to **Done**

### Manual Email Steps

When a sequence step is configured as a **Manual Email Template**:

1. Abmatic personalizes the draft and queues the task
2. You review the personalized subject and body in the Tasks grid
3. Click **Send Email** to dispatch the message
4. The task status updates to **Done**

### Other Step Types

Gmail is not used for LinkedIn message steps or call script steps. Those step types use their own channels.

## What Gets Synced

| Data | Direction | Details |
|------|-----------|---------|
| **OAuth tokens** | Google to Abmatic | Access and refresh tokens stored securely; used to authenticate API calls |
| **Sender identity** | Google to Abmatic | Your name and email address displayed on the integration card |
| **Outgoing emails** | Abmatic to Google | Personalized emails sent through the Gmail API on your behalf |

Abmatic does **not** import or read your inbox, contacts, or calendar.

## Best Practices

### Choosing the Right Account

| Recommendation | Why |
|----------------|-----|
| Use a dedicated outreach address (e.g., `outreach@yourcompany.com`) | Keeps sequence emails separate from personal mail |
| Use a Google Workspace account | Better deliverability than consumer Gmail; custom domain |
| Warm up a new address gradually | Avoid triggering spam filters by ramping up volume over days |

### Staying Within Sending Limits

Google enforces daily sending limits:

| Account Type | Daily Sending Limit |
|--------------|---------------------|
| Google Workspace | 2,000 emails per day |
| Personal Gmail | 500 emails per day |

:::warning Sending Limits
If your sequences exceed Google's daily sending limit, remaining tasks will fail until the limit resets (typically after 24 hours). Plan your sequence enrollment volume accordingly.
:::

### Improving Deliverability

| Practice | Impact |
|----------|--------|
| Authenticate your domain (SPF, DKIM, DMARC) | Reduces spam classification |
| Personalize subject lines and body | Improves open rates and avoids bulk-send patterns |
| Keep sequences under 5 steps | Avoids fatigue and spam complaints |
| Monitor bounce rates | High bounces hurt sender reputation |

## Troubleshooting

### Common OAuth Errors

| Error | Cause | Solution |
|-------|-------|----------|
| **"Access blocked: This app's request is invalid"** | Google detects a misconfigured redirect URI | Contact Abmatic support -- this is a server-side configuration |
| **"This app isn't verified"** | Google warns about unverified apps | Click **Advanced > Go to Abmatic AI (unsafe)** if you trust the app, or ask your Workspace admin to allow it |
| **"You need permission from your organization"** | Google Workspace admin has restricted third-party apps | Ask your admin to allow the Abmatic AI app in the Google Admin Console under **Security > API Controls** |
| **"Token has been expired or revoked"** | Refresh token is no longer valid | Disconnect and reconnect the integration |

### Send Email Button Is Disabled

If the **Send Email** button in the Tasks grid is grayed out:

1. Go to **Settings > Integrations**
2. Confirm the Gmail card shows **Active**
3. If it shows **Inactive**, click **Authorize** and complete the OAuth flow
4. Return to the campaign Tasks tab -- the button should now be enabled

### Emails Not Sending

| Symptom | Check |
|---------|-------|
| Task stays in "Active" status | Verify Gmail integration is connected and active |
| Task fails silently | Check if you have exceeded Google's daily sending limit |
| Recipient never receives email | Check your Gmail Sent folder to confirm delivery; check spam filters on the recipient side |
| "Unauthorized" errors in logs | Refresh token may have expired -- disconnect and reconnect |

### Reconnecting After a Token Expires

Google refresh tokens can expire if:
- You revoke access in your Google Account settings
- The token is unused for 6 months
- Your Google Workspace admin revokes third-party app access

To reconnect:

1. Go to **Settings > Integrations**
2. Click **Disable** on the Gmail card to clear the stale token
3. Click **Authorize** to start a fresh OAuth flow
4. Complete the Google consent flow
5. Verify the card shows **Active**

## Disconnecting

To remove the Gmail integration:

1. Go to **Settings > Integrations**
2. Click **Disable** on the Gmail card
3. Confirm the action in the dialog

After disconnecting:
- Pending email tasks will remain in the queue but cannot be sent
- The **Send Email** button in Tasks will be disabled
- No further emails will be sent from your account
- You can reconnect at any time by clicking **Authorize** again

Optionally, you can also revoke access from the Google side:
1. Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. Find **Abmatic AI** in the list
3. Click **Remove Access**

## Related Documentation

| Topic | Link |
|-------|------|
| AI Sequences and email campaigns | [Email Campaigns](/campaigns/email-campaigns) |
| Slack notifications | [Slack Integration](/integrations/slack) |
| All integrations | [Integrations Overview](/integrations/overview) |
| SDR Agent | [SDR Agent](/ai-agents/sdr-agent) |
