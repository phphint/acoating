import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';  // Ensure this path is correct

// Define a separate component for the modal's content
import Link from 'next/link';

const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote application services for shotguns, designed to enhance both the aesthetic and functional qualities of your firearm.</p>

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
            <p className="text-sm text-gray-700"><strong>Single Color:</strong> Applies a primary color across the barrel, receiver, magazine tube, and other small parts, providing a uniform look.</p>
            <p className="text-sm text-gray-700"><strong>Bi-Tone:</strong> Combines two distinct colors for dynamic visual impact. Primary and secondary colors are carefully applied to specified parts like the stock and forearm for aesthetic distinction.</p>
            <p className="text-sm text-gray-700"><strong>Camouflage:</strong> Features complex camo patterns for enhanced visual stealth. Covers various parts such as the stock, forearm, and barrel with detailed layering.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Additional Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Complete disassembly and reassembly are required to ensure quality application; additional fees may apply.</li>
                <li>All internal parts, including triggers and stocks, must be removed prior to coating to prevent damage.</li>
                <li>Color differences may occur between H-series and C-series finishes, affecting the final appearance.</li>
                <li>Cleaning the firearm prior to service is recommended to avoid extra charges.</li>
                <li>Special orders for non-stocking colors may incur delays and additional costs.</li>
            </ul>

            <p className="text-sm text-gray-700 mt-2">Explore more about our color options and detailed service descriptions on our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700"> Cerakote colors page </Link>.</p>
        </>
    );
};


const Shotgun: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const services = [
        { 'service': "Complete Shotgun Single Color", 'price': "$295" },
        { 'service': "Complete Shotgun Bi-Color", 'price': "$350" },
        { 'service': "Complete Shotgun Camouflage Pattern", 'price': "$400" },
        { 'service': "Shotgun Barrel and Action Cerakote", 'price': "$200" },
        { 'service': "Shotgun Stock and Forend Cerakote", 'price': "$110" },
        { 'service': "Shotgun Bolt Cerakote", 'price': "$75" },
        { 'service': "Additional Shotgun Barrel Cerakote", 'price': "$75" },
        { 'service': "Thorough Disassembly and Reassembly", 'price': "$75" },  // Enhanced description for clarity
        { 'service': "Optic and Sight Remounting Service", 'price': "Starts at $100" },  // More detailed description
        { 'service': "Custom Engraving on Receiver or Barrel", 'price': "$100+" },  // New service for customization
        { 'service': "Protective Coating for Rust Prevention", 'price': "$65" },  // New service for maintenance
        { 'service': "Internal Component Polishing", 'price': "$90" },  // New service to improve mechanism smoothness
        { 'service': "External Detailing and Finish Touch-up", 'price': "$50" }  // New service for aesthetic enhancements
    ];
    
    

    return (
        <div>
            <ServiceTable category="Shotgun Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
             
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button> 
            </p>
            
            <Modal 
                title="Detailed Shotgun Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Shotgun;
