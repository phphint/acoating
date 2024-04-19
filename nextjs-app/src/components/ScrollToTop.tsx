import React from 'react';
import { useRouter } from 'next/router';

const ScrollToTopButton = () => {
  const router = useRouter();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: '#824a1e',
        color: '#FFFFFF',
        fontSize: '24px',
        lineHeight: '50px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        zIndex: 10000,  // High z-index to ensure visibility
        visibility: 'visible'
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
