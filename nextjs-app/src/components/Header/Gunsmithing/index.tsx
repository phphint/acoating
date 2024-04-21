import React, { useState, useEffect } from 'react';

const ImageCycler = () => {
    const images = [
        '/nextjs_images/guns/gunsmith-before/gunsmith-before.png',
        '/nextjs_images/guns/gunsmith-before/gunsmith-after.png'
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 3000); // Change image every 3000 milliseconds (3 seconds)

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="container mx-auto px-4 py-5 flex justify-center items-center" style={{ height: '500px' }}> 
                <img src={images[currentImage]} alt="Gunsmith work" className="max-w-full h-auto" style={{ display: 'block', maxHeight: '100%' }} />
            </div>
        </div>
    );
};

export default ImageCycler;
