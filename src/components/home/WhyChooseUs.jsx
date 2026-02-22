import React, { memo } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    title: 'Fast Response',
    description: 'We respond quickly to breakdown calls and service requests across Chennai.',
  },
  {
    title: 'Expert Technicians',
    description: 'Trained and certified professionals with deep expertise in all generator brands.',
  },
  {
    title: 'Genuine Spare Parts',
    description: 'Only authentic OEM components from authorized dealers to ensure reliability.',
  },
  {
    title: 'All Brands Serviced',
    description: 'Kirloskar, Cummins, Mahindra and all major DG brands covered.',
  },
  {
    title: 'Competitive Rates',
    description: 'Transparent, fair pricing for all services with no hidden charges.',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock emergency support so you are never left in the dark.',
  },
];

const WhyChooseUs = memo(() => {
  return (
    <Box
      component="section"
      aria-labelledby="why-choose-heading"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <SectionTitle
          id="why-choose-heading"
          overline="Why Us"
          title="Why Choose Surya Power?"
          subtitle="15+ years of trust, expertise and reliable service in Chennai."
        />
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={4} key={reason.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#D84315' }}>
                  ✓ {reason.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {reason.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
