"use client";
import React from "react";
import Image from "next/image";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

const HuaweiPage: React.FC = () => {
  return (
    <section className="py-16 relative bg-lightNature">
      {/* Huawei Logo in Background */}
      <div className="absolute left-10 top-20 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] z-0 opacity-10">
        <Image
          src="/images/products/huawei/Huawei_Standard_logo.png"
          alt="Huawei Background Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="pointer-events-none"
        />
      </div>

      {/* Text Content Section */}
      <ContainerWrapper>
        <motion.div
          {...textFadeIn}
          className="relative z-10 text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-darkNature mb-6">
            HUAWEI
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Huaweis LUNA2000-batterier är modulära energilagringslösningar för
            ditt hem. Med kapacitet från 5 kWh upp till 82,8 kWh. De har
            avancerade säkerhetsfunktioner som skydd mot överladdning och
            övertemperatur, samt explosionssäkra ventiler. Huawei följer
            certifieringar som IEC 62619 och UN38.3 för hög säkerhet och
            pålitlig transport.
            <span className="font-bold">
              {" "}
              CE, RCM, CEC, VDE2510-50, IEC62619, IEC 60730, UN38.3
            </span>
          </p>
          <p className="text-base text-gray-700 mb-12">
            Utöver det erbjuder Huawei industribatterier i flera storlekar för
            att passa olika behov. Deras batterisystem kan skalas upp från 50
            kWh till flera megawatt, beroende på applikationens krav. Systemen
            kan kombineras för att hantera större energilagringsprojekt och är
            idealiska för industriella tillämpningar som lastutjämning,
            reservkraft och energihantering.
          </p>
        </motion.div>
      </ContainerWrapper>

      {/* Card Grid Section */}
      <ContainerWrapper>
        <motion.div
          {...textFadeIn}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              title: "Kapacitet",
              value: "6,9–20,7 kWh",
              text: "Skalar från 6,9 kWh till 20,7 kWh per styrenhet. Maximal: 4 styrenheter med totalt 82,8 kWh för en MBO-växelriktare, 2 styrenheter med totalt 42 kWh lagring för M1-växelriktare.",
            },
            {
              title: "Effektivitet",
              value: "10–25 kW",
              text: "LUNA2000 S1-serien är kompatibel med MBO-växelriktare, där den har en max uteffekt på 25kW (största storlek på växelriktare) & för M1-serien 10,5 kW (största storlek på växelriktare).",
            },
            {
              title: "Livslängd",
              value: "Cykler",
              text: "LUNA2000-batteriet är designat för att klara över 6 000 laddnings- och urladdningscykler, med bibehållen kapacitet på minst 70 %.",
            },
            {
              title: "Max laddning och urladdning",
              value: "C-rate",
              text: "LUNA2000 har en C-rate på upp till 0,5C för laddning och urladdning, vilket innebär att batteriet kan ladda och urladda halva sin kapacitet på en timme.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-lg font-bold text-darkNature mb-2">
                {item.title}{" "}
                <span className="text-sm font-normal">({item.value})</span>
              </h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </ContainerWrapper>

      {/* Datablad Section */}
      <ContainerWrapper>
        <motion.hr
          {...textFadeIn}
          className="border-t-2 border-darkNature mb-6"
        />

        <motion.div
          {...textFadeIn}
          className="flex flex-col md:flex-row justify-between text-darkNature font-medium text-base"
        >
          {/* Hemmabatterier Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Hemmabatterier</h4>
            <ul>
              <li>LUNA2000-5-E0 (5–15 kWh)</li>
              <li>LUNA2000-7-E1 (7–21 kWh)</li>
            </ul>
          </div>

          {/* Industribatterier Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Industribatterier</h4>
            <ul>
              <li>LUNA2000-97kWh-1H1</li>
              <li>LUNA2000-129-200 KWH-2H1</li>
            </ul>
          </div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

export default HuaweiPage;
