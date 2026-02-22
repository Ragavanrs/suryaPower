import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import SEO from '../../components/common/SEO';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServicePageCTA from '../../components/services/ServicePageCTA';
import { SITE_CONFIG } from '../../config/siteConfig';
import useAOS from '../../hooks/useAOS';

const benefits = [
  'Kirloskar generators',
  'Cummins generators',
  'Mahindra generators',
  'New & certified used options',
  'Warranty provided',
  'Professional installation support',
  'After-sales service available',
];

const steps = [
  'Requirement Discussion',
  'Generator Selection',
  'Site Survey',
  'Delivery & Installation',
  'Commissioning & Training',
];

const GeneratorSales = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Diesel Generator Sales in Chennai — Surya Power | New & Used"
        description="Buy new and used diesel generators in Chennai. Kirloskar, Cummins, Mahindra generators with warranty. Surya Power — call 9790987190."
        canonical={`${SITE_CONFIG.url}/services/sales`}
      />

      <ServiceHero
        title="Diesel Generator Sales in Chennai"
        subtitle="New and quality-checked used generators from trusted brands — with after-sales support and warranty."
      />

      <Box
        component="section"
        aria-labelledby="overview-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography id="overview-heading" variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Diesel Generator Sales
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
            Surya Power is a trusted source for new and quality-certified used diesel generators in
            Chennai. We stock generators from India's leading brands — Kirloskar, Cummins and Mahindra
            — across a wide range of capacities. Every generator comes with warranty coverage and is
            backed by our professional installation and after-sales service team.
          </Typography>
        </Container>
      </Box>

      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={steps} />
      <ServicePageCTA heading="Looking to Buy a Generator?" />
    </Box>
  );
};

export default GeneratorSales;
