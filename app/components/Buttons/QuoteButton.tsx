// app/components/QuoteButton/QuoteButton.tsx
import React, { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import QuoteForm from '../QuouteForm/QuoteForm';

const QuoteButton: React.FC = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  return (
    <>
      {/* Quote Button */}
      <button
        onClick={() => setQuoteFormOpen(true)}
        className="bg-nature text-energy py-2 px-6 rounded-full font-semibold hover:bg-energy hover:text-darkNature transition duration-300"
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
