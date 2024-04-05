// Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "The attention to detail on the custom engraving was incredible. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      text: "My firearm looks brand new with the Cerakote coating. Exceptional quality and service.",
      rating: 5,
    },
    {
      id: 3,
      text: "After Acoating's gunsmithing, my firearm performs better than ever. Professional, skilled, and reliable services that I trust.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#eae9e7] text-center py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, text, rating }) => (
            <div key={id} className="bg-[#fffffe] p-6 rounded-lg shadow-md">
              <div className="text-[#393a38] mb-4">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
              </div>
              {/* Added quotes around the text */}
              <p className="mb-2 text-[#393a38]">“{text}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
