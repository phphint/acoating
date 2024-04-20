import React from 'react';
import ServiceTable from '../ServiceTable';

const Laser: React.FC = () => {
    const services = [
        {'service': "Basic Engraving (Text)", 'price': "$60"},
        {'service': "Custom Graphics", 'price': "$100+"},
        {'service': "Laser Engraving", 'price': "$60"},
        {'service': "Artwork Files Conversion", 'price': "$60"},
        {'service': "NFA Engraving", 'price': "$60"},
        {'service': "Non Standard Laser Engrave Locations", 'price': "$40"},
        {'service': "Masking for Laser Engraving", 'price': "$30 + Material Cost"}
    ];

    return (
        <ServiceTable category="Firearm Laser Engraving Pricing" services={services} />
    );
};

export default Laser;
