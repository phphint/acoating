import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'; // Import Link from next/link

import Logo from './Logo';
import CTAButton from './CTAButton';
import ServicesMenu from './ServicesMenu';
import PricingMenu from './PricingMenu';
import ContactUsMenu from './ContactUsMenu';

const LogoWhite = () => <img src="/nextjs_images/logo-trans-white.png" alt="Logo" className="h-auto w-auto mb-3 m-4" />;

const MainMenu: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="custom-menu container mx-auto px-3 relative z-0 sticky-menu flex items-stretch justify-between text-white drop-shadow-xl menu-height"
         style={{ backgroundImage: `url('/nextjs_images/backgrounds/menu-bar.png')`, backgroundSize: 'cover', borderBottom: '2px solid #0e162c' }}>
      <Logo src="/nextjs_images/logo-trans-dark.png" alt="Logo" className="w-auto pt-3 menu-logo " style={{ height: '7.4rem' }} />

      <IconButton
        edge="start"
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          backgroundColor: 'white',
          color: '#111a1d',
          height: '48px',
          width: '48px',
          '&:hover': {
            backgroundColor: 'white',
          },
          display: { xs: 'flex', xl: 'none' },
          padding: '12px',
          alignSelf: 'center',
        }}
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#111a1d',
            color: 'white',
            width: 250
          }
        }}
      >
        <LogoWhite />
        <Box
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <List>
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About" },
              { href: "/services", text: "Services" },
              { href: "/pricing", text: "Pricing" },
              { href: "/gallery", text: "Gallery" },
              { href: "/contact", text: "Contact Us" },
            ].map((item) => (
              <Link href={item.href} passHref key={item.href}>
              <ListItem button className="text-white hover:bg-gray-700">
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Desktop Menu Items */}
      <div className="hidden xl:flex items-center">
        <Link href="/about" className="px-4">About </Link>
        <ServicesMenu />
        <PricingMenu />
        <Link href="/gallery" className="px-4"> Gallery </Link>
        <ContactUsMenu />
        <CTAButton />
      </div>
    </div>
  );
};

export default MainMenu;
