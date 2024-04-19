// pages/404.tsx
// Ensure this file is in your pages directory or appropriate routing directory with a .tsx extension

import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';  // Adjust path as necessary
import Link from 'next/link';  // Import the Link component from Next.js

const NotFoundPage: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>404: Page Not Found - Acoating Services</title>
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://www.acoating.com/404" />
            </Head>
     
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/media/404-bg.png')` }}>
                <div className="text-center p-4">
                    <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
                    <p className="text-xl text-gray-300 mb-5">We can&apos;t seem to find the page you&apos;re looking for.</p>
                    <Link href="/" className="bg-[#7ac3bf] text-[#205853] py-2 lg:py-4 px-6 lg:px-8 text-base lg:text-lg transition-colors hover:bg-[#68b2af]" style={{ border: 'medium', borderRadius: '0px' }}>
                     
                            Go to the Home Page
                      
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
