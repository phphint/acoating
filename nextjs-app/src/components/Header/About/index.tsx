import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0"
      style={{ backgroundColor: '#0c2225', height: '66vh' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
        <div className="lg:w-1/2 lg:pr-10 text-justify flex flex-col">   
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left mt-12 md:mt-0">
            About Us
          </h1>
          <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
            Crafting unique <b>firearm finishes</b> with precision and passion.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
            Welcome to <b>Acoating</b>, where <b>precision</b> meets <b>passion</b> in the art of <b>firearm customization</b>. With years of expertise under our belt, we specialize in transforming your firearms into personalized masterpieces. Our dedication to <b>quality</b>, <b>detail</b>, and <b>customer satisfaction</b> sets us apart in the world of <b>firearm coatings</b>, <b>laser engraving</b>, and <b>comprehensive gunsmith services</b>.
          </p>
          <p className="text-base mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
            Explore our journey and the values that drive us.
          </p>
          <div className="text-center lg:text-left mb-5 md:mb-4">  
            <a href="mailto:acoating@gmail.com" 
               className="bg-[#7ac3bf] text-[#002427] py-2 px-6 text-base lg:text-lg transition-colors hover:bg-[#68b2af]" 
               style={{ border: 'none', borderRadius: '0' }}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-4 md:mt-0">   
          <img 
            src="/nextjs_images/portfolio/manufactures_batch_of_ar-15_receivers.jpg" 
            alt="Cerakote Bottles" 
            className="max-w-xs md:max-w-sm lg:max-w-full h-auto" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
