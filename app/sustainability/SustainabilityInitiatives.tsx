import React from 'react';
import Image from 'next/image';

const SustainabilityInitiatives: React.FC = () => {
  return (
    <section className="py-16 px-[50px] bg-[#FEFFEB]">
      {/* Section Container */}
      <div className="max-w-[1200px] mx-auto">
        {/* Container for White Background Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Image Container on the Left with Logo Overlay */}
          <div className="flex-1 relative">
            <Image
              src="/images/sustainability/tree_indoors.png"
              alt="Tree Indoors"
              width={680}
              height={680}
              className="object-cover rounded-2xl h-full"
            />
            {/* Overlay Logo in the Bottom Left */}
            <div className="absolute bottom-4 left-4">
              <Image
                src="/images/sustainability/Fairweather_Energy_Logotype_energy_small_transparent.png"
                alt="Fairweather Energy Logo"
                width={160}  // Adjust size as necessary
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content on the Right with Full Height */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="text-4xl text-[#003317] font-semibold">
                Våra Hållbarhetsinitiativ
              </h2>

              {/* Description */}
              <p className="text-lg text-black">
                Hållbarhet genomsyrar hela vår affärsmodell. Genom att designa och implementera avancerade energilagringslösningar hjälper vi våra kunder att minska sina koldioxidutsläpp och uppnå en högre grad av självförsörjning. Vi arbetar aktivt med:
              </p>

              {/* Initiative Points */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl text-[#003317] font-semibold">
                    Resurseffektivitet
                  </h3>
                  <p className="text-sm text-black">
                    Vi maximerar användningen av varje installerad batterimodul för att minska energislöseri och säkerställa att alla våra lösningar är optimerade för långsiktig prestanda.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-[#003317] font-semibold">
                    Hållbara material
                  </h3>
                  <p className="text-sm text-black">
                    Våra batterier är designade för en lång livslängd med hög återvinningsgrad, vilket stödjer Mål 12 (Hållbar konsumtion och produktion). Dessutom strävar vi efter att använda material med låg miljöpåverkan och certifierade leverantörer.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-[#003317] font-semibold">
                    Energi tillgänglig för alla
                  </h3>
                  <p className="text-sm text-black">
                    Vi erbjuder energilösningar som är tillgängliga även för de som inte äger mark eller fastigheter, vilket främjar social hållbarhet och bidrar till Mål 11 (Hållbara städer och samhällen).
                  </p>
                </div>
              </div>
            </div>

            {/* Icons in Bottom Right */}
            <div className="flex justify-end items-center space-x-4 mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityInitiatives;
