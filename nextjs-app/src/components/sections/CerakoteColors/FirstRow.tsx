// ColorCodeCTASection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ColorCodeCTASection: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-[#81b0b4] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/2 text-left p-6">
            <h2 className="text-4xl font-bold mb-4 text-[#f1f7f8] leading-tight">Explore Cerakote Color Codes</h2>
            <p className="text-[#31575a] mb-4">
              On this page, you&lsquo;ll find an extensive array of Cerakote color options, each with a unique code to help you find the perfect finish for your firearm. Cerakote coatings are available in two primary series: the H-Series and the C-Series.
            </p>
            <p className="text-[#31575a] mb-8">
              The <strong>H-Series</strong> is renowned for its durability and rust resistance, making it ideal for use in harsh environments. On the other hand, the <strong>C-Series</strong> is designed for high-temperature applications and offers excellent wear resistance. Both series provide a wide spectrum of colors, allowing for personalized firearm customization.
            </p>
            <Link href="/pricing/faq/shipping-instructions" passHref className="inline-block bg-[#bc651d] text-[#ffc9aa] font-bold text-lg py-3 px-6 hover:bg-[#a55c1b] transition-colors duration-300 cursor-pointer">
            Download Order Form
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center p-6">
            <Image src="/nextjs_images/icons/color-wheel-firearm.png" alt="Cerakote Color Wheel" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCodeCTASection;
