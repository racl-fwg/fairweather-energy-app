import Hero from '@/components/Hero/Hero';
import Vision from '@/components/Vision/Vision';
import Services from './components/Services/Services';
import HelpSection from './components/HelpSection/HelpSection';
import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Quote from './components/Quote/Quote';

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
        <Quote />
      </main>
    </>
  );
}
