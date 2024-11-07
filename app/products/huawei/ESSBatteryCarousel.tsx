"use client";
import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

// Defining the carousel images for the ESS battery section
const essCarouselImages = [
  "/images/products/huawei/carousel-ess/ESS_1.png",
  "/images/products/huawei/carousel-ess/ESS_2.png",
];

const ESSBatteryCarousel: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">
      {/* Top Section */}
      <ContainerWrapper>
        {/* Horizontal Line */}
        <motion.div
          {...textFadeIn}
          className="w-full border-t border-darkNature mb-16"
        ></motion.div>

        {/* Header and Supporting Text */}
        <motion.div
          {...textFadeIn}
          className="flex flex-col lg:flex-row justify-between items-start mb-10 space-y-6 lg:space-y-0 lg:space-x-6"
        >
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-nature">
            C&I Batterier (Industribatterier)
          </h1>

          {/* Right: Supporting Text */}
          <p className="text-sm lg:text-base text-darkNature lg:max-w-[700px]">
            Industribatterier är utformade för större fastigheter och
            kommersiella anläggningar med högre energibehov och större
            säkringar. De används för att jämna ut energitoppar, optimera
            energikostnader och säkra tillförlitlig strömförsörjning.
            Industribatterier hjälper också företag att minska belastningen på
            elnätet och hantera högre elförbrukning på ett kostnadseffektivt
            sätt.
          </p>
        </motion.div>
      </ContainerWrapper>

      {/* ESS Battery Section */}
      <ContainerWrapper>
        <ProductCarouselSectionProp
          title="Huawei Smart String ESS"
          description1="Huawei erbjuder en flexibel och skalbar energilagringslösning med sin LUNA2000-serie, designad för att möta behoven hos kommersiella och industriella applikationer. Systemen är modulära och kan skalas från 100 kWh upp till 2 MW, vilket möjliggör anpassning efter växande energibehov. Med hög verkningsgrad och avancerade säkerhetsfunktioner är Huawei’s ESS idealisk för flera användningsområden, inklusive lastutjämning, peak shaving och integration med förnybara energikällor som solenergi."
          description2="Systemet stöder även nätstabilisering genom tjänster som frekvensreglering och spänningsstöd, vilket gör det värdefullt för nätoperatörer. Tack vare dess robusta säkerhetsdesign och användning av LFP-batterier (litiumjärnfosfat), erbjuder systemet en säker och tillförlitlig lösning för energilagring, även under extrema förhållanden."
          carouselImages={essCarouselImages}
        />
      </ContainerWrapper>
    </div>
  );
};

export default ESSBatteryCarousel;
