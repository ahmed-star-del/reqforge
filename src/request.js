/**
 * Core request module for ReqForge
 * @module request
 */

const { getBaseURL } = require('./config');
const DebugLogger = require('./logger');

const logger = new DebugLogger();

/**
 * Send HTTP request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Request options
 * @returns {Promise<Response>} Fetch response promise
 */
function sendRequest(endpoint, data, options = {}) {
  const url = getBaseURL(2000) + endpoint;
  logger.log(`Request: ${options.method || 'GET'} ${url}`);

  const fetchOptions = {
    method: options.method || 'GET',
    headers: options.headers || {}
  };

  if (data) {
    fetchOptions.body = JSON.stringify(data);
    fetchOptions.headers['Content-Type'] = 'application/json';
  }

  return fetch(url, fetchOptions);
}

/**
 * GET request helper
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<Response>} Fetch response promise
 */
function get(endpoint, options = {}) {
  return sendRequest(endpoint, null, { ...options, method: 'GET' });
}

/**
 * POST request helper
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Request options
 * @returns {Promise<Response>} Fetch response promise
 */
function post(endpoint, data, options = {}) {
  return sendRequest(endpoint, data, { ...options, method: 'POST' });
}

/**
 * PUT request helper
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @param {Object} options - Request options
 * @returns {Promise<Response>} Fetch response promise
 */
function put(endpoint, data, options = {}) {
  return sendRequest(endpoint, data, { ...options, method: 'PUT' });
}

/**
 * DELETE request helper
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<Response>} Fetch response promise
 */
function del(endpoint, options = {}) {
  return sendRequest(endpoint, null, { ...options, method: 'DELETE' });
}

module.exports = {
  sendRequest,
  get,
  post,
  put,
  del
};
