# Screenshot Capture Tool

Automated screenshot capture for Abmatic AI documentation.

## Quick Start

```bash
# From support-docs directory
ABMATIC_EMAIL="your@email.com" ABMATIC_PASSWORD="yourpassword" node scripts/screenshots/capture-all.js
```

## Requirements

- Node.js 18+
- Playwright: `npm install playwright`
- Chromium browser: `npx playwright install chromium`

## Configuration

The script uses environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `ABMATIC_EMAIL` | Login email | Required |
| `ABMATIC_PASSWORD` | Login password | Required |
| `ABMATIC_BASE_URL` | App URL | `https://app.abmatic.ai` |

## Output

Screenshots are saved to: `static/img/screenshots/`

### Captured Pages

**Public Pages (no auth required):**
- `sign-in.png` - Sign in page
- `sign-up.png` - Sign up page
- `forgot-password.png` - Password reset page

**Authenticated Pages:**
- `dashboard-overview.png` - Main dashboard
- `home-dashboard.png` - Home dashboard view
- `ai-agents-hub.png` - AI Agents selection
- `campaigns-list.png` - Campaigns list
- `accounts-list.png` - Accounts/collections list
- `contacts-list.png` - Contacts list
- `reveal-accounts.png` - Company reveal*
- `reveal-contacts.png` - Contact reveal*
- `conversions-overview.png` - Conversions
- `conversions-manage.png` - Manage conversions
- `analytics-reports.png` - Analytics reports*
- `analytics-dashboards.png` - Analytics dashboards
- `integrations-hub.png` - Integrations page
- `settings-account.png` - Account settings
- `settings-usage.png` - Usage/billing
- `settings-users.png` - User management
- `settings-custom-fields.png` - Custom fields
- `settings-notifications.png` - Notification settings
- `settings-ai-agents.png` - AI agent settings
- `installation-script.png` - Script installation*
- `settings-slack.png` - Slack settings*

**Modals:**
- `campaign-create-modal.png` - Create campaign modal
- `account-create-modal.png` - Create account list modal

*Note: Some pages may timeout due to large data loads

## Adding New Screenshots

1. Edit `capture-all.js`
2. Add to `ALL_PAGES` array:
```javascript
{ name: 'page-name', path: '/route', description: 'Description' }
```

3. For modals, use `captureWithClick`:
```javascript
await this.captureWithClick(
  'modal-name',
  '/base-route',
  'button:has-text("Open Modal")',
  'Modal description'
);
```

## Troubleshooting

### Login Fails
- Check credentials are correct
- Verify button selector matches current UI (currently `button:has-text("SIGN IN")`)

### Page Timeouts
- Increase timeout in `page.goto()` call
- Use `waitUntil: 'domcontentloaded'` instead of `'networkidle'` for heavy pages

### Screenshots Show Login Page
- Session may have expired
- Check if route requires special permissions
- Some routes redirect to login for non-admin users

## Updating Documentation

When updating docs, re-run the screenshot capture:

```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" node scripts/screenshots/capture-all.js
```

Then rebuild and deploy:
```bash
npm run build
aws s3 sync build s3://support-abmatic-ai --delete
aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"
```
