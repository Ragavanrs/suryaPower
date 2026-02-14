import { createTheme } from '@mui/material/styles';

// SURYA POWER Design System
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC107', // Generator Yellow
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#111827',
    },
    secondary: {
      main: '#1F2937', // Steel Dark
      light: '#374151',
      dark: '#111827',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#0EA5E9', // Electric Blue
      light: '#38BDF8',
      dark: '#0284C7',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#111827',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      color: '#111827',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      color: '#111827',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#111827',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#111827',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#111827',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#111827',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6B7280',
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.12)',
    '0px 6px 12px rgba(0, 0, 0, 0.15)',
    '0px 8px 16px rgba(0, 0, 0, 0.18)',
    '0px 10px 20px rgba(0, 0, 0, 0.20)',
    '0px 12px 24px rgba(0, 0, 0, 0.22)',
    '0px 14px 28px rgba(0, 0, 0, 0.24)',
    '0px 16px 32px rgba(0, 0, 0, 0.26)',
    '0px 18px 36px rgba(0, 0, 0, 0.28)',
    '0px 20px 40px rgba(0, 0, 0, 0.30)',
    '0px 22px 44px rgba(0, 0, 0, 0.32)',
    '0px 24px 48px rgba(0, 0, 0, 0.34)',
    '0px 26px 52px rgba(0, 0, 0, 0.36)',
    '0px 28px 56px rgba(0, 0, 0, 0.38)',
    '0px 30px 60px rgba(0, 0, 0, 0.40)',
    '0px 32px 64px rgba(0, 0, 0, 0.42)',
    '0px 34px 68px rgba(0, 0, 0, 0.44)',
    '0px 36px 72px rgba(0, 0, 0, 0.46)',
    '0px 38px 76px rgba(0, 0, 0, 0.48)',
    '0px 40px 80px rgba(0, 0, 0, 0.50)',
    '0px 42px 84px rgba(0, 0, 0, 0.52)',
    '0px 44px 88px rgba(0, 0, 0, 0.54)',
    '0px 46px 92px rgba(0, 0, 0, 0.56)',
    '0px 48px 96px rgba(0, 0, 0, 0.58)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          fontWeight: 700,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
          },
        },
        containedPrimary: {
          backgroundColor: '#FFC107',
          color: '#111827',
          '&:hover': {
            backgroundColor: '#FFA000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
