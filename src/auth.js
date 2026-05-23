/**
 * Authentication module for ReqForge
 * @module auth
 */

const { sendRequest } = require('./request');
const DebugLogger = require('./logger');

const logger = new DebugLogger();

let authToken = null;

/**
 * Login with username and password
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {Promise<Object>} Login response with token
 */
function login(username, password) {
  logger.debug('Attempting login', { username });
  return sendRequest('/login', { username, password }, { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      authToken = data.token;
      logger.debug('Login successful');
      return data;
    });
}

/**
 * Logout and clear auth token
 * @returns {Promise<void>}
 */
function logout() {
  return sendRequest('/logout', {}, { method: 'POST' })
    .then(() => {
      authToken = null;
    });
}

/**
 * Get current auth token
 * @returns {string|null} Current auth token
 */
function getToken() {
  return authToken;
}

/**
 * Set auth token
 * @param {string} token - Auth token to set
 */
function setToken(token) {
  authToken = token;
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
function isAuthenticated() {
  return authToken !== null;
}

module.exports = {
  login,
  logout,
  getToken,
  setToken,
  isAuthenticated
};
