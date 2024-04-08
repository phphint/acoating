import React from 'react';

const ShippingHeader: React.FC = () => {
  return (
    <header
      className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0"
      style={{ backgroundColor: '#0c2225', height: '66vh' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
        <div className="lg:w-1/2 lg:pr-10 text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left">
            Shipping Instructions
          </h1>
          <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
            Your guide to <b>secure and efficient firearm shipping</b>.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
            At <b>Acoating</b>, we understand the importance of safety and precision in shipping your firearms. Follow our detailed instructions to ensure your items are prepared correctly for their journey. Whether you&apos;re sending in for customization or maintenance, trust in our expertise for a hassle-free experience.
          </p>

          <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
          Launch Your Project With Us
          </p>
          <button 
              className="bg-[#7ac3bf] text-[#002427] py-2 px-6 text-lg font-bold   hover:bg-[#68b2af] transition duration-300"
              onClick={() => window.location.href='/contact'} // Adjust URL as needed
            >
              Donload Order Form
            </button>
       
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <img 
            src="/nextjs_images/shipping_box_firearm.png" 
            alt="Shipping Box with Firearm" 
            className="max-w-xs md:max-w-sm lg:max-w-full h-auto mb-8 lg:mb-0" 
          />
        </div>
      </div>
    </header>
  );
};

export default ShippingHeader;
