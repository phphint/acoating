import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ImageGallery from '../../components/sections/Gallery/ImageGallery';

// Define TypeScript interfaces for your API response structure
interface ImageAttribute {
  url: string;
  id: string;
  name?: string; // assuming optional
  caption?: string; // assuming optional
}

interface ImageEntry {
  id: string;
  attributes: ImageAttribute;
}

interface GalleryItem {
  attributes: {
    Image: {
      data: ImageEntry[];
    };
  };
}

interface ApiResponse {
  data: GalleryItem[];
}

const Pistol1911GalleryPage: React.FC = () => {
  const [images, setImages] = useState<{ id: string, url: string, title: string, description: string }[]>([]);

  useEffect(() => {
    fetch(
      'https://strapi.acoating.com/api/galleries?filters[Category][$eq]=Pistol%201911&populate=Image&pagination[start]=0&pagination[limit]=1000'
    )
      .then(response => response.json())
      .then((data: ApiResponse) => {
        const loadedImages = data.data.map((item: GalleryItem) => {
          const imageEntries = item.attributes.Image.data || [];
          const images = imageEntries.map((imageEntry: ImageEntry) => {
            const imageUrl = imageEntry
              ? `https://strapi.acoating.com${imageEntry.attributes.url}`
              : '';
            return {
              id: imageEntry.id,
              url: imageUrl,
              title: imageEntry.attributes.name || '', // Optionally display the file name as the title
              description: imageEntry.attributes.caption || '', // Optionally display the caption as the description
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
    
        <link rel="canonical" href="https://www.acoating.com/pistol1911-gallery" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ImageGallery images={images} />
    </Layout>
  );
};

export default Pistol1911GalleryPage;
