import Hero from '@/home/Hero';
import Vision from '@/home/Vision';
import Services from '@/home/Services';
import HelpSection from '@/home/HelpSection';
import Products from '@/home/Products';
import Testimonials from '@/home/Testimonials';
import Contact from './components/Contact/Contact';
import React from 'react';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Vision />
        <Services />
        <HelpSection />
        <Products />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
