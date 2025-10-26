# CloudWatch Integration Setup Guide

This guide walks you through setting up CloudWatch logging for your Vue.js ACM website.

## Prerequisites

1. AWS Account with CloudWatch Logs permissions
2. AWS Access Key ID and Secret Access Key
3. Your website deployed and accessible

## Step 1: Get AWS Credentials

```bash
# Get your AWS access keys
aws configure list
# Note down: AWS Access Key ID and Secret Access Key
```

## Step 2: Set Environment Variables

### Option A: Local Development (.env file)
Create a `.env` file in your project root:
```bash
VUE_APP_AWS_ACCESS_KEY_ID=your_access_key_here
VUE_APP_AWS_SECRET_ACCESS_KEY=your_secret_key_here
VUE_APP_AWS_REGION=us-east-1
VUE_APP_CLOUDWATCH_LOG_GROUP=/aws/lambda/checkout-api
VUE_APP_CLOUDWATCH_LOG_STREAM=website-errors
```

### Option B: EC2 Server Environment
Add to your EC2 instance environment:
```bash
export VUE_APP_AWS_ACCESS_KEY_ID=your_access_key_here
export VUE_APP_AWS_SECRET_ACCESS_KEY=your_secret_key_here
export VUE_APP_AWS_REGION=us-east-1
```

### Option C: Hosting Platform (Vercel/Netlify)
Add in your hosting platform's environment variables section:
- VUE_APP_AWS_ACCESS_KEY_ID
- VUE_APP_AWS_SECRET_ACCESS_KEY
- VUE_APP_AWS_REGION

## Step 3: AWS IAM Permissions

Your AWS credentials need these CloudWatch Logs permissions:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        }
    ]
}
```

## Step 4: Deploy Your Website

```bash
# Build and deploy your updated website
npm run build
# Deploy to your hosting platform
```

## Step 5: Test the Integration

### Test via Browser
Visit: `https://your-website.com/test-cloudwatch`

Click the test buttons to trigger different error types:
- Test Payment Error
- Test Database Error  
- Test API Error
- Test Firebase Error
- Test General Error

### Test via Command Line
```bash
# Test general error logging
curl "https://your-website.com/test-cloudwatch"
```

## Step 6: Verify CloudWatch Logs

### Check if logs arrived (wait 1-2 minutes)
```bash
aws logs filter-log-events \
  --log-group-name /aws/lambda/checkout-api \
  --start-time $(date -v-5M +%s000)
```

### Check if alarm triggered
```bash
aws cloudwatch describe-alarms --alarm-names QuietOps-ErrorSpike
```

## Step 7: Monitor Real Errors

The integration will automatically log:
- Vue component errors
- Firebase operation failures
- Unhandled JavaScript errors
- Unhandled promise rejections
- Custom errors from your components

## Troubleshooting

### Common Issues

1. **"Failed to log to CloudWatch" errors**
   - Check AWS credentials are correct
   - Verify IAM permissions
   - Ensure log group exists

2. **Environment variables not loading**
   - Restart your development server
   - Check variable names start with `VUE_APP_`
   - Verify .env file is in project root

3. **CORS errors**
   - CloudWatch API calls are made from browser
   - Ensure your AWS credentials allow browser access
   - Consider using Firebase Functions as proxy

### Debug Mode
Set `NODE_ENV=development` to see detailed console logs.

## Security Notes

- Never commit AWS credentials to version control
- Use environment variables for all sensitive data
- Consider using AWS IAM roles for EC2 instances
- Regularly rotate your AWS access keys

## Next Steps

1. Set up CloudWatch alarms for error spikes
2. Create dashboards for monitoring
3. Add more specific error logging to critical components
4. Set up automated notifications for critical errors
