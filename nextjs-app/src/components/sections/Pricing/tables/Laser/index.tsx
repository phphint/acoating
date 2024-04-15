import React from 'react';
import ServiceTable from '../ServiceTable';

const Laser: React.FC = () => {
    const services = [
        {'service': "1911 Slide Text Engraving (up to 20 characters)", 'price': "$60"},
        {'service': "1911 Full Slide Custom Engraving", 'price': "$250"},
        {'service': "Basic Text Engraving (up to 20 characters)", 'price': "$50"},
        {'service': "Extended Text Engraving (21-40 characters)", 'price': "$75"},
        {'service': "Simple Logo Engraving", 'price': "$100"},
        {'service': "Complex Logo Engraving", 'price': "$150"},
        {'service': "Custom Artwork Engraving (Small Area)", 'price': "$120"},
        {'service': "Custom Artwork Engraving (Large Area)", 'price': "$180"},
        {'service': "Serial Number Engraving", 'price': "$40"},
        {'service': "Pattern Engraving on Grips, Slides, etc.", 'price': "$150"},
        {'service': "Cerakote and Engraving Combo (Simple Designs)", 'price': "$200"},
        {'service': "Cerakote and Engraving Combo (Complex Designs)", 'price': "$250"}
    ];

    return <ServiceTable category="Firearm Laser Engraving Pricing" services={services} />;
};

export default Laser;
