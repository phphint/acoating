import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTruck } from '@fortawesome/free-solid-svg-icons';

const TopMenu: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-7 px-7 text-white bg-gradient-to-r from-[#33475f] via-[#33475f] 49% to-[#33475f]">
      <div>
        {/* Other content for your left side (optional) */}
      </div>
      <nav className="flex space-x-4 text-sm"> {/* Changed to text-sm for smaller font size */}
      <a href="/download-mail-in-form" className="flex items-center hover:text-gray-400"> {/* Link updated */}
          <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> Download Mail-in Form
        </a>
        <a href="/shipping-guidelines" className="flex items-center hover:text-gray-400"> {/* Link updated */}
          <FontAwesomeIcon icon={faTruck} className="mr-2" /> View Shipping Guidelines
        </a>
      </nav>
    </div>
  );
};

export default TopMenu;
