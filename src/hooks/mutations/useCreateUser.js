import { useMutation } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError, toastSuccess } from 'components/Toast';
import { storeAuthToken } from 'utils/auth';
import { useSearchParams } from 'react-router-dom';

/**
 * Endpoint to createUser
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export default function useCreateUser() {
  const [searchParams] = useSearchParams();
  const endpoint = searchParams.get('role') === 'creator' ? e.CREATE_BUSINESS : e.CREATE_USER;

  const createUserRequest = (payload) => api.post(endpoint, payload);

  const { mutate, ...mutationState } = useMutation(createUserRequest);

  const createUser = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        toastSuccess(data.message);
        storeAuthToken(data.data.accessToken);
        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { createUser, createUserState: mutationState };
}
