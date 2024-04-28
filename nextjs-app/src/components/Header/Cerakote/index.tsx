import React from 'react';
import Link from 'next/link'; // Import the Link component

const CerakoteHeader: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/nextjs_images/cerkote-page/header-bg-cerkote-page.webp')`,
        minHeight: '67vh',
        marginTop: '-8rem', // Applying negative top margin to the section
      }}
    >
      {/* Container with positive top margin to offset the section's negative margin */}
      <div className="container mx-auto flex items-center justify-between px-4 py-12 lg:py-24" style={{ paddingTop: '12rem' }}>
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Unmatched Durability with Cerakote Coatings
          </h1>
          <p className="text-lg text-white mb-8">
            Discover the ultimate firearm finish with Cerakote. Enhance your firearm&lsquo;s durability, resistance, and overall appearance with a custom Cerakote coating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/pricing" passHref>
              <button className="bg-[#42595c] text-[#b6b6bc] py-3 px-6 border-[#b6b6bc] border hover:bg-[#36474a] transition-colors">
                See Pricing
              </button>
            </Link>
            <Link href="/services/cerakote-coating/color-codes" passHref>
              <button className="bg-[#42595c] text-[#b6b6bc] py-3 px-6 border-[#b6b6bc] border hover:bg-[#36474a] transition-colors">
                See Colors
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-end flex-col items-center">
          <img src="/nextjs_images/guns/before_and_after.png" alt="Cerakote Samples" className="h-auto w-full lg:max-w-xl" />
        </div>
      </div>
    </section>
  );
};

export default CerakoteHeader;
