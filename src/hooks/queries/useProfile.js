import api from 'services/api';
import e from 'constants/endpoints';
import { useQuery } from '@tanstack/react-query';

/**
 * Endpoint to get Profile
 *
 * @returns {Promise<{data: Profile }>}
 */
const fetchProfile = async () => {
  const { data } = await api.get(e.PROFILE);
  return data;
};
export const useProfile = (options = {}) => useQuery(['profile'], fetchProfile, options);

/**
 * Endpoint to get Users
 *
 * @returns {Promise<{data: Users }>}
 */
const fetchUsers = async () => {
  const { data } = await api.get(e.USERS);
  return data;
};
export const useUsers = (options = {}) => useQuery(['users'], fetchUsers, options);
