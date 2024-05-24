import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import styles from './ImageGallery.module.css'; // Ensure you have this CSS module

// Define a TypeScript interface for Image
interface Image {
  url: string;
}

// Define a TypeScript interface for props
interface ImageGalleryProps {
    images: { id: string; url: string; title: string; description: string }[];
    category?: string; // Now optional

  }
  

  const ImageGallery = ({ images, category }: ImageGalleryProps) => {

  const [selectedImage, setSelectedImage] = React.useState(0);

  // Check and handle if images array is empty or selectedImage is invalid
  const currentImage = images[selectedImage] ? images[selectedImage].url : '';

  const handlePrev = () => {
    setSelectedImage(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setSelectedImage(prev => (prev + 1) % images.length);
  };

  return (
    <section className="w-full  mt-10">
       <h2 className="text-6xl font-bold text-white mb-4 text-center">
        {category ? `${category} Gallery` : 'Loading Gallery...'}
      </h2>
      <div className={styles.galleryContainer} >
        <div className={styles.mainImageContainer} style={{ backgroundImage: `url(${currentImage})` }}>
          <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
          <button className={styles.arrow} onClick={handleNext}>&gt;</button>
        </div>
        <div className={styles.thumbnailContainer}>
          {images.map((img, index) => (
            <img 
              key={index}
              src={img.url}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(index)}
              className={index === selectedImage ? styles.selectedThumbnail : styles.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Define PropTypes
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ImageGallery;
