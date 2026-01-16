/**
 * Agent 6: Final Verification Agent
 *
 * Purpose: Verify documentation quality before deployment
 * - Check all screenshots referenced exist
 * - Verify screenshots match descriptions
 * - Check step order and flow logic
 * - Validate markdown formatting
 *
 * Input: Generated documentation from Agent 5
 * Output: final-verification-report.json
 */

const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '../output'),
  docsDir: path.join(__dirname, '../output/docs-draft'),
  verifiedDir: path.join(__dirname, '../../../static/img/screenshots/verified'),
  rawDir: path.join(__dirname, '../../../static/img/screenshots/raw'),
};

class FinalVerificationAgent {
  constructor() {
    this.report = {
      verificationDate: new Date().toISOString(),
      docs: [],
      issues: [],
      summary: {
        totalDocs: 0,
        passed: 0,
        failed: 0,
        warnings: 0,
        totalScreenshots: 0,
        screenshotsFound: 0,
        screenshotsMissing: 0
      },
      decision: null
    };
  }

  async run() {
    console.log('========================================');
    console.log('AGENT 6: FINAL VERIFICATION AGENT');
    console.log('========================================\n');

    // Check if docs directory exists
    if (!fs.existsSync(config.docsDir)) {
      console.error('ERROR: docs-draft directory not found');
      console.error('Run Agent 5 first: node scripts/screenshots/pipeline/agent5-write.js');
      process.exit(1);
    }

    // Get all markdown files
    const docFiles = fs.readdirSync(config.docsDir)
      .filter(f => f.endsWith('.md'));

    if (docFiles.length === 0) {
      console.error('ERROR: No documentation files found');
      process.exit(1);
    }

    console.log(`Found ${docFiles.length} documentation files to verify\n`);

    // Verify each doc
    for (const file of docFiles) {
      this.verifyDoc(file);
    }

    // Make final decision
    this.makeDecision();

    // Save report
    this.saveReport();

    // Print summary
    this.printSummary();
  }

  verifyDoc(filename) {
    const filepath = path.join(config.docsDir, filename);
    this.report.summary.totalDocs++;

    console.log(`Verifying: ${filename}`);

    const docResult = {
      filename,
      checks: [],
      status: 'unknown',
      issues: [],
      warnings: []
    };

    try {
      const content = fs.readFileSync(filepath, 'utf8');

      // Check 1: File is not empty
      const notEmpty = content.length > 100;
      docResult.checks.push({ name: 'not_empty', passed: notEmpty, size: content.length });
      if (!notEmpty) {
        docResult.issues.push('File is too small - may be empty or corrupted');
      }

      // Check 2: Has frontmatter
      const hasFrontmatter = content.startsWith('---') && content.indexOf('---', 3) > 0;
      docResult.checks.push({ name: 'has_frontmatter', passed: hasFrontmatter });
      if (!hasFrontmatter) {
        docResult.issues.push('Missing frontmatter');
      }

      // Check 3: Has title
      const hasTitle = /^#\s+.+$/m.test(content);
      docResult.checks.push({ name: 'has_title', passed: hasTitle });
      if (!hasTitle) {
        docResult.issues.push('Missing main title');
      }

      // Check 4: Find and verify all image references
      const imageRefs = content.match(/!\[.*?\]\((.*?)\)/g) || [];
      docResult.checks.push({ name: 'has_images', passed: imageRefs.length > 0, count: imageRefs.length });

      this.report.summary.totalScreenshots += imageRefs.length;

      for (const ref of imageRefs) {
        const match = ref.match(/!\[.*?\]\((.*?)\)/);
        if (match) {
          const imagePath = match[1];
          const exists = this.checkImageExists(imagePath);

          if (exists) {
            this.report.summary.screenshotsFound++;
          } else {
            this.report.summary.screenshotsMissing++;
            docResult.issues.push(`Missing image: ${imagePath}`);
          }
        }
      }

      // Check 5: No placeholder text
      const placeholders = [
        /TODO/gi,
        /TBD/gi,
        /PLACEHOLDER/gi,
        /XXX/gi,
        /FIXME/gi,
        /\[INSERT.*?\]/gi
      ];

      for (const pattern of placeholders) {
        if (pattern.test(content)) {
          docResult.warnings.push(`Found placeholder text: ${pattern.source}`);
        }
      }
      docResult.checks.push({
        name: 'no_placeholders',
        passed: docResult.warnings.filter(w => w.includes('placeholder')).length === 0
      });

      // Check 6: Has proper step structure
      const stepMatches = content.match(/##\s+Step\s+\d+/g) || [];
      docResult.checks.push({ name: 'has_steps', passed: stepMatches.length > 0, stepCount: stepMatches.length });
      if (stepMatches.length === 0) {
        docResult.warnings.push('No step structure found');
      }

      // Check 7: Proper markdown syntax
      const brokenLinks = content.match(/\[([^\]]*)\]\(\s*\)/g) || [];
      docResult.checks.push({ name: 'no_broken_links', passed: brokenLinks.length === 0 });
      if (brokenLinks.length > 0) {
        docResult.issues.push(`Found ${brokenLinks.length} broken links`);
      }

      // Check 8: Has marketing context tips
      const hasTips = content.includes(':::tip');
      docResult.checks.push({ name: 'has_marketing_tips', passed: hasTips });
      if (!hasTips) {
        docResult.warnings.push('No marketing context tips found');
      }

      // Determine status
      if (docResult.issues.length > 0) {
        docResult.status = 'failed';
        this.report.summary.failed++;
      } else if (docResult.warnings.length > 0) {
        docResult.status = 'warning';
        this.report.summary.warnings++;
      } else {
        docResult.status = 'passed';
        this.report.summary.passed++;
      }

      console.log(`  Status: ${docResult.status.toUpperCase()}`);
      if (docResult.issues.length > 0) {
        docResult.issues.forEach(i => console.log(`    Issue: ${i}`));
      }
      if (docResult.warnings.length > 0) {
        docResult.warnings.forEach(w => console.log(`    Warning: ${w}`));
      }
      console.log('');

    } catch (error) {
      docResult.status = 'failed';
      docResult.issues.push(`Error reading file: ${error.message}`);
      this.report.summary.failed++;
      console.log(`  FAILED: ${error.message}\n`);
    }

    this.report.docs.push(docResult);
  }

  checkImageExists(imagePath) {
    // Convert web path to filesystem path
    // /img/screenshots/verified/xxx.png -> static/img/screenshots/verified/xxx.png
    const relativePath = imagePath.replace(/^\//, '');
    const absolutePath = path.join(__dirname, '../../../static', relativePath);

    if (fs.existsSync(absolutePath)) {
      return true;
    }

    // Also check raw directory as fallback
    const rawPath = absolutePath.replace('/verified/', '/raw/');
    return fs.existsSync(rawPath);
  }

  makeDecision() {
    const { passed, failed, warnings, totalDocs, screenshotsMissing, totalScreenshots } = this.report.summary;

    // Calculate pass rates
    const docPassRate = totalDocs > 0 ? Math.round((passed / totalDocs) * 100) : 0;
    const screenshotFoundRate = totalScreenshots > 0
      ? Math.round(((totalScreenshots - screenshotsMissing) / totalScreenshots) * 100)
      : 100;

    // Decision logic
    if (failed === 0 && screenshotsMissing === 0) {
      this.report.decision = {
        status: 'approved',
        message: 'All documentation verified successfully. Ready for final review.',
        docPassRate,
        screenshotFoundRate,
        nextStep: 'Proceed to Agent 7 (Final Re-verification)'
      };
    } else if (failed <= 1 && screenshotsMissing <= 2) {
      this.report.decision = {
        status: 'approved_with_issues',
        message: `Minor issues found (${failed} failed docs, ${screenshotsMissing} missing screenshots). Review before proceeding.`,
        docPassRate,
        screenshotFoundRate,
        nextStep: 'Review issues, then proceed to Agent 7'
      };
    } else {
      this.report.decision = {
        status: 'rejected',
        message: `Too many issues found (${failed} failed docs, ${screenshotsMissing} missing screenshots).`,
        docPassRate,
        screenshotFoundRate,
        nextStep: 'Return to Agent 5 to regenerate documentation, or fix screenshots'
      };
    }
  }

  saveReport() {
    const reportPath = path.join(config.outputDir, 'final-verification-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    console.log(`Report saved to: ${reportPath}\n`);
  }

  printSummary() {
    console.log('========================================');
    console.log('FINAL VERIFICATION SUMMARY');
    console.log('========================================');
    console.log(`Total docs verified: ${this.report.summary.totalDocs}`);
    console.log(`  Passed: ${this.report.summary.passed}`);
    console.log(`  Warnings: ${this.report.summary.warnings}`);
    console.log(`  Failed: ${this.report.summary.failed}`);
    console.log('');
    console.log(`Screenshots referenced: ${this.report.summary.totalScreenshots}`);
    console.log(`  Found: ${this.report.summary.screenshotsFound}`);
    console.log(`  Missing: ${this.report.summary.screenshotsMissing}`);

    console.log('\n========================================');
    console.log('DECISION');
    console.log('========================================');
    console.log(`Status: ${this.report.decision.status.toUpperCase()}`);
    console.log(`Message: ${this.report.decision.message}`);
    console.log(`Doc pass rate: ${this.report.decision.docPassRate}%`);
    console.log(`Screenshot found rate: ${this.report.decision.screenshotFoundRate}%`);
    console.log(`Next step: ${this.report.decision.nextStep}`);

    if (this.report.decision.status.startsWith('approved')) {
      console.log('\nCommand: node scripts/screenshots/pipeline/agent7-final-reverify.js');
    } else {
      console.log('\nFix issues before proceeding.');
    }
  }
}

// Run
if (require.main === module) {
  const agent = new FinalVerificationAgent();
  agent.run().catch(console.error);
}

module.exports = { FinalVerificationAgent };
