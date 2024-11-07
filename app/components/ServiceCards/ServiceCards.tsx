"use client";
import React from 'react';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';
import QuoteButton from '@/components/Buttons/QuoteButton';
import { motion } from 'framer-motion';
import { textFadeIn } from '@/components/utils/animations';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';

export type Card = {
  imageSrc: string;      // Image path for the card
  title: string;         // Card title
  description: string;   // Card description
  buttonType: 'quote' | 'arrow';  // Determines which button to show
  buttonText?: string;   // Button text (optional for 'arrow' type)
  buttonHref?: string;   // Button URL (optional for 'arrow' type)
};

// Define props for the ServiceCards component
type ServiceCardsProps = {
  cards: Card[];
};

// Updated ServiceCards component
const ServiceCards: React.FC<ServiceCardsProps> = ({ cards }) => {
  return (
    <ContainerWrapper>
      <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mb-16" {...textFadeIn}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            {/* Card Image */}
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={320}
              height={180}
              className="rounded-t-lg object-cover"
            />
            {/* Card Title */}
            <h3 className="text-nature text-2xl font-semibold mt-6">
              {card.title}
            </h3>
            {/* Card Description */}
            <p className="text-darkNature text-base my-4">
              {card.description}
            </p>
            {/* Card Button */}
            <div className="mt-auto">
              {card.buttonType === 'quote' ? (
                <QuoteButton />
              ) : (
                <ArrowButton text={card.buttonText || ''} size="medium" href={card.buttonHref || ''} />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </ContainerWrapper>
  );
};

export default ServiceCards;
