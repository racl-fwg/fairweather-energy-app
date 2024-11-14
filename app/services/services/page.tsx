import React from "react";
import ServicesHero from "@/services/services/ServicesHero";
import ServicesOverview from "@/services/services/ServicesOverview";
import ServicesCTA from "@/services/services/ServicesCTA";

export const metadata = {
  title: 'Fairweather Energy | Comprehensive Energy Services',
  description:
    'Fairweather Energy erbjuder omfattande energitjänster inklusive retrofit, stödtjänster och förkvalificering. Vi optimerar energisystem och säkerställer regulatorisk efterlevnad.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Comprehensive Energy Services',
    description:
      'Utforska Fairweather Energys tjänster för retrofit, nätstabilisering och projekthantering. Effektivisera och framtidssäkra ditt energisystem med vår expertis.',
    url: 'https://www.fairweather.energy/services/services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairweather Energy - Skräddarsydda energitjänster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Comprehensive Energy Services',
    description:
      'Ta del av våra experttjänster för att optimera ditt energisystem. Från uppgraderingar till regelverk – vi är här för att hjälpa dig.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/services/services',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Comprehensive Energy Services',
        description:
          'Fairweather Energy erbjuder omfattande energitjänster för att förbättra effektivitet och efterlevnad av regelverk.',
        provider: {
          '@type': 'Organization',
          name: 'Fairweather Energy',
          url: 'https://www.fairweather.energy',
        },
      }),
    },
  ],
};

const ServicesPage: React.FC = () => {
  return (
    <div>
      <section id="services-hero">
        <ServicesHero />
      </section>
      <section id="services-overview">
        <ServicesOverview />
      </section>
      <section id="services-cta">
        <ServicesCTA />
      </section>
    </div>
  );
};

export default ServicesPage;
