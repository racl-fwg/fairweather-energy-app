"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultTextFadeIn, headerTextFadeIn } from '@/components/utils/animations';

// Define the prop types for the component
type ImageTextCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  subSections?: Array<{ heading: string; content: string }>;
  overlayContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
};

// Generic Component for Image-Text Cards
const ImageTextCard: React.FC<ImageTextCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  subSections,
  overlayContent,
  footerContent,
  className = "",
}) => {
  return (
    <section className={`py-16 px-[20px] bg-[#FEFFEB] ${className}`}>
      {/* Container for White Background Card */}
      <div
        className={`max-w-[1200px] mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        } items-stretch gap-8`}
      >
        {/* Image Container with Logo Overlay */}
        <div className="flex-1 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={680}
            height={680}
            className="object-cover rounded-2xl h-full"
          />
          {/* Overlay Logo in the Bottom Left */}
          {overlayContent && (
            <div className="absolute bottom-4 left-4">{overlayContent}</div>
          )}
        </div>

        {/* Text Content on the Right/Left with Full Height */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <motion.div className="space-y-4">
            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl text-[#003317] font-semibold"
              {...headerTextFadeIn}
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-black"
              {...defaultTextFadeIn}
            >
              {description}
            </motion.p>

            {/* SubSections */}
            {subSections && (
              <div className="space-y-4">
                {subSections.map((section, index) => (
                  <div key={index}>
                    <motion.h3
                      className="text-2xl text-[#003317] font-semibold"
                      {...headerTextFadeIn}
                    >
                      {section.heading}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base text-black"
                      {...defaultTextFadeIn}
                    >
                      {section.content}
                    </motion.p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Footer Content (Optional) */}
          {footerContent && (
            <div className="flex justify-end items-center space-x-4 mt-8">
              {footerContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTextCard;
