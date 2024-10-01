// HelpSection.tsx
import Image from 'next/image';

export default function HelpSection() {
  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Fairweather_Energy_Graphics_3D_Nature_RGB.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-darkNature to-transparent opacity-90"></div>
      <div className="relative text-center max-w-2xl px-4">
        <h2 className="text-5xl font-bold text-energy mb-6">
          Kan vi hjälpa dig?
        </h2>
        <p className="text-white text-lg leading-relaxed mb-8">
          Energimarknaden kan kännas som en djungel, men vi finns här för att guida dig rätt. 
          Vi hjälper dig att välja det bästa systemet för dina unika förutsättningar. 
          Kontakta oss så ser vi till att du får den lösning som passar dig bäst!
        </p>
        <a href="#contact" className="inline-flex items-center px-6 py-3 text-lg font-medium bg-energy text-darkNature rounded-full shadow-lg hover:bg-white transition duration-300">
          Kontakta oss <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
