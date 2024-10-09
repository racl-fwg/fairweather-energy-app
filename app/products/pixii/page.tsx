import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Ensure correct component import

const PixiiPageWrapper: React.FC = () => {
  return (
    <div className="mb-16">
      <HeroComponent
        header="Pixii"
        subHeader="Page coming soon!"
        imageSrc="/images/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"
        buttonText="Visit Pixii"
        buttonLink="https://www.pixii.com/"
      />
    </div>
  );
};

export default PixiiPageWrapper;
