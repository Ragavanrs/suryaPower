import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features = [] }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            color: '#FFC107',
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mb: 2 }}
        >
          {description}
        </Typography>
        {features.length > 0 && (
          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            {features.map((feature, index) => (
              <Typography
                component="li"
                variant="body2"
                key={index}
                sx={{ mb: 0.5 }}
              >
                {feature}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
      <Box sx={{ p: 3, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleLearnMore}
          sx={{
            backgroundColor: '#FFC107',
            color: '#111827',
            '&:hover': {
              backgroundColor: '#FFA000',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Card>
  );
};

export default ServiceCard;
