const Logger = require('../src/logger');

describe('Logger', () => {
  let logger;

  beforeEach(() => {
    logger = new Logger('[Test]');
  });

  test('should create Logger instance', () => {
    expect(logger).toBeInstanceOf(Logger);
  });

  test('should have default prefix', () => {
    const defaultLogger = new Logger();
    expect(defaultLogger.prefix).toBe('[ReqForge]');
  });

  test('should accept custom prefix', () => {
    const customLogger = new Logger('[Custom]');
    expect(customLogger.prefix).toBe('[Custom]');
  });
});
