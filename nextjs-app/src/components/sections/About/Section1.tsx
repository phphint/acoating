import React, { useState, useEffect } from "react";

const serviceLinks = [
  { title: "FireArm Engraving", link: "/1911-custom-engraving" },
  { title: "AR-15 Customization", link: "/ar-15-customization" },
  { title: "Glock Enhancements", link: "/glock-enhancements" },
  { title: "Remington 700", link: "/remington-700" },
  { title: "Ruger 10 22 Customization", link: "/ruger-1022-customization" },
  { title: "Sig Sauer P320 Customization", link: "/sig-sauer-p320-customization" },
  { title: "Smith & Wesson M&P Customization", link: "/smith-wesson-mp-customization" },
  { title: "AK-47 Variants Customization", link: "/ak-47-variants-customization" },
  { title: "Shotgun Customization", link: "/shotgun-customization" },
];

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % serviceLinks.length); // Loop to the first slide after the last one
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentSlide]);

  return (
    <div className="w-full bg-no-repeat bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/section-bg.png')", minHeight: '22vh' }}>
      <div className="text-center">
        <img
          src={`/nextjs_images/guns/${serviceLinks[currentSlide].title.replace(/\s+/g, '-').toLowerCase()}.png`}
          alt={serviceLinks[currentSlide].title}
          className="mx-auto max-h-[27vh] object-contain" // This ensures the image is contained within the viewport height, adjusting as necessary
          style={{ maxWidth: "100%" }}
        />
        <button
          className="mb-10 mt-4 bg-[#0e2228] text-[#62787b] px-4 py-2 font-semibold   shadow-md hover:bg-[#0f2a30]"
          onClick={() => window.location.href = serviceLinks[currentSlide].link}>
          {serviceLinks[currentSlide].title}
        </button>
      </div>
    </div>
  );
};

export default Section1;
