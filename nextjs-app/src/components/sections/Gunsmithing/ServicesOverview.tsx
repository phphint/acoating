import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../../components/Header/Gunsmithing';


const ServicesOverview: React.FC = () => {
  return (
<div className="w-full bg-cover bg-center text-[#282c30] py-10 px-4 sm:px-6 lg:px-8" 
     style={{ 
         backgroundImage: "url('/nextjs_images/backgrounds/gunsmithing-page-bg.png')",
         marginTop: '-8rem',  // Adding negative top margin
         paddingTop: '8rem'    // Adding padding top
     }}>

      <Header/>
        <div className="container mx-auto bg-[#311e11] p-10 mt-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-[#3aa1af]"> Acoating Gunsmithing Services </h2>
                <Link href="/pricing" className="bg-[#3aa1af] text-[#FBF9F0] font-bold py-2 px-4">
                  See Pricing 
                </Link>
            </div>
            <hr className="border-t-[1px] border-[#3aa1af] mb-6"/>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
                <div className="md:w-1/2 space-y-4 px-4 py-2">   
                    {[1, 2, 3, 4, 5].map(num => (
                        <Image
                            key={num}
                            src={`/nextjs_images/guns/laser/fire-arm-laser-engrave-${num}.jpg`}
                            alt={`Laser Engraving ${num}`}
                            width={500}  // Provide an initial width
                            height={105}  // Provide an initial height, maintaining aspect ratio
                            layout="responsive"
                            className="rounded-lg"
                        />
                    ))}
                </div>
                <div className="text-left px-4 text-[#dad2ce] ">
      <h2 className="text-2xl font-bold mb-4">Enhance Your Firearm&apos;s Performance and Style</h2>
      <p className="mb-4">
        Looking to elevate your firearm&apos;s performance and style? Look no further than Acoating.com&apos;s comprehensive gunsmithing services. Our certified gunsmiths specialize in both performance upgrades and aesthetic customizations, ensuring your firearm perfectly reflects your needs and preferences.
      </p>
      
      <h3 className="text-xl font-semibold mb-3">Enhanced Accuracy & Functionality:</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Barrel Fitting & Tuning: Improve shot grouping and overall accuracy with precise barrel fitting and tuning services.</li>
        <li>Action Work: Experience smoother operation and trigger control through action enhancements.</li>
        <li>Ergonomic Upgrades: Optimize your shooting comfort and controllability with custom grip adjustments and stock modifications.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3">Unmatched Style & Personalization:</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Custom Engraving: Make your firearm a true one-of-a-kind with intricate and personalized engravings.</li>
        <li>Cerakote Finishes: Choose from a vast array of durable and visually stunning Cerakote finishes to create a unique look.</li>
        <li>Metalwork & Customization: Enhance your firearm&apos;s aesthetics and value with expert metalwork and custom modifications.</li>
      </ul>
      
      <p className="mb-4">
        Whether you&apos;re a competitive shooter, a passionate hunter, or a firearm collector, Acoating.com&apos;s gunsmithing services cater to all. We ensure your firearm becomes an extension of yourself, both in functionality and style. Browse our gallery for design inspiration, or contact us today to discuss your vision and unlock your firearm&apos;s true potential.
      </p>
    </div>



            </div>
        </div>
    </div>
  );
};

export default ServicesOverview;
