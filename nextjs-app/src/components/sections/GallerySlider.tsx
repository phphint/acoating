import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageDetails {
  id: number;
  thumbnailUrl: string;
  fullImageUrl: string;
}

const GallerySlider = () => {
  const [images, setImages] = useState<ImageDetails[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageDetails | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('https://strapi.acoating.com/api/galleries?populate=Image&pagination[limit]=5');
        const data = await response.json();
        const fetchedImages = data.data.flatMap((galleryItem: any) =>
          galleryItem.attributes?.Image?.data?.map((imageData: any) => {
            const { formats, url: imageUrl } = imageData.attributes;
            const thumbnailUrl = formats?.thumbnail ? `https://strapi.acoating.com${formats.thumbnail.url}` : '/nextjs_images/backgrounds/blue-wood-bg.png';
            return {
              id: imageData.id,
              thumbnailUrl,
              fullImageUrl: `https://strapi.acoating.com${imageUrl}`
            };
          }) || []
        );
        setImages(fetchedImages);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    }
    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const openModal = (img: ImageDetails, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedImage(img);
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id} className="px-2" onClick={(e) => openModal(img, e)}>
            <div style={{ position: 'relative', width: '100%', height: '150px' }}>
              <Image
                src={img.thumbnailUrl}
                alt="Thumbnail"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
          </div>
        ))}
      </Slider>
      {selectedImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          ariaHideApp={false}
          style={{
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              zIndex: 1050
            },
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1040
            }
          }}
        >
          <button onClick={closeModal} style={{   zIndex: 1061, position: 'absolute', top: '0px', right: '0px', border: 'none', background: 'transparent', fontSize: '24px', color: '#333' }}>&times;</button>

          {selectedImage && (
            <div style={{ width: 'auto', maxHeight: '80vh', overflow: 'hidden' }}>

              <Image
                src={selectedImage.fullImageUrl}
                alt="Full size"
                layout="responsive"
                width={700} // Assuming a max width for the image
                height={700} // Assuming a max height based on aspect ratio
                objectFit="contain"
              />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default GallerySlider;
