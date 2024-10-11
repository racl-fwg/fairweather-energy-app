"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultTextFadeIn, headerTextFadeIn } from '@/components/utils/animations';

// Define BenefitItem type
type BenefitItemProps = {
  iconSrc: string;
  title: string;
  description: string;
};

// Define props for the ImageTextCardWithBenefits component
type ImageTextCardWithBenefitsProps = {
  title: string;
  subTitle: string;
  description: string;
  backgroundImageSrc: string;
  backgroundAlt: string;
  benefits: BenefitItemProps[];
  className?: string;
  containerHeight?: string; // Height prop for container
  containerPadding?: string; // Padding prop for content
  benefitSpacing?: string; // Spacing between benefits
};

// ImageTextCardWithBenefits Component
const ImageTextCardWithBenefits: React.FC<ImageTextCardWithBenefitsProps> = ({
  title,
  subTitle,
  description,
  backgroundImageSrc,
  backgroundAlt,
  benefits,
  className = "",
  containerHeight = "h-[600px]", // Default height (increased for better spacing)
  containerPadding = "p-6 sm:px-8 md:px-12 lg:px-16 xl:px-24", // Responsive padding for different screen sizes
  benefitSpacing = "space-y-4 sm:space-y-6 md:space-y-8", // Responsive spacing
}) => {
  return (
    <section className={`py-16 ${className}`}>
      {/* Top Line and Text Section */}
      <motion.div className="px-4 lg:px-12 mx-auto max-w-[1200px]" {...defaultTextFadeIn}>
        {/* Horizontal Line */}
        <motion.hr className="border-t-1 border-darkNature mb-12" {...defaultTextFadeIn} />

        {/* Header and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 space-y-4 md:space-y-0 md:space-x-8">
          {/* Left Header */}
          <motion.div className="text-left" {...headerTextFadeIn}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkNature">
              {subTitle}
            </h2>
          </motion.div>

          {/* Right Description Text (Constrained to 2/3 Width) */}
          <motion.div
            className="text-sm md:text-base lg:text-lg text-darkNature max-w-[66%] lg:w-[66%] lg:max-w-[800px]"
            {...defaultTextFadeIn}
          >
            {description}
          </motion.div>
        </div>
      </motion.div>

      {/* Background Image Section */}
      <motion.div
        className={`relative w-[calc(100%-32px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-100px)] mx-auto rounded-2xl overflow-hidden shadow-lg z-10 ${containerHeight}`}
        {...defaultTextFadeIn}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={backgroundImageSrc}
            alt={backgroundAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={100}
          />
        </div>

        {/* Content Section */}
        <motion.div
          className={`relative z-20 h-full flex flex-col justify-center items-start ${containerPadding} bg-transparent max-w-[66%]`}
          {...defaultTextFadeIn}
        >
          {/* Header Text */}
          <motion.h2 className="text-2xl md:text-3xl lg:text-4xl text-energy font-bold leading-tight max-w-3xl mb-4 sm:mb-6 md:mb-8" {...headerTextFadeIn}>
            {title}
          </motion.h2>

          {/* Benefit Points */}
          <motion.div className={benefitSpacing} {...defaultTextFadeIn}>
            {/* Render Benefit Items Dynamically */}
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} iconSrc={benefit.iconSrc} title={benefit.title} description={benefit.description} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* Individual BenefitItem Component */
const BenefitItem: React.FC<BenefitItemProps> = ({ iconSrc, title, description }) => (
  <motion.div className="flex items-start text-white">
    {/* Icon Container */}
    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 flex items-center justify-center mr-4 lg:mr-6">
      <Image src={iconSrc} alt={title} width={100} height={100} className="object-contain" />
    </div>

    {/* Text Content */}
    <div>
      <motion.h3 className="text-base md:text-lg lg:text-xl font-semibold text-energy mb-2" {...headerTextFadeIn}>
        {title}
      </motion.h3>
      <motion.p className="text-xs md:text-sm lg:text-base" {...defaultTextFadeIn}>
        {description}
      </motion.p>
    </div>
  </motion.div>
);

export default ImageTextCardWithBenefits;
