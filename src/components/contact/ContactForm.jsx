import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  CircularProgress,
  FormHelperText,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { SITE_CONFIG } from '../../config/siteConfig';

const SERVICE_OPTIONS = [
  'Generator Rental',
  'Generator Sales',
  'Generator Repair / Breakdown',
  'Annual Maintenance Contract (AMC)',
  'Preventive Maintenance',
  'Generator Installation',
  'Other',
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await axios.post('/api/contact', data);
      setSubmitStatus({ type: 'success', message: '✅ Thank you! We\'ll contact you within 2 hours.' });
      reset();
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `Something went wrong. Please call us directly at ${SITE_CONFIG.phoneDisplay}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Send us a Message
      </Typography>

      {submitStatus && (
        <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
          {submitStatus.message}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Full Name"
        inputProps={{ 'aria-label': 'Full Name' }}
        {...register('name', {
          required: 'Name is required',
          minLength: { value: 2, message: 'Name must be at least 2 characters' },
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Phone Number"
        type="tel"
        inputProps={{ 'aria-label': 'Phone Number' }}
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^[6-9]\d{9}$/,
            message: 'Enter a valid Indian mobile number (10 digits starting with 6–9)',
          },
        })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        placeholder="e.g., 9790987190"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Email Address"
        type="email"
        inputProps={{ 'aria-label': 'Email Address' }}
        {...register('email', {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Enter a valid email address',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        placeholder="Optional"
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }} error={!!errors.service}>
        <InputLabel id="service-label">Service Required</InputLabel>
        <Controller
          name="service"
          control={control}
          defaultValue=""
          rules={{ required: 'Please select a service' }}
          render={({ field }) => (
            <Select labelId="service-label" label="Service Required" {...field}>
              {SERVICE_OPTIONS.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.service && <FormHelperText>{errors.service.message}</FormHelperText>}
      </FormControl>

      <TextField
        fullWidth
        label="Message"
        multiline
        rows={4}
        inputProps={{ 'aria-label': 'Message', maxLength: 500 }}
        {...register('message', {
          maxLength: { value: 500, message: 'Message must be 500 characters or less' },
        })}
        error={!!errors.message}
        helperText={errors.message?.message}
        placeholder="Tell us about your requirements..."
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
        sx={{
          backgroundColor: '#D84315',
          color: '#FFFFFF',
          fontWeight: 700,
          py: 1.5,
          '&:hover': { backgroundColor: '#BF360C' },
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
};

export default ContactForm;
