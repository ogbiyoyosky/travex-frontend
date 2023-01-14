import api from 'services/api';
import e from 'constants/endpoints';
import { useQuery } from '@tanstack/react-query';

/**
 * Endpoint to get Listings
 *
 * @returns {Promise<{data: Listings }>}
 */
const fetchListings = async (id, query, role) => {
  const endpoint =
    role === 'master_admin' ? e.MASTER_LOCATIONS : `${e.LOCATION(id)}?search=${query}`;

  const { data } = await api.get(endpoint);
  return data;
};

export const useListings = (id = '', query = '', role, options = {}) =>
  useQuery(['listings', id, query, role], () => fetchListings(id, query, role), options);

/**
 * Endpoint to get User Listings
 *
 * @returns {Promise<{data: Listings }>}
 */
const fetchUserListings = async () => {
  const { data } = await api.get(e.MY_LOCATION);
  return data;
};

export const useUserListings = (options = {}) =>
  useQuery(['my-listings'], fetchUserListings, options);
