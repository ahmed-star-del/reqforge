const reqforge = require('../src/index');

describe('index', () => {
  test('should export config', () => {
    expect(reqforge.config).toBeDefined();
  });

  test('should export utils', () => {
    expect(reqforge.utils).toBeDefined();
  });

  test('should export request', () => {
    expect(reqforge.request).toBeDefined();
  });

  test('should export Logger', () => {
    expect(reqforge.Logger).toBeDefined();
  });

  test('should export auth', () => {
    expect(reqforge.auth).toBeDefined();
  });

  test('should export errors', () => {
    expect(reqforge.errors).toBeDefined();
  });

  test('should export retry', () => {
    expect(reqforge.retry).toBeDefined();
  });

  test('should export interceptor', () => {
    expect(reqforge.interceptor).toBeDefined();
  });

  test('should export cache', () => {
    expect(reqforge.cache).toBeDefined();
  });
});
