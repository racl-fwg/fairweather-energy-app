import React from 'react';
import RetrofitHero from './RetrofitHero';
import RetrofitBenefits from './RetrofitBenefits';
import RetrofitSteps from './RetrofitSteps';

const Retrofit: React.FC = () => {
  return (
    <>
      {/* Custom Hero Section */}
      <RetrofitHero />

      <RetrofitBenefits />

      <RetrofitSteps />
    </>
  );
};

export default Retrofit;
