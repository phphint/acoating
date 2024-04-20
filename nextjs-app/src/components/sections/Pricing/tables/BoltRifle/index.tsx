import React from 'react';
import ServiceTable from '../ServiceTable';

const BoltRifle: React.FC = () => {
    const services = [
        { 'service': "Single Color - Complete Bolt Rifle", 'price': "$295" },  // Simplest option, one color over the entire rifle
        { 'service': "Bi-Color - Complete Bolt Rifle", 'price': "$350" },  // Two colors used on the rifle for a distinct look
        { 'service': "Camo Pattern - Complete Bolt Rifle", 'price': "$400" }  // The most complex option involving camouflage patterns
    ];

    return (
        <ServiceTable category="Bolt Rifle Cerakote Pricing" services={services} />
    );
};

export default BoltRifle;
