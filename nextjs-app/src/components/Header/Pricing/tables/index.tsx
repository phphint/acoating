import React from 'react';
import Image from 'next/image'; // Don't forget to import Image from 'next/image'
import LogosRow from '../../../sections/LogosRow'; // Adjust the import path as necessary

const Header: React.FC = () => {
  return (
    <header
      className="relative z-10 overflow-visible -mb-8" // Changed to overflow-visible to allow image overflow
      style={{ 
        backgroundImage: `url('/nextjs_images/backgrounds/section-bg-pricing2.png')`, 
        backgroundColor: '#3b3a2f',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: '100vw',
        backgroundSize: 'contain',
        height: 'auto', // Adjusted to auto to accommodate content
      }}
    >
      {/* Container for main content */}
      <div 
        className="container mx-auto flex flex-col items-center justify-center px-4 py-8 text-center pt-40"
        style={{
          backgroundImage: `url('/nextjs_images/backgrounds/section-container-bg-pricing.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '77vh',
        }}
      >
        {/* First Row: Full-Width Image */}
        <div className="w-full overflow-visible"> {/* Adjusted for full width and visible overflow */}
          <Image 
            src="/nextjs_images/guns/ar-variant-pricing-header.png" 
            alt="AR-15" 
            layout="responsive" 
            width={700} 
            height={300} 
            objectFit="cover"
          />
        </div>

        {/* Second Row: Smaller, Left-Aligned Box */}
           {/* Second Row: Smaller, Left-Aligned Box with Negative Top Margin */}
           <div className="w-full flex justify-start overflow-visible mt-[-4rem] lg:mt-[-18rem]"> {/* Applied negative margin */}
          <div className="bg-[#27201b] p-4 text-[#d1ccbe] max-w-xs">
            <h1 className="text-2xl lg:text-3xl mb-4">Customize Your Firearm</h1>
            <p className="text-sm lg:text-base mb-4 text-[#a09183]">
              Explore our expert Cerakote coatings, laser engraving, and comprehensive gunsmithing services to personalize and enhance your firearms.
            </p>
            <button className="bg-[#35352e] text-[#fef8bc] border border-[#969e9e] py-2 px-4">
              Ship Us Your Firearm
            </button>
          </div>
        </div>



      </div>

      {/* Logos Row placed outside and below the container */}
      <div style={{ width: '100%' }}>
        <LogosRow />
      </div>
    </header>
  );
};

export default Header;
