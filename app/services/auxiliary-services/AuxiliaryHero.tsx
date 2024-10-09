"use client";
import React from 'react';
import Image from 'next/image';
import ArrowQuoteButton from '@/components/Buttons/ArrowQuoteButton';// Import the new button component

const AuxiliaryHero: React.FC = () => {
  return (
    <section className="relative w-[calc(100%-100px)] mx-[50px] mt-[120px] h-[500px] rounded-2xl overflow-hidden shadow-lg z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auxiliary-services/water_grid_trees.png" // Ensure the path is correct
          alt="Auxiliary Services Hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start pl-12 lg:pl-24">
        {/* Title Text */}
        <h1 className="text-5xl lg:text-6xl text-[#e9ff66] font-bold leading-tight max-w-xl">
          Vill du vara aktiv på <br /> stödtjänstmarknaden?
        </h1>

        {/* Call to Action Button with ArrowQuoteButton */}
        <div className="mt-8">
          <ArrowQuoteButton /> {/* Replace the Link component with the new ArrowQuoteButton */}
        </div>
      </div>
    </section>
  );
};

export default AuxiliaryHero;
