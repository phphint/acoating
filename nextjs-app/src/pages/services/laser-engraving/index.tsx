import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header/Laser';
import Layout from '../../../components/Layout'; // Reusable layout component
import ServicesOverview from '../../../components/sections/Laser/ServicesOverview'; // Overview of services offered, customized to laser engraving
import CTASection from '../../../components/sections/Laser/CTASection'; // Call-to-action section, specifically for engraving
import Testimonials from '../../../components/sections/Laser/Testimonials'; // Customer testimonials focused on engraving experiences

const LaserEngravingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Expert Laser Engraving Services - Acoating</title>
        <meta name="description" content="Master the art of firearm personalization with Acoating’s precision laser engraving services. From intricate designs to custom markings, our laser engraving services transform your firearm into a unique masterpiece tailored to your specifications." />
        <meta name="keywords" content="firearm laser engraving, custom gun engraving, precision engraving services, personalized firearm designs, custom firearm markings, laser etching, gun personalization, engraved firearms" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Precision Firearm Laser Engraving Services" />
        <meta property="og:description" content="Elevate your firearm’s aesthetics with Acoating's laser engraving services. Specializing in detailed engravings, we ensure each piece is a reflection of your personal style and precision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/laser-engraving" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-laser-engraving.jpg" />
        <link rel="canonical" href="https://www.acoating.com/laser-engraving" />
      </Head>
      <Header />
      <div style={{ backgroundImage: `url('/media/engraving-services-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <ServicesOverview  />
      
         <Testimonials />
      </div>
    </Layout>
  );
};

export default LaserEngravingPage;
