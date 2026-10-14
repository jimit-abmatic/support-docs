#!/usr/bin/env bash
# One-click production deploy for support.abmatic.ai (see MAINTAINING.md section 8).
# Builds, syncs to S3, invalidates CloudFront, then verifies the new pages are live.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build 2>&1 | grep -E '\[SUCCESS\]|\[ERROR\]|broken' || true
test -f build/index.html || { echo "build failed: build/index.html missing"; exit 1; }
aws s3 sync build s3://support-abmatic-ai --delete | tail -3
INV=$(aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*" --query 'Invalidation.Id' --output text)
echo "invalidation $INV created; waiting for it to complete"
aws cloudfront wait invalidation-completed --distribution-id EWO3Z3VNLFUQ2 --id "$INV"
for p in "${@:-api/api-contacts api/api-visitors}"; do
  for page in $p; do
    code=$(curl -s -o /dev/null -w '%{http_code}' "https://support.abmatic.ai/$page?t=$(date +%s)")
    title=$(curl -s "https://support.abmatic.ai/$page?t=$(date +%s)" | grep -oE '<title>[^<]*</title>' | head -1)
    echo "$page -> $code $title"
  done
done
