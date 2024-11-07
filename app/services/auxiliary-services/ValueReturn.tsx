"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import ContainerWrapper from "@/components/Wrapper/ContainerWrapper";
import { motion } from "framer-motion";
import { textFadeIn } from "@/components/utils/animations";

const ValueReturn: React.FC = () => {
  const [activeChart, setActiveChart] = useState<"2022" | "2023">("2023");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if screen is below 1024px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // Check on load
    window.addEventListener("resize", handleResize); // Check on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMarkerClick = (chart: "2022" | "2023") => {
    setActiveChart(chart);
  };

  return (
    <section
      className="relative bg-cover bg-center py-10"
      style={{ backgroundImage: `url(/images/auxiliary-services/3d-background.png)` }}
    >
      <ContainerWrapper>
        {/* Content Container with Flex Properties */}
        <motion.div
          {...textFadeIn}
          className={classNames(
            "relative z-10 flex flex-col gap-10",
            {
              "justify-center items-center text-center": isMobile,
              "lg:flex-row justify-between items-start lg:gap-8": !isMobile,
            }
          )}
        >
          {/* Left Text Section */}
          <div
            className={classNames(
              "text-lightNeon max-w-lg flex-grow flex flex-col",
              { "text-center": isMobile, "lg:w-[45%] text-left": !isMobile }
            )}
          >
            <motion.h2 className="text-3xl font-bold text-energy mb-4" {...textFadeIn}>
              Avkastning från stödtjänster
            </motion.h2>
            <motion.p className="mb-4 text-sm lg:text-base leading-relaxed" {...textFadeIn}>
              Ökad andel förnybar energi skapar variationer i produktionen som leder till
              obalanser i elnätet. Det ökar risken för frekvensavvikelser, vilket påverkar
              nätets stabilitet.
            </motion.p>
            <motion.p className="mb-4 text-sm lg:text-base leading-relaxed" {...textFadeIn}>
              Genom att ansluta ett batteri till stödtjänstmarknaden kan både privatpersoner och
              företag få ersättning för att bidra till stabilitet. Detta blir särskilt viktigt i
              takt med att andelen energi från sol och vind ökar, vilka är intermittenta
              energikällor som kan orsaka frekvensförändringar.
            </motion.p>
            <motion.p className="mb-4 text-sm lg:text-base leading-relaxed" {...textFadeIn}>
              Att vara aktiv på stödtjänstmarknaden kräver både förståelse för marknadens
              mekanismer och tekniska lösningar som säkerställer snabb respons. Batterier som
              deltar på marknaden bidrar inte bara till ökad lönsamhet för ägare, utan också till
              ökad stabilitet för hela elsystemet.
            </motion.p>
            <motion.p className="text-xs mt-auto mb-6" {...textFadeIn}>
              Beräknad förtjänst:
              <a
                href="https://mimer.svk.se/PrimaryRegulation/PrimaryRegulationIndex"
                className="underline text-energy ml-1"
              >
                mimer.svk.se/PrimaryRegulation
              </a>
            </motion.p>
          </div>

          {/* Right Graph Section */}
          <div className="flex flex-col gap-6 lg:w-[55%] w-full flex-grow items-center lg:items-start">
            {!isMobile && (
              <>
                {/* Chart 2022 */}
                <motion.div {...textFadeIn} className="flex flex-col w-full">
                  <h3 className="text-energy text-lg text-center lg:mb-2">
                    Ersättning över året 2022 <br />
                    (Snittersättning/kW/mån - 790,07 kr)
                  </h3>
                  <div className="relative w-full h-[160px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/auxiliary-services/Chart_2022.png"
                      alt="Chart 2022"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Chart 2023 */}
                <motion.div {...textFadeIn} className="flex flex-col w-full mt-2 lg:mt-0">
                  <h3 className="text-energy text-lg text-center mb-2 lg:mb-4">
                    Ersättning över året 2023 <br />
                    (Snittersättning/kW/mån - 883,60 kr)
                  </h3>
                  <div className="relative w-full h-[160px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/auxiliary-services/Chart_2023.png"
                      alt="Chart 2023"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </motion.div>
              </>
            )}

            {isMobile && (
              <>
                {activeChart === "2022" && (
                  <motion.div {...textFadeIn}>
                    <h3 className="text-energy text-lg text-center mb-2">
                      Ersättning över året 2022 <br />
                      (Snittersättning/kW/mån - 790,07 kr)
                    </h3>
                    <div className="relative w-[400px] h-[200px] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/auxiliary-services/Chart_2022.png"
                        alt="Chart 2022"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </motion.div>
                )}

                {activeChart === "2023" && (
                  <motion.div {...textFadeIn}>
                    <h3 className="text-energy text-lg text-center mb-2">
                      Ersättning över året 2023 <br />
                      (Snittersättning/kW/mån - 883,60 kr)
                    </h3>
                    <div className="relative w-[400px] h-[200px] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/auxiliary-services/Chart_2023.png"
                        alt="Chart 2023"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div {...textFadeIn} className="flex justify-center gap-4 mt-2">
                  <div
                    className={classNames(
                      "w-4 h-4 rounded-full cursor-pointer",
                      { "bg-energy": activeChart === "2022" },
                      { "bg-gray-500": activeChart !== "2022" }
                    )}
                    onClick={() => handleMarkerClick("2022")}
                  ></div>
                  <div
                    className={classNames(
                      "w-4 h-4 rounded-full cursor-pointer",
                      { "bg-energy": activeChart === "2023" },
                      { "bg-gray-500": activeChart !== "2023" }
                    )}
                    onClick={() => handleMarkerClick("2023")}
                  ></div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

export default ValueReturn;
