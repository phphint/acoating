import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Home1: React.FC = () => {
  return (
    <section className="mt-[-24px]">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 container mx-auto px-4">

        {/* First Column */}
        <div className="flex w-full md:w-1/3 px-2 md:px-4 my-6 relative h-[400px]"> {/* Set a fixed height */}
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/nextjs_images/backgrounds/card-home-bg1.png"
              alt="Background Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Gun Image */}
          <div className="absolute inset-0 flex justify-center items-center p-10">
            <Image
              src="/nextjs_images/guns/1911.png"
              alt="1911 Gun"
              layout="fill"
              objectFit="cover" // Change to cover to ensure the image fills the div
            />
          </div>
        </div>

        {/* Second Column */}
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

        {/* Last Column */}
        <div className="flex w-full md:w-1/3 px-2 md:px-4 my-6 relative h-[400px]"> {/* Set a fixed height */}
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/nextjs_images/backgrounds/card-home-bg2.png"
              alt="Background Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Gun Image */}
          <div className="absolute inset-0 flex justify-center items-center p-10">
            <Image
              src="/nextjs_images/guns/cerkote-coatings.png"
              alt="Cerkote Coatings Gun"
              layout="fill"
              objectFit="cover" // Change to cover to ensure the image fills the div
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home1;
