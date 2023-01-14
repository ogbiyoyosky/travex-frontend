import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError, toastSuccess } from 'components/Toast';

/**
 * Endpoint to approveListing
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export default function useApproveListing(id) {
  const queryClient = useQueryClient();
  const approveListingRequest = (payload) => api.patch(e.APPROVE_LOCATION(id), payload);

  const { mutate, ...mutationState } = useMutation(approveListingRequest);

  const approveListing = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        toastSuccess(data.message);
        queryClient.invalidateQueries(['listings', id]);
        queryClient.invalidateQueries(['listings', '']);

        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { approveListing, approveListingState: mutationState };
}
