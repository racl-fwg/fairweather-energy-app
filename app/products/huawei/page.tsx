import React from 'react';
import HuaweiHero from './HuaweiHero';
import HuaweiPage from './HuaweiPage';
import PowerBackupSection from './PowerBackupSection';

const HuaweiPageWrapper: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HuaweiHero />

      {/* Main Content Section */}
      <HuaweiPage />

      <PowerBackupSection />
    </>
  );
};

export default HuaweiPageWrapper;
