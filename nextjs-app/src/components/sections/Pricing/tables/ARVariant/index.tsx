import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Correct import path



const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote application services for AR variants, designed to enhance both aesthetic and functional qualities of your firearms.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Camo Patterns Available</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Multi-Cam</li>
                <li>Kryptek (Nomad)</li>
                <li>Woodland Camo</li>
                <li>Digital</li>
                <li>Tiger Stripe</li>
               
                <li>Battleworn Finish</li>
                
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Service Options</h3>
            <p className="text-sm text-gray-700"><strong>Single Color:</strong> Covers the upper receiver, barrel, and disassembled lower. This option provides a uniform color scheme across your AR variant.</p>
            <p className="text-sm text-gray-700"><strong>Bi-Tone:</strong> Combines two distinct colors for a custom look. Primary and secondary colors are applied to different parts to enhance visual appeal.</p>
            <p className="text-sm text-gray-700"><strong>3 Color Camouflage:</strong> This service includes applying three colors in camouflage patterns using advanced techniques for a tactical advantage.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Additional Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>All services require disassembly and reassembly by our specialists to ensure high-quality results.</li>
                <li>Internal parts and sights must be removed to avoid damage during the coating process.</li>
                <li>Customers are advised to clean their firearms before service to minimize additional costs.</li>
                <li>Color/sheen differences might be observed when comparing H-series vs. C-series products.</li>
            </ul>

            <p className="text-sm text-gray-700 mt-2">For a full range of color options and detailed service descriptions, please visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700"> Cerakote colors page </Link>.</p>
        </>
    );
};
const ARVariant: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'AR Variant Cerakote Pricing');

    // Conditional rendering based on loading and error state
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="AR Variant Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed AR Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default ARVariant;

