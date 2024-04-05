import React from 'react';
import Image from 'next/image';

const CamoPortfolio = () => {
  // Define the images for the portfolio here
  const portfolioImages = [
    { id: 1, src: '/media/services/camo-patterns-section/camo1.jpg', alt: 'Camo Design 1' },
    { id: 2, src: '/media/services/camo-patterns-section/camo2.jpg', alt: 'Camo Design 2' },
    { id: 3, src: '/media/services/camo-patterns-section/pistolcamo.jpg', alt: 'Camo Design 3' },
  ];

  return (
    <section className="w-full bg-no-repeat bg-top relative" style={{ backgroundImage: `url('/media/services/camo-patterns-section/camo-patterns-section-bg.png')` }}>
      <div className="text-center py-8">
      <h2 className="text-6xl font-bold text-[#a3d1da] shadow-custom">Cerakote Camo Airbrush Designs</h2>
      <p className="mt-0 text-[#a3d1da] font-bold text-xl shadow-custom">Current Camouflage in Production is Free hand Airbrushed Cerakote. Examples below.</p>
      <style jsx>{`
        .shadow-custom {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
      `}</style>
      </div>
      <div className="p-4 pl-0 pr-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioImages.map((image) => (
            <div key={image.id} className="w-full h-64 relative">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamoPortfolio;
