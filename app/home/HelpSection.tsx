"use client";
import React from "react";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import ArrowButton from "@/components/Buttons/ArrowButton";

export default function HelpSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center mb-12"
      style={{
        backgroundImage:
          "url('/images/Fairweather_Energy_Graphics_3D_Nature_RGB.png')",
      }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkNature to-transparent opacity-100"></div>

      {/* Content Container */}
      <ContainerWrapper>
        <motion.div
          className="relative text-center max-w-2xl px-4"
          {...textFadeIn}
        >
          {/* Section Heading */}
          <h2 className="text-5xl font-bold text-energy mb-6">
            Kan vi hjälpa dig?
          </h2>

          {/* Section Description */}
          <p className="text-lightNeon text-base sm:text-xl leading-relaxed mb-8">
            Energimarknaden kan kännas som en djungel, men vi finns här för att
            guida dig rätt. Vi hjälper dig att välja det bästa systemet för dina
            unika förutsättningar. Kontakta oss så ser vi till att du får den
            lösning som passar dig bäst!
          </p>

          {/* ArrowButton with Max-Width */}
          <div className="flex justify-center">
            <ArrowButton text="Kontakta oss" size="large" href="#contact" />
          </div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
}
