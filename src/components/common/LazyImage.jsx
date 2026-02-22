import React from 'react';
import { Box } from '@mui/material';

const LazyImage = ({ src, alt, width, height, sx = {}, ...props }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      sx={{ display: 'block', maxWidth: '100%', height: 'auto', ...sx }}
      {...props}
    />
  );
};

export default LazyImage;
