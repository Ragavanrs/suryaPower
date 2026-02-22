import React, { memo, useCallback } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SITE_CONFIG } from '../config/siteConfig';

const CTASection = memo(({ title, subtitle, showButtons = true, backgroundColor = '#1C2B3A' }) => {
  const handleCallClick = useCallback(() => {
    window.location.href = `tel:${SITE_CONFIG.phone}`;
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              align="center"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 2,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: '#D1D5DB',
                  mb: 4,
                }}
              >
                {subtitle}
              </Typography>
            )}
            {showButtons && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
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
                    '&:hover': {
                      backgroundColor: '#20BA5A',
                    },
                  }}
                >
                  WhatsApp Us
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

CTASection.displayName = 'CTASection';

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showButtons: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default CTASection;
