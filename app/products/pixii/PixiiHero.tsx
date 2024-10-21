import React from 'react';
import HeroInContainer from '@/components/Hero/HeroInContainerProp'; // Import the HeroInContainer component

const PixiiHero = () => {
  return (
    <HeroInContainer
      header="Där säkerhet står i fokus"
      subHeader="Säkerhetslösningar som gör skillnad"
      imageSrc="/images/products/pixii/pixii_garage_car.png"
      buttonText="Kontakta oss"
      buttonLink="/kontakt"
      buttonType="ArrowButton"
      textPosition="bottom-left"
      logoSrc="/images/products/pixii/Pixii_logo.png"
      logoSize="large" // You can change this to small, medium, or large
    />
  );
};

export default PixiiHero;
