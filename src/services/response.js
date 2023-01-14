export function handleResponse(response) {
  if (response.results) {
    return Promise.resolve(response.results);
  }

  if (response.data) {
    return Promise.resolve(response.data);
  }

  return Promise.resolve(response);
}

const handleErrorResponse = (response) => {
  const {
    data: { message, errors },
  } = response;

  if (message === "Invalid Data") {
    throw new Error(errors[0].message);
  }

  throw new Error(message);
};

export const handleRequestResponse = async (callback) => {
  try {
    const response = await callback();
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.replace("/login");
      }
      throw handleErrorResponse(error.response);
    }
    throw error;
  }
};

export function handleError(error) {
  if (error.data) {
    return Promise.reject(error.data);
  }

  if (error.response.data) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error);
}
