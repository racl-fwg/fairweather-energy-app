import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Adjust the import path as necessary

const HuaweiHero: React.FC = () => {
  return (
    <HeroComponent
      header="Huawei Luna2000"
      subHeader="Där säkerhet står i fokus"
      imageSrc="/images/products/huawei/huawei_luna.png"
      buttonText="Kontakta oss"
      buttonLink="/contact"
      buttonType="ArrowButton" // Use ArrowButton for navigation
      textPosition="center" // Center the text if desired, or use 'bottom-left'
    />
  );
};

export default HuaweiHero;
