import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";

// Defining the carousel images for the Luna Home section
const lunaCarouselImages = [
  "/images/products/huawei/carousel-luna/luna_1.png",
  "/images/products/huawei/carousel-luna/luna_2.png",
  "/images/products/huawei/carousel-luna/luna_3.png",
];

const HomeBatteryCarousel: React.FC = () => {
  return (
    <div className="space-y-16 mt-12 min-h-screen bg-lightNature">
      {/* Top Section: Header, Horizontal Line, and Right Aligned Text */}
      <div className="max-w-[1600px] mx-auto px-4 pt-8">
        {/* Header and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold mx-14 text-darkNature">Hemmabatterier</h1>

          {/* Right: Supporting Text */}
          <p className="text-sm md:text-base mx-14 text-darkNature lg:max-w-[800px] mt-4 lg:mt-0">
            Hemmabatterier är designade för att lagra energi i bostäder, vanligtvis från solpaneler,
            och göra den tillgänglig när solen inte skiner eller när elpriserna är högre. De hjälper
            till att öka självförsörjningen, sänka elkostnaderna och fungerar som reservkraft vid strömavbrott.
            Med hemmabatterier kan du använda din egenproducerade el på ett mer flexibelt och effektivt sätt.
          </p>
        </div>
      </div>

      {/* Luna2000 Home Section */}
      <div className="w-full max-w-[1600px] mx-auto">
        <ProductCarouselSectionProp
          title="LUNA2000"
          description1="Huawei LUNA2000 är en modulär energilagringslösning som ger hushåll flexibiliteten att lagra överskottsenergi från solpaneler för användning senare, vilket bidrar till ökad energieffektivitet och kostnadsbesparingar. Grundmodellen har en kapacitet på 7 kWh, men systemet kan skalas upp till 14 kWh eller 21 kWh genom att lägga till fler moduler. Med Litiumjärnfosfat (LFP)-batterier erbjuder LUNA2000 hög säkerhet och en lång livslängd på över 6 000 cykler. Detta säkerställer att batteriet behåller över 79 % av sin kapacitet under en garantitid på 10 år."
          description2="Utforska hur LUNA2000 kan maximera ditt hems energiförbrukning!"
          carouselImages={lunaCarouselImages}
        />
      </div>
    </div>
  );
};

export default HomeBatteryCarousel;
