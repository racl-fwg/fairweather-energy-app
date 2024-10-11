"use client";
import React from 'react';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';
import ArrowQuoteButton from '@/components/Buttons/ArrowQuoteButton';

interface HeroInContainerProp {
  header: string;
  subHeader?: string;
  imageSrc: string;
  buttonText: string;
  buttonLink?: string; // Optional href prop for navigation
  buttonType?: 'ArrowButton' | 'ArrowQuoteButton'; // Determines which button to render
  textPosition?: 'bottom-left' | 'center'; // Option to change text position
}

// Main HeroComponent
const HeroComponent: React.FC<HeroInContainerProp> = ({
  header,
  subHeader,
  imageSrc,
  buttonText,
  buttonLink,
  buttonType = 'ArrowButton',
  textPosition = 'bottom-left',
}) => {
  return (
    <section
      className="relative w-full max-w-[1400px] mx-auto my-[110px] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={header}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
        />
      </div>

      {/* Content Section */}
      <div
        className={`relative z-20 h-full w-full flex flex-col ${
          textPosition === 'bottom-left' ? 'justify-end items-start' : 'justify-center items-center'
        } p-6 sm:p-8 md:p-10 lg:p-14 space-y-6 bg-gradient-to-t from-black/60 to-transparent`}
      >
        {/* Header Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e9ff66] font-bold leading-tight max-w-[70%] sm:max-w-[60%] mb-4">
          {header}
        </h1>

        {/* Optional Sub-header */}
        {subHeader && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 max-w-[70%] sm:max-w-[60%]">
            {subHeader}
          </p>
        )}

        {/* Render Button Based on buttonType Prop */}
        {buttonType === 'ArrowButton' ? (
          <ArrowButton text={buttonText} href={buttonLink} size="medium" />
        ) : (
          <ArrowQuoteButton />
        )}
      </div>
    </section>
  );
};

export default HeroComponent;
