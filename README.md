# ReqForge

A lightweight, flexible HTTP client library with request interception, automatic retry, and logging capabilities, designed for modern web applications.

## Installation

```bash
npm install reqforge
```

## Quick Start

```javascript
const { config } = require('reqforge');

// Get the base URL for API requests
const baseURL = config.getBaseURL();
console.log(baseURL); // https://api.example.com/v1

// Merge custom configuration
const customConfig = config.mergeConfig({
  timeout: 10000,
  headers: {
    'Authorization': 'Bearer your-token'
  }
});
```

## Configuration

The `config` module provides:

- `getBaseURL()` - Get the base URL for API requests
- `API_VERSION` - Current API version
- `defaultConfig` - Default configuration object
- `mergeConfig(customConfig)` - Merge custom configuration with defaults

## License

MIT
