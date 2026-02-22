import React, { memo } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SectionTitle from '../common/SectionTitle';

const ServiceBenefits = memo(({ benefits = [] }) => {
  return (
    <Box
      component="section"
      aria-labelledby="benefits-heading"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <SectionTitle id="benefits-heading" title="Key Benefits" />
        <Grid container spacing={3}>
          {benefits.map((benefit) => (
            <Grid item xs={12} sm={6} md={4} key={benefit}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ color: '#D84315', mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body1">{benefit}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

ServiceBenefits.displayName = 'ServiceBenefits';

ServiceBenefits.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceBenefits;
