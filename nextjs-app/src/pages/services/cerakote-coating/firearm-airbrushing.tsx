import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicesOverview from '../../../components/sections/Airbrushing/ServicesOverview';  // Overview tailored for firearm airbrushing
import Testimonials from '../../../components/sections/Airbrushing/Testimonials';  // Testimonials specific to airbrushing services

const AirbrushingServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Expert Firearm Airbrushing Services - Acoating</title>
        <meta name="description" content="Transform your firearm with Acoating’s professional airbrushing services. From custom designs to detailed finishes, our experts provide quality and creativity in every project." />
        <meta name="keywords" content="firearm airbrushing, custom gun painting, gun airbrush designs, firearm aesthetics, professional airbrush services, gun customizations, firearm paint jobs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Professional Firearm Airbrushing Services" />
        <meta property="og:description" content="Trust Acoating for top-notch airbrushing services that give your firearm a unique and personalized look. Experience artistic craftsmanship and custom designs tailored to your preferences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/airbrushing" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-airbrushing.jpg" />
        <link rel="canonical" href="https://www.acoating.com/airbrushing" />
      </Head>
      
      <div>
        <ServicesOverview />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AirbrushingServicesPage;
