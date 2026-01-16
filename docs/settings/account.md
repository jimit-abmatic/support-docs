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

![Account Settings](/img/screenshots/settings-account.png)

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

Make the Abmatic AI chat widget feel like a natural extension of your brand. Customize the appearance so your visitors get a seamless, on-brand experience.

### Company Logo

Display your company logo in the chat widget to build trust and brand recognition.

- **Auto-fetch**: Click **Fetch Logo from Website** to automatically pull your logo from your website's domain
- The logo appears in a circular format in the chat widget header
- Supported formats: PNG, JPG, SVG

### Primary Color

Set your brand's primary color for the chat widget interface. This color is used for:

- Chat widget header background
- Button colors and interactive elements
- Message styling accents

Enter a hex color code (e.g., `#6a11cb`) or use the color picker for visual selection.

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

## Additional Options

### Flush Cache

Clear cached data to see the latest changes immediately. Useful when:
- Testing new campaign configurations
- Troubleshooting display issues
- Verifying personalization updates

### Sign Out

Securely sign out of your Abmatic AI account. Your data and settings are preserved for your next session.

## About

View your current Abmatic AI version information. This is helpful when contacting support or checking for platform updates.

## Related

- [User Management](/settings/users) - Invite team members and manage roles
- [Billing Settings](/settings/billing) - View usage and manage your subscription
- [Notifications](/settings/notifications) - Configure alert preferences
