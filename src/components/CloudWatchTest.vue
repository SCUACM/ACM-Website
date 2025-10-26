<template>
  <div>
    <button @click="testLog">Test CloudWatch Log</button>
    <p>{{ status }}</p>
  </div>
</template>

<script>
import { cloudWatchLogger } from '../utils/cloudWatchLogger';

export default {
  name: 'CloudWatchTest',
  data() {
    return {
      status: 'Ready to test'
    };
  },
  methods: {
    async testLog() {
      this.status = 'Testing...';
      try {
        await cloudWatchLogger.info('Test log from Vue component', {
          test: true,
          timestamp: new Date().toISOString()
        });
        this.status = 'Log sent successfully!';
      } catch (error) {
        this.status = `Error: ${error.message}`;
        console.error('CloudWatch test error:', error);
      }
    }
  }
};
</script>
