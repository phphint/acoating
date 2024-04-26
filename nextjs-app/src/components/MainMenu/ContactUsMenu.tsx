import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link from next/link

const ContactUsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to close the dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Remove when the component unmounts
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative cursor-pointer mx-4 text-white" ref={menuRef}>
      <div
        className={`px-4 py-2 flex items-center justify-between ${isOpen ? 'bg-[#111a1d]' : ''}`}
        onClick={toggleDropdown}
      >
        Contact
      </div>
      <div className={`absolute left-0 bg-[#111a1d] shadow-md py-2 ${isOpen ? 'block' : 'hidden'} w-96`}>
        {/* Direct use of 'a' tag for external link */}
        <a href="mailto:acoating@gmail.com" className="block px-4 py-2 hover:bg-gray-700 flex items-center">
          <i className="fas fa-envelope mr-2"></i>Email Us
        </a>
        {/* Corrected Next.js Link usage */}
        <Link href="/mail-in-form/printable-form" passHref>
          <div className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            ↳ Download Order Form
          </div>
        </Link>
        <Link href="/pricing/faq/shipping-instructions" passHref>
          <div className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            ↳ Shipping Guidelines
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsMenu;
