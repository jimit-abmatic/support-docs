---
id: contact-reveal
title: Contact Reveal Settings
sidebar_label: Contact Reveal
---

# Contact Reveal Settings

Fine-tune how Abmatic AI identifies and reveals individual contacts visiting your website. Adjust the balance between data volume and accuracy, and set up filters to focus on the contacts that matter most to your business.

## Why Configure Contact Reveal?

- **Control data quality** - Balance between getting more contacts or higher accuracy matches
- **Focus on your ICP** - Filter reveals to only show contacts matching your ideal customer profile
- **Optimize credit usage** - Reveal only the contacts worth investing resources in
- **Improve sales efficiency** - Ensure your team spends time on the right prospects

## Accessing Contact Reveal Settings

Navigate to **Settings** > **Contact Reveal** from the sidebar to configure your preferences.

![Contact Reveal Settings](/img/screenshots/settings-contact-reveal.png)

## Accuracy Setting

The accuracy slider lets you control the trade-off between volume and confidence in contact identification.

### How It Works

| Setting Range | Accuracy Level | Volume Level | Best Use Case |
|---------------|----------------|--------------|---------------|
| **10-30%** | Lower | Higher | Maximum coverage, broad prospecting |
| **40-60%** | Balanced | Balanced | General B2B use (recommended) |
| **70-100%** | Higher | Lower | Enterprise accounts, precision targeting |

### Understanding the Trade-Off

```
Higher Accuracy Setting → Fewer contacts revealed → Higher confidence in data
Lower Accuracy Setting → More contacts revealed → Some may be less accurate
```

**Default: 50%** - This provides a good balance for most B2B companies, revealing a solid volume of contacts while maintaining reasonable accuracy.

### Choosing Your Accuracy Level

| Your Priority | Recommended Setting | Why |
|---------------|---------------------|-----|
| **Volume** - Cast a wide net | 20-40% | More prospects to work with |
| **Balance** - General prospecting | 40-60% | Best of both worlds |
| **Quality** - High-value targets | 70-90% | Higher confidence for important accounts |
| **Precision** - Enterprise deals | 90-100% | Maximum accuracy for strategic accounts |

## Reveal Filters

Set up filters to only reveal contacts that match your target criteria. This helps you:

- **Focus on ICP** - Only see contacts from companies that match your ideal profile
- **Save credits** - Don't spend credits on contacts outside your market
- **Reduce noise** - Keep your contact list clean and actionable

### Setting Up Filters

1. Navigate to **Settings** > **Contact Reveal**
2. Scroll to the **Filters** section
3. Click to add filter conditions
4. Set your criteria using available fields
5. Filters apply automatically to future reveals

### Available Filter Criteria

You can filter by any account-level attribute, including:

| Filter Type | Examples | Use Case |
|-------------|----------|----------|
| **Company Size** | Employees > 100 | Focus on enterprise |
| **Industry** | Technology, Finance, Healthcare | Target specific verticals |
| **Location** | Country, State, Region | Geographic targeting |
| **Revenue** | Revenue > $10M | Target well-funded companies |
| **Custom Fields** | CRM data, engagement scores | Match existing criteria |

### Filter Examples

**Enterprise Technology Focus:**
```
Industry = Technology
AND Employees >= 500
AND Country = United States
```

**Mid-Market Financial Services:**
```
Industry = Financial Services
AND Employees BETWEEN 100 AND 500
AND Revenue >= $10M
```

**Regional Expansion:**
```
Country IN (United Kingdom, Germany, France)
AND Employees >= 50
```

## Best Practices

### For Sales Teams

| Practice | Benefit |
|----------|---------|
| Start with balanced accuracy (50%) | Get enough contacts to work with |
| Filter by company size/industry | Match your ICP |
| Increase accuracy for target accounts | Higher confidence for strategic deals |

### For Marketing Teams

| Practice | Benefit |
|----------|---------|
| Use broader filters initially | Build larger audiences |
| Segment by engagement after reveal | Prioritize marketing qualified contacts |
| Track accuracy vs. conversion rates | Optimize over time |

### For Operations

| Practice | Benefit |
|----------|---------|
| Set filters matching CRM criteria | Ensure data consistency |
| Monitor credit usage | Optimize reveal spend |
| Review filter effectiveness monthly | Refine targeting |

## Impact on Credit Usage

Your Contact Reveal settings directly affect credit consumption:

| Configuration | Credit Usage | Result |
|---------------|--------------|--------|
| Low accuracy + No filters | Higher | More contacts, some less relevant |
| High accuracy + No filters | Lower | Fewer contacts, higher quality |
| Any accuracy + Filters | Optimized | Only ICP contacts revealed |

**Pro tip:** Combining moderate accuracy (50-60%) with well-defined filters provides the best balance of volume, quality, and credit efficiency.

## Related

- [Contact Reveal Overview](/visitor-tracking/contact-reveal) - Learn how Contact Reveal identifies visitors
- [Account Settings](/settings/account) - Manage your account profile
- [Usage & Billing](/settings/billing) - Monitor credit consumption
- [Audiences](/audiences/overview) - Work with revealed contacts
