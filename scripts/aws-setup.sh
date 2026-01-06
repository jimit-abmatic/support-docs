#!/bin/bash

# AWS Setup Script for Abmatic AI Support Documentation
# This script creates the necessary AWS resources for hosting the docs

set -e

# Configuration
BUCKET_NAME="support-abmatic-ai"
DOMAIN_NAME="support.abmatic.ai"
AWS_REGION="us-east-1"

echo "🚀 Setting up AWS infrastructure for $DOMAIN_NAME"

# 1. Create S3 Bucket
echo "📦 Creating S3 bucket: $BUCKET_NAME"
aws s3api create-bucket \
    --bucket $BUCKET_NAME \
    --region $AWS_REGION

# 2. Configure bucket for static website hosting
echo "🌐 Configuring static website hosting"
aws s3 website s3://$BUCKET_NAME/ \
    --index-document index.html \
    --error-document 404.html

# 3. Set bucket policy for public read access (CloudFront will use OAI)
echo "🔐 Setting bucket policy"
cat > /tmp/bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy \
    --bucket $BUCKET_NAME \
    --policy file:///tmp/bucket-policy.json

# 4. Request SSL Certificate (if not exists)
echo "🔒 Checking SSL certificate for $DOMAIN_NAME"
CERT_ARN=$(aws acm list-certificates \
    --region us-east-1 \
    --query "CertificateSummaryList[?DomainName=='$DOMAIN_NAME'].CertificateArn" \
    --output text)

if [ -z "$CERT_ARN" ]; then
    echo "📜 Requesting new SSL certificate"
    CERT_ARN=$(aws acm request-certificate \
        --domain-name $DOMAIN_NAME \
        --validation-method DNS \
        --region us-east-1 \
        --query 'CertificateArn' \
        --output text)
    echo "⚠️  Certificate requested: $CERT_ARN"
    echo "⚠️  Please validate the certificate via DNS before continuing"
    echo "⚠️  Run: aws acm describe-certificate --certificate-arn $CERT_ARN --region us-east-1"
else
    echo "✅ Certificate found: $CERT_ARN"
fi

# 5. Create CloudFront Distribution
echo "☁️ Creating CloudFront distribution"
cat > /tmp/cf-config.json << EOF
{
    "CallerReference": "support-abmatic-$(date +%s)",
    "Aliases": {
        "Quantity": 1,
        "Items": ["$DOMAIN_NAME"]
    },
    "DefaultRootObject": "index.html",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-$BUCKET_NAME",
                "DomainName": "$BUCKET_NAME.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
        "ViewerProtocolPolicy": "redirect-to-https",
        "AllowedMethods": {
            "Quantity": 2,
            "Items": ["GET", "HEAD"],
            "CachedMethods": {
                "Quantity": 2,
                "Items": ["GET", "HEAD"]
            }
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000,
        "Compress": true
    },
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/404.html",
                "ResponseCode": "404",
                "ErrorCachingMinTTL": 300
            }
        ]
    },
    "Comment": "Abmatic AI Support Documentation",
    "Enabled": true,
    "ViewerCertificate": {
        "ACMCertificateArn": "$CERT_ARN",
        "SSLSupportMethod": "sni-only",
        "MinimumProtocolVersion": "TLSv1.2_2021"
    },
    "HttpVersion": "http2"
}
EOF

DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config file:///tmp/cf-config.json \
    --query 'Distribution.Id' \
    --output text 2>/dev/null || echo "")

if [ -n "$DISTRIBUTION_ID" ]; then
    echo "✅ CloudFront distribution created: $DISTRIBUTION_ID"

    # Get the CloudFront domain name
    CF_DOMAIN=$(aws cloudfront get-distribution \
        --id $DISTRIBUTION_ID \
        --query 'Distribution.DomainName' \
        --output text)

    echo ""
    echo "📋 NEXT STEPS:"
    echo "=============="
    echo "1. Add this CNAME record to your DNS:"
    echo "   Name: support"
    echo "   Value: $CF_DOMAIN"
    echo ""
    echo "2. Add these secrets to your GitHub repository:"
    echo "   - AWS_ACCESS_KEY_ID"
    echo "   - AWS_SECRET_ACCESS_KEY"
    echo "   - CLOUDFRONT_DISTRIBUTION_ID: $DISTRIBUTION_ID"
    echo ""
    echo "3. Push to the main branch to trigger deployment"
else
    echo "⚠️  Could not create CloudFront distribution automatically."
    echo "    This may be because the SSL certificate is not yet validated."
    echo "    Please create it manually after certificate validation."
fi

echo ""
echo "🎉 AWS setup complete!"
