import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';

// Define a separate component for the modal's content
const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Discover the details of our Cerakote application services tailored for revolvers, aimed at enhancing both aesthetic and performance aspects of your firearm.</p>

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
            <h4 className="text-md font-bold text-gray-700">Single Color</h4>
            <p className="text-sm text-gray-700">Covers all main components for a consistent, polished look. Ideal for those seeking a traditional finish.</p>

            <h4 className="text-md font-bold text-gray-700">Bi-Tone</h4>
            <p className="text-sm text-gray-700">Combines two colors for a unique, custom appearance that stands out at the range or in the field.</p>

            <h4 className="text-md font-bold text-gray-700">Camouflage</h4>
            <p className="text-sm text-gray-700">Utilizes a variety of patterns to provide a distinctive and effective visual edge. Perfect for hunters and tactical shooters.</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">Additional Information</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>All services require disassembly and reassembly by our specialists to ensure high-quality results.</li>
                <li>Internal parts and sights must be removed prior to coating to prevent damage and ensure a flawless finish.</li>
                <li>Customers are encouraged to clean their firearms before sending them in to minimize additional handling charges.</li>
            </ul>

            <p className="text-sm text-gray-700 mt-2">Explore more about our coating options and detailed service descriptions on our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700"> Cerakote colors page </Link>.</p>
        </>
    );
};

const Revolver: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const services = [
        { 'service': "Complete Revolver Single Color", 'price': "$200" },
        { 'service': "Complete Revolver Bi-Color", 'price': "$250" },
        { 'service': "Complete Revolver Camouflage Pattern", 'price': "$300" },
        { 'service': "Revolver Frame Cerakote", 'price': "$100" },
        { 'service': "Revolver Cylinder Cerakote", 'price': "$75" },
        { 'service': "Revolver Controls and Pins Cerakote", 'price': "$60" },
        { 'service': "Revolver Small Parts Cerakote", 'price': "$50" },
        { 'service': "Comprehensive Disassembly + Reassembly", 'price': "$75" },  // Enhanced description for clarity
        { 'service': "Custom Accent Cerakote", 'price': "$40+" },  // New service for custom accents on specific parts
        { 'service': "Trigger and Hammer Polish", 'price': "$90" },  // Additional service targeting performance improvements
        { 'service': "Detailed Cleaning and Inspection", 'price': "$30" },  // Additional maintenance service
        { 'service': "Rust Prevention Coating", 'price': "$65" }  // Protective service against corrosion
    ];
    
    

    return (
        <div>
            <ServiceTable category="Revolver Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
                 <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Revolver Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Revolver;
