import React from 'react';
import ServiceTable from '../ServiceTable'; // Assuming this component is designed to display arrays of services

const CerakoteAddOns: React.FC = () => {
    // List of add-on services specifically for Cerakote applications
    const addOnServices = [
        { 'service': "Shop Supplies", 'price': "$20", 'description': "Minimum per project for various shop supplies needed."},
        { 'service': "Disassembly & Reassembly", 'price': "$80+", 'description': "Required for complete and effective Cerakote applications."},
        { 'service': "Metal Defect Repairs", 'price': "$60+", 'description': "Repairs and prepares surface for Cerakote application."},
        { 'service': "Additional Coating Removal", 'price': "$40+", 'description': "Removes old coatings for new Cerakote layer."},
        { 'service': "Cleanup Supplies", 'price': "$30", 'description': "For cleaning up equipment after applying light colors."},
        { 'service': "Masking", 'price': "$30+", 'description': "Used for masking areas not to be painted during Cerakote application."}
    ];

    return (
        <div>
            <h2>Add-Ons for Cerakote Applications</h2>
            <ServiceTable category="Cerakote Application Add-Ons" services={addOnServices} />
        </div>
    );
};

export default CerakoteAddOns;
