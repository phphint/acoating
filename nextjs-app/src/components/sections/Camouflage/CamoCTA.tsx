import React from 'react';
import Image from 'next/image';

const CamoCTA = () => {
  return (
    <section className="w-full bg-[#1e3230] text-[#e5e9e5] py-12">
      <div className="container mx-auto flex flex-wrap items-center p-4">
        <div className="w-full md:w-1/2 flex justify-center items-center p-10" 
             style={{ backgroundImage: `url('/nextjs_images/backgrounds/camo-section-bg-cta.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-1/3">
            <Image src="/nextjs_images/cerkote-certified-applicator.svg" alt="Camo CTA Image" width={166} height={300} objectFit="contain" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between md:pl-8">
          <div className="flex-1 md:pr-4">
            <h2 className="text-3xl font-bold border-b-2 border-[#08232b] pb-2">Explore Pricing Options</h2>
            <p className="mt-4">
              Get detailed information on pricing for our camouflage patterns and customization services to make an informed decision.
            </p>
            <button className="mt-8 border-2  border-[#0e1816] text-[#0e1816] bg-[#66a1a7] py-2 px-4 hover:bg-[#08232b] hover:text-[#a4d2da] transition-colors duration-300">
              See Pricing
            </button>
          </div>
          <div className="flex-1 mt-4 md:mt-0 md:pl-4">
            <h2 className="text-3xl font-bold border-b-2 border-[#0e1816] border-[#08232b] pb-2">Cerakote Color Codes</h2>
            <p className="mt-4">
              Explore the wide range of Cerakote color codes available for customizing your firearm to match your personal style.
            </p>
            <button className="mt-8 border-2 border-[#0e1816]  text-[#0e1816] bg-[#66a1a7] py-2 px-4 hover:bg-[#08232b] hover:text-[#a4d2da] transition-colors duration-300">
              See Color Codes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamoCTA;
