import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import CerakoteHeader from '../../../components/Header/Cerakote'; // Adjust path as necessary
import LogoRow from '../../../components/sections/LogosRow'; // Adjust path as necessary
import DurabilitySection from '../../../components/sections/Cerakote/Durability'; // Adjust path as necessary

import TestsSection from '../../../components/sections/Cerakote/Tests'; // Adjust path as necessary
import TestimonialsSection from '../../../components/sections/Cerakote/Testimonials'; // Adjust path as necessary

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Service",
  "name": "Cerakote Coatings",
  "serviceType": "Firearm Coatings",
  "provider": {
    "@type": "Organization",
    "name": "Acoating",
    "url": "https://www.acoating.com",
    "logo": "https://www.acoating.com/nextjs_images/logo.svg"
  },
  "areaServed": {
    "@type": "Global",
    "name": "Worldwide"
  },
  "description": "Explore competitive Cerakote Pricing for durable firearm finishes. Learn about the costs associated with our top-tier Cerakote services and discover value packages.",
  "offers": {
    "@type": "Offer",
    "url": "https://www.acoating.com/pricing",
    "priceCurrency": "USD",
    "price": "Starting at 100"
  }
};


const CerakoteCoatingsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
      <title>Cerakote Pricing - Affordable and Durable Coatings | Acoating.com</title>
  <meta name="description" content="Explore competitive Cerakote Pricing for durable firearm finishes. Learn about the costs associated with our top-tier Cerakote services and discover value packages." />
  <meta name="keywords" content="Cerakote pricing, Cerakote cost, affordable firearm coatings, durable gun paint, firearm customization" />
  <link rel="canonical" href="https://www.acoating.com/pricing" />
  <meta property="og:title" content="Cerakote Pricing - Get the Best Value on Firearm Finishes" />
  <meta property="og:description" content="Check out our competitive Cerakote Pricing for enhancing your firearms with high-quality, durable finishes." />
  <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <CerakoteHeader />
      <LogoRow />
      <DurabilitySection />
      <TestsSection />
      <TestimonialsSection />

    </Layout>
  );
};

export default CerakoteCoatingsPage;
