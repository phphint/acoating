import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

const GalleryCategories = () => {
  const categories = [
    {
      id: 1,
      imgSrc: '/media/popular-services/guns/firearm-engraving.png',
      title: '1911 Pistol',
      text: 'Our custom Cerakote coatings, precision laser engraving, and comprehensive gunsmithing services bring out the best in your pistols.',
    },
    {
      id: 2,
      imgSrc: '/media/popular-services/guns/glock-enhancements.png',
      title: 'Semi Auto',
      text: 'Elevate your semi-automatic firearms with expert Cerakote finishes, detailed engravings, and tailored gunsmithing for optimal performance.',
    },
    {
      id: 3,
      imgSrc: '/nextjs_images/revolver-gun.png',
      title: 'Revolver',
      text: 'Transform your revolver with stunning Cerakote coatings, custom engravings, and precision gunsmithing that enhances both form and function.',
    },
    {
      id: 4,
      imgSrc: '/media/popular-services/guns/ar-15-customization.png',
      title: 'AR Variant',
      text: 'Customize your AR variants with our specialized services including durable Cerakote coatings, unique engravings, and expert gunsmithing.',
    },
    {
      id: 5,
      imgSrc: '/media/popular-services/guns/ruger-10-22-customization.png',
      title: 'Bolt Rifle',
      text: 'Our services for bolt rifles include protective Cerakote finishes, personalized engravings, and professional gunsmithing for unmatched accuracy.',
    },
    {
      id: 6,
      imgSrc: '/media/popular-services/guns/shotgun-customization.png',
      title: 'Shotgun',
      text: 'Enhance your shotgun with our custom Cerakote applications, laser engraving services, and comprehensive gunsmithing for reliability and style.',
    },
    {
      id: 7,
      imgSrc: '/nextjs_images/guns/gunsmith-before/gunsmith-before.png', // Replace with the correct image path
      title: 'Gunsmithing',
      text: 'Expert gunsmithing services to maintain, repair, and enhance the performance of your firearms.',
    },
    {
      id: 8,
      imgSrc: '/nextjs_images/guns/lasre-engraving-3.png', // Replace with the correct image path
      title: 'Laser Engraving',
      text: 'Precision laser engraving to customize and personalize your firearm with unique designs.',
    },
    {
      id: 9,
      imgSrc: '/media/popular-services/guns/scopes.png', // Replace with the correct image path
      title: 'Scopes',
      text: 'High-quality scopes to improve the accuracy and range of your rifles and firearms.',
    }
  ];

  return (
    <section className="bg-[#678689] text-[#f1fffa] w-full">
      <div className="container mx-auto px-4 py-8">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(({ id, imgSrc, title, text }) => (
            <Link key={id} href={`/gallery/${title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
              <div className="flex flex-col items-start text-left p-4 mb-4 border-b border-dotted cursor-pointer" style={{ borderColor: '#85b5be' }}>
                <div className="w-full h-0 pb-[56.25%] relative mb-4"> {/* This creates a 16:9 aspect ratio */}
                  <Image src={imgSrc} alt={title} layout="fill" objectFit="contain" />
                </div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p>{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCategories;
