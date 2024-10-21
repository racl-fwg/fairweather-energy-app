import React from 'react';
import HeroPropComponent from '@/components/Hero/HeroPropComponent';

const AboutHero: React.FC = () => {
  return (
    <HeroPropComponent
      header="Vi guidar er till ett smartare batterival"
      textPosition="bottom-right"  // Use the new 'bottom-right' position
      logoPosition="bottom-left"
      imageSrc="/images/about/about-hero.png"
      logoSrc="/logotypes/Fairweather_Energy_Logotype_Energy_RGB.png"
      buttonText="Kontakta oss"
      buttonType="ArrowButton"
      buttonLink="/about#contact"
    />
  );
};

export default AboutHero;
