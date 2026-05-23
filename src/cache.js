/**
 * Cache module for ReqForge
 * @module cache
 */

/**
 * Simple in-memory cache with TTL support
 */
class MemoryCache {
  constructor(options = {}) {
    this.store = new Map();
    this.defaultTTL = options.defaultTTL || 60000;
  }

  /**
   * Get value from cache
   * @param {string} key - Cache key
   * @returns {*|null} Cached value or null
   */
  get(key) {
    const entry = this.store.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiry) {
      this.store.delete(key);
      return null;
    }

    return entry.value;
  }

  /**
   * Set value in cache
   * @param {string} key - Cache key
   * @param {*} value - Value to cache
   * @param {number} ttl - Time to live in ms
   */
  set(key, value, ttl) {
    this.store.set(key, {
      value,
      expiry: Date.now() + (ttl || this.defaultTTL)
    });
  }

  /**
   * Check if key exists and is not expired
   * @param {string} key - Cache key
   * @returns {boolean} True if valid
   */
  has(key) {
    return this.get(key) !== null;
  }

  /**
   * Delete key from cache
   * @param {string} key - Cache key
   */
  delete(key) {
    this.store.delete(key);
  }

  /**
   * Clear all cached entries
   */
  clear() {
    this.store.clear();
  }

  /**
   * Get cache size
   * @returns {number} Number of entries
   */
  size() {
    let count = 0;
    this.store.forEach((entry, key) => {
      if (Date.now() <= entry.expiry) {
        count++;
      } else {
        this.store.delete(key);
      }
    });
    return count;
  }
}

/**
 * Create cache key from URL and params
 * @param {string} url - Request URL
 * @param {Object} params - Request params
 * @returns {string} Cache key
 */
function createCacheKey(url, params = {}) {
  const normalized = { url, ...params };
  return JSON.stringify(normalized);
}

module.exports = {
  MemoryCache,
  createCacheKey
};
