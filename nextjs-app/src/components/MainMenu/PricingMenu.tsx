import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link from next/link

const PricingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative cursor-pointer mx-4 text-white" ref={menuRef}>
      <div
        className={`px-4 py-2 flex items-center justify-between ${isOpen ? 'bg-[#111a1d]' : ''}`}
        onClick={toggleDropdown}
      >
        Pricing
      </div>
      <div className={`absolute left-0 bg-[#111a1d] shadow-md py-2 ${isOpen ? 'block' : 'hidden'} w-96`}>
        
      
     {/* Updated Links with the new items */}
     <Link href="/pricing" className="block px-8 py-2 hover:bg-gray-700"> ↳ Service Rates</Link>
    
 

        {/* FAQ Section */}
        <div className="px-4 py-2 text-gray-400">FAQ</div> {/* Kept as a section header */}
        <Link href="/pricing/faq/turnaround-time" className="block px-8 py-2 hover:bg-gray-700">↳ Turnaround Time</Link>
        <Link href="/pricing/faq/shipping-instructions" className="block px-8 py-2 hover:bg-gray-700">↳ Shipping Instructions</Link>
        <Link href="/pricing/faq/warranty-information" className="block px-8 py-2 hover:bg-gray-700">↳ Warranty Information</Link>
        <Link href="/pricing/faq/post-service-care" className="block px-8 py-2 hover:bg-gray-700">↳ Post-Service Care</Link>
         
      </div>
    </div> 
  );
};
 
export default PricingMenu;
