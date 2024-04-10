/**
 * An array of routes that are publicly accessible
 * Do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * Redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "auth/error"];

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
