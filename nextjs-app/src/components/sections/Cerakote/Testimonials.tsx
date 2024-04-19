import React from 'react';
import Link from 'next/link'; // Import the Link component

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-12"
      style={{ backgroundImage: `url('/nextjs_images/cerkote-page/cerkote-section-bg2.png')` }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Testimonials Column */}
          <div className="space-y-8">
            <div className="text-white mx-auto max-w-md">
              <p className="italic">&quot;Wow!!! what a beautiful job! Colors matched perfectly, my Beretta Cougar Inox looks better than the factory finish. As far as I&lsquo;m concerned you&lsquo;re the best certified Cerakote finisher around! I will be sending you more business all the way from PA. Thanks again.&quot;</p>
              <p className="font-bold mt-4">- Customer</p>
            </div>
            {/* Repeat for additional testimonials */}
          </div>
          
          {/* Cerakote Color Codes Column */}
          <div className="space-y-8">
            <div className="text-white mx-auto max-w-md">
              <p className="mb-4">Choose from a wide range of durable and vibrant Cerakote colors to customize your firearm exactly the way you want.</p>
              <div className="flex flex-wrap justify-center gap-2">
                {/* Example swatches */}
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                {/* More swatches */}
              </div>
              <Link href="/pricing/faq/shipping-instructions" passHref>
                <button className="text-white border-white border py-2 px-4 mt-4 hover:bg-white hover:text-black transition-colors">
                  See Cerakote Colors
                </button>
              </Link>
            </div>
          </div>

          {/* Ship Us Your Firearms Column */}
          <div className="space-y-8">
            <div className="text-white mx-auto max-w-md">
              <p className="mb-4">Ready to get your firearm coated? Ship it to us safely and securely to start the transformation.</p>
              <Link href="/pricing/faq/shipping-instructions" passHref>
                <button className="text-white border-white border py-2 px-4 mt-4 hover:bg-white hover:text-black transition-colors">
                  Ship Us Your Firearms
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
