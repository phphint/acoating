import React from 'react';

const SeoTextSection = () => {
  return (
    <div className="container mx-auto px-4 mb-10" style={{ backgroundColor: '#8c8b8a', color: '#0f0e0d', minHeight: '300px' }}>
      {/* Changed from justify-center items-center text-center to justify-start items-start text-left */}
      <div className="flex flex-col justify-start items-start text-left ml-10 mr-10">
        <h1 className="text-4xl font-bold mb-4 mt-10">Affordable Cerakote Services</h1>
        <p className="mb-6">
          Discover top-quality Cerakote services at competitive prices. Our affordable Cerakote coatings provide superior durability and performance, ensuring your firearms are protected in style without breaking the bank. Whether you're a professional shooter or a firearm enthusiast, our services are designed to offer the best value for your investment.
        </p>
        <p>
          Explore our range of Cerakote applications—from tactical and camouflage to decorative finishes. Our expert team ensures precise application, giving your firearms a lasting finish that resists wear, corrosion, and fading. Trust us to enhance the aesthetics and functionality of your gear with our industry-leading techniques and materials.
        </p>
      </div>
    </div>
  );
};

export default SeoTextSection;
