"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

type ImageTextCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right"; // Allows left or right image positioning
  subSections?: Array<{ heading: string; content: string }>;
  overlayContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
};

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
    <section className={`py-12 ${className}`}>
      <ContainerWrapper>
        <motion.div
          className={`bg-white  rounded-2xl shadow-lg flex flex-col lg:flex-row ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          } items-stretch gap-8`}
          {...textFadeIn}
        >
          {/* Image Container */}
          <div className="flex-1 relative p-4">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={680}
              height={680}
              className="object-cover rounded-2xl h-full w-full"
            />
            {overlayContent && (
              <div className="absolute bottom-4 left-4">{overlayContent}</div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-between space-y-6 p-4 lg:p-6">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl text-darkNature font-semibold">
                {title}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-black">{description}</p>

              {/* SubSections */}
              {subSections && (
                <div className="space-y-6">
                  {subSections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-2xl text-darkNature font-semibold">
                        {section.heading}
                      </h3>
                      <p className="text-sm md:text-base text-black">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Content */}
            {footerContent && (
              <div className="flex justify-end items-center mt-8">
                {footerContent}
              </div>
            )}
          </div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

export default ImageTextCard;
