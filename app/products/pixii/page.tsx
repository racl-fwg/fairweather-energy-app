import React from 'react';
import PixiiHero from './PixiiHero';
import PixiiAbout from './PixiiAbout';
import ProductInformation from './ProductInformation';

export const metadata = {
  title: 'Fairweather Energy | Pixii Energy Solutions',
  description:
    'Utforska Pixii, modulära energilagringssystem för hem och företag. Med skalbarhet och säkerhet som fokus optimerar Pixii din energiförbrukning.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Pixii Energy Solutions',
    description:
      'Pixii levererar innovativa energilagringslösningar. Designade för bostäder och kommersiella applikationer, med säkerhet och flexibilitet i fokus.',
    url: 'https://www.fairweather.energy/products/pixii',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixii Energy Solutions - Innovativ energilagring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Pixii Energy Solutions',
    description:
      'Effektiva och hållbara Pixii energilösningar. Modulär design och hög prestanda för hem och kommersiella energibehov.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/products/pixii',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Pixii Energy Solutions',
        description:
          'Pixii erbjuder skalbara energilagringslösningar för bostäder och företag. Säker och hållbar med flexibel kapacitet och hög prestanda.',
        brand: {
          '@type': 'Brand',
          name: 'Pixii',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://www.fairweather.energy/products/pixii',
          priceCurrency: 'SEK',
        },
      }),
    },
  ],
};

const PixiiPage = () => {
  return (
    <div>
      <section id="pixii-hero">
        <PixiiHero />
      </section>
      <section id="pixii-about">
        <PixiiAbout />
      </section>
      <section id="product-information">
        <ProductInformation />
      </section>
    </div>
  );
};

export default PixiiPage;
