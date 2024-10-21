"use client";
import React from 'react';
import ImageTextCardWithSteps from '@/components/ImageTextCard/ImageTextCardWithSteps'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

const RetrofitSteps: React.FC = () => {
  return (
    <section className="bg-lightNature py-16">
      <div className="max-w-[1200px] mx-auto space-y-16">

        {/* Horizontal Line and Top Section with Heading and Text */}
        <motion.div className="px-6 lg:px-12" {...defaultTextFadeIn}>
          {/* Horizontal Line */}
          <hr className="border-t-1 border-darkNature mb-8" />
        </motion.div>

        {/* ImageTextCardWithSteps Component */}
        <ImageTextCardWithSteps
          title="Vi hjälper dig expandera ditt energisystem"
          description="Vårt team är redo att assistera er i varje steg mot att optimera ert system för framtiden."
          imageSrc="/images/retrofit/logo_group.png"  // Path to the image
          imageAlt="Energy system with battery storage"
          subSections={[
            {
              number: 1,
              heading: "Inspektion av befintligt system",
              content: "Vi genomför en noggrann inspektion av din nuvarande solcellsanläggning för att identifiera möjliga förbättringsområden och se hur den bäst kan optimeras.",
            },
            {
              number: 2,
              heading: "Möjligheter & begränsningar",
              content: "Efter inspektionen av ert system klargör vi vilka batterilager som är kompatibla att ansluta och hur storleken på batteriet påverkar er energiförbrukning.",
            },
            {
              number: 3,
              heading: "Installation",
              content: "Vi ser till att välja den teknik som säkerställer att ditt system är utrustat för framtidens energibehov och optimerar det för era behov.",
            },
            {
              number: 4,
              heading: "Integration och optimering",
              content: "Vi integrerar den nya teknologin med ditt befintliga system för att maximera energibesparingar och effektivitet.",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default RetrofitSteps;
