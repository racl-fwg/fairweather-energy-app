import React from 'react';
import EmaldoHero from './EmaldoHero';
import EmaldoProduct from './EmaldoProduct';
import EmaldoAbout from './EmaldoAbout';

export const metadata = {
  title: 'Fairweather Energy | Emaldo Energy Solutions',
  description:
    'Upptäck Emaldo energilagringslösningar för moderna hem. Smarta och hållbara system med AI-optimering och flexibilitet för framtidens energibehov.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Emaldo Energy Solutions',
    description:
      'Emaldo erbjuder innovativa energilagringssystem för hem och företag. Med avancerad teknik och hållbarhet i fokus är de framtidens lösningar.',
    url: 'https://www.fairweather.energy/products/emaldo',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emaldo energilösningar - hållbar och effektiv energihantering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Emaldo Energy Solutions',
    description:
      'Effektiva och flexibla energilagringslösningar från Emaldo. Upplev smart energihantering med AI-teknologi och avancerad anslutning.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/products/emaldo',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Emaldo Energy Solutions',
        description:
          'Emaldo erbjuder smarta energilagringssystem med AI-optimering, flexibel kapacitet och hög säkerhet. Anpassade för dagens energibehov.',
        brand: {
          '@type': 'Brand',
          name: 'Emaldo',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://www.fairweather.energy/products/emaldo',
          priceCurrency: 'SEK',
        },
      }),
    },
  ],
};

const EmaldoPage: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">
      <section id="emaldo-hero">
        <EmaldoHero />
      </section>
      <section id="emaldo-about">
        <EmaldoAbout />
      </section>
      <section id="emaldo-product">
        <EmaldoProduct />
      </section>
    </div>
  );
};

export default EmaldoPage;
