import React, { useState } from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const photos = [
  { src: image1, alt: 'first image alt text' },
  { src: image2, alt: 'second image alt text' },
  { src: image3, alt: 'third image alt text' }
];

function Carousel() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIdx((currentImageIdx + 1) % photos.length);
  };

  return (
    <div data-testid="carousel">
      <img src={photos[currentImageIdx].src} alt={photos[currentImageIdx].alt} />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
}

export default Carousel;