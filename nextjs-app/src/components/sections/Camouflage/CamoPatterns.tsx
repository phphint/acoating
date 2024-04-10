import React from 'react';

const CamoPatterns = () => {
  const patternImages = [
    { id: 1, src: '/nextjs_images/portfolio/portfolio-gun-001.jpg', alt: 'Acu' },
    { id: 2, src: '/nextjs_images/portfolio/portfolio-gun-002.jpg', alt: 'Advanced Amstripe' },
    { id: 3, src: '/nextjs_images/portfolio/portfolio-gun-003.jpg', alt: 'Advanced Tigerstripe' },
    { id: 4, src: '/nextjs_images/portfolio/portfolio-gun-004.jpg', alt: 'Afghan' },
    { id: 5, src: '/nextjs_images/portfolio/portfolio-gun-005.jpg', alt: 'Airforceabu' },
    { id: 6, src: '/nextjs_images/portfolio/portfolio-gun-006.jpg', alt: 'Amstripe' },
    { id: 7, src: '/nextjs_images/portfolio/portfolio-gun-007.jpg', alt: 'Arctic Mirageflage' },
    { id: 8, src: '/nextjs_images/portfolio/portfolio-gun-008.jpg', alt: 'Barbed Wire' },
    { id: 9, src: '/nextjs_images/portfolio/portfolio-gun-009.jpg', alt: 'Belgian' },
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
      </div>
    </section>
  );
};

export default CamoPatterns;
