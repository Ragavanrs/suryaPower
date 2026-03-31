import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SEO from '../components/common/SEO';
import HeroBanner from '../components/home/HeroBanner';
import TrustIndicators from '../components/TrustIndicators';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustryGrid from '../components/IndustryGrid';
import ContactFormSection from '../components/contact/ContactFormSection';
import CTASection from '../components/CTASection';
import { SITE_CONFIG } from '../config/siteConfig';
import useAOS from '../hooks/useAOS';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Emergency Support' },
  { value: '50+', label: 'Expert Technicians' },
];

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Factory Owner, Ambattur',
    text: 'Surya Power has been maintaining our 250 KVA Kirloskar generator for 5 years. Their AMC team is prompt and the machines never let us down during production.',
  },
  {
    name: 'Priya Shankar',
    role: 'Event Organiser, T. Nagar',
    text: 'We rented a 62.5 KVA generator for our daughter\'s wedding reception. Delivery was on time, setup was smooth, and the team stayed available throughout the event.',
  },
  {
    name: 'Mohan Das',
    role: 'Construction Contractor, OMR',
    text: 'Bought a used 125 KVA Ashok Leyland from them. The unit was well-tested and came with a service report. Great value for money and honest dealing.',
  },
];

const coverageAreas = [
  'Anna Nagar', 'T. Nagar', 'Ambattur', 'Porur', 'OMR',
  'ECR', 'Tambaram', 'Avadi', 'Poonamallee', 'Perambur',
  'Chromepet', 'Velachery', 'Guindy', 'Adyar', 'Tondiarpet',
  'Thiruvottiyur', 'Sholinganallur', 'Medavakkam',
];

const HomePage = () => {
  useAOS();

  return (
    <Box>
      <SEO
        title="Diesel Generator Services in Chennai | Rental, Sales, Repair & AMC"
        description="Leading diesel generator service provider in Chennai since 2009. Generator Rental, Sales, Repair, AMC Maintenance. 24/7 support. Call 9790987190"
        canonical={SITE_CONFIG.url}
      />

      <HeroBanner />

      <TrustIndicators />

      {/* About Section */}
      <Box
        component="section"
        aria-labelledby="about-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography
            id="about-heading"
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Chennai's Most Trusted Generator Service Company
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Since 2009, Surya Power has been serving Chennai with professional diesel generator
            solutions. With 15+ years of experience and a dedicated team, we are committed to keeping
            your power backup reliable and your business running without interruption.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    component="p"
                    sx={{ fontWeight: 700, color: '#D84315', lineHeight: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ServicesOverview />

      <WhyChooseUs />

      <IndustryGrid />

      {/* Testimonials */}
      <Box
        component="section"
        aria-labelledby="testimonials-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F7FA' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography
            id="testimonials-heading"
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 1 }}
          >
            What Our Customers Say
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mx: 'auto', mb: 5 }} />
          <Grid container spacing={4}>
            {testimonials.map((t) => (
              <Grid item xs={12} md={4} key={t.name} data-aos="fade-up">
                <Card sx={{ height: '100%', p: 1 }}>
                  <CardContent>
                    <FormatQuoteIcon sx={{ color: '#D84315', fontSize: 36, mb: 1 }} aria-hidden="true" />
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
                      "{t.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ backgroundColor: '#D84315' }}>{t.name[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{t.name}</Typography>
                        <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Coverage Areas */}
      <Box
        component="section"
        aria-labelledby="coverage-heading"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography
            id="coverage-heading"
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 1 }}
          >
            We Serve All Areas in Chennai
          </Typography>
          <Divider sx={{ width: 60, borderWidth: 3, borderColor: '#D84315', mx: 'auto', mb: 5 }} />
          <Grid container spacing={2} justifyContent="center">
            {coverageAreas.map((area) => (
              <Grid item xs={6} sm={4} md={3} key={area}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#D84315', fontSize: 18 }} aria-hidden="true" />
                  <Typography variant="body2">{area}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ContactFormSection />

      <CTASection
        title="Need Emergency Generator Service?"
        subtitle="Our team is ready to help you 24/7. Call or WhatsApp now!"
      />
    </Box>
  );
};

export default HomePage;
