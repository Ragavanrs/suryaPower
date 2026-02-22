import React, { useCallback } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SITE_CONFIG } from '../config/siteConfig';

const MobileCallBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
  }, []);

  if (!isMobile) return null;

  return (
    <Box
      component="nav"
      aria-label="Quick contact actions"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1C2B3A',
        zIndex: 999,
        display: 'flex',
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Button
        fullWidth
        component="a"
        href={`tel:${SITE_CONFIG.phone}`}
        startIcon={<PhoneIcon aria-hidden="true" />}
        sx={{
          py: 2,
          borderRadius: 0,
          backgroundColor: '#D84315',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1rem',
          '&:hover': { backgroundColor: '#BF360C' },
        }}
      >
        Call Now
      </Button>
      <Button
        fullWidth
        onClick={handleWhatsAppClick}
        startIcon={<WhatsAppIcon aria-hidden="true" />}
        sx={{
          py: 2,
          borderRadius: 0,
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1rem',
          '&:hover': { backgroundColor: '#20BA5A' },
        }}
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default MobileCallBar;
