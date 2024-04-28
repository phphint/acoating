// ServicesOverview.tsx
import React from 'react';
import Image from 'next/image';

const ServicesHeader: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center bg-cover bg-center text-center overflow-hidden"
         style={{ 
           backgroundImage: `url('/nextjs_images/backgrounds/laser-engraving-bg-page.webp')`,
           maxHeight: '80vh',
           marginTop: '-8rem', // Adjusted top margin
         }}>

      {/* Title with custom size, color, and a heavy dark drop shadow */}
      <h1 className="text-8xl font-bold" style={{ 
          color: '#88c7cb', 
          marginTop: '40rem',
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.8)', // Heavy dark drop shadow
        }}>
        Firearm Laser Engraving
      </h1>

      {/* Adjusting the image container */}
      <div className="relative w-full flex justify-center mt-4"> 
        {/* Container for the image without forcing aspect ratio preservation */}
        <div className="relative h-[70vh] w-full max-w-4xl"> 
          {/* Image without objectFit to allow natural aspect ratio */}
          <Image src="/nextjs_images/guns/lasre-engraving-3.png" alt="Service Overview" layout="responsive" width={500} height={300} objectPosition="center" />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
