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
  '24/7 emergency response',
  'Expert trained technicians',
  'Genuine OEM spare parts',
  'All brands serviced (Kirloskar / Cummins / Mahindra)',
  'On-site repair',
  'Competitive service rates',
  'Detailed service report provided',
];

const steps = [
  'Emergency Call',
  'Diagnosis & Assessment',
  'Repair Quote',
  'On-site Repair',
  'Testing & Handover',
];

const GeneratorRepair = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Generator Repair Service Chennai — Surya Power | 24/7 Breakdown"
        description="24/7 diesel generator repair and breakdown service in Chennai. Expert technicians, fast response, genuine spare parts. Call Surya Power: 9790987190."
        canonical={`${SITE_CONFIG.url}/services/repair`}
      />

      <ServiceHero
        title="Generator Repair & Breakdown Service in Chennai"
        subtitle="Fast, reliable diesel generator repair by trained technicians — available 24/7 across Chennai."
      />

      <Box
        component="section"
        aria-labelledby="overview-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography id="overview-heading" variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Generator Repair & Breakdown Service
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
            Generator breakdowns can cause costly disruptions. Surya Power's 24/7 repair team responds
            quickly to your location anywhere in Chennai, diagnoses the fault, and restores your power
            with genuine spare parts and expert workmanship. All major brands including Kirloskar,
            Cummins, and Mahindra are covered.
          </Typography>
        </Container>
      </Box>

      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={steps} />
      <ServicePageCTA heading="Need Emergency Generator Repair?" />
    </Box>
  );
};

export default GeneratorRepair;
