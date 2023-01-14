import { instance as axios } from 'config/axiosConfig';
import { handleResponse, handleError } from './response';

/** @param {string} resource */
const get = resource => {
  return axios.get(resource).then(handleResponse).catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
/** @param {object} options */
const post = (resource, model, options) => {
  return axios.post(resource, model, options).then(handleResponse).catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const put = (resource, model) => {
  return axios.put(resource, model).then(handleResponse).catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const patch = (resource, model) => {
  return axios.patch(resource, model).then(handleResponse).catch(handleError);
};

/** @param {string} resource */
/** @param {string} id */
const remove = (resource, id) => {
  return axios.delete(resource, id).then(handleResponse).catch(handleError);
};

const exportedObject = {
  get,
  post,
  put,
  patch,
  remove
};

export default exportedObject;
