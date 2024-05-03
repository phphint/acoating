import React from 'react';
import styles from './ImageGallery.module.css'; // Ensure you have this CSS module

const ImageGallery = ({ images }) => {
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
    <section className=" w-full mt-10">
      <div className="">
        <h2 className="text-center text-xl text-white">1911 Pistol Cerekote Gallery</h2>
        <div className={styles.galleryContainer}>
          <div className={styles.mainImageContainer} style={{ backgroundImage: `url(${currentImage})` }}>
            <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
            <button className={styles.arrow} onClick={handleNext}>&gt;</button>
          </div>
          <div className={styles.thumbnailContainer}>
            {images.map((img, index) => (
              <img 
                key={index}
                src={img.url} // Assumed corrected property from mapping
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImage(index)}
                className={index === selectedImage ? styles.selectedThumbnail : styles.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
