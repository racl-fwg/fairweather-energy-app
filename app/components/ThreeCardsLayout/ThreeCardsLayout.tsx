"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation } from '@/components/utils/animations';

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
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-semibold mb-4">{sectionTitle}</h2>
        </motion.div>
        <motion.div
          className="text-lg md:col-start-2 md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <p>{sectionDescription}</p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white shadow-md rounded-xl relative hover:scale-105 transition-transform duration-300"
            {...cardAnimation(0.2 + index * 0.2)} // Staggered animation
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
