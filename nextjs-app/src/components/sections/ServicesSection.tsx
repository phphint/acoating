import React from 'react';

interface ServiceColumnProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({ title, description, buttonText }) => {
  return (
    <div className="flex-1 p-4 text-[#d7dfe3]">
      <h3 className="text-xl font-bold mb-2 text-center text-[#d7dfe3]">{title}</h3>
      <p className="mb-4 text-left text-[#d7dfe3]">{description}</p>
      <div className="text-center">
        <button className="bg-[#d7dfe3] text-[#2d3751] py-1 px-2 transition-colors duration-200 ease-in-out" style={{ borderRadius: '0', fontSize: '0.875rem' }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-8 mt-10 mb-10   shadow-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 "  > {/* Updated background color here */}
        <ServiceColumn 
          title="Firearm Cerakote Coating" 
          description="Elevate your firearm with a durable and vibrant Cerakote coating, tailored to your style." 
          buttonText="Explore Cerakote Coatings"
        />
        <ServiceColumn 
          title="Firearm Laser Engraving" 
          description="Customize your firearm with precise and detailed laser engravings for a personal touch." 
          buttonText="View Laser Engraving Options"
        />
        <ServiceColumn 
          title="Gunsmith Services" 
          description="Expert gunsmith services to maintain, repair, or upgrade your firearm for optimal performance." 
          buttonText="Discover Gunsmith Services"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
