---
id: page-editor
title: Visual Page Editor
sidebar_label: Page Editor
sidebar_position: 3
---

# Visual Page Editor

**Create personalized website experiences in minutes—no code required.** The visual page editor lets you customize any webpage by simply clicking and editing, just like using a word processor. See changes instantly and deliver personalized content to every visitor.

## Why Use the Visual Editor?

| Traditional Approach | With Abmatic Visual Editor |
|---------------------|---------------------------|
| Request dev changes, wait days | Make changes yourself in minutes |
| Deploy code for each variation | Edit visually, publish instantly |
| Static content for everyone | Dynamic personalization per visitor |
| Limited A/B testing capability | Test variations with one click |

## What You Can Do

- **Edit text and headlines** — Personalize messaging for different audiences
- **Swap images and videos** — Show relevant visuals to each visitor segment
- **Insert dynamic variables** — Display company name, location, industry automatically
- **Hide or show elements** — Remove irrelevant content for specific audiences
- **Style any element** — Change colors, fonts, sizes without CSS knowledge
- **Preview instantly** — See exactly what visitors will see before publishing

## Getting Started

### Opening the Editor

1. Open a **Website Personalization** campaign
2. Navigate to the **Pages** tab

![Campaign pages list showing active personalized pages](/img/screenshots/page-editor-pages-list.png)

3. Click **Add Page** or select an existing page
4. Enter the URL you want to personalize
5. Click **Open in Editor**

The editor loads your live website with editing tools overlaid.

![Visual Page Editor showing website editing interface](/img/screenshots/page-editor-main.png)

### Editor Interface

The editor has three main areas:

| Area | Purpose |
|------|---------|
| **Top Toolbar** | Navigation, preview toggle, publish button |
| **Main Canvas** | Your website—click any element to select |
| **Side Panel** | Edit properties of selected element |

## Editing Content

### Selecting Elements

1. **Hover** over any element—it highlights with a blue border
2. **Click** to select—the border becomes solid
3. The side panel shows editing options for that element

**Pro Tip:** For nested elements, use **Select Parent** in the side panel to navigate up the element hierarchy.

### Editing Text

**Quick Edit:**
1. Select a text element (headline, paragraph, button text)
2. Type directly in the side panel text field
3. Changes appear instantly on the canvas

**HTML Edit** (for advanced formatting):
1. Select the element
2. Click **Edit HTML** in the side panel
3. Modify the raw HTML with syntax highlighting
4. Click **Save**

### Changing Images

1. Select an image element
2. Click **Change Image** in the side panel
3. Choose your source:
   - **Upload** a new image from your computer
   - **URL** — paste an image link
   - **Gallery** — select from previously uploaded images
4. Adjust properties: alt text, dimensions, object-fit

### Modifying Links

1. Select a link or button
2. Edit the destination URL (href)
3. Optionally set **target="_blank"** to open in a new tab

## Adding Personalization

Dynamic variables make your content personal to each visitor. Instead of "Welcome back!", show "Welcome back, Acme Corp!".

### Inserting Variables

1. Select a text element
2. Click the **{ }** personalization button (or press `{`)
3. Browse available variables
4. Click to insert at your cursor position

### Available Variables

**Location Data:**
| Variable | Output Example |
|----------|---------------|
| `{{mt_country}}` | United States |
| `{{mt_region}}` | California |
| `{{mt_city}}` | San Francisco |

**Company Data:**
| Variable | Output Example |
|----------|---------------|
| `{{mt_company}}` | Acme Corporation |
| `{{mt_industry}}` | Technology |

**CRM Fields** (when integrated):
| Variable | Description |
|----------|-------------|
| `{{sf_*}}` | Salesforce fields (owner, stage, etc.) |
| `{{hs_*}}` | HubSpot properties |
| Custom fields | Your mapped CRM fields |

### Testing Variables

1. Click **Preview** in the top toolbar
2. Select **Test with Sample Data**
3. Enter test values (company name, location, etc.)
4. Verify the personalized output looks correct

## Styling Elements

### Text Properties

| Property | What It Controls |
|----------|-----------------|
| Font Size | Text size (px, em, rem) |
| Font Weight | Light, Normal, Bold |
| Text Color | Any color via picker or hex |
| Text Align | Left, Center, Right, Justify |
| Text Decoration | Underline, Strikethrough |

### Background & Layout

| Property | What It Controls |
|----------|-----------------|
| Background Color | Element background |
| Opacity | Transparency (0-100%) |
| Display | Block, Flex, None (hide) |
| Visibility | Show or hide element |

### CSS Classes

For advanced control:
1. Select an element
2. Find **CSS Classes** in the side panel
3. Add or remove classes as needed

## Hiding Elements

Remove content from personalized pages without deleting it:

1. Select the element you want to hide
2. Click **Hide Element** (or press `Delete`)
3. The element disappears from the personalized version

**Restore hidden elements:**
1. Click **Show Removed Elements** in the toolbar
2. Hidden elements appear with an overlay
3. Click **Restore** to bring them back

## Device Preview

Test how your changes look on different devices:

1. Open the **Dimensions** accordion in the side panel
2. Select a device (Desktop, Tablet, Mobile)
3. The canvas adjusts to that viewport size

## Saving and Publishing

### Save vs Publish

| Action | What Happens |
|--------|-------------|
| **Save** | Stores changes as a draft—visitors see original |
| **Publish** | Makes changes live—matching visitors see personalization |

### Publishing Your Changes

1. Review changes in preview mode
2. Click **Publish** in the top toolbar
3. Confirm the publish dialog
4. Changes are live immediately

### Page Status

| Status | Meaning |
|--------|---------|
| **Draft** | Changes saved, not yet live |
| **Published** | Changes visible to matching visitors |
| **Active** | Page is enabled in the campaign |
| **Inactive** | Page disabled, showing original content |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save changes |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` | Redo |
| `{` | Open personalization variables |
| `Delete` | Hide selected element |
| `Escape` | Deselect element |

## Best Practices

### Do's

| Practice | Why It Works |
|----------|-------------|
| Start with headlines and CTAs | These have the biggest conversion impact |
| Keep text length similar | Prevents layout shifts |
| Test on all device sizes | Ensures consistent experience |
| Use preview before publishing | Catch issues before visitors see them |

### Don'ts

| Avoid | Why |
|-------|-----|
| Hiding large sections | Can cause visible layout shifts |
| Too many changes per page | Harder to measure what works |
| Skipping preview | Risk publishing broken layouts |

## Troubleshooting

### Element Won't Select

**Possible causes:**
- Element is inside an iframe (some embeds can't be edited)
- Element is dynamically generated after page load

**Solutions:**
1. Try selecting a parent element instead
2. Use the DOM tree navigator in the side panel

### Changes Not Appearing for Visitors

**Check these:**
1. Is the page **Published** (not just Saved)?
2. Is the campaign **Active**?
3. Does the visitor match your **targeting rules**?
4. Is the visitor in the **control group**?

### Editor Not Loading

**Try these:**
1. Verify the URL is accessible in a normal browser
2. Check that the Abmatic script is installed on that page
3. Try a different browser
4. Check for CORS restrictions on your site

### Styling Changes Being Overridden

Your site's CSS may have higher specificity than editor changes.

**Solutions:**
1. Use more specific selectors in custom CSS
2. Add `!important` if needed
3. Contact support for complex CSS conflicts

## Next Steps

| Learn About | Link |
|------------|------|
| Campaign targeting | [Website Personalization](/campaigns/website-personalization) |
| Dynamic content tokens | [Dynamic Content](/campaigns/dynamic-content) |
| Testing variations | [A/B Testing](/campaigns/ab-testing) |
