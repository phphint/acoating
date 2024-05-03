import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ImageGallery from '../../components/sections/Gallery/ImageGallery';

const Pistol1911GalleryPage: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      'https://strapi.acoating.com/api/galleries?filters[Category][$eq]=Pistol%201911&populate=Image&pagination[start]=0&pagination[limit]=1000'
    )
      .then(response => response.json())
      .then(data => {
        const loadedImages = data.data.map(item => {
          const imageEntries = item.attributes.Image.data || [];
          const images = imageEntries.map(imageEntry => {
            const imageUrl = imageEntry
              ? `https://strapi.acoating.com${imageEntry.attributes.url}`
              : '';
            return {
              id: imageEntry.id,
              url: imageUrl,
              title: '', // You can use imageEntry.attributes.name if you want to display the file name as the title
              description: '', // You can use imageEntry.attributes.caption if you want to display the caption as the description
            };
          });

          return images;
        });

        const flattenedImages = loadedImages.flat();
        setImages(flattenedImages);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Layout>
      <Head>
        <title>Pistol 1911 Gallery</title>
        <meta name="description" content="Explore our exclusive gallery of Pistol 1911 customizations. Each piece showcases unique craftsmanship and detailing." />
        <meta name="keywords" content="Pistol 1911, firearm gallery, custom guns, custom pistols" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating Gallery: Pistol 1911 Customizations" />
        <meta property="og:description" content="Discover our specialized gallery for Pistol 1911 customizations featuring unique designs and exceptional craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/pistol1911-gallery" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-pistol1911.jpg" />
        <link rel="canonical" href="https://www.acoating.com/pistol1911-gallery" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ImageGallery images={images}   />
    </Layout>
  );
};

export default Pistol1911GalleryPage;
