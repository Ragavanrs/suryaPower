import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  color: '#FFC107',
  letterSpacing: '2px',
  marginLeft: theme.spacing(1),
  textTransform: 'uppercase',
}));

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen width is less than 600px
  const [drawerOpen, setDrawerOpen] = useState(false); // State to handle drawer open/close

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer content for mobile menu
  const drawerContent = (
    <Box sx={{ width: 250, backgroundColor: '#111827', height: '100%' }} onClick={toggleDrawer(false)}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(255, 193, 7, 0.2)' }}>
        <Typography variant="h6" sx={{ color: '#FFC107', fontWeight: 700 }}>
          SURYA POWER
        </Typography>
      </Box>
      <List>
        <ListItem button component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' } }}>
          <ListItemText primary="Home" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/services" sx={{ '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' } }}>
          <ListItemText primary="Services" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/gallery" sx={{ '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' } }}>
          <ListItemText primary="Gallery" sx={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/contact" sx={{ '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' } }}>
          <ListItemText primary="Contact Us" sx={{ color: '#FFFFFF' }} />
        </ListItem>
      </List>
      <Box sx={{ p: 2, mt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<PhoneIcon />}
          href="tel:+919790987190"
          sx={{
            backgroundColor: '#FFC107',
            color: '#111827',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#FFA000',
            },
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
        {/* Logo and Company Name Section */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src="/spLogo.jpg" alt="Surya Power Logo" style={{ height: 40 }} /> {/* Logo */}
          <CompanyName variant={isMobile ? "h6" : "h5"}>Surya Power</CompanyName> {/* Company Name */}
        </Box>

        {/* Navigation for large screens */}
        {!isMobile ? (
          <Box display="flex" alignItems="center" gap={1}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ 
                color: '#FFFFFF',
                '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/services"
              sx={{ 
                color: '#FFFFFF',
                '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' }
              }}
            >
              Services
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/gallery"
              sx={{ 
                color: '#FFFFFF',
                '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' }
              }}
            >
              Gallery
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact"
              sx={{ 
                color: '#FFFFFF',
                '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' }
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              href="tel:+919790987190"
              sx={{
                ml: 2,
                backgroundColor: '#FFC107',
                color: '#111827',
                '&:hover': {
                  backgroundColor: '#FFA000',
                },
              }}
            >
              Call Now
            </Button>
          </Box>
        ) : (
          // IconButton for menu on mobile screens
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent} {/* Drawer content with navigation links */}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
