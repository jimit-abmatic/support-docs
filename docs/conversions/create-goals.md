---
id: create-goals
title: Creating Conversion Goals
sidebar_label: Create Goals
sidebar_position: 2
---

# Creating Conversion Goals

Transform your personalization efforts from guesswork into precision by defining exactly what success looks like. Conversion goals let you measure real business impact—from demo requests to pricing page visits—and prove the ROI of every campaign.

![Manage your conversion goals](/img/screenshots/conversions-manage.png)

## Why Conversion Goals Matter

| Without Goals | With Goals |
|--------------|------------|
| "We think personalization is working" | "Personalization increased demo requests by 47%" |
| No way to compare test vs. control | Clear lift metrics for every campaign |
| Can't prioritize what's driving revenue | Know exactly which campaigns convert |
| Guessing at optimization priorities | Data-driven decisions on what to improve |

## What You Can Track

Abmatic supports two powerful goal types that cover virtually any conversion action on your site:

| Goal Type | Best For | Example Use Cases |
|-----------|----------|-------------------|
| **Click Events** | Micro-conversions and engagement signals | CTA clicks, demo button clicks, pricing link clicks, navigation actions |
| **Page Views** | Destination-based conversions | Thank you pages, confirmation pages, checkout completion, pricing page visits |

## Creating Click Event Goals

Track when visitors click specific elements—buttons, links, forms, or any clickable element on your site.

### Step 1: Start the Goal Wizard

1. Navigate to **Conversions > Manage**
2. Click **New Goal** or **Add a new conversion event**
3. Select **Click Event**

### Step 2: Name Your Goal

Choose a clear, descriptive name that makes reporting easy:

| Good Names | Why They Work |
|------------|---------------|
| "Demo Request Button Click" | Specific action + location |
| "Pricing Page CTA" | Clear page + element |
| "Free Trial Signup Click" | Business outcome focused |

| Avoid | Why |
|-------|-----|
| "Goal 1" | Not descriptive |
| "Click event" | Too generic |
| "Button" | Doesn't indicate value |

### Step 3: Select the Element

1. Enter your **Website URL** (must match your tracked domain)
2. The visual editor opens with your page
3. Hover over elements to see them highlight
4. Click the element you want to track (button, link, form submit)
5. Choose targeting:
   - **Only this element**: Track this specific button/link
   - **All similar elements**: Track all matching elements (useful for repeated CTAs)
6. Click **Save**

**Pro tip:** Elements with unique IDs or class names track more reliably. If your element changes frequently, use "All similar elements" for more resilient tracking.

## Creating Page View Goals

Track conversions when visitors reach specific pages—perfect for thank you pages, confirmation screens, or any destination that signals success.

### Step 1: Start the Goal Wizard

1. Navigate to **Conversions > Manage**
2. Click **New Goal** or **Add a new conversion event**
3. Select **Page View**

### Step 2: Configure the Goal

1. Enter a **Goal Name** (e.g., "Demo Form Completed")
2. Enter the **Page URL** to track:
   - Must be full URL with `https://`
   - Must match your tracked domain
   - Example: `https://yoursite.com/thank-you`
3. Click **Save**

### URL Matching

| URL Pattern | What It Tracks |
|-------------|----------------|
| `https://site.com/thank-you` | Only this exact page |
| `https://site.com/thank-you?source=demo` | Page with specific query parameter |

**Note:** Query parameters are matched if included. Use the base URL to track all variations.

## Setting Your Main Conversion Goal

Designate one goal as your primary success metric to power your analytics:

### Why It Matters

| Feature | Main Goal | Other Goals |
|---------|-----------|-------------|
| Dashboard prominence | Featured prominently | Listed normally |
| Lift calculations | Powers all lift metrics | Included in reports |
| A/B test significance | Primary metric | Secondary metrics |
| Campaign comparisons | Default comparison metric | Available for drill-down |

### How to Set It

1. Go to **Conversions > Manage**
2. Find your most important goal (usually your bottom-funnel conversion)
3. Click **Set as Main Goal**
4. The goal is now marked as your primary metric

**Recommendation:** Set your main goal to your highest-value conversion—typically demo requests, contact form submissions, or free trial signups.

## Managing Goals

### Goal Status

Each goal has an **Active** toggle:

| Status | Meaning | When to Use |
|--------|---------|-------------|
| **Active** | Goal is being tracked | Normal operation |
| **Inactive** | Tracking paused | Seasonal goals, testing, or deprecated goals |

### Editing Goals

1. Go to **Conversions > Manage**
2. Click on a goal to edit
3. Modify name or configuration
4. Save changes

### Deleting Goals

1. Select goal(s) to remove
2. Click **Delete**
3. Confirm removal

**Important:** Deleting preserves historical data—you won't lose past conversion metrics.

## Understanding Goal Analytics

For each goal, Abmatic automatically tracks:

| Metric | What It Measures | Why It Matters |
|--------|------------------|----------------|
| **Total Conversions** | All goal completions | Overall volume |
| **Unique Conversions** | Unique visitors who converted | Deduplicated success count |
| **Conversion Rate (CVR)** | % of visitors who converted | Efficiency of your funnel |
| **Personalized vs Control** | Split by experience type | A/B test comparison |
| **Lift** | Improvement from personalization | ROI of personalization |

### Calculating Lift

```
Lift = (Personalized CVR - Control CVR) / Control CVR × 100
```

**Example:**
- Personalized visitors: 5% conversion rate
- Control group: 3% conversion rate
- **Lift: +66.7%** improvement from personalization

### Statistical Significance

Abmatic calculates confidence levels automatically:

| Indicator | Meaning | Action |
|-----------|---------|--------|
| **Significant** | Results reliable (95%+ confidence) | Safe to act on results |
| **Not Significant** | Need more data | Continue test, increase traffic |
| **Time Estimate** | Predicted time to significance | Plan your testing window |

## Goal Sources

Goals can come from multiple sources:

| Source | Description | Priority |
|--------|-------------|----------|
| **Abmatic** | Created in Abmatic's goal manager | Highest |
| **Segment** | Imported from Segment integration | Medium |
| **Google Analytics** | Synced from GA4 | Lowest |

When the same event exists in multiple sources, Abmatic prioritizes in the order shown above.

## Best Practices

### Do

- **Name goals clearly**: Use descriptive names that include the action and location
- **Set a main goal**: Choose your highest-value conversion as the primary metric
- **Test goals first**: Trigger the goal yourself and verify it appears in analytics before launching campaigns
- **Structure by funnel stage**: Track awareness → consideration → decision → conversion

### Don't

- **Create too many goals**: Stick to 3-5 per campaign for clarity
- **Use generic names**: "Goal 1" or "Click" makes reporting confusing
- **Skip the main goal**: Without a main goal, lift calculations aren't highlighted
- **Track everything**: Focus on actions that indicate real purchase intent

### Goal Hierarchy Example

| Funnel Stage | Example Goals |
|--------------|---------------|
| **Awareness** | Blog page views, resource downloads |
| **Consideration** | Pricing page views, case study reads |
| **Decision** | Demo requests, contact form submissions |
| **Conversion** | Sign-ups, purchases, free trial starts |

## Troubleshooting

### Goals Not Tracking

| Issue | Check This |
|-------|------------|
| Goal shows 0 conversions | Verify goal is set to **Active** |
| Page view not firing | Confirm URL matches exactly (including https://) |
| Click not registering | Re-select element in visual editor |
| Nothing tracking | Ensure Abmatic script is installed on the page |

### Element Not Found (Click Goals)

| Cause | Solution |
|-------|----------|
| Element was redesigned | Re-open visual editor and re-select |
| Dynamic element (React, Vue) | Use more specific selectors or parent elements |
| Element behind modal/popup | Open the modal first, then select |

### Low Conversion Counts

| Cause | Solution |
|-------|----------|
| Goal misconfigured | Verify URL or element selector |
| Page not accessible | Check for broken links or redirects |
| Funnel drop-off | Analyze traffic reaching the conversion point |
| Wrong element selected | Re-select in visual editor |

### Duplicate Conversions

| Cause | Solution |
|-------|----------|
| Multiple goal definitions | Remove duplicate goals |
| Element matched too broadly | Use "Only this element" instead of "All similar" |
| Page reloads triggering | Check for redirect loops |

## Related

- [Conversions Overview](/conversions/overview) - Understanding your conversion dashboard
- [Event Tracking](/conversions/event-tracking) - Advanced event tracking options
- [Form Tracking](/conversions/form-tracking) - Automatic form submission tracking
- [Conversion Analytics](/conversions/analytics) - Deep-dive into conversion metrics
