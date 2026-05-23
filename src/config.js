/**
 * Configuration module for ReqForge
 * @module config
 */

const API_VERSION = 'v1';

/**
 * Get the base URL for API requests
 * @returns {string} The base URL with API version
 */
function getBaseURL() {
  return `https://api.example.com/${API_VERSION}`;
}

/**
 * Default configuration for requests
 */
const defaultConfig = {
  baseURL: getBaseURL(),
  timeout: 5000,
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
  defaultConfig,
  mergeConfig
};
