import React from 'react';
import QuoteButton from '@/components/Buttons/QuoteButton'; // Import the QuoteButton component

const SajAbout: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-16 bg-lightNature text-center">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-nature mb-6">SAJ</h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-darkNature max-w-4xl mx-auto mb-8">
        SAJ är en ledande global leverantör av smarta energilösningar, specialiserade på utveckling och tillverkning av innovativa växelriktare och energilagringssystem för både hushåll och kommersiella tillämpningar. Med över två decennier av erfarenhet inom branschen strävar SAJ efter att erbjuda hållbara och effektiva lösningar som gör det möjligt för kunder att maximera användningen av förnybar energi.
      </p>

      {/* Quote Button */}
      <div className="mt-8">
        <QuoteButton invertColors={false} /> {/* Option to invert colors */}
      </div>
    </div>
  );
};

export default SajAbout;
