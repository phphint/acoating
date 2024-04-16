import React from "react";
import GallerySlider from './GallerySlider'; // Adjust the import path as needed
import Link from 'next/link';


const Home1: React.FC = () => {
  return (
   
    <section className="mt-[-24px]">
    
      
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 container mx-auto px-4">
        {/* For the first image, remove mx-4 to eliminate margin on the left */}
        <div className="flex w-full md:w-1/3 px-2 md:px-4 my-6">
          <img
            src="/media/camo-gun-coating.png"
            alt="Custom Coated Sig Sauer P320 - Cerakote Finish by Acoating.com"
            className="w-full h-auto mx-auto mt-5"
          />
        </div>

        <div className="flex w-full md:w-1/3 px-2 md:px-4">
          <div className="text-center">
            <h2 className="font-bold text-5xl mb-2 text-white">
              Firearms Customization{" "}
            </h2>
            <div className="w-1/4 mx-auto mb-4 h-0.5 bg-white"></div>
            <p className="mb-4 text-white text-left">
              Acoating.com specializes in premium Cerakote firearm coatings,
              offering custom refinishing, vibrant colors, and precise laser
              engravings for all firearms. Our state-of-the-art services ensure
              durability, protection, and personalized aesthetics for your
              firearm.
            </p>
            <Link href="/pricing" passHref>
  <button className="bg-[#151a1a] text-[#fff] py-2 px-4 transition-colors" style={{ borderRadius: '0' }}>
    See Pricing
  </button>
</Link>

          </div>
        </div>

        {/* For the last image, remove mx-8 to eliminate margin on the right */}
        <div className="flex w-full md:w-1/3 px-2 md:px-4 my-6">
          <img
            src="/media/laser-slider-5.jpg"
            alt="Smith & Wesson M&P Series with Personalized Cerakote - Acoating.com"
            className="w-full h-auto mx-auto mt-5"
          />
        </div>
      </div>

    </section>
  );
};

export default Home1;
