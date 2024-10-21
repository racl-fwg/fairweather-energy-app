import React from 'react';
import QuoteButton from '@/components/Buttons/QuoteButton'; // Import the QuoteButton component

const EmaldoAbout: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-16 bg-lightNature text-center">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-nature mb-6">Emaldo Power Core</h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8">
        Emaldo Power Core är en allt-i-ett-lösning som förenklar hemmets strömhantering. Med en högpresterande växelriktare, utbyggbara batteriboxar och integrerad Bluetooth® och Wi-Fi-anslutning, levererar systemet optimal prestanda. Dessutom inkluderar det en dedikerad typ 2-laddare för elbilar – allt i ett snyggt och kompakt skåp. Emaldo Power Core erbjuder den perfekta balansen mellan funktionalitet och flexibilitet för dagens moderna hem.
      </p>

      {/* Quote Button */}
      <div className="mt-8">
        <QuoteButton invertColors={false} /> {/* Option to invert colors */}
      </div>
    </div>
  );
};

export default EmaldoAbout;
