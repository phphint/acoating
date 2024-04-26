import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component for optimized images
import LogosRow from '../LogosRow'; // Adjust the import path based on your file structure

const ServicesOverview: React.FC = () => {
  return (
    <div className="w-full bg-[#323232] text-center py-10" style={{ backgroundImage: `url('/nextjs_images/backgrounds/cerekote-services-color-code-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Enlarged button text */}
      <Link href="/pricing" role="button" className="inline-block bg-[#000912] text-[#fef8bc] font-bold text-lg py-3 px-6 hover:bg-[#71b1b4] transition-colors duration-300 cursor-pointer">
        See Prices
      </Link>

      {/* Container for the row of columns */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Firearm Cerakote Coating */}
          <Link href="/services/cerakote-coating" className="flex flex-col gap-4 items-center cursor-pointer">
            <div className="relative h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url('/nextjs_images/backgrounds/wood-bg-1.png')` }}>
              <Image src="/nextjs_images/guns/cerkote-coatings.png" alt="Cerakote Coatings" layout="fill" objectFit="contain" />
            </div>
            <div className="bg-[#81c0c3] p-4 w-full">
              <h3 className="text-[#431709] font-bold">Firearm Cerakote Coating</h3>
              <p className="text-[#307278]">Elevate your firearm with durable, stylish Cerakote coatings. Known for corrosion and wear resistance, Cerakote ensures your weapon&lsquo;s longevity. Personalize with a spectrum of colors.</p>
            </div>
          </Link>

          {/* Firearm Laser Engraving */}
          <Link href="/services/laser-engraving" className="flex flex-col gap-4 items-center cursor-pointer">
            <div className="relative h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url('/nextjs_images/backgrounds/wood-bg-2.png')` }}>
              <Image src="/media/popular-services/guns/firearm-engraving.png" alt="Laser Engraving" layout="fill" objectFit="contain" />
            </div>
            <div className="bg-[#81c0c3] p-4 w-full">
              <h3 className="text-[#431709] font-bold">Firearm Laser Engraving</h3>
              <p className="text-[#307278]">Personalize with precision laser engraving. Perfect for unique customization and identification, our service offers detailed, lasting engravings for any firearm.</p>
            </div>
          </Link>

          {/* Gunsmithing */}
          <Link href="/services/gunsmithing" className="flex flex-col gap-4 items-center cursor-pointer">
            <div className="relative h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url('/nextjs_images/backgrounds/wood-bg-3.png')` }}>
              <Image src="/nextjs_images/guns/gunsmith-before/gunsmith-before.png" alt="Gunsmithing" layout="fill" objectFit="contain" className="p-10" />
            </div>
            <div className="bg-[#81c0c3] p-4 w-full">
              <h3 className="text-[#431709] font-bold">Gunsmithing</h3>
              <p className="text-[#307278]">Trust our experts for top-notch gunsmithing. From routine maintenance to bespoke modifications, we ensure your firearm&lsquo;s peak performance.</p>
            </div>
          </Link>
        </div>

        <LogosRow/>
      </div>
    </div>
  ); 
};

export default ServicesOverview;
