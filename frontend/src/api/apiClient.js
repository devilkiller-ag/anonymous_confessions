import axios from 'axios';
import config from '@/config/config';


const api = axios.create({
  baseURL: config.backend_url,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error.message || 'Unexpected Error';
    return Promise.reject(new Error(message));
  }
);

export const safeRequest = async (fn) => {
  try {
    const response = await fn();
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default api;
