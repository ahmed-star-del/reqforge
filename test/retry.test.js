const { withRetry, calculateBackoff } = require('../src/retry');

describe('retry', () => {
  describe('calculateBackoff', () => {
    test('should calculate base delay for attempt 0', () => {
      expect(calculateBackoff(0, 1000)).toBe(1000);
    });

    test('should double delay for attempt 1', () => {
      expect(calculateBackoff(1, 1000)).toBe(2000);
    });

    test('should cap at maxDelay', () => {
      const result = calculateBackoff(10, 5000, 30000);
      expect(result).toBeLessThanOrEqual(30000);
    });
  });

  describe('withRetry', () => {
    test('should return result on success', async () => {
      const fn = () => Promise.resolve('success');
      const result = await withRetry(fn);
      expect(result).toBe('success');
    });

    test('should retry on failure', async () => {
      let attempts = 0;
      const fn = () => {
        attempts++;
        if (attempts < 2) return Promise.reject(new Error('fail'));
        return Promise.resolve('recovered');
      };
      const result = await withRetry(fn, { delay: 10 });
      expect(result).toBe('recovered');
      expect(attempts).toBe(2);
    });

    test('should throw after maxRetries', async () => {
      const fn = () => Promise.reject(new Error('always fail'));
      await expect(withRetry(fn, { maxRetries: 1, delay: 10 })).rejects.toThrow('always fail');
    });

    test('should respect shouldRetry', async () => {
      const fn = () => Promise.reject(new Error('no-retry'));
      await expect(
        withRetry(fn, {
          maxRetries: 2,
          delay: 10,
          shouldRetry: (err) => err.message !== 'no-retry'
        })
      ).rejects.toThrow('no-retry');
    });
  });
});
