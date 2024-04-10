import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header/Pricing/ar-variant';
import Layout from '../../../components/Layout';
import PricingFaqs from '../../../components/sections/Pricing/PricingFaqs';
import ARVariantPricing from '../../../components/sections/Pricing/ar-variant'; // Ensure this path is correct

const PricingPage: React.FC = () => {
  return (
    <Layout>
    <Head>
  <title>Cerakote Application, Laser Engraving, and AR-15 Gunsmithing Pricing | Acoating.com</title>
  <meta name="description" content="Explore Acoating.com's competitive pricing for Cerakote applications, laser engraving, and AR-15/AR variant gunsmithing services. Discover transparent and high-quality firearm customization services with no hidden fees." />
  <meta name="keywords" content="Cerakote application pricing, laser engraving costs, AR-15 gunsmithing rates, firearm customization services, Acoating" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.acoating.com/pricing/service-rates/ar-15-ak-47" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Cerakote Application, Laser Engraving, and AR-15 Gunsmithing Pricing | Acoating.com" />
  <meta property="og:description" content="Get competitive rates for Cerakote applications, laser engraving, and AR-15/AR variant gunsmithing services at Acoating.com. See why we're trusted for top-tier firearm customization." />
  <meta property="og:url" content="https://www.acoating.com/pricing/service-rates/ar-15-ak-47" />
  <meta property="og:image" content="https://www.acoating.com/images/og-image-service-rates.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cerakote Application, Laser Engraving, and AR-15 Gunsmithing Pricing | Acoating.com" />
  <meta name="twitter:description" content="Discover transparent pricing for Cerakote applications, laser engraving, and AR-15/AR variant gunsmithing at Acoating.com. Your go-to for firearm customization." />
  <meta name="twitter:image" content="https://www.acoating.com/images/twitter-image-service-rates.jpg" />
</Head>

      <Header />
      <ARVariantPricing/> {/* Use the ARVariantPricing component here */}

      <PricingFaqs/>

    </Layout>
  );
};

export default PricingPage;
