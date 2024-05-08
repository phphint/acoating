import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';  // Ensure this path is correct
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Correct import path


// Define a separate component for the modal's content
const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote application services for bolt rifles, designed to enhance both the aesthetic and functional qualities of your firearm.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Camo Types Available</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Multi-Cam</li>
                <li>Kryptek (Nomad)</li>
                <li>Woodland Camo</li>
                <li>Digital</li>
                <li>Tiger Stripe</li>
             
                <li>Battleworn Finish</li>
             
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Service Options</h3>
            <p className="text-sm text-gray-700"><strong>Single Color:</strong> Covers barreled action up to 32&quot;, lower metal, and bolt body. Ensures a uniform color presentation over all primary exposed surfaces.</p>
            <p className="text-sm text-gray-700"><strong>Bi-Tone Color:</strong> Combines two distinct colors for a visually striking look. Primary color typically on the barrel and action, secondary on the stock and other accessories.</p>
            <p className="text-sm text-gray-700"><strong>Camouflage:</strong> Advanced application of multiple camo patterns to provide both aesthetic appeal and practical field advantages.</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">Additional Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Disassembly and reassembly are required; additional charges may apply based on the complexity.</li>
                <li>All internal parts should be removed prior to service to prevent damage and ensure coating quality.</li>
                <li>DIY cleaning is recommended before service to avoid extra charges.</li>
                <li>Color/sheen differences might be noticeable when comparing H-series vs. C-series products.</li>
                <li>Extra charges for special orders of non-stocking Air dry Cerakote might apply.</li>
            </ul>

            <p className="text-sm text-gray-700 mt-2">For more color options and detailed service descriptions, please visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700"> Cerakote colors page </Link>.</p>
        </>
    );
};


const BoltRifle: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'Bolt Rifle Cerakote Pricing');

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="Bolt Rifle Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Bolt Rifle Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default BoltRifle;
