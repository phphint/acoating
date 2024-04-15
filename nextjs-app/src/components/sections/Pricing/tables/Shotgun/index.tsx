import React from 'react';
import ServiceTable from '../ServiceTable';

const Shotgun: React.FC = () => {
    const services = [
        { 'service': "Complete Shotgun - Single Color", 'price': "$250" },
        { 'service': "Shotgun Barrel Only - Single Color", 'price': "$90" },
        { 'service': "Shotgun Receiver Only - Single Color", 'price': "$100" },
        { 'service': "Shotgun Stock & Forend Only - Single Color", 'price': "$120" },
        { 'service': "Complete Shotgun - Two-Tone", 'price': "$300" },
        { 'service': "Complete Shotgun - Camouflage (up to 3 colors)", 'price': "$350" },
        { 'service': "Custom Pattern or Detailed Graphic Design", 'price': "Starts at $380" },
        { 'service': "Protective Clear Coat Over Decals or Graphics", 'price': "$50" },
    ];

    return <ServiceTable category="Shotgun Cerakote Pricing" services={services} />;
};

export default Shotgun;
