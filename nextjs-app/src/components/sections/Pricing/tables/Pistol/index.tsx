import React from 'react';
import ServiceTable from '../ServiceTable';

const Pistol: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete Pistol", 'price': "$265" },  // Single color application for the entire pistol
        { 'service': "Bi-Color - Complete Pistol", 'price': "$305" },  // Application of two colors for a unique aesthetic
        { 'service': "Camo Pattern - Complete Pistol", 'price': "$345" }  // Camouflage pattern for enhanced visual appeal
    ];

    return (
        <ServiceTable category="Pistol Cerakote Pricing" services={services} />
    );
};

export default Pistol;
