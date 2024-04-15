import React from 'react';
import ServiceTable from '../ServiceTable';

const Gunsmithing: React.FC = () => {
    const services = [
        { 'service': "Firearm Inspection and Cleaning", 'price': "$80" },
        { 'service': "Trigger Job - Standard", 'price': "$100" },
        { 'service': "Sight Installation - Iron Sights", 'price': "$45" },
        { 'service': "Sight Installation - Optical Sights", 'price': "$55" },
        { 'service': "Action Smoothing", 'price': "$150" },
        { 'service': "Barrel Threading", 'price': "$120" },
        { 'service': "Recoil Pad Installation", 'price': "$70" },
        { 'service': "Custom Engraving", 'price': "Starts at $200" },
        { 'service': "Stock Refinishing", 'price': "$130" },
        { 'service': "Complete Firearm Build/Assembly", 'price': "Varies" }
    ];

    return <ServiceTable category="Gunsmithing Services Pricing" services={services} />;
};

export default Gunsmithing;
