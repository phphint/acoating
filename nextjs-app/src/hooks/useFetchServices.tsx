import { useState, useEffect } from 'react';

type Service = {
    service: string;
    price: string;
};

type UseFetchServicesReturn = {
    services: Service[];
    loading: boolean;
    error: Error | null;
};

const useFetchServices = (endpoint: string, title: string): UseFetchServicesReturn => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://strapi.acoating.com/api/${endpoint}?populate=*`);
                const data = await response.json();
                
                if (!data.data) {
                    throw new Error("No data received from the API");
                }

                const filteredData = data.data.find((item: any) => item.attributes.Title === title);
                
                if (!filteredData) {
                    throw new Error(`No entries found with the title: ${title}`);
                }

                const entries = filteredData.attributes.entries.map((entry: any) => ({
                    service: entry.Service,
                    price: entry.Price
                }));

                setServices(entries);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, title]);

    return { services, loading, error };
};

export default useFetchServices;
