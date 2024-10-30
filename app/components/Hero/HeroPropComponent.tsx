import React from 'react';
import Image from 'next/image';

export interface HeroProp {
  header: string;
  imageSrc: string;
  logoSrc: string;
}

const HeroPropComponent: React.FC<HeroProp> = ({
  header,
  imageSrc,
  logoSrc,
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end items-start">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={imageSrc} 
          alt="Hero Background" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority 
          sizes="100vw"
        />
      </div>

      {/* Container for Header Text and Logo in a flex column */}
      <div className="relative w-full flex flex-col justify-end items-start px-4 lg:px-8 pb-4 lg:pb-8 h-full">
        {/* Header Text */}
        <h1 className="text-[#E9FF66] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-2 lg:mb-4">
          {header}
        </h1>

        {/* Logo Overlay, Ensuring Full Width and Proportional Height */}
        <div className="w-full">
          <Image 
            src={logoSrc} 
            alt="Hero Logo" 
            width={2700} 
            height={600} 
            style={{ width: '100%', height: 'auto', maxHeight: 'calc(100vh - 100px)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPropComponent;
