import React from 'react';

const TestimonialsHeader: React.FC = () => {
    return (
        <header className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0" style={{ backgroundColor: '#0c2225', height: '66vh' }}>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
                <div className="lg:w-1/2 lg:pr-10 text-justify">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left">Customer Testimonials</h1>
                    <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
                        See What Our Customers Are Saying
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
                        At <b>Acoating</b>, we take pride in our quality of work and customer satisfaction. Read through the testimonials to see how we have helped customers with their projects.
                    </p>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src="/nextjs_images/icons/Testimonials_icon.png" alt="Customer Testimonials" className="max-w-xs md:max-w-sm lg:max-w-full h-auto mb-8 lg:mb-0" />
                </div>
            </div>
        </header>
    );
};

export default TestimonialsHeader;
