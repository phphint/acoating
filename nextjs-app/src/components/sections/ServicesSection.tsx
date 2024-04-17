import React from 'react';
import Link from 'next/link';

interface ServiceColumnProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;  // Add a link prop to pass the URL
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({ title, description, buttonText, link }) => {
  return (
    <div className="flex-1 p-4 text-[#d7dfe3]">
      <h3 className="text-xl font-bold mb-2 text-center text-[#d7dfe3]">{title}</h3>
      <p className="mb-4 text-left text-[#d7dfe3]">{description}</p>
      <div className="text-center">
      <Link href={link} passHref>  {/* Use the link prop here */}
  <button 
    className="bg-[#d7dfe3] text-[#2d3751] py-1 px-2 transition-colors duration-200 ease-in-out relative"
    style={{
      borderRadius: '0px',  // Slightly rounded corners for a more pronounced bevel effect
      fontSize: '0.875rem',
      boxShadow: 'inset 2px 2px 5px #b1b8bc, inset -2px -2px 5px #ffffff',  // Inner shadow for depth
      border: '1px solid #ccc'  // Optional: subtle border can enhance the bevel effect
    }}
  >
    {buttonText}
  </button>
</Link>

      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-8 mt-10 mb-10 shadow-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 ">
        <ServiceColumn 
          title="Firearm Cerakote Coating" 
          description="Elevate your firearm with a durable and vibrant Cerakote coating, tailored to your style." 
          buttonText="Explore Cerakote Coatings"
          link="/services/cerakote-coating"  // Define the correct link for navigation
        />
        <ServiceColumn 
          title="Firearm Laser Engraving" 
          description="Customize your firearm with precise and detailed laser engravings for a personal touch." 
          buttonText="View Laser Engraving Options"
          link="/services/laser-engraving"  // Define the correct link for navigation
        />
        <ServiceColumn 
          title="Gunsmith Services" 
          description="Expert gunsmith services to maintain, repair, or upgrade your firearm for optimal performance." 
          buttonText="Discover Gunsmith Services"
          link="/services/gunsmithing"  // Define the correct link for navigation
        />
      </div>
    </section>
  );
};

export default ServicesSection;
