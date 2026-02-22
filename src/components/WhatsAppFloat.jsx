import React, { useCallback } from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SITE_CONFIG } from '../config/siteConfig';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  }, []);

  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Fab
        color="success"
        aria-label="WhatsApp"
        onClick={handleWhatsAppClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 24 },
          right: 24,
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#20BA5A',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
          boxShadow: '0px 4px 12px rgba(37, 211, 102, 0.4)',
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppFloat;
