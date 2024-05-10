import React from 'react';
import Head from 'next/head';
 import Layout from '../../../components/Layout';
import ServicesOverview from '../../../components/sections/Gunsmithing/ServicesOverview';  // Overview tailored for gunsmithing
import Testimonials from '../../../components/sections/Gunsmithing/Testimonials';  // Testimonials specific to gunsmithing

const GunsmithingServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Expert Gunsmithing Services - Acoating</title>
        <meta name="description" content="Enhance your firearm performance with Acoating’s professional gunsmithing services. From routine maintenance to complex modifications, our experts deliver precision and reliability in every task." />
        <meta name="keywords" content="gunsmithing services, firearm maintenance, gun repairs, firearm modifications, professional gunsmiths, firearm upgrades, gun service experts" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Professional Firearm Gunsmithing Services" />
        <meta property="og:description" content="Trust Acoating for comprehensive gunsmithing services that ensure your firearm is in top condition. Experience meticulous care and expert modifications tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/gunsmithing" />
        <meta property="og:image" content="https://www.acoating.com/nextjs_images/og-image-acoating.png" />
        <link rel="canonical" href="https://www.acoating.com/gunsmithing" />
      </Head>
       
      <div>
        <ServicesOverview />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default GunsmithingServicesPage;
