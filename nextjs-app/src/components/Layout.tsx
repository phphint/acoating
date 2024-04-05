import React, { ReactNode } from 'react';
import MainMenu from './MainMenu';
import TopMenu from './TopMenu';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode; // This allows for any valid React child
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-customColorStart to-customColorEnd">
 
  <MainMenu />
 

 

        <main>{children}</main>

       
     
      <Footer />
    </div>
  );
};

export default Layout;
