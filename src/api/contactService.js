import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

/**
 * Shared axios instance with common configuration.
 * All API calls should use this instance so interceptors,
 * base URL and timeout are applied consistently.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Response interceptor — normalise error shape across the app
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred.';
    return Promise.reject(new Error(message));
  },
);

export const contactService = {
  /**
   * Submit the contact form.
   * @param {{ name: string, phone: string, email?: string, service: string, message?: string }} data
   */
  submitContact: async (data) => {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },
};

export default contactService;
