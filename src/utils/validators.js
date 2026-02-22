/**
 * Reusable react-hook-form validation rules.
 * Centralising them here ensures consistency across all forms
 * and makes future changes (e.g. regex updates) a single-line fix.
 */

export const VALIDATION = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
    maxLength: { value: 100, message: 'Name must be 100 characters or less' },
  },

  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: 'Enter a valid Indian mobile number (10 digits, starting with 6–9)',
    },
  },

  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Enter a valid email address',
    },
  },

  service: {
    required: 'Please select a service',
  },

  message: {
    maxLength: { value: 500, message: 'Message must be 500 characters or less' },
  },
};
