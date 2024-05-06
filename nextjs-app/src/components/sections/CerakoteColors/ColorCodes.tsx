import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Color {
  id: number;
  code: string;
  name: string;
  group: string;
  series: string;
  imageUrl: string;
}

type Series = 'c' | 'h';

const ColorCodes: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [filteredColors, setFilteredColors] = useState<Color[]>([]);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 1, total: 0 });
  const [activeTab, setActiveTab] = useState<Series>('c');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const fetchColors = async (page: number) => {
    try {
      const response = await fetch(`https://strapi.acoating.com/api/colors?populate=image&pagination[page]=${page}&pagination[pageSize]=100`);
      const data = await response.json();
      setPagination({
        page: data.meta.pagination.page,
        pageCount: data.meta.pagination.pageCount,
        total: data.meta.pagination.total,
      });
      const newColors = data.data.map((item: any) => ({
        id: item.id,
        code: item.attributes.code,
        name: item.attributes.name,
        group: item.attributes.group,
        series: item.attributes.series,
        imageUrl: `https://strapi.acoating.com${item.attributes.image.data.attributes.url}`,
      }));
      setColors(newColors);
      updateFilteredColors(newColors, activeTab);
    } catch (error) {
      console.error('Failed to load colors:', error);
    }
  };

  useEffect(() => {
    fetchColors(1); // Start from page 1
  }, [activeTab]);

  const updateFilteredColors = (allColors: Color[], series: Series) => {
    setSelectedColor(null);
    setFilteredColors(allColors.filter(color => color.series.toLowerCase() === series));
  };

  const handleTabChange = (series: Series) => {
    setActiveTab(series);
    fetchColors(1); // Refetch data for new series starting from page 1
  };

  const handleColorFilter = (group: string) => {
    if (selectedColor === group) {
      updateFilteredColors(colors, activeTab);
    } else {
      setSelectedColor(group);
      setFilteredColors(colors.filter(color => color.group === group && color.series.toLowerCase() === activeTab));
    }
  };

  const clearFilters = () => {
    updateFilteredColors(colors, activeTab);
  };

  const nextPage = () => {
    if (pagination.page < pagination.pageCount) {
      fetchColors(pagination.page + 1);
    }
  };

  const prevPage = () => {
    if (pagination.page > 1) {
      fetchColors(pagination.page - 1);
    }
  };

  return (
    <div className="bg-[#306069] text-white text-center py-12 pt-0">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Cerakote Color Codes</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <button onClick={() => handleTabChange('c')} className={`py-2 px-4 ${activeTab === 'c' ? 'bg-black text-white' : 'bg-transparent text-gray-300 hover:bg-gray-200'}`}>
            C-Series
          </button>
          <button onClick={() => handleTabChange('h')} className={`py-2 px-4 ${activeTab === 'h' ? 'bg-black text-white' : 'bg-transparent text-gray-300 hover:bg-gray-200'}`}>
            H-Series
          </button>
        </div>
        <div className="flex justify-center space-x-2 mb-4">
          {['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Black', 'White', 'Silver', 'Grey', 'Bronze', 'Gold', 'Tan', 'Brown'].map((color) => (
            <div key={color} onClick={() => handleColorFilter(color)} className={`w-6 h-6 rounded-full bg-${color.toLowerCase()}-500 shadow-md cursor-pointer ${selectedColor === color ? 'ring-2 ring-white' : ''}`} />
          ))}
          <button onClick={clearFilters} className="ml-4 p-1 bg-gray-800 rounded-full text-white text-sm">Clear Filters</button>
        </div>
        <div className="grid grid-cols-8 gap-4">
          {filteredColors.map((color: Color) => (
            <div key={color.id} className="bg-[#FFFFFF] text-black text-center">
              <Image src={color.imageUrl} alt={`${color.name}`} width={100} height={100} layout="responsive" />
              <p>{color.code} - {color.name}</p>
            </div>
          ))}
        </div>
        {pagination.pageCount > 1 && (
          <div className="flex justify-between my-4">
            <button onClick={prevPage} disabled={pagination.page === 1} className={`py-2 px-4 ${pagination.page === 1 ? 'bg-gray-400' : 'bg-blue-500'} text-white`}>
              Previous
            </button>
            <button onClick={nextPage} disabled={pagination.page === pagination.pageCount} className={`py-2 px-4 ${pagination.page === pagination.pageCount ? 'bg-gray-400' : 'bg-blue-500'} text-white`}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorCodes;
