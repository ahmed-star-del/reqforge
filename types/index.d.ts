declare module 'reqforge' {
  // Config
  export const config: {
    getBaseURL(): string;
    API_VERSION: string;
    defaultConfig: RequestConfig;
    mergeConfig(customConfig?: Partial<RequestConfig>): RequestConfig;
  };

  // Request
  export const request: {
    sendRequest(endpoint: string, data?: any, options?: RequestOptions): Promise<Response>;
    get(endpoint: string, options?: RequestOptions): Promise<Response>;
    post(endpoint: string, data?: any, options?: RequestOptions): Promise<Response>;
    put(endpoint: string, data?: any, options?: RequestOptions): Promise<Response>;
    del(endpoint: string, options?: RequestOptions): Promise<Response>;
  };

  // Logger
  export class Logger {
    constructor(prefix?: string);
    log(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
  }

  // Auth
  export const auth: {
    login(username: string, password: string): Promise<any>;
    logout(): Promise<void>;
    getToken(): string | null;
    setToken(token: string): void;
    isAuthenticated(): boolean;
  };

  // Errors
  export const errors: {
    ReqForgeError: typeof ReqForgeError;
    NetworkError: typeof NetworkError;
    TimeoutError: typeof TimeoutError;
    AuthError: typeof AuthError;
    ValidationError: typeof ValidationError;
    ErrorCodes: ErrorCodes;
    createErrorFromResponse(response: Response): ReqForgeError;
  };

  // Retry
  export const retry: {
    withRetry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
    calculateBackoff(attempt: number, baseDelay?: number, maxDelay?: number): number;
  };

  // Interceptor
  export const interceptor: {
    createRequestInterceptor(): InterceptorManager;
    createResponseInterceptor(): InterceptorManager;
  };

  // Cache
  export const cache: {
    MemoryCache: typeof MemoryCache;
    createCacheKey(url: string, params?: Record<string, any>): string;
  };

  // Types
  interface RequestConfig {
    baseURL: string;
    timeout: number;
    headers: Record<string, string>;
  }

  interface RequestOptions {
    method?: string;
    headers?: Record<string, string>;
    timeout?: number;
  }

  interface RetryOptions {
    maxRetries?: number;
    delay?: number;
    backoff?: number;
    shouldRetry?: (error: Error) => boolean;
  }

  class ReqForgeError extends Error {
    code: string;
  }

  class NetworkError extends ReqForgeError {}
  class TimeoutError extends ReqForgeError {}
  class AuthError extends ReqForgeError {}
  class ValidationError extends ReqForgeError {}

  interface ErrorCodes {
    NETWORK_ERROR: string;
    TIMEOUT_ERROR: string;
    AUTH_ERROR: string;
    VALIDATION_ERROR: string;
    UNKNOWN_ERROR: string;
  }

  class InterceptorManager {
    use(fulfilled: (data: any) => any, rejected?: (error: Error) => any): number;
    eject(id: number): void;
    clear(): void;
  }

  class MemoryCache {
    constructor(options?: { defaultTTL?: number });
    get(key: string): any | null;
    set(key: string, value: any, ttl?: number): void;
    has(key: string): boolean;
    delete(key: string): void;
    clear(): void;
    size(): number;
  }
}
