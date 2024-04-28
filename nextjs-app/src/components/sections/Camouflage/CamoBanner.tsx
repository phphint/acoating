import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CamoPortfolio = () => {
  // Array of images to cycle through
  const images = [
    "/nextjs_images/guns/Taurus-357-camo.png",  // Camo AR-15
    "/nextjs_images/guns/coltm1.png",  // Colt M1911
    "/nextjs_images/guns/army-camo-green-ar15.png",  // Camo AR-15
   
    // Add more image paths here as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="w-full bg-no-repeat bg-top relative pt-30"
             style={{
               backgroundImage: `url('/nextjs_images/backgrounds/camo-banner-bg-2.webp')`,
               backgroundSize: 'cover',
             }}>
      <div className="container mx-auto px-4 py-12 overflow-visible pb-0">
        <div className="pt-20">
          <div className="relative overflow-hidden" style={{ height: '540px', marginBottom: '-150px', maxWidth: '80%', maxHeight: '100%', margin: '0 auto', zIndex: 0 }}>
            <Image 
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              layout="fill"
              style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamoPortfolio;
