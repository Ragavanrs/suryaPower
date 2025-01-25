import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import './home.css';

// Custom styled component for image display
const ImageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px',
  padding: '10px',
  transition: 'transform 0.5s ease-in-out', // Smooth transition effect on image load
});

const Home = () => {
  const [image, setImage] = useState(null);

  // Fetch a single image from the carousel
  const fetchImage = async () => {
    try {
      // Just pick one image from the list
      const selectedImage = '/carousel/image3.jpeg'; // Replace this with the path of the image you want to display
      setImage(selectedImage);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      {/* Image Display Section */}
      {/* <Box sx={{ position: 'relative', height: '500px', overflow: 'hidden', width:'1500px' }}>
        {image ? (
          
          
        ) : (
          <Typography variant="h6">Loading image...</Typography> // Loading state
        )}
      </Box> */}
      <ImageContainer>
            <Box
              component="img"
              src={image}
              alt="Diesel Generator"
              onError={(e) => e.target.src = '/fallback-image.jpg'} // Fallback in case image fails to load
              sx={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                //boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)', // Soft shadow for image
                transition: 'transform 0.3s ease', // Smooth zoom effect on image hover
                '&:hover': {
                  transform: 'scale(1.05)', // Slight zoom effect on hover
                },
              }}
            />
            </ImageContainer>

      {/* Content Section Below Image */}
      <Box sx={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Content Area */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#343a40' }}>
              Maintaining Your Diesel Generator
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              At Surya Power, we believe that maintaining your diesel generator is key to ensuring its long-lasting performance and reliability.
              Whether you own a 5 kVA or a 1250 kVA generator, proper maintenance can help you avoid costly repairs and extend the life of your equipment.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              At Surya Power, we believe that maintaining your diesel generator is key to ensuring its long-lasting performance and reliability.
              Whether you own a 5 kVA or a 1250 kVA generator, proper maintenance can help you avoid costly repairs and extend the life of your equipment.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              <strong>Follow the Manufacturer’s Schedule:</strong> Always adhere to the maintenance schedule provided by your generator’s manufacturer. 
              Sticking to this schedule ensures trouble-free operation and helps you get the most out of your investment.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              <strong>Routine Check-ups:</strong> Regular check-ups are vital. Simple maintenance checks can help you detect potential problems early, 
              saving time and money on repairs.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              <strong>Professional Servicing:</strong> Unsure about maintenance? Our licensed and insured professionals at Surya Power are here to help. 
              We offer expert generator servicing to ensure your equipment is well taken care of.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              <strong>Filter Replacement:</strong> Change the filters at least once a month to keep your diesel generator running smoothly. Regular filter 
              changes help maintain efficiency and prevent future breakdowns.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              <strong>Oil Management:</strong> Keeping your generator’s oil clean is essential for optimal performance. Regular oil checks and changes are 
              crucial to avoid operational issues in the future.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '16px', color: '#6c757d' }}>
              Contact us for expert maintenance services, sales, and generator hire. At Surya Power, we’ve been serving our customers since 2009, specializing 
              in old diesel generators for all your power needs.
            </Typography>
            {/* More content sections go here... */}
          </Grid>

          {/* Founder Image */}
          <Grid item xs={12} md={4}>
            <Box 
              component="img" 
              src="ragavan.jpg" 
              alt="Founder - Rajendran"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
