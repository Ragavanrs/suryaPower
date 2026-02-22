import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FactoryIcon from '@mui/icons-material/Factory';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';

const industries = [
  { icon: <LocalHospitalIcon sx={{ fontSize: 48 }} aria-hidden="true" />, name: 'Hospitals' },
  { icon: <ApartmentIcon sx={{ fontSize: 48 }} aria-hidden="true" />,      name: 'Apartments' },
  { icon: <FactoryIcon sx={{ fontSize: 48 }} aria-hidden="true" />,         name: 'Factories' },
  { icon: <EventIcon sx={{ fontSize: 48 }} aria-hidden="true" />,           name: 'Events' },
  { icon: <BusinessIcon sx={{ fontSize: 48 }} aria-hidden="true" />,        name: 'Commercial Buildings' },
  { icon: <ComputerIcon sx={{ fontSize: 48 }} aria-hidden="true" />,        name: 'IT Offices' },
];

const IndustryGrid = () => {
  return (
    <Box
      component="section"
      aria-labelledby="industries-heading"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="industries-heading"
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Industries We Serve
        </Typography>
        <Grid container spacing={3}>
          {industries.map((industry) => (
            <Grid item xs={6} sm={4} md={2} key={industry.name}>
              {/* Purely informational card — not interactive */}
              <Card
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ py: 3 }}>
                  <Box
                    sx={{
                      color: '#0EA5E9',
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {industry.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    {industry.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustryGrid;
