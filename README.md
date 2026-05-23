# ReqForge

A lightweight, flexible HTTP client library with request interception, automatic retry, and logging capabilities, designed for modern web applications.

## Installation

```bash
npm install reqforge
```

## Quick Start

```javascript
const { request, interceptor } = require('reqforge');

// Add a request interceptor
const reqInterceptor = interceptor.createRequestInterceptor();
reqInterceptor.use((config) => {
  console.log('Request:', config.url);
  return config;
});

// Make a request
request.get('/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Examples

See the [examples](./examples) directory for more usage examples:

- [basic.js](./examples/basic.js) - Basic GET and POST requests
- [auth.js](./examples/auth.js) - Authentication flow
- [retry.js](./examples/retry.js) - Retry with exponential backoff

## API Reference

### Request Methods

The `request` module provides:

- `sendRequest(endpoint, data, options)` - Generic request method
- `get(endpoint, options)` - GET request
- `post(endpoint, data, options)` - POST request
- `put(endpoint, data, options)` - PUT request
- `del(endpoint, options)` - DELETE request

### Configuration

The `config` module provides:

- `getBaseURL()` - Get the base URL for API requests
- `API_VERSION` - Current API version
- `defaultConfig` - Default configuration object
- `mergeConfig(customConfig)` - Merge custom configuration with defaults

### DebugLogger

The `DebugLogger` class provides:

- `log(message)` - Log a message
- `info(message)` - Log an info message
- `warn(message)` - Log a warning message
- `error(message)` - Log an error message
- `debug(message, data)` - Log debug message with optional data (only when debug mode enabled)
- `enableDebug()` - Enable debug mode

### Authentication

The `auth` module provides:

- `login(username, password)` - Login and store token
- `logout()` - Logout and clear token
- `getToken()` - Get current auth token
- `setToken(token)` - Set auth token manually
- `isAuthenticated()` - Check if authenticated

### Error Handling

The `errors` module provides:

- `ReqForgeError` - Base error class
- `NetworkError` - Network request failures
- `TimeoutError` - Request timeout errors
- `AuthError` - Authentication failures
- `ValidationError` - Validation errors
- `ErrorCodes` - Error code constants
- `createErrorFromResponse(response)` - Create error from HTTP response

### Retry Mechanism

The `retry` module provides:

- `withRetry(fn, options)` - Execute function with automatic retry
- `calculateBackoff(attempt, baseDelay, maxDelay)` - Calculate exponential backoff delay

Options for `withRetry`:
- `maxRetries` (default: 3) - Maximum number of retry attempts
- `delay` (default: 1000) - Initial delay in milliseconds
- `backoff` (default: 2) - Backoff multiplier
- `shouldRetry(error)` - Function to determine if retry should occur

### Interceptors

The `interceptor` module provides request and response interception:

- `createRequestInterceptor()` - Create request interceptor manager
- `createResponseInterceptor()` - Create response interceptor manager

#### InterceptorManager Methods

- `use(fulfilled, rejected)` - Add interceptor handler
- `eject(id)` - Remove interceptor handler
- `clear()` - Clear all handlers
- `forEach(data)` - Process data through all handlers

### Caching

The `cache` module provides:

- `MemoryCache` - In-memory cache with TTL support
  - `get(key)` - Get cached value
  - `set(key, value, ttl)` - Set cached value with optional TTL
  - `has(key)` - Check if key exists
  - `delete(key)` - Remove cached entry
  - `clear()` - Clear all entries
  - `size()` - Get cache size
- `createCacheKey(url, params)` - Generate cache key from URL and params

### Utilities

The `utils` module provides:

- `buildURL(baseURL, params)` - Build URL with query parameters
- `serializeQuery(obj)` - Serialize object to query string
- `parseQuery(queryString)` - Parse query string to object
- `deepMerge(target, source)` - Deep merge objects
- `isPlainObject(value)` - Check if value is a plain object
- `delay(ms)` - Delay execution

## TypeScript Support

TypeScript type definitions are included. Import types:

```typescript
import { request, config, Logger } from 'reqforge';
```

## Testing

```bash
npm test
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## License

MIT
