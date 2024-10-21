// app/products/saj/page.tsx
import React from 'react';
import SajHero from './SajHero';
import SajAbout from './SajAbout';
import SajProducts from './SajProduct';

const SajPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <SajHero />

      {/* About Section */}
      <SajAbout />

      {/* Product Sections */}
      <SajProducts />
    </div>
  );
};

export default SajPage;
