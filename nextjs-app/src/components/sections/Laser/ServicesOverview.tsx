import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesOverview: React.FC = () => {
  return (
    <div className="w-full bg-[#415453] text-[#282c30] py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto bg-[#939292] p-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-[#020202]"> Firearm Laser Engraving </h2>
                <Link href="/pricing" className="bg-[#34321A] text-[#FBF9F0] font-bold py-2 px-4">
                  See Pricing 
                </Link>
            </div>
            <hr className="border-t-[1px] border-[#5b6767] mb-6"/>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
                <div className="md:w-1/2 space-y-4 px-4 py-2">   
                    {[1, 2, 3, 4, 5].map(num => (
                        <Image
                            key={num}
                            src={`/nextjs_images/guns/laser/fire-arm-laser-engrave-${num}.jpg`}
                            alt={`Laser Engraving ${num}`}
                            width={500}  // Provide an initial width
                            height={105}  // Provide an initial height, maintaining aspect ratio
                            layout="responsive"
                            className="rounded-lg"
                        />
                    ))}
                </div>
                <div className="md:w-1/2 text-left px-4">
  <h2 className="text-2xl font-bold mb-5">Transform Your Firearm: Unleash Its Uniqueness with Laser Engraving</h2>

  <p className="text-lg mb-5">
    Looking to elevate your firearm beyond its standard form? At Acoating.com, we specialize in breathing life into ordinary firearms, transforming them into personalized masterpieces through our cutting-edge laser engraving technology. 
    This advanced process allows for incredibly precise and detailed engravings on any firearm surface, be it metal, polymer, or wood. Unlike traditional methods, laser engraving offers unparalleled permanence and control, ensuring your personalized touches stand the test of time.
  </p>

  <h3 className="text-xl font-semibold mb-3">Unmatched Detail for Aesthetics and Compliance</h3>

  <p className="text-lg mb-5">
    Laser engraving offers a distinct advantage over other customization methods. It delivers exceptional detail that&lsquo;s ideal for both intricate aesthetic designs and essential compliance markings. 
    Whether you envision a breathtaking floral scrollwork adorning your firearm&lsquo;s grip or require legally mandated information engraved for proper registration, our laser engraving process excels in both artistic expression and regulatory adherence. You get a firearm that not only looks stunning but also meets all legal requirements.
  </p>

  <h3 className="text-xl font-semibold mb-3">Tailored Customization for Every Need</h3>

  <p className="text-lg mb-5">
    Our dedication extends beyond simply offering laser engraving services. We understand that firearm customization is a deeply personal experience. Whether you seek a one-of-a-kind design for your prized hunting rifle or require detailed engraving for a small batch of competition pistols, our team of skilled professionals is equipped to handle it all. 
    We possess a diverse arsenal of engraving techniques, allowing us to achieve a range of finishes perfectly suited to your vision. From deep engravings that provide a satisfying tactile feel to subtle details that add a touch of sophisticated elegance, we tailor our services to meet your exact preferences.
  </p>

  <p className="text-lg mb-5">
    Ready to unleash your firearm&lsquo;s full potential? Dive deeper into the vast customization options we offer and discover how we can transform your firearm into a true reflection of your style and personality. Visit our gallery to witness the exquisite artistry of our previous work, or get in touch with us today to discuss your specific engraving requirements. 
  </p>
</div>

            </div>
        </div>
    </div>
  );
};

export default ServicesOverview;
