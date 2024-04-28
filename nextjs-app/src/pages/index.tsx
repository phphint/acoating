import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout'; // Assuming Layout is reusable
import Home1 from '../components/sections/Home1'; // Adjust the import path to the actual location of Home1.tsx
import ServicesSection from '../components/sections/ServicesSection'; // Adjust the path as necessary
import Testimonials from '../components/sections/Testimonials'; // Adjust the import path as needed
import LogosRow from '../components/sections/LogosRow'; // Adjust the import path based on your file structure
import GallerySlider from '../components/sections/GallerySlider'; // Adjust the import path as needed



 

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Acoating: Premier Cerakote Coatings & Firearm Engraving Services</title>
        <meta name="description" content="Acoating specializes in high-quality Cerakote gun coatings and precision firearm engraving services, offering unparalleled customization options for firearm enthusiasts nationwide." />
        <meta name="keywords" content="Cerakote coatings, firearm engraving, gun customization, tactical firearm upgrades, Cerakote finishing services, personalized gun engraving, custom gun designs, firearm modifications, custom firearm services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Premier Cerakote Coatings & Firearm Engraving Services" />
        <meta property="og:description" content="Elevate your firearms with premium Cerakote coatings and custom engraving services by Acoating. Explore top-tier customization options for enthusiasts across the nation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-coatings-engraving.jpg" />
        <link rel="canonical" href="https://www.acoating.com/" />
      </Head>
      <Header />
      <LogosRow/>
      <div className="pb-10" style={{ backgroundImage: `url('/nextjs_images/backgrounds/section-bg-3.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Home1 />      
        <ServicesSection/>
        <GallerySlider/>{/* Include Home1 component right after Header */}

        <Testimonials/>
      </div>
    </Layout>
  );
};

export default IndexPage;
