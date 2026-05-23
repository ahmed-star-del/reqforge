/**
 * Basic usage example for ReqForge
 * Demonstrates simple GET and POST requests
 */

const reqforge = require('reqforge');

async function basicExample() {
  console.log('=== ReqForge Basic Example ===\n');

  // GET request
  console.log('Making GET request...');
  const getResponse = await reqforge.request.get('/users');
  console.log('GET status:', getResponse.status);

  // POST request
  console.log('\nMaking POST request...');
  const postResponse = await reqforge.request.post('/users', {
    name: 'John Doe',
    email: 'john@example.com'
  });
  console.log('POST status:', postResponse.status);

  // Using config
  console.log('\nAPI Version:', reqforge.config.API_VERSION);
  console.log('Base URL:', reqforge.config.getBaseURL());
}

basicExample().catch(console.error);
