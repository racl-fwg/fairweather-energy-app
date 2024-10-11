"use client";
import React from "react";
import Image from "next/image";

const ValueReturn: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-10"
      style={{ backgroundImage: `url(/images/auxiliary-services/3d-background.png)` }}
    >
      {/* Content Container with Flex Properties */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8">
        
        {/* Left Text Section */}
        <div className="text-white max-w-lg lg:w-[45%] flex-grow flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-energy mb-4">
            Avkastning från stödtjänster
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Ökad andel förnybar energi skapar variationer i produktionen som leder till obalanser i elnätet.
            Det ökar risken för frekvensavvikelser, vilket påverkar nätets stabilitet.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Genom att ansluta ett batteri till stödtjänstmarknaden kan både privatpersoner och företag få ersättning för att bidra till stabilitet.
            Detta blir särskilt viktigt i takt med att andelen energi från sol och vind ökar, vilka är intermittenta energikällor som kan orsaka frekvensförändringar.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Att vara aktiv på stödtjänstmarknaden kräver både förståelse för marknadens mekanismer och tekniska lösningar som säkerställer snabb respons.
            Batterier som deltar på marknaden bidrar inte bara till ökad lönsamhet för ägare, utan också till ökad stabilitet för hela elsystemet.
          </p>
          <p className="text-xs text-white mt-auto">
            Beräknad förtjänst:
            <a
              href="https://mimer.svk.se/PrimaryRegulation/PrimaryRegulationIndex"
              className="underline text-energy ml-1"
            >
              mimer.svk.se/PrimaryRegulation
            </a>
          </p>
        </div>

        {/* Right Graph Section */}
        <div className="flex flex-col gap-6 lg:w-[55%] flex-grow">
          {/* Chart 2022 */}
          <div className="flex flex-col items-center lg:flex-row justify-between h-1/2">
            <h3 className="text-energy text-lg text-center lg:text-left mb-2 lg:mb-0 lg:w-[40%]">
              Ersättning över året 2022 <br />
              (Snittersättning/kW/mån - 790,07 kr)
            </h3>
            <div className="relative w-[300px] h-[130px] shadow-lg rounded-2xl overflow-hidden lg:w-[55%]">
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
          </div>

          {/* Chart 2023 */}
          <div className="flex flex-col items-center lg:flex-row justify-between h-1/2">
            <h3 className="text-energy text-lg text-center lg:text-left mb-2 lg:mb-0 lg:w-[40%]">
              Ersättning över året 2023 <br />
              (Snittersättning/kW/mån - 883,60 kr)
            </h3>
            <div className="relative w-[300px] h-[130px] shadow-lg rounded-2xl overflow-hidden lg:w-[55%]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueReturn;
