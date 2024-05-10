import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header/Laser';
import Layout from '../../../components/Layout';
import ServicesOverview from '../../../components/sections/Laser/ServicesOverview';
import Testimonials from '../../../components/sections/Laser/Testimonials';

const LaserEngravingPage: React.FC = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Service",
    "serviceType": "Laser Engraving",
    "provider": {
      "@type": "Organization",
      "name": "Acoating",
      "url": "https://www.acoating.com/laser-engraving",
      "logo": "https://www.acoating.com/images/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "USA"
    },
    "description": "Acoating provides expert laser engraving services for firearms, offering precision, custom gun engravings to enhance the aesthetics and personalize your firearms."
  };

  return (
    <Layout>
      <Head>
        <title>Firearm Laser Engraving Services | Precise Custom Gun Engravings - Acoating</title>
        <meta name="description" content="Elevate your firearm with Acoating’s expert laser engraving services. Discover precision engraving for guns that adds personalization and style to your firearms. From intricate designs to functional markings, customize your firearm uniquely." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Precision Firearm Laser Engraving Services" />
        <meta property="og:description" content="Elevate your firearm’s aesthetics with Acoating's laser engraving services. Specializing in detailed engravings, we ensure each piece is a reflection of your personal style and precision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/laser-engraving" />
        <meta property="og:image" content="https://www.acoating.com/nextjs_images/og-image-acoating.png" />
        <link rel="canonical" href="https://www.acoating.com/laser-engraving" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Header />
      <div style={{ backgroundImage: `url('/media/engraving-services-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <ServicesOverview />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default LaserEngravingPage;
