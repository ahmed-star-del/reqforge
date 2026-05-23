const { getBaseURL, API_VERSION, defaultConfig, mergeConfig, DEFAULT_TIMEOUT, MAX_TIMEOUT, validateTimeout } = require('../src/config');

describe('config', () => {
  test('getBaseURL should return URL with API version', () => {
    const url = getBaseURL();
    expect(url).toContain('api.example.com');
    expect(url).toContain(API_VERSION);
  });

  test('getBaseURL should accept timeout parameter', () => {
    const url = getBaseURL(2000);
    expect(url).toContain('v2');
  });

  test('API_VERSION should be v2', () => {
    expect(API_VERSION).toBe('v2');
  });

  test('DEFAULT_TIMEOUT should be 3000', () => {
    expect(DEFAULT_TIMEOUT).toBe(3000);
  });

  test('MAX_TIMEOUT should be 10000', () => {
    expect(MAX_TIMEOUT).toBe(10000);
  });

  test('validateTimeout should return timeout if valid', () => {
    expect(validateTimeout(5000)).toBe(5000);
  });

  test('validateTimeout should throw if negative', () => {
    expect(() => validateTimeout(-1)).toThrow();
  });

  test('validateTimeout should throw if exceeds max', () => {
    expect(() => validateTimeout(20000)).toThrow();
  });

  test('defaultConfig should have required fields', () => {
    expect(defaultConfig).toHaveProperty('baseURL');
    expect(defaultConfig).toHaveProperty('timeout');
    expect(defaultConfig).toHaveProperty('headers');
    expect(defaultConfig.headers).toHaveProperty('Content-Type');
  });

  test('mergeConfig should merge custom config', () => {
    const result = mergeConfig({ timeout: 10000 });
    expect(result.timeout).toBe(10000);
    expect(result.headers['Content-Type']).toBe('application/json');
  });

  test('mergeConfig should merge custom headers', () => {
    const result = mergeConfig({
      headers: { Authorization: 'Bearer token' }
    });
    expect(result.headers['Content-Type']).toBe('application/json');
    expect(result.headers['Authorization']).toBe('Bearer token');
  });
});
