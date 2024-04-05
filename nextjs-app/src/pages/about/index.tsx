import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/About';
import Layout from '../../components/Layout';
import Section1 from '../../components/sections/About/Section1'; // Share the journey and mission of Acoating
import Services from '../../components/sections/About/Services'; // Highlight your unique selling propositions
import Testimonials from '../../components/sections/About/Testimonials'; // Reuse or enhance this for the About Us page for stronger impact
 

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Acoating - Our Story & Why Choose Us</title>
        <meta name="description" content="Discover the story behind Acoating and why our Cerakote coatings and custom firearm engraving services are unmatched." />
        <meta name="keywords" content="About Acoating, Acoating story, why choose Acoating, custom firearm services, Cerakote coatings, firearm engraving" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Acoating - Discover Our Story & Values" />
        <meta property="og:description" content="Learn more about Acoating's commitment to excellence in firearm customization and our passion for unparalleled service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/about-us" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-about-us.jpg" />
        <link rel="canonical" href="https://www.acoating.com/about-us" />
      </Head>
      <Header />
       <div className="pb-0" style={{ backgroundImage: `url('/media/section-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Section1 />
        <Services />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
