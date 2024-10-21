import React from "react";
import ServicesHero from "@/services/services/ServicesHero"; // Adjust the import path as necessary
import ServicesOverview from "@/services/services/ServicesOverview"; // Adjust the import path as necessary
import ServicesCTA from "@/services/services/ServicesCTA"; // Adjust the import path as necessary

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <ServicesHero />

      {/* Overview Section */}
      <ServicesOverview />

      {/* CTA Section */}
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
