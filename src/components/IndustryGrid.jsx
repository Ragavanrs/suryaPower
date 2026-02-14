import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FactoryIcon from '@mui/icons-material/Factory';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';

const IndustryGrid = () => {
  const industries = [
    { icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />, name: 'Hospitals' },
    { icon: <ApartmentIcon sx={{ fontSize: 48 }} />, name: 'Apartments' },
    { icon: <FactoryIcon sx={{ fontSize: 48 }} />, name: 'Factories' },
    { icon: <EventIcon sx={{ fontSize: 48 }} />, name: 'Events' },
    { icon: <BusinessIcon sx={{ fontSize: 48 }} />, name: 'Commercial Buildings' },
    { icon: <ComputerIcon sx={{ fontSize: 48 }} />, name: 'IT Offices' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Industries We Serve
        </Typography>
        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
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
