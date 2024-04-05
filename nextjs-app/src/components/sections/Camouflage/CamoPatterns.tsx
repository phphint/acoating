import React from 'react';
import Image from 'next/image';

const CamoPatterns = () => {
  // Define the images for the patterns here
  const patternImages = [
    { id: 1, src: '/media/services/camo-patterns-trans-bg/ACU-removebg-preview.png', alt: 'Acu' },
    { id: 2, src: '/media/services/camo-patterns-trans-bg/ADVANCED_AMSTRIPE-removebg-preview.png', alt: 'Advanced Amstripe' },
    { id: 3, src: '/media/services/camo-patterns-trans-bg/ADVANCED_TIGERSTRIPE-removebg-preview.png', alt: 'Advanced Tigerstripe' },
    { id: 4, src: '/media/services/camo-patterns-trans-bg/AFGHAN-removebg-preview.png', alt: 'Afghan' },
    { id: 5, src: '/media/services/camo-patterns-trans-bg/AIRFORCEABU-removebg-preview.png', alt: 'Airforceabu' },
    { id: 6, src: '/media/services/camo-patterns-trans-bg/AMSTRIPE-removebg-preview.png', alt: 'Amstripe' },
    { id: 7, src: '/media/services/camo-patterns-trans-bg/ARCTIC_MIRAGEFLAGE-removebg-preview.png', alt: 'Arctic Mirageflage' },
    { id: 8, src: '/media/services/camo-patterns-trans-bg/BARBED_WIRE-removebg-preview.png', alt: 'Barbed Wire' },
    { id: 9, src: '/media/services/camo-patterns-trans-bg/BELGIAN-removebg-preview.png', alt: 'Belgian' },
    { id: 10, src: '/media/services/camo-patterns-trans-bg/BENGAL-removebg-preview.png', alt: 'Bengal' },
    { id: 11, src: '/media/services/camo-patterns-trans-bg/BLAZECAMO-removebg-preview.png', alt: 'Blazecamo' },
    { id: 12, src: '/media/services/camo-patterns-trans-bg/BRITISHDPM-removebg-preview.png', alt: 'Britishdpm' },
    { id: 13, src: '/media/services/camo-patterns-trans-bg/CADPAT-removebg-preview.png', alt: 'Cadpat' },
    { id: 14, src: '/media/services/camo-patterns-trans-bg/CHAIN_LINK-removebg-preview.png', alt: 'Chain Link' },
    { id: 15, src: '/media/services/camo-patterns-trans-bg/CZECHREPUBLIC-removebg-preview.png', alt: 'Czechrepublic' },
    { id: 16, src: '/media/services/camo-patterns-trans-bg/DESERTDPM-removebg-preview.png', alt: 'Desertdpm' },
    { id: 17, src: '/media/services/camo-patterns-trans-bg/DESERTMIRAGEFLAGE-removebg-preview.png', alt: 'Desertmirageflage' },
    { id: 18, src: '/media/services/camo-patterns-trans-bg/DESERTSTORM-removebg-preview.png', alt: 'Desertstorm' },
    { id: 19, src: '/media/services/camo-patterns-trans-bg/DIAMOND_PLATE-removebg-preview.png', alt: 'Diamond Plate' },
    { id: 20, src: '/media/services/camo-patterns-trans-bg/DIAMOND_PLATE_STEALTH-removebg-preview.png', alt: 'Diamond Plate Stealth' },
    { id: 21, src: '/media/services/camo-patterns-trans-bg/EASTGERMAN-removebg-preview.png', alt: 'Eastgerman' },
    { id: 22, src: '/media/services/camo-patterns-trans-bg/EGYPTARMY-removebg-preview.png', alt: 'Egyptarmy' },
    { id: 23, src: '/media/services/camo-patterns-trans-bg/FLAME-removebg-preview.png', alt: 'Flame' },
    { id: 24, src: '/media/services/camo-patterns-trans-bg/FRENCHARMY-removebg-preview.png', alt: 'Frencharmy' },
    { id: 25, src: '/media/services/camo-patterns-trans-bg/GERMANFLECKTARN-removebg-preview.png', alt: 'German Flecktarn' },
    { id: 26, src: '/media/services/camo-patterns-trans-bg/GODDESS_AMSTRIPE-removebg-preview.png', alt: 'Goddess Amstripe' },
    { id: 27, src: '/media/services/camo-patterns-trans-bg/LADY_AMSTRIPE-removebg-preview.png', alt: 'Lady Amstripe' },
    { id: 28, src: '/media/services/camo-patterns-trans-bg/MARSH-removebg-preview.png', alt: 'Marsh' },
    { id: 29, src: '/media/services/camo-patterns-trans-bg/MULTICOLOR-removebg-preview.png', alt: 'Multicolor' },
    { id: 30, src: '/media/services/camo-patterns-trans-bg/NAVYNWD-removebg-preview.png', alt: 'Navynwd' },
    { id: 31, src: '/media/services/camo-patterns-trans-bg/NORWEGIANARMY-removebg-preview.png', alt: 'Norwegianarmy' },
    { id: 32, src: '/media/services/camo-patterns-trans-bg/PREDATORFALLGRAY-removebg-preview.png', alt: 'Predatorfallgray' },
    { id: 33, src: '/media/services/camo-patterns-trans-bg/RAZOR_WIRE-removebg-preview.png', alt: 'Razor Wire' },
    { id: 34, src: '/media/services/camo-patterns-trans-bg/RHODESIAN-removebg-preview.png', alt: 'Rhodesian' },
    { id: 35, src: '/media/services/camo-patterns-trans-bg/RUSSIANARMY-removebg-preview.png', alt: 'Russianarmy' },
    { id: 36, src: '/media/services/camo-patterns-trans-bg/RUSSIANSPECIALFORCES-removebg-preview.png', alt: 'Russianspecialforces' },
    { id: 37, src: '/media/services/camo-patterns-trans-bg/SIGNATURE_SNOW-removebg-preview.png', alt: 'Signature Snow' },
    { id: 38, src: '/media/services/camo-patterns-trans-bg/SKULLS-removebg-preview.png', alt: 'Skulls' },
    { id: 39, src: '/media/services/camo-patterns-trans-bg/SOUTHAFRICAN-removebg-preview.png', alt: 'Southafrican' },
    { id: 40, src: '/media/services/camo-patterns-trans-bg/SOUTHERN_VIPER-removebg-preview.png', alt: 'Southern Viper' },
    { id: 41, src: '/media/services/camo-patterns-trans-bg/SWISSARMY-removebg-preview.png', alt: 'Swissarmy' },
    { id: 42, src: '/media/services/camo-patterns-trans-bg/THAILANDMARINE-removebg-preview.png', alt: 'Thailandmarine' },
    { id: 43, src: '/media/services/camo-patterns-trans-bg/TRIBAL-removebg-preview.png', alt: 'Tribal' },
    { id: 44, src: '/media/services/camo-patterns-trans-bg/UNDERBRUSH-removebg-preview.png', alt: 'Underbrush' },
    { id: 45, src: '/media/services/camo-patterns-trans-bg/URBAN-removebg-preview.png', alt: 'Urban' },
    { id: 46, src: '/media/services/camo-patterns-trans-bg/URBANMIRAGEFLAGE-removebg-preview.png', alt: 'Urbanmirageflage' },
    { id: 47, src: '/media/services/camo-patterns-trans-bg/VIETNAMTIGERSTRIPE-removebg-preview.png', alt: 'Vietnamtigerstripe' },
    { id: 48, src: '/media/services/camo-patterns-trans-bg/WILDERNESSMIRAGEFLAGE-removebg-preview.png', alt: 'Wildernessmirageflage' },
    { id: 49, src: '/media/services/camo-patterns-trans-bg/WINTERTWIG-removebg-preview.png', alt: 'Wintertwig' },
    { id: 50, src: '/media/services/camo-patterns-trans-bg/WOODLANDPRESTIGE-removebg-preview.png', alt: 'Woodlandprestige' },
    { id: 51, src: '/media/services/camo-patterns-trans-bg/WOODLAND_SIGNATURE-removebg-preview.png', alt: 'Woodland Signature' },
    { id: 52, src: '/media/services/camo-patterns-trans-bg/ZOMBIE_COAT_C-removebg-preview.png', alt: 'Zombie Coat C' },
  ];

  return (
<section className="w-full bg-cover bg-center py-12 relative" style={{ backgroundImage: `url('/media/blue-faded-bg.png')` }}>
 
  <div className="container mx-auto p-4 text-white text-center pt-0">
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8  " role="alert">
      <p><strong>Cerakote H-Series</strong> (baked on) has the highest wear test results among all coatings. <strong>Cerakote C-SERIES</strong> (air dry) is available for use on plastics, wood, scopes, etc. If you plan on using CeraKote,  it requires a heat resistant pattern and not all camouflage patterns shown below are available in a heat resistant pattern.</p>
    </div>
  <h3 className="text-3xl font-bold mb-4">Cerkote Firearm Camo Stencil Kit Option</h3>
    <p className="mb-8 text-white">Below are our camo stencil kits available for special orders. These stencils are perfect for those seeking unique customization with additional costs for unique or complex designs. Shown below are the standard camouflage patterns available. As with the solid colors you can combine different colors on the same gun.  You are not limited to the patterns shown below, the possible color combination&lsquo;s are limited only by your imagination. For example: You could order the Urban camouflage pattern and use the Woodland camouflage colors.  
</p>
    {/* Map through stencil kit images here if available or provide a general informational section */}    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {patternImages.map((image) => (
        <div key={image.id} className="bg-[#a4d4df] p-4 rounded-md shadow-lg">
          <div className="w-full h-48 relative">
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="contain" className="rounded-md" />
          </div>
        </div>
      ))}
    </div>
  
  </div>
</section>

  );
};

export default CamoPatterns;
