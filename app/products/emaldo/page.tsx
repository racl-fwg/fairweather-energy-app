import React from 'react';
import EmaldoHero from './EmaldoHero'; // Import the EmaldoHero component
import EmaldoProduct from './EmaldoProduct'; // Import the EmaldoProduct component
import EmaldoAbout from './EmaldoAbout';

const EmaldoPage: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">

      {/* Emaldo Hero Section */}
      <EmaldoHero />

      <EmaldoAbout />
      
      {/* Emaldo Product Carousel Section */}
      <EmaldoProduct />
    </div>
  );
};

export default EmaldoPage;
