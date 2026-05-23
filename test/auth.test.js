const { login, logout, getToken, setToken, isAuthenticated } = require('../src/auth');

describe('auth', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ token: 'mock-token' }),
        text: () => Promise.resolve(''),
        status: 200,
        ok: true
      })
    );
  });

  afterAll(() => {
    global.fetch = undefined;
  });

  beforeEach(() => {
    setToken(null);
  });

  test('getToken should return null initially', () => {
    expect(getToken()).toBeNull();
  });

  test('setToken should set and getToken should return token', () => {
    setToken('test-token-123');
    expect(getToken()).toBe('test-token-123');
  });

  test('isAuthenticated should return false initially', () => {
    expect(isAuthenticated()).toBe(false);
  });

  test('isAuthenticated should return true after setting token', () => {
    setToken('test-token');
    expect(isAuthenticated()).toBe(true);
  });

  test('logout should return a promise', () => {
    const result = logout();
    expect(result).toBeInstanceOf(Promise);
  });

  test('login should return a promise', () => {
    const result = login('user', 'pass');
    expect(result).toBeInstanceOf(Promise);
  });
});
