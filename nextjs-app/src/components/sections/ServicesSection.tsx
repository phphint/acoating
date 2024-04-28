import React from 'react';
import Link from 'next/link';

interface ServiceColumnProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({ title, description, buttonText, link }) => {
  return (
    <div className="flex-1 p-4 text-[#d7dfe3]">
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="mb-4 text-left">{description}</p>
      <div className="text-center">
        <Link href={link} passHref>
          <button 
            className="bg-[#d7dfe3] text-[#2d3751] py-1 px-2 transition-colors duration-200 ease-in-out relative"
            style={{
              borderRadius: '0px',
              fontSize: '0.875rem',
              boxShadow: 'inset 2px 2px 5px #b1b8bc, inset -2px -2px 5px #ffffff',
              border: '1px solid #ccc'
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
    <section className="w-full py-8 mt-10 mb-10 shadow-xl bg-[rgba(0,0,0,0.80)]">
      <div className="container mx-auto p-4"
           style={{
             display: 'grid',
             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
             gridGap: '1rem'
           }}>
        <ServiceColumn 
          title="Firearm Cerakote Coating" 
          description="Elevate your firearm with a durable and vibrant Cerakote coating, tailored to your style." 
          buttonText="Explore Cerakote Coatings"
          link="/services/cerakote-coating"
        />
        <ServiceColumn 
          title="Firearm Laser Engraving" 
          description="Customize your firearm with precise and detailed laser engravings for a personal touch." 
          buttonText="View Laser Engraving Options"
          link="/services/laser-engraving"
        />
        <ServiceColumn 
          title="Gunsmith Services" 
          description="Expert gunsmith services to maintain, repair, or upgrade your firearm for optimal performance." 
          buttonText="Discover Gunsmith Services"
          link="/services/gunsmithing"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
