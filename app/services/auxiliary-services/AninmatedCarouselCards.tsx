"use client"; // Use client directive for client-side interactions

import React from 'react';
import { motion } from 'framer-motion';

const cardItems = [
  { label: 'Svenska kraftnät' },
  { label: 'Balansansvarig' },
  { label: 'Aggregator' },
  { label: 'Fairweather' },
  { label: 'Slutkund' },
];

const AnimatedCarouselCards: React.FC = () => {
  // Set a slower animation duration for smoother movement
  const animationDuration = 30;

  // Determine the width for all cards based on the widest label
  const cardWidth = '220px'; // Manually set to the widest expected size (adjust as needed)

  return (
    <div className="overflow-hidden relative w-full mb-16">
      {/* Motion Container for Carousel Animation */}
      <motion.div
        className="flex justify-start items-center"
        initial={{ x: 0 }} // Initial position
        animate={{ x: ['-1200px', '0px'] }} // Shift cards in a circular pattern
        transition={{
          duration: animationDuration,
          repeat: Infinity, // Repeat the animation infinitely
          ease: 'linear',
        }}
      >
        {/* Render Each Card with Arrow */}
        {cardItems.concat(cardItems).map((item, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div
              className={`bg-darkNature text-energy text-lg font-semibold rounded-xl py-6 px-8 flex justify-center items-center shadow-md mx-4`}
              style={{ minWidth: cardWidth }} // Set consistent card width
            >
              {item.label}
            </div>
            {/* Arrow (display only between items) */}
            {index < cardItems.length * 2 - 1 && (
              <div className="text-3xl text-darkNature">→</div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCarouselCards;
