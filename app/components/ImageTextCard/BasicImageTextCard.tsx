"use client";
import React from "react";
import Image from "next/image";
import ArrowButton from "@/components/Buttons/ArrowButton"; // Import ArrowButton
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper"; // Import ContainerWrapper
import { textFadeIn } from "@/components/utils/animations"; // Import textFadeIn animation

interface BasicImageTextCardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  reverse?: boolean; // Optional: reverses the order of image and text
  whiteBackground?: boolean; // Optional: white background
}

const BasicImageTextCard: React.FC<BasicImageTextCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  reverse = false,
  whiteBackground = false,
}) => {
  return (
    <section className={`py-8 ${whiteBackground ? "bg-white" : "bg-transparent"}`}>
      <ContainerWrapper>
        <div
          {...textFadeIn}
          className={`w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 ${
            reverse ? "lg:flex-row-reverse" : ""
          } ${whiteBackground ? "p-8 shadow-lg rounded-lg" : ""}`}
        >
          {/* Image Section (3/5 of the width on large screens) */}
          <div className="w-full lg:w-3/5 p-4">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={600}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Section (2/5 of the width on large screens) */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-4 text-left p-4">
            <h2 className="text-2xl font-bold text-darkNature">{title}</h2>
            <p className="text-base text-darkNature">{description}</p>

            {/* Optional Button */}
            {buttonText && buttonLink && (
              <div className="mt-4">
                <ArrowButton size="medium" href={buttonLink}>
                  {buttonText}
                </ArrowButton>
              </div>
            )}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default BasicImageTextCard;
