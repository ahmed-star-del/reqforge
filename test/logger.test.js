const DebugLogger = require('../src/logger');

describe('DebugLogger', () => {
  let logger;

  beforeEach(() => {
    logger = new DebugLogger('[Test]');
  });

  test('should create DebugLogger instance', () => {
    expect(logger).toBeInstanceOf(DebugLogger);
  });

  test('should have default prefix', () => {
    const defaultLogger = new DebugLogger();
    expect(defaultLogger.prefix).toBe('[ReqForge]');
  });

  test('should accept custom prefix', () => {
    const customLogger = new DebugLogger('[Custom]');
    expect(customLogger.prefix).toBe('[Custom]');
  });

  test('should have debug mode disabled by default', () => {
    expect(logger.debugMode).toBe(false);
  });

  test('should enable debug mode', () => {
    logger.enableDebug();
    expect(logger.debugMode).toBe(true);
  });

  test('debug should not output when debug mode is off', () => {
    const spy = jest.spyOn(console, 'debug').mockImplementation(() => {});
    logger.debug('Test debug');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test('debug should output when debug mode is on', () => {
    const spy = jest.spyOn(console, 'debug').mockImplementation(() => {});
    logger.enableDebug();
    logger.debug('Test debug', { key: 'value' });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
