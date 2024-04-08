import React from 'react';

const CamoPortfolio = () => {
  return (
    <section className="w-full bg-no-repeat bg-top relative mt-[-8rem]" style={{ backgroundImage: `url('/nextjs_images/backgrounds/camo-patterns-section-bg-2.png')` }}>
      {/* Wrap the text in a div with a max-width and margin auto to center it */}
      <div className="text-center py-8 pt-[9.6rem]">
        <div className="mx-auto max-w-4xl"> {/* Adjust max-w-4xl as needed for desired width */}
          <h2 className="text-5xl text-[#a3d1da] shadow-custom">Expert Cerakote Camouflage Applications</h2>
          <p className="mt-0 text-[#a3d1da] text-xl shadow-custom">Elevate your firearm's aesthetics and durability with our premium Cerakote camouflage services. Explore our diverse portfolio of patterns to find the perfect match for your gear.</p>
        </div>
      </div>
    </section>
  );
};

export default CamoPortfolio;
