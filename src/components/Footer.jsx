import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for footer background
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
    <FooterContainer>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Mobile No: <Link href="tel:+919790987190" sx={{ color: '#f8f9fa', textDecoration: 'none' }}>9790987190</Link>,{' '}
            <Link href="tel:+919840841887" sx={{ color: '#f8f9fa', textDecoration: 'none' }}>9840841887</Link>
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Address: 1/11, GNT Road, Balaji Nagar, Padiyanallur, Chennai - 600052.
          </Typography>
          <Typography variant="body1" sx={{ color: '#ced4da', marginBottom: '8px' }}>
            Direction: <Link href="https://maps.app.goo.gl/QuXkBd1WaL5wmmxH8" sx={{ color: '#f8f9fa', textDecoration: 'none' }}>https://maps.app.goo.gl/QuXkBd1WaL5wmmxH8</Link>
          </Typography>
          
        </Grid>

        {/* Google Maps Embed */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Our Location
          </Typography>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15537.213732881146!2d80.1740419!3d13.2062565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d72dae68303%3A0x9c66cd80cb8613ef!2sSURYA%20POWER!5e0!3m2!1sen!2sin!4v1729424848020!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Text */}
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" sx={{ color: '#adb5bd' }}>
          &copy; 2024 Surya Power. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
