import React from 'react';
import {
  Box, TextField, MenuItem, Button, Typography, Grid,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG } from '../../config/siteConfig';

const SERVICE_OPTIONS = [
  { value: 'Sale', label: 'Used Generator Sale' },
  { value: 'Hire', label: 'Generator Hire / Rental' },
  { value: 'AMC', label: 'AMC / Maintenance Contract' },
  { value: 'Service', label: 'Generator Servicing / Repair' },
];

const EnquiryForm = ({ heading = 'Send an Enquiry' }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const lines = [
      `Hi Surya Power, I have an enquiry:`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      data.kva ? `KVA Requirement: ${data.kva}` : null,
      data.message ? `Message: ${data.message}` : null,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: { xs: 3, md: 4 }, backgroundColor: '#FFFFFF', borderRadius: 2, boxShadow: 3 }}
    >
      {heading && (
        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 3 }}>
          {heading}
        </Typography>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Your Name *"
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number *"
            fullWidth
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^[0-9+\s\-()]{7,15}$/, message: 'Enter a valid phone number' },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Service Needed *"
            fullWidth
            defaultValue=""
            {...register('service', { required: 'Please select a service' })}
            error={!!errors.service}
            helperText={errors.service?.message}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="KVA Requirement (optional)"
            fullWidth
            placeholder="e.g. 62.5 KVA"
            {...register('kva')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message (optional)"
            fullWidth
            multiline
            rows={3}
            placeholder="Any additional details..."
            {...register('message')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              py: 1.5,
              fontWeight: 700,
              '&:hover': { backgroundColor: '#20BA5A' },
            }}
          >
            Send Enquiry on WhatsApp
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnquiryForm;
