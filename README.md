# ReqForge

A lightweight, flexible HTTP client library with request interception, automatic retry, and logging capabilities, designed for modern web applications.

## Installation

```bash
npm install reqforge
```

## Quick Start

```javascript
const { config, request, retry } = require('reqforge');

// Make a request with automatic retry
retry.withRetry(() => {
  return request.get('/users')
    .then(res => res.json());
}, { maxRetries: 3, delay: 1000 })
  .then(data => console.log(data));
```

## Retry Mechanism

The `retry` module provides:

- `withRetry(fn, options)` - Execute function with automatic retry
- `calculateBackoff(attempt, baseDelay, maxDelay)` - Calculate exponential backoff delay

### Retry Options

| Option | Default | Description |
|--------|---------|-------------|
| `maxRetries` | 3 | Maximum number of retry attempts |
| `delay` | 1000 | Initial delay in milliseconds |
| `backoff` | 2 | Backoff multiplier |
| `shouldRetry` | `() => true` | Function to determine if retry should occur |

## Error Handling

The `errors` module provides:

- `ReqForgeError` - Base error class
- `NetworkError` - Network request failures
- `TimeoutError` - Request timeout errors
- `AuthError` - Authentication failures
- `ValidationError` - Validation errors
- `ErrorCodes` - Error code constants
- `createErrorFromResponse(response)` - Create error from response

## Authentication

The `auth` module provides:

- `login(username, password)` - Login and store token
- `logout()` - Logout and clear token
- `getToken()` - Get current auth token
- `setToken(token)` - Set auth token manually
- `isAuthenticated()` - Check if authenticated

## Request Methods

The `request` module provides:

- `sendRequest(endpoint, data, options)` - Generic request method
- `get(endpoint, options)` - GET request
- `post(endpoint, data, options)` - POST request
- `put(endpoint, data, options)` - PUT request
- `del(endpoint, options)` - DELETE request

## Logger

The `Logger` class provides:

- `log(message)` - Log a message
- `info(message)` - Log an info message
- `warn(message)` - Log a warning message
- `error(message)` - Log an error message

## Configuration

The `config` module provides:

- `getBaseURL()` - Get the base URL for API requests
- `API_VERSION` - Current API version
- `defaultConfig` - Default configuration object
- `mergeConfig(customConfig)` - Merge custom configuration with defaults

## Utilities

The `utils` module provides:

- `buildURL(baseURL, params)` - Build URL with query parameters
- `serializeQuery(obj)` - Serialize object to query string
- `parseQuery(queryString)` - Parse query string to object
- `deepMerge(target, source)` - Deep merge objects
- `isPlainObject(value)` - Check if value is a plain object
- `delay(ms)` - Delay execution

## License

MIT
