import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Pricing'; // Adjust if you have a specific Header for Pricing or use the generic one
import Layout from '../../components/Layout'; // Reusable layout component
import PricingTables from '../../components/sections/Pricing/tables'; // Reusable layout component
import PricingFaqs from '../../components/sections/Pricing/PricingFaqs'; // Reusable layout component
import BulkRushPricing from '../../components/sections/Pricing/BulkRushPricing';  // Adjust the path according to your file structure


const PricingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Acoating Pricing: Transparent and Competitive Firearm Service Rates</title>
        <meta name="description" content="Explore Acoating's transparent and competitive pricing for firearm Cerakote coatings, laser engraving, and gunsmithing services. No hidden fees, just clear value. See why our customers trust us for their firearm customization needs." />
        <meta name="keywords" content="firearm service pricing, Cerakote pricing, engraving rates, gunsmithing costs, firearm customization costs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating Pricing: Transparent and Competitive Firearm Service Rates" />
        <meta property="og:description" content="Get competitive pricing for premium firearm customization services including Cerakote coatings, laser engraving, and gunsmithing. Discover the Acoating difference." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/pricing" />
        <meta property="og:image" content="https://www.acoating.com/nextjs_images/og-image-acoating.png" />
        <link rel="canonical" href="https://www.acoating.com/pricing" />
 
      </Head>
      <Header />
<BulkRushPricing/>


      <PricingTables/>
      <PricingFaqs/>
      <div>
  
     
      </div>
   
    </Layout>
  );
};

export default PricingPage;
