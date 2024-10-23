import React from 'react';
import AuxiliaryHero from './AuxiliaryHero'; // Adjust path as necessary
import ServiceSteps from './ServiceSteps';
import ValueReturn from './ValueReturn';
import Benefits from './Benefits';
import AnimatedCarouselCards from './AninmatedCarouselCards';
import IntroAuxiliary from './IntroAuxiliary';

const AuxiliaryServices: React.FC = () => {
  return (
    <>
      {/* Custom Hero Section */}
      <AuxiliaryHero />

      <IntroAuxiliary />

      {/* Service Steps Section */}
      <ServiceSteps />

      <AnimatedCarouselCards />

      {/* Value Return Section */}
      <ValueReturn />

      {/* Benefits Section */}
      <Benefits />
    </>
  );
};

export default AuxiliaryServices;
