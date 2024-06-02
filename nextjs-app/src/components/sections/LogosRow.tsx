import React from 'react';

const LogosRow: React.FC = () => {
  return (
    <div className="container logos mx-auto px-4 my-6" style={{ minHeight: '10vh', overflow: 'hidden' }}>
      <div className="logos-wrapper flex items-center justify-center md:justify-between gap-4 h-full py-4 overflow-x-auto">
        <img src="/nextjs_images/brands-logos/Beretta_logo.svg" alt="Beretta Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/Colt_logo.svg" alt="Colt Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/Daniel_Defense_Logo.svg" alt="Daniel Defense Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/FN-Herstal-logo.svg" alt="FN Herstal Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/Glock_logo.svg" alt="Glock Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/Logo_Sig_sauer.svg" alt="Sig Sauer Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/RGR.svg" alt="Ruger Logo" className="h-12 md:h-16" width="100" height="48" />
        <img src="/nextjs_images/brands-logos/Smith-&-Wesson-Logo.svg" alt="Smith and Wesson Logo" className="h-12 md:h-16" width="100" height="48" />
      </div>
    </div>
  );
};

export default LogosRow;
