"use client";
import React from "react";
import Image from "next/image";
import ImageTextCard from "@/components/ImageTextCard/ImageTextCard";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const GlobalResponsibility: React.FC = () => {
  return (
    <section className="py-16 bg-[#FEFFEB]">
      <ContainerWrapper>
        {/* Horizontal Line */}
        <motion.hr className="border-t-1 border-darkNature mb-12" {...textFadeIn} />

        {/* Main Content Wrapper */}
        <div className="space-y-12">
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
            className="w-full"
          />

          {/* Bottom Text Section */}
          <motion.div className="text-center max-w-2xl mx-auto" {...textFadeIn}>
            <h3 className="text-4xl text-[#003317] font-semibold mb-6">
              Ett Globalt och lokalt ansvar för klimatet
            </h3>
            <p className="text-base text-black mb-6">
              För oss handlar hållbarhet om mer än bara energieffektivitet – det handlar om att ta ansvar för framtida generationer. Vi är stolta över att våra produkter möjliggör omställningen till en koldioxidneutral energiförsörjning och att våra lösningar stöder både företag och individer att minska sina klimatavtryck.
            </p>
            <p className="text-base text-black mb-6">
              Vi är dedikerade till att göra hållbarhet till en kärna i vårt företagande och våra produkter. Genom våra insatser vill vi visa att teknisk innovation kan gå hand i hand med en hållbar framtid.
            </p>
            <p className="text-xl text-[#003317] font-medium">
              https://www.globalamalen.se/
            </p>
          </motion.div>

          {/* Horizontal Line */}
          <motion.hr className="border-t-1 border-darkNature mt-12" {...textFadeIn} />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default GlobalResponsibility;
