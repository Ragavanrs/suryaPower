import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import VerifiedIcon from '@mui/icons-material/Verified';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <WorkHistoryIcon sx={{ fontSize: 48 }} />,
      title: '10+ Years Experience',
      description: 'Serving Chennai since 2009',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
      title: '24/7 Service',
      description: 'Round-the-clock support',
    },
    {
      icon: <FlashOnIcon sx={{ fontSize: 48 }} />,
      title: 'Fast Installation',
      description: 'Quick setup and deployment',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
      title: 'Genuine Spare Parts',
      description: 'Only authentic components',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#F5F7FA',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {indicators.map((indicator, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <Box
                    sx={{
                      color: '#FFC107',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {indicator.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {indicator.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {indicator.description}
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

export default TrustIndicators;
