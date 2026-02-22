import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import { SITE_CONFIG } from '../config/siteConfig';

// Render as <footer> for proper landmark semantics (WCAG 1.3.1)
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#343a40',
  color: '#f8f9fa',
  padding: '40px 20px',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Mobile:{' '}
            <Link href={`tel:${SITE_CONFIG.phone}`} sx={{ color: '#f8f9fa', textDecoration: 'none' }}>
              {SITE_CONFIG.phoneDisplay}
            </Link>
            ,{' '}
            <Link href="tel:+919840841887" sx={{ color: '#f8f9fa', textDecoration: 'none' }}>
              9840841887
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Address: {SITE_CONFIG.address}
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Directions:{' '}
            <Link
              href={SITE_CONFIG.googleMaps}
              sx={{ color: '#f8f9fa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Surya Power on Google Maps (opens in new tab)"
            >
              View on Google Maps
            </Link>
          </Typography>
        </Grid>

        {/* Google Maps Embed */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Our Location
          </Typography>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15537.213732881146!2d80.1740419!3d13.2062565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d72dae68303%3A0x9c66cd80cb8613ef!2sSURYA%20POWER!5e0!3m2!1sen!2sin!4v1729424848020!5m2!1sen!2sin"
            width="100%"
            height="400"
            title="Surya Power location on Google Maps — 1/11, GNT Road, Balaji Nagar, Padiyanallur, Chennai"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </Grid>
      </Grid>

      {/* Footer Bottom Text */}
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" sx={{ color: '#adb5bd' }}>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
