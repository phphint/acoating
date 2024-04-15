import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import GalleryCategories from '../../components/sections/Gallery/GalleryCategories'; // Renamed component
 
const GalleryPage: React.FC = () => {
  return ( 
    <Layout> 
      <Head> 
        <title>Acoating Gallery: Explore Our Premium Firearm Customizations</title>
        <meta name="description" content="Explore our gallery to see premium firearm customizations, including Cerakote coatings and detailed engravings. Get inspired for your next project!" />
        <meta name="keywords" content="firearm gallery, Cerakote gallery, firearm customization, gun coatings, engraving gallery" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating Gallery: Premium Firearm Customizations" />
        <meta property="og:description" content="Take a look at our extensive gallery of firearm customizations to find inspiration for your own projects. See the quality and creativity of our work firsthand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/gallery" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-gallery.jpg" />
        <link rel="canonical" href="https://www.acoating.com/gallery" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
      </Head>
 

      <GalleryCategories />  {/* This component will now handle the display of gallery categories which might include tags for sorting/filtering */}
    </Layout>
  );
};

export default GalleryPage;
