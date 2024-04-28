import React, { useState, useEffect } from "react";
import Image from 'next/image'; // Import the Next.js Image component

const serviceLinks = [
  { title: "FireArm Engraving", imagePath: "1911-custom-engraving" },
  { title: "AR-15 Customization", imagePath: "ar-15-customization" },
  { title: "Glock Enhancements", imagePath: "glock-enhancements" },
  { title: "Remington 700", imagePath: "glock-17-aquamarine" },
  { title: "Ruger 10 22 Customization", imagePath: "ruger-1022-customization" },
  { title: "Sig Sauer P320 Customization", imagePath: "sig-sauer-p320-customization" },
  { title: "Smith & Wesson M&P Customization", imagePath: "smith-wesson-mp-customization" },
  { title: "AK-47 Variants Customization", imagePath: "ak-47-variants-customization" },
  { title: "Shotgun Customization", imagePath: "glock-enhancements" },
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
    <div className="w-full bg-no-repeat bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/section-bg.png')", minHeight: '30vh', maxHeight: '30vh', height: '30vh' }}>
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={`/nextjs_images/guns/${serviceLinks[currentSlide].imagePath}.png`}
          alt={serviceLinks[currentSlide].title}
          width={500}  // Setting a specific width
          height={300} // Setting a specific height
          objectFit="contain" // Ensures the entire image is visible, may add letterboxing
          priority // Loads the visible images first
        />
      </div>
    </div>
  );
};

export default Section1;
