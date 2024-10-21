import React from 'react';
import HuaweiHero from './HuaweiHero';
import HuaweiPage from './HuaweiPage';
import PowerBackupSection from './PowerBackupSection';
import HomeBatteryCarousel from './HomeBatteryCarousel';
import ESSBatteryCarousel from './ESSBatteryCarousel';

const HuaweiPageWrapper: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HuaweiHero />

      {/* Main Content Section */}
      <HuaweiPage />

      <PowerBackupSection />

      <HomeBatteryCarousel />

      <ESSBatteryCarousel />
    </>
  );
};

export default HuaweiPageWrapper;
