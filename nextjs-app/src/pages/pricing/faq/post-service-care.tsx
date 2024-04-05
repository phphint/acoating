import Head from 'next/head';
import Layout from '../../../components/Layout'; // Adjust the import path as necessary
import Header from '../../../components/Header/PostServiceCare'; // Adjust the import path as necessary

export default function PostServiceCare() {
  return (
    <Layout>
      <div className="bg-[#EAE9E7] text-[#1F211D]">
        <Head>
          <title>Post-Service Care - Your Company Name</title>
          <meta name="description" content="Learn how to care for your firearm after service to ensure longevity and performance." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="py-10">
          <div className="container mx-auto bg-[#FFFFFE] border-[#EFEEED] border p-6 rounded-lg">
            <h1 className="text-2xl font-bold">Post-Service Care</h1>
            <p className="mt-4">Understanding how to maintain your firearm after it&apos;s been serviced is crucial for its longevity and performance. Here, we provide guidance on caring for your firearm following Cerakote or Duracoat finishes.</p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Maintaining Your Refinished Firearm</h2>
              <p>Maintain the exterior as you would a blued firearm. While Cerakote and Duracoat finishes resist fingerprints and rust, proper care ensures a lasting appearance. All firearm cleaners are deemed safe for the surface. A break-in period of 200 to 300 rounds with quality gun oil or grease is recommended for firearms completely refinished.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Immediate Use After Finishing</h2>
              <p>Cerakote finishes are ready immediately after application due to the baking process. Duracoat, being chemically cured, advises careful handling within the first 24 hours, achieving full cure in 3 to 4 weeks.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Is Cerakote or Duracoat Permanent?</h2>
              <p>No firearm finish is permanent. Cerakote, however, leads in wear resistance, saltwater endurance, and minimal thickness, which doesn&apos;t affect tight tolerances significantly.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Break-In Procedure</h2>
              <p>After refinishing, a firearm may require a break-in process, especially for tighter fitting guns. Firing 100 to 200 rounds can help mate all surfaces properly, with a thorough cleaning recommended post-break-in.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Temperature Tolerance</h2>
              <p>Cerakote can withstand up to 1,800 degrees F, suitable even for heavy, rapid firing. Duracoat is recommended for less intense use, with a tolerance of up to 600 degrees F.</p>
            </section>

           </div>
        </main>
      </div>
    </Layout>
  );
}
