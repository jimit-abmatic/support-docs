---
id: account
title: Account Settings
sidebar_label: Account
sidebar_position: 1
---

# Account Settings

Your Account Settings page is your central hub for managing your Abmatic AI workspace configuration. Here you'll set up your company profile, customize your brand appearance, and control which pages receive personalization—all in one place.

## Accessing Account Settings

1. Click **Settings** in the left sidebar
2. Select **Account**

![Account Settings page showing Account Details, the Branding section with Fetch Logo from Website and Primary Color, Page exclude rules, the version line, and the Flush Cache and Sign Out actions](/img/screenshots/set-account.png)

## Account Details

Keep your account information up-to-date to ensure accurate personalization and reporting across your campaigns.

| Field | Description |
|-------|-------------|
| **Your Email** | The email address associated with your user account (display only) |
| **Company Name** | Your organization name—used throughout the platform and in reports |
| **Website URL** | Your primary website URL (e.g., `https://www.abmatic.ai`)—this is where your personalization campaigns run |

:::tip Admin Privileges
Only users with **Admin** role can edit Company Name and Website URL. Other team members see these as read-only fields.
:::

## Branding

The **Branding** section controls how the Abmatic AI chat widget looks so it feels like a natural extension of your brand. These settings are admin-facing.

### Company Logo

Display your company logo in the chat widget to build trust and brand recognition.

- Click **Fetch Logo from Website** to automatically pull your logo from your website domain. Abmatic AI fetches it for you — no manual upload needed.
- The current logo is shown next to the button (circular preview).

### Primary Color

Set your brand's primary color for the chat widget. The on-page note states: "This color will be used throughout the chat widget." It defaults to `#6a11cb`.

Enter a hex color code (e.g., `#6a11cb`) or use the color picker, then click **Save Branding** to apply it.

## Page Exclude Rules

Control exactly which pages receive personalization. Use exclude rules to prevent Abmatic AI from personalizing specific URLs or URL patterns.

### When to Use Exclude Rules

- **Login/Signup pages**: Exclude authenticated-only sections
- **Blog content**: Keep editorial content unmodified
- **Legal pages**: Ensure compliance pages remain unchanged
- **Internal tools**: Exclude admin or dashboard pages

### How to Configure

1. Enter each URL pattern on a separate line
2. Use `*` as a wildcard to match any characters
3. Click **Save** to apply your rules

**Example patterns:**

| Pattern | What It Excludes |
|---------|------------------|
| `www.example.com/login` | Exactly the login page |
| `*/blog/*` | Any page with `/blog/` in the URL |
| `*/admin/*` | All admin section pages |
| `*example.com/docs/*` | All documentation pages |

:::info Wildcard Behavior
The `*` wildcard matches any sequence of characters. For example, `*/pricing/*` would match both `www.example.com/pricing/enterprise` and `app.example.com/pricing/starter`.
:::

## About

The **About** section shows your current Abmatic AI version — currently **Abmatic AI Version v6.1**. This is helpful when contacting support or checking which release you're on.

## Additional Options

At the bottom of the page you'll find these utility actions:

### Flush Cache

Click **Flush Cache** to clear cached data so the latest changes appear immediately. Useful when:
- Testing new campaign configurations
- Troubleshooting display issues
- Verifying personalization updates

### Reset Demo Account

On demo accounts, a **Reset Demo Account** action lets you clear demo data and start fresh. This appears for demo/sandbox accounts and won't be present on a standard production account.

### Sign Out

Click **Sign Out** to securely sign out of your Abmatic AI account. Your data and settings are preserved for your next session.

## Related

- [User Management](/settings/users) - Invite team members and manage roles
- [Usage](/settings/usage) - Monitor credit consumption across Abmatic AI services
- [Notifications](/settings/notifications) - Configure alert preferences
