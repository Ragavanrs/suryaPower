import React from 'react';
import { Button } from '@mui/material';

const CTAButton = ({ children, variant = 'contained', color = 'primary', sx = {}, ...props }) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        px: 4,
        py: 1.5,
        fontSize: '1rem',
        fontWeight: 700,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
