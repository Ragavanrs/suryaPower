import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SITE_CONFIG } from '../../config/siteConfig';

const ServiceHero = ({ title, subtitle }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I need help with: ${title}`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#1C2B3A',
        py: { xs: 8, md: 10 },
        color: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            component="p"
            sx={{ color: '#D1D5DB', mb: 4, maxWidth: 700, mx: 'auto' }}
          >
            {subtitle}
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PhoneIcon />}
            href={`tel:${SITE_CONFIG.phone}`}
            sx={{
              backgroundColor: '#D84315',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#BF360C' },
            }}
          >
            Call: {SITE_CONFIG.phoneDisplay}
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsAppClick}
            sx={{
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#20BA5A' },
            }}
          >
            WhatsApp Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceHero;
