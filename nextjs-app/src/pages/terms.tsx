import React from 'react';
import Head from 'next/head';
import MainMenu from '../components/MainMenu'; // Adjust the import path as necessary
import Footer from '../components/Footer'; // Adjust the import path as necessary
import ScrollToTopButton from '../components/ScrollToTop';  // Ensure this path matches where your ScrollToTopButton component is saved

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

      <main className="py-10 text-[#1F211D]">
        <div className="container mx-auto bg-[#fefffe] border-[#EFEEED]   p-6  ">
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <p className="mt-4">Understanding and agreeing to our Terms of Service is essential for all projects undertaken with Acoating.com. Below, find the key policies governing our services.</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">General Terms</h2>
            <p>By accessing and using Acoating.com, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Service Scope</h2>
            <p>Our services include firearm coating and customization. Projects begin upon receipt of your firearm and completion times vary based on project complexity.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Shipping and Handling</h2>
            <p>All items must be shipped in compliance with federal and state laws. Acoating.com is not liable for damages incurred during shipping to our facility.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Payment and Refunds</h2>
            <p>Payment is required upon order completion. Refunds are only issued in accordance with our refund policy outlined below.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Refund Policy</h2>
            <p>Refunds are granted solely at the discretion of Acoating.com based on the assessment of the item&apos;s condition upon arrival and the service rendered.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Liability Limitations</h2>
            <p>Acoating.com assumes no responsibility for errors or omissions in the contents of the Service.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p>Your privacy is important to us. Our privacy policy describes how we handle personal information you provide.</p>
          </section>

          <p className="mt-8">We reserve the right to modify these terms at any time, so please review it frequently. If you have any questions or need further clarification, please don&apos;t hesitate to contact us.</p>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
