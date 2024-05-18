import React from 'react';
import Head from 'next/head';
import MainMenu from '../../../components/MainMenu'; // Adjust the import path as necessary
import Footer from '../../../components/Footer'; // Adjust the import path as necessary

export default function TurnaroundTime() {
  return (
    <div 
    className="min-h-screen bg-[#4d7889]"
    style={{ backgroundImage: 'url(/media/blue-faded-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >

      <Head>
        <title>Turnaround Time - Acoating.com</title>
        <meta name="description" content="Understand the process and how long it takes to complete your project with Acoating." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu />

      <main className="py-10   text-[#1F211D]">
        <div className="container mx-auto bg-[#fefffe] border-[#EFEEED] border p-6  ">
          <h1 className="text-2xl font-bold">Turnaround Time</h1>
          <p className="mt-4">Completion of your project at Acoating varies depending on several factors. Here&apos;s how you can ensure a smooth process and prevent delays.</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Understanding the Timeline</h2>
            <p>Completion times have historically ranged from 2-4 weeks for most items. Camouflage projects may extend to 6-8 weeks or more, depending on complexity and requirements. We strive to complete your project as swiftly as possible.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Steps to Prevent Delays</h2>
            <ol className="list-decimal pl-5">
              <li>Decide on your project details and check the pricing guide or email for an estimate.</li>
              <li>Submit your project information using our order form.</li>
              <li>Ensure proper packaging for the safe return of your item post-service.</li>
              <li>Ship with signature required to ensure secure delivery to us.</li>
              <li>Include all necessary contact information and payment choice with your item.</li>
              <li>Disassemble only the parts you intend to have coated and include them with your item.</li>
              <li>Email us upon shipment, and expect a confirmation upon its arrival.</li>
              <li>Any updates or necessary adjustments to your project will be communicated for your approval.</li>
            </ol>
          </section>

          <p className="mt-8">By following these steps, you help us ensure your project is completed efficiently and returned to you promptly. We value your business and look forward to adding your testimonial to our list of satisfied customers.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
