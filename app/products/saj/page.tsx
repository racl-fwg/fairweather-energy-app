import React from 'react';
import SajHero from './SajHero';
import SajAbout from './SajAbout';
import SajProducts from './SajProduct';

export const metadata = {
  title: 'Fairweather Energy | SAJ Energy Solutions',
  description:
    'Utforska SAJ:s avancerade energilagringslösningar för hem och företag. Med skalbarhet och pålitlighet i fokus optimerar SAJ energianvändningen för moderna behov.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | SAJ Energy Solutions',
    description:
      'SAJ levererar innovativa lösningar för energilagring, inklusive hybridväxelriktare och skalbara batterisystem för effektiv energihantering.',
    url: 'https://www.fairweather.energy/products/saj',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SAJ energilösningar - Hållbara och effektiva energisystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | SAJ Energy Solutions',
    description:
      'Effektiva och pålitliga energilösningar från SAJ. Hybridsystem och modulära batterier som passar både bostäder och företag.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/products/saj',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'SAJ Energy Solutions',
        description:
          'SAJ erbjuder avancerade energilagringslösningar med hybridväxelriktare och skalbara batterier, optimerade för bostäder och företag.',
        brand: {
          '@type': 'Brand',
          name: 'SAJ',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://www.fairweather.energy/products/saj',
          priceCurrency: 'SEK',
        },
      }),
    },
  ],
};

const SajPage: React.FC = () => {
  return (
    <div>
      <section id="saj-hero">
        <SajHero />
      </section>
      <section id="saj-about">
        <SajAbout />
      </section>
      <section id="saj-products">
        <SajProducts />
      </section>
    </div>
  );
};

export default SajPage;
