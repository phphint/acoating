import React from "react";

const Services = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        {/* View All Services Button */}
        <button className="mb-8 bg-[#26190a] text-white py-2 px-6 transition-colors hover:bg-[#3a2517]">
          View All Services
        </button>
        {/* First set of two services */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Cerakote Coating */}
          <div className="bg-[#332212] shadow-md relative">
            <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg1-2.png')" }}>
              {/* Overlay PNG Image */}
              <img src="/nextjs_images/guns/cerkote-coatings.png" alt="Cerakote Coating" className="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="p-4">
              <h3 className="text-[#b8bab9] text-lg font-semibold mb-2">Firearm Cerakote Coating</h3>
              <p className="text-[#7a7363]">Explore our premium Cerakote coating services for unmatched durability and a custom finish.</p>
            </div>
          </div>
          {/* Gunsmithing */}
          <div className="bg-[#332212] shadow-md relative">
            <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg2-2.png')" }}>
              {/* Overlay PNG Image */}
              <img src="/nextjs_images/guns/gunsmithing.png" alt="Gunsmithing" className="   " style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Gunsmithing</h3>
              <p className="text-[#7a7363]">Professional gunsmithing services tailored to your needs, ensuring performance and reliability.</p>
            </div>
          </div>
        </div>
        {/* Second set of two services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Laser Engraving */}
          <div className="bg-[#332212] shadow-md relative">
            <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/intro-bg-2.png')" }}>
              {/* Overlay PNG Image */}
              <img src="/nextjs_images/guns/firearm-engraving.png" alt="Laser Engraving" className=" " style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Firearm Laser Engraving</h3>
              <p className="text-[#7a7363]">Add a personal touch with our precise laser engraving services for firearms and accessories.</p>
            </div>
          </div>
          {/* Custom Airbrush Designs */}
          <div className="bg-[#332212] shadow-md relative">
            <div className="h-48 bg-cover bg-center relative flex justify-center items-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/card-bg3-2.png')" }}>
              {/* Overlay PNG Image */}
              <img src="/media/popular-services/guns/custom-airbrush.png" alt="Custom Airbrush Designs" className="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-[#b8bab9] font-semibold mb-2">Custom Firearm Airbrush Designs</h3>
              <p className="text-[#7a7363]">Stand out with custom airbrush designs, offering unique patterns and artistic finishes for your firearm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
