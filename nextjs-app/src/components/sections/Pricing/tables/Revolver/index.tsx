import React from 'react';
import ServiceTable from '../ServiceTable';

const Revolver: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete Revolver", 'price': "$200" },  // Single color application over the entire revolver
        { 'service': "Bi-Color - Complete Revolver", 'price': "$250" },  // Application of two colors for a unique look
        { 'service': "Camo Pattern - Complete Revolver", 'price': "$300" }  // Camouflage patterns for enhanced aesthetic appeal
    ];

    return (
        <ServiceTable category="Revolver Cerakote Pricing" services={services} />
    );
};

export default Revolver;
