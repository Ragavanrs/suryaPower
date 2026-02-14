import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SEO from '../components/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const imageExtensions = ['jpg', 'jpeg', 'png'];
      const folderPath = '/gallery/';
      const loadedImages = [];

      for (let i = 1; i <= 50; i++) {
        for (const ext of imageExtensions) {
          const imagePath = `${folderPath}gal${i}.${ext}`;
          try {
            const img = new Image();
            img.src = imagePath;
            await new Promise((resolve, reject) => {
              img.onload = () => {
                loadedImages.push({
                  url: imagePath,
                  category: i % 5 === 0 ? 'rental' : i % 4 === 0 ? 'installation' : i % 3 === 0 ? 'repair' : i % 2 === 0 ? 'panels' : 'events',
                });
                resolve();
              };
              img.onerror = reject;
              setTimeout(reject, 1000);
            });
          } catch (error) {
            continue;
          }
        }
      }

      setImages(loadedImages);
      setLoading(false);
    } catch (err) {
      console.error('Error loading images:', err);
      setLoading(false);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleFilterChange = (event, newValue) => {
    setActiveFilter(newValue);
  };

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <Box>
      <SEO 
        title="Gallery - SURYA POWER Diesel Generator Projects in Chennai"
        description="View our diesel generator installation, rental, and service projects in Chennai. Real work showcasing quality installations and repairs."
      />
      
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#1F2937',
          py: { xs: 6, md: 8 },
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Gallery
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#D1D5DB' }}
          >
            Our work in diesel generator installations and services
          </Typography>
        </Container>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ backgroundColor: '#FFFFFF', borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Tabs
            value={activeFilter}
            onChange={handleFilterChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '1rem',
              },
              '& .Mui-selected': {
                color: '#FFC107',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFC107',
              },
            }}
          >
            <Tab label="All" value="all" />
            <Tab label="Rental" value="rental" />
            <Tab label="Installation" value="installation" />
            <Tab label="Repair" value="repair" />
            <Tab label="Panels" value="panels" />
            <Tab label="Events" value="events" />
          </Tabs>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}>
        <Container maxWidth="lg">
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
              <CircularProgress sx={{ color: '#FFC107' }} />
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={index % 9 * 50}>
                    <Card
                      onClick={() => handleImageClick(image.url)}
                      sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={image.url}
                        alt={`Gallery Image ${index + 1}`}
                        sx={{
                          height: 250,
                          objectFit: 'cover',
                        }}
                        loading="lazy"
                      />
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography align="center" color="text.secondary">
                    No images found in this category
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Image Modal */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box position="relative">
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Selected"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
