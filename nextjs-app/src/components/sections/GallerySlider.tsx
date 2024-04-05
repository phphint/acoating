import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GallerySlider: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(8);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(2); // For mobile
      } else if (width >= 768 && width < 1024) {
        setSlidesToShow(4); // For tablets
      } else {
        setSlidesToShow(8); // For desktop
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
    "/media/quality-site-images/10_22_rifle_stock_multiple_designs_1_20130929_1765400655.jpg",
    "/media/quality-site-images/1911_1_20130923_1025911405.jpg",
    "/media/quality-site-images/1911_2_20130923_1321771408.jpg",
    "/media/quality-site-images/1911_2_20130923_1881006951.jpg",
    "/media/quality-site-images/1911_2_20131009_1930961977.jpg",
    "/media/quality-site-images/1911_3_20130923_1549376885.jpg",
    "/media/quality-site-images/1911_test_9_20130812_1286560940.jpg",
    "/media/quality-site-images/1_week_in_alaska_before_and_after_2_20130815_1272271766.jpg",
    "/media/quality-site-images/1st_place_project_photo_contest_winners_by_acoatingcom_3_20131007_1801911000.jpg",
    "/media/quality-site-images/1st_place_project_photo_contest_winners_by_acoatingcom_4_20131007_1485994259.jpg",
    "/media/quality-site-images/1st_place_project_photo_contest_winners_by_acoatingcom_5_20131007_1190291023.jpg",
    "/media/quality-site-images/ar-15_parts_1_20140323_1115369834.jpg",
    "/media/quality-site-images/ar-15_tactcial_group_3_20131007_1816461806.jpeg",
    "/media/quality-site-images/ar-15_tactcial_group_7_20131007_1455152533.jpg",
    "/media/quality-site-images/ar-15s_bi_tone_in_fde_and_coyote_tan_1_20130929_1971913606.jpg",
    "/media/quality-site-images/basic_hunting_rifle_build_up_1_20130814_1083256699.jpg",
    "/media/quality-site-images/before_and_after_1_20130815_1345146279.jpg",
    "/media/quality-site-images/before_and_after_2_20130815_2055750388.jpg",
"/media/quality-site-images/before_and_after_shotgun_7_20130815_1735750866.jpg",
"/media/quality-site-images/bolt_action_sniper_tactical_rifles_2_20131007_1463636460.jpg",
"/media/quality-site-images/bolt_action_sniper_tactical_rifles_4_20131007_1509919372.jpg",
"/media/quality-site-images/bolt_action_sniper_tactical_rifles_5_20131007_1771635220.jpg",
"/media/quality-site-images/bolt_action_sniper_tactical_rifles_7_20131007_1524332114.png",
"/media/quality-site-images/cerakote_gun_coatings_by_acoatingcom_1_20140323_1182067334.jpg",
"/media/quality-site-images/cerakote_gun_coatings_by_acoatingcom_1_20140323_1752411370.jpg",
"/media/quality-site-images/custom_airbrushed_ar-15_in_cerakote_coat_gun_coatings_by_acoatingcom_1_20140323_1318371634.jpg",
"/media/quality-site-images/custom_cerakote_1911s_by_acoatingcom_1_20140323_1005751437.jpg",
"/media/quality-site-images/hunting_custom_rifles_1_20131007_1417364571.jpg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_10_20130815_1055419194.jpg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_11_20130815_2040980996.jpg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_13_20130815_1222921421.jpeg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_4_20130815_2062070395.jpeg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_5_20130815_1034632314.jpg",
"/media/quality-site-images/hunting_rifles_customized_or_refinished_7_20130815_1609474339.jpg",
"/media/quality-site-images/ladies_and_girls_projects_8_20130815_1855365595.jpg",
"/media/quality-site-images/manufactures_batch_of_ar-15_receivers_1_20130814_1417092644.jpg",
"/media/quality-site-images/manufactures_batch_of_ar-15_receivers_5_20130814_1456725133.jpg",
"/media/quality-site-images/revolver_2_20131007_1097485863.png",
"/media/quality-site-images/shotguns_2_20131007_1205793686.jpg",
"/media/quality-site-images/skull_design_camo_by_acoatingcom_1_20130814_1102541055.jpg",
"/media/quality-site-images/tactical_rifle_accumulation_10_20130815_1599612483.jpg",
"/media/quality-site-images/tactical_rifle_accumulation_12_20130815_1010228036.jpg",
"/media/quality-site-images/tactical_rifles_1_20131009_1764994990.jpg",
"/media/quality-site-images/tactical_rifles_6_20131009_1241940898.jpg",
"/media/quality-site-images/urban_camo_1_20130815_1500349643.jpg",
"/media/quality-site-images/winning_projects_3_20130815_1281282220.jpg",

    // Add more images as needed
  ];

  return (
    <section className="w-full text-menu-text">
      <div className="container mx-auto px-8 py-8">
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <div key={index} className="px-2">
              {/* Image container to control size */}
              <div style={{ width: '100%', height: '150px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={imgSrc} 
                  alt={`Slide ${index + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySlider;
