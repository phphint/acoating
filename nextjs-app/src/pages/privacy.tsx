import React from 'react';
import Head from 'next/head';
import MainMenu from '../components/MainMenu'; // Ensure the correct import path
import Footer from '../components/Footer'; // Ensure the correct import path
import ScrollToTopButton from '../components/ScrollToTop';  // Ensure this path matches where your ScrollToTopButton component is saved


export default function PrivacyPolicy() {
  return (
    <div 
      className="min-h-screen bg-[#4d7889]"
      style={{ backgroundImage: 'url(/media/blue-faded-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Head>
        <title>Privacy Policy - Acoating.com</title>
        <meta name="description" content="Understand how Acoating.com collects, uses, and protects your information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu />

      <main className="py-10 text-[#1F211D]">
        <div className="container mx-auto bg-[#fefffe] border-[#EFEEED] border p-6  ">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p className="mt-4">At Acoating.com, your privacy is of utmost importance to us. This policy provides detailed information on how we collect, use, and protect your personal data.</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Information Collection</h2>
            <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This information includes, but is not limited to, your name, email address, mailing address, and phone number.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Information Use</h2>
            <p>The information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to process transactions, and to send periodic emails regarding your order or other products and services.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Information Protection</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Cookies</h2>
            <p>We use cookies to enhance your experience on our site. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enables the sites or service providers&apos; systems to recognize your browser and capture and remember certain information.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Third-Party Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Consent</h2>
            <p>By using our site, you consent to our privacy policy.</p>
          </section>

          <p className="mt-8">We reserve the right to make changes to this policy at any time. If we decide to change our privacy policy, we will post those changes on this page. If you have any questions regarding this privacy policy, please contact us.</p>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
