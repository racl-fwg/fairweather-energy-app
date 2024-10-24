"use client";
import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Import the updated HeroComponent

const SustainabilityHero: React.FC = () => {
  return (
    <HeroComponent
      header="Fairweather Energys Hållbarhetsmål"
      subHeader="" // Optional, can be omitted if no subheader is needed
      imageSrc="/images/sustainability/Hero.png" // Updated path for Sustainability Hero image
      buttonText="Kontakta oss"
      buttonLink="/about#contact" // Link to the contact page
      buttonType="ArrowButton" // Use ArrowButton for navigation
      textPosition="bottom-left" // Align text and button at the bottom-left
    />
  );
};

export default SustainabilityHero;
