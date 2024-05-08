import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Make sure this path is correct


const OpticsModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote coating services tailored for optics and accessories. This service is designed to enhance the durability and aesthetics of your high-value gear.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Service Details</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li><strong>Scope Large + Masking:</strong> Perfect for larger scopes, ensuring all external surfaces are evenly coated.</li>
                <li><strong>Reddot + Masking:</strong> Special care taken to protect the delicate parts while providing a durable coat.</li>
                <li><strong>Weapon Light:</strong> Coating services that help to prevent corrosion and wear from exposure to harsh conditions.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Camo Patterns Available</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Multi-Cam</li>
                <li>Kryptek (Nomad)</li>
                <li>Woodland Camo</li>
                <li>Digital</li>
                <li>Tiger Stripe</li>
            
                <li>Battleworn Finish</li>
              
            </ul>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">Additional Info</h3>
            <p className="text-sm text-gray-700">Please note, we do not disassemble or reassemble red dots, flashlights, scopes, etc., to ensure the integrity and functionality of your equipment.</p>
            
            <p className="text-sm text-gray-700 mt-2">Visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700">Cerakote colors page</Link> for more options and detailed descriptions.</p>
        </>
    );
};

const OpticsAccessories: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'Optics/Accessories Cerekote Camo Pricing');

    // Handle loading and error states
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="Optics/Accessories Cerekote Camo Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Optics/Accessories Coating Information"
                description={<OpticsModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default OpticsAccessories;
