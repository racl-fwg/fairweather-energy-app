"use client";
import React from "react";
import { motion } from "framer-motion";
import QuoteButton from "@/components/Buttons/QuoteButton";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const EmaldoAbout: React.FC = () => {
  return (
    <div className=" py-16 bg-lightNature">
      {/* Center content horizontally and vertically */}
      <ContainerWrapper container className="text-center">
        <div className="flex flex-col items-center">
          {/* Header with Animation */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-nature mb-6"
            {...textFadeIn}
          >
            Emaldo Power Core
          </motion.h2>

          {/* Description with Animation */}
          <motion.p
            className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8"
            {...textFadeIn}
          >
            Emaldo Power Core är en allt-i-ett-lösning som förenklar hemmets
            strömhantering. Med en högpresterande växelriktare, utbyggbara
            batteriboxar och integrerad Bluetooth® och Wi-Fi-anslutning,
            levererar systemet optimal prestanda. Dessutom inkluderar det en
            dedikerad typ 2-laddare för elbilar – allt i ett snyggt och kompakt
            skåp. Emaldo Power Core erbjuder den perfekta balansen mellan
            funktionalitet och flexibilitet för dagens moderna hem.
          </motion.p>

          {/* Quote Button with Animation */}
          <motion.div className="mt-8" {...textFadeIn}>
            <QuoteButton invertColors={false} />
          </motion.div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default EmaldoAbout;
