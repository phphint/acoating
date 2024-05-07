import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Color {
  id: number;
  code: string;
  name: string;
  group: string;
  series: string;
  imageUrl: string;
}

type Series = 'C' | 'H';

const ColorCodes: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [filteredColors, setFilteredColors] = useState<Color[]>([]);
  const [activeTab, setActiveTab] = useState<Series>('C');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch colors based on series
  const fetchColors = useCallback(async (series: Series) => {
    setLoading(true);
    try {
      const response = await fetch(`https://strapi.acoating.com/api/colors?populate=image&filters[series][$eq]=${series}&pagination[pageSize]=250`);
      const data = await response.json();
      const newColors = data.data.map((item: any) => ({
        id: item.id,
        code: item.attributes.code,
        name: item.attributes.name,
        group: item.attributes.group,
        series: item.attributes.series,
        imageUrl: `https://strapi.acoating.com${item.attributes.image.data.attributes.url}`,
      }));
      setColors(newColors);
    } catch (error) {
      console.error('Failed to load colors:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect for fetching colors when tab changes
  useEffect(() => {
    fetchColors(activeTab);
  }, [activeTab, fetchColors]);

  const handleTabChange = (series: Series) => {
    setActiveTab(series);
    clearFilters();
  };

  const handleColorFilter = (group: string) => {
    setSelectedColor(group);
    const filtered = colors.filter(color => color.group === group && color.series === activeTab);
    setFilteredColors(filtered);
  };

  const clearFilters = () => {
    setFilteredColors(colors);
    setSelectedColor(null);
  };

  return (
    <div className="bg-[#306069] text-white text-center py-12 pt-0">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Cerakote Color Codes</h1>
        {loading ? <p>Loading...</p> : (
          <>
            <div className="flex justify-center space-x-4 mb-6">
              <button onClick={() => handleTabChange('C')} className={`py-2 px-4 ${activeTab === 'C' ? 'bg-black text-white' : 'bg-transparent text-gray-300 hover:bg-gray-200'}`}>
                C-Series
              </button>
              <button onClick={() => handleTabChange('H')} className={`py-2 px-4 ${activeTab === 'H' ? 'bg-black text-white' : 'bg-transparent text-gray-300 hover:bg-gray-200'}`}>
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
                <div key={color.id} className="text-center">
                  <Image src={color.imageUrl} alt={`${color.name}`} width={100} height={100} layout="responsive" />
                  <p>{color.code} - {color.name}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ColorCodes;
