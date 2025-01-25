import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Loading.css'; // Create this CSS file for your styles

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Box className={`loading-container ${loading ? 'fade-in' : 'fade-out'}`}>
      <video autoPlay loop muted className="background-video">
        <source src="/intro.mp4" type="video/mp4" /> {/* Adjust the path */}
        Your browser does not support the video tag.
      </video>
      <div className="icon-container">
        {loading && (
          <img src="/sunny.png" alt="Loading..." className="sun-loader" />
        )}
      </div>
      {!loading && (
        <Typography variant="h2" className="fade-in-text">
        Surya Power
      </Typography>
      )}
    </Box>
  );
};

export default Loading;
