import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InstallationIcon from '@mui/icons-material/Construction';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleRequestQuote = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Generator Rental',
      description: 'Flexible rental solutions for temporary power backup needs',
      details: [
        'All capacities: 5kVA to 1250kVA',
        'Short-term and long-term rental options',
        'Silent and standard models available',
        'Quick delivery and installation',
        'Fuel management services',
        'Regular maintenance included',
      ],
    },
    {
      icon: <BuildIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Generator Sales',
      description: 'New and refurbished diesel generators from trusted brands',
      details: [
        'Kirloskar generators',
        'Cummins generators',
        'Mahindra generators',
        'Used generators with warranty',
        'Genuine quality assurance',
        'Competitive pricing',
      ],
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Breakdown Service',
      description: '24/7 emergency repair and breakdown support',
      details: [
        'Round-the-clock availability',
        'Fast response time',
        'Expert technicians',
        'On-site repairs',
        'Genuine spare parts',
        'Competitive service rates',
      ],
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance to prevent breakdowns and extend life',
      details: [
        'Scheduled maintenance visits',
        'Oil and filter changes',
        'Battery checks and replacement',
        'Cooling system maintenance',
        'Electrical system inspection',
        'Performance testing',
      ],
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC packages for worry-free operation',
      details: [
        'Regular preventive maintenance',
        'Priority breakdown service',
        'Genuine spare parts',
        'Detailed service reports',
        'Cost-effective packages',
        'Extended equipment life',
      ],
    },
    {
      icon: <InstallationIcon sx={{ fontSize: 80, color: '#FFC107' }} />,
      title: 'Installation Services',
      description: 'Professional installation and commissioning of generators',
      details: [
        'Site survey and planning',
        'Foundation work coordination',
        'Electrical connection setup',
        'ATS panel installation',
        'Testing and commissioning',
        'Training for operators',
      ],
    },
  ];

  return (
    <Box>
      <SEO 
        title="Diesel Generator Services in Chennai - SURYA POWER"
        description="Comprehensive diesel generator services: Rental, Sales, Repair, AMC, Installation. Expert service with genuine parts. Call 9790987190 for quote."
      />
      
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#1F2937',
          py: { xs: 6, md: 8 },
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#D1D5DB' }}
          >
            Comprehensive Diesel Generator Solutions in Chennai
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      component="h2"
                      gutterBottom
                      align="center"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {service.details.map((detail, idx) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={idx}
                          sx={{ mb: 1 }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleRequestQuote}
                      sx={{
                        backgroundColor: '#FFC107',
                        color: '#111827',
                        fontWeight: 700,
                        '&:hover': {
                          backgroundColor: '#FFA000',
                        },
                      }}
                    >
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today for a free consultation and quote"
      />
    </Box>
  );
};

export default ServicesPage;
