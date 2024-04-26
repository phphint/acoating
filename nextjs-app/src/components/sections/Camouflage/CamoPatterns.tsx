import React from 'react';

const CamoPatterns = () => {
  const patternImages = [
    { id: 1, src: '/nextjs_images/portfolio/portfolio-gun-001.jpg', alt: 'MultiCam' },
    { id: 2, src: '/nextjs_images/portfolio/portfolio-gun-002.jpg', alt: 'Urban Camo' },
    { id: 3, src: '/nextjs_images/portfolio/portfolio-gun-003.jpg', alt: 'Woodland Camo' },
    { id: 4, src: '/nextjs_images/portfolio/portfolio-gun-004.jpg', alt: 'Desert Camo' },
    { id: 5, src: '/nextjs_images/portfolio/portfolio-gun-005.jpg', alt: 'Digital Camo' },
    { id: 6, src: '/nextjs_images/portfolio/portfolio-gun-006.jpg', alt: 'MultiCam Black' },
    { id: 7, src: '/nextjs_images/portfolio/portfolio-gun-007.jpg', alt: 'AOR' },
    { id: 8, src: '/nextjs_images/portfolio/portfolio-gun-008.jpg', alt: 'Kryptek Camo' },
    { id: 9, src: '/nextjs_images/portfolio/portfolio-gun-009.jpg', alt: 'Urban Tactical' },
  ];

  return (
    <section className="w-full bg-cover bg-center py-12 relative bg-[#639fa4] pt-0 pb-0"
             style={{
               borderTop: '8px solid #e2e6e9'  // Adding the top border
             }}
    >
      <div className="container mx-auto p-4 text-black text-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-10">
          {patternImages.map((image) => (
            <div key={image.id} className="h-48 rounded-none border-2 border-[#d3d9d2] overflow-hidden flex justify-center items-center" style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Image div */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamoPatterns;
