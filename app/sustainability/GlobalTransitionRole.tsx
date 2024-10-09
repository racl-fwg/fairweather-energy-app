import React from 'react';
import Image from 'next/image';

const GlobalResponsibility: React.FC = () => {
  return (
    <section className="py-16 px-[50px] bg-[#FEFFEB]">
      {/* Horizontal Line */}
      <hr className="border-t-1 border-darkNature mb-12" />

      {/* White Container for the Section */}
      <div className="bg-white shadow-lg rounded-2xl px-[50px] py-12 mx-auto max-w-[1200px] mb-12 relative">
        {/* Content Wrapper with Text and Image */}
        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-stretch">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            {/* Main Title */}
            <h2 className="text-4xl text-[#003317] font-semibold">
              Vår Roll i Den Globala Omställningen
            </h2>
            {/* Paragraph Text */}
            <p className="text-sm text-black">
              Fairweather Energy arbetar för en hållbar framtid genom att göra energilagring tillgänglig för alla – från privatpersoner till stora industriaktörer. Vårt mål är att bidra till en värld där energi inte bara är förnybar, utan också tillförlitlig, ekonomiskt lönsam och långsiktigt hållbar. Vi tror på kraften i energiinnovationer som möjliggör en grönare och mer resilient energimarknad.
            </p>

            {/* Solutions Header and Text */}
            <div className="space-y-1">
              <h3 className="text-2xl text-[#003317] font-semibold">
                Våra Lösningar
              </h3>
              <p className="text-sm text-black">
                Våra lösningar stödjer Mål 7 (Hållbar energi för alla) och Mål 13 (Bekämpa klimatförändringarna) genom att erbjuda effektiva energilagringslösningar som minskar beroendet av fossila bränslen, stödjer frekvensreglering och bidrar till ökad energisjälvförsörjning.
              </p>
            </div>

            {/* Building Sustainable Communities Header and Text */}
            <div className="space-y-1">
              <h3 className="text-2xl text-[#003317] font-semibold">
                Att Bygga Hållbara Energisamhällen
              </h3>
              <p className="text-sm text-black">
                Fairweather Energy arbetar inte bara med tekniska lösningar – vi skapar hållbara energisamhällen. Genom våra projekt stödjer vi utvecklingen av lokala energinätverk och ser till att varje installation bidrar till att skapa starkare och mer resilient infrastruktur. Vi är engagerade i att stärka lokala samhällen och säkerställer att våra projekt skapar arbetstillfällen och lokalt engagemang, vilket bidrar till Mål 8 (Anständiga arbetsvillkor och ekonomisk tillväxt).
              </p>
            </div>
          </div>

          {/* Supporting Image */}
          <div className="flex-1 relative">
            <Image
              src="/images/sustainability/Fight_for_a_better_tomorrow.png"
              alt="Global Responsibility Image"
              width={680}
              height={680}
              className="object-contain rounded-2xl"
            />
            {/* Goal Icons at the Bottom Right Inside Container */}
            <div className="absolute right-6 bottom-6 flex space-x-2">
              <Image
                src="/images/sustainability/goal_7.png"
                alt="Goal 7"
                width={45}
                height={45}
                className="object-contain"
              />
              <Image
                src="/images/sustainability/goal_8.png"
                alt="Goal 8"
                width={45}
                height={45}
                className="object-contain"
              />
              <Image
                src="/images/sustainability/goal_13.png"
                alt="Goal 13"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
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
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-darkNature mt-12" />
    </section>
  );
};

export default GlobalResponsibility;
