// CTASection.tsx
import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Firearm?</h2>
      <p className="mb-8 mx-auto max-w-md">Discover the difference with our professional Cerakote coatings and precision firearm engraving services.</p>
      <Link href="/contact" passHref>
           Get Started
        
      </Link>
    </div>
  );
};

export default CTASection;
