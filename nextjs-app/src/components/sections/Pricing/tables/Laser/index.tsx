import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';  // Adjust the import path as needed
import Link from 'next/link';

 
const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Comprehensive Laser Engraving Services</h2>
            <p className="text-sm text-gray-700">At our facility, we use state-of-the-art laser engraving technology to offer a range of customization options for your firearms. From simple text to intricate graphics, our services are designed to meet your personal or professional needs.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Available Engraving Services</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li><strong>Basic Text Engraving:</strong> Ideal for names, initials, or simple messages, ensuring a personal touch.</li>
                <li><strong>Custom Graphics:</strong> Transform your firearm with detailed artistic images or patterns that reflect your style or company branding.</li>
                <li><strong>NFA Engraving:</strong> Compliant with all legal requirements, providing clear and precise markings as required by law.</li>
                <li><strong>Non-Standard Locations:</strong> Ability to engrave on areas that are not typically accessible, offering unique customization options.</li>
                <li><strong>Artwork File Conversion:</strong> Convert any artwork into an engrave-ready format, allowing for complete customization of your firearm.</li>
            </ul>

            <h4 className="text-md font-bold text-gray-700">Why Choose Our Engraving Services?</h4>
            <p className="text-sm text-gray-700">Laser engraving not only enhances the aesthetic appeal of your firearm but also increases its value and uniqueness. Our precise engraving techniques ensure high-quality results that are durable and meet all regulatory standards.</p>

            <p className="text-sm text-gray-700 mt-2">To learn more about how you can customize your firearm with our laser engraving services or to get a quote, please visit our     <Link href="/services/laser-engraving" className="text-blue-500 hover:text-blue-700" passHref>
     service page 
    </Link> or contact us directly.</p>
        </>
    );
};

const Laser: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const services = [
        {'service': "Basic Engraving (Text)", 'price': "$60"},
        {'service': "Custom Graphics", 'price': "$100+"},
        {'service': "Laser Engraving", 'price': "Quote Based"},
        {'service': "Artwork Files Conversion", 'price': "$60"},
        {'service': "NFA Engraving", 'price': "$60"},
        {'service': "Non Standard Laser Engrave Locations", 'price': "$40"},
        {'service': "Masking for Laser Engraving", 'price': "$30 + Material Cost"}
    ];

    return (
        <div>
            <ServiceTable category="Firearm Laser Engraving Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Engraving Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Laser;
