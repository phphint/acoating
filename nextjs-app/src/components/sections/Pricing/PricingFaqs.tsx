// PricingFaqs.tsx
import Image from 'next/image';
import Link from 'next/link';


const PricingFaqs = () => {
  const faqColumns = [
    {
      id: 1,
      title: 'Turnaround Time',
      subtitle: 'Quick & Efficient',
      text: 'Our team works diligently to ensure your firearm services are completed swiftly, with most projects turned around within 1-2 weeks.',
      link: '/pricing/faq/turnaround-time' // Define the link here
    },
    {
      id: 2,
      title: 'Warranty Information',
      subtitle: 'Peace of Mind',
      text: 'We stand behind our work with a comprehensive warranty covering all coating and customization services, ensuring your satisfaction and confidence.',
      link: '/pricing/faq/warranty-information' // Another example link
    },
    {
      id: 3,
      title: 'Post-Service Care',
      subtitle: 'Lasting Quality',
      text: 'To maintain the quality of your firearm\'s finish, we provide detailed care instructions, helping you preserve its appearance and functionality for years.',
      link: '/pricing/faq/post-service-care' // Another example link
    },
  ];


  return (
    <div className="w-full bg-[#3b3a2f]">
      {/* First Row */}
      <div className=" text-[#554e4b]">
        <div className="bg-black container mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-4">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-4xl">
            <hr className="border-t-2 border-[#303030] mb-4" />
            <p className="text-lg">
              Secure and compliant firearm shipping worldwide, including places like Denmark and China. Trust Acoating, an FFL gunsmith, for your firearm customization and maintenance needs.
            </p>
            <Link href="/pricing/faq/shipping-instructions">
        <div className="block">
          <button className="mt-4 bg-[#3e3d32] text-[#fefff9] border border-[#ccc9bf] py-2 px-4">
            Ship Us Your Firearm
          </button>
        </div>
      </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6">
            <Image src="/nextjs_images/cerkote-certified-applicator.svg" alt="Certified Applicator" width={500} height={300} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="text-[#fefff9] py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {faqColumns.map(({ id, title, subtitle, text, link }) => (
            <div key={id} className="p-4">
              <h3 className="text-3xl mb-2 text-[#699d9e] ">{title}</h3>
              <h4 className="text-lg mb-2">{subtitle}</h4>
              <p className="mb-4 text-[#bdb8ab]">{text}</p>
              <Link href={link}>
                <div className="block">
                  <button className="border-2 border-[#efeedf] bg-[#3e3d32] text-[#969e97] py-2 px-4">
                    Learn More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
          {/* Full-Width Image at the Bottom */}
          <div className="w-full container mx-auto">
        <Image src="/nextjs_images/backgrounds/leather-divider.png" alt="Leather Divider" layout="responsive" width={1920} height={108} objectFit="cover" />
      </div>
    </div>
  );
};

export default PricingFaqs;
