# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.13.0] - 2026-05-23

### Added
- Usage examples (basic, auth, retry)
- Comprehensive API documentation in README

## [0.12.0] - 2026-05-23

### Added
- Unit tests with Jest (67 tests, 10 suites)
- Test coverage for all modules

## [0.11.0] - 2026-05-23

### Added
- TypeScript type definitions (types/index.d.ts)

## [0.10.0] - 2026-05-23

### Added
- MemoryCache class with TTL support
- createCacheKey() utility for cache key generation

## [0.9.0] - 2026-05-23

### Added
- Request and response interceptor system
- InterceptorManager class with use/eject/clear methods

## [0.8.0] - 2026-05-23

### Added
- Automatic retry mechanism with exponential backoff
- withRetry() function for wrapping async operations
- calculateBackoff() utility

## [0.7.0] - 2026-05-23

### Added
- Custom error classes (ReqForgeError, NetworkError, TimeoutError, AuthError, ValidationError)
- Error code constants
- createErrorFromResponse() helper

## [0.6.0] - 2026-05-23

### Added
- Authentication module (login, logout, token management)
- isAuthenticated() helper

## [0.5.0] - 2026-05-23

### Added
- Logger class with log/info/warn/error methods
- Customizable log prefix

## [0.4.0] - 2026-05-23

### Added
- Core request module (sendRequest, get, post, put, delete)
- Automatic URL construction from config

## [0.3.0] - 2026-05-23

### Added
- Utility functions (buildURL, serializeQuery, parseQuery, deepMerge, isPlainObject, delay)

## [0.2.0] - 2026-05-23

### Added
- Configuration module with default config and merge support
- API version constant

## [0.1.0] - 2026-05-23

### Added
- Initial project setup
- Package configuration
- MIT License
