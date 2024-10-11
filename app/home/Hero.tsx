// app/components/Hero/Hero.tsx
import React from 'react';
import HeroPropComponent from '@/components/Hero/HeroPropComponent'; // Import the new HeroPropComponent

const Hero: React.FC = () => {
  return (
    <HeroPropComponent
      header="Renewable energy for a sustainable future with sunlight shaping our tomorrow"
      textPosition="left-center"
      logoPosition="bottom-left"
      imageSrc="/images/home/hero.png"
      logoSrc="/logotypes/Energy_Logotype_Energy_RGB.png"
    />
  );
};

export default Hero;
