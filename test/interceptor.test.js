const { InterceptorManager, createRequestInterceptor, createResponseInterceptor } = require('../src/interceptor');

describe('interceptor', () => {
  describe('InterceptorManager', () => {
    let manager;

    beforeEach(() => {
      manager = new InterceptorManager();
    });

    test('should create instance', () => {
      expect(manager).toBeInstanceOf(InterceptorManager);
    });

    test('should add handler with use()', () => {
      const id = manager.use(() => {}, () => {});
      expect(typeof id).toBe('number');
    });

    test('should eject handler', () => {
      const id = manager.use(() => {}, () => {});
      expect(() => manager.eject(id)).not.toThrow();
    });

    test('should clear all handlers', () => {
      manager.use(() => {});
      manager.use(() => {});
      manager.clear();
      expect(manager.handlers).toHaveLength(0);
    });

    test('should process data through handlers', async () => {
      manager.use((data) => data + 1);
      manager.use((data) => data * 2);
      const result = await manager.forEach(3);
      expect(result).toBe(8);
    });

    test('should handle rejected handler', async () => {
      manager.use(
        (data) => data,
        (err) => 'recovered: ' + err.message
      );
      const result = await manager.forEach(Promise.reject(new Error('boom')).catch(e => e));
      expect(result).toBeInstanceOf(Error);
    });
  });

  describe('createRequestInterceptor', () => {
    test('should return InterceptorManager', () => {
      expect(createRequestInterceptor()).toBeInstanceOf(InterceptorManager);
    });
  });

  describe('createResponseInterceptor', () => {
    test('should return InterceptorManager', () => {
      expect(createResponseInterceptor()).toBeInstanceOf(InterceptorManager);
    });
  });
});
