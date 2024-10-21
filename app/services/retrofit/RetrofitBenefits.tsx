"use client";
import React from 'react';
import ImageTextCard from '@/components/ImageTextCard/ImageTextCard';
import ArrowButton from '@/components/Buttons/ArrowButton';
import { motion } from 'framer-motion';
import { defaultTextFadeIn, headerTextFadeIn } from '@/components/utils/animations';

const RetrofitUpgradeSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FEFFEB]">
      {/* Horizontal Line and Header with Right Text */}
      <div className="max-w-[1200px] mx-auto mb-12 px-6 lg:px-10">
        {/* Horizontal Line */}
        <motion.hr className="border-t-1 border-darkNature mb-8" {...defaultTextFadeIn} />

        {/* Header and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-10">
          {/* Left: Header */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-darkNature lg:w-[40%]"
            {...headerTextFadeIn}
          >
            Håll ditt system uppdaterat och ta del av nya sätt att spara pengar!
          </motion.h2>

          {/* Right: Supporting Text */}
          <motion.p
            className="text-sm lg:text-lg text-darkNature lg:max-w-[55%] mt-4 lg:mt-0"
            {...defaultTextFadeIn}
          >
            Retrofitting handlar om att uppgradera befintliga energisystem, såsom solcellsanläggningar,
            med ny teknologi för att öka effektiviteten, lagringskapaciteten och förbättra systemens prestanda överlag.
          </motion.p>
        </div>
      </div>

      {/* ImageTextCard Section */}
      <ImageTextCard
        title="Ökad energieffektivitet"
        description="Ett batteri hjälper till att minska energiförluster, öka egenanvändningen av solenergi och förbättra den ekonomiska och tekniska effektiviteten i en solcellsanläggning."
        imageSrc="/images/retrofit/Luna2000pool_1.png"
        imageAlt="Energy storage retrofit"
        imagePosition="right"  // This can be set to "left" or "right"
        subSections={[
          {
            heading: "Lägre kostnader",
            content: "Att installera ett batteri innebär lägre energikostnader genom att använda lagrad energi när priserna är som högst. Samtidigt kan batteriet anslutas till stödtjänster som genererar extra intäkter."
          },
          {
            heading: "Energiarbitrage",
            content: "Med ett batteri kan du köpa el när priserna är låga, lagra den, och sälja den när priserna är högre. Detta hjälper dig att maximera besparingarna genom att utnyttja varierande elpriser."
          },
          {
            heading: "Möjlighet till backup",
            content: "Ett batterisystem ger dig tryggheten att ha ström även vid strömavbrott. Dina viktigaste apparater kan fortsätta fungera utan avbrott."
          }
        ]}
        footerContent={<ArrowButton size="medium" href="/kontakt">Kontakta oss</ArrowButton>}
      />
    </section>
  );
};

export default RetrofitUpgradeSection;
