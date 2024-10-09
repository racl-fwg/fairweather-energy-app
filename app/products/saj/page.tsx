import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Ensure correct component import

const SajPageWrapper: React.FC = () => {
  return (
    <div className="mb-16">
      <HeroComponent
        header="SAJ"
        subHeader="Page coming soon!"
        imageSrc="/images/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg" // Use the same image as Pixii
        buttonText="Visit SAJ"
        buttonLink="https://www.saj.com/"
      />
    </div>
  );
};

export default SajPageWrapper;
