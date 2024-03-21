/**
 * Export File:
 * This file serves as a centralized export point for all Responses
 * used throughout the application. By organizing and exporting classes from
 * different files into categories, it facilitates easier imports elsewhere
 * in the codebase with just one import statement, promoting modularity and
 * maintainability.
 */

// Base Response 
export type { BaseResponse } from '../models/response/base/BaseResponse.ts';

// Error Response 
export type { ErrorResponse } from '../models/response/base/ErrorResponse.ts';

// Login Response
export type { LoginResponse } from '../models/response/login/LoginResponse.ts';
