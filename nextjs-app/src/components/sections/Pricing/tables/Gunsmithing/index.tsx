// Import React and other necessary components
import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';  // Assuming Modal is in the same directory for simplicity
import Link from 'next/link';
import useFetchServices from '../../../../../hooks/useFetchServices'; // Correct import path


const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Comprehensive Gunsmithing Services</h2>
            <p className="text-sm text-gray-700">Our expert gunsmiths offer a wide range of services designed to improve the accuracy, functionality, and appearance of your firearms. From basic repairs to advanced customizations, learn more about what we offer and how we can help enhance your shooting experience.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Detailed Services Overview</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li><strong>General Maintenance:</strong> Regular checks and tune-ups to ensure your firearm is operating safely and effectively.</li>
                <li><strong>Sight Installation and Adjustments:</strong> Precise alignment for optimal accuracy.</li>
                <li><strong>Trigger Tuning:</strong> Modifications to reduce pull weight and increase response time.</li>
                <li><strong>Metal Work:</strong> Repair and removal of defects to restore the integrity and aesthetics of the firearm.</li>
                <li><strong>Custom Fabrication:</strong> Tailored modifications to meet specific performance requirements or aesthetic desires.</li>
            </ul>

            <h4 className="text-md font-bold text-gray-700">Why Choose Our Gunsmithing Services?</h4>
            <p className="text-sm text-gray-700">Choosing professional gunsmithing services can significantly enhance the performance and longevity of your firearm. Proper maintenance and timely repairs prevent malfunctions and safety issues, ensuring you get the best out of your investment.</p>

            <p className="text-sm text-gray-700 mt-2">Contact us today to discuss your gunsmithing needs and to schedule a consultation. Visit our <Link href="/services/gunsmithing" className="text-blue-500 hover:text-blue-700"> services page </Link> for more information.</p>
        </>
    );
};
const Gunsmithing: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { services, loading, error } = useFetchServices('price-tables', 'Gunsmithing Services Pricing');

    // Handle loading and error states
    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div>
            <ServiceTable category="Gunsmithing Services Pricing" services={services} />
            <p className="mt-4 text-white">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-blue-700"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Gunsmithing Service Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Gunsmithing;

