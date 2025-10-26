/**
 * AWS CloudWatch Configuration
 * 
 * To set up CloudWatch logging:
 * 
 * 1. Create a .env file in your project root with:
 *    VUE_APP_AWS_ACCESS_KEY_ID=your_access_key_here
 *    VUE_APP_AWS_SECRET_ACCESS_KEY=your_secret_key_here
 * 
 * 2. Or set these environment variables in your hosting platform:
 *    - Vercel: Add in Project Settings > Environment Variables
 *    - Netlify: Add in Site Settings > Environment Variables
 *    - EC2: Add to your server environment
 * 
 * 3. Make sure your AWS credentials have CloudWatch Logs permissions:
 *    - logs:CreateLogGroup
 *    - logs:CreateLogStream
 *    - logs:PutLogEvents
 *    - logs:DescribeLogGroups
 *    - logs:DescribeLogStreams
 */

export const cloudWatchConfig = {
  region: process.env.VUE_APP_AWS_REGION || 'us-east-1',
  logGroupName: process.env.VUE_APP_CLOUDWATCH_LOG_GROUP || '/aws/lambda/checkout-api',
  logStreamName: process.env.VUE_APP_CLOUDWATCH_LOG_STREAM || 'website-errors',
  activityStreamName: process.env.VUE_APP_CLOUDWATCH_ACTIVITY_STREAM || 'website-activity',
  accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY
};

export default cloudWatchConfig;
