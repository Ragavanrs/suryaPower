import React from 'react';
import { Box, Typography } from '@mui/material';
import './Loading.css';

const Loading = () => {
  return (
    <Box className="loading-container">
      <div className="icon-container">
        <img src="/sunny.png" alt="Loading..." className="sun-loader" />
        <Typography variant="h3" className="fade-in-text" sx={{ mt: 4 }}>
          SURYA POWER
        </Typography>
        <Typography variant="h6" className="fade-in-subtitle" sx={{ mt: 2, color: '#FFC107' }}>
          Power Backup Solutions
        </Typography>
      </div>
    </Box>
  );
};

export default Loading;
