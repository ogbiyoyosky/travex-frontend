import axios from 'axios';
import Nprogress from 'nprogress';
import { getAuthToken, removeAuthToken } from 'utils/auth';

// create a new axios instance
export const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config) => {
  const token = getAuthToken();

  // eslint-disable-next-line no-prototype-builtins
  if (token && !config.headers.hasOwnProperty('Authorization')) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.request.use((config) => {
  Nprogress.start();

  return config;
});

instance.interceptors.response.use(
  function (response) {
    Nprogress.done();
    return response;
  },
  function (error) {
    Nprogress.done();
    if (!error.response || !error.response.data || !error.response.data.message) {
      error = {
        response: {
          data: {
            message: 'Unable to complete request',
          },
        },
      };
    } else if (401 === error.response.status) {
      error = {
        response: {
          data: error.response.data,
        },
      };
      removeAuthToken();
    } else if (404 === error.response.status) {
      error = {
        response: {
          data: error.response.data,
        },
      };
    } else if (500 === error.response.status) {
      error = {
        response: {
          data: {
            message: 'Ooops! an error occurred',
          },
        },
      };
    } else {
      return Promise.reject(error);
    }
    throw error;
  }
);
