"use client";
import React from "react";
import Image from "next/image";
import ImageTextCard from "@/components/ImageTextCard/ImageTextCard";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";

const SustainabilityInitiatives: React.FC = () => {
  return (
    <section className="py-16 bg-lightNature">
      <ContainerWrapper>
        <div {...textFadeIn}>
          <ImageTextCard
            title="Våra Hållbarhetsinitiativ"
            description="Hållbarhet genomsyrar hela vår affärsmodell. Genom att designa och implementera avancerade energilagringslösningar hjälper vi våra kunder att minska sina koldioxidutsläpp och uppnå en högre grad av självförsörjning. Vi arbetar aktivt med:"
            imageSrc="/images/sustainability/tree_indoors.png"
            imageAlt="Tree Indoors"
            imagePosition="right"
            subSections={[
              {
                heading: "Resurseffektivitet",
                content:
                  "Vi maximerar användningen av varje installerad batterimodul för att minska energislöseri och säkerställa att alla våra lösningar är optimerade för långsiktig prestanda.",
              },
              {
                heading: "Hållbara material",
                content:
                  "Våra batterier är designade för en lång livslängd med hög återvinningsgrad, vilket stödjer Mål 12 (Hållbar konsumtion och produktion). Dessutom strävar vi efter att använda material med låg miljöpåverkan och certifierade leverantörer.",
              },
              {
                heading: "Energi tillgänglig för alla",
                content:
                  "Vi erbjuder energilösningar som är tillgängliga även för de som inte äger mark eller fastigheter, vilket främjar social hållbarhet och bidrar till Mål 11 (Hållbara städer och samhällen).",
              },
            ]}
            overlayContent={
              <Image
                src="/images/sustainability/Fairweather_Energy_Logotype_energy_small_transparent.png"
                alt="Fairweather Energy Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            }
            footerContent={
              <>
                <Image
                  src="/images/sustainability/goal_12.png"
                  alt="Goal 12 Icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src="/images/sustainability/goal_11.png"
                  alt="Goal 11 Icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </>
            }
            className="w-full"
          />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default SustainabilityInitiatives;
