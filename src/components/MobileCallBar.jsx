import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MobileCallBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleCallClick = () => {
    window.location.href = 'tel:+919790987190';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919790987190';
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isMobile) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1F2937',
        zIndex: 999,
        display: 'flex',
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Button
        fullWidth
        onClick={handleCallClick}
        startIcon={<PhoneIcon />}
        sx={{
          py: 2,
          borderRadius: 0,
          backgroundColor: '#FFC107',
          color: '#111827',
          fontWeight: 700,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#FFA000',
          },
        }}
      >
        Call Now
      </Button>
      <Button
        fullWidth
        onClick={handleWhatsAppClick}
        startIcon={<WhatsAppIcon />}
        sx={{
          py: 2,
          borderRadius: 0,
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#20BA5A',
          },
        }}
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default MobileCallBar;
