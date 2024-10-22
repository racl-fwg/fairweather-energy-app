import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";

// Defining the carousel images for the ESS battery section
const essCarouselImages = [
  "/images/products/huawei/carousel-ess/ESS_1.png",
  "/images/products/huawei/carousel-ess/ESS_2.png",
];

const ESSBatteryCarousel: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen">
      {/* Top Section: Header, Horizontal Line, and Right Aligned Text */}
      <div className="max-w-[1600px] mx-auto px-4 pt-8">
        {/* Horizontal Line */}
        <div className="w-full border-t border-darkNature mb-16"></div>

        {/* Header and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold mx-14 text-nature">
            C&I Batterier (Industribatterier)
          </h1>

          {/* Right: Supporting Text */}
          <p className="text-sm lg:text-base mx-14 text-darkNature lg:max-w-[800px] mt-4 lg:mt-0">
            Industribatterier är utformade för större fastigheter och kommersiella anläggningar med högre
            energibehov och större säkringar. De används för att jämna ut energitoppar, optimera energikostnader 
            och säkra tillförlitlig strömförsörjning. Industribatterier hjälper också företag att minska belastningen 
            på elnätet och hantera högre elförbrukning på ett kostnadseffektivt sätt.
          </p>
        </div>
      </div>

      {/* ESS Battery Section */}
      <div className="w-full max-w-[1600px] mx-auto">
        <ProductCarouselSectionProp
          title="Huawei Smart String ESS"
          description1="Huawei erbjuder en flexibel och skalbar energilagringslösning med sin LUNA2000-serie, designad för att möta behoven hos kommersiella och industriella applikationer. Systemen är modulära och kan skalas från 100 kWh upp till 2 MW, vilket möjliggör anpassning efter växande energibehov. Med hög verkningsgrad och avancerade säkerhetsfunktioner är Huawei’s ESS idealisk för flera användningsområden, inklusive lastutjämning, peak shaving och integration med förnybara energikällor som solenergi."
          description2="Systemet stöder även nätstabilisering genom tjänster som frekvensreglering och spänningsstöd, vilket gör det värdefullt för nätoperatörer. Tack vare dess robusta säkerhetsdesign och användning av LFP-batterier (litiumjärnfosfat), erbjuder systemet en säker och tillförlitlig lösning för energilagring, även under extrema förhållanden."
          carouselImages={essCarouselImages}
          groupImage1="/images/icons/group-303.png"  // Optional: add specific group images if available
          groupImage2="/images/icons/group-304.png"  // Optional: add specific group images if available
          background="/images/products/huawei/ess-background.png"  // Optional background image
        />
      </div>
    </div>
  );
};

export default ESSBatteryCarousel;
