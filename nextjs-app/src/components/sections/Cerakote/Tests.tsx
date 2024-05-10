import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from './Modal'; // Make sure the path is correct
import IntroSection from './Intro'; // Adjust path as necessary


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const testDetails = [
    { name: 'Hardness', description: 'Evaluate the resistance to deformation under load.', imageUrl: '/images/cerakote/Hardness.jpg', url: '/index.php/services/cerakote-gun-coatings/hardness.html' },
    { name: 'Flexibility', description: 'Assess the ability to withstand bending and flexing.', imageUrl: '/images/cerakote/Flexibility.jpg', url: '/index.php/services/cerakote-gun-coatings/flexibility.html' },
    { name: 'Chemical Resistance', description: 'Test against common solvents and chemicals.', imageUrl: '/images/cerakote/Friction.jpg', url: '/index.php/services/cerakote-gun-coatings/chemical.html' },
    { name: 'Adhesion', description: 'Measure the bond strength to various substrates.', imageUrl: '/images/cerakote/Adhesion.jpg', url: '/index.php/services/cerakote-gun-coatings/adhesion.html' },
    { name: 'Abrasion', description: 'Determine resistance to surface wear from friction.', imageUrl: '/images/cerakote/Abrasion.jpg', url: '/index.php/services/cerakote-gun-coatings/abrasion.html' },
    { name: 'Generation', description: 'Check the effectiveness in visual and NIR camouflage.', imageUrl: '/images/cerakote/GENII.jpg', url: '/index.php/services/cerakote-gun-coatings/visual.html' },
    { name: 'Friction', description: 'Examine the coefficient of friction under different conditions.', imageUrl: '/images/cerakote/Corrosion.jpg', url: '/index.php/services/cerakote-gun-coatings/friction.html' },
    { name: 'Corrosion', description: 'Discover Cerakote\'s superior corrosion resistance in our detailed corrosion test.', imageUrl: '/images/cerakote/Friction.jpg', url: '/index.php/services/cerakote-gun-coatings/corrosion.html' },
    { name: 'Durability', description: 'Ensures long-lasting protection and maintains the integrity of your firearms even under the toughest conditions.', imageUrl: '/images/cerakote/Durability_Impact.jpg', url: '/index.php/services/cerakote-gun-coatings/durability.html' }
  ];

  const handleOpenModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false, // Changed to false
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
};


  

return (
    <section className="w-full bg-cover bg-center py-12" style={{ backgroundImage: `url('/nextjs_images/cerkote-page/certkote-page-bg.png')` }}>

<IntroSection/>

      <div className="container mx-auto px-4" style={{ backgroundColor: '#8c8b8a', color: '#0f0e0d', minHeight: '300px' }}>
        <Slider {...sliderSettings}>
          {testDetails.map((test, index) => (
            <table key={index} className="table-fixed w-full">
              <tbody>
                <tr>
                  <td className="w-1/4 p-10" style={{ verticalAlign: 'middle' }}>
                    <img src={test.imageUrl} alt={`${test.name} Test Image`} className="w-full h-auto" />
                  </td>
                  <td className="w-3/4 p-10" style={{ verticalAlign: 'middle' }}>
                    <h2 className="text-3xl mb-2">{test.name}</h2>
                    <p className="mb-4">{test.description}</p>
                    <button onClick={() => handleOpenModal(test.url)} className="bg-[#132328] text-[#99a4a8] py-1 px-3  text-center">View Test Result</button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </Slider>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} url={modalUrl} />
      </div>
    </section>
  );
};

export default TestsSection;
