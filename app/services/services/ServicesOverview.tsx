import React from "react";
import BasicImageTextCard from "@/components/ImageTextCard/BasicImageTextCard";

const ServicesOverview: React.FC = () => {
  return (
    <div className="space-y-16 bg-lightNature py-16">
      {/* Second Section - Retrofit */}
      <div className="container mx-auto max-w-[1400px] px-4 lg:px-8">
        <BasicImageTextCard
          title="Retrofit"
          description="Vår retrofit-konsultationstjänst är utformad för att hjälpa företag och hushåll att optimera sina befintliga energisystem genom att uppgradera komponenter eller lägga till nya funktioner för att förbättra energieffektiviteten. Oavsett om det handlar om att förbättra dina solpaneler, uppgradera ditt batterilager eller integrera nya nätlösningar, kan våra experter ge skräddarsydda råd och lösningar för att framtidssäkra ditt energisystem. Vi analyserar din nuvarande installation och rekommenderar kostnadseffektiva modifieringar som kan minska din energiförbrukning och öka hållbarheten."
          buttonText="Läs mer"
          buttonLink="#"
          imageSrc="/images/services/house_on_platform_with_dropshadow 1.png" // Corrected image name
          reverse={true} // Reverse the layout to match the design
          whiteBackground={true}
        />
      </div>

      {/* Third Section - Stödtjänster */}
      <div className="container mx-auto max-w-[1400px] px-4 lg:px-8">
        <BasicImageTextCard
          title="Stödtjänster"
          description="Vår konsultation för stödtjänster erbjuder företag och organisationer den expertis som behövs för att navigera i energihanteringens komplexitet. Vi ger vägledning om hur du kan delta i tjänster som efterfrågestyrning, effektreducering och frekvensreglering. Genom att utnyttja våra konsultationstjänster kan du maximera de ekonomiska fördelarna av energiflexibilitetsmarknader och stödtjänster. Oavsett om du vill minska dina energikostnader eller bidra till nätstabiliteten, hjälper vårt team dig att sätta upp system som optimerar din delaktighet i energimarknaderna."
          buttonText="Läs mer"
          buttonLink="#"
          imageSrc="/images/services/water_grid_trees_1.png" // Corrected image name
          whiteBackground={true}
        />
      </div>

      {/* Fourth Section - Föranmälan och Förkvalificering */}
      <div className="container mx-auto max-w-[1400px] px-4 lg:px-8">
        <BasicImageTextCard
          title="Föranmälan och Förkvalificering"
          description="Föranmälan och förkvalificering-konsultationen säkerställer att dina energiprojekt uppfyller lokala regler innan de implementeras. Vi hjälper dig att hantera ansökningsprocessen och ser till att du uppfyller de nödvändiga kvalifikationerna för energiinrättningar, oavsett om du installerar solcellssystem eller energilagringslösningar. Våra experter guidar dig genom varje steg, från dokumentation till inlämning, och ser till att ditt projekt godkänns smidigt och uppfyller alla tekniska och juridiska krav."
          buttonText="Läs mer"
          buttonLink="#"
          imageSrc="/images/services/frame_37.png" // Corrected image name
          reverse={true} // Reverse the layout for this section
          whiteBackground={true}
        />
      </div>
    </div>
  );
};

export default ServicesOverview;
