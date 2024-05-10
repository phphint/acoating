import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Home1 from '../components/sections/Home1';
import ServicesSection from '../components/sections/ServicesSection';
import Testimonials from '../components/sections/Testimonials';
import LogosRow from '../components/sections/LogosRow';
import GallerySlider from '../components/sections/GallerySlider';

const IndexPage: React.FC = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Acoating",
    "url": "https://www.acoating.com",
    "logo": "https://www.acoating.com/nextjs_images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "acoating@gmail.com",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English"]
    },
    "sameAs": [], // If you later add social media, list them here
    "service": [
      {
        "@type": "Service",
        "name": "Cerakote Coatings",
        "description": "Offering high-quality Cerakote gun coatings for enhanced durability and aesthetics."
      },
      {
        "@type": "Service",
        "name": "Firearm Engraving",
        "description": "Precision firearm engraving services to customize and personalize your firearms."
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Acoating: Premier Cerakote Coatings & Firearm Engraving Services</title>
        <meta name="description" content="Acoating specializes in high-quality Cerakote gun coatings and precision firearm engraving services, offering unparalleled customization options for firearm enthusiasts nationwide." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Header />
      <LogosRow />
      <div className="pb-10" style={{ backgroundImage: `url('/nextjs_images/backgrounds/section-bg-3.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Home1 />
        <ServicesSection />
        <GallerySlider />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default IndexPage;
