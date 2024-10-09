"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowButton from '@/components/Buttons/ArrowButton';

const ServiceSteps: React.FC = () => {
  return (
    <section className="py-20">
      {/* Title Section with Animation */}
      <div className="text-center mb-16 px-4">
        <motion.h2
          className="text-4xl font-bold text-darkNature mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Vad är stödtjänster?
        </motion.h2>
        <motion.p
          className="text-lg text-darkNature max-w-3xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          Stödtjänster stabiliserar elnätet genom att hålla frekvensen nära 50 Hz. Frekvensförändringar
          uppstår när det är obalans mellan elproduktion och förbrukning, vilket kan orsaka störningar.
          Stödtjänster delas in i frekvensrelaterade, som frekvenshållningsreserver, och icke-frekvensrelaterade,
          som spänningsreglering. Både stora aktörer och privatpersoner med batterier kan bidra till nätstabilitet
          och få ersättning. Detta blir viktigare i takt med att förnybara energikällor, som sol och vind, används
          mer, eftersom de är intermittenta och kan skapa obalanser.
        </motion.p>
      </div>

      {/* Container Section for Cards and Image */}
      <div className="w-full lg:w-[calc(100%-200px)] lg:mx-[100px] mb-12 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start bg-white rounded-2xl shadow-lg overflow-hidden lg:h-[500px]">
          {/* Text Cards Section */}
          <div className="p-8 lg:w-3/5 flex flex-col justify-between space-y-4 lg:space-y-6 lg:h-full">
            {/* Card 1 */}
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-darkNature text-energy w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full mr-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-darkNature">Förkvalificering</h3>
              </div>
              <p className="text-darkNature">
                Vi hjälper dig att utforska dina förutsättningar för stödtjänster samt att förbereda platsen där batteriet är tänkt.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-darkNature text-energy w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full mr-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-darkNature">Installation</h3>
              </div>
              <p className="text-darkNature">
                Vi planerar allt från förberedelse av plats till leverans och installation av batteriet. Som oberoende konsulter har vi möjlighet att ge dig de bästa förutsättningarna.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-darkNature text-energy w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full mr-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-darkNature">Övervakning</h3>
              </div>
              <p className="text-darkNature">
                Vi övervakar batteriet i realtid för att säkerställa säker och effektiv drift. Detta gör att vi kan upptäcka avvikelser tidigt, optimera energianvändningen och skicka notiser vid behov av underhåll.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-2/5 h-[340px] lg:h-full rounded-r-2xl overflow-hidden">
            <Image
              src="/images/auxiliary-services/Luna2000_winter_1.png"
              alt="Luna2000 Winter"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-r-2xl"
            />
            <div className="absolute bottom-6 right-6">
              {/* ArrowButton Usage */}
              <ArrowButton text="Kontakta oss" size="medium" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;
