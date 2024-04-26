// SecondRow.tsx
import React from 'react';
import Link from 'next/link';

const SecondRow: React.FC = () => {
  return (
    <div className="bg-[#306069] text-white text-center py-12">
      <div className="container mx-auto px-4">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
          <p className="font-bold">Maintenance Notice</p>
          <p>
            Our color code section is currently down for maintenance.    
            <Link href="/cerakote-colors/cerakote-color-charts" className="underline" passHref>
            Please check our website archive to view Cerakote color codes.
            </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
