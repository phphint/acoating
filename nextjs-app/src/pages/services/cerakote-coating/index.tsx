import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import CerakoteHeader from '../../../components/Header/Cerakote'; // Adjust path as necessary
import LogoRow from '../../../components/sections/LogosRow'; // Adjust path as necessary
import DurabilitySection from '../../../components/sections/Cerakote/Durability'; // Adjust path as necessary
import TestsSection from '../../../components/sections/Cerakote/Tests'; // Adjust path as necessary
import TestimonialsSection from '../../../components/sections/Cerakote/Testimonials'; // Adjust path as necessary

const CerakoteCoatingsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Cerakote Coatings - Durable Firearm Finishes | Acoating.com</title>
        <meta name="description" content="Discover the durability and versatility of Cerakote coatings. Learn about our rigorous testing processes and hear from satisfied customers." />
        <meta name="keywords" content="Cerakote coatings, firearm finishes, durable gun paint, firearm customization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.acoating.com/services/cerakote-coatings" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cerakote Coatings - Durable Firearm Finishes | Acoating.com" />
        <meta property="og:description" content="Enhance your firearm with Cerakote coatings for unmatched durability and color customization." />
        <meta property="og:url" content="https://www.acoating.com/services/cerakote-coatings" />
        <meta name="twitter:card" content="summary_large_image" />
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
