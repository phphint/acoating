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

const Logo = () => <img src="/logo-trans-white.png" alt="Logo" className="h-auto w-auto mb-3" />;


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
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text[#d7dfe3ff]" /> acoating@gmail.com
            </li>
            <li className="mb-3 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text[#d7dfe3ff]" /> Phoenix, AZ USA
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text[#d7dfe3ff]" />
              <a href="https://www.acoating.com" className="underline hover:text-gray-400">www.acoating.com</a>
            </li>
          </ul>
        </div>

        <div className="p-2 pt-8">
  <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff]">Our Services</h3>
  <p>From custom gun coatings to precise laser engravings, Acoating offers a range of services to enhance and personalize your firearms. Discover our expert craftsmanship.</p>
  <div className="mt-2 flex flex-wrap gap-2">
  <span className="border border-[#d7dfe3]   text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>Firearm Cerakote Coatings</span>
<span className="border border-[#d7dfe3]   text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>Firearm Laser Engraving</span>
 <span className="border border-[#d7dfe3]   text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}>Firearm Air Brushing</span>
<span className="border border-[#d7dfe3]  text-[#d7dfe3] rounded-none px-2 py-1 text-sm cursor-pointer hover:bg-[#171818]" style={{borderColor: '#d7dfe3'}}> Gunsmith Services</span>

  </div>
</div>


<div className="p-2 pt-8">
  <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff]">Why Choose Us?</h3>
  <p>Acoating stands out for our commitment to quality, innovation, and customer satisfaction. Experience the difference with our custom firearm services.</p>
  <p className="mt-3">Our skilled team uses high-quality materials and the latest technology for durable, aesthetic, and performance-enhancing firearm customizations tailored to your needs.</p>
  <Link href="/contact" className="text-center block w-full mt-2 border border-[#7ac1bf] text-[#7ac1bf] rounded-none px-2 py-1 text-sm hover:bg-[#f7201d] hover:text-white">
  See Pricing
</Link>

  
  </div>


    <div className="p-8" style={{ backgroundImage: `url('/media/footer-col-bg.png')` }}>
      <h3 className="font-bold text-lg mb-4 text[#d7dfe3ff] ">Popular Services</h3>
      <ul className="text-[#d7dfe3ff]">
  {/* For each list item, directly use the Link component without nested <a> tags */}
  {[
    { href: "/services/1911-custom-engraving", icon: faShieldAlt, label: "1911 Custom Engraving" },
    { href: "/services/ar-15-customization", icon: faPaintBrush, label: "AR-15 Customization" },
    { href: "/services/glock-enhancements", icon: faShieldAlt, label: "Glock Enhancements" },
    { href: "/services/remington-700", icon: faShieldAlt, label: "Remington 700" },
    { href: "/services/ruger-10-22-customization", icon: faShieldAlt, label: "Ruger 10/22 Customization" },
    { href: "/services/sig-sauer-p320-customization", icon: faShieldAlt, label: "Sig Sauer P320 Customization" },
    { href: "/services/smith-wesson-mp-customization", icon: faShieldAlt, label: "Smith & Wesson M&P Customization" },
    { href: "/services/ak-47-variants-customization", icon: faShieldAlt, label: "AK-47 Variants Customization" },
    { href: "/services/shotgun-customization", icon: faShieldAlt, label: "Shotgun Customization" },
  ].map((item) => (
    <li key={item.href} className="mb-3">
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
    <Link href="/privacy" passHref>
      <div className="inline-block hover:text-gray-400 text-sm mr-4 cursor-pointer">Privacy Policy</div>
    </Link>
    <Link href="/terms" passHref>
      <div className="inline-block hover:text-gray-400 text-sm cursor-pointer">Terms & Conditions</div>
    </Link>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
