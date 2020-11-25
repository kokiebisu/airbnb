import axios from 'axios';

export const useFetch = ({ url, method, body, onSuccess, onFail }) => {
  const doFetch = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      onFail();
    }
  };
  if (onSuccess) {
    onSuccess();
  }
  return doFetch;
};