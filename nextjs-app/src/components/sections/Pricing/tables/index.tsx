import React from 'react';
import Pistol from './Pistol';
import SemiAuto from './SemiAuto';
import Revolver from './Revolver';
import ARVariant from './ARVariant';
import BoltRifle from './BoltRifle';
import Shotgun from './Shotgun';
import Gunsmithing from './Gunsmithing';
import Laser from './Laser';
 

const PricingTables = () => {
  return (
    <section className="w-full bg-[#678689] text-[#f1fffa] ">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Pistol />
        <SemiAuto />
        <Revolver />
        <ARVariant />
        <BoltRifle />
        <Shotgun />
        <Gunsmithing />
        <Laser />
       
      </div>
    </section>
  );
};

export default PricingTables;
