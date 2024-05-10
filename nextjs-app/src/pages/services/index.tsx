import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Header from '../../components/Header/Services';
import ServicesOverview from '../../components/sections/Services/ServicesOverview';
import Testimonials from '../../components/sections/Services/Testimonials';

const ServicesPage: React.FC = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Acoating",
    "url": "https://www.acoating.com/services",
    "logo": "https://www.acoating.com/nextjs_images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "acoating@gmail.com",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English"]
    },
    "service": [
      {
        "@type": "Service",
        "name": "Cerakote Coatings",
        "description": "Transform your firearm with custom Cerakote coatings, offering the ultimate in color customization and styling."
      },
      {
        "@type": "Service",
        "name": "Laser Engraving",
        "description": "Customize your firearm with precise and detailed laser engravings for a personal touch."
      },
      {
        "@type": "Service",
        "name": "Gunsmith Services",
        "description": "Maintain, repair, or upgrade your firearm for optimal performance with our expert gunsmith services."
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Acoating Services: Elevate Your Firearm Experience</title>
        <meta name="description" content="Discover top-tier firearm customization with Acoating. Specializing in Cerakote coatings, laser engraving, and comprehensive gunsmithing services, we bring your vision to life with precision and passion." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Header />
      <div style={{ backgroundImage: `url('/media/services-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <ServicesOverview />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default ServicesPage;
