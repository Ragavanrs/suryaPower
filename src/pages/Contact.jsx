import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SEO from '../components/SEO';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post('/api/contact', data);
      setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please call us directly or try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919790987190';
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Box>
      <SEO 
        title="Contact SURYA POWER - Diesel Generator Service Chennai | Get Quote"
        description="Contact SURYA POWER for diesel generator rental, sales, repair services in Chennai. 24/7 support. Call 9790987190 or WhatsApp for instant quote."
      />
      
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#1F2937',
          py: { xs: 6, md: 8 },
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#D1D5DB' }}
          >
            Get in touch with SURYA POWER for all your generator needs
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Send us a Message
                  </Typography>
                  
                  {submitStatus && (
                    <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
                      {submitStatus.message}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      fullWidth
                      label="Name"
                      {...register('name', { required: 'Name is required' })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      label="Phone Number"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number',
                        },
                      })}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      label="Location"
                      {...register('location', { required: 'Location is required' })}
                      error={!!errors.location}
                      helperText={errors.location?.message}
                      placeholder="e.g., Adyar, Chennai"
                      sx={{ mb: 3 }}
                    />

                    <FormControl fullWidth sx={{ mb: 3 }}>
                      <InputLabel>Service Required</InputLabel>
                      <Select
                        label="Service Required"
                        defaultValue=""
                        {...register('service', { required: 'Please select a service' })}
                        error={!!errors.service}
                      >
                        <MenuItem value="Generator Rental">Generator Rental</MenuItem>
                        <MenuItem value="Generator Sales">Generator Sales</MenuItem>
                        <MenuItem value="Generator Repair">Generator Repair</MenuItem>
                        <MenuItem value="AMC Maintenance">AMC Maintenance</MenuItem>
                        <MenuItem value="Installation">Installation</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      {...register('message', { required: 'Message is required' })}
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
                      sx={{
                        backgroundColor: '#FFC107',
                        color: '#111827',
                        fontWeight: 700,
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#FFA000',
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ color: '#FFC107', mr: 2 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone Numbers
                      </Typography>
                      <Typography variant="body1">
                        <a href="tel:+919790987190" style={{ color: '#0EA5E9', textDecoration: 'none' }}>
                          9790987190
                        </a>
                        {' | '}
                        <a href="tel:+919840841887" style={{ color: '#0EA5E9', textDecoration: 'none' }}>
                          9840841887
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#FFC107', mr: 2 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography variant="body1">
                        1/11, GNT Road, Balaji Nagar,<br />
                        Padiyanallur, Chennai - 600052
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ color: '#FFC107', mr: 2 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Business Hours
                      </Typography>
                      <Typography variant="body1">
                        24/7 Service Available
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsAppClick}
                    sx={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: '#20BA5A',
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card>
                <CardContent sx={{ p: 0 }}>
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15537.213732881146!2d80.1740419!3d13.2062565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d72dae68303%3A0x9c66cd80cb8613ef!2sSURYA%20POWER!5e0!3m2!1sen!2sin!4v1729424848020!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0, display: 'block' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
