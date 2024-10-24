import React from 'react';
import ImageTextCardWithSteps from '@/components/ImageTextCard/ImageTextCardWithSteps';
import ArrowButton from '@/components/Buttons/ArrowButton';

const ServiceStepsSection: React.FC = () => {
  return (
    <ImageTextCardWithSteps
      title="Hur fungerar stödtjänster?"
      description="Vi hjälper dig genom hela processen, från förkvalificering och installation till övervakning. Oavsett om du vill stabilisera elnätet med batterier eller optimera din elproduktion, ger vi dig stöd genom varje steg."    
      imageSrc="/images/auxiliary-services/Luna2000_winter_1.png"
      imageAlt="Luna2000 Winter"
      imagePosition="right"
      buttonPosition="left" // Place the button on the left side of the image container
      subSections={[
        {
          number: 1,
          heading: "Förkvalificering",
          content: "Vi hjälper dig att utforska dina förutsättningar för stödtjänster samt att förbereda platsen där batteriet är tänkt.",
        },
        {
          number: 2,
          heading: "Installation",
          content: "Vi planerar allt från förberedelse av plats till leverans och installation av batteriet. Som oberoende konsulter har vi möjlighet att ge dig de bästa förutsättningarna.",
        },
        {
          number: 3,
          heading: "Övervakning",
          content: "Vi övervakar batteriet i realtid för att säkerställa säker och effektiv drift. Detta gör att vi kan upptäcka avvikelser tidigt.",
        },
      ]}
      buttonOverlayContent={
        <ArrowButton text="Kontakta oss" size="medium" href="/about#contact" />
      }
      className="max-w-[1200px] mx-auto"
    />
  );
};

export default ServiceStepsSection;
