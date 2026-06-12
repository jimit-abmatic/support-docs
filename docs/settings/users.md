---
id: users
title: User Management
sidebar_label: Users
sidebar_position: 3
---

# User Management

Collaborate effectively with your entire team by inviting colleagues to Abmatic AI. Assign roles, manage permissions, and keep your account secure with centralized user management.

![User Management grid showing team members with their Email, User Role (Admin/Sales), Status & Actions, and name columns](/img/screenshots/set-users.png)

## Why Team Collaboration Matters

Modern B2B marketing and sales require tight coordination between teams. With Abmatic AI's user management:

- **Marketing teams** can create and optimize personalization campaigns together
- **Sales teams** can access visitor insights and AI agent conversations
- **Leadership** can monitor performance dashboards and analytics
- **Everyone** stays aligned on target accounts and engagement strategies

## User Roles

Abmatic AI offers **three user roles**, each shown with its own icon in the Users grid:

| Role | Icon | Description | Best For |
|------|------|-------------|----------|
| **Admin** | shield | Full access to all features, settings, integrations, and user management | Team leads, account owners, marketing managers |
| **Regular User** | person | Access to campaigns, audiences, analytics, and day-to-day operations | Marketing specialists, sales team members |
| **Sales** | support-agent | A restricted role for account executives — connects Google Calendar and Zoom for meeting routing only | AEs who only need their calendar and conferencing connected |

The **Sales** role is more limited than the others. Sales users sign in through a Google-only flow and get a focused dashboard for connecting their meeting tools. See [Sales Role & Sales Sign-In](/settings/sales-role) for details.

### Role Permissions

| Feature | Admin | Regular User | Sales |
|---------|-------|--------------|-------|
| View dashboards & analytics | ✓ | ✓ | — |
| Create & edit campaigns | ✓ | ✓ | — |
| Manage audiences & accounts | ✓ | ✓ | — |
| Use AI agents (Clara, Alex) | ✓ | ✓ | — |
| Access visitor reveal data | ✓ | ✓ | — |
| Connect Google Calendar & Zoom | ✓ | ✓ | ✓ |
| Manage integrations | ✓ | — | — |
| Invite & manage users | ✓ | — | — |
| Account settings | ✓ | — | — |

:::note AI agent names
The in-app AI agent personas are **Clara (AI ABM)** and **Alex (AI SDR)**. Admins and Regular Users can use them.
:::

## Inviting Team Members

Getting your team onboarded is simple:

1. Navigate to **Settings → Users**
2. Click the **+ User** button in the top right
3. Enter your colleague's email address
4. Select their role — **Regular User**, **Admin**, or **Sales**
5. Click **Invite**

![Invite User dialog with the User Role dropdown open, showing Regular User, Admin, and Sales options](/img/screenshots/set-users-invite.png)

Your teammate will receive an email invitation with a link to create their account and set a password. (Sales users sign in with Google instead — see [Sales Role & Sales Sign-In](/settings/sales-role).)

:::tip Quick Onboarding
Share a brief overview of Abmatic AI with new team members before sending invites. Point them to our [Quick Start Guide](/getting-started/quick-start) to get up to speed fast.
:::

## Managing Your Team

### User List View

The Users page displays all team members in an interactive grid:

- **Email** — User's email address (editable)
- **User Role** — Admin, Regular User, or Sales (editable dropdown for admins)
- **Status & Actions** — Current status and the available action (Invite / Reactivate / Deactivate)
- **First Name / Last Name** — Contact details
- **Company Name** — Organization
- **Mobile Phone** — Phone number
- **Google Calendar** — a **Connected** / **Not Connected** chip showing whether the user has linked their Google Calendar
- **Zoom** — a **Connected** / **Not Connected** chip showing whether the user has linked Zoom
- **Default AE** — a star toggle to mark the user as the default account executive for meeting routing

:::info Editable Fields
Admins can edit user details directly in the grid. Click on a cell to update the information.
:::

### Default filter (hidden inactive users)

By default, the Users grid only shows users who are **both active and invited** — inactive and un-invited users are hidden so the list stays clean. To find a hidden user, **type at least 3 characters** in the search box; matching users (including inactive ones) will then appear.

### Google Calendar, Zoom, and the Default AE

For meetings booked through Abmatic AI to land on the right calendar, account executives connect their tools and one is designated the default:

- **Google Calendar / Zoom chips** show, at a glance, whether each user has connected those tools.
- **Default AE** is the account executive a meeting is routed to when no more specific routing applies. Click the **star** in a user's row to set them as the Default AE.
- The Default AE star only appears for users who have **Google Calendar connected**, and only **admins** can set it.

:::tip
Account executives typically connect their calendar and Zoom through the Sales sign-in flow. See [Sales Role & Sales Sign-In](/settings/sales-role) for how AEs get set up and routed.
:::

### User Statuses

| Status | Meaning |
|--------|---------|
| **Active** | User has accepted their invitation and can log in |
| **Pending / Invited** | Invitation sent, awaiting user acceptance |
| **Not Invited** | User exists (e.g. imported from a CRM) but hasn't been invited yet |
| **Deactivated** | Account disabled, user cannot access Abmatic AI |

### Changing User Roles

Need to promote someone to admin or adjust permissions?

1. Find the user in the list
2. Click the **Role** dropdown in their row
3. Select the new role
4. Changes apply immediately

### Deactivating Users

When a team member leaves or no longer needs access:

1. Find the user in the list
2. Click the **Deactivate** button
3. The user loses access immediately

Deactivated users can be reactivated later if needed—their data and history are preserved.

### Reactivating Users

To restore access for a deactivated user:

1. Find the deactivated user in the list
2. Click the **Reactivate** button
3. The user regains their previous access level

## Importing users from your CRM

If you have a CRM connected, you can bring its users straight into Abmatic AI instead of inviting each one by hand. Both **Salesforce** and **HubSpot** are supported with the same flow.

### Salesforce

When [Salesforce](/integrations/crm/salesforce) is connected:

1. Click the **⋮** (three-dot) menu next to the search bar
2. Select **Import from Salesforce** to bulk-import users
3. An extra **Salesforce UserId** column appears, and a **Pull from Salesforce** action refreshes a user's data from Salesforce

### HubSpot

When [HubSpot](/integrations/crm/hubspot) is connected, the same options are available with HubSpot:

1. Click the **⋮** menu next to the search bar
2. Select **Import from HubSpot** to bulk-import users
3. An extra **HubSpot UserId** column appears, and a **Pull from HubSpot** action refreshes a user's data from HubSpot

Importing from your CRM is useful for:
- Quickly onboarding your entire sales team
- Keeping user information in sync with your CRM
- Mapping Abmatic AI users to their CRM user IDs

:::note
Imported users may show as **Not Invited** until you invite them. Remember the default filter hides un-invited users — search (3+ characters) to find them.
:::

## Best Practices

### Security
- **Use individual accounts** — Avoid sharing login credentials
- **Deactivate promptly** — Remove access as soon as someone leaves
- **Review periodically** — Audit your user list quarterly

### Team Organization
- **Match roles to responsibilities** — Not everyone needs admin access
- **Document access policies** — Keep track of who has access and why
- **Start with Regular User** — Promote to Admin only when needed

## Troubleshooting

### Invitation Not Received

1. Ask the user to check their spam/junk folder
2. Verify the email address is correct
3. Click **Invite** again to resend
4. Try using an alternate email address

### User Can't Access Certain Features

1. Check their assigned role in the Users list
2. Admins have access to all features; Regular Users have limited access
3. Promote to Admin if they need additional permissions

### Can't Deactivate a User

- Only Admins can deactivate users
- You cannot deactivate yourself
- Account owners cannot be deactivated

## Related Documentation

- [Account Settings](/settings/account) — Configure your organization's account
- [Sales Role & Sales Sign-In](/settings/sales-role) — The Sales role, Google sign-in, and Default AE routing
- [Usage](/settings/usage) — Monitor credit consumption
- [Slack Integration](/integrations/slack) — Set up team notifications
