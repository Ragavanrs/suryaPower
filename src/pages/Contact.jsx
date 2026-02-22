import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SEO from '../components/common/SEO';
import ContactForm from '../components/contact/ContactForm';
import { SITE_CONFIG } from '../config/siteConfig';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Box>
      <SEO
        title="Contact Surya Power — Get a Quote for Diesel Generator Services"
        description="Contact Surya Power for diesel generator rental, sales, repair services in Chennai. 24/7 support. Call 9790987190 or WhatsApp for instant quote."
        canonical={`${SITE_CONFIG.url}/contact`}
      />

      {/* Page Header */}
      <Box
        component="header"
        sx={{
          backgroundColor: '#1C2B3A',
          py: { xs: 6, md: 8 },
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: '#FFFFFF' }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#D1D5DB' }}
          >
            Get in touch with Surya Power for all your generator needs
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box component="main" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
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

              {/* Google Map */}
              <Card>
                <CardContent sx={{ p: 0 }}>
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15537.213732881146!2d80.1740419!3d13.2062565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d72dae68303%3A0x9c66cd80cb8613ef!2sSURYA%20POWER!5e0!3m2!1sen!2sin!4v1729424848020!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    title="Surya Power location on Google Maps"
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
