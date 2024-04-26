import React from 'react';

type Service = {
    service: string;
    price: string;
};

type ServiceTableProps = {
    category: string;
    services: Service[];
};

const ServiceTable: React.FC<ServiceTableProps> = ({ category, services }) => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-center text-white mt-10">{category}</h2>
            <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-[#3b3a2f]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white border border-gray-600">
                                Service
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-white border border-gray-600">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-transparent">
                        {services.map((service, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#202b2d]' : 'bg-[#202b2d] bg-opacity-75'}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white border border-gray-600">
                                    {service.service}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-right border border-gray-600">
                                    {service.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceTable;
