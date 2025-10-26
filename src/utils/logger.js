/**
 * Centralized logging utility for CloudWatch integration
 * Handles error logging and sends data to CloudWatch via Firebase Functions
 */

class Logger {
  constructor() {
    this.logGroupName = '/aws/lambda/checkout-api'; // Your CloudWatch log group
    this.logStreamName = 'website-errors';
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  /**
   * Log an error to CloudWatch
   * @param {Error|string} error - The error object or error message
   * @param {Object} context - Additional context information
   * @param {string} level - Log level (error, warn, info)
   */
  async logError(error, context = {}, level = 'error') {
    try {
      const errorMessage = error instanceof Error ? error.message : error;
      const errorStack = error instanceof Error ? error.stack : null;
      
      const logData = {
        timestamp: Date.now(),
        level: level,
        message: errorMessage,
        stack: errorStack,
        context: {
          url: window.location.href,
          userAgent: navigator.userAgent,
          userId: context.userId || null,
          component: context.component || 'unknown',
          action: context.action || 'unknown',
          ...context
        }
      };

      // In development, also log to console
      if (this.isDevelopment) {
        console.error('CloudWatch Log:', logData);
      }

      // Send to CloudWatch via Firebase Function
      await this.sendToCloudWatch(logData);
      
    } catch (loggingError) {
      // Fallback: log to console if CloudWatch fails
      console.error('Failed to log to CloudWatch:', loggingError);
      console.error('Original error:', error);
    }
  }

  /**
   * Send log data to CloudWatch via Firebase Function
   * @param {Object} logData - The log data to send
   */
  async sendToCloudWatch(logData) {
    try {
      const response = await fetch('/api/log-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // If the API endpoint doesn't exist yet, we'll handle it gracefully
      console.warn('CloudWatch API not available:', error.message);
      throw error;
    }
  }

  /**
   * Log a warning
   * @param {string} message - Warning message
   * @param {Object} context - Additional context
   */
  async logWarning(message, context = {}) {
    return this.logError(message, context, 'warn');
  }

  /**
   * Log an info message
   * @param {string} message - Info message
   * @param {Object} context - Additional context
   */
  async logInfo(message, context = {}) {
    return this.logError(message, context, 'info');
  }

  /**
   * Log Firebase-related errors
   * @param {Error} error - Firebase error
   * @param {string} operation - The Firebase operation that failed
   * @param {Object} context - Additional context
   */
  async logFirebaseError(error, operation, context = {}) {
    return this.logError(error, {
      ...context,
      component: 'firebase',
      action: operation,
      firebaseErrorCode: error.code || 'unknown'
    });
  }

  /**
   * Log authentication-related errors
   * @param {Error} error - Auth error
   * @param {string} action - The auth action that failed
   * @param {Object} context - Additional context
   */
  async logAuthError(error, action, context = {}) {
    return this.logError(error, {
      ...context,
      component: 'authentication',
      action: action
    });
  }

  /**
   * Log component-specific errors
   * @param {Error} error - Component error
   * @param {string} componentName - Name of the Vue component
   * @param {string} method - Method where error occurred
   * @param {Object} context - Additional context
   */
  async logComponentError(error, componentName, method, context = {}) {
    return this.logError(error, {
      ...context,
      component: componentName,
      action: method
    });
  }
}

// Create a singleton instance
const logger = new Logger();

// Export both the class and instance
export { Logger };
export default logger;

