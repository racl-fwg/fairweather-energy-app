import React from 'react';
import AuxiliaryHero from './AuxiliaryHero';
import ServiceSteps from './ServiceSteps';
import ValueReturn from './ValueReturn';
import Benefits from './Benefits';
import AnimatedCarouselCards from './AninmatedCarouselCards';
import IntroAuxiliary from './IntroAuxiliary';

export const metadata = {
  title: 'Fairweather Energy | Auxiliary Services',
  description:
    'Utforska stödtjänster för att stabilisera elnätet och optimera energianvändning. Fairweather Energy hjälper dig med batterilagring för frekvensreglering och andra stödfunktioner.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Auxiliary Services',
    description:
      'Fairweather Energy erbjuder stödtjänster för nätstabilisering, inklusive frekvensreglering, peakshaving och energioptimering med batterilagring.',
    url: 'https://www.fairweather.energy/services/auxiliary-services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stödtjänster - Stabilisering av elnätet med batterier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Auxiliary Services',
    description:
      'Bli en del av stödtjänstmarknaden och bidra till elnätsstabilitet. Fairweather Energy ger dig stöd för prestanda och lönsamhet.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/services/auxiliary-services',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Auxiliary Services',
        description:
          'Fairweather Energy erbjuder stödtjänster för stabilisering av elnätet med batterier och smart energilagring.',
        provider: {
          '@type': 'Organization',
          name: 'Fairweather Energy',
          url: 'https://www.fairweather.energy',
        },
      }),
    },
  ],
};

const AuxiliaryServices: React.FC = () => {
  return (
    <>
      <section id="auxiliary-hero">
        <AuxiliaryHero />
      </section>
      <section id="intro-auxiliary">
        <IntroAuxiliary />
      </section>
      <section id="service-steps">
        <ServiceSteps />
      </section>
      <section id="carousel-cards">
        <AnimatedCarouselCards />
      </section>
      <section id="value-return">
        <ValueReturn />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
    </>
  );
};

export default AuxiliaryServices;
