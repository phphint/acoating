import React from "react";
import Link from 'next/link'; // Ensure to import the Link component at the top of your file

const Services = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        {/* View All Services Button */}
        <Link href="/pricing" passHref className="text-center bg-[#26190a] text-white py-2 px-6 transition-colors hover:bg-[#3a2517]">
  View Service Pricing 
        </Link>
        {/* First set of two services */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 mt-10">
          {/* Cerakote Coating */}
          <Link href="/services/cerakote-coating" passHref>
          
              <div className="bg-[#332212] shadow-md relative">
                <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg1-2.png')" }}>
                  <img src="/nextjs_images/guns/cerkote-coatings.png" alt="Cerakote Coating" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
                <div className="p-4">
                  <h3 className="text-[#b8bab9] text-lg font-semibold mb-2">Firearm Cerakote Coating</h3>
                  <p className="text-[#7a7363]">Explore our premium Cerakote coating services for unmatched durability and a custom finish.</p>
                </div>
              </div>
          
          </Link>
          {/* Gunsmithing */}
          <Link href="/services/gunsmithing" passHref>
     
              <div className="bg-[#332212] shadow-md relative">
                <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg2-2.png')" }}>
                  <img src="/nextjs_images/guns/gunsmithing.png" alt="Gunsmithing" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Gunsmithing</h3>
                  <p className="text-[#7a7363]">Professional gunsmithing services tailored to your needs, ensuring performance and reliability.</p>
                </div>
              </div>
          
          </Link>
        </div>
        {/* Second set of two services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Laser Engraving */}
          <Link href="/services/laser-engraving" passHref>
      
              <div className="bg-[#332212] shadow-md relative">
                <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/intro-bg-2.png')" }}>
                  <img src="/nextjs_images/guns/1911-custom-engraving.png" alt="Laser Engraving" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Firearm Laser Engraving</h3>
                  <p className="text-[#7a7363]">Add a personal touch with our precise laser engraving services for firearms and accessories.</p>
                </div>
              </div>
          
          </Link>
          {/* Custom Airbrush Designs */}
          <Link href="/services/cerakote-coating/custom-airbrush-designs" passHref>
         
              <div className="bg-[#332212] shadow-md relative">
                <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg3-2.png')" }}>
                  <img src="/media/popular-services/guns/ar-15-customization.png" alt="Custom Airbrush Designs" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Custom Firearm Airbrush Designs</h3>
                  <p className="text-[#7a7363]">Stand out with custom airbrush designs, offering unique patterns and artistic finishes for your firearm.</p>
                </div>
              </div>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
