import React from 'react';
import Image from 'next/image';

const GlobalGoals: React.FC = () => {
  return (
    <section className="py-16 px-[50px] bg-[#FEFFEB]">
      {/* Horizontal Line */}
      <hr className="border-t-1 border-darkNature mb-12" />

      {/* Container for Section with Row Alignment */}
      <div className="max-w-[1200px] mx-auto mb-12 flex flex-col lg:flex-row justify-between items-start lg:space-x-8">
        {/* Section Title */}
        <h2 className="text-4xl text-[#003317] font-semibold mb-4 lg:mb-0 lg:w-[300px]">
          Vårt bidrag till FN Globala Mål
        </h2>

        {/* Subheader Text */}
        <p className="text-lg text-black lg:max-w-[700px]">
          Fairweather Energy är engagerade i att driva energiomställningen framåt och stötta FN Globala Mål. Genom våra innovativa energilagringslösningar bidrar vi till en värld där energi är tillförlitlig, hållbar och tillgänglig för alla. Våra insatser är i linje med flera av målen, däribland:
        </p>
      </div>

      {/* White Background Container for Goals and Image */}
      <div className="bg-white shadow-lg rounded-2xl px-[50px] py-12 mx-auto max-w-[1200px]">
        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Goals List */}
          <div className="flex-1 space-y-8 flex flex-col justify-between">
            {/* Goal 1 */}
            <div className="flex items-start space-x-6">
              <Image
                src="/images/sustainability/goal_7.png"
                alt="Goal 7 Icon"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl text-[#003317] font-semibold">
                  Hållbar energi för alla
                </h3>
                <p className="text-sm text-black">
                  Hållbar energi är nyckeln till att bekämpa fattigdom, klimatförändringar och säkerställa global tillväxt.
                </p>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="flex items-start space-x-6">
              <Image
                src="/images/sustainability/goal_11.png"
                alt="Goal 11 Icon"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl text-[#003317] font-semibold">
                  Hållbara städer och samhällen
                </h3>
                <p className="text-sm text-black">
                  Ökad urbanisering kräver hållbar stadsutveckling som inkluderar hållbar byggnation, infrastruktur och innovativ stadsplanering för att skapa säkra och hållbara städer.
                </p>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="flex items-start space-x-6">
              <Image
                src="/images/sustainability/goal_12.png"
                alt="Goal 12 Icon"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl text-[#003317] font-semibold">
                  Hållbar konsumtion och produktion
                </h3>
                <p className="text-sm text-black">
                  För att nå hållbar utveckling måste vi minska vår överkonsumtion och förändra hur vi producerar och konsumerar, vilket gynnar både miljön, ekonomin och samhället.
                </p>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="flex items-start space-x-6">
              <Image
                src="/images/sustainability/goal_13.png"
                alt="Goal 13 Icon"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl text-[#003317] font-semibold">
                  Bekämpa klimatförändringarna
                </h3>
                <p className="text-sm text-black">
                  Klimatförändringar hotar vår civilisation med ökade växthusgasutsläpp som kan leda till allvarliga konsekvenser för ekosystem, säkerhet och hälsa.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Image */}
          <div className="flex-1 hidden lg:flex items-center">
            <Image
              src="/images/sustainability/gm_tre_dimensioner.png"
              alt="Global Goals"
              width={680}
              height={680}
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-lg text-black mb-6">
          Genom att bidra till dessa mål, hoppas vi att vårt arbete ska vara en katalysator för en grönare och mer rättvis framtid. Fairweather Energy är inte bara en energileverantör -
        </p>
        <div className="text-darkNature text-2xl font-semibold">
          <span className="relative inline-block">
            <span className="absolute -left-6 top-[-6px] text-5xl font-bold">“</span>
            vi är en partner i omställningen mot en hållbar värld.
            <span className="absolute -right-6 bottom-[-6px] text-5xl font-bold">”</span>
          </span>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-darkNature mt-12" />
    </section>
  );
};

export default GlobalGoals;
