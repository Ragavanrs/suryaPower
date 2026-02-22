import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';

const ServiceProcess = ({ steps = [] }) => {
  return (
    <Box
      component="section"
      aria-labelledby="process-heading"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <SectionTitle id="process-heading" title="How It Works" />
        <Grid container spacing={3} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={step}>
              {/* aria-label gives screen readers "Step 1 of 5: Contact Us" */}
              <Card
                sx={{ textAlign: 'center', height: '100%' }}
                aria-label={`Step ${index + 1} of ${steps.length}: ${step}`}
              >
                <CardContent sx={{ py: 4 }}>
                  {/* Visual step number — hidden from AT (context is in Card's aria-label) */}
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: '#D84315',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontWeight: 700,
                      fontSize: '1.2rem',
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {step}
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

ServiceProcess.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceProcess;
