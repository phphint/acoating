import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';

const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote coating services for automotive parts. This service is designed to enhance the durability and aesthetic quality of your automotive components.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Available Services</h3>
            <p className="text-sm text-gray-700">We offer a wide range of Cerakote applications for various automotive parts including exhausts, turbo components, and more to provide a high-temperature resistant finish that protects against corrosion and wear.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Service Options</h3>
            <p className="text-sm text-gray-700">From single color applications to complex camouflage patterns, our services cater to all needs:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Exhaust manifolds and headers</li>
                <li>Turbo housings and shields</li>
                <li>Custom decorative finishes for visible parts</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Important Notes</h3>
            <p className="text-sm text-gray-700">All services are priced based on the component and complexity of the job. We recommend discussing your specific needs with our technicians to get an accurate quote.</p>

            <p className="text-sm text-gray-700 mt-2">Visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700">Cerakote colors page</Link> for more color options and detailed service descriptions.</p>
        </>
    );
};

const AutomotiveParts: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const services = [
        { 'service': "V8 Long Tube Headers Cerakote", 'price': "$350 per Pair" },
        { 'service': "V8 Short Tube Headers Cerakote", 'price': "$325 per Pair" },
        { 'service': "V6 Long Tube Headers Cerakote", 'price': "$250 per Pair" },
        { 'service': "V6 Short Tube Headers Cerakote", 'price': "$200 per Pair" },
        { 'service': "4 Cylinder Long Tube Header Cerakote", 'price': "$200" },
        { 'service': "4 Cylinder Short Tube Header Cerakote", 'price': "$150" },
        { 'service': "Exhaust Downpipes Cerakote", 'price': "$150" },
        { 'service': "Turbo Housing Cerakote (Hot Side)", 'price': "$150" },
        { 'service': "Turbo Elbow Cerakote", 'price': "$50" },
        { 'service': "Exhaust Heat Shield Cerakote", 'price': "$50" },
        { 'service': "Mufflers Cerakote", 'price': "From $75 to $150" },  // Specified price range
        { 'service': "Exhaust Tip Cerakote (<12 inches)", 'price': "$50 Each" },
        { 'service': "Exhaust Tip Cerakote (>12 inches)", 'price': "$75 Each" },
        { 'service': "Full Disassembly + Reassembly Service", 'price': "From $25 to $100" },  // Clarified service scope
        { 'service': "Custom Cerakote Applications", 'price': "Contact for Pricing" },  // Added for custom requests
        { 'service': "Protective High-Temp Coating for Components", 'price': "$100+" },  // Added for engine parts
        { 'service': "Performance Enhancing Ceramic Coatings", 'price': "$200+" }  // High-performance option
    ];
    

    return (
        <div>
            <ServiceTable category="Automotive Parts Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Automotive Parts Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default AutomotiveParts;
