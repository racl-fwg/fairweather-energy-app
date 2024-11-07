// app/products/pixii/PixiiAbout.tsx
"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { defaultTextFadeIn, headerTextFadeIn } from "@/components/utils/animations"; // Import animations
import ArrowButton from "@/components/Buttons/ArrowButton";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper"; // Import ContainerWrapper

const PixiiAbout: React.FC = () => {
  return (
    <div className="bg-lightNature py-16">
      <ContainerWrapper>
        {/* Header with animation */}
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-nature mb-8 text-center"
          {...headerTextFadeIn} // Applying the header animation
        >
          Vilka är Pixii?
        </motion.h2>

        {/* Description with animation */}
        <motion.p
          className="text-lg sm:text-xl text-darkNature leading-relaxed max-w-[900px] mx-auto mb-8 text-center"
          {...defaultTextFadeIn} // Applying the text slide fade animation
        >
          Pixii är en ledande aktör inom energilagringssystem och erbjuder flexibla
          lösningar för både hem och kommersiella tillämpningar. Med Pixiis innovativa
          energilagring kan du optimera din energiförbrukning genom att lagra
          överskottsenergi från solceller eller elnätet när elpriserna är låga och använda
          den när efterfrågan och priserna är högre. Pixii fokuserar på att kombinera nordisk
          design och hög säkerhet med användarvänlighet och flexibilitet för att stödja den
          moderna energikonsumenten.
        </motion.p>

        {/* Quote Button without animation */}
        <div className="mt-12 flex justify-center">
          <ArrowButton text="Kontakta oss" href="/about#contact" />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default PixiiAbout;
