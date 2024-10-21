"use client";
import React, { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import QuoteForm from '../QuouteForm/QuoteForm';

interface QuoteButtonProps {
  invertColors?: boolean; // Optional prop to enable color inversion
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ invertColors = false }) => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  return (
    <>
      {/* Quote Button */}
      <button
        onClick={() => setQuoteFormOpen(true)}
        className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${
          invertColors
            ? 'bg-energy text-darkNature hover:bg-darkNature hover:text-energy'
            : 'bg-nature text-energy hover:bg-energy hover:text-darkNature'
        }`}
      >
        Begär offert
      </button>

      {/* Modal Wrapper for Quote Form */}
      {quoteFormOpen && (
        <ModalWrapper onClose={() => setQuoteFormOpen(false)}>
          <QuoteForm onClose={() => setQuoteFormOpen(false)} />
        </ModalWrapper>
      )}
    </>
  );
};

export default QuoteButton;
