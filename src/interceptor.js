/**
 * Interceptor module for ReqForge
 * @module interceptor
 */

/**
 * Interceptor manager for request and response hooks
 */
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add an interceptor handler
   * @param {Function} fulfilled - Handler for fulfilled promise
   * @param {Function} rejected - Handler for rejected promise
   * @returns {number} Handler ID
   */
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
      id: this.handlers.length
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor handler
   * @param {number} id - Handler ID
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Execute all handlers
   * @param {*} data - Data to pass through handlers
   * @returns {Promise} Processed data
   */
  forEach(data) {
    const chain = [Promise.resolve(data)];
    this.handlers.forEach(handler => {
      if (handler) {
        chain.push(handler.fulfilled, handler.rejected);
      }
    });
    let promise = Promise.resolve(data);
    this.handlers.forEach(handler => {
      if (handler) {
        promise = promise.then(handler.fulfilled, handler.rejected);
      }
    });
    return promise;
  }

  /**
   * Clear all handlers
   */
  clear() {
    this.handlers = [];
  }
}

/**
 * Create request interceptor
 * @returns {InterceptorManager} Request interceptor
 */
function createRequestInterceptor() {
  return new InterceptorManager();
}

/**
 * Create response interceptor
 * @returns {InterceptorManager} Response interceptor
 */
function createResponseInterceptor() {
  return new InterceptorManager();
}

module.exports = {
  InterceptorManager,
  createRequestInterceptor,
  createResponseInterceptor
};
