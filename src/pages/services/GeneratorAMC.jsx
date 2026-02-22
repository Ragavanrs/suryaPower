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
  'Scheduled preventive maintenance visits',
  'Priority breakdown service',
  'Genuine spare parts',
  'Detailed service reports after each visit',
  'Extends equipment lifespan',
  'Cost-effective compared to ad-hoc repairs',
  'Dedicated service team',
];

const steps = [
  'Initial Assessment',
  'AMC Agreement',
  'Scheduled Maintenance Visits',
  'Breakdown Support',
  'Annual Review',
];

const GeneratorAMC = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Generator AMC in Chennai — Annual Maintenance Contract | Surya Power"
        description="Annual Maintenance Contracts (AMC) for diesel generators in Chennai. Preventive maintenance, priority support, genuine parts. Call Surya Power: 9790987190."
        canonical={`${SITE_CONFIG.url}/services/amc`}
      />

      <ServiceHero
        title="Annual Maintenance Contract (AMC) for Generators"
        subtitle="Protect your generator investment with a comprehensive AMC — scheduled maintenance, priority support and genuine parts."
      />

      <Box
        component="section"
        aria-labelledby="overview-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography id="overview-heading" variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Annual Maintenance Contract (AMC)
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
            An AMC with Surya Power ensures your diesel generator is always ready when you need it.
            Our scheduled preventive maintenance visits keep your equipment in peak condition, while
            priority breakdown support means you are never left waiting. Genuine spare parts and
            detailed service reports give you full transparency and peace of mind.
          </Typography>
        </Container>
      </Box>

      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={steps} />
      <ServicePageCTA heading="Get a Generator AMC Today" />
    </Box>
  );
};

export default GeneratorAMC;
