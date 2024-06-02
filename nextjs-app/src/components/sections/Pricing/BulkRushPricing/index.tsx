import React from 'react';

const BulkRushPricing: React.FC = () => {
    return (
        <div className="w-full px-4 py-6 bg-[#202b2d] mb-0">  {/* Full width and specific background color */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto max-w-7xl">  {/* Centered content with maximum width */}

                {/* Column 1: Average Wait Time */}
                <div className="flex flex-col justify-between bg-[#202b2d] p-4 h-full">
                    <div>
                        <img src="/nextjs_images/icons/bullet-icon.png" alt="Bullet Icon" className="mx-auto mb-2 w-8 h-8" />
                        <h2 className="font-bold text-lg mb-2 text-[#d3d9df]">Average Wait Time</h2>
                        <p className="text-[#d3d9df]">Typically 2-4 weeks</p>
                        <p className="text-sm text-[#d3d9df] italic">Timeframes may vary based on current workload. Opt for rush pricing for quicker service.</p>
                    </div>
                    <p className="text-[#d3d9df]">Prepare accordingly and anticipate top-quality craftsmanship delivered within a practical timeframe.</p>
                </div>

                {/* Column 2: Bulk Order Pricing */}
                <div className="flex flex-col justify-between bg-[#202b2d] p-4 h-full">
                    <div>
                        <img src="/nextjs_images/icons/bullet-icon.png" alt="Bullet Icon" className="mx-auto mb-2 w-8 h-8" />
                        <h2 className="font-bold text-lg mb-2 text-[#d3d9df]">Bulk Order Pricing</h2>
                        <table className="w-full text-[#d3d9df] border-separate" style={{ borderSpacing: '0 10px' }}>
                            <tbody>
                                <tr><td className="border w-1/2 p-2">5-10 Units:</td><td className="border w-1/2 p-2">10% Off</td></tr>
                                <tr><td className="border w-1/2 p-2">11-25 Units:</td><td className="border w-1/2 p-2">15% Off</td></tr>
                                <tr><td className="border w-1/2 p-2">26+ Units:</td><td className="border w-1/2 p-2">30% Off</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Column 3: Rush My Order */}
                <div className="flex flex-col justify-between bg-[#202b2d] p-4 h-full">
                    <div>
                        <img src="/nextjs_images/icons/bullet-icon.png" alt="Bullet Icon" className="mx-auto mb-2 w-8 h-8" />
                        <h2 className="font-bold text-lg mb-2 text-[#d3d9df]">Rush My Order</h2>
                        <table className="w-full text-[#d3d9df] border-separate" style={{ borderSpacing: '0 10px' }}>
                            <tbody>
                                <tr><td className="border w-1/2 p-2">2 Day:</td><td className="border w-1/2 p-2">Add 80%</td></tr>
                                <tr><td className="border w-1/2 p-2">3-6 Day:</td><td className="border w-1/2 p-2">Add 50%</td></tr>
                                <tr><td className="border w-1/2 p-2">7-10 Day:</td><td className="border w-1/2 p-2">Add 25%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-[#d3d9df] italic">Excludes weekends and holidays</p>
                </div>

                {/* Column 4: Additional Info */}
                <div className="flex flex-col justify-between bg-[#202b2d] p-4 h-full">
                    <div>
                        <img src="/nextjs_images/icons/bullet-icon.png" alt="Bullet Icon" className="mx-auto mb-2 w-8 h-8" />
                        <h2 className="font-bold text-lg mb-2 text-[#d3d9df]">Additional Info</h2>
                        <p className="text-[#d3d9df]">For urgent projects, consider our rush options to expedite your order.</p>
                        <p className="text-[#d3d9df]">Utilize our fast-track service for those times when you can't wait.</p>
                    </div>
                    <p className="text-sm text-[#d3d9df] italic">Note: Rush pricing does not include weekends or holidays.</p>
                </div>
            </div>
        </div>
    );
};

export default BulkRushPricing;
