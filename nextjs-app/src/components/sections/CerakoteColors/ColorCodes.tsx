import React, { useState } from 'react';
import Image from 'next/image';

// Define a TypeScript interface for the TabContent component props
interface TabContentProps {
  seriesType: 'c' | 'h';  // Limiting the type to either 'c' or 'h'
}

const TabContent: React.FC<TabContentProps> = ({ seriesType }) => (
    <div className="grid grid-cols-8 gap-4">
        {/* Using a placeholder image for each color slot */}
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 1`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 2`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 3`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 4`} layout="responsive" width={100} height={100} />
        {/* Repeat the pattern above for the second row */}
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 5`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 6`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 7`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 8`} layout="responsive" width={100} height={100} />
           {/* Using a placeholder image for each color slot */}
           <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 1`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 2`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 3`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 4`} layout="responsive" width={100} height={100} />
        {/* Repeat the pattern above for the second row */}
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 5`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 6`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 7`} layout="responsive" width={100} height={100} />
        <Image src="/nextjs_images/super-grip-sg-100-dt20240115165859855987-thumbnail.jpg" alt={`${seriesType} Color 8`} layout="responsive" width={100} height={100} />

   
    </div>
);

const ColorCodes: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'c' | 'h'>('c'); // Set the initial state type

    return (
        <div className="bg-[#306069] text-white text-center py-12 pt-0">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Cerakote Color Codes</h1>
                <div className="flex justify-center space-x-4 mb-6">
                    <button onClick={() => setActiveTab('c')} className={`py-2 px-4 ${activeTab === 'c' ? 'bg-black' : 'bg-[#bc651d]'}`}>C-Series</button>
                    <button onClick={() => setActiveTab('h')} className={`py-2 px-4 ${activeTab === 'h' ? 'bg-black' : 'bg-[#bc651d]'}`}>H-Series</button>
                </div>
                {activeTab === 'c' ? <TabContent seriesType="c" /> : <TabContent seriesType="h" />}
            </div>
        </div>
    );
};

export default ColorCodes;
