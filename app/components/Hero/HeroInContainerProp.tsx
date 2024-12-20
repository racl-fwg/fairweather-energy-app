"use client";
import React from "react";
import Image from "next/image";
import ArrowButton from "@/components/Buttons/ArrowButton";
import ArrowQuoteButton from "@/components/Buttons/ArrowQuoteButton";

interface HeroInContainerProp {
  header: string;
  subHeader?: string;
  imageSrc: string;
  buttonText: string;
  buttonLink?: string; // Optional href prop for navigation
  buttonType?: "ArrowButton" | "ArrowQuoteButton"; // Determines which button to render
  textPosition?: "bottom-left" | "center"; // Option to change text position
  logoSrc?: string; // Optional prop for bottom-right logo
  logoSize?: "small" | "medium" | "large" | "huge"; // Define logo size
  openInNewTab?: boolean; // New prop to control if the link opens in a new tab
}

const HeroComponent: React.FC<HeroInContainerProp> = ({
  header,
  subHeader,
  imageSrc,
  buttonText,
  buttonLink,
  buttonType = "ArrowButton",
  textPosition = "bottom-left",
  logoSrc,
  logoSize = "small", // Default to "small" logo size
  openInNewTab = false, // Default to not open in a new tab
}) => {
  // Define pixel sizes for the logo
  const logoSizes = {
    small: 150, // Small logo
    medium: 300, // Medium logo
    large: 450, // Large logo
    huge: 600,  // Huge logo
  };

  const logoWidth = logoSizes[logoSize];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto mt-[110px] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={header}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
      </div>

      {/* Content Section */}
      <div
        className={`relative z-20 h-full w-full flex flex-col ${
          textPosition === "bottom-left"
            ? "justify-end items-start"
            : "justify-center items-center"
        } p-6 sm:p-8 md:p-10 lg:p-14 space-y-6 bg-black bg-opacity-20`}
      >
        {/* Header and Logo for Small Screens */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Header Text for Small Screens */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#e9ff66] font-bold leading-tight text-center mb-4">
            {header}
          </h1>

          {/* Logo for Small Screens */}
          {logoSrc && (
            <div className="mt-4">
              <Image
                src={logoSrc}
                alt="Logo"
                width={logoWidth} // Use the defined size for width
                height={logoWidth} // Keep height equal to width to maintain aspect ratio
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>

        {/* Header, Subheader, and Button for Large Screens */}
        <div className="hidden lg:flex flex-col items-start space-y-6">
          {/* Header Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#e9ff66] font-bold leading-tight max-w-[70%] sm:max-w-[60%] mb-4">
            {header}
          </h1>

          {/* Optional Sub-header (visible only on large screens) */}
          {subHeader && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-[70%] sm:max-w-[60%]">
              {subHeader}
            </p>
          )}

          {/* Render Button Based on buttonType Prop (visible only on large screens) */}
          {buttonType === "ArrowButton" ? (
            <ArrowButton href={buttonLink} size="medium" openInNewTab={openInNewTab}>
              {buttonText}
            </ArrowButton>
          ) : (
            <ArrowQuoteButton />
          )}
        </div>
      </div>

      {/* Bottom-right Logo for Large Screens */}
      {logoSrc && (
        <div className="hidden lg:block absolute bottom-6 right-6">
          <Image
            src={logoSrc}
            alt="Logo"
            width={logoWidth} // Use the defined size for width
            height={logoWidth} // Keep height equal to width to maintain aspect ratio
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  );
};

export default HeroComponent;
