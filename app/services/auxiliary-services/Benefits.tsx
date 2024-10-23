"use client";
import React from 'react';
import ImageTextCardWithSteps from '@/components/ImageTextCard/ImageTextCardWithSteps';

const Benefits: React.FC = () => {
  return (
    <ImageTextCardWithSteps
      title="Stödtjänster är inte allt ditt batteri kan göra"
      description="Var beredd på att ersättningen från stödtjänstmarknaden är mycket volatil och kännetecknas av ständigt skiftande priser. Dessa prisvariationer påverkas av flera faktorer, som förändringar i elproduktionen från förnybara energikällor, nätets belastning samt efterfrågan på stödtjänsterna som frekvensreglering och spänningsstabilisering."
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
  );
};

export default Benefits;
