import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Adjust the import path as necessary

const HuaweiHero: React.FC = () => {
  return (
    <HeroComponent
      header="Huawei Luna2000"
      subHeader="Där säkerhet står i fokus"
      imageSrc="/images/products/huawei/huawei_hero.png"
      buttonText="Kontakta oss"
      buttonLink="/contact"
      buttonType="ArrowButton" // Use ArrowButton for navigation
      textPosition="bottom-left" // Center the text if desired, or use 'bottom-left'
      logoSrc="/images/products/huawei/huawei_hero_logo.png"
      logoSize="small"
    />
  );
};

export default HuaweiHero;
