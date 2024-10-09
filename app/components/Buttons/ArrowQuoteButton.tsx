import React, { useState } from 'react';
import Image from 'next/image';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import QuoteForm from '../QuouteForm/QuoteForm';

const ArrowQuoteButton: React.FC = () => {
  // State to manage the visibility of the Quote Form Modal
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  // Function to handle modal open/close
  const toggleModal = () => setQuoteFormOpen(!quoteFormOpen);

  return (
    <>
      {/* Arrow Button Styled Quote Button */}
      <button
        onClick={toggleModal}
        className="bg-energy text-darkNature rounded-full flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:bg-energy hover:text-darkNature hover:shadow-lg hover:scale-105 py-2 px-5 text-base"
      >
        <span>Få en fri offert</span>
        {/* Arrow icon next to text */}
        <Image src="/icons/Arrow_diagonal.png" alt="Arrow" width={28} height={28} />
      </button>

      {/* Modal Wrapper for Quote Form */}
      {quoteFormOpen && (
        <ModalWrapper onClose={toggleModal}>
          <QuoteForm onClose={toggleModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default ArrowQuoteButton;
