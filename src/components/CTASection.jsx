import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CTASection = ({ title, subtitle, showButtons = true, backgroundColor = '#1F2937' }) => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919790987190';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919790987190';
    const message = encodeURIComponent('Hi! I need diesel generator service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
};

export default CTASection;
