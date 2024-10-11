import React from 'react';
import HeroPropComponent from '@/components/Hero/HeroPropComponent'; // Adjust the path as necessary

const AboutHero: React.FC = () => {
  return (
    <HeroPropComponent
      header="Vi guidar er till ett smartare batterival" // Updated header text
      textPosition="right-center" // Align the text to the right center
      logoPosition="bottom-left" // Place the logo at the bottom-left
      imageSrc="/images/about/about-hero.png" // Background image path
      logoSrc="/logotypes/Fairweather_Energy_Logotype_Energy_RGB.png" // Logo image path
      buttonText="Kontakta oss" // Button text
      buttonType="ArrowButton" // Use ArrowButton for navigation
      buttonLink="/contact" // Set the button link path
    />
  );
};

export default AboutHero;
