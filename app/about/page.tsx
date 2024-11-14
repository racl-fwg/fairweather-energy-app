import React from 'react';
import AboutHero from './AboutHero';
import AboutPage from './AboutPage';
import Contact from '../components/Contact/Contact';

export const metadata = {
  title: 'Fairweather Energy | About us',
  description:
    'Lär dig mer om Fairweather Energy, oberoende konsulter som erbjuder avancerade energilagringslösningar. Vi optimerar energianvändning för hem och företag med skräddarsydda lösningar.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | About us',
    description:
      'Upptäck hur Fairweather Energy levererar kundfokuserade energilösningar. Vi erbjuder experthjälp inom projektplanering och installation av innovativa batteritekniker.',
    url: 'https://www.fairweather.energy/about',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairweather Energy - Om oss',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | About us',
    description:
      'Fairweather Energy optimerar din energianvändning genom kundanpassade lösningar. Utforska vår expertis inom hållbar energihantering.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/about',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Fairweather Energy',
        url: 'https://www.fairweather.energy',
        logo: 'https://www.fairweather.energy/images/icon.png',
        sameAs: [
          'https://www.linkedin.com/company/fairweather-energy',
          'https://www.facebook.com/fairweatherenergy',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Om oss - Fairweather Energy',
        url: 'https://www.fairweather.energy/about',
        description:
          'Fairweather Energy levererar energilösningar som är optimerade för dina behov. Vi erbjuder expertrådgivning och installation av avancerade batterisystem.',
      }),
    },
  ],
};

export default function About() {
  return (
    <>
      <main>
        <section id="about-hero">
          <AboutHero />
        </section>
        <section id="about-details">
          <AboutPage />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
