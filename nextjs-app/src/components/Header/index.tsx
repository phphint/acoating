import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header
      className="relative z-10 overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/nextjs_images/backgrounds/header-bg.webp')`, minHeight: '88vh' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 text-center lg:text-left">
      <img 
          src="/nextjs_images/backgrounds/cerekote-bottles.png" 
          alt="Cerakote Bottles" 
          className="max-w-xs md:max-w-sm lg:max-w-lg mb-8 lg:mb-0 mt-40 md:mt-8" 
        />
        <div className="w-full lg:w-auto lg:pl-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Transform Your Firearm with Custom Cerakote Coatings
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 text-white">
            Step into the world of custom firearm aesthetics with Acoating. Beyond unparalleled protection, our Cerakote coating services offer the ultimate in color customization and styling, allowing you to personalize your weapon to reflect your unique taste and lifestyle.
          </p>
          <Link href="/services/cerakote-coating" passHref>
            <button className="mb-10 bg-[#7ac3bf] text-[#1c4642] py-2 lg:py-4 px-6 lg:px-8 text-base lg:text-lg transition-colors hover:bg-[#68b2af]" style={{ border: 'none', borderRadius: '0' }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
