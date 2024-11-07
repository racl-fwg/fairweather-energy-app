"use client";
import React, { useState } from 'react';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';
import { motion } from 'framer-motion';
import { textFadeIn } from '@/components/utils/animations';

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
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url('/images/products/huawei/scheme_f_3d.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <ContainerWrapper>
        {/* Header Section */}
        <motion.div className="text-center xl:text-left text-white mb-12" {...textFadeIn}>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e9ff66] mb-4">
            Har strömmen gått? Inga problem!
          </h2>
          <p className="text-base lg:text-lg max-w-4xl mx-auto xl:mx-0">
            Med Back Up Box har du som batteriägare möjlighet att använda din lagrade energi i hemmet under ett strömavbrott.
          </p>
        </motion.div>

        {/* Desktop View */}
        <motion.div
          className="hidden xl:flex justify-between items-start gap-6 text-white"
          {...textFadeIn}
        >
          {boxes.map((box, index) => (
            <div key={index} className="flex flex-col items-start w-1/4">
              <h3 className="text-xl font-bold text-[#e9ff66] mb-2">{box.title}</h3>
              <p className="text-base">{box.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Mobile/Tablet View */}
        <motion.div className="xl:hidden text-center text-white" {...textFadeIn}>
          <div className="flex flex-col items-center w-full px-4 py-4">
            <h3 className="text-xl font-bold text-[#e9ff66] mb-2">
              {boxes[currentIndex].title}
            </h3>
            <p className="text-base max-w-xl mx-auto">{boxes[currentIndex].content}</p>
          </div>
          <div className="flex justify-center mt-4">
            {boxes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-[#e9ff66]' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
};

export default PowerBackupSection;
