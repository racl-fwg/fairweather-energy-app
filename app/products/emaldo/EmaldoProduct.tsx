import React from "react";
import ProductCarouselSectionProp from "@/components/(sections)/ProductCarouselSectionProp";

// Defining the carousel images for Emaldo product section
const emaldoCarouselImages = [
  "/images/products/emaldo/carousel/emaldo_1.png", // Add more images if available in the future
];

const EmaldoProduct: React.FC = () => {
  return (
    <div className="space-y-16 min-h-screen bg-lightNature">
      {/* Top Section: Header, Horizontal Line, and Right Aligned Text */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 pt-8">
        {/* Horizontal Line */}
        <div className="w-full border-t border-darkNature mb-8"></div>

        {/* Header and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          {/* Left: Header */}
          <h1 className="text-3xl lg:text-4xl font-bold mx-14 text-nature">Emaldo Power Store AI</h1>

          {/* Right: Supporting Text */}
          <p className="text-sm lg:text-base mx-14 text-darkNature lg:max-w-[800px] mt-4 lg:mt-0">
            Emaldo® Power Store AI fungerar perfekt i hushåll som redan har en solcellsinverter och gör det möjligt att lagra ren, egenproducerad solenergi för senare användning. Systemet innehåller en kraftfull 10,8 kW hybridväxelriktare och ett 5,12 kWh batteri, som kan utökas upp till 15,36 kWh för ökad kapacitet. Tack vare den integrerade 4G-anslutningen får du full kontroll och övervakning av systemet.
          </p>
        </div>
      </div>

      {/* Emaldo Power Store AI Section */}
      <div className="w-full max-w-[1600px] mx-auto">
        <ProductCarouselSectionProp
          title="Emaldo Power Store AI"
          description1="Den AI-drivna versionen köper el automatiskt när priserna är som lägst och använder den under dyra timmar. Dessutom erbjuder systemet möjlighet till strömbackup för kritiska apparater, och kan även mata tillbaka elnätet, vilket kan generera passiva intäkter för hushållet. Installationen är enkel, och du kan enkelt övervaka och kontrollera systemet med den medföljande appen."
          description2="Med avancerad teknik är Emaldo® Power Store AI det smarta valet för hållbar och kostnadseffektiv energilagring, även om du har ett nytt eller befintligt solcellsystem."
          carouselImages={emaldoCarouselImages}
        />
      </div>
    </div>
  );
};

export default EmaldoProduct;
