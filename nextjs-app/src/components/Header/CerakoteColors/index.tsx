import React from 'react';
import Image from 'next/image';

const ServicesHeader: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center bg-cover bg-center text-center overflow-hidden"
         style={{ 
           backgroundImage: `url('/nextjs_images/backgrounds/cerekote-color-codes-header.webp')`,
           minHeight: '80vh',
           marginTop: '-8rem', // Adjusted top margin
         }}>

      {/* Responsive Title with custom size, color, and a heavy dark drop shadow */}
      <h1 className="font-bold mt-40 md:mt-40 lg:mt-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#88c7cb]" style={{ 
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.8)', // Heavy dark drop shadow
        }}>
        Cerakote Color Codes
      </h1>

      {/* Adjusting the image container */}
      <div className="relative w-full flex justify-center mt-0 "> 
        {/* Responsive container for the image */}
        <div className="relative h-auto w-full max-w-4xl overflow-hidden -mb-32"> 
          {/* Responsive Image with natural aspect ratio */}
          <Image 
            src="/nextjs_images/guns/glock-17.png" 
            alt="Service Overview" 
            layout="responsive" 
            width={500} 
            height={300} 
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
