---
id: openai-ads-integration
title: OpenAI Ads Integration
sidebar_label: OpenAI Ads
sidebar_position: 6
---

# OpenAI Ads Integration

Connect your OpenAI Ads account to Abmatic AI so you can manage and sync your OpenAI ad campaigns from one place. Unlike most ad networks, OpenAI Ads connects with an **API key** rather than OAuth.

Once connected, Abmatic AI can **import your campaigns, ad groups, ads, and analytics** from OpenAI Ads. OpenAI is the source of truth — existing campaigns are updated and new ones are created in Abmatic AI based on what's in your OpenAI Ads account.

![OpenAI card in the Ad Networks section of the Integrations page](/img/screenshots/openai-integration-card.png)
*The OpenAI card sits in the Ad Networks section, alongside LinkedIn, Google Ads, and Meta. When connected it shows a green Active status and a Settings gear.*

---

## Connecting OpenAI Ads

The OpenAI card lives in the **Ad Networks** section of the Integrations page.

1. Go to **Settings > Integrations**.
2. Scroll to the **Ad Networks** section.
3. On the **OpenAI** card, click **Authorize**.
4. Paste your **OpenAI Ads API key** into the dialog.
5. Save. The card shows a green **Active** status when connected.

:::note API key, not OAuth
OpenAI Ads does not use a sign-in popup. You provide an API key from your OpenAI Ads account. Keep the key private — anyone with it can manage your ad campaigns.
:::

---

## Settings: Masked Key and Import Campaigns

Click the **Settings** gear on the OpenAI card to open the **OpenAI Ads Settings** dialog. It shows your API key in masked form (for example, `sk-svca…`) so you can confirm a key is set without exposing it.

![OpenAI Ads Settings dialog showing a masked API key and an Import Campaigns button](/img/screenshots/openai-integration-settings.png)
*The OpenAI Ads Settings dialog displays the masked API key and an Import Campaigns button. The note reads: "Pull your campaigns from OpenAI Ads into Abmatic. OpenAI is the source of truth — existing campaigns are updated and new ones are created (campaigns, ad groups, ads and analytics)."*

### Import Campaigns

Click **Import Campaigns** to pull your OpenAI Ads data into Abmatic AI. The import:

- Brings in **campaigns, ad groups, ads, and analytics**.
- Treats **OpenAI as the source of truth** — existing campaigns are updated to match, and any new ones are created.
- Runs **asynchronously** in the background. A large account can take several minutes to finish, so you can leave the dialog and check back.

After the import completes, your OpenAI Ads campaigns appear in Abmatic AI where you can view performance and manage them alongside your other channels.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Card stays **Inactive** after saving | Re-open Settings and re-paste the API key; confirm the key is valid in OpenAI Ads |
| Import seems stuck | Imports run in the background and can take several minutes for large accounts — wait and re-check |
| Campaign data looks out of date | Click **Import Campaigns** again; OpenAI Ads is the source of truth, so re-importing refreshes Abmatic AI |
| Want to disconnect | Click **Disable** on the OpenAI card |

---

## Related Documentation

- [OpenAI Ads Campaigns](/campaigns/openai-ads) — Building and running OpenAI Ads campaigns in Abmatic AI
- [Integrations Overview](/integrations/overview) — All integration options
