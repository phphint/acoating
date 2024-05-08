import React, { useState, useEffect } from 'react';
import ServiceTable from './ServiceTable';

const PricingTables = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch('https://strapi.acoating.com/api/price-tables?populate=*');
        const data = await response.json();
        const transformedData = data.data.map((item) => ({
          category: item.attributes.Title,
          services: item.attributes.entries.map((entry) => ({
            service: entry.Service,
            price: entry.Price
          }))
        }));
        setServicesData(transformedData);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServiceData();
  }, []);

  return (
         <div className="grid grid-cols-3 gap-4">
          {servicesData.map((serviceCategory, index) => (
            <ServiceTable key={index} category={serviceCategory.category} services={serviceCategory.services} />
          ))}
       </div>
   );
};

export default PricingTables;
