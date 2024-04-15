import React from 'react';
import ServiceTable from '../ServiceTable';

const Pistol: React.FC = () => {
    const services = [
        { 'service': "Single Color", 'price': "$180" }, // Standard single color Cerakote application
        { 'service': "Two-Tone Color", 'price': "$220" }, // Two-tone color application, distinct primary and secondary colors
        { 'service': "Camouflage Pattern (up to 3 colors)", 'price': "$280" }, // Camouflage patterns using up to three colors
        { 'service': "Custom Airbrush Design", 'price': "Starts at $350" }, // Custom airbrush designs, starting price
        { 'service': "Detailed Airbrush Patterns (complex designs)", 'price': "Quote based" } // More complex airbrush patterns, price on request
    ];

    return (
        <ServiceTable category="Cerakote Pistol Pricing" services={services} />
    );
};

export default Pistol;
