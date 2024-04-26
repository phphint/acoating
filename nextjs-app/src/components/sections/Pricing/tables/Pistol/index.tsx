import React, { useState } from 'react';
import ServiceTable from '../ServiceTable';
import Modal from '../../../../../components/Modal';
import Link from 'next/link';
const ModalDescription: React.FC = () => {
    return (
        <>
            <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-700">Explore comprehensive details about our Cerakote coating services for 1911/2011 pistols, tailored to enhance both aesthetic and functional qualities of your firearms.</p>

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
            <p className="text-sm text-gray-700"><strong>Single Color:</strong> Includes the slide, frame, and various small parts like the safety and magazine release. This service provides a sleek, uniform look to your pistol.</p>
            <p className="text-sm text-gray-700"><strong>Bi-Tone Color:</strong> Features primary and secondary colors on different parts for a unique look. This option allows for personalized aesthetic preferences.</p>
            <p className="text-sm text-gray-700"><strong>Camouflage:</strong> Offers extensive camo patterns applied with precision, enhancing the visual appeal and effectiveness of the pistol for tactical use.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-4">Important Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>All internal parts and sights must be removed prior to service; additional charges for disassembly and reassembly may apply.</li>
                <li>Barrel can be coated or brushed; additional costs for these services are clearly detailed.</li>
                <li>DIY cleaning before sending in your parts is recommended to avoid extra charges.</li>
            </ul>

            <p className="text-sm text-gray-700 mt-2">For more color options and detailed service descriptions, please visit our <Link href="/services/cerakote-coating" className="text-blue-500 hover:text-blue-700">Cerakote colors page</Link>.</p>
        </>
    );
};

const Pistol: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const services = [
        { 'service': "Single Color - Complete Pistol", 'price': "$300" },
        { 'service': "Bi-Color - Complete Pistol", 'price': "$350" },
        { 'service': "Camo Pattern - Complete Pistol", 'price': "$400" },
        { 'service': "Disassembly / Reassembly", 'price': "$65" },  // High demand for full service
        { 'service': "Barrel", 'price': "$80" },  // Includes hone chamber, polish barrel ramp
        { 'service': "Trigger job/Polishing", 'price': "$80+" },  // + any parts for 3.5lb or higher triggers, 1-3.5lb add $130+
        { 'service': "Slide", 'price': "$100" },  // Press sights $45
        { 'service': "Frame Only", 'price': "$120" },
        { 'service': "Controls", 'price': "$30-35 ea" },
        { 'service': "Trigger", 'price': "$25" },
        { 'service': "Baseplate", 'price': "$20" },
        { 'service': "Chamber Hone/Polish feed ramps", 'price': "$70" },
        { 'service': "Rebrush vs coat", 'price': "$40" }
    ];
    
    
    return (
        <div>
            <ServiceTable category="1911/2011 Pistol Cerakote Pricing" services={services} />
            <p className="mt-4 text-white">
               
                <button 
                    onClick={() => setModalOpen(true)}
                    className="text-white underline pl-1 hover:text-gray-300"
                >
                    More Details
                </button>.
            </p>
            
            <Modal 
                title="Detailed Pistol Coating Information"
                description={<ModalDescription />}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default Pistol;
