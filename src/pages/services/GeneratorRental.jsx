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
  'No capital investment required',
  'Flexible durations (daily / weekly / monthly)',
  '5kVA to 1250kVA capacity range',
  'Silent & open frame models available',
  'Delivery and installation included',
  '24/7 on-call support',
  'Fuel usage tracking available',
];

const steps = [
  'Contact Us',
  'Site Assessment',
  'Rental Agreement',
  'Delivery & Installation',
  'Ongoing Support',
];

const GeneratorRental = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Generator Rental in Chennai — Surya Power | 5kVA to 1250kVA"
        description="Rent diesel generators in Chennai from Surya Power. All capacities 5kVA–1250kVA, short & long term, with delivery and 24/7 support. Call 9790987190."
        canonical={`${SITE_CONFIG.url}/services/rental`}
      />

      <ServiceHero
        title="Generator Rental in Chennai"
        subtitle="Flexible, affordable diesel generator hire for every power need — events, construction, industrial backup and more."
      />

      <Box
        component="section"
        aria-labelledby="overview-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography id="overview-heading" variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Generator Rental Services
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
            Surya Power offers flexible diesel generator rental solutions across Chennai. Whether you need
            power for a short-term event, a construction project, or a long-term industrial backup, we have
            the right generator for you — with delivery, installation, and round-the-clock support included.
          </Typography>
        </Container>
      </Box>

      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={steps} />
      <ServicePageCTA heading="Ready to Rent a Generator?" />
    </Box>
  );
};

export default GeneratorRental;
