# ReqForge

A lightweight, flexible HTTP client library with request interception, automatic retry, and logging capabilities, designed for modern web applications.

## Installation

```bash
npm install reqforge
```

## Quick Start

```javascript
const { config, utils } = require('reqforge');

// Get the base URL for API requests
const baseURL = config.getBaseURL();
console.log(baseURL); // https://api.example.com/v1

// Build URL with query parameters
const url = utils.buildURL('https://api.example.com/v1/users', { page: 1, limit: 10 });
console.log(url); // https://api.example.com/v1/users?page=1&limit=10
```

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
