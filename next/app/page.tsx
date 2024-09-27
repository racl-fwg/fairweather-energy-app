import Hero from '@/components/Hero/Hero';
import Vision from '@/components/Vision/Vision';
import Journey from '@/components/Journey/Journey';
import ProductRange from '@/components/ProductRange/ProductRange';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Vision />
        <Journey />
        <ProductRange />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
