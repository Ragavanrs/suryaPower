import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Divider, List, ListItem, ListItemIcon, ListItemText, Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SEO from '../../components/common/SEO';
import EnquiryForm from '../../components/common/EnquiryForm';
import { SITE_CONFIG } from '../../config/siteConfig';
import useAOS from '../../hooks/useAOS';

const amcIncludes = [
  'Scheduled preventive maintenance visits',
  'Oil & filter change',
  'Battery check & replacement advisory',
  'Cooling system flush & check',
  'Fuel system inspection',
  'Load bank testing',
  'Emergency breakdown support',
  'Detailed service report after every visit',
];

const amcPlans = [
  {
    name: 'Basic',
    visits: '2 visits / year',
    features: ['Preventive maintenance', 'Minor repairs included', 'Email support'],
    color: '#E3F2FD',
    borderColor: '#1565C0',
  },
  {
    name: 'Standard',
    visits: '4 visits / year',
    features: ['All Basic features', 'Priority breakdown response (24 hrs)', 'Phone support', 'Oil & filter included'],
    color: '#FFF3E0',
    borderColor: '#D84315',
  },
  {
    name: 'Premium',
    visits: '6 visits / year',
    features: ['All Standard features', 'Same-day emergency response', 'Dedicated service engineer', 'All consumables included'],
    color: '#E8F5E9',
    borderColor: '#2E7D32',
  },
];

const brands = ['Kirloskar', 'Mahindra', 'Ashok Leyland', 'Cummins', 'Perkins', 'Caterpillar', 'Greaves', 'Jakson'];

const handleWhatsApp = () => {
  const msg = encodeURIComponent('Hi Surya Power, I am interested in a Generator AMC / Service contract. Please share details.');
  window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
};

const GeneratorAmcServiceChennai = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Generator AMC & Service in Chennai — All Brands Covered"
        description="Generator AMC and servicing in Chennai for all brands — Kirloskar, Cummins, Mahindra, Ashok Leyland. Annual Maintenance Contracts with fast response. Surya Power."
        canonical={`${SITE_CONFIG.url}/generator-amc-service-chennai`}
        keywords="generator AMC chennai, generator service chennai, diesel generator maintenance chennai, generator annual maintenance contract, DG set AMC"
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
            Generator AMC & Service in Chennai — All Brands Covered
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#FF6E40', fontWeight: 500 }}>
            Annual Maintenance Contracts · Breakdown Service · Same-Day Response
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={{ backgroundColor: '#25D366', py: 1.5, px: 4, fontWeight: 700, '&:hover': { backgroundColor: '#20BA5A' } }}
            >
              WhatsApp Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              href={`tel:${SITE_CONFIG.phone}`}
              sx={{ borderColor: '#FFFFFF', color: '#FFFFFF', py: 1.5, px: 4, fontWeight: 700, '&:hover': { borderColor: '#FF6E40', color: '#FF6E40' } }}
            >
              Call Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* What AMC Includes */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            What Our AMC Includes
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 4 }} />
          <Grid container spacing={2}>
            {amcIncludes.map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: '#D84315', flexShrink: 0 }} />
                  <Typography variant="body1">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* AMC Pricing Tiers */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            AMC Plans
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 4 }} />
          <Grid container spacing={4}>
            {amcPlans.map((plan) => (
              <Grid item xs={12} md={4} key={plan.name}>
                <Card sx={{ height: '100%', borderTop: `4px solid ${plan.borderColor}`, backgroundColor: plan.color }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: plan.borderColor, mb: 0.5 }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>{plan.visits}</Typography>
                    <List dense>
                      {plan.features.map((f) => (
                        <ListItem key={f} disableGutters>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleIcon sx={{ color: plan.borderColor, fontSize: 18 }} />
                          </ListItemIcon>
                          <ListItemText primary={f} primaryTypographyProps={{ variant: 'body2' }} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleWhatsApp}
                      sx={{ mt: 2, backgroundColor: plan.borderColor, '&:hover': { filter: 'brightness(0.9)' } }}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            * Pricing depends on KVA rating and number of generators. Contact us for a custom quote.
          </Typography>
        </Container>
      </Box>

      {/* Brands Serviced */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Brands We Service
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Grid container spacing={2}>
            {brands.map((brand) => (
              <Grid item xs={6} sm={4} md={3} key={brand}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#D84315', fontSize: 18 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{brand}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enquiry Form */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="md">
          <EnquiryForm heading="Get an AMC Quote for Your Generator" />
        </Container>
      </Box>
    </Box>
  );
};

export default GeneratorAmcServiceChennai;
