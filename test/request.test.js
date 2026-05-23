const { sendRequest, get, post, put, del } = require('../src/request');

describe('request', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        text: () => Promise.resolve(''),
        status: 200,
        ok: true
      })
    );
  });

  afterAll(() => {
    global.fetch = undefined;
  });

  test('sendRequest should exist', () => {
    expect(typeof sendRequest).toBe('function');
  });

  test('get should return a promise', () => {
    const result = get('/test');
    expect(result).toBeInstanceOf(Promise);
  });

  test('post should return a promise', () => {
    const result = post('/test', { key: 'value' });
    expect(result).toBeInstanceOf(Promise);
  });

  test('put should return a promise', () => {
    const result = put('/test', { key: 'value' });
    expect(result).toBeInstanceOf(Promise);
  });

  test('del should return a promise', () => {
    const result = del('/test');
    expect(result).toBeInstanceOf(Promise);
  });

  test('sendRequest should build URL with base URL', async () => {
    await sendRequest('/users');
    expect(global.fetch).toHaveBeenCalled();
  });
});
