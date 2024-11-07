"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { textFadeIn } from '@/components/utils/animations';
import ContainerWrapper from '../Wrapper/ContainerWrapper';

type CardProps = {
  iconSrc: string;
  title: string;
  description: string[];
};

type ThreeCardsLayoutProps = {
  sectionTitle: string;
  sectionDescription: string;
  cards: CardProps[];
};

const ThreeCardsLayout: React.FC<ThreeCardsLayoutProps> = ({
  sectionTitle,
  sectionDescription,
  cards,
}) => {
  return (
    <div className="mb-12 text-darkNature">
      <ContainerWrapper>
        {/* Section Header and Description */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start" {...textFadeIn}>
          {/* Section Title */}
          <div className="md:col-span-1">
            <h2 className="text-3xl xl:text-4xl font-semibold mb-4">{sectionTitle}</h2>
          </div>
          {/* Section Description */}
          <div className="text-lg md:col-start-2 md:col-span-2">
            <p>{sectionDescription}</p>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12" {...textFadeIn}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-3xl relative transform transition-transform hover:scale-105"
            >
              <img
                src={card.iconSrc}
                alt={card.title}
                className="absolute top-6 left-6 h-12"
              />
              <h3 className="text-xl font-bold text-darkNature mb-4 mt-4 ml-20">
                {card.title}
              </h3>
              <ul className="list-disc list-inside text-darkNature space-y-2">
                {card.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </ContainerWrapper>
    </div>
  );
};

export default ThreeCardsLayout;
