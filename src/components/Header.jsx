import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
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

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback((open) => () => {
    setDrawerOpen(open);
  }, []);

  const drawerContent = (
    <Box sx={{ width: 250, backgroundColor: '#111827', height: '100%' }} onClick={toggleDrawer(false)}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(216, 67, 21, 0.2)' }}>
        <Typography variant="h6" sx={{ color: '#FF6E40', fontWeight: 700 }}>
          SURYA POWER
        </Typography>
      </Box>
      <List>
        <ListItem button component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
          <ListItemText primary="Home" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/services" sx={{ '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
          <ListItemText primary="Services" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/gallery" sx={{ '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
          <ListItemText primary="Gallery" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/contact" sx={{ '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
          <ListItemText primary="Contact Us" sx={{ color: '#FFFFFF' }} />
        </ListItem>
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
          <Box display="flex" alignItems="center" gap={1}>
            <Button color="inherit" component={Link} to="/" sx={{ color: '#FFFFFF', '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/services" sx={{ color: '#FFFFFF', '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
              Services
            </Button>
            <Button color="inherit" component={Link} to="/gallery" sx={{ color: '#FFFFFF', '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
              Gallery
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: '#FFFFFF', '&:hover': { backgroundColor: 'rgba(216, 67, 21, 0.1)' } }}>
              Contact Us
            </Button>
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
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
