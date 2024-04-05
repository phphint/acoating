import Head from 'next/head';
import Layout from '../../../components/Layout'; // Ensure the correct path
import Header from '../../../components/Header/FaqsShipInstructions'; // Ensure the correct path

export default function ShippingInstructions() {
  return (
    <Layout>
      <div className="bg-[#EAE9E7] text-[#1F211D]">
        <Head>
          <title>Firearm Shipping Instructions - Acoating</title>
          <meta name="description" content="Comprehensive guide to securely ship your firearm to Acoating for professional services." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="py-10">
          <div className="container mx-auto bg-[#FFFFFE] border-[#EFEEED] border p-6 rounded-lg">
            <h1 className="text-2xl font-bold">Prepare Your Firearm for Shipment</h1>
            <p className="mt-4">Ensure your firearm arrives safely and is ready for servicing with our detailed shipping instructions.</p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Checklist for Disassembled Firearms</h2>
              <p>Verify that you have included all necessary components for your specific firearm model. This ensures a swift and efficient service process.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Important Shipping Guidelines</h2>
              <ul className="list-disc pl-5">
                <li>Download and include the completed Shipping Checklist and FFL License Info from our website.</li>
                <li>Direct shipping to and from Acoating is mandatory for service.</li>
                <li>Securely pack your item, utilizing bubble wrap for optimal protection.</li>
                <li>Label your package correctly and opt for Delivery Signature Service.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Carrier Recommendations</h2>
              <p>Select UPS or FedEx for handgun shipments, requiring overnight or 2-day service. Use discretion when labeling your package to avoid potential theft.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              <dl className="mt-4">
                <dt className="font-bold">Shipping Requirements:</dt>
                <dd>All firearms must be shipped to our FFL. Direct shipping is crucial for repair or refinishing services.</dd>

                <dt className="font-bold mt-2">Disassembly for Coating:</dt>
                <dd>Disassembled parts are accepted. Please list all components included in your shipment for coating.</dd>
              </dl>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Global Service Reach</h2>
              <p>Our expertise has attracted projects from across the globe, including Denmark and China, showcasing our international trust and presence.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Expert Tips for Shipping</h2>
              <ul className="list-disc pl-5">
                <li>Ensure the firearm is completely unloaded before shipping.</li>
                <li>Avoid including ammunition in your shipment.</li>
                <li>Provide clear contact details and a summary of the requested service.</li>
              </ul>
            </section>

            <p className="mt-8">For additional queries or support, reach out to us directly at acoating@gmail.com. We&apos;re here to assist you through every step of the process.</p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
