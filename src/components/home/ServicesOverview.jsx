import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { SERVICES } from '../../config/servicesConfig';

const ServicesOverview = () => {
  return (
    <Box
      component="section"
      aria-labelledby="services-heading"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <SectionTitle
          id="services-heading"
          overline="What We Offer"
          title="Our Services"
          subtitle="Comprehensive diesel generator solutions for businesses and individuals across Chennai."
        />
        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                  <Box sx={{ color: '#D84315', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.shortDescription}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2, textAlign: 'left' }}>
                    {service.features.map((feature) => (
                      <Typography component="li" variant="body2" key={feature} sx={{ mb: 0.5 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    component={Link}
                    to={service.path}
                    sx={{
                      backgroundColor: '#D84315',
                      color: '#FFFFFF',
                      '&:hover': { backgroundColor: '#BF360C' },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesOverview;
