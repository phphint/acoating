import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout'; // Reusable layout component
import CamoPortfolio from '../../../components/sections/Camouflage/CamoPortfolio'; // Component for showcasing camo pattern portfolio
import CamoPatterns from '../../../components/sections/Camouflage/CamoPatterns'; // Component for listing camo patterns
import CamoCTA from '../../../components/sections/Camouflage/CamoCTA'; // Call-to-action component related to camo patterns
import CamoBanner from '../../../components/sections/Camouflage/CamoBanner'; // Component for showcasing camo pattern portfolio


const CamouflagePatternsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Acoating Camouflage Patterns: Discover Unique and Durable Designs</title>
        <meta name="description" content="Dive into Acoating's vast array of camouflage patterns for firearms. From tactical to aesthetic, find the perfect camo design for your firearm and learn about our durable Cerakote finishes." />
        <meta name="keywords" content="camouflage patterns, firearm camo designs, Cerakote camo finishes, custom firearm patterns, durable camo coatings" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating Camouflage Patterns: Unique and Durable Designs for Firearms" />
        <meta property="og:description" content="Explore Acoating's camouflage patterns for firearms. Whether you're looking for tactical efficiency or aesthetic appeal, our durable Cerakote finishes have you covered." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/camouflage-patterns" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-camouflage.jpg" />
        <link rel="canonical" href="https://www.acoating.com/camouflage-patterns" />
      </Head>
<CamoPortfolio/>
<CamoBanner/>
      <CamoPatterns />
      <CamoCTA />
    </Layout>
  );
};

export default CamouflagePatternsPage;
