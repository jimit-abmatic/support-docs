---
id: users
title: User Management
sidebar_label: Users
sidebar_position: 3
---

# User Management

Collaborate effectively with your entire team by inviting colleagues to Abmatic AI. Assign roles, manage permissions, and keep your account secure with centralized user management.

![User Management](/img/screenshots/settings-users.png)

## Why Team Collaboration Matters

Modern B2B marketing and sales require tight coordination between teams. With Abmatic AI's user management:

- **Marketing teams** can create and optimize personalization campaigns together
- **Sales teams** can access visitor insights and AI agent conversations
- **Leadership** can monitor performance dashboards and analytics
- **Everyone** stays aligned on target accounts and engagement strategies

## User Roles

Abmatic AI offers two user roles to give you flexibility in managing access:

| Role | Description | Best For |
|------|-------------|----------|
| **Admin** | Full access to all features, settings, integrations, and user management | Team leads, account owners, marketing managers |
| **Regular User** | Access to campaigns, audiences, analytics, and day-to-day operations | Marketing specialists, sales reps, team members |

### Role Permissions

| Feature | Admin | Regular User |
|---------|-------|--------------|
| View dashboards & analytics | ✓ | ✓ |
| Create & edit campaigns | ✓ | ✓ |
| Manage audiences & accounts | ✓ | ✓ |
| Use AI agents (Alex, Clara) | ✓ | ✓ |
| Access visitor reveal data | ✓ | ✓ |
| Manage integrations | ✓ | — |
| Invite & manage users | ✓ | — |
| Account settings & billing | ✓ | — |

## Inviting Team Members

Getting your team onboarded is simple:

1. Navigate to **Settings → Users**
2. Click the **+ User** button in the top right
3. Enter your colleague's email address
4. Select their role (Admin or Regular User)
5. Click **Invite**

Your teammate will receive an email invitation with a link to create their account and set a password.

:::tip Quick Onboarding
Share a brief overview of Abmatic AI with new team members before sending invites. Point them to our [Quick Start Guide](/getting-started/quick-start) to get up to speed fast.
:::

## Managing Your Team

### User List View

The Users page displays all team members in an interactive grid:

- **Email** — User's email address
- **User Role** — Admin or Regular User (editable for admins)
- **Status & Actions** — Active, Invited, or Deactivated with available actions
- **First Name / Last Name** — Contact details
- **Company Name** — Organization
- **Mobile Phone** — Phone number

:::info Editable Fields
Admins can edit user details directly in the grid. Click on a cell to update the information.
:::

### User Statuses

| Status | Meaning |
|--------|---------|
| **Active** | User has accepted their invitation and can log in |
| **Invited** | Invitation sent, awaiting user acceptance |
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

## Salesforce User Sync

If you have [Salesforce integrated](/integrations/crm/salesforce), you can import users directly from your CRM:

1. Click the **⋮** menu icon next to the search bar
2. Select **Import from Salesforce**
3. Users from Salesforce will sync to your Abmatic AI account

This is useful for:
- Quickly onboarding your entire sales team
- Keeping user information in sync with your CRM
- Mapping Abmatic AI users to Salesforce user IDs

When Salesforce is connected, additional columns appear:
- **Salesforce UserId** — Link to the user's Salesforce record
- **Salesforce Sync** — Pull latest user data from Salesforce

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
- [Billing](/settings/billing) — Manage subscription and usage
- [Slack Integration](/integrations/slack) — Set up team notifications
