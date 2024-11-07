"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

type ImageTextCardWithStepsProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  buttonPosition?: "left" | "right";
  subSections?: Array<{ number: number; heading: string; content: string; iconSrc?: string }>;
  buttonOverlayContent?: React.ReactNode;
  className?: string;
};

const ImageTextCardWithSteps: React.FC<ImageTextCardWithStepsProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  buttonPosition = "right",
  subSections,
  buttonOverlayContent,
  className = "",
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div
        className={`max-w-[1200px] mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        } items-stretch gap-8`}
      >
        {/* Image Container */}
        <div className="flex-1 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={680}
            height={680}
            className="object-fit rounded-2xl h-full w-full"
          />
          {/* Button Overlay */}
          {buttonOverlayContent && (
            <motion.div
              className={`absolute bottom-0 ${
                buttonPosition === "right" ? "right-0" : "left-0"
              } m-4`}
              {...textFadeIn}
            >
              {buttonOverlayContent}
            </motion.div>
          )}
        </div>

        {/* Text Content */}
        <motion.div
          className="flex-1 flex flex-col justify-between space-y-4 px-0 lg:px-0 sm:px-[5%]"
          {...textFadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-darkNature font-semibold">{title}</h2>
            <p className="text-base md:text-lg text-black">{description}</p>

            {subSections && (
              <div className="space-y-6">
                {subSections.map((section, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4">
                      {section.iconSrc ? (
                        <Image
                          src={section.iconSrc}
                          alt={`Icon ${section.number}`}
                          width={32}
                          height={32}
                          className="object-contain rounded-full"
                        />
                      ) : (
                        <span className="bg-darkNature text-energy rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                          {section.number}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl text-darkNature font-semibold">{section.heading}</h3>
                      <p className="text-sm md:text-base text-black">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageTextCardWithSteps;
