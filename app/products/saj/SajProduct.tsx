import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";

// Defining the carousel images for SAJ HS2 and B2 series product sections
const hs2CarouselImages = [
  "/images/products/saj/carousel_hs2/saj_hs2_1.png", 
  "/images/products/saj/carousel_hs2/saj_hs2_2.png",
  "/images/products/saj/carousel_hs2/saj_hs2_3.png",
];

const b2CarouselImages = [
  "/images/products/saj/carousel_b2/saj_b2_1.png",
  "/images/products/saj/carousel_b2/saj_b2_2.png",
  "/images/products/saj/carousel_b2/saj_b2_3.png",
];

const SajProduct: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">
      {/* Top Section: Header, Horizontal Line, and Right Aligned Text */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 pt-8">
        {/* Horizontal Line */}
        <div className="w-full border-t border-darkNature mb-8"></div>

        {/* Header and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold mx-14 text-nature">En produktportfölj fylld med lösningar</h1>

          {/* Right: Supporting Text */}
          <p className="text-sm lg:text-base mx-14 text-darkNature lg:max-w-[800px] mt-4 lg:mt-0">
            Produktportföljen inkluderar högpresterande växelriktare, modulära batterisystem och avancerad programvara för energihantering och säkerställning av kontinuerlig drift vid strömavbrott. Känt för lösningar med hög tillförlitlighet och lång livslängd, som backas upp av förstklassig service och support.
          </p>
        </div>
      </div>

      {/* HS2 All-In-One Section */}
      <div className="w-full max-w-[1600px] mx-auto">
        <ProductCarouselSectionProp
          title="HS2 All-In-One"
          description1="SAJ® HS2-serien är en optimal lösning för hushåll med solcellsanläggningar som vill ta kontroll över sin energianvändning genom avancerad energilagring. Systemet innehåller en kraftfull 10 kW hybridväxelriktare med en kapacitet på upp till 10 kW, tillsammans med ett skalbart LiFePO4-batteri som startar på 5,12 kWh och kan utökas upp till 15 kWh för ökad kapacitet."
          description2="HS2-serien har inbyggd backup-funktion, vilket innebär att den kan hantera reservkraftdrift utan behov av en extern backup-box. Denna funktion gör att växelriktaren snabbt kan växla till batteridrift vid ett strömavbrott, med en strömbasväxlingstid på mindre än 10 millisekunder. Det säkerställer att viktiga apparater fortsätter att fungera även när strömmen från nätet försvinner."
          carouselImages={hs2CarouselImages}
          groupImage1="/images/icons/group-303.png"  // Optional: add specific group images if available
          groupImage2="/images/icons/group-304.png"  // Optional: add specific group images if available
          background="/images/products/saj/saj_hero.png"  // Optional background image
        />
      </div>

      {/* B2 Series Section */}
      <div className="w-full max-w-[1600px] mx-auto">
        <ProductCarouselSectionProp
          title="B2-Serien"
          description1="SAJ® B2-serien är en flexibel och skalbar batterilösning för energilagring som är utformad för att integreras med befintliga växelriktare, som t.ex. HS2-serien. HS2-systemet använder säkra och pålitliga LiFePO4-batterier och erbjuder en lagringskapacitet som börjar på 5,12 kWh men som enkelt kan utökas upp till 21,5 kWh genom att stapla moduler."
          description2="B2-seriens robusta design och IP65-klassning gör att systemet kan installeras både inomhus och utomhus, och erbjuder långvarig hållbarhet och hög effektivitet i olika klimatförhållanden."
          carouselImages={b2CarouselImages}
          groupImage1="/images/icons/group-305.png"  // Optional: add specific group images if available
          groupImage2="/images/icons/group-306.png"  // Optional: add specific group images if available
          background="/images/products/saj/saj_hero.png"  // Optional background image
          reverseLayout
        />
      </div>
    </div>
  );
};

export default SajProduct;
