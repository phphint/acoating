// DropdownMenu.tsx

import React, { useState } from 'react';

interface DropdownMenuProps {
  title: string;
  children?: React.ReactNode; // Making 'children' optional

}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen); // Add this line for debugging


  // Toggle dropdown on hover
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-4 py-2 hover:bg-gray-700">{title}</div>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-md">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
