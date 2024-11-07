"use client";
import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

// Defining the carousel images for the Luna Home section
const lunaCarouselImages = [
  "/images/products/huawei/carousel-luna/luna_1.png",
  "/images/products/huawei/carousel-luna/luna_2.png",
  "/images/products/huawei/carousel-luna/luna_3.png",
];

const HomeBatteryCarousel: React.FC = () => {
  return (
    <div className="space-y-16 mt-12 min-h-screen bg-lightNature">
      <ContainerWrapper>
        {/* Top Section: Header, Horizontal Line, and Right-Aligned Text */}
        <motion.div {...textFadeIn} className="w-full border-t border-darkNature mb-16"></motion.div>

        <motion.div
          {...textFadeIn}
          className="flex flex-col lg:flex-row justify-between items-start mb-10 space-y-6 lg:space-y-0"
        >
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-darkNature">
            Hemmabatterier
          </h1>

          {/* Right: Supporting Text */}
          <p className="text-sm md:text-base text-darkNature lg:max-w-[800px] mt-4 lg:mt-0">
            Hemmabatterier är designade för att lagra energi i bostäder,
            vanligtvis från solpaneler, och göra den tillgänglig när solen inte
            skiner eller när elpriserna är högre. De hjälper till att öka
            självförsörjningen, sänka elkostnaderna och fungerar som
            reservkraft vid strömavbrott. Med hemmabatterier kan du använda din
            egenproducerade el på ett mer flexibelt och effektivt sätt.
          </p>
        </motion.div>
      </ContainerWrapper>

      {/* Luna2000 Home Section */}
      <ContainerWrapper>
        <ProductCarouselSectionProp
          title="LUNA2000"
          description1="Huawei LUNA2000 är en modulär energilagringslösning som ger hushåll flexibiliteten att lagra överskottsenergi från solpaneler för användning senare, vilket bidrar till ökad energieffektivitet och kostnadsbesparingar. Grundmodellen har en kapacitet på 7 kWh, men systemet kan skalas upp till 14 kWh eller 21 kWh genom att lägga till fler moduler. Med Litiumjärnfosfat (LFP)-batterier erbjuder LUNA2000 hög säkerhet och en lång livslängd på över 6 000 cykler. Detta säkerställer att batteriet behåller över 79 % av sin kapacitet under en garantitid på 10 år."
          description2="Utforska hur LUNA2000 kan maximera ditt hems energiförbrukning!"
          carouselImages={lunaCarouselImages}
        />
      </ContainerWrapper>
    </div>
  );
};

export default HomeBatteryCarousel;
