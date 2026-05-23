/**
 * Retry example for ReqForge
 * Demonstrates automatic retry with exponential backoff
 */

const reqforge = require('reqforge');

async function retryExample() {
  console.log('=== ReqForge Retry Example ===\n');

  // Simulate an unstable operation
  let attempt = 0;
  const unstableFn = async () => {
    attempt++;
    console.log(`Attempt ${attempt}...`);
    if (attempt < 3) {
      throw new Error('Temporary failure');
    }
    return 'Success!';
  };

  // With retry (default: 3 retries)
  console.log('Running with retry...');
  try {
    const result = await reqforge.retry.withRetry(unstableFn, {
      maxRetries: 3,
      delay: 100,
      backoff: 2
    });
    console.log('Result:', result);
  } catch (err) {
    console.log('All retries exhausted:', err.message);
  }

  // Calculate backoff delays
  console.log('\nBackoff delays:');
  for (let i = 0; i < 5; i++) {
    const delay = reqforge.retry.calculateBackoff(i, 1000);
    console.log(`  Attempt ${i}: ${delay}ms`);
  }
}

retryExample().catch(console.error);
