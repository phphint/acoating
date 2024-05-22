import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../Header/Gunsmithing';


const ServicesOverview: React.FC = () => {
  return (
<div className="w-full bg-cover bg-center text-[#282c30] py-10 px-4 sm:px-6 lg:px-8" 
     style={{ 
         backgroundImage: "url('/nextjs_images/backgrounds/gunsmithing-page-bg.png')",
         marginTop: '-8rem',  // Adding negative top margin
         paddingTop: '8rem'    // Adding padding top
     }}>

     
        <div className="container mx-auto bg-[#111a1d] p-10 mt-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-[#3aa1af]"> Acoating Firearm Airbrushing </h2>
                <Link href="mailto:acoating@gmail.com" className="bg-[#3aa1af] text-[#FBF9F0] font-bold py-2 px-4">
                  Request Quote 
                </Link>
            </div>
            <hr className="border-t-[1px] border-[#3aa1af] mb-6"/>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
                <div className="md:w-1/2 space-y-4 px-4 py-2">   
                    {[1, 2, 3, 4, 5].map(num => (
                        <Image
                            key={num}
                            src={`/nextjs_images/guns/airbrush/airbrush-${num}.jpg`}
                            alt={`Laser Engraving ${num}`}
                            width={500}  // Provide an initial width
                            height={105}  // Provide an initial height, maintaining aspect ratio
                            layout="responsive"
                            className="rounded-lg"
                        />
                    ))}
                </div>
                <div className="text-left px-4 text-[#dad2ce] ">
                <h2 className="text-2xl font-bold mb-4">Unmatched Customization & Precision</h2>
                <p className="mb-4">
                    Elevate your firearm beyond performance with Acoating.com&apos;s industry-leading airbrushing services. Our skilled artisans transform your weapon into a work of art, utilizing top-tier Cerakote finishes for unparalleled durability and visual impact.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">A Masterpiece of Form & Function:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Enhanced Visual Appeal: Stand out on the range or in the field with a firearm that reflects your unique personality.</li>
                    <li>Unwavering Performance: Rest assured, Cerakote&apos;s superior protection ensures your firearm functions flawlessly in any environment.</li>
                    <li>Expert Craftsmanship: Our team of experienced technicians meticulously applies each Cerakote layer and airbrushed detail.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Benefits for Every Firearm Owner:</h3>
                <p className="mb-4">
                    Acoating.com caters to all firearm enthusiasts, from competitive shooters seeking a performance edge with a personalized touch to hunters desiring a visually striking and reliable companion.
                </p>
                
                <h3 className="text-xl font-semibold">Fuel Your Inspiration:</h3>
                <p className="mb-4">
                    Explore our gallery to discover a vast collection of airbrushed Cerakote firearm designs to ignite your creativity, or craft your dream firearm. Contact Acoating.com today to discuss your vision and receive a free quote.
                </p>
    </div>



            </div>
        </div>
    </div>
  );
};

export default ServicesOverview;
