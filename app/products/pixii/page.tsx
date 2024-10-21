// app/products/pixii/page.tsx
"use client";
import React from 'react';
import PixiiHero from './PixiiHero'; // Importing the PixiiHero component
import PixiiAbout from './PixiiAbout';
import ProductInformation from './ProductInformation';

const PixiiPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <PixiiHero />
      <PixiiAbout />
      <ProductInformation />
      {/* Other sections or content for the Pixii product page can go here */}
      {/* For example, additional text, image sections, product details, etc. */}
      
    </div>
  );
};

export default PixiiPage;
