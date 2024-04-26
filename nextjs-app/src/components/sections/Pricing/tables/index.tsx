import React from 'react';
import Pistol from './Pistol';
import SemiAuto from './SemiAuto';
import Revolver from './Revolver';
import ARVariant from './ARVariant';
import BoltRifle from './BoltRifle';
import Shotgun from './Shotgun';
import Gunsmithing from './Gunsmithing';
import Laser from './Laser';
import Optics from './Optics';
import Tumblers from './Tumblers';
import Automotive from './Automotive';

const PricingTables = () => {
  return (
    <section className="w-full bg-[#678689] text-[#f1fffa] mt-0 pt-0">
      <div className="container mx-auto p-6">
        {/* Main grid for most items, except Automotive which is full width */}
        <div className="grid grid-cols-3 gap-4">
          <div> {/* Column 1 */}
            <Pistol />
            <Shotgun />
            <Gunsmithing />
          </div>
          <div> {/* Column 2 */}
            <SemiAuto />
            <Revolver />
            <Laser />
          </div>
          <div> {/* Column 3 */}
            <ARVariant />
            <BoltRifle />
            <Optics />
          </div>
        </div>
        {/* Separate row for Automotive to span full width */}
        <div className="w-full mt-4">
          <Automotive />
        </div>
        {/* Additional items could be here if needed */}
        <div className="w-full mt-4">
          <Tumblers />
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
