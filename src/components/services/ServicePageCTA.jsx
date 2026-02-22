import React, { memo, useCallback } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SITE_CONFIG } from '../../config/siteConfig';

const ServicePageCTA = memo(({ heading }) => {
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  }, []);

  return (
    <Box
      component="section"
      sx={{ backgroundColor: '#D84315', py: { xs: 6, md: 8 }, color: '#FFFFFF', textAlign: 'center' }}
      data-aos="fade-up"
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#FFFFFF', fontWeight: 700 }}>
          {heading}
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
          Call or WhatsApp us now — 24/7 support available.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PhoneIcon />}
            href={`tel:${SITE_CONFIG.phone}`}
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#D84315',
              '&:hover': { backgroundColor: '#f5f5f5' },
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
});

ServicePageCTA.displayName = 'ServicePageCTA';

ServicePageCTA.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ServicePageCTA;
