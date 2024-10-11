import React from 'react';
import SustainabilityHero from './SustainabilityHero';
import GlobalGoals from './GlobalGoals';
import SustainabilityInitiatives from './SustainabilityInitiatives';
import GlobalTransitionRole from './GlobalTransitionRole';

const SustainabilityPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SustainabilityHero />

      {/* Global Goals Section */}
      <GlobalGoals />

      {/* Placeholder for Initiatives Section */}
      <SustainabilityInitiatives />    

      <GlobalTransitionRole />

    </div>
  );
};

export default SustainabilityPage;
