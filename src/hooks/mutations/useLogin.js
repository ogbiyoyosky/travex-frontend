import { useMutation } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError } from 'components/Toast';
import { storeAuthToken } from 'utils/auth';

/**
 * Endpoint to login
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */
const loginRequest = (payload) => api.post(e.LOGIN, payload);

export default function useLogin() {
  const { mutate, ...mutationState } = useMutation(loginRequest);

  const login = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        storeAuthToken(data.data.accessToken);
        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { login, loginState: mutationState };
}
