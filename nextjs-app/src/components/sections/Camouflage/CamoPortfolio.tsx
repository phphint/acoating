import React from 'react';

const CamoPortfolio = () => {
  return (
    <section className="w-full bg-no-repeat bg-cover bg-top relative border-b mt-[-8rem]"
             style={{
               backgroundImage: `url('/nextjs_images/backgrounds/camo-header-top-bg-2.png')`,
               borderBottom: '8px solid #e2e6e9' // Adds a solid bottom border with the specified color
             }}>
      <div className="text-center py-8 pt-[9.6rem]">
        <div className="mx-auto max-w-4xl pt-20 mb-20"> {/* Adjust max-w-4xl as needed for desired width */}
          <h2 className="text-5xl text-[#f8f9fb] shadow-custom mb-3">Expert Cerakote Camouflage</h2>
          <p className="text-[#f8f9fb] text-xl shadow-custom">Elevate your firearm&lsquo;s aesthetics and durability with our premium Cerakote camouflage services. Explore our diverse portfolio of patterns to find the perfect match for your gear.</p>
        </div>
      </div>
    </section>
  );
};

export default CamoPortfolio;
