import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactForm from './ContactForm';
import { SITE_CONFIG } from '../../config/siteConfig';

const ContactFormSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Box
      component="section"
      aria-labelledby="contact-section-heading"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <ContactForm />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  id="contact-section-heading"
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <PhoneIcon sx={{ color: '#D84315', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">Phone</Typography>
                    <Typography variant="body1">
                      <a href={`tel:${SITE_CONFIG.phone}`} style={{ color: '#D84315', textDecoration: 'none' }}>
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <LocationOnIcon sx={{ color: '#D84315', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">Address</Typography>
                    <Typography variant="body1">{SITE_CONFIG.address}</Typography>
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
                    '&:hover': { backgroundColor: '#20BA5A' },
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFormSection;
