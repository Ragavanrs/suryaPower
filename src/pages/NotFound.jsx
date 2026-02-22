import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

const NotFound = () => {
  return (
    <Box>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        canonical={`${SITE_CONFIG.url}/404`}
        noIndex
      />
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F7FA',
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center', py: 10 }}>
          <Typography
            variant="h1"
            component="p"
            sx={{ fontSize: '6rem', fontWeight: 800, color: '#D84315', lineHeight: 1 }}
          >
            404
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mt: 2 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{ backgroundColor: '#D84315', color: '#FFFFFF', '&:hover': { backgroundColor: '#BF360C' } }}
            >
              Back to Homepage
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              sx={{ borderColor: '#D84315', color: '#D84315', '&:hover': { backgroundColor: 'rgba(216,67,21,0.04)' } }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFound;
