import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CircularProgress, Typography, Box, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to dynamically fetch images from the 'public/gallery/' folder
  const fetchImagesFromGallery = async () => {
    try {
      // Generate URLs for images in `public/gallery/` with a known naming pattern
      const imageExtensions = ['jpg', 'jpeg', 'png']; // Supported image formats
      const folderPath = '/gallery/';
      const images = [];

      for (let i = 1; i <= 50; i++) {
        imageExtensions.forEach((ext) => {
          const imagePath = `${folderPath}gal${i}.${ext}`;
          const img = new Image(); // Preload the image
          img.src = imagePath;
          img.onload = () => images.push(imagePath); // Add to the array if it exists
        });
      }
      // Simulate loading delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 500));

      setImages(images);
      setLoading(false);
    } catch (err) {
      console.error('Error loading images:', err);
      setError('Failed to load images. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagesFromGallery();
  }, []);

  // Handle modal open/close
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Gallery
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {images.map((imageUrl, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card onClick={() => handleImageClick(imageUrl)}>
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{ height: 200 }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal to display clicked image */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="lg">
        <Box position="relative">
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 0, right: 0, color: 'white', zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', height: 'auto', maxHeight: '90vh' }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
