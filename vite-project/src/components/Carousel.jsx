import React from 'react';
import CarouselConteiner from './Carousel'; // Importamos el componente Carousel

import imagesData from './img.json'; // Ajusta la ruta según tu estructura de archivos

const Carousel = () => {
  return (
    <div>
      <h1>My Image Carousel</h1>
      <CarouselComponent images={imagesData} />
    </div>
  );
};

export default Carousel;