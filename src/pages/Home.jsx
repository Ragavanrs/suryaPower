import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import TrustIndicators from '../components/TrustIndicators';
import ServiceCard from '../components/ServiceCard';
import IndustryGrid from '../components/IndustryGrid';
import CTASection from '../components/CTASection';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 64 }} />,
      title: 'Generator Rental',
      description: 'Flexible rental options for all capacities (5kVA to 1250kVA)',
      features: ['Short-term & Long-term', 'All capacities available', 'Quick delivery'],
    },
    {
      icon: <BuildIcon sx={{ fontSize: 64 }} />,
      title: 'Generator Sales',
      description: 'New and refurbished generators from top brands',
      features: ['Kirloskar', 'Cummins', 'Mahindra', 'Genuine quality'],
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 64 }} />,
      title: 'Generator Repair',
      description: '24/7 breakdown service and repair',
      features: ['Fast response', 'Expert technicians', 'Genuine spare parts'],
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 64 }} />,
      title: 'AMC Maintenance',
      description: 'Annual Maintenance Contracts for worry-free operation',
      features: ['Preventive maintenance', 'Regular check-ups', 'Priority service'],
    },
  ];

  return (
    <Box>
      <SEO 
        title="SURYA POWER - Diesel Generator Service in Chennai | Rental | Sales | Repair"
        description="Leading diesel generator service provider in Chennai. Generator Rental, Sales, Repair, AMC Maintenance. 24/7 support. 10+ years experience. Call 9790987190"
      />
      
      <HeroBanner />
      
      <TrustIndicators />

      {/* Our Services Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <IndustryGrid />

      {/* Why Choose Surya Power Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Why Choose Surya Power?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ Experienced Team
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  10+ years serving Chennai with professional diesel generator solutions
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ 24/7 Emergency Service
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Round-the-clock support for breakdowns and emergency situations
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ Genuine Spare Parts
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Only authentic components from authorized dealers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ Competitive Pricing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Best rates in Chennai for rental, sales, and services
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ Fast Installation
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quick deployment and setup at your location
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#FFC107' }}>
                  ✓ Licensed & Insured
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Fully certified professionals with comprehensive insurance
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CTASection 
        title="Need Emergency Generator Service?"
        subtitle="Our team is ready to help you 24/7. Call or WhatsApp now!"
      />
    </Box>
  );
};

export default HomePage;
