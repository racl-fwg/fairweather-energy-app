import React from 'react';
import ArrowButton from '@/components/Buttons/ArrowButton';
import ArrowQuoteButton from '@/components/Buttons/ArrowQuoteButton';
import Image from 'next/image';

export interface HeroProp {
  header: string;
  textPosition?: 'left-center' | 'center' | 'right-center' | 'bottom-right'; // Added 'bottom-right'
  logoPosition?: 'bottom-left' | 'bottom-right';
  imageSrc: string;
  logoSrc: string;
  buttonText?: string;
  buttonType?: 'ArrowButton' | 'ArrowQuoteButton';
  buttonLink?: string;
}

const HeroPropComponent: React.FC<HeroProp> = ({
  header,
  textPosition = 'right-center',
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
      ? 'text-left sm:items-start items-start justify-center ml-4' // Added margin-left
      : textPosition === 'center'
      ? 'text-center items-center justify-center'
      : textPosition === 'bottom-right'
      ? 'text-right items-end justify-end mb-8 mr-8' // Adjusted for bottom-right position
      : 'text-right items-end justify-end';

  // Determine logo positioning classes based on the provided position prop
  const logoAlignmentClasses = logoPosition === 'bottom-left' ? 'bottom-8 left-8' : 'bottom-8 right-8';

  // Set button alignment based on text position
  const buttonAlignmentClasses = textPosition === 'left-center' ? 'text-left' : 'text-right';

  return (
    <section className="relative w-full h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="Hero Background" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Text and Logotype Overlay Container */}
      <div
        className={`relative z-10 h-full flex px-6 lg:px-16 pb-8 lg:pb-16 ${
          textPosition === 'left-center' ? 'items-center justify-start' : 'items-end justify-end'
        }`}
      >
        {/* Container for Heading Text and Button - Only visible on sm and above */}
        <div
          className={`hidden sm:flex flex-col space-y-6 lg:space-y-8 max-w-[90%] sm:max-w-[40%] ${textAlignmentClasses} ${
            textPosition === 'left-center' ? 'absolute left-0 top-1/2 transform -translate-y-1/2' : ''
          }`}
        >
          {/* Heading Text */}
          <h1 className="text-[#E9FF66] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            {header}
          </h1>

          {/* Optional Button */}
          {buttonText && buttonType && (
            <div className={`w-full ${buttonAlignmentClasses}`}>
              {buttonType === 'ArrowButton' && buttonLink ? (
                <ArrowButton size="large" href={buttonLink}>
                  {buttonText}
                </ArrowButton>
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
