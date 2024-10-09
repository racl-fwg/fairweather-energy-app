import React from 'react';
import HeroComponent from '@/components/Hero/HeroInContainerProp'; // Ensure correct component import

const ServicesPageWrapper: React.FC = () => {
  return (
    <div className="mb-16">
      <HeroComponent
        header="Services"
        subHeader="Page coming soon!"
        imageSrc="/images/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg" // Use the same image as Pixii
        buttonText="Learn More"
        buttonLink="/"
      />
    </div>
  );
};

export default ServicesPageWrapper;
