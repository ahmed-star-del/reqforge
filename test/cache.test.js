const { MemoryCache, createCacheKey } = require('../src/cache');

describe('cache', () => {
  describe('MemoryCache', () => {
    let cache;

    beforeEach(() => {
      cache = new MemoryCache();
    });

    test('should create instance', () => {
      expect(cache).toBeInstanceOf(MemoryCache);
    });

    test('should set and get value', () => {
      cache.set('key1', 'value1');
      expect(cache.get('key1')).toBe('value1');
    });

    test('should return null for missing key', () => {
      expect(cache.get('nonexistent')).toBeNull();
    });

    test('should check existence with has()', () => {
      cache.set('key1', 'value1');
      expect(cache.has('key1')).toBe(true);
      expect(cache.has('missing')).toBe(false);
    });

    test('should delete key', () => {
      cache.set('key1', 'value1');
      cache.delete('key1');
      expect(cache.get('key1')).toBeNull();
    });

    test('should clear all entries', () => {
      cache.set('a', 1);
      cache.set('b', 2);
      cache.clear();
      expect(cache.get('a')).toBeNull();
      expect(cache.get('b')).toBeNull();
    });

    test('should report correct size', () => {
      cache.set('a', 1);
      cache.set('b', 2);
      expect(cache.size()).toBe(2);
    });

    test('should expire entries after TTL', () => {
      jest.useFakeTimers();
      cache.set('temp', 'data', 10);
      expect(cache.get('temp')).toBe('data');
      jest.advanceTimersByTime(15);
      expect(cache.get('temp')).toBeNull();
      jest.useRealTimers();
    });

    test('should accept defaultTTL option', () => {
      const shortCache = new MemoryCache({ defaultTTL: 1 });
      expect(shortCache.defaultTTL).toBe(1);
    });
  });

  describe('createCacheKey', () => {
    test('should create key from URL', () => {
      const key = createCacheKey('/api/users');
      expect(typeof key).toBe('string');
      expect(key).toContain('/api/users');
    });

    test('should include params in key', () => {
      const key1 = createCacheKey('/api/users', { page: 1 });
      const key2 = createCacheKey('/api/users', { page: 2 });
      expect(key1).not.toBe(key2);
    });
  });
});
