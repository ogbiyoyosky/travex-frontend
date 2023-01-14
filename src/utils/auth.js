import { AUTH_TOKEN_IDENTIFIER, CURRENT_ROUTE } from 'constants/strings';

export const storeAuthToken = (token) => localStorage.setItem(AUTH_TOKEN_IDENTIFIER, token);

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_IDENTIFIER);

export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_IDENTIFIER);

export const storeCurrentRoute = (path) => localStorage.setItem(CURRENT_ROUTE, path);

export const getPreviousRoute = () => localStorage.getItem(CURRENT_ROUTE);

export const removePreviousRoute = () => localStorage.removeItem(CURRENT_ROUTE);
