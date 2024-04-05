
// Logo.tsx
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={`${className} w-auto pt-1`} style={{ ...style, height: '7.4rem' }} />;
};

export default Logo;
