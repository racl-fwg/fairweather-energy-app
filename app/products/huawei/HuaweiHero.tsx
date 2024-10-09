import React from 'react';
import HeroInContainerProp from '@/components/Hero/HeroInContainerProp'; // Adjust the import path as necessary

const HuaweiHero: React.FC = () => {
  return (
    <HeroInContainerProp
      header="Huawei Luna2000"
      subHeader="Där säkerhet står i fokus"
      imageSrc="/images/products/huawei/huawei_luna.png"
      buttonText="Kontakta oss"
      buttonLink="/contact"
    />
  );
};

export default HuaweiHero;
