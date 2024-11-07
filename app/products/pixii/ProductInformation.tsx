"use client";
import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { motion } from "framer-motion"; // Import motion for animations
import { textFadeIn } from "@/components/utils/animations";

// Defining the carousel images for the Pixii Home section
const pixiiCarouselImages = [
  "/images/products/pixii/pixii_1.png",
  "/images/products/pixii/pixii_2.png",
  "/images/products/pixii/pixii_3.png",
];

const powershaperImages = ["/images/products/pixii/powershaper2.png"];

const ProductInformation: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNeon">
      {/* Pixii Home Section */}
      <ContainerWrapper>
        <motion.div {...textFadeIn}>
          <ProductCarouselSectionProp
            title="Pixii Home"
            description1="Pixii Home är en flexibel och modulär energilagringslösning som är utformad för bostäder. Det ger husägare möjlighet att öka sin energisjälvförsörjning genom att lagra överskottsenergi från solceller eller elnätet och använda den när det behövs som mest. Systemet är enkelt att installera och erbjuder en grundkapacitet på 10 kWh som kan skalas upp till 22 kWh genom att lägga till fler batterimoduler. Detta ger dig möjlighet att anpassa systemet efter ditt hushålls växande energibehov."
            description2="Pixii Home har flera säkerhetsfunktioner, inklusive batterisäkringar, batteribrytare och ett skyddat 48V DC-system för säker installation och drift."
            carouselImages={pixiiCarouselImages}
          />
        </motion.div>
      </ContainerWrapper>

      {/* PowerShaper 2.0 Section with reverse layout */}
      <ContainerWrapper>
        <motion.div {...textFadeIn}>
          <ProductCarouselSectionProp
            title="PowerShaper 2.0"
            description1="Designad för större applikationer, PowerShaper erbjuder upp till 50 kW kraft och är idealisk för kommersiella installationer som kräver peak shaving, arbitrage och frekvensreglering. Systemet är modulärt, och kan skalas upp för att passa behov från 10 till 150 kW eller mer. Detta möjliggör integrerade medel- och lågspänningssystem för att balansera frekvensmarknader och tillhandahålla tjänster som spänningsstöd och balansering."
            description2="Kraftfull och skalbar: Varje PowerShaper-enhet kan hantera upp till 50 kW och användas. En eller flera MAC-batterier för att uppfylla olika energikrav."
            carouselImages={powershaperImages}
            reverseLayout={true} // Set reverse layout for PowerShaper
          />
        </motion.div>
      </ContainerWrapper>
    </div>
  );
};

export default ProductInformation;
