// app/products/saj/SajHero.tsx
"use client";
import React from "react";
import HeroComponent from "@/components/Hero/HeroInContainerProp";

const SajHero: React.FC = () => {
  return (
    <HeroComponent
      header="Hållbar kraft, smart lagring"
      subHeader="En komplett energilösning för ditt hem"
      imageSrc="/images/products/saj/saj_hero.png"  // SAJ hero background image
      buttonText="Kontakta oss"
      buttonLink="/about#contact"  // Link to the contact page
      buttonType="ArrowButton"
      textPosition="bottom-left"
      logoSrc="/images/products/saj/saj_hero_logo.png"
      logoSize="large"
    />
  );
};

export default SajHero;
