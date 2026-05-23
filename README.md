# ReqForge

A lightweight, flexible HTTP client library with request interception, automatic retry, and logging capabilities, designed for modern web applications.

## Installation

```bash
npm install reqforge
```

## Quick Start

```javascript
const { config, utils, request } = require('reqforge');

// Get the base URL for API requests
const baseURL = config.getBaseURL();
console.log(baseURL); // https://api.example.com/v1

// Make a GET request
request.get('/users')
  .then(res => res.json())
  .then(data => console.log(data));

// Make a POST request
request.post('/users', { name: 'John', email: 'john@example.com' })
  .then(res => res.json())
  .then(data => console.log(data));
```

## Request Methods

The `request` module provides:

- `sendRequest(endpoint, data, options)` - Generic request method
- `get(endpoint, options)` - GET request
- `post(endpoint, data, options)` - POST request
- `put(endpoint, data, options)` - PUT request
- `del(endpoint, options)` - DELETE request

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
