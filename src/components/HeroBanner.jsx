import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const HeroBanner = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919790987190';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919790987190';
    const message = encodeURIComponent('Hi! I need a quote for diesel generator service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleGetQuote = () => {
    window.location.href = '/contact';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.7), rgba(31, 41, 55, 0.7)), url(/carousel/image3.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Reliable Power Backup Solutions in Chennai
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#FFC107',
                fontWeight: 600,
              }}
            >
              Generator Rental • Sales • Service • AMC
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                onClick={handleCallClick}
                sx={{
                  backgroundColor: '#FFC107',
                  color: '#111827',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#FFA000',
                  },
                }}
              >
                Call Now
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={handleWhatsAppClick}
                sx={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#20BA5A',
                  },
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<RequestQuoteIcon />}
                onClick={handleGetQuote}
                sx={{
                  borderColor: '#FFC107',
                  color: '#FFC107',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#FFA000',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    borderWidth: 2,
                  },
                }}
              >
                Get Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBanner;
