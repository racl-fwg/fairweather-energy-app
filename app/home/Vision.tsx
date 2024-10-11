"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '@/components/Buttons/ArrowButton';
import OutlinedButton from '@/components/Buttons/OutlineButton';
import { headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

export default function Vision() {
  return (
    <section className="py-12 bg-lightNeon text-center">
      <div className="container mx-auto px-4">
        {/* Vision Title */}
        <motion.h2 
          className="text-4xl font-semibold mb-6 text-nature"
          {...headerTextFadeIn}
        >
          Vår vision
        </motion.h2>

        {/* Vision Description with Updated Text */}
        <motion.p 
          className="text-lg text-darkNature leading-relaxed max-w-3xl mx-auto mb-12"
          {...defaultTextFadeIn}
        >
          Batterier spelar en central roll i övergången till en hållbar framtid. De används för att lagra förnybar energi från solen och vinden, säkra strömförsörjningen vid avbrott och optimera energianvändningen i hem, företag och industrier. Genom att erbjuda flexibla och effektiva energilagringslösningar strävar vi efter att möjliggöra en värld där energi alltid finns tillgänglig, är ren och pålitlig.
        </motion.p>

        {/* Vision Buttons */}
        <div className="flex justify-center space-x-4">
          <ArrowButton text="Om oss" size="large" href="/about#about" />
          <OutlinedButton text="Läs mer om vårt Hållbarhetsmål" href="/sustainability" size="medium" />
        </div>
      </div>
    </section>
  );
}
