/**
 * Configuration module for ReqForge
 * @module config
 */

const API_VERSION = 'v2';

const DEFAULT_TIMEOUT = 3000;
const MAX_TIMEOUT = 10000;

/**
 * Get the base URL for API requests
 * @param {number} timeout - Request timeout in ms
 * @returns {string} The base URL with API version
 */
function getBaseURL(timeout = DEFAULT_TIMEOUT) {
  return `https://api.example.com/${API_VERSION}`;
}

/**
 * Validate timeout value
 * @param {number} timeout - Timeout value to validate
 * @returns {number} Validated timeout
 * @throws {Error} If timeout is out of range
 */
function validateTimeout(timeout) {
  if (timeout < 0 || timeout > MAX_TIMEOUT) {
    throw new Error(`Timeout must be between 0 and ${MAX_TIMEOUT}`);
  }
  return timeout;
}

/**
 * Default configuration for requests
 */
const defaultConfig = {
  baseURL: getBaseURL(),
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Merge custom configuration with defaults
 * @param {Object} customConfig - Custom configuration to merge
 * @returns {Object} Merged configuration
 */
function mergeConfig(customConfig = {}) {
  return {
    ...defaultConfig,
    ...customConfig,
    headers: {
      ...defaultConfig.headers,
      ...(customConfig.headers || {})
    }
  };
}

module.exports = {
  getBaseURL,
  API_VERSION,
  DEFAULT_TIMEOUT,
  MAX_TIMEOUT,
  validateTimeout,
  defaultConfig,
  mergeConfig
};
