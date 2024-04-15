import React from 'react';
import ServiceTable from '../ServiceTable';

const ARVariant: React.FC = () => {
    const services = [
        { 'service': "Single Color - Entire Rifle", 'price': "$250" },
        { 'service': "Two-Tone Color - Rifle", 'price': "$300" },
        { 'service': "Multi-Color Camouflage Pattern", 'price': "$400" },
        { 'service': "Custom Design Patterns", 'price': "Starts at $450" },
        { 'service': "Upper or Lower Receiver Only", 'price': "$150" },
        { 'service': "Barrel Only", 'price': "$100" },
        { 'service': "Stock - Single Color", 'price': "$80" },
        { 'service': "Add-on: Tactical Markings", 'price': "$50" }
    ];

    return (
        <ServiceTable category="ARVariant Cerakote Pricing" services={services} />
    );
};

export default ARVariant;
