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
      
      {/* Responsive padding for the container */}
      <div className="container custom-container mx-auto px-0 sm:px-2 xl:px-2 pt-20">

      <div className="bg-[#bc651d] border-l-4 border-yellow-500 text-[#ffc9aa] p-4 mb-10"  role="alert">
          <p className="font-bold">Notice</p>
          <p>DIY disassembled parts are accepted. (Note: DIY disassembled items will not be reassembled.) Please list all components included in your shipment for coating.
</p>
        </div>

 
        {/* Responsive grid for items */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-2">
          <div> {/* Column 1 */}
            <Pistol />
            <Shotgun />
            <Gunsmithing />
            <Automotive />
          </div>
          <div> {/* Column 2 */}
            <SemiAuto />
            <Revolver />
            <Laser />
            <Tumblers />
          </div>
          <div> {/* Column 3, only visible on larger screens */}
            <ARVariant />
            <BoltRifle />
            <Optics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
