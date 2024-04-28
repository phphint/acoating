// Logo.tsx
import React from 'react';
import Link from 'next/link';  // Import Link from Next.js


interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className, style }) => {
  return (
    // Wrap the image inside a Link component
    <Link href="/" scroll={true}>
    
        <img src={src} alt={alt} className={`${className} w-auto pt-1`} style={{ ...style, height: '7.4rem' }} />
     
    </Link>
  );
};

export default Logo;
