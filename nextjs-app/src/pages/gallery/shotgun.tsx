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
    Category: string; // Assuming category is directly under attributes
  };
}

interface ApiResponse {
  data: GalleryItem[];
}

const ShotgunGalleryPage: React.FC = () => {
  const [images, setImages] = useState<{ id: string, url: string, title: string, description: string }[]>([]);
  const [categoryName, setCategoryName] = useState<string>('Shotgun'); // Default category name

  useEffect(() => {
    fetch(
      'https://strapi.acoating.com/api/galleries?filters[Category][$eq]=Shotgun&populate=Image&pagination[start]=0&pagination[limit]=1000'
    )
      .then(response => response.json())
      .then((data: ApiResponse) => {
        const loadedImages = data.data.map((item: GalleryItem) => {
          // Set category name from the first item, assuming all items have the same category
          if (item.attributes.Category && categoryName === 'Shotgun') {
            setCategoryName(item.attributes.Category);
          }

          const imageEntries = item.attributes.Image.data || [];
          const images = imageEntries.map((imageEntry: ImageEntry) => {
            const imageUrl = imageEntry ? `https://strapi.acoating.com${imageEntry.attributes.url}` : '';
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
  }, [categoryName]);

  return (
    <Layout>
      <Head>
        <title>{`${categoryName} Gallery`}</title>
        <meta name="description" content={`Explore our exclusive gallery of ${categoryName} customizations. Each piece showcases unique craftsmanship and detailing.`} />
        <link rel="canonical" href={`https://www.acoating.com/${categoryName.toLowerCase().replace(/\s+/g, '-')}-gallery`} />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ImageGallery images={images} category={categoryName} />
    </Layout>
  );
};

export default ShotgunGalleryPage;
