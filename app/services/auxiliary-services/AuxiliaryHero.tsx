"use client";
import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Import the updated HeroComponent

const AuxiliaryHero: React.FC = () => {
  return (
    <HeroComponent
      header="Vill du vara aktiv på stödtjänstmarknaden?"
      imageSrc="/images/auxiliary-services/water_grid_trees.png"
      buttonText="Få en fri offert"
      buttonType="ArrowQuoteButton" // Use ArrowQuoteButton to trigger the quote modal
      textPosition="bottom-left" // Position text and button at the bottom-left corner
    />
  );
};

export default AuxiliaryHero;
