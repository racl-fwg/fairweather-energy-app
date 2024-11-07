"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { textFadeIn } from "@/components/utils/animations"; // Import textFadeIn animation

// Defining the carousel images for Emaldo product section
const emaldoCarouselImages = [
  "/images/products/emaldo/carousel/emaldo_1.png", // Add more images if available in the future
];

const EmaldoProduct: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">
      {/* Content Wrapper */}
      <ContainerWrapper container>
        {/* Horizontal Line */}
        <motion.div
          className="w-full border-t border-darkNature mb-8"
          {...textFadeIn}
        ></motion.div>

        {/* Header and Right-aligned Text */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10 text-center lg:text-left"
          {...textFadeIn}
        >
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-nature">
            Emaldo Power Store AI
          </h1>

          {/* Right: Supporting Text */}
          <p className="text-sm lg:text-base text-darkNature lg:max-w-[500px] xl:max-w-[700px] mt-4 lg:mt-0">
            Emaldo® Power Store AI fungerar perfekt i hushåll som redan har en
            solcellsinverter och gör det möjligt att lagra ren, egenproducerad
            solenergi för senare användning. Systemet innehåller en kraftfull
            10,8 kW hybridväxelriktare och ett 5,12 kWh batteri, som kan
            utökas upp till 15,36 kWh för ökad kapacitet. Tack vare den
            integrerade 4G-anslutningen får du full kontroll och övervakning
            av systemet.
          </p>
        </motion.div>

        {/* Emaldo Power Store AI Section */}
        <ProductCarouselSectionProp
          title="Emaldo Power Store AI"
          description1="Den AI-drivna versionen köper el automatiskt när priserna är som lägst och använder den under dyra timmar. Dessutom erbjuder systemet möjlighet till strömbackup för kritiska apparater, och kan även mata tillbaka elnätet, vilket kan generera passiva intäkter för hushållet. Installationen är enkel, och du kan enkelt övervaka och kontrollera systemet med den medföljande appen."
          description2="Med avancerad teknik är Emaldo® Power Store AI det smarta valet för hållbar och kostnadseffektiv energilagring, även om du har ett nytt eller befintligt solcellsystem."
          carouselImages={emaldoCarouselImages}
        />
      </ContainerWrapper>
    </div>
  );
};

export default EmaldoProduct;
