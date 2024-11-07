"use client";
import React from "react";
import ImageTextCardWithSteps from "@/components/ImageTextCard/ImageTextCardWithSteps";
import { motion } from "framer-motion"; 
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-lightNeon">
      <ContainerWrapper>
        {/* Horizontal Line */}
        <motion.hr
          className="border-t-1 border-darkNature mb-12"
          {...textFadeIn}
        />

        {/* Flex container for header and subheader with motion */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-12 mb-12"
          {...textFadeIn}
        >
          {/* Header on the Left */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl text-darkNature font-semibold mb-4">
              Stödtjänster är inte allt ditt batteri kan göra
            </h2>
          </div>

          {/* Sub-header/Description on the Right */}
          <div className="lg:w-2/3">
            <p className="text-sm md:text-base text-darkNature mb-8">
              Var beredd på att ersättningen från stödtjänstmarknaden är mycket volatil och kännetecknas av ständigt skiftande priser. Dessa prisvariationer påverkas av flera faktorer, som förändringar i elproduktionen från förnybara energikällor, nätets belastning samt efterfrågan på stödtjänsterna som frekvensreglering och spänningsstabilisering.
            </p>
          </div>
        </motion.div>

        {/* ImageTextCardWithSteps Component */}
        <ImageTextCardWithSteps
          title=""
          description=""
          imageSrc="/images/auxiliary-services/image-bg.png"
          imageAlt="Benefits Background"
          imagePosition="right" // Using reversed layout
          subSections={[
            {
              number: 1,
              heading: "Lagra solel",
              content:
                "Har du solceller kan ditt batteri lagra din överskottsel för att antingen använda den i hemmet, eller sälja den när efterfrågan är hög. Att lagra sin solel kommer att vara mycket mer lönsamt då skattereduktionen på 60 öre per såld kWh kommer att försvinna.",
              iconSrc: "/images/auxiliary-services/cirkel_1.png",
            },
            {
              number: 2,
              heading: "Peakshaving",
              content:
                "Fler städer inför nu energitariffer för att hantera elförbrukning och främja effektivare användning. Detta gör att priset på el kommer att påverkas mer av din belastning på nätet. Peakshaving innebär att ditt batteri hjälper till att kapa dessa toppar och därmed hålla ett lågt elpris.",
              iconSrc: "/images/auxiliary-services/cirkel_2.png",
            },
            {
              number: 3,
              heading: "Energiarbitrage",
              content:
                "Energiarbitrage innebär att köpa el när priserna är låga, lagra den, och sälja vid högre priser. Vinsten uppstår genom att utnyttja prisskillnader under dygnet, ofta med hjälp av batterier eller flexibla resurser. Den gröna linjen visar elpriserna under dygnet över 2023.",
              iconSrc: "/images/auxiliary-services/cirkel_3.png",
            },
          ]}
          className="bg-lightNeon"
        />
      </ContainerWrapper>
    </section>
  );
};

export default Benefits;
