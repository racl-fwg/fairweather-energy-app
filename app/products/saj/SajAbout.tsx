"use client";
import React from "react";
import QuoteButton from "@/components/Buttons/QuoteButton"; // Import the QuoteButton component
import { motion } from "framer-motion"; // Import motion for animations
import { textFadeIn } from "@/components/utils/animations"; // Import textFadeIn animation
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper"; // Import ContainerWrapper

const SajAbout: React.FC = () => {
  return (
    <div className="bg-lightNature py-16">
      <ContainerWrapper>
        {/* Header */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-nature mb-6 text-center"
          {...textFadeIn}
        >
          SAJ
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8 text-center"
          {...textFadeIn}
        >
          SAJ är en ledande global leverantör av smarta energilösningar,
          specialiserade på utveckling och tillverkning av innovativa
          växelriktare och energilagringssystem för både hushåll och
          kommersiella tillämpningar. Med över två decennier av erfarenhet inom
          branschen strävar SAJ efter att erbjuda hållbara och effektiva
          lösningar som gör det möjligt för kunder att maximera användningen av
          förnybar energi.
        </motion.p>

        {/* Quote Button */}
        <motion.div className="mt-8 text-center" {...textFadeIn}>
          <QuoteButton invertColors={false} /> {/* Option to invert colors */}
        </motion.div>
      </ContainerWrapper>
    </div>
  );
};

export default SajAbout;
