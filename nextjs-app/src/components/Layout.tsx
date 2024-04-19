// Layout.tsx

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainMenu from './MainMenu';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTop';  // Ensure this path matches where your ScrollToTopButton component is saved

// Rest of your component code
type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Auto-scrolling to top after route change.");
      window.scrollTo(0, 0);
    };
  
    router.events.on('routeChangeComplete', handleRouteChange);
  
    // Cleanup function to remove event listener on unmount
    return () => {
      console.log("Cleaning up - removing route change listener.");
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]); // Add router.events as a dependency

  return (
    <div className="min-h-screen bg-gradient-to-r from-customColorStart to-customColorEnd">
      <MainMenu />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />  {/* Adding the ScrollToTopButton component here */}
    </div>
  );
};

export default Layout;
