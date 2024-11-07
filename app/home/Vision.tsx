"use client";
import React from "react";
import { motion } from "framer-motion";
import ArrowButton from "@/components/Buttons/ArrowButton";
import OutlinedButton from "@/components/Buttons/OutlineButton";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper"; // Import the wrapper

export default function Vision() {
  return (
    <section className="py-12 bg-lightNeon text-center">
      <ContainerWrapper>
        {/* Vision Title */}
        <motion.h2
          className="text-4xl font-semibold mb-6 text-nature"
          {...textFadeIn}
        >
          Vår vision
        </motion.h2>

        {/* Vision Description with Updated Text */}
        <motion.p
          className="text-base sm:text-lg text-darkNature leading-relaxed mb-12"
          {...textFadeIn}
        >
          Batterier spelar en central roll i övergången till en hållbar framtid. De används för att lagra förnybar energi från solen och vinden, säkra strömförsörjningen vid avbrott och optimera energianvändningen i hem, företag och industrier. Genom att erbjuda flexibla och effektiva energilagringslösningar strävar vi efter att möjliggöra en värld där energi alltid finns tillgänglig, är ren och pålitlig.
        </motion.p>

        {/* Vision Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <OutlinedButton
            text="Läs mer om vårt Hållbarhetsmål"
            href="/sustainability"
            size="medium"
          />
          <ArrowButton text="Om oss" size="large" href="/about#about" />
        </div>
      </ContainerWrapper>
    </section>
  );
}
