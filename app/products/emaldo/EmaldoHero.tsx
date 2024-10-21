import React from 'react';
import HeroInContainer from '@/components/Hero/HeroInContainerProp'; // Import the HeroInContainer component

const EmaldoHero = () => {
  return (
    <HeroInContainer
      header="Framtidens energilagring, idag"
      subHeader="Effektiv och pålitlig energilagring med AI"
      imageSrc="/images/products/emaldo/emaldo_power_core_hero.png"
      buttonText="Läs mer"
      buttonLink=""
      buttonType="ArrowButton"
      textPosition="bottom-left"
      openInNewTab={true}
    />
  );
};

export default EmaldoHero;
