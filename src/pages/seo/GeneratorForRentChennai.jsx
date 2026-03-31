import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Divider, List, ListItem, ListItemIcon, ListItemText, Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SEO from '../../components/common/SEO';
import EnquiryForm from '../../components/common/EnquiryForm';
import { SITE_CONFIG } from '../../config/siteConfig';
import useAOS from '../../hooks/useAOS';

const kvaOptions = [
  { range: '15 – 30 KVA', ideal: 'Small shops, offices, homes' },
  { range: '40 – 62.5 KVA', ideal: 'Mid-size businesses, events' },
  { range: '82.5 – 125 KVA', ideal: 'Large events, construction sites' },
  { range: '160 – 250 KVA', ideal: 'Hospitals, factories, malls' },
  { range: '320 – 500 KVA', ideal: 'Industrial plants, data centres' },
];

const useCases = [
  'Weddings & corporate events',
  'Construction sites & infrastructure projects',
  'Hospitals & healthcare facilities',
  'IT parks & data centres',
  'Film & TV shoots',
  'Retail malls & exhibitions',
];

const deliveryAreas = [
  'Anna Nagar', 'T. Nagar', 'Ambattur', 'Porur', 'OMR',
  'ECR', 'Tambaram', 'Avadi', 'Poonamallee', 'Perambur',
  'Chromepet', 'Velachery', 'Guindy', 'Adyar', 'Tondiarpet',
];

const handleWhatsApp = () => {
  const msg = encodeURIComponent('Hi Surya Power, I need a generator for rent in Chennai. Please share details.');
  window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
};

const GeneratorForRentChennai = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Generator for Rent in Chennai — All KVA Sizes Available"
        description="Rent diesel generators in Chennai — 15 KVA to 500 KVA. Ideal for events, construction, hospitals. Delivery across Chennai. Book on WhatsApp. Surya Power."
        canonical={`${SITE_CONFIG.url}/generator-for-rent-chennai`}
        keywords="generator for rent chennai, diesel generator hire chennai, generator rental chennai, generator on rent, DG set hire chennai"
      />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1C2B3A 60%, #D84315 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            Generator for Rent in Chennai — All KVA Sizes Available
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#FF6E40', fontWeight: 500 }}>
            Daily · Weekly · Monthly Rental | Delivery Included | 24/7 Support
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{ backgroundColor: '#25D366', py: 1.5, px: 4, fontWeight: 700, '&:hover': { backgroundColor: '#20BA5A' } }}
          >
            Book on WhatsApp
          </Button>
        </Container>
      </Box>

      {/* KVA Pricing Tiers */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Rental Pricing by KVA Size
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 4 }} />
          <Grid container spacing={3}>
            {kvaOptions.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.range}>
                <Card sx={{ height: '100%', borderTop: '4px solid #D84315' }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#D84315', mb: 1 }}>
                      {item.range}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{item.ideal}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            * Final pricing depends on duration and location. Contact us for a quote.
          </Typography>
        </Container>
      </Box>

      {/* Ideal For */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
                Ideal For
              </Typography>
              <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
              <List dense>
                {useCases.map((uc) => (
                  <ListItem key={uc} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: '#D84315', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={uc} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                How to Book
              </Typography>
              <List dense>
                {['WhatsApp or call us', 'Tell us KVA needed & duration', 'Get a quote within 30 mins', 'We deliver & install at your site', 'On-call support throughout the rental'].map((step, i) => (
                  <ListItem key={step} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#D84315', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>
                        {i + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Delivery Areas */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Delivery Areas in Chennai
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Grid container spacing={2}>
            {deliveryAreas.map((area) => (
              <Grid item xs={6} sm={4} md={3} key={area}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#D84315', fontSize: 18 }} />
                  <Typography variant="body2">{area}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enquiry Form */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="md">
          <EnquiryForm heading="Book a Generator for Rent in Chennai" />
        </Container>
      </Box>
    </Box>
  );
};

export default GeneratorForRentChennai;
