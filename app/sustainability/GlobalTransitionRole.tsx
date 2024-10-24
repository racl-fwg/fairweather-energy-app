"use client";
import React from 'react';
import Image from 'next/image';
import ImageTextCard from '@/components/ImageTextCard/ImageTextCard';
import { motion } from 'framer-motion';
import { defaultTextFadeIn, headerTextFadeIn } from '@/components/utils/animations';

const GlobalResponsibility: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-[50px] bg-[#FEFFEB]">
      {/* Horizontal Line */}
      <motion.hr
        className="border-t-1 border-darkNature mb-12"
        {...defaultTextFadeIn}
      />

      {/* Main ImageTextCard Section */}
      <ImageTextCard
        title="Vår Roll i Den Globala Omställningen"
        description="Fairweather Energy arbetar för en hållbar framtid genom att göra energilagring tillgänglig för alla – från privatpersoner till stora industriaktörer. Vårt mål är att bidra till en värld där energi inte bara är förnybar, utan också tillförlitlig, ekonomiskt lönsam och långsiktigt hållbar. Vi tror på kraften i energiinnovationer som möjliggör en grönare och mer resilient energimarknad."
        imageSrc="/images/sustainability/Fight_for_a_better_tomorrow.png"
        imageAlt="Global Responsibility Image"
        imagePosition="left"
        
        subSections={[
          {
            heading: "Våra Lösningar",
            content:
              "Våra lösningar stödjer Mål 7 (Hållbar energi för alla) och Mål 13 (Bekämpa klimatförändringarna) genom att erbjuda effektiva energilagringslösningar som minskar beroendet av fossila bränslen, stödjer frekvensreglering och bidrar till ökad energisjälvförsörjning.",
          },
          {
            heading: "Att Bygga Hållbara Energisamhällen",
            content:
              "Fairweather Energy arbetar inte bara med tekniska lösningar – vi skapar hållbara energisamhällen. Genom våra projekt stödjer vi utvecklingen av lokala energinätverk och ser till att varje installation bidrar till att skapa starkare och mer resilient infrastruktur. Vi är engagerade i att stärka lokala samhällen och säkerställer att våra projekt skapar arbetstillfällen och lokalt engagemang, vilket bidrar till Mål 8 (Anständiga arbetsvillkor och ekonomisk tillväxt).",
          },
        ]}
        footerContent={
          <>
            <Image
              src="/images/sustainability/goal_7.png"
              alt="Goal 7"
              width={50}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/sustainability/goal_8.png"
              alt="Goal 8"
              width={50}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/sustainability/goal_13.png"
              alt="Goal 13"
              width={50}
              height={50}
              className="object-contain"
            />
          </>
        }
        className="max-w-[1200px] mx-auto"
      />

      {/* Bottom Text Section */}
      <motion.div className="text-center mt-12 max-w-2xl mx-auto" {...defaultTextFadeIn}>
        <motion.h3 className="text-4xl text-[#003317] font-semibold mb-6" {...headerTextFadeIn}>
          Ett Globalt och lokalt ansvar för klimatet
        </motion.h3>
        <motion.p className="text-base text-black mb-6" {...defaultTextFadeIn}>
          För oss handlar hållbarhet om mer än bara energieffektivitet – det handlar om att ta ansvar för framtida generationer. Vi är stolta över att våra produkter möjliggör omställningen till en koldioxidneutral energiförsörjning och att våra lösningar stöder både företag och individer att minska sina klimatavtryck.
        </motion.p>
        <motion.p className="text-base text-black mb-6" {...defaultTextFadeIn}>
          Vi är dedikerade till att göra hållbarhet till en kärna i vårt företagande och våra produkter. Genom våra insatser vill vi visa att teknisk innovation kan gå hand i hand med en hållbar framtid.
        </motion.p>
        <motion.p className="text-xl text-[#003317] font-medium" {...headerTextFadeIn}>
          https://www.globalamalen.se/
        </motion.p>
      </motion.div>

      {/* Horizontal Line */}
      <motion.hr
        className="border-t-1 border-darkNature mt-12"
        {...defaultTextFadeIn}
      />
    </section>
  );
};

export default GlobalResponsibility;
