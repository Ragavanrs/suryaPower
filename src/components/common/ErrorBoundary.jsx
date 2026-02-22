import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

/**
 * Class-based React Error Boundary.
 * Catches unhandled render/lifecycle errors in its subtree and
 * displays a user-friendly fallback instead of a blank screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console in development; swap for Sentry/Datadog in production
    console.error('[ErrorBoundary] Uncaught error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F7FA',
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
            <ErrorOutlineIcon sx={{ fontSize: 72, color: '#D84315', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We're sorry — an unexpected error occurred. Our team has been notified.
              Please refresh the page or return to the homepage.
            </Typography>
            <Button
              variant="contained"
              onClick={this.handleReset}
              sx={{ backgroundColor: '#D84315', color: '#FFFFFF', '&:hover': { backgroundColor: '#BF360C' } }}
            >
              Return to Homepage
            </Button>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
