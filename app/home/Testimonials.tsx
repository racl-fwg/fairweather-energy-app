"use client";
import React from "react";
import TestimonialsCarousel from "@/components/Carousels/TestimonialsCarousel";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

// Testimonials data
const testimonialsData = [
  {
    name: "Karin, Uppsala",
    testimonial:
      "Att uppgradera vårt gamla solsystem med ett nytt batteri var smidigt! Nu kan vi lagra energi och optimera förbrukningen bättre än någonsin.",
  },
  {
    name: "Lars, Västerås",
    testimonial:
      "Fairweather hjälpte oss integrera ett nytt batteri med våra äldre solpaneler. Nu får vi ut mer av varje soltimme!",
  },
  {
    name: "Anna, Stockholm",
    testimonial:
      "Batterisystemet har varit en perfekt lösning för att stabilisera vår energiförbrukning under toppar och delta i stödtjänster på elnätet.",
  },
  {
    name: "Fredrik, Örebro",
    testimonial:
      "Vårt batterisystem integrerat med Huaweis EMMA har verkligen gett oss bättre kontroll över energianvändningen. Smidigt och effektivt!",
  },
  {
    name: "Maria, Västerås",
    testimonial:
      "Hela paketet med solceller och batteri fungerar fantastiskt! Vi är självförsörjande och ser direkt hur vi sparar pengar varje månad.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-lightNeon">
      <ContainerWrapper>
        {/* Title and Description */}
        <motion.div className="text-center mb-12" {...textFadeIn}>
          <h2 className="text-4xl font-semibold text-darkNature mb-6">
            Hör vad våra kunder tycker om Fairweather Energy
          </h2>
          <p className="text-lg text-darkNature max-w-4xl mx-auto">
            Vi har hjälpt flera hemägare att optimera sina energilösningar. Här
            är några av deras upplevelser av våra batteri- och solcellssystem.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel
          testimonials={testimonialsData}
          title=""
          description=""
        />
      </ContainerWrapper>
    </section>
  );
}
