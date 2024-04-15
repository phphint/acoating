import React from 'react';
import ServiceTable from '../ServiceTable';

const SemiAuto: React.FC = () => {
    const services = [
        { 'service': "Single Color", 'price': "$200" },  // Standard single color Cerakote application for semi-auto firearms
        { 'service': "Two-Tone Color", 'price': "$240" },  // Two-tone color application
        { 'service': "Tri-Tone Color", 'price': "$280" },  // Adding a third color for more complex designs
        { 'service': "Camouflage Pattern (up to 4 colors)", 'price': "$320" },  // Camouflage patterns using up to four colors
        { 'service': "Custom Airbrush Design", 'price': "Starts at $400" },  // Custom designs that may involve detailed airbrushing
        { 'service': "Graphic or Thematic Designs", 'price': "Quote based" }  // Specialized graphic or thematic designs (e.g., patriotic themes, wildlife)
    ];

    return (
        <ServiceTable category="SemiAuto Cerakote Pricing" services={services} />
    );
};

export default SemiAuto;
