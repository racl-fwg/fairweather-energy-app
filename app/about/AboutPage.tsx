"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section id="about" className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <div className="mb-24 mt-12 text-center max-w-3xl mx-auto">
          <motion.div
            className="text-3xl font-semibold text-darkNature mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Om oss – för bättre energilösningar
          </motion.div>
          <motion.div
            className="text-lg text-darkNature leading-7 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Som oberoende konsulter fokuserar vi helt på kundupplevelsen. Vi lyssnar på era behov – både vad gäller hårdvara och installation – för att säkerställa att ni är nöjda med hela processen. Vi håller oss ständigt uppdaterade om de senaste funktionerna inom batteriteknik och nya ekonomiska möjligheter. Ni får tydlig information om både möjligheter och begränsningar när ni ska välja rätt batteri. Dessutom får ni en ordentlig genomgång av systemets applikation, så att ni enkelt kan följa utvecklingen och se hur ert system presterar.
          </motion.div>
          <motion.div
            className="text-lg text-darkNature leading-7 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            Vi finns här för att göra ert val av batterisystem enkelt och tryggt. Med vår expertis och personliga service hjälper vi er att ta rätt beslut och maximera nyttan av er installation. Er nöjdhet är vår högsta prioritet. Låt oss göra er batterilösning till en framgång!
          </motion.div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />

        {/* Projektering Section with Cards */}
        <div className="mb-12 text-darkNature">
          {/* Projektering Header and Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-semibold mb-4">Projektering</h2>
            </motion.div>
            <motion.div
              className="text-lg md:col-start-2 md:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <p>
                En projektering kan vara svår och komplicerad, med många faktorer att ta hänsyn till. Vi erbjuder komplett projektering och tar ansvar för att projektleda genom hela processen. Från planering till genomförande, ser vi till att varje steg hanteras professionellt och effektivt, så att ditt projekt når sina mål utan komplikationer.
              </p>
            </motion.div>
          </div>

          {/* Service Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Card 1 */}
            <motion.div
              className="p-8 bg-white shadow-md rounded-xl relative hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <img
                src="/icons/icon-document.png"
                alt="Förkvalificering & Föranmälan"
                className="absolute top-6 left-6 h-12"
              />
              <h3 className="text-xl font-bold text-darkNature mb-4 mt-4 ml-20">
                Förkvalificering & Föranmälan
              </h3>
              <ul className="list-disc list-inside text-darkNature space-y-2">
                <li>Skickar in föranmälan till nätägare</li>
                <li>Bedömer kostnader för eventuell höjning av säkring och kapacitetshöjning</li>
                <li>Hjälper att kontrollera krav från försäkringsbolag</li>
                <li>Utvärderar er batteriets placering och nödvändiga ledningsdragningar</li>
              </ul>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="p-8 bg-white shadow-md rounded-xl relative hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              <img
                src="/icons/icon-calculator.png"
                alt="Kostnadskalkyl & Analys"
                className="absolute top-6 left-6 h-12"
              />
              <h3 className="text-xl font-bold text-darkNature mb-4 mt-4 ml-20">
                Kostnadskalkyl & Analys
              </h3>
              <ul className="list-disc list-inside text-darkNature space-y-2">
                <li>Presentera de alternativ till batterier som finns på marknaden</li>
                <li>Detaljerad kostnadskalkyl för inkoppling av el, inklusive eventuella tillägg</li>
                <li>Analys och bedömning av kostnader vid eventuella kompletteringar</li>
              </ul>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              className="p-8 bg-white shadow-md rounded-xl relative hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <img
                src="/icons/icon-growth-graph.png"
                alt="Projektanalys & Avkastning"
                className="absolute top-6 left-6 h-12"
              />
              <h3 className="text-xl font-bold text-darkNature mb-4 mt-4 ml-20">
                Projektanalys & Avkastning
              </h3>
              <ul className="list-disc list-inside text-darkNature space-y-2">
                <li>Komplett projektering och analys av kostnader</li>
                <li>Bedömning av avkastning från olika systemkonfigurationer</li>
                <li>Analys av förväntad avkastning för batteriet baserat på ekonomiska fördelar</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />

        {/* Final Call-to-Action Section */}
        <div className="text-center">
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-darkNature mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Låt oss hjälpa er på vägen mot en effektivare energilösning!
          </motion.div>
          <motion.div
            className="text-lg text-darkNature leading-7 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Vårt team är redo att svara på era frågor och guida er genom processen – från första konsultationstillfället till färdig installation. Kontakta oss idag för att ta nästa steg mot en skräddarsydd batterilösning som passar just era behov.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
