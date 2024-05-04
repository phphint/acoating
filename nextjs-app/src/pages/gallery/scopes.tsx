import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ImageGallery from '../../components/sections/Gallery/ImageGallery';

// Define TypeScript interfaces for your API response structure
interface ImageAttribute {
  url: string;
  id: string;
  name?: string;
  caption?: string;
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
    Category: string;
  };
}

interface ApiResponse {
  data: GalleryItem[];
}

const ScopeGalleryPage: React.FC = () => {
  const [images, setImages] = useState<{ id: string, url: string, title: string, description: string }[]>([]);
  const [categoryName, setCategoryName] = useState<string>('Scope'); // Set default category name

  useEffect(() => {
    fetch(
      'https://strapi.acoating.com/api/galleries?filters[Category][$eq]=Scope&populate=Image&pagination[start]=0&pagination[limit]=1000'
    )
      .then(response => response.json())
      .then((data: ApiResponse) => {
        const loadedImages = data.data.map((item: GalleryItem) => {
          if (item.attributes.Category && !categoryName) {
            setCategoryName(item.attributes.Category);
          }
          const imageEntries = item.attributes.Image.data || [];
          return imageEntries.map((imageEntry: ImageEntry) => ({
            id: imageEntry.id,
            url: `https://strapi.acoating.com${imageEntry.attributes.url}`,
            title: imageEntry.attributes.name || '',
            description: imageEntry.attributes.caption || '',
          }));
        });
        setImages(loadedImages.flat());
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

export default ScopeGalleryPage;
