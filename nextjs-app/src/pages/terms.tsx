import React from 'react';
import Head from 'next/head';
import MainMenu from '../components/MainMenu'; // Adjust the import path as necessary
import Footer from '../components/Footer'; // Adjust the import path as necessary
import ScrollToTopButton from '../components/ScrollToTop';  // Ensure this path matches where your ScrollToTopButton component is saved
import Terms from '../components/sections/Terms';  // Ensure this path matches where your ScrollToTopButton component is saved

export default function TermsOfService() {
  return (
    <div 
      className="min-h-screen bg-[#4d7889]"
      style={{ backgroundImage: 'url(/media/blue-faded-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Head>
        <title>Terms of Service - Acoating.com</title>
        <meta name="description" content="Review the terms and conditions for using Acoating.com&apos;s services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu />

      <Terms/>

      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
