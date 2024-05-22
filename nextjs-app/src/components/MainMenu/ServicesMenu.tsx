import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import the Link component

const ServicesMenu: React.FC = () => {
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
        Services
      </div>
      <div className={`absolute left-0 bg-[#111a1d] shadow-md py-2 ${isOpen ? 'block' : 'hidden'} w-96`}>

        <Link href="/services/cerakote-coating" className="block px-4 py-2 hover:bg-gray-700">Cerakote Coating</Link>
        <Link href="/services/cerakote-coating/color-codes" className="block px-8 py-2 hover:bg-gray-700">↳ Color Codes</Link>
        <Link href="/services/cerakote-coating/camouflage-patterns" className="block px-8 py-2 hover:bg-gray-700">↳ Camouflage Patterns</Link>
        <Link href="/services/cerakote-coating/firearm-airbrushing" className="block px-8 py-2 hover:bg-gray-700">↳ Custom Airbrushing</Link>

        <Link href="/services/laser-engraving" className="block px-4 py-2 hover:bg-gray-700">Laser Engraving</Link>

        <Link href="/services/gunsmithing" className="block px-4 py-2 hover:bg-gray-700">Gunsmithing Services</Link>
        <Link href="/testimonials" className="block px-4 py-2 hover:bg-gray-700">Testimonials</Link>

      </div>
    </div>
  );
};

export default ServicesMenu;
