import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicesOverview from '../../../components/sections/Airbrushing/ServicesOverview';  // Overview tailored for firearm airbrushing
import Testimonials from '../../../components/sections/Airbrushing/Testimonials';  // Testimonials specific to airbrushing services

const AirbrushingServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Expert Firearm Airbrushing Services - Acoating</title>
        <meta name="description" content="Transform your firearm with Acoating’s professional airbrushing services. From custom designs to detailed finishes, our experts provide quality and creativity in every project." />
        <meta name="keywords" content="firearm airbrushing, custom gun painting, gun airbrush designs, firearm aesthetics, professional airbrush services, gun customizations, firearm paint jobs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Acoating: Professional Firearm Airbrushing Services" />
        <meta property="og:description" content="Trust Acoating for top-notch airbrushing services that give your firearm a unique and personalized look. Experience artistic craftsmanship and custom designs tailored to your preferences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acoating.com/airbrushing" />
        <meta property="og:image" content="https://www.acoating.com/images/og-image-airbrushing.jpg" />
        <link rel="canonical" href="https://www.acoating.com/airbrushing" />
      </Head>
      
      <div>
        <ServicesOverview />
        <Testimonials />
        <script type="application/ld+json">
{`
  {
    "@context": "http://schema.org",
    "@type": "Service",
    "serviceType": "Firearm Airbrushing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Acoating",
      "image": "https://www.acoating.com/nextjs_images/og-image-acoating.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15961 N 76th Ln",
        "addressLocality": "Peoria",
        "addressRegion": "AZ",
        "postalCode": "85382",
        "addressCountry": "US"
      },
      "email": "acoating@gmail.com",
      "url": "https://www.acoating.com/services/cerakote-coating/firearm-airbrushing",
      "telephone": "",
      "description": "Acoating specializes in high-quality Cerakote gun coatings and precision firearm engraving services, offering unparalleled customization options for firearm enthusiasts nationwide.",
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Firearm Airbrushing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Gun Painting",
            "description": "Transform your firearm with custom and artistic paint jobs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gun Airbrush Designs",
            "description": "Professional airbrush designs to personalize and enhance the aesthetics of your firearm."
          }
        }
      ]
    }
  }
`}
</script>

      </div>
    </Layout>
  );
};

export default AirbrushingServicesPage;
