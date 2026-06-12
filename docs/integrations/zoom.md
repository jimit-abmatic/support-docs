---
id: zoom
title: Zoom Integration
sidebar_label: Zoom
sidebar_position: 5
---

# Zoom Integration

Connect Zoom so Abmatic AI can generate Zoom meeting links. This is most useful alongside [Google Calendar](/integrations/calendar): when a meeting is booked, it can include a Zoom join link automatically.

![Zoom card in the Communications section of the Integrations page](/img/screenshots/zoom-card.png)
*The Zoom card sits in the Communications section, next to Gmail, Slack, and Google Calendar. The blurb reads "Connect Zoom to create Zoom meeting links."*

---

## Connecting Zoom

The Zoom card lives in the **Communications** section of the Integrations page.

1. Go to **Settings > Integrations**.
2. Scroll to the **Communications** section.
3. On the **Zoom** card, click **Authorize**.
4. Sign in to Zoom in the popup and approve the requested access.
5. The card shows a green **Active** status when connected.

:::tip Connect Google Calendar too
Zoom is most powerful when paired with Google Calendar — that's how booked meetings get a Zoom link. After you connect one, Abmatic AI prompts you to connect the other. See the [Google Calendar integration](/integrations/calendar).
:::

---

## Booking a Zoom Meeting

Click the **Settings** gear on the Zoom card to open the **Book a Zoom Meeting** dialog. This generates a Zoom meeting link for any date and time using your connected Zoom account.

![Book a Zoom Meeting dialog with date, time, duration, and email fields](/img/screenshots/zoom-settings.png)
*The Book a Zoom Meeting dialog. It creates a standalone Zoom link — no calendar event or email is sent from this dialog.*

Fill in:

| Field | What It Does |
|-------|--------------|
| **Date** | The day of the meeting |
| **Time** | The start time |
| **Duration** | Meeting length (for example, 30 min) |
| **Email** | The attendee's email address |

The dialog shows your timezone at the bottom. Click **Book Meeting** to generate the meeting. Zoom returns:

- A **join URL**
- A **meeting ID**
- A **password**

:::note Standalone link generator
This dialog creates a Zoom meeting link on its own — it does **not** create a calendar event or send an email. To attach Zoom links to meetings booked through Agentic Chat, connect [Google Calendar](/integrations/calendar) as well.
:::

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Card stays **Inactive** after authorizing | Re-open the Zoom card and click **Authorize** again; allow popups |
| No Zoom link on booked meetings | Confirm both Zoom and Google Calendar are connected and Active |
| Want to disconnect | Click **Disable** on the Zoom card |

---

## Related Documentation

- [Google Calendar Integration](/integrations/calendar) — Meeting booking and availability
- [Integrations Overview](/integrations/overview) — All integration options
