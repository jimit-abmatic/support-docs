# Abmatic AI Documentation Screenshot System - Master Instructions

## Overview

This is a multi-agent system for capturing, verifying, and documenting screenshots for Abmatic AI support documentation. The system ensures high-quality, verified screenshots with contextual documentation written from a marketer's perspective.

## Credentials

```
ABMATIC_EMAIL=jimit@abmatic.ai
ABMATIC_PASSWORD=WallyZoey123
BASE_URL=https://app.abmatic.ai
```

## Pipeline Architecture

### Agent 1: Navigator/Capture Agent
**Purpose:** Navigate the app and capture real screenshots
**Input:** Flow definitions (user journeys)
**Output:** Raw screenshots + capture metadata
**Success Criteria:**
- Screenshot file size > 100KB
- Not redirected to login page
- Page content fully loaded (no spinners)

### Agent 2: Verification Agent
**Purpose:** Verify each screenshot shows correct content
**Input:** Screenshots from Agent 1
**Output:** Verification report (pass/fail for each)
**Success Criteria:**
- Screenshot shows expected page (check URL in metadata)
- No loading spinners visible
- Main content area populated
- Correct UI elements visible

### Agent 3: Re-verification Agent
**Purpose:** Double-check Agent 2's work
**Input:** Agent 2's verification report
**Output:** Confirmed verification or escalation
**Success Criteria:**
- Agrees with Agent 2's assessment
- If disagrees, triggers re-capture

### Agent 4: Narration Agent
**Purpose:** Create story/context from screenshots
**Input:** Verified screenshots
**Output:** Narrative descriptions for each screenshot
**Questions to answer for each:**
1. What is the user seeing on this screen?
2. Where is this in the app (navigation path)?
3. How did the user get here?
4. What can the user do on this screen?
5. What is the data/information shown?
6. What should the user do next?

### Agent 5: Documentation Writer Agent
**Purpose:** Write documentation using screenshots + narratives
**Input:** Verified screenshots + narratives
**Output:** Markdown documentation files
**Style Guide:**
- Write for B2B marketers
- Step-by-step instructions
- Screenshot after each major step
- Clear action verbs
- Explain the "why" not just the "how"

### Agent 6: Final Verification Agent
**Purpose:** Verify documentation quality
**Input:** Written documentation
**Output:** Quality report
**Checks:**
- All screenshots referenced exist
- Screenshots match their descriptions
- Steps are in correct order
- No broken links
- Proper formatting

### Agent 7: Final Re-verification Agent
**Purpose:** Final sign-off before deployment
**Input:** Agent 6's report + documentation
**Output:** Approval or rejection
**Final Checks:**
- End-to-end flow makes sense
- Screenshots load correctly
- No placeholder text
- Ready for production

## User Flows to Document

### Flow 1: New User Onboarding
1. Sign up page
2. Email verification
3. Welcome page (company setup)
4. Home dashboard (first view)
5. Installation page (script setup)
6. Script verification

### Flow 2: Script Installation
1. Navigate to Installation
2. View script code
3. Copy script
4. Verification status

### Flow 3: Account/Audience Building
1. Navigate to Accounts
2. View accounts list
3. Create new account list (modal)
4. Filter options
5. Save list
6. View list details

### Flow 4: Contact Management
1. Navigate to Contacts
2. View contacts list
3. Create new contact list
4. Import options (CSV, CRM)
5. View contact details

### Flow 5: Campaign Creation
1. Navigate to Campaigns
2. Campaigns list view
3. Create campaign button
4. Campaign type selection
5. Campaign configuration
6. Audience targeting
7. Page selection
8. Visual editor
9. Publish

### Flow 6: Visitor Reveal
1. Navigate to Reveal > Accounts
2. View identified companies
3. Company details
4. Navigate to Reveal > Contacts
5. View identified contacts

### Flow 7: Analytics
1. Navigate to Analytics
2. Reports list
3. View a report
4. Dashboards list
5. View a dashboard

### Flow 8: Integrations
1. Navigate to Integrations
2. View available integrations
3. CRM connection (HubSpot/Salesforce)
4. Connected status

### Flow 9: Settings
1. Account settings
2. User management
3. Custom fields
4. Notifications
5. AI Agents settings
6. Export

### Flow 10: AI Agents
1. AI Agents hub
2. Select an agent
3. Agent conversation
4. Agent settings

## Execution Commands

### Run Full Pipeline
```bash
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" node scripts/screenshots/pipeline/run-pipeline.js
```

### Run Individual Agents
```bash
# Agent 1: Capture
node scripts/screenshots/pipeline/agent1-capture.js

# Agent 2: Verify
node scripts/screenshots/pipeline/agent2-verify.js

# Agent 3: Re-verify
node scripts/screenshots/pipeline/agent3-reverify.js

# Agent 4: Narrate
node scripts/screenshots/pipeline/agent4-narrate.js

# Agent 5: Write
node scripts/screenshots/pipeline/agent5-write.js

# Agent 6: Final verify
node scripts/screenshots/pipeline/agent6-final-verify.js

# Agent 7: Final re-verify
node scripts/screenshots/pipeline/agent7-final-reverify.js
```

## Output Directories

- Raw screenshots: `static/img/screenshots/raw/`
- Verified screenshots: `static/img/screenshots/verified/`
- Final screenshots: `static/img/screenshots/`
- Capture metadata: `scripts/screenshots/output/capture-metadata.json`
- Verification reports: `scripts/screenshots/output/verification-report.json`
- Narratives: `scripts/screenshots/output/narratives.json`
- Documentation drafts: `scripts/screenshots/output/docs-draft/`

## Error Recovery

If any agent fails:
1. Check the output logs in `scripts/screenshots/output/logs/`
2. Fix the issue
3. Re-run from the failed agent (previous work is preserved)
4. The pipeline is idempotent - safe to re-run

## Quality Standards

### Screenshot Quality
- Resolution: 2880x1800 (2x retina)
- Format: PNG
- Min file size: 100KB (indicates real content)
- Max file size: 2MB (optimize if larger)

### Documentation Quality
- Every step has a screenshot
- Screenshots appear AFTER the instruction they illustrate
- Captions explain what the user should see
- No placeholder text (TODO, TBD, etc.)
- All links work
- Proper markdown formatting

## Deployment

After Agent 7 approves:
```bash
npm run build
aws s3 sync build s3://support-abmatic-ai --delete
aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"
```

## Resume Instructions

If the pipeline is interrupted:
1. Check `scripts/screenshots/output/pipeline-state.json` for current state
2. Resume from the last successful agent
3. All completed work is preserved

## Last Updated
2026-01-07

## Contact
For issues: Check the logs or re-run the problematic agent.
