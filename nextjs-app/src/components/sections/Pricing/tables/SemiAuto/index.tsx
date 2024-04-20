import React from 'react';
import ServiceTable from '../ServiceTable';

const SemiAuto: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete SemiAuto", 'price': "$300" },  // Single color Cerakote for the entire semi-auto firearm
        { 'service': "Bi-Color - Complete SemiAuto", 'price': "$350" },  // Two color scheme for an enhanced aesthetic
        { 'service': "Camo Pattern - Complete SemiAuto", 'price': "$400" }  // Camouflage pattern for a tactical or custom appearance
    ];

    return (
        <ServiceTable category="SemiAuto Cerakote Pricing" services={services} />
    );
};

export default SemiAuto;
