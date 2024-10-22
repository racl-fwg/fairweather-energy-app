import React from 'react';
import HeroInContainer from '@/components/Hero/HeroInContainerProp'; // Import the HeroInContainer component

const EmaldoHero = () => {
  return (
    <HeroInContainer
      header="Framtidens energilagring, idag"
      subHeader="Effektiv och pålitlig energilagring med AI"
      imageSrc="/images/products/emaldo/emaldo_hero.png"
      buttonText="Läs mer"
      buttonLink=""
      buttonType="ArrowButton"
      textPosition="bottom-left"
      logoSrc="/images/products/emaldo/emaldo_logo_vit.png"
      logoSize="huge"
    />
  );
};

export default EmaldoHero;
