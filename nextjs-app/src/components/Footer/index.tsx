import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
  faShieldAlt,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; // Import the Link component
 
const Logo = () => (
  <Link href="/">
  
     <img src="/nextjs_images/logo-trans-white.png" alt="Logo" className="h-auto w-auto mb-3" />
    
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="pt-0 p-8 bg-[#151c1f]" style={{
      //  backgroundImage: 'url(/media/footer-bg.png)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        color: '#d7dfe3ff',
        boxShadow: 'inset 0 10px 8px -10px #000', // Top inner shadow
      }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 


        <div className="p-2 pt-8">
           <Logo /> {/* Add the logo component here */}

      

<ul>
    <li className="mb-3 flex items-center">
      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text[#d7dfe3ff]" />
      <a href="mailto:acoating@gmail.com" className="underline hover:text-gray-400">acoating@gmail.com</a>
    </li>
    <li className="mb-3 flex items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text[#d7dfe3ff]" />  Phoenix, AZ USA 
    </li>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faGlobe} className="mr-2 text[#d7dfe3ff]" />
      <Link href="/" className="underline hover:text-gray-400">
        www.acoating.com 
      </Link>
    </li>
</ul>

        </div>

        <div className="p-2 pt-8">
  <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff]">Our Services</h3>
  <p>From custom gun coatings to precise laser engravings, Acoating offers a range of services to enhance and personalize your firearms. Discover our expert craftsmanship.</p>
  <div className="mt-2 flex flex-wrap gap-2">
    <Link href="/services/cerakote-coating"  className="border border-[#d7dfe3] text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>
         Firearm Cerakote Coatings
     </Link>
    <Link href="/services/laser-engraving"  className="border border-[#d7dfe3] text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>
         Firearm Laser Engraving
     </Link>
    <Link href="/services/cerakote-coating/custom-airbrush-designs"  className="border border-[#d7dfe3] text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>
         Firearm Air Brushing
     </Link>
    <Link href="/services/gunsmithing"  className="border border-[#d7dfe3] text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>
         Gunsmith Services
   
    </Link>
  </div>
</div>


<div className="p-2 pt-8">
  <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff]">Why Choose Us?</h3>
  <p>Acoating stands out for our commitment to quality, innovation, and customer satisfaction. Experience the difference with our custom firearm services.</p>
  <p className="mt-3">Our skilled team uses high-quality materials and the latest technology for durable, aesthetic, and performance-enhancing firearm customizations tailored to your needs.</p>
  <Link href="/pricing" className="text-center block  mt-2 border border-[#7ac1bf] text-[#7ac1bf] rounded-none px-2 py-1 text-sm  ">
  See Pricing
</Link>

  
  </div>


    <div className="p-8" style={{ backgroundImage: `url('/nextjs_images/backgrounds/footer-col-bg.png')` }}>
      <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff] ">Popular </h3>
      <ul className="text-[#d7dfe3ff]">
  {/* For each list item, directly use the Link component without nested <a> tags */}
  {[
    { href: "/services/laser-engraving", icon: faShieldAlt, label: "Firearms Laser Engraving" },
    { href: "/services/cerakote-coating", icon: faPaintBrush, label: "Custom Cerakote Jobs" },
    { href: "/services/cerakote-coating/camouflage-patterns", icon: faShieldAlt, label: "Camo Cerakote for Guns" },
    { href: "/services/cerakote-coating/color-codes", icon: faShieldAlt, label: "Firearm Cerakote Colors" },
    { href: "/pricing", icon: faShieldAlt, label: "Firearm Cerakote Cost" },
    { href: "/services/cerakote-coating", icon: faShieldAlt, label: "Affordable Cerakote Services" },
    { href: "/services/cerakote-coating", icon: faShieldAlt, label: "Glock Pistol Cerakote" },
    { href: "/pricing", icon: faShieldAlt, label: "Gun Trigger Upgrade" },
    { href: "/services/gunsmithing", icon: faShieldAlt, label: "Gunsmith Services" },
    { href: "/services/1911-gunsmith", icon: faShieldAlt, label: " 1911/2011 Pistol Gunsmith" },
    { href: "/services/custom-remington-700", icon: faShieldAlt, label: "Remington 700 Gunsmith" },
  ].map((item, index) => (
    <li key={`${item.href}-${index}`} className="mb-3">
      <Link href={item.href} passHref>
        <div className="hover:text-gray-400 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={item.icon} className="mr-2 text-[#d7dfe3ff]" />
          {item.label}
        </div>
      </Link>
    </li>
  ))}
</ul>

    </div>


    <div className="col-span-1 lg:col-span-4 mt-4 border-t border-[#202a2e] pt-4 flex justify-between items-center">
  <p>&copy; {new Date().getFullYear()} Acoating. All rights reserved.</p>
  <div>
    <Link href="/privacy" passHref scroll={true}>
      <div className="inline-block hover:text-gray-400 text-sm mr-4 cursor-pointer">Privacy Policy</div>
    </Link>
    <Link href="/terms" passHref scroll={true}>
      <div className="inline-block hover:text-gray-400 text-sm cursor-pointer">Terms & Conditions</div>
    </Link>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
