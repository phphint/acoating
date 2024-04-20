import React from 'react';
import ServiceTable from '../ServiceTable';

const Shotgun: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete Shotgun", 'price': "$295" },  // Estimated base price for a single color application
        { 'service': "Bi-Color - Complete Shotgun", 'price': "$350" },  // Bi-color typically involves more complexity
        { 'service': "Camo Pattern - Complete Shotgun", 'price': "$400" }  // Camo patterns are the most intricate
    ];

    return (
        <ServiceTable category="Shotgun Cerakote Pricing" services={services} />
    );
};

export default Shotgun;
