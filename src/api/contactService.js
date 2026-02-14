import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

export const contactService = {
  submitContact: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
};

export default contactService;
