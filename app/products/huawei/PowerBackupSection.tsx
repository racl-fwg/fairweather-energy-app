import React from 'react';

const PowerBackupSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: `url('/images/products/huawei/scheme_f_3d.png')` }}>
      {/* Container for Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-20 xl:px-32 text-center text-white">

        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e9ff66] mb-4">
            Har strömmen gått? Inga problem!
          </h2>
          <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto">
            Med Back Up Box har du som batteriägare möjlighet att använda din lagrade energi i hemmet under ett strömavbrott.
          </p>
        </div>

        {/* Box Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 lg:gap-12">
          {/* Box 1 */}
          <div className="flex flex-col items-start md:items-center md:w-1/3 px-4 py-4 lg:py-6 text-left md:text-center shadow-none">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e9ff66]">Upptäckt av strömavbrott</h3>
            <p className="text-sm md:text-base">
              Backup Box övervakar kontinuerligt strömmen från nätet. När ett strömavbrott inträffar, upptäcker Backup Box felet omedelbart och påbörjar övergången till fristående läge.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex items-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 2 */}
          <div className="flex flex-col items-start md:items-center md:w-1/3 px-4 py-4 lg:py-6 text-left md:text-center shadow-none">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e9ff66]">Växling till fristående läge</h3>
            <p className="text-sm md:text-base">
              När ett strömavbrott upptäcks isolerar Backup Box ditt hem från nätet för att skydda nätarbetare och förser sedan kritiska kretsar med ström från batterierna.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 3 */}
          <div className="flex flex-col items-start md:items-center md:w-1/3 px-4 py-4 lg:py-6 text-left md:text-center shadow-none">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e9ff66]">Strömförsörjning under avbrott</h3>
            <p className="text-sm md:text-base">
              I fristående läge säkerställer Backup Box att ström fås från batterierna. Om ditt solcellsystem fortfarande producerar energi kan det ladda batterierna eller direkt förse ditt hem.
            </p>
          </div>

          {/* Arrow 3 */}
          <div className="hidden md:flex items-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 4 */}
          <div className="flex flex-col items-start md:items-center md:w-1/3 px-4 py-4 lg:py-6 text-left md:text-center shadow-none">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#e9ff66]">Återgång till nätanslutet läge</h3>
            <p className="text-sm md:text-base">
              När strömmen från nätet återställs, ansluter Backup Box automatiskt ditt system tillbaka till nätet. Systemet återgår till normal drift, och eventuell överskottsenergi kan matas tillbaka till nätet eller lagras i batterierna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerBackupSection;
