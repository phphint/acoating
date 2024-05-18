import React from 'react';
import Head from 'next/head';
import MainMenu from '../../../components/MainMenu'; // Adjust the import path as necessary
import Footer from '../../../components/Footer'; // Adjust the import path as necessary

export default function WarrantyInformation() {
  return (
    <div 
      className="min-h-screen bg-[#4d7889]"
      style={{ backgroundImage: 'url(/media/blue-faded-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Head>
        <title>Warranty Information - Acoating.com</title>
        <meta name="description" content="Understand our limited lifetime warranty on firearm refinishing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu />

      <main className="py-10 text-[#1F211D]">
        <div className="container mx-auto bg-[#FFFFFE] border-[#EFEEED] border p-6">
          <h1 className="text-2xl font-bold">Warranty Information</h1>
          <p className="mt-4">Acoating.com is committed to the quality and durability of our Applied finishes. Our Limited Lifetime Warranty reflects this commitment under certain conditions outlined below.</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Refinishing Limited Lifetime Warranty</h2>
            <p>Acoating.com will Inspect (Via Images, Email to verify any issues). Touch up or Refinishing if determined to be an Application failure at NO Charge (custom camouflage exempt) the firearm, including any disassembly and reassembly fees paid for on the initial repair, under the conditions stated by our policy and the manufacturer’s guidelines.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Scope of Warranty</h2>
            <p>The warranty covers application Technics Per Coating Manufactures Requirements for the Chosen product Line. To prevent flaking, peeling, or cracking when applied according to the manufacturer's specifications. However, it is limited by the conditions of normal wear and tear, including, but not limited to, abrasions, damages, impacts, and modifications, scratches, misuse, abuse, accident, improper cleaning. Along with Any Conditions outside of Acoating.com control</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Items Not Covered</h2>
            <ul className="list-disc pl-5">
              <li>Peeling or flaking due to normal wear and tear, abrasion, damage, impacts, modifications, scratches, or misuse, abuse, accident, improper cleaning.</li>
              <li>The warranty is valid only for the original purchaser, with a receipt required for service.</li>
              <li>Flexible plastics, rubbers, or any parts not originally included in the paid invoice.</li>
              <li>All shipping charges for warranty/repair requests.</li>
              <li>Any misrepresentations of Coating Durability/Cleaners/Rust proofing Etc (Please contact Coating Manufacture Directly).</li>
              <li>Warranty does not cover failures in the coating caused by circumstances beyond our control.</li>
            </ul>
          </section>

          <p className="mt-8">We stand behind the quality of our work and will address any issues related to the application process itself. Coating Failures related to Coating Product Failures will Need to be presented to Each Coating Manufacturer for Consideration of Warranty Repair (Which is Very Limited and Difficult to obtain).</p>

          <p className="mt-4">For further assistance or to initiate a warranty service, please contact us directly.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
