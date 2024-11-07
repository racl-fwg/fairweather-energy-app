"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ThreeCardsLayout from '@/components/ThreeCardsLayout/ThreeCardsLayout';
import { textFadeIn } from '@/components/utils/animations';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';

export default function AboutPage() {
  return (
    <section id="about" className="py-12 bg-lightNeon">
        <ContainerWrapper>
        {/* Introduction Section */}
        <div className="mb-16 mt-12 text-center max-w-4xl mx-auto">
          <motion.div
            className="text-left md:text-center text-4xl font-semibold text-darkNature mb-8"
            {...textFadeIn}
          >
            Om oss – för bättre energilösningar
          </motion.div>
          <motion.div
            className="text-left md:text-center text-base sm:text-lg text-darkNature leading-7 mb-8"
            {...textFadeIn}
          >
            Som oberoende konsulter fokuserar vi helt på kundupplevelsen. Vi lyssnar på era behov – både vad gäller hårdvara och installation – för att säkerställa att ni är nöjda med hela processen. Vi håller oss ständigt uppdaterade om de senaste funktionerna inom batteriteknik och nya ekonomiska möjligheter. Ni får tydlig information om både möjligheter och begränsningar när ni ska välja rätt batteri. Dessutom får ni en ordentlig genomgång av systemets applikation, så att ni enkelt kan följa utvecklingen och se hur ert system presterar.
          <br /> <br />
            Vi finns här för att göra ert val av batterisystem enkelt och tryggt. Med vår expertis och personliga service hjälper vi er att ta rätt beslut och maximera nyttan av er installation. Er nöjdhet är vår högsta prioritet. Låt oss göra er batterilösning till en framgång!
          </motion.div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-16" />

        {/* Use the New ThreeCardsLayout Component */}
        <ThreeCardsLayout
          sectionTitle="Projektering"
          sectionDescription="En projektering kan vara svår och komplicerad, med många faktorer att ta hänsyn till. Vi erbjuder komplett projektering och tar ansvar för att projektleda genom hela processen. Från planering till genomförande, ser vi till att varje steg hanteras professionellt och effektivt, så att ditt projekt når sina mål utan komplikationer."
          cards={[
            {
              iconSrc: "/icons/icon-document.png",
              title: "Förkvalificering & Föranmälan",
              description: [
                "Skickar in föranmälan till nätägare",
                "Bedömer kostnader för eventuell höjning av säkring och kapacitetshöjning",
                "Hjälper att kontrollera krav från försäkringsbolag",
                "Utvärderar er batteriets placering och nödvändiga ledningsdragningar",
              ],
            },
            {
              iconSrc: "/icons/icon-calculator.png",
              title: "Kostnadskalkyl & Analys",
              description: [
                "Presentera de alternativ till batterier som finns på marknaden",
                "Detaljerad kostnadskalkyl för inkoppling av el, inklusive eventuella tillägg",
                "Analys och bedömning av kostnader vid eventuella kompletteringar",
              ],
            },
            {
              iconSrc: "/icons/icon-growth-graph.png",
              title: "Projektanalys & Avkastning",
              description: [
                "Komplett projektering och analys av kostnader",
                "Bedömning av avkastning från olika systemkonfigurationer",
                "Analys av förväntad avkastning för batteriet baserat på ekonomiska fördelar",
              ],
            },
          ]}
        />

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />

        {/* Final Call-to-Action Section */}
        <div className="text-center">
          <motion.div
            className="text-3xl xl:text-4xl font-semibold text-darkNature mb-4"
            {...textFadeIn}
          >
            Låt oss hjälpa er på vägen mot en effektivare energilösning!
          </motion.div>
          <motion.div
            className="text-base sm:text-lg text-darkNature leading-7 max-w-4xl mx-auto"
            {...textFadeIn}
          >
            Vårt team är redo att svara på era frågor och guida er genom processen – från första konsultationstillfället till färdig installation. Kontakta oss idag för att ta nästa steg mot en skräddarsydd batterilösning som passar just era behov.
          </motion.div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
