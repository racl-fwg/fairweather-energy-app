import React from 'react';
import ArrowButton from '@/components/Buttons/ArrowButton'; // Assuming you have the ArrowButton component available

const ServicesCTA: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[1400px] px-4 lg:px-8 py-16 bg-lightNature text-center">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-darkNature mb-6">
        Låt oss hjälpa er på vägen mot en effektivare energilösning!
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8">
        Vårt team är redo att svara på era frågor och guida er genom processen – från första konsultation till färdig installation. 
        Kontakta oss idag för att ta nästa steg mot en skräddarsydd batterilösning som passar just era behov.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <ArrowButton size="medium" href="/about#contact">
          Kontakta oss
        </ArrowButton>
      </div>
    </div>
  );
};

export default ServicesCTA;
