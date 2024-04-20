import React from 'react';
import ServiceTable from '../ServiceTable';

const Gunsmithing: React.FC = () => {
    const services = [
        { 'service': "General Services (Pistol/Rifle/Shotgun)", 'price': "$50" },
        { 'service': "Sight Installation", 'price': "$50+" },
        { 'service': "Trigger Tuning", 'price': "$50+" },
        { 'service': "Shop Supplies Minimum per Project", 'price': "$20" },
        { 'service': "Disassembly and Reassembly", 'price': "$80+" },
        { 'service': "Metal Defect Repairs/Removal", 'price': "$60+ Supplies" },
        { 'service': "Press Sights In/Out", 'price': "$40-65" },
        { 'service': "Masking", 'price': "$30+ Material Cost" },
        { 'service': "Partial Disassembly/Assembly", 'price': "$30+" }
    ];

    return (
        <ServiceTable category="Gunsmithing Services Pricing" services={services} />
    );
};

export default Gunsmithing;
