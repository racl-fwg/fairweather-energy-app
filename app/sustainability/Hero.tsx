import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative w-[calc(100%-100px)] mx-[50px] mt-[120px] h-[500px] rounded-2xl overflow-hidden shadow-lg z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sustainability/Hero.png" // Updated path for Sustainability Hero image
          alt="Sustainability Hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start pl-12 lg:pl-24">
        {/* Title Text */}
        <h1 className="text-5xl lg:text-6xl text-[#e9ff66] font-bold leading-tight max-w-xl">
          Fairweather Energys <br /> Hållbarhetsmål
        </h1>

        {/* Call to Action Button */}
        <Link href="/contact">
          <span className="mt-8 inline-block px-6 py-3 bg-[#e9ff66] text-black text-lg font-medium rounded-full shadow-lg hover:bg-[#d0e64b] transition duration-300">
            Kontakta oss →
          </span>
        </Link>
      </div>
    </section>
  );
};
    {/* Horizontal Line */}
    <hr className="border-t-1 border-darkNature mb-12" />
export default Hero;
