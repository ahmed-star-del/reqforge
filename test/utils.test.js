const { buildURL, serializeQuery, parseQuery, deepMerge, isPlainObject, delay } = require('../src/utils');

describe('utils', () => {
  describe('serializeQuery', () => {
    test('should serialize object to query string', () => {
      const result = serializeQuery({ page: 1, limit: 10 });
      expect(result).toBe('page=1&limit=10');
    });

    test('should filter null and undefined', () => {
      const result = serializeQuery({ a: 1, b: null, c: undefined });
      expect(result).toBe('a=1');
    });
  });

  describe('parseQuery', () => {
    test('should parse query string to object', () => {
      const result = parseQuery('page=1&limit=10');
      expect(result).toEqual({ page: '1', limit: '10' });
    });
  });

  describe('deepMerge', () => {
    test('should deep merge objects', () => {
      const result = deepMerge(
        { a: 1, b: { x: 1 } },
        { b: { y: 2 }, c: 3 }
      );
      expect(result).toEqual({ a: 1, b: { x: 1, y: 2 }, c: 3 });
    });
  });

  describe('isPlainObject', () => {
    test('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
    });

    test('should return false for arrays', () => {
      expect(isPlainObject([])).toBe(false);
    });
  });

  describe('delay', () => {
    test('should resolve after delay', async () => {
      const start = Date.now();
      await delay(10);
      expect(Date.now() - start).toBeGreaterThanOrEqual(8);
    });
  });
});
