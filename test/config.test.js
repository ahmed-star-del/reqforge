const { getBaseURL, API_VERSION, defaultConfig, mergeConfig } = require('../src/config');

describe('config', () => {
  test('getBaseURL should return URL with API version', () => {
    const url = getBaseURL();
    expect(url).toContain('api.example.com');
    expect(url).toContain(API_VERSION);
  });

  test('API_VERSION should be v1', () => {
    expect(API_VERSION).toBe('v1');
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
