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
    <div className="text-center py-10 bg-cover bg-center" style={{ backgroundImage: "url('/nextjs_images/backgrounds/testimonials-bg.png')" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, text, rating }) => (
            <div key={id} className="bg-[rgba(0,0,0,0.4)] p-6   shadow-xl">
              <div className="mb-4">
                <span style={{ color: '#415454' }}>{'★'.repeat(rating)}</span>
                <span style={{ color: '#bbb' }}>{'☆'.repeat(5 - rating)}</span>
              </div>
              <p className="mb-2 text-white">“{text}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
