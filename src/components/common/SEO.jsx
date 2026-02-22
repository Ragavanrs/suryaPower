import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { SITE_CONFIG } from '../../config/siteConfig';

const SEO = ({
  title = 'Diesel Generator Services in Chennai',
  description = 'Leading diesel generator service provider in Chennai. Generator Rental, Sales, Repair, AMC Maintenance. 24/7 support. Call 9790987190',
  keywords = 'diesel generator service chennai, generator rental chennai, kirloskar generator service chennai, dg service near me',
  canonical = SITE_CONFIG.url,
  ogImage = `${SITE_CONFIG.url}/og-image.jpg`,
  noIndex = false,
}) => {
  const fullTitle = `${title} | Surya Power`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/spLogo.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    priceRange: '₹₹',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [SITE_CONFIG.googleMaps],
    description:
      'Surya Power provides reliable diesel generator services including rental, sales, repair, AMC maintenance, and installation in Chennai since 2009.',
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
          itemOffered: { '@type': 'Service', name: 'Generator Rental', description: 'Flexible diesel generator rental for all capacities' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Generator Sales', description: 'New and refurbished diesel generators' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Generator Repair', description: '24/7 breakdown service and repair' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'AMC Maintenance', description: 'Annual Maintenance Contracts' },
        },
      ],
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  noIndex: PropTypes.bool,
};

export default SEO;
