import React from 'react';
import { Box, Typography } from '@mui/material';
import '../loading/Loading.css';

const Loading = () => {
  // role="status" + aria-live="polite" announces the loading state to screen readers
  return (
    <Box
      className="loading-container"
      role="status"
      aria-live="polite"
      aria-label="Loading Surya Power — please wait"
    >
      <div className="icon-container">
        <img src="/sunny.png" alt="" aria-hidden="true" className="sun-loader" />
        <Typography variant="h3" className="fade-in-text" sx={{ mt: 4 }} aria-hidden="true">
          SURYA POWER
        </Typography>
        <Typography variant="h6" className="fade-in-subtitle" sx={{ mt: 2, color: '#D84315' }} aria-hidden="true">
          Power Backup Solutions
        </Typography>
      </div>
    </Box>
  );
};

export default Loading;
