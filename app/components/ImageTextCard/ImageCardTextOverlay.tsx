"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper"; // Import ContainerWrapper
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

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

const ImageTextCardWithBenefits: React.FC<ImageTextCardWithBenefitsProps> = ({
  title,
  subTitle,
  description,
  backgroundImageSrc,
  backgroundAlt,
  benefits,
  className = "",
  containerHeight = "h-[600px]",
  containerPadding = "p-6 sm:px-8 md:px-12 lg:px-16 xl:px-24",
  benefitSpacing = "space-y-4 sm:space-y-6 md:space-y-8",
}) => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 10000); // Auto-switch every 10 seconds
    return () => clearInterval(interval);
  }, [benefits]);

  return (
    <section className={`py-16 ${className}`}>
      <ContainerWrapper>
        {/* Top Line and Text Section */}
        <motion.div className="mb-12" {...textFadeIn}>
          {/* Horizontal Line */}
          <hr className="border-t-1 border-darkNature mb-8" />

          {/* Header and Description */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8">
            {/* Left Header */}
            <div className="text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkNature">
                {subTitle}
              </h2>
            </div>

            {/* Right Description Text */}
            <div className="text-sm md:text-base lg:text-lg text-darkNature max-w-[66%]">
              {description}
            </div>
          </div>
        </motion.div>

        {/* Background Image Section */}
        <motion.div
          className={`relative rounded-2xl overflow-hidden shadow-lg z-10 ${containerHeight}`}
          {...textFadeIn}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image
              src={backgroundImageSrc}
              alt={backgroundAlt}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={100}
            />
          </div>

          {/* Content Section */}
          <motion.div
            className={`relative z-20 h-full flex flex-col justify-center items-start ${containerPadding} bg-transparent max-w-[66%]`}
          >
            {/* Header Text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-energy font-bold leading-tight max-w-3xl mb-4 sm:mb-6 md:mb-8">
              {title}
            </h2>

            {/* Benefit Points */}
            <div className={benefitSpacing}>
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  iconSrc={benefit.iconSrc}
                  title={benefit.title}
                  description={benefit.description}
                  isVisible={index === visibleBenefitIndex}
                />
              ))}

              {/* Dots for switching between benefits */}
              <div className="flex justify-center mt-4">
                {benefits.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                      index === visibleBenefitIndex ? "bg-energy" : "bg-gray-300"
                    }`}
                    onClick={() => setVisibleBenefitIndex(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

/* Individual BenefitItem Component */
const BenefitItem: React.FC<BenefitItemProps & { isVisible: boolean }> = ({
  iconSrc,
  title,
  description,
  isVisible,
}) => (
  <motion.div
    className={`flex items-start ${isVisible ? "block" : "hidden"}`}
    {...textFadeIn}
  >
    {/* Icon */}
    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mr-4">
      <Image src={iconSrc} alt={title} width={100} height={100} className="object-contain" />
    </div>

    {/* Text */}
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-energy mb-2">{title}</h3>
      <p className="text-sm md:text-base lg:text-lg">{description}</p>
    </div>
  </motion.div>
);

export default ImageTextCardWithBenefits;
