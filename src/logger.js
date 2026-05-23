/**
 * Logging module for ReqForge
 * @module logger
 */

/**
 * Logger class for logging messages with different levels
 */
class Logger {
  /**
   * Create a Logger instance
   * @param {string} prefix - Prefix for log messages
   */
  constructor(prefix = '[ReqForge]') {
    this.prefix = prefix;
  }

  /**
   * Log a message
   * @param {string} message - Message to log
   */
  log(message) {
    console.log(`${this.prefix} ${message}`);
  }

  /**
   * Log an info message
   * @param {string} message - Message to log
   */
  info(message) {
    console.info(`${this.prefix} INFO: ${message}`);
  }

  /**
   * Log a warning message
   * @param {string} message - Message to log
   */
  warn(message) {
    console.warn(`${this.prefix} WARN: ${message}`);
  }

  /**
   * Log an error message
   * @param {string} message - Message to log
   */
  error(message) {
    console.error(`${this.prefix} ERROR: ${message}`);
  }
}

module.exports = Logger;
