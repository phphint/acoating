import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Ensure correct import path


const TumblerModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our custom coating services for tumblers and cups. We offer a range of designs from simple single colors to complex camo patterns and custom graphics.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Customization Options</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li><strong>Single Color:</strong> A simple, yet elegant way to personalize your tumbler.</li>
                <li><strong>Camo Patterns:</strong> Choose from various camo designs to give your tumbler a unique outdoor look.</li>
                <li><strong>Battle Worn:</strong> For that rugged, veteran feel, the battle worn style is perfect.</li>
                <li><strong>Custom Logos and Graphics:</strong> Turn your tumbler into a piece of art with custom designs.</li>
            </ul>
            
            <p className="text-sm text-gray-700 mt-2">Please bring your own tumbler as we do not supply them due to the many variations in styles and preferences. This ensures that you get exactly what you want out of our service!</p>
            
            <p className="text-sm text-gray-700 mt-2">For more details on our offerings, visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700">Cerakote colors page</Link>.</p>
        </>
    );
};

const Tumblers: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'Tumbler/Cups Cerakote Pricing');

    // Handle loading and error states
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="Tumbler/Cups Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Tumbler Coating Information"
                description={<TumblerModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Tumblers;
