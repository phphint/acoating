import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Services';
import Layout from '../../components/Layout'; // Reusable layout component
import ServicesOverview from '../../components/sections/Services/ServicesOverview'; // Overview of services offered
import CTASection from '../../components/sections/Services/CTASection'; // Call-to-action section
import Testimonials from '../../components/sections/Services/Testimonials'; // Customer testimonials

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Acoating Services: Elevate Your Firearm Experience</title>
        <meta name="description" content="Discover top-tier firearm customization with Acoating. Specializing in Cerakote coatings, laser engraving, and comprehensive gunsmithing services, we bring your vision to life with precision and passion. From tactical upgrades to custom designs, elevate your firearm experience with our expert team." />
  <meta name="keywords" content="custom firearm services, Cerakote coatings, precision laser engraving, professional gunsmithing, firearm customization, tactical upgrades, custom gun designs, firearm enhancements, gun coating services, gun engraving services" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Acoating: Custom Firearm Cerakote Coating, Laser Engraving & Gunsmithing Services" />
  <meta property="og:description" content="Elevate your firearm with Acoating's premier customization services. Offering Cerakote coatings, laser engraving, and gunsmithing to enhance your weapon's performance and aesthetics. Explore our craftsmanship and transform your firearm into a masterpiece." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.acoating.com/" />
  <meta property="og:image" content="https://www.acoating.com/images/og-image-coatings-engraving.jpg" />
  <link rel="canonical" href="https://www.acoating.com/services" />
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
