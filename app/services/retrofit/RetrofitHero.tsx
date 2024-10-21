"use client";
import React from 'react';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton'; // Importing the ArrowButton component

const RetrofitHero: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 mt-20 pt-16 pb-12 lg:pb-20 flex flex-col lg:flex-row justify-between items-center bg-lightNature">
      {/* Left Section: Header and Text */}
      <div className="flex flex-col lg:w-1/2 space-y-6 lg:space-y-8 text-left">
        <h1 className="text-3xl lg:text-5xl font-bold text-nature">Ge dina solceller ny kraft med batterilagring!</h1>
        <p className="text-base text-darkNature">
          Har du redan installerat solceller och funderar nu på att lägga till batterilagring? Vi är här för att hjälpa dig att hitta den bästa lösningen för just ditt system. Oavsett om din växelriktare behöver bytas ut eller om vi kan integrera ett batteri kompatibelt med ditt befintliga system, ser vi till att du får en optimal lösning.
        </p>
        <p className="text-base text-darkNature">
          Med vår expertis skräddarsyr vi en batterilösning som passar dina specifika behov och förutsättningar, så att du kan lagra din överskottsenergi och minska ditt beroende av elnätet. Tillsammans ser vi till att du får ut maximalt av din investering i solenergi.
        </p>

        {/* Arrow Button with constrained width */}
        <div className="mt-4 max-w-fit"> {/* Added max-w-fit to limit button width */}
          <ArrowButton size="large" href="/kontakt">
            Kontakta oss
          </ArrowButton>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="mt-8 lg:mt-8 lg:w-2/3 flex justify-center">
        <Image
          src="/images/retrofit/House_on_platform_with_dropshadow.png"
          alt="House with solar panels"
          width={900}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default RetrofitHero;
