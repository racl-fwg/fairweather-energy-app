import React from 'react';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton'; // Adjust import path as needed

// Keep the interface name as HeroInContainerProp, but use a different component name like `HeroComponent`
interface HeroInContainerProp {
  header: string;
  subHeader?: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
}

// Use a distinct component name to avoid confusion
const HeroComponent: React.FC<HeroInContainerProp> = ({ header, subHeader, imageSrc, buttonText, buttonLink }) => {
  return (
    <section className="relative w-[calc(100%-100px)] mx-[50px] mt-[120px] h-[500px] rounded-2xl overflow-hidden shadow-lg z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc} // Dynamic image source
          alt={header} // Accessible image alt text from header
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start pl-12 lg:pl-24">
        {/* Title Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-energy font-bold leading-tight max-w-xl">
          {header} {/* Dynamic header text */}
        </h1>
        
        {/* Optional Sub-header */}
        {subHeader && (
          <p className="text-lg md:text-xl text-white mt-4 max-w-xl">
            {subHeader}
          </p>
        )}

        {/* Call to Action Button using ArrowButton */}
        <div className="mt-8">
          <ArrowButton text={buttonText} href={buttonLink} size="medium" />
        </div>
      </div>
    </section>
  );
};

// Export the correct component name
export default HeroComponent;
