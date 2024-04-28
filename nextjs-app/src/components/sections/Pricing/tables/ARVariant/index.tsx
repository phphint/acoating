import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';



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

    const services = [
        { 'service': "Single Color - Complete AR", 'price': "$450" },
        { 'service': "Bi-Color - Complete AR", 'price': "$500" },
        { 'service': "Camo Pattern - Complete AR", 'price': "$550" },
        { 'service': "Barrel Coating", 'price': "$75" },
        { 'service': "Magazine Coating", 'price': "$25" },
        { 'service': "Butt Stock Coating", 'price': "$45" },
        { 'service': "Buffer Tube Coating", 'price': "$60" },
        { 'service': "Brace Coating", 'price': "From $45" },
        { 'service': "Complete Furniture Set Coating", 'price': "$120-250" },  // Detailed range to indicate variability
        { 'service': "Muzzle Device Coating", 'price': "$25-45" },
        { 'service': "Gas Block & Tube Coating", 'price': "$40" },
        { 'service': "Full Disassembly + Reassembly", 'price': "$75" },  // Emphasizing full service
        { 'service': "Upper Receiver Coating", 'price': "$80" },
        { 'service': "Lower Receiver Coating", 'price': "$80" },
        { 'service': "Handguard Coating", 'price': "$100" },
        { 'service': "Upper / Lower / Handguard Set Coating", 'price': "$240" },  // Set pricing for combined service
        { 'service': "Lower Parts Kit Installation", 'price': "$70" },
        { 'service': "Upper Parts Kit Installation", 'price': "$70" },
        { 'service': "Bolt Carrier Group (BCG) Coating", 'price': "$70" },
        { 'service': "Optics and Sights Mounting Service", 'price': "Starts at $100" },  // Clarified service description
        { 'service': "Custom Laser Engraving", 'price': "Contact for Pricing" },  // Added as a premium option
        { 'service': "Protective Clear Coat Finish", 'price': "$50" },  // Additional protection option
        { 'service': "Heat Resistant Coating for Barrel", 'price': "$85" }  // Specific for high heat areas
    ];
    
    
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
