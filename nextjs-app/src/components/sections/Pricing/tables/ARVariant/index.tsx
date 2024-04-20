import React from 'react';
import ServiceTable from '../ServiceTable';

const ARVariant: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete AR", 'price': "$450" },  // Basic single color application for the entire AR
        { 'service': "Bi-Color - Complete AR", 'price': "$500" },  // Two colors used on the AR for enhanced aesthetics
        { 'service': "Camo Pattern - Complete AR", 'price': "$550" }  // Camouflage patterns for a tactical or custom look
    ];

    return (
        <ServiceTable category="AR Variant Cerakote Pricing" services={services} />
    );
};

export default ARVariant;
