/**
 * Utility functions for ReqForge
 * @module utils
 */

/**
 * Build URL with query parameters
 * @param {string} baseURL - The base URL
 * @param {Object} params - Query parameters
 * @returns {string} URL with query string
 */
function buildURL(baseURL, params = {}) {
  const url = new URL(baseURL);
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
}

/**
 * Serialize object to query string
 * @param {Object} obj - Object to serialize
 * @returns {string} Query string
 */
function serializeQuery(obj) {
  return Object.keys(obj)
    .filter(key => obj[key] !== undefined && obj[key] !== null)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

/**
 * Parse query string to object
 * @param {string} queryString - Query string to parse
 * @returns {Object} Parsed query object
 */
function parseQuery(queryString) {
  const params = {};
  const searchParams = new URLSearchParams(queryString);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

/**
 * Deep merge objects
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
 */
function deepMerge(target, source) {
  const result = { ...target };
  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });
  return result;
}

/**
 * Check if value is a plain object
 * @param {*} value - Value to check
 * @returns {boolean} True if plain object
 */
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Delay execution
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  buildURL,
  serializeQuery,
  parseQuery,
  deepMerge,
  isPlainObject,
  delay
};
