const { ReqForgeError, NetworkError, TimeoutError, AuthError, ValidationError, ErrorCodes } = require('../src/errors');

describe('errors', () => {
  test('ReqForgeError should have code', () => {
    const err = new ReqForgeError('Test', 'TEST_CODE');
    expect(err.message).toBe('Test');
    expect(err.code).toBe('TEST_CODE');
    expect(err).toBeInstanceOf(Error);
  });

  test('NetworkError should have NETWORK_ERROR code', () => {
    const err = new NetworkError();
    expect(err.code).toBe('NETWORK_ERROR');
    expect(err).toBeInstanceOf(ReqForgeError);
  });

  test('TimeoutError should have TIMEOUT_ERROR code', () => {
    const err = new TimeoutError();
    expect(err.code).toBe('TIMEOUT_ERROR');
  });

  test('AuthError should have AUTH_ERROR code', () => {
    const err = new AuthError();
    expect(err.code).toBe('AUTH_ERROR');
  });

  test('ValidationError should have VALIDATION_ERROR code', () => {
    const err = new ValidationError();
    expect(err.code).toBe('VALIDATION_ERROR');
  });
});
