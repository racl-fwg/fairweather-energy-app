"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

const IntroAuxiliary: React.FC = () => {
  return (
    <section className="py-16 bg-lightNeon">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl text-[#003317] font-semibold mb-6"
          {...headerTextFadeIn}
        >
          Vad är stödtjänster?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-base md:text-lg text-black leading-relaxed max-w-[900px] mx-auto"
          {...defaultTextFadeIn}
        >
          Stödtjänster stabiliserar elnätet genom att hålla frekvensen nära 50 Hz. Frekvensförändringar
          uppstår när det är obalans mellan elproduktion och förbrukning, vilket kan orsaka störningar.
          Stödtjänster delas in i frekvensrelaterade, som frekvenshållningsreserver, och icke-frekvensrelaterade,
          som spänningsreglering. Både stora aktörer och privatpersoner med batterier kan bidra till nätsstabilitet
          och få ersättning. Detta blir viktigare i takt med att förnybara energikällor, som sol och vind, används mer,
          eftersom de är intermittenta och kan skapa obalanser.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroAuxiliary;
