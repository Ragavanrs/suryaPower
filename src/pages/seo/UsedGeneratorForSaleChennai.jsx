import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Divider, List, ListItem, ListItemIcon, ListItemText, Button, Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SEO from '../../components/common/SEO';
import EnquiryForm from '../../components/common/EnquiryForm';
import { SITE_CONFIG } from '../../config/siteConfig';
import useAOS from '../../hooks/useAOS';

const brands = ['Kirloskar', 'Mahindra', 'Ashok Leyland', 'Cummins'];

const whyBuy2ndHand = [
  '40–60% cheaper than new generators',
  'Same reliable performance when properly serviced',
  'Ideal for small businesses & budget-conscious buyers',
  'Faster delivery — no long lead times',
  'Each unit is tested before sale',
];

const stockCards = [
  { kva: '15 KVA', brand: 'Kirloskar', condition: 'Good', status: 'Available' },
  { kva: '30 KVA', brand: 'Mahindra', condition: 'Excellent', status: 'Available' },
  { kva: '62.5 KVA', brand: 'Ashok Leyland', condition: 'Good', status: 'Available' },
  { kva: '125 KVA', brand: 'Cummins', condition: 'Very Good', status: 'Available' },
  { kva: '250 KVA', brand: 'Kirloskar', condition: 'Good', status: 'Available' },
  { kva: '500 KVA', brand: 'Ashok Leyland', condition: 'Excellent', status: 'Available' },
];

const handleWhatsApp = () => {
  const msg = encodeURIComponent('Hi Surya Power, I am interested in buying a used diesel generator. Please share your current stock.');
  window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
};

const UsedGeneratorForSaleChennai = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Used Diesel Generators for Sale in Chennai — Tested & Certified"
        description="Buy used diesel generators in Chennai — Kirloskar, Mahindra, Ashok Leyland, Cummins. 15 KVA to 500 KVA. Tested, certified & affordable. Surya Power."
        canonical={`${SITE_CONFIG.url}/used-generator-for-sale-chennai`}
        keywords="used generator for sale chennai, second hand generator chennai, kirloskar generator sale chennai, diesel generator sale chennai, 2nd hand generator"
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
            Used Diesel Generators for Sale in Chennai — Tested & Certified
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: '#FF6E40', fontWeight: 500 }}>
            Kirloskar · Mahindra · Ashok Leyland · Cummins | 15 KVA to 500 KVA
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
            {brands.map((b) => (
              <Chip key={b} label={b} sx={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFF', fontWeight: 600 }} />
            ))}
          </Box>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{ backgroundColor: '#25D366', py: 1.5, px: 4, fontWeight: 700, '&:hover': { backgroundColor: '#20BA5A' } }}
          >
            Enquire on WhatsApp
          </Button>
        </Container>
      </Box>

      {/* Current Stock */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Current Stock
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 4 }} />
          <Grid container spacing={3}>
            {stockCards.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={`${item.kva}-${item.brand}`}>
                <Card sx={{ borderTop: '4px solid #D84315' }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#D84315' }}>{item.kva}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{item.brand}</Typography>
                    <Typography variant="body2" color="text.secondary">Condition: {item.condition}</Typography>
                    <Chip label={item.status} size="small" sx={{ mt: 1, backgroundColor: '#E8F5E9', color: '#2E7D32', fontWeight: 600 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            * Stock is updated regularly. Contact us for the latest availability and pricing.
          </Typography>
        </Container>
      </Box>

      {/* Why Buy 2nd Hand */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
                Why Buy a Used Generator?
              </Typography>
              <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
              <List dense>
                {whyBuy2ndHand.map((point) => (
                  <ListItem key={point} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: '#D84315', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Warranty & Quality Assurance
              </Typography>
              <List dense>
                {[
                  'Full load test run before delivery',
                  'Engine & alternator inspection report',
                  'Battery, starter & fuel system checked',
                  '30-day post-sale service warranty',
                  'Spare parts support available',
                ].map((point) => (
                  <ListItem key={point} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: '#25D366', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enquiry Form */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="md">
          <EnquiryForm heading="Enquire About Used Generators for Sale" />
        </Container>
      </Box>
    </Box>
  );
};

export default UsedGeneratorForSaleChennai;
