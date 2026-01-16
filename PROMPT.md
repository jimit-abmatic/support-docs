# Ralph Wiggum - Screenshot Quality Loop

Read `plan.md` for next task. Read `activity.md` for context.

## Your Job
Fix screenshots on ONE doc page, then move to next. Each page gets ALL 4 checks.

## The 4 Checks (do ALL on each page)

| Check | Problem | Fix |
|-------|---------|-----|
| INSUFFICIENT | Missing screenshots | Add them |
| INCORRECT | Loading/blank screenshots | Recapture with multi-delay |
| INCOMPLETE | Login page showing | Recapture after proper login |
| NON-CONTEXTUAL | Screenshot doesn't match text | Replace with correct one |

## Steps for Each Task

1. **Read the doc** at `docPath`
2. **Find all screenshots** - `grep -n "!\[" [docPath]`
3. **Run 4 checks** on every screenshot
4. **Fix all issues** found
5. **Verify** - `npm run build`
6. **Log to activity.md** - what you checked, what you fixed
7. **Mark complete** - set `"passes": true` in plan.md
8. **Commit** - `git add -A && git commit -m "docs: 4-check [page-name]"`

## Screenshot Capture Command

```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi [name] [appPath]
```

This captures at 5s, 10s, 15s, 20s, 30s and picks best one (score 50+ = good).

## Key Paths

- Docs: `/Users/jimabmatic.ai/abmatic/support-docs/docs/`
- Screenshots: `/Users/jimabmatic.ai/abmatic/support-docs/static/img/screenshots/`

## Signals

- All tasks done → `<promise>COMPLETE</promise>`
- More tasks → just finish (loop restarts)
- Stuck → `<promise>STUCK</promise>`

## Rules

1. ONE page per iteration
2. ALL 4 checks on that page
3. Fix EVERYTHING before marking complete
4. Build must pass before marking complete
