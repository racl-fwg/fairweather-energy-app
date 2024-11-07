"use client";
import React from "react";
import ArrowButton from "@/components/Buttons/ArrowButton"; // Assuming you have the ArrowButton component available
import { motion } from "framer-motion"; // Import motion for animations
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-16 bg-lightNature">
      <ContainerWrapper>
        {/* Header */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-darkNature mb-6 text-center"
          {...textFadeIn}
        >
          Låt oss hjälpa er på vägen mot en effektivare energilösning!
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8 text-center"
          {...textFadeIn}
        >
          Vårt team är redo att svara på era frågor och guida er genom processen
          – från första konsultation till färdig installation. Kontakta oss idag
          för att ta nästa steg mot en skräddarsydd batterilösning som passar
          just era behov.
        </motion.p>

        {/* CTA Button */}
        <motion.div className="mt-8 text-center" {...textFadeIn}>
          <ArrowButton size="medium" href="/about#contact">
            Kontakta oss
          </ArrowButton>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

export default ServicesCTA;
