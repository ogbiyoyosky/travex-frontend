import { useMutation } from '@tanstack/react-query';
import api from 'services/api';
import e from 'constants/endpoints';
import { toastError, toastSuccess } from 'components/Toast';

/**
 * Endpoint to createListing
 *
 * @param {object} body
 *
 * @returns {Promise<{ message: string }>}
 */

export default function useCreateListing(role) {
  const endpoint = role === 'master_admin' ? e.CREATE_LOCATION_BY_MASTER_ADMIN : e.LOCATION('');

  const createListingRequest = (payload) =>
    api.post(endpoint, payload, { headers: { 'Content-Type': 'multipart/form-data' } });

  const { mutate, ...mutationState } = useMutation(createListingRequest);

  const createListing = (payload, onSuccess = () => {}) => {
    mutate(payload, {
      onSuccess: (data) => {
        toastSuccess(data.message);
        onSuccess(data);
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return { createListing, createListingState: mutationState };
}
