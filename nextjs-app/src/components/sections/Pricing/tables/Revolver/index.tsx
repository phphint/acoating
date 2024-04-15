import React from 'react';
import ServiceTable from '../ServiceTable';

const Revolver: React.FC = () => {
    const services = [
        { 'service': "Frame Only - Single Color", 'price': "$150" },
        { 'service': "Full Revolver - Single Color", 'price': "$250" },
        { 'service': "Cylinder & Frame - Two Tone", 'price': "$300" },
        { 'service': "Full Custom Camouflage (up to 3 colors)", 'price': "$350" },
        { 'service': "Specialty Design (Intricate patterns & themes)", 'price': "Starts at $400" },
        { 'service': "Engraving Add-on", 'price': "$50 per area" }
    ];

    return (
        <ServiceTable category="Revolver Cerakote Pricing" services={services} />
    );
};

export default Revolver;
