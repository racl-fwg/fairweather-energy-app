import React from 'react';
import HeroPropComponent from '@/components/Hero/HeroPropComponent';

const AboutHero: React.FC = () => {
  return (
    <HeroPropComponent
      header=""
      imageSrc="/images/about/about-hero.png"
      logoSrc="/logotypes/Fairweather_Energy_Logotype_Energy_RGB.png"
    />
  );
};

export default AboutHero;
