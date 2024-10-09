import React from 'react';
import Image from 'next/image';

const Benefits: React.FC = () => {
  return (
    <section className="py-16">
      {/* Top Line and Text Section */}
      <div className="px-4 lg:px-12 mx-auto max-w-[1200px]">
        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Left Header */}
          <div className="text-left mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkNature">
              Var beredd på fluktuerande ersättningar!
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="text-sm md:text-base lg:text-lg text-darkNature max-w-[600px]">
            Var beredd på att ersättningen från stödtjänstmarknaden är mycket volatil och kännetecknas av ständigt skiftande priser. Dessa prisvariationer påverkas av flera faktorer, som förändringar i elproduktionen från förnybara energikällor, nätets belastning samt efterfrågan på stödtjänsterna som frekvensreglering och spänningsstabilisering.
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative w-[calc(100%-32px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-100px)] mx-auto h-auto rounded-2xl overflow-hidden shadow-lg z-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/images/auxiliary-services/image-bg.png"
            alt="Benefits Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={100}
          />
        </div>

        {/* Content Section */}
        <div className="relative z-20 h-full flex flex-col justify-center items-start p-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 space-y-8 bg-transparent">
          {/* Header Text */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-energy font-bold leading-tight max-w-3xl">
            Stödtjänster är inte allt ditt batteri kan göra
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-white max-w-2xl">
            Var medveten om att batteriet har en otrolig potential att påverka energikostnader och skapa intäkter även utanför stödtjänstmarknaden.
          </p>

          {/* Benefits Points */}
          <div className="space-y-6 lg:space-y-8">
            {/* Benefit Point 1 */}
            <BenefitItem
              iconSrc="/images/auxiliary-services/cirkel_1.png"
              title="Lagra solel"
              description="Har du solceller kan ditt batteri lagra din överskottsel för att antingen använda den i hemmet, eller sälja den när efterfrågan är hög. Att lagra sin solel kommer att vara mycket mer lönsamt då skattereduktionen på 60 öre per såld kWh kommer att försvinna."
            />
            
            {/* Benefit Point 2 */}
            <BenefitItem
              iconSrc="/images/auxiliary-services/cirkel_2.png"
              title="Peakshaving"
              description="Fler städer inför nu energitariffer för att hantera elförbrukning och främja effektivare användning. Detta gör att priset på el kommer att påverkas mer av din belastning på nätet. Peakshaving innebär att ditt batteri hjälper till att kapa dessa toppar och därmed hålla ett lågt elpris."
            />

            {/* Benefit Point 3 */}
            <BenefitItem
              iconSrc="/images/auxiliary-services/cirkel_3.png"
              title="Energiarbitrage"
              description="Energiarbitrage innebär att köpa el när priserna är låga, lagra den, och sälja vid högre priser. Vinsten uppstår genom att utnyttja prisskillnader under dygnet, ofta med hjälp av batterier eller flexibla resurser. Den gröna linjen visar elpriserna under dygnet över 2023."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Component for Each Benefit Item */
const BenefitItem: React.FC<{ iconSrc: string; title: string; description: string }> = ({
  iconSrc,
  title,
  description,
}) => (
  <div className="flex items-start text-white">
    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 flex items-center justify-center mr-4 lg:mr-6">
      <Image src={iconSrc} alt={title} width={100} height={100} className="object-contain" />
    </div>
    <div>
      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-energy mb-2">{title}</h3>
      <p className="text-xs md:text-sm lg:text-base">{description}</p>
    </div>
  </div>
);

export default Benefits;
