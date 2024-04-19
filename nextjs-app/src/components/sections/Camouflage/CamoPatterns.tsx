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

  // Define custom styles for text shadows
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Example shadow: horizontal, vertical, blur, color
  };

  return (
    <section className="w-full bg-cover bg-center py-12 relative " style={{ backgroundImage: `url('/nextjs_images/backgrounds/blue-faded-bg-1.png')` }}>
      <div className="container mx-auto p-4 text-black text-center ">
        {/* Apply custom text shadow style to h3 and p tags */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-10">
          {patternImages.map((image) => (
            <div key={image.id} className="h-48 p-4 rounded-md shadow-lg flex justify-center items-center" style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Optional: Apply custom text shadow style if needed */}
              <span className="text-white text-sm" style={textShadowStyle}>{image.alt}</span>
            </div>
          ))}
        </div>
        <p className="text-white text-base">Popular Cerakote camo options include military-inspired patterns like MultiCam, MultiCam Black, AOR (Area of Responsibility) variants, and Kryptek. Hunters often choose Obscure Camo, TrueTimber, Blaze Orange/Pink integrated patterns, or season-specific camo like Realtree or Sitka. Tactical applications might favor Urban Tactical Camo, Multi-environment Camo, or FDE/Sniper Grey finishes. For a unique look, consider custom combinations of solid Cerakote colors and stencils.</p>

      </div>
    </section>
  );
};

export default CamoPatterns;
