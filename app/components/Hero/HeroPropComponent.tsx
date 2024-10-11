import React from 'react';
import ArrowButton from '@/components/Buttons/ArrowButton';
import ArrowQuoteButton from '@/components/Buttons/ArrowQuoteButton';
import Image from 'next/image';

export interface HeroProp {
  header: string;
  textPosition?: 'left-center' | 'center' | 'right-center';
  logoPosition?: 'bottom-left' | 'bottom-right';
  imageSrc: string;
  logoSrc: string;
  buttonText?: string;
  buttonType?: 'ArrowButton' | 'ArrowQuoteButton';
  buttonLink?: string;
}

const HeroPropComponent: React.FC<HeroProp> = ({
  header,
  textPosition = 'left-center',
  logoPosition = 'bottom-left',
  imageSrc,
  logoSrc,
  buttonText,
  buttonType,
  buttonLink,
}) => {
  // Determine text alignment classes based on the provided position prop
  const textAlignmentClasses =
    textPosition === 'left-center'
      ? 'items-center text-left'
      : textPosition === 'center'
      ? 'items-center text-center'
      : 'items-center text-right';

  // Determine logo positioning classes based on the provided position prop
  const logoAlignmentClasses = logoPosition === 'bottom-left' ? 'bottom-8 left-8' : 'bottom-8 right-8';

  // Set button alignment based on text position
  const buttonAlignmentClasses =
    textPosition === 'left-center'
      ? 'justify-start'
      : textPosition === 'center'
      ? 'justify-center'
      : 'justify-end';

  return (
    <section className="relative w-full h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="Hero Background" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Text and Logotype Overlay Container */}
      <div
        className={`relative z-10 h-full flex ${textAlignmentClasses} px-6 lg:px-16 pb-8 lg:pb-16 justify-${
          textPosition === 'center' ? 'center' : textPosition === 'right-center' ? 'end' : 'start'
        }`}
      >
        {/* Container for Heading Text and Button */}
        <div className="flex flex-col space-y-6 lg:space-y-8 max-w-[90%] sm:max-w-[50%]">
          {/* Heading Text */}
          <h1 className="text-[#E9FF66] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-['Manrope'] leading-tight mb-2">
            {header}
          </h1>

          {/* Optional Button */}
          {buttonText && buttonType && (
            <div className={`w-full flex ${buttonAlignmentClasses}`}> {/* Adjust button alignment based on text position */}
              {buttonType === 'ArrowButton' && buttonLink ? (
                <ArrowButton text={buttonText} href={buttonLink} size="medium" />
              ) : (
                <ArrowQuoteButton />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Energy Logotype Positioned with a larger size */}
      <div className={`absolute ${logoAlignmentClasses} w-[70vw] sm:w-[60vw] lg:w-[55vw] xl:w-[50vw]`}>
        <Image src={logoSrc} alt="Hero Logo" width={2700} height={600} style={{ width: '100%', height: 'auto' }} />
      </div>
    </section>
  );
};

export default HeroPropComponent;
