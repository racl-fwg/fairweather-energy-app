"use client";
import React from 'react';
import Image from 'next/image';
import ServiceCards from '@/components/ServiceCards/ServiceCards';
import { motion } from 'framer-motion';
import { headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

export default function Services() {
  // Data for the service cards
  const cards = [
    {
      imageSrc: "/images/home/Home_battery_units.png",
      title: "Hemmabatterier",
      description: "Som villaägare kan du lagra solel, köpa billig el för användning vid högre priser, eller delta i stödtjänster och bidra till elnätets stabilitet.",
      buttonType: "quote",
    },
    {
      imageSrc: "/images/home/Energy_storage_container.png",
      title: "Industribatterier",
      description: "Industribatterier möjliggör lagring av överskottsel, optimering av energianvändning och minskade kostnader genom att utnyttja el när priserna är som lägst.",
      buttonType: "quote",
    },
    {
      imageSrc: "/images/home/Office_meeting_scene.png",
      title: "Konsultation",
      description: "Vi erbjuder konsultation inför din planerade installation. Vi hjälper dig utvärdera dina förutsättningar och guidar dig till den bästa möjliga lösningen.",
      buttonType: "arrow",
      buttonText: "Kontakta oss",
      buttonHref: "#contact",
    },
  ];

  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Service Cards Section */}
        <ServiceCards cards={cards} />

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />

        {/* New Graphic Section with Animations */}
        <motion.div className="text-center mt-24 mb-12" {...defaultTextFadeIn}>
          {/* Heading and Description Above the Graphic */}
          <motion.h2 className="text-3xl font-semibold text-nature mb-4" {...headerTextFadeIn}>
            Solceller är inte ett måste!
          </motion.h2>
          <motion.p className="text-darkNature text-lg max-w-4xl mx-auto mb-8" {...defaultTextFadeIn}>
            Ett batteri kan användas för mer än bara att lagra solenergi. Det kan också fungera som en reservkraftkälla, vilket säkerställer att viktiga apparater och system fortsätter att fungera under strömavbrott. Batterier kan också hjälpa till att optimera energiförbrukningen genom att ladda vid låg elpriskostnad och användas när priserna är höga, en process som kallas arbitrage. Dessutom kan de delta i frekvensreglering och bidra till att balansera elnätet, särskilt i tider av hög belastning.
          </motion.p>

          {/* Graphic Image */}
          <motion.div className="flex justify-center" {...defaultTextFadeIn}>
            <Image
              src="/images/home/service-graphic.png"
              alt="Battery Service Graphic"
              width={900}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
