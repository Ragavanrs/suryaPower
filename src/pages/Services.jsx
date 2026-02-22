import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InstallationIcon from '@mui/icons-material/Construction';
import SEO from '../components/common/SEO';
import CTASection from '../components/CTASection';
import { SITE_CONFIG } from '../config/siteConfig';
import useAOS from '../hooks/useAOS';

const ServicesPage = () => {
  useAOS();

  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Generator Rental',
      description: 'Flexible rental solutions for temporary power backup needs',
      path: '/services/rental',
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
      icon: <BuildIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Generator Sales',
      description: 'New and refurbished diesel generators from trusted brands',
      path: '/services/sales',
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
      icon: <SettingsIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Breakdown Service',
      description: '24/7 emergency repair and breakdown support',
      path: '/services/repair',
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
      icon: <AssignmentIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC packages for worry-free operation',
      path: '/services/amc',
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
      icon: <AssignmentIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance to prevent breakdowns and extend life',
      path: '/contact',
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
      icon: <InstallationIcon sx={{ fontSize: 80, color: '#D84315' }} />,
      title: 'Installation Services',
      description: 'Professional installation and commissioning of generators',
      path: '/contact',
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
        title="Diesel Generator Services in Chennai"
        description="Comprehensive diesel generator services: Rental, Sales, Repair, AMC, Installation. Expert service with genuine parts. Call 9790987190 for quote."
        canonical={`${SITE_CONFIG.url}/services`}
      />

      {/* Page Header */}
      <Box
        component="header"
        sx={{
          backgroundColor: '#1C2B3A',
          py: { xs: 6, md: 8 },
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#D1D5DB' }} />}
            aria-label="breadcrumb"
            sx={{ mb: 3 }}
          >
            <MuiLink component={Link} to="/" sx={{ color: '#D1D5DB', textDecoration: 'none', '&:hover': { color: '#FF6E40' } }}>
              Home
            </MuiLink>
            <Typography sx={{ color: '#FF6E40' }}>Services</Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: '#FFFFFF' }}
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
      <Box component="main" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
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
                      {service.details.map((detail) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={detail}
                          sx={{ mb: 1 }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      component={Link}
                      to={service.path}
                      sx={{
                        backgroundColor: '#D84315',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        '&:hover': { backgroundColor: '#BF360C' },
                      }}
                    >
                      Learn More
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
