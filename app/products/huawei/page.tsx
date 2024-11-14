import React from 'react';
import HuaweiHero from './HuaweiHero';
import HuaweiPage from './HuaweiPage';
import PowerBackupSection from './PowerBackupSection';
import HomeBatteryCarousel from './HomeBatteryCarousel';
import ESSBatteryCarousel from './ESSBatteryCarousel';

export const metadata = {
  title: 'Fairweather Energy | Huawei Energy Solutions',
  description:
    'Utforska Huaweis innovativa energilagringslösningar för både hem och industri. Effektiva och flexibla system för energibesparingar och hållbarhet.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Huawei Energy Solutions',
    description:
      'Fairweather Energy presenterar Huaweis energieffektiva lagringslösningar som erbjuder flexibilitet och säkerhet för bostäder och företag.',
    url: 'https://www.fairweather.energy/products/huawei',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Huawei energilagringslösningar för hållbar energi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Huawei Energy Solutions',
    description:
      'Huawei erbjuder hållbara och flexibla lösningar för energilagring. Anpassade för att möta behoven hos både privatpersoner och företag.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/products/huawei',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Huawei Energy Solutions',
        description:
          'Huawei erbjuder flexibla energilagringslösningar för hem och kommersiella tillämpningar. Perfekt för energibesparing och pålitlig backup.',
        brand: {
          '@type': 'Brand',
          name: 'Huawei',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://www.fairweather.energy/products/huawei',
          priceCurrency: 'SEK',
        },
      }),
    },
  ],
};

const HuaweiPageWrapper: React.FC = () => {
  return (
    <>
      <main>
        <section id="huawei-hero">
          <HuaweiHero />
        </section>
        <section id="huawei-page">
          <HuaweiPage />
        </section>
        <section id="power-backup">
          <PowerBackupSection />
        </section>
        <section id="home-battery-carousel">
          <HomeBatteryCarousel />
        </section>
        <section id="ess-battery-carousel">
          <ESSBatteryCarousel />
        </section>
      </main>
    </>
  );
};

export default HuaweiPageWrapper;
