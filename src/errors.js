/**
 * Error handling module for ReqForge
 * @module errors
 */

/**
 * Base error class for ReqForge
 */
class ReqForgeError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'ReqForgeError';
    this.code = code;
  }
}

/**
 * Network error
 */
class NetworkError extends ReqForgeError {
  constructor(message = 'Network request failed') {
    super(message, 'NETWORK_ERROR');
    this.name = 'NetworkError';
  }
}

/**
 * Timeout error
 */
class TimeoutError extends ReqForgeError {
  constructor(message = 'Request timeout') {
    super(message, 'TIMEOUT_ERROR');
    this.name = 'TimeoutError';
  }
}

/**
 * Authentication error
 */
class AuthError extends ReqForgeError {
  constructor(message = 'Authentication failed') {
    super(message, 'AUTH_ERROR');
    this.name = 'AuthError';
  }
}

/**
 * Validation error
 */
class ValidationError extends ReqForgeError {
  constructor(message = 'Validation failed') {
    super(message, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

/**
 * Error codes
 */
const ErrorCodes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

/**
 * Create error from response
 * @param {Response} response - Fetch response
 * @returns {ReqForgeError} Appropriate error instance
 */
function createErrorFromResponse(response) {
  if (response.status === 401) {
    return new AuthError('Unauthorized');
  }
  if (response.status === 403) {
    return new AuthError('Forbidden');
  }
  if (response.status === 404) {
    return new NetworkError('Resource not found');
  }
  if (response.status >= 500) {
    return new NetworkError('Server error');
  }
  return new ReqForgeError('Request failed', 'REQUEST_ERROR');
}

module.exports = {
  ReqForgeError,
  NetworkError,
  TimeoutError,
  AuthError,
  ValidationError,
  ErrorCodes,
  createErrorFromResponse
};
