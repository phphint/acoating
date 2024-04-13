import React from 'react';

const DurabilitySection: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-12"
      style={{ backgroundImage: `url('/nextjs_images/cerkote-page/cerekote-section-bg-2.png')` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white mb-2">Abrasion Resistance</h2>
            <p className="text-white">
              Cerakote coatings provide unparalleled abrasion resistance, ensuring your firearm withstands the test of time and use.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white mb-2">Corrosion Protection</h2>
            <p className="text-white">
              Protect your investment from rust and corrosion with Cerakote's superior chemical resistance properties.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white mb-2">UV Stability</h2>
            <p className="text-white">
              Maintain the vibrant color and finish of your firearm with Cerakote's excellent UV stability, even with prolonged exposure to sunlight.
            </p>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white mb-2">Chemical Resistance</h2>
            <p className="text-white">
              From oils to solvents, Cerakote coatings resist a wide range of chemicals, keeping your firearm looking pristine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DurabilitySection;
