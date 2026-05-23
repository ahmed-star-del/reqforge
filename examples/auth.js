/**
 * Authentication example for ReqForge
 * Demonstrates login, token management, and logout
 */

const reqforge = require('reqforge');

async function authExample() {
  console.log('=== ReqForge Auth Example ===\n');

  // Check initial state
  console.log('Is authenticated:', reqforge.auth.isAuthenticated());

  // Login
  console.log('Logging in...');
  try {
    const data = await reqforge.auth.login('demo', 'password123');
    console.log('Login successful, token:', reqforge.auth.getToken());
    console.log('Is authenticated:', reqforge.auth.isAuthenticated());
  } catch (err) {
    console.log('Login failed (expected with demo credentials)');

    // Manually set token for demo
    reqforge.auth.setToken('demo-token-abc123');
    console.log('Manually set token:', reqforge.auth.getToken());
  }

  // Logout
  console.log('\nLogging out...');
  await reqforge.auth.logout();
  console.log('Token after logout:', reqforge.auth.getToken());
}

authExample().catch(console.error);
