import React from 'react';
import BasicImageTextCard from '@/components/ImageTextCard/BasicImageTextCard';

const ServicesHero: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[1400px] px-4 lg:px-8 py-16 mt-12">
      <BasicImageTextCard
        title="Låt oss hjälpa er på vägen mot en effektivare energilösning!"
        description="Behöver du hjälp med att optimera ditt energisystem eller få professionell vägledning för dina energiprojekt? 
        Vårt team av experter erbjuder konsultationstjänster som täcker allt från uppgraderingar och energieffektivisering till att 
        navigera regelverk och stödfunktioner. Vi hjälper dig att maximera energibesparingar, möta regulatoriska krav och säkerställa 
        att ditt energisystem fungerar smidigt och effektivt."
        buttonText="Kontakta oss"
        buttonLink="#"
        imageSrc="/images/services/House_on_platform 1.png" // Ensure no spaces in image file names
        whiteBackground={false} // Transparent background
      />
    </div>
  );
};

export default ServicesHero;
