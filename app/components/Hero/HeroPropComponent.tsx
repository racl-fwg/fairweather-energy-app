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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="Hero Background" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Container for Header Text and Logo in a flex column */}
      <div className="relative w-full h-full flex flex-col justify-end items-start px-6 lg:px-12 pb-0">
        {/* Header Text */}
        <div className="mb-4">
          <h1 className="text-[#E9FF66] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            {header}
          </h1>
        </div>

        {/* Logo Overlay */}
        <div className="w-full mb-1 pb-0">
          <Image src={logoSrc} alt="Hero Logo" width={2700} height={600} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroPropComponent;
