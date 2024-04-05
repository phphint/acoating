import React from "react";

const Testimonials = () => {
  // Selected real testimonials emphasizing quality and customer satisfaction
  const testimonials = [
    { id: 1, text: `Acoating did a 2 tone Cerakote on my stainless AMT Longslide almost 2 years ago. It looks like he did it yesterday.`, author: "Customer Feedback" },
    { id: 2, text: `Fantastic work! Tim made the old Sig look new again and really went the extra mile to ensure I got what I wanted. WTM`, author: "WTM" },
    { id: 3, text: `The attention to detail and unbelievable turn-around time makes Acoating arguably the most sought out gunsmith and applicator of Cerakote in the Phoenix area.`, author: "Phoenix Area Customer" },
  ];

  return (
    <div className="bg-[#77adb6] text-[#030f25] py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-[#75a6b1] border-2 border-[#c4e6ee]  shadow-md">
           
              <p className="text-lg italic">{testimonial.text}</p>
              <p className="mt-4 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
