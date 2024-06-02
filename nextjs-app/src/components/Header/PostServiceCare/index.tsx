import React from 'react';

const PostServiceCareHeader: React.FC = () => {
  return (
    <header
      className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0"
      style={{ backgroundColor: '#0c2225', minHeight: '80vh' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
        <div className="lg:w-1/2 lg:pr-10 text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left mt-40 md:mt-40 lg:mt-0">
            Firearm Post-Service Care
          </h1>
          <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
            Maximizing the longevity and performance of your refinished firearm.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
            At <b>Acoating</b>, our expertise extends beyond the application of Cerakote finishes to guiding you on the best care practices for your newly refinished firearm. Proper maintenance is essential for ensuring the durability and performance of your firearm&apos;s finish. This guide serves as a resource for our customers to help maintain their firearms in pristine condition after refinishing.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <img 
            src="/nextjs_images/guns/care_for_firearm.png" // Adjust the path as necessary
            alt="Care for Refinished Firearm" 
            className="max-w-xs md:max-w-sm lg:max-w-full h-auto mb-8 lg:mb-0" 
          />
        </div>
      </div>
    </header>
  );
};

export default PostServiceCareHeader;
