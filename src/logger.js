/**
 * Debug Logger module for ReqForge
 * @module logger
 */

class DebugLogger {
  constructor(prefix = '[ReqForge]') {
    this.prefix = prefix;
    this.debugMode = false;
  }

  log(message) {
    console.log(`${this.prefix} ${message}`);
  }

  info(message) {
    console.info(`${this.prefix} INFO: ${message}`);
  }

  warn(message) {
    console.warn(`${this.prefix} WARN: ${message}`);
  }

  error(message) {
    console.error(`${this.prefix} ERROR: ${message}`);
  }

  enableDebug() {
    this.debugMode = true;
  }

  debug(message, data = null) {
    if (this.debugMode) {
      console.debug(`${this.prefix} DEBUG: ${message}`, data || '');
    }
  }
}

module.exports = DebugLogger;
