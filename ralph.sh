#!/bin/bash
# Ralph Wiggum - Screenshot Quality Improvement Loop
# Usage: ./ralph.sh [max-iterations]
#
# This loop fixes 4 screenshot quality issues:
# 1. INSUFFICIENT - Add more screenshots
# 2. INCORRECT - Fix timing issues (capture at multiple delays)
# 3. INCOMPLETE - Fix login page screenshots
# 4. NON-CONTEXTUAL - Match screenshots to text

set -e

MAX_ITERATIONS=${1:-50}

echo "=============================================="
echo "  RALPH WIGGUM - Screenshot Quality Loop"
echo "=============================================="
echo "Max iterations: $MAX_ITERATIONS"
echo "Working directory: $(pwd)"
echo ""
echo "Environment:"
echo "  ABMATIC_EMAIL: ${ABMATIC_EMAIL:-NOT SET}"
echo "  ABMATIC_PASSWORD: ${ABMATIC_PASSWORD:+SET}"
echo "  ABMATIC_BASE_URL: ${ABMATIC_BASE_URL:-https://app.abmatic.ai}"
echo "=============================================="

# Ensure credentials are set
if [ -z "$ABMATIC_EMAIL" ] || [ -z "$ABMATIC_PASSWORD" ]; then
    echo ""
    echo "ERROR: Credentials not set!"
    echo ""
    echo "Set credentials before running:"
    echo "  export ABMATIC_EMAIL=\"jimit@abmatic.ai\""
    echo "  export ABMATIC_PASSWORD=\"WallyZoey123\""
    echo "  export ABMATIC_BASE_URL=\"https://app.abmatic.ai\""
    echo ""
    exit 1
fi

# Ensure we're in the right directory
if [ ! -f "PROMPT.md" ] || [ ! -f "plan.md" ]; then
    echo "ERROR: PROMPT.md or plan.md not found!"
    echo "Make sure you're in the support-docs directory"
    exit 1
fi

echo ""
echo "Starting loop..."
echo ""

for ((i=1; i<=MAX_ITERATIONS; i++)); do
    echo ""
    echo "=============================================="
    echo "  ITERATION $i of $MAX_ITERATIONS"
    echo "  $(date)"
    echo "=============================================="

    # Run Claude with print mode and bypass permissions
    result=$(claude -p "$(cat PROMPT.md)" \
        --dangerously-skip-permissions \
        --output-format text \
        2>&1) || true

    echo "$result"

    # Check for completion signal
    if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
        echo ""
        echo "=============================================="
        echo "  COMPLETED! Iterations used: $i"
        echo "=============================================="
        echo ""
        echo "All screenshot quality issues have been fixed!"
        echo "Site deployed to: https://support.abmatic.ai"
        exit 0
    fi

    # Check for stuck signal
    if [[ "$result" == *"<promise>STUCK</promise>"* ]]; then
        echo ""
        echo "=============================================="
        echo "  STUCK - Check activity.md for details"
        echo "=============================================="
        exit 2
    fi

    # Brief delay between iterations
    sleep 3
done

echo ""
echo "=============================================="
echo "  MAX ITERATIONS REACHED ($MAX_ITERATIONS)"
echo "=============================================="
echo ""
echo "Check activity.md and plan.md for progress."
echo "Run again to continue: ./ralph.sh $MAX_ITERATIONS"
exit 1
