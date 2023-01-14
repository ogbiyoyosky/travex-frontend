import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError, toastSuccess } from 'components/Toast';

/**
 * Endpoint to add review
 *
 * @param {string} id - id
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export const useAddReview = (id) => {
  const queryClient = useQueryClient();
  const request = (payload) => api.post(e.ADD_REVIEW(id), payload);

  const { mutate, ...mutationState } = useMutation(request);

  const addReview = (payload, onSuccess = () => {}) => {
    if (payload.rating <= 0) {
      toastError('You must add a rating');
    } else {
      mutate(payload, {
        onSuccess: (data) => {
          toastSuccess(data.message);
          queryClient.invalidateQueries(['listings', id]);
          onSuccess(data);
        },
        onError: (error) => {
          toastError(error.message);
        },
      });
    }
  };

  return { addReview, addReviewState: mutationState };
};

/**
 * Endpoint to approve review
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export const useApproveReview = (locationId) => {
  const queryClient = useQueryClient();
  const request = (payload) => api.patch(e.APPROVE_REVIEW(locationId), payload);

  const { mutate, ...mutationState } = useMutation(request);

  const approveReview = (payload, onSuccess = () => {}) => {
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

  return { approveReview, approveReviewState: mutationState };
};
