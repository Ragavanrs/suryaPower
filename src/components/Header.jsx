import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { SITE_CONFIG } from '../config/siteConfig';

const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  color: '#FF6E40',
  letterSpacing: '2px',
  marginLeft: theme.spacing(1),
  textTransform: 'uppercase',
}));

const NAV_LINKS = [
  { label: 'Home',       to: '/'        },
  { label: 'Services',   to: '/services' },
  { label: 'Gallery',    to: '/gallery'  },
  { label: 'Contact Us', to: '/contact'  },
];

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = useCallback((open) => () => {
    setDrawerOpen(open);
  }, []);

  /** Returns true when the nav link matches the current route */
  const isCurrent = useCallback((to) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  }, [pathname]);

  const drawerContent = (
    <Box
      component="nav"
      aria-label="Mobile navigation"
      sx={{ width: 250, backgroundColor: '#111827', height: '100%' }}
      onClick={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(216, 67, 21, 0.2)' }}>
        <Typography variant="h6" sx={{ color: '#FF6E40', fontWeight: 700 }}>
          SURYA POWER
        </Typography>
      </Box>
      <List>
        {NAV_LINKS.map(({ label, to }) => (
          <ListItem
            button
            key={to}
            component={Link}
            to={to}
            aria-current={isCurrent(to) ? 'page' : undefined}
            sx={{ '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}
          >
            <ListItemText primary={label} primaryTypographyProps={{ style: { color: '#FFFFFF' } }} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<PhoneIcon />}
          href={`tel:${SITE_CONFIG.phone}`}
          sx={{
            backgroundColor: '#D84315',
            color: '#FFFFFF',
            fontWeight: 700,
            '&:hover': { backgroundColor: '#BF360C' },
          }}
        >
          Call Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#111827', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src="/spLogo.jpg" alt="Surya Power Logo" style={{ height: 40 }} />
          <CompanyName variant={isMobile ? 'h6' : 'h5'}>Surya Power</CompanyName>
        </Box>

        {!isMobile ? (
          /* Desktop navigation */
          <Box
            component="nav"
            aria-label="Main navigation"
            display="flex"
            alignItems="center"
            gap={1}
          >
            {NAV_LINKS.map(({ label, to }) => (
              <Button
                key={to}
                color="inherit"
                component={Link}
                to={to}
                aria-current={isCurrent(to) ? 'page' : undefined}
                sx={{
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' },
                  ...(isCurrent(to) && {
                    backgroundColor: 'rgba(216, 67, 21, 0.15)',
                    borderBottom: '2px solid #FF6E40',
                  }),
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              href={`tel:${SITE_CONFIG.phone}`}
              sx={{
                ml: 2,
                backgroundColor: '#D84315',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#BF360C' },
              }}
            >
              Call Now
            </Button>
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{ id: 'mobile-nav-drawer' }}
            >
              {drawerContent}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
