import React, { memo } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PropTypes from 'prop-types';

const SectionTitle = memo(({ overline, title, subtitle, align = 'center', sx = {} }) => {
  return (
    <Box sx={{ mb: 6, textAlign: align, ...sx }}>
      {overline && (
        <Typography
          variant="overline"
          sx={{ color: '#D84315', fontWeight: 700, letterSpacing: 2, display: 'block', mb: 1 }}
        >
          {overline}
        </Typography>
      )}
      <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Divider
        sx={{
          width: 60,
          borderWidth: 3,
          borderColor: '#D84315',
          mx: align === 'center' ? 'auto' : 0,
          mb: subtitle ? 2 : 0,
        }}
      />
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 680, mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
});

SectionTitle.displayName = 'SectionTitle';

SectionTitle.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  sx: PropTypes.object,
};

export default SectionTitle;
