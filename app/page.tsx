import Hero from '@/home/Hero';
import Vision from '@/home/Vision';
import Services from '@/home/Services';
import HelpSection from '@/home/HelpSection';
import Products from '@/home/Products';
import Testimonials from '@/home/Testimonials';
import Contact from './components/Contact/Contact';
import React from 'react';

export const metadata = {
  title: 'Fairweather Energy | Sustainable Energy Solutions',
  description: 'Fairweather Energy erbjuder avancerade energilagringslösningar för hem och företag. Upptäck innovativa batterier som optimerar energianvändning, minskar kostnader och stödjer elnätet',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Sustainable Energy Solutions',
    description: 'Fairweather Energy erbjuder avancerade energilagringslösningar för hem och företag. Upptäck innovativa batterier som optimerar energianvändning, minskar kostnader och stödjer elnätet',
    url: 'https://fairweather.energy',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairweather Energy - Sustainable Energy Solutions',
      },
    ],
  },  
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Sustainable Energy Solutions',
    description: 'Fairweather Energy erbjuder avancerade energilagringslösningar för hem och företag. Upptäck innovativa batterier som optimerar energianvändning, minskar kostnader och stödjer elnätet',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://fairweather.energy',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Fairweather Energy',
        url: 'https://fairweather.energy',
        logo: 'https://fairweather.energy/images/og-image.jpg'
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Fairweather Energy Homepage',
        url: 'https://fairweather.energy',
        description:
          'Fairweather Energy erbjuder avancerade energilagringslösningar för hem och företag. Upptäck innovativa batterier som optimerar energianvändning, minskar kostnader och stödjer elnätet',
      }),
    },
  ],
};

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="help-section">
          <HelpSection />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
