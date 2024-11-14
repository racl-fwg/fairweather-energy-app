import React from 'react';
import RetrofitHero from './RetrofitHero';
import RetrofitBenefits from './RetrofitBenefits';
import RetrofitSteps from './RetrofitSteps';

export const metadata = {
  title: 'Fairweather Energy | Retrofit Services',
  description:
    'Optimera ditt befintliga solcellsystem med Fairweather Energy. Vi erbjuder batterilagring och systemuppgraderingar för ökad effektivitet och lägre kostnader.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Retrofit Services',
    description:
      'Fairweather Energy hjälper dig att uppgradera ditt solcellsystem med modern batteriteknologi. Maximera dina energibesparingar och minska beroendet av elnätet.',
    url: 'https://www.fairweather.energy/services/retrofit',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Retrofitting - Uppgradera dina solceller med batterilagring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Retrofit Services',
    description:
      'Uppgradera ditt solcellsystem med Fairweather Energy. Batterilagring och optimering för framtidens energibehov.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/services/retrofit',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Retrofit Services',
        description:
          'Fairweather Energy erbjuder batterilagring och uppgraderingar för befintliga solcellsystem, vilket förbättrar effektivitet och energibesparingar.',
        provider: {
          '@type': 'Organization',
          name: 'Fairweather Energy',
          url: 'https://www.fairweather.energy',
        },
      }),
    },
  ],
};

const Retrofit: React.FC = () => {
  return (
    <>
      <section id="retrofit-hero">
        <RetrofitHero />
      </section>
      <section id="retrofit-benefits">
        <RetrofitBenefits />
      </section>
      <section id="retrofit-steps">
        <RetrofitSteps />
      </section>
    </>
  );
};

export default Retrofit;
