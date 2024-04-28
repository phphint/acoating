import React from 'react';
import Head from 'next/head';
import Header from '../../../../components/Header/CerakoteColors';
import Layout from '../../../../components/Layout'; // Reusable layout component
import ColorOverview from '../../../../components/sections/CerakoteColors/ColorOverview'; // Overview of Cerakote colors
import FirstRow from '../../../../components/sections/CerakoteColors/FirstRow'; // Overview of Cerakote colors
import SecondRow from '../../../../components/sections/CerakoteColors/SecondRow'; // Overview of Cerakote colors
import ColorCodes from '../../../../components/sections/CerakoteColors/ColorCodes'; // Overview of Cerakote colors

const CerakoteColorCodePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Cerakote Color Codes: Explore Durable Finishes for Your Firearms</title>
        <meta name="description" content="Find the perfect Cerakote color for your firearm with our extensive color code library. Durable and stylish, Cerakote finishes offer superior protection and a personalized touch to your weapon." />
        <meta name="keywords" content="Cerakote colors, firearm coatings, durable finishes, custom firearm coloring, protective coatings, Cerakote color codes" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cerakote Colors: Find Your Perfect Firearm Finish" />
        <meta property="og:description" content="Explore our Cerakote color codes to select the perfect finish for your firearm. Our durable Cerakote coatings not only enhance aesthetics but also offer long-lasting protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/cerakote-colors" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-cerakote-colors.jpg" />
        <link rel="canonical" href="https://www.acoating.com/cerakote-colors" />
      </Head>
      <Header />
      <div style={{ backgroundImage: `url('/media/colors-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FirstRow/>
      <SecondRow/>
      <ColorCodes/>
        <ColorOverview />
  
      </div>
    </Layout>
  );
};

export default CerakoteColorCodePage;
