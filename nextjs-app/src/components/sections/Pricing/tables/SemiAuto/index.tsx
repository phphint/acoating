import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Ensure correct import path


// Define a separate component for the modal's content
const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote application services for semi-automatic firearms, designed to enhance both the aesthetic and functional qualities of your firearms.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Service Options</h3>
            <p className="text-sm text-gray-700"><strong>Single Color:</strong> Covers the slide, frame, slide release, safety features, and other components. Specific components like the barrel may be added with additional costs.</p>
            <p className="text-sm text-gray-700"><strong>Bi-Tone Color:</strong> Features primary and secondary colors applied to different parts for a custom look. Includes detailed process information and component handling precautions.</p>
            <p className="text-sm text-gray-700"><strong>Camouflage:</strong> Detailed camouflage patterns applied with precision across multiple layers. Extensive process coverage including the use of specialized jigs and additional equipment.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Important Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Sights that are staked in (e.g., Springfield Xd&lsquo;s) are taped off and NOT removed from the slide; they are coated as part of the slide to prevent damage.</li>
                <li>Trigger shoe assemblies with built-in safeties are NOT coated to maintain functional operation.</li>
                <li>All internal parts and sights must be removed prior to service to avoid additional disassemble and reassemble charges. If DIY degrease is not done before sending in parts, additional costs will apply.</li>
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

            <p className="text-sm text-gray-700 mt-2">For more color options and detailed service descriptions, please visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700"> Cerakote colors page </Link>.</p>
        </>
    );
};

const SemiAuto: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'SemiAuto Cerakote Pricing');

    // Handle loading and error states
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="SemiAuto Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed SemiAuto Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default SemiAuto;
