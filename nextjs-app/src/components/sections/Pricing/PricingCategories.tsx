// PricingCategories.tsx
import Image from 'next/image';

const PricingCategories = () => {
  const categories = [
    {
      id: 1,
      imgSrc: '/media/popular-services/guns/firearm-engraving.png', // Update with your image path
      title: 'Pistol',
      text: 'Our custom Cerakote coatings, precision laser engraving, and comprehensive gunsmithing services bring out the best in your pistols.',
    },
    {
      id: 2,
      imgSrc: '/media/popular-services/guns/glock-enhancements.png', // Update with your image path
      title: 'Semi Auto',
      text: 'Elevate your semi-automatic firearms with expert Cerakote finishes, detailed engravings, and tailored gunsmithing for optimal performance.',
    },
    {
      id: 3,
      imgSrc: '/media/pricing/revolver-gun.png', // Update with your image path
      title: 'Revolver',
      text: 'Transform your revolver with stunning Cerakote coatings, custom engravings, and precision gunsmithing that enhances both form and function.',
    },
    {
      id: 4,
      imgSrc: '/media/popular-services/guns/ar-15-customization.png', // Update with your image path
      title: 'AR Variant',
      text: 'Customize your AR variants with our specialized services including durable Cerakote coatings, unique engravings, and expert gunsmithing.',
    },
    {
      id: 5,
      imgSrc: '/media/popular-services/guns/ruger-10-22-customization.png', // Update with your image path
      title: 'Bolt Rifle',
      text: 'Our services for bolt rifles include protective Cerakote finishes, personalized engravings, and professional gunsmithing for unmatched accuracy.',
    },
    {
      id: 6,
      imgSrc: '/media/popular-services/guns/shotgun-customization.png', // Update with your image path
      title: 'Shotgun',
      text: 'Enhance your shotgun with our custom Cerakote applications, laser engraving services, and comprehensive gunsmithing for reliability and style.',
    },
  ];

  return (
<section className="bg-[#678689] text-[#f1fffa] w-full">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map(({ id, imgSrc, title, text }) => (
        <div key={id} className="flex flex-col items-start text-left p-4 mb-4 border-b border-dotted" style={{borderColor: '#85b5be'}}>
          {/* Ensure the parent div of Image has a defined height or aspect ratio */}
          <div className="w-full h-0 pb-[56.25%] relative mb-4"> {/* This creates a 16:9 aspect ratio */}
            <Image src={imgSrc} alt={title} layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl mb-2">{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>




  );
};

export default PricingCategories;
