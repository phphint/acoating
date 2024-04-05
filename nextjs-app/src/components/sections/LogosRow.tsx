import React from 'react';

const LogosRow: React.FC = () => {
  return (
    <div className="container mx-auto px-4 my-6" style={{ minHeight: '10vh' }}>
      <div className="flex items-center justify-between gap-4 h-full py-4"> {/* Added py-4 for additional vertical padding */}
        <img src="/media/brands-logos/Beretta_logo.svg" alt="Beretta Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/Colt_logo.svg" alt="Colt Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/Daniel_Defense_Logo.svg" alt="Daniel Defense Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/FN-Herstal-logo.svg" alt="FN Herstal Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/Glock_logo.svg" alt="Glock Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/logo-sig-sauer.svg" alt="Sig Sauer Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/ruger2.svg" alt="Ruger Logo" className="h-12 md:h-16 mx-auto" />
        <img src="/media/brands-logos/smith-and-wesson.svg" alt="Smith and Wesson Logo" className="h-12 md:h-16 mx-auto" />
      </div>
    </div>
  );
};

export default LogosRow;
