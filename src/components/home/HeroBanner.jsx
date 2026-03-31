import React, { memo, useCallback } from 'react';
import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';

const trustBadges = [
  '20+ Years Experience',
  '24/7 Emergency Service',
  '500+ Clients Served',
  'All Chennai Covered',
];

const HeroBanner = memo(() => {
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('Hi! I need a quote for diesel generator service.');
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank');
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(28, 43, 58, 0.75), rgba(28, 43, 58, 0.75)), url(/carousel/image1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
        backgroundColor: '#1C2B3A',
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {/* Trust badges */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {trustBadges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(216, 67, 21, 0.85)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </Box>

            <Typography
              id="hero-heading"
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Chennai's Most Trusted Generator Partner — Sales, Hire &amp; Service
            </Typography>

            <Typography
              component="p"
              sx={{
                mb: 4,
                color: '#FF6E40',
                fontWeight: 600,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              20+ Years | All Brands | All KVA Sizes | Same Day Service
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: '#D84315',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1.5,
                  '&:hover': { backgroundColor: '#BF360C' },
                }}
              >
                Request Service
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href={`tel:${SITE_CONFIG.phone}`}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#D84315',
                  px: 4,
                  py: 1.5,
                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              >
                Call Now: {SITE_CONFIG.phoneDisplay}
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
                  '&:hover': { backgroundColor: '#20BA5A' },
                }}
              >
                WhatsApp Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;
