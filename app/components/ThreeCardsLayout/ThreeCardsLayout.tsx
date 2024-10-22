"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation, headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

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
      {/* Section Header and Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
        {/* Section Title */}
        <motion.div className="md:col-span-1" {...headerTextFadeIn}>
          <h2 className="text-3xl xl:text-4xl font-semibold mb-4">{sectionTitle}</h2>
        </motion.div>
        {/* Section Description */}
        <motion.div className="text-lg md:col-start-2 md:col-span-2" {...defaultTextFadeIn}>
          <p>{sectionDescription}</p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white shadow-lg rounded-3xl relative"
            {...cardAnimation(0.2 + index * 0.2)} // Staggered animation for each card
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardsLayout;
