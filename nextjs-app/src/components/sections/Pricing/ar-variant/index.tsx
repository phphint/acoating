 

import React from 'react';

const PricingTables = () => {
  const pricing = [
    {
      category: "AR Cerakote Application Pricing",
      services: [
        { service: "AR-15 / AK47 - Single Color", price: "$120" },
        { service: "AR-15 / AK47 - Bi Tone Color", price: "$249" },
        { service: "AR-15 / AK47 - Camo Pattern (3 Colors)", price: "$375" },
        { service: "Disassemble/Ultra Clean/Reassemble/Lube", price: "Additional charge" },
        { service: "AR Custom Cerakote Color", price: "No additional charge for custom H-Series colors" },
      ],
    },
    {
      category: "AR Laser Engraving Pricing",
      services: [
        { service: "Custom Logo Engraving", price: "$50 and up" },
        { service: "Text Engraving", price: "$25 and up" },
        { service: "Detailed Designs", price: "$75 and up" },
      ],
    },
    {
      category: "AR Gunsmithing Pricing",
      services: [
        { service: "General Services (function check, cleaning, test firing)", price: "$100 and up" },
        { service: "Barrel Services", price: "$150 and up" },
        { service: "Bolt Services", price: "$100 and up" },
        { service: "Trigger Tuning", price: "$100 and up" },
        { service: "Trigger Guard/Magazine Work", price: "$75 and up" },
        { service: "Stock Fitting", price: "$150 and up" },
        { service: "Sight Installation", price: "$50 and up" },
        { service: "Disassembly/Reassembly", price: "$50 and up" },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#678689] text-[#f1fffa]">
      {pricing.map((group, idx) => (
        <div key={idx} className="p-6 mx-auto max-w-7xl ">
          <h2 className="text-2xl font-bold mb-5 text-white">{group.category}</h2>
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-[#3b3a2f]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white border border-gray-600">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white border border-gray-600">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-transparent">
                {group.services.map((service, serviceIdx) => (
                  <tr key={serviceIdx} className="bg-transparent">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white border border-gray-600">{service.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-600">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default PricingTables;
