import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Ensure this is the correct path

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
    const { services, loading, error } = useFetchServices('price-tables', 'Automotive Parts Cerakote Pricing');

    // Conditional rendering based on loading and error state
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

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
