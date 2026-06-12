---
id: calendar
title: Google Calendar Integration
sidebar_label: Google Calendar
sidebar_position: 4
---

# Google Calendar Integration

Connect Google Calendar so Abmatic AI can book meetings on your behalf. This integration powers the **"Book a meeting"** handoff in Agentic Chat: when a website visitor wants to talk to your team, the agent offers real open time slots from your calendar and creates the event automatically.

It also drives **meeting routing**, so demo requests can be assigned to the right account executive (AE) based on your availability and meeting types.

![Google Calendar card in the Communications section of the Integrations page](/img/screenshots/calendar-card.png)
*The Google Calendar card appears in the Communications section. The blurb reads "Connect Google Calendar to enable meeting booking through Agentic Chat."*

---

## What You Can Do

| Capability | What It Does |
|------------|--------------|
| **Meeting booking in Agentic Chat** | The chat agent offers open slots and books the meeting on your calendar |
| **Availability rules** | Control timezone, meeting length, how far ahead people can book, and your working hours |
| **Meeting routing** | Define named meeting types and route demo requests to the right AE |
| **Ad-hoc events** | Create a one-off calendar event (optionally with a Google Meet link) from inside Abmatic AI |

---

## Connecting Google Calendar

The Google Calendar card lives in the **Communications** section of the Integrations page, next to Gmail, Slack, and Zoom.

1. Go to **Settings > Integrations**.
2. Scroll to the **Communications** section.
3. On the **Google Calendar** card, click **Authorize**.
4. A Google sign-in popup opens. Choose the Google account whose calendar you want Abmatic AI to use.
5. Review the requested permissions and click **Allow**.
6. The popup closes and the card shows a green **Active** status.

:::tip Connect Zoom too
After you connect Google Calendar, Abmatic AI may prompt you to also connect **Zoom** so booked meetings can include a Zoom link. See the [Zoom integration](/integrations/zoom) for details.
:::

---

## Calendar Settings

Once connected, click the **Settings** gear on the Google Calendar card to open **Calendar Settings**. There are two tabs: **Availability** and **Create Event**, plus an **Event Types** list at the bottom.

### Availability tab

The Availability tab is where you tell Abmatic AI when people can book time with you.

![Calendar Settings Availability tab with timezone, demo meeting duration, advance notice, max days ahead, and per-day working hours](/img/screenshots/calendar-availability.png)
*The Availability tab controls your timezone, default meeting length, booking window, and working hours for each day of the week.*

| Setting | What It Controls |
|---------|------------------|
| **Timezone** | The timezone your availability is expressed in (for example, America/Los_Angeles) |
| **Demo Meeting Duration** | Default meeting length: **15, 30, 45, 60, or 90 minutes** |
| **Advance Notice (days)** | The minimum lead time before a meeting can be booked (for example, 1 day means nothing same-day) |
| **Max Days Ahead** | How far into the future people can book (for example, 30 days) |
| **Working Hours** | A start and end time for each weekday. Toggle a day off (Saturday/Sunday in the example) to mark it unavailable |

Set the start and end times for each day you want to be bookable, then click **Save Availability**.

:::note Working hours per day
Each day has its own start/end time and an on/off toggle. Days you switch off show as "Unavailable" and never offer slots.
:::

### Create Event tab

The **Create Event** tab lets you create a one-off calendar event directly from Abmatic AI, without leaving the app. Fill in the event name, date, time, duration, attendee email(s), and timezone. Turn on **Add Google Meet link** to attach a video conferencing link automatically.

This is handy for ad-hoc bookings or testing that your calendar connection works end to end.

---

## Meeting Types (Event Types)

At the bottom of Calendar Settings you'll find your **Event Types** — the named meeting templates the meeting router uses to assign and book the right kind of meeting.

![Event Types list at the bottom of Calendar Settings with name, duration, advance notice, max ahead, and a default star](/img/screenshots/calendar-meeting-types.png)
*Each meeting type has its own duration, advance notice, and booking window. A star marks the default type used when no specific type is requested.*

Each meeting type stores its own:

- **Name** (for example, "Demo Request" or "In-person Meeting")
- **Duration**
- **Advance Notice**
- **Max Ahead** (booking window)

To add one, click **+ Add Event Type**, fill in the details, and save. Use the edit and delete icons in the **Actions** column to change or remove a type. One meeting type is marked **Default** (shown with a star) — this is the type used when a visitor books without choosing a specific meeting kind.

:::tip Default AE routing
Meeting types work together with the **Default AE** setting under **Settings > Users**. The user marked as the default AE (shown with a star next to their name) is the calendar a meeting is booked against when Agentic Chat hands a visitor off to "book a meeting." Make sure your default AE has Google Calendar connected and their availability set.
:::

---

## How It Ties Into Agentic Chat

Google Calendar is what makes the **"Book a meeting"** email-handoff mode in Agentic Chat work:

1. A visitor chats with your Agentic Chat agent and asks to talk to someone.
2. The agent reads the default AE's availability (timezone, working hours, advance notice, max days ahead).
3. The agent offers real open slots and confirms the visitor's choice.
4. Abmatic AI creates the event on the AE's Google Calendar and sends the invite.

If you also connect [Zoom](/integrations/zoom), booked meetings can include a Zoom join link.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Card still shows **Inactive** after authorizing | Re-open the Google Calendar card and click **Authorize** again; make sure popups are not blocked |
| No slots offered in Agentic Chat | Confirm the default AE has Google Calendar connected and working hours set on the Availability tab |
| Meetings booked at the wrong time | Check the **Timezone** on the Availability tab matches the AE's actual timezone |
| Want to stop syncing | Click **Disable** on the Google Calendar card |

---

## Related Documentation

- [Zoom Integration](/integrations/zoom) — Add Zoom links to booked meetings
- [Integrations Overview](/integrations/overview) — All integration options
- [Slack Integration](/integrations/slack) — Real-time visitor alerts
