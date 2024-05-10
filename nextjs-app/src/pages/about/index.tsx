import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/About';
import Layout from '../../components/Layout';
import Section1 from '../../components/sections/About/Section1'; 
import Services from '../../components/sections/About/Services'; 
import Testimonials from '../../components/sections/About/Testimonials'; 

const AboutUsPage: React.FC = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Acoating",
    "url": "https://www.acoating.com",
    "logo": "https://www.acoating.com/nextjs_images/logo.svg",
    "description": "Discover the story behind Acoating and why our Cerakote coatings and custom firearm engraving services are unmatched.",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15961 N 76th Ln",
        "addressLocality": "Peoria",
        "addressRegion": "AZ",
        "postalCode": "85382",
        "addressCountry": "USA"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "acoating@gmail.com",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English"]
    },
    "sameAs": [] // If there are any relevant social media or additional URLs, add them here
  };

  return (
    <Layout>
      <Head>
        <title>About Acoataling - Our Story & Why Choose Us</title>
        <meta name="description" content="Discover the story behind Acoating and why our Cerakote coatings and custom firearm engraving services are unmatched." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Header />
       <div className="pb-0" >
        <Section1 />
        <Services />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
