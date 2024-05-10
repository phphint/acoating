import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import CamoPortfolio from '../../../components/sections/Camouflage/CamoPortfolio';
import CamoPatterns from '../../../components/sections/Camouflage/CamoPatterns';
import CamoContent from '../../../components/sections/Camouflage/CamoContent';

import CamoCTA from '../../../components/sections/Camouflage/CamoCTA';
import CamoBanner from '../../../components/sections/Camouflage/CamoBanner';

const CamouflagePatternsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Firearm Coating",
    "name": "Custom Camo Cerakote Services",
    "description": "Choose from a variety of custom camo Cerakote patterns including Multi-Cam, Kryptek, Woodland, Digital, Tiger Stripe, and Battleworn finishes. Enhance the durability and aesthetics of your firearms with professional Cerakote services.",
    "provider": {
      "@type": "Organization",
      "name": "Acoating",
      "url": "https://www.acoating.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "6",
      "offers": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Multi-Cam Cerakote"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kryptek Cerakote"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Woodland Camo Cerakote"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Digital Camo Cerakote"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tiger Stripe Cerakote"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Battleworn Finish Cerakote"}}
      ]
    }
  };

  return (
    <Layout>
      <Head>
        <title>Custom Camo Cerakote Patterns: Multi-Cam, Kryptek, Woodland & More | Acoating</title>
        <meta name="description" content="Explore custom camo Cerakote patterns for your firearms at Acoating. Choose from Multi-Cam, Kryptek, Woodland, Digital, Tiger Stripe, and Battleworn finishes for superior protection and aesthetics." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <CamoPortfolio />
      <CamoBanner />
      <CamoContent />

      <CamoPatterns />

      <CamoCTA />
    </Layout>
  );
};

export default CamouflagePatternsPage;
