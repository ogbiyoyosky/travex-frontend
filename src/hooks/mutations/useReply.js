import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError, toastSuccess } from 'components/Toast';

/**
 * Endpoint to add reply
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export const useAddReply = (locationId) => {
  const queryClient = useQueryClient();
  const request = (payload) => api.post(e.ADD_REPLY(locationId), payload);

  const { mutate, ...mutationState } = useMutation(request);

  const addReply = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        toastSuccess(data.message);
        queryClient.invalidateQueries(['listings', locationId]);
        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { addReply, addReplyState: mutationState };
};

/**
 * Endpoint to approve reply
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export const useApproveReply = (locationId) => {
  const queryClient = useQueryClient();
  const request = (payload) => api.patch(e.APPROVE_REPLY(locationId), payload);

  const { mutate, ...mutationState } = useMutation(request);

  const approveReply = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        toastSuccess(data.message);
        queryClient.invalidateQueries(['listings', locationId]);
        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { approveReply, approveReplyState: mutationState };
};
