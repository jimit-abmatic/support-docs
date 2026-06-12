---
id: sales-role
title: Sales Role & Sales Sign-In
sidebar_label: Sales Role
sidebar_position: 12
---

# Sales Role & Sales Sign-In

Abmatic AI includes a dedicated **Sales** user role for account executives (AEs) and other sellers who only need their meeting and conferencing tools connected — not the full marketing workspace. Sales users sign in through a Google-only flow and land on a restricted dashboard.

This page covers the Sales role, how Sales users sign in, the Default AE designation, and what Sales users can see.

:::note
The Sales role is one of three user roles. For inviting users and the full Users grid, see [User Management](/settings/users).
:::

## The Sales role

Abmatic AI has **three user roles**:

| Role | Icon | Who it's for |
|------|------|--------------|
| **Admin** | shield | Account owners and managers — full access |
| **Regular User** | person | Marketing and sales team members — day-to-day work |
| **Sales** | support-agent | Account executives who only need their calendar and conferencing connected for meeting routing |

The **Sales** role is the most limited. Instead of the full app, a Sales user gets a focused dashboard for connecting the tools Abmatic AI needs to book meetings on their behalf.

## Inviting a Sales user

Admins add Sales users the same way they add anyone else:

1. Go to **Settings → Users**
2. Click **+ User**
3. Enter the person's email address
4. In the **User Role** dropdown, choose **Sales**
5. Click **Invite**

![Invite User dialog with the User Role dropdown open, showing Regular User, Admin, and Sales options](/img/screenshots/sales-role-invite.png)

## How Sales users sign in

Sales users sign in through a **Google-only** sign-in page at **`/sales/sign-in`**. They authenticate with their Google account — there's no email/password option on this flow. Using Google sign-in is what lets Abmatic AI connect the AE's **Google Calendar** for meeting scheduling.

## The Sales Dashboard

After signing in, a Sales user lands on a **restricted Sales Dashboard**. Rather than the full Abmatic AI workspace, it shows only the integration cards a seller needs:

- **Google Calendar** — connect the AE's calendar so meetings can be scheduled and routed to them
- **Zoom** — connect Zoom so meeting links are created automatically when a meeting is booked

Sales users don't see campaigns, audiences, analytics, or other settings — just the cards for connecting their meeting tools.

## Default AE

When meetings are booked through Abmatic AI (for example, by the Agentic Chat assistant), they need to be routed to an account executive's calendar. The **Default AE** is the AE used when no more specific routing applies.

- The Default AE is set from the **Users** grid using the **Default AE** star toggle.
- The star is only available for users who have **Google Calendar connected** (so meetings can actually land on their calendar).
- Only **admins** can set or change the Default AE.

To learn where the Default AE star lives alongside the Google Calendar and Zoom connection columns, see [User Management](/settings/users).

:::tip Connect the calendar first
A Sales user can only become the Default AE after they've signed in at `/sales/sign-in` and connected their Google Calendar. Have new AEs complete that step before you try to set them as the Default AE.
:::

## Related

- [User Management](/settings/users) — Roles, the Users grid, Calendar/Zoom columns, and the Default AE star
- [Account Settings](/settings/account) — Company profile and branding
