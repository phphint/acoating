import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
  testimonial: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, author }) => (
  <div className="p-10 bg-[#2d3751] text-[#d7dfe3ff] mb-2 shadow-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
    <div className="flex items-center mb-1">
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    </div>
    <p className="italic text-sm">“{testimonial}”</p>
    <p className="text-right mt-2">- {author}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Acoating",
    "url": "https://www.acoating.com",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jordan M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Acoating did a 2 tone Cerakote on my stainless AMT Longslide almost 2 years ago. It looks like he did it yesterday."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Taylor R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The attention to detail and unbelievable turn-around time makes Acoating arguably the most sought out gunsmith and applicator of Cerakote in the Phoenix area."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Alex P."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Thank you for the quick turnaround and excellent customer service. Acoating stands out for quality, innovation, and customer satisfaction."
      }
    ]
  };

  return (
    <section className="w-full text-[#d7dfe3ff] py-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Testimonial
            testimonial="Acoating did a 2 tone Cerakote on my stainless AMT Longslide almost 2 years ago. It looks like he did it yesterday."
            author="Jordan M."
          />
          <Testimonial
            testimonial="The attention to detail and unbelievable turn-around time makes Acoating arguably the most sought out gunsmith and applicator of Cerakote in the Phoenix area."
            author="Taylor R."
          />
          <Testimonial
            testimonial="Thank you for the quick turnaround and excellent customer service. Acoating stands out for quality, innovation, and customer satisfaction."
            author="Alex P."
          />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default Testimonials;
