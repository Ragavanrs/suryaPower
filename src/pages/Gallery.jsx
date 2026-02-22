import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  IconButton,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SEO from '../components/common/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { galleryImages } from '../config/galleryConfig';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: 1000,
      once: true,
      disable: prefersReducedMotion,
    });
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const loadedImages = galleryImages.map((item) => ({
        url: `/gallery/${item.file}`,
        category: item.category,
        label: item.label,
      }));
      setImages(loadedImages);
      setLoading(false);
    } catch (err) {
      console.error('Error loading images:', err);
      setLoading(false);
    }
  };

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

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
        component="header"
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
            aria-label="Filter gallery images by category"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '1rem',
              },
              // #BF360C on white = 5.6:1 contrast ratio — passes WCAG AA (WCAG 1.4.3)
              '& .Mui-selected': {
                color: '#BF360C',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#BF360C',
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
      <Box
        component="section"
        aria-label="Gallery images"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}
      >
        <Container maxWidth="lg">
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
              role="status"
              aria-live="polite"
              aria-label="Loading gallery images"
            >
              <CircularProgress sx={{ color: '#D84315' }} aria-hidden="true" />
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <Grid
                    item
                    xs={12} sm={6} md={4}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index % 9 * 50}
                  >
                    <Card
                      role="button"
                      tabIndex={0}
                      aria-label={`Open: ${image.label}`}
                      onClick={() => handleImageClick(image)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleImageClick(image);
                        }
                      }}
                      sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
                        },
                        '&:focus-visible': {
                          outline: '3px solid #D84315',
                          outlineOffset: '3px',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={image.url}
                        alt={image.label}
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
        aria-labelledby="gallery-modal-title"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        {/* Visually hidden title for screen readers */}
        <DialogTitle id="gallery-modal-title" sx={{ display: 'none' }}>
          {selectedImage?.label ?? 'Gallery image'}
        </DialogTitle>

        <Box position="relative">
          <IconButton
            onClick={handleCloseModal}
            aria-label="Close image preview"
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
            <CloseIcon aria-hidden="true" />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage.url}
              alt={selectedImage.label}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
