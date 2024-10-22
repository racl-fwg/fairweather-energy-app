"use client";
import React, { useState } from 'react';

const PowerBackupSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxes = [
    {
      title: 'Upptäckt av strömavbrott',
      content: 'Backup Box övervakar kontinuerligt strömmen från nätet. När ett strömavbrott inträffar, upptäcker Backup Box felet omedelbart och påbörjar övergången till fristående läge.',
    },
    {
      title: 'Växling till fristående läge',
      content: 'När ett strömavbrott upptäcks isolerar Backup Box ditt hem från nätet för att skydda nätarbetare och förser sedan kritiska kretsar med ström från batterierna.',
    },
    {
      title: 'Strömförsörjning under avbrott',
      content: 'I fristående läge säkerställer Backup Box att ström fås från batterierna. Om ditt solcellsystem fortfarande producerar energi kan det ladda batterierna eller direkt förse ditt hem.',
    },
    {
      title: 'Återgång till nätanslutet läge',
      content: 'När strömmen från nätet återställs, ansluter Backup Box automatiskt ditt system tillbaka till nätet. Systemet återgår till normal drift, och eventuell överskottsenergi kan matas tillbaka till nätet eller lagras i batterierna.',
    },
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: `url('/images/products/huawei/scheme_f_3d.png')` }}>
      {/* Container for Content */}
      <div className="relative z-10 container mx-auto px-2 lg:px-4 xl:px-6 text-white">
        {/* Header Section */}
        <div className="mb-8 xl:text-left text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e9ff66] mb-2">
            Har strömmen gått? Inga problem!
          </h2>
          <p className="text-base lg:text-lg max-w-4xl mx-auto xl:mx-0 w-4/5 lg:w-3/5">
            Med Back Up Box har du som batteriägare möjlighet att använda din lagrade energi i hemmet under ett strömavbrott.
          </p>
        </div>

        {/* Box Section for Viewports > 1280px */}
        <div className="hidden xl:flex flex-col xl:flex-row justify-center items-start gap-4 lg:gap-6">
          {/* Box 1 */}
          <div className="flex flex-col items-start w-full xl:w-1/4 px-2 py-2 lg:py-4">
            <h3 className="text-2xl font-bold mb-1 text-[#e9ff66]">Upptäckt av strömavbrott</h3>
            <p className="text-base lg:text-lg">{boxes[0].content}</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden xl:flex items-center justify-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 2 */}
          <div className="flex flex-col items-start w-full xl:w-1/4 px-2 py-2 lg:py-4">
            <h3 className="text-xl font-bold mb-1 text-[#e9ff66]">Växling till fristående läge</h3>
            <p className="text-base">{boxes[1].content}</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden xl:flex items-center justify-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 3 */}
          <div className="flex flex-col items-start w-full xl:w-1/4 px-2 py-2 lg:py-4">
            <h3 className="text-xl font-bold mb-1 text-[#e9ff66]">Strömförsörjning under avbrott</h3>
            <p className="text-base">{boxes[2].content}</p>
          </div>

          {/* Arrow 3 */}
          <div className="hidden xl:flex items-center justify-center text-3xl lg:text-4xl text-[#e9ff66]">→</div>

          {/* Box 4 */}
          <div className="flex flex-col items-start w-full xl:w-1/4 px-2 py-2 lg:py-4">
            <h3 className="text-xl font-bold mb-1 text-[#e9ff66]">Återgång till nätanslutet läge</h3>
            <p className="text-base">{boxes[3].content}</p>
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="xl:hidden">
          <div className="flex flex-col items-center w-full px-2 py-2 lg:py-4 text-center max-w-2/3 mx-auto">
            <h3 className="text-xl font-bold mb-1 text-[#e9ff66]">{boxes[currentIndex].title}</h3>
            <p className="text-base max-w-xl mx-auto">{boxes[currentIndex].content}</p>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-4">
            {boxes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-[#e9ff66]' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerBackupSection;
