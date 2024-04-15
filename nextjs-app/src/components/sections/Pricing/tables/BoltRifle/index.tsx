import React from 'react';
import ServiceTable from '../ServiceTable';

const BoltRifle: React.FC = () => {
    const services = [
        { 'service': "Complete Rifle - Single Color", 'price': "$280" },
        { 'service': "Barrel Only - Single Color", 'price': "$100" },
        { 'service': "Action & Receiver - Single Color", 'price': "$130" },
        { 'service': "Stock Only - Single Color", 'price': "$130" },
        { 'service': "Complete Rifle - Two-Tone", 'price': "$330" },
        { 'service': "Complete Rifle - Camouflage (up to 3 colors)", 'price': "$380" },
        { 'service': "Custom Graphic or Pattern", 'price': "Starts at $400" },
        { 'service': "Precision Masking for Accuracy Preservation", 'price': "$50" },
    ];

    return <ServiceTable category="BoltRifle Cerakote Pricing" services={services} />;
};

export default BoltRifle;
