"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const GlobalGoals: React.FC = () => {
  return (
    <section className="py-16 bg-[#FEFFEB]">
      <ContainerWrapper>
        {/* Horizontal Line with Animation */}
        <motion.hr className="border-t-1 border-darkNature mb-12" {...textFadeIn} />

        {/* Container for Section with Row Alignment */}
        <motion.div
          className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:space-x-8"
          {...textFadeIn}
        >
          {/* Section Title with Animation */}
          <h2 className="text-4xl text-[#003317] font-semibold mb-4 lg:mb-0 lg:w-[300px]">
            Vårt bidrag till FN Globala Mål
          </h2>

          {/* Subheader Text with Animation */}
          <p className="text-lg text-black lg:max-w-[700px]">
            Fairweather Energy är engagerade i att driva energiomställningen framåt och stötta FN Globala Mål. Genom våra innovativa energilagringslösningar bidrar vi till en värld där energi är tillförlitlig, hållbar och tillgänglig för alla. Våra insatser är i linje med flera av målen, däribland:
          </p>
        </motion.div>

        {/* White Background Container for Goals and Image */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl px-2 md:px-4 py-12 mx-auto"
          {...textFadeIn}
        >
          {/* Content Wrapper with Animation */}
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* Goals List */}
            <div className="flex-1 space-y-8 flex flex-col justify-between">
              {/* Goal 1 */}
              <GoalItem
                iconSrc="/images/sustainability/goal_7.png"
                title="Hållbar energi för alla"
                description="Hållbar energi är nyckeln till att bekämpa fattigdom, klimatförändringar och säkerställa global tillväxt."
              />

              {/* Goal 2 */}
              <GoalItem
                iconSrc="/images/sustainability/goal_11.png"
                title="Hållbara städer och samhällen"
                description="Ökad urbanisering kräver hållbar stadsutveckling som inkluderar hållbar byggnation, infrastruktur och innovativ stadsplanering för att skapa säkra och hållbara städer."
              />

              {/* Goal 3 */}
              <GoalItem
                iconSrc="/images/sustainability/goal_12.png"
                title="Hållbar konsumtion och produktion"
                description="För att nå hållbar utveckling måste vi minska vår överkonsumtion och förändra hur vi producerar och konsumerar, vilket gynnar både miljön, ekonomin och samhället."
              />

              {/* Goal 4 */}
              <GoalItem
                iconSrc="/images/sustainability/goal_13.png"
                title="Bekämpa klimatförändringarna"
                description="Klimatförändringar hotar vår civilisation med ökade växthusgasutsläpp som kan leda till allvarliga konsekvenser för ekosystem, säkerhet och hälsa."
              />
            </div>

            {/* Supporting Image */}
            <div className="flex-1 hidden lg:flex items-center">
              <Image
                src="/images/sustainability/gm_tre_dimensioner.png"
                alt="Global Goals"
                width={680}
                height={680}
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Text Section */}
        <motion.div className="text-center mt-12 max-w-2xl mx-auto" {...textFadeIn}>
          <p className="text-lg text-black mb-6">
            Genom att bidra till dessa mål, hoppas vi att vårt arbete ska vara en katalysator för en grönare och mer rättvis framtid. Fairweather Energy är inte bara en energileverantör –
          </p>
          <div className="text-darkNature text-2xl font-semibold">
            <span className="relative inline-block">
              <span className="absolute -left-6 top-[-6px] text-5xl font-bold">“</span>
              vi är en partner i omställningen mot en hållbar värld.
              <span className="absolute -right-6 bottom-[-6px] text-5xl font-bold">”</span>
            </span>
          </div>
        </motion.div>

        {/* Horizontal Line */}
        <motion.hr className="border-t-1 border-darkNature mt-12" {...textFadeIn} />
      </ContainerWrapper>
    </section>
  );
};

/* Goal Item Component */
const GoalItem: React.FC<{ iconSrc: string; title: string; description: string }> = ({
  iconSrc,
  title,
  description,
}) => (
  <motion.div
    className="flex flex-col sm:flex-row sm:items-start space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 w-full"
    {...textFadeIn}
  >
    {/* Icon and Text Stack */}
    <Image
      src={iconSrc}
      alt={`${title} Icon`}
      width={50}
      height={50}
      className="object-contain w-full sm:w-auto"
    />
    <div className="flex-1">
      <h3 className="text-2xl text-[#003317] font-semibold">{title}</h3>
      <p className="text-sm text-black">{description}</p>
    </div>
  </motion.div>
);

export default GlobalGoals;
