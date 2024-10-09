import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Ensure correct component import

const EmaldoPageWrapper: React.FC = () => {
  return (
    <div className="mb-16">
      <HeroComponent
        header="Emaldo"
        subHeader="Page coming soon!"
        imageSrc="/images/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg" // Use the same image as Pixii
        buttonText="Visit Emaldo"
        buttonLink="https://www.emaldo.com/"
      />
    </div>
  );
};

export default EmaldoPageWrapper;
