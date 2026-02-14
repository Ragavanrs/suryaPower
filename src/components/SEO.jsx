import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'SURYA POWER - Diesel Generator Service in Chennai',
  description = 'Leading diesel generator service provider in Chennai. Generator Rental, Sales, Repair, AMC Maintenance. 24/7 support. Call 9790987190',
  keywords = 'diesel generator service chennai, generator rental chennai, kirloskar generator service chennai, dg service near me',
  canonical = window.location.href,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SURYA POWER',
    image: 'https://suryapower.in/spLogo.jpg',
    '@id': 'https://suryapower.in',
    url: 'https://suryapower.in',
    telephone: '+919790987190',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/11, GNT Road, Balaji Nagar, Padiyanallur',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600052',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.2062565,
      longitude: 80.1740419,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://maps.app.goo.gl/QuXkBd1WaL5wmmxH8',
    ],
    description: 'SURYA POWER provides reliable diesel generator services including rental, sales, repair, AMC maintenance, and installation in Chennai since 2009.',
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diesel Generator Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generator Rental',
            description: 'Flexible diesel generator rental for all capacities',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generator Sales',
            description: 'New and refurbished diesel generators',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generator Repair',
            description: '24/7 breakdown service and repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AMC Maintenance',
            description: 'Annual Maintenance Contracts',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
