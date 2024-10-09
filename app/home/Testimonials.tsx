"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Karin, Uppsala",
    testimonial: "Att uppgradera vårt gamla solsystem med ett nytt batteri var smidigt! Nu kan vi lagra energi och optimera förbrukningen bättre än någonsin.",
  },
  {
    name: "Lars, Västerås",
    testimonial: "Fairweather hjälpte oss integrera ett nytt batteri med våra äldre solpaneler. Nu får vi ut mer av varje soltimme!",
  },
  {
    name: "Anna, Stockholm",
    testimonial: "Batterisystemet har varit en perfekt lösning för att stabilisera vår energiförbrukning under toppar och delta i stödtjänster på elnätet.",
  },
  {
    name: "Fredrik, Örebro",
    testimonial: "Vårt batterisystem integrerat med Huaweis EMMA har verkligen gett oss bättre kontroll över energianvändningen. Smidigt och effektivt!",
  },
  {
    name: "Maria, Västerås",
    testimonial: "Hela paketet med solceller och batteri fungerar fantastiskt! Vi är självförsörjande och ser direkt hur vi sparar pengar varje månad.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the index of the last testimonial
  const lastIndex = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex - 1 : prevIndex - 1
    );
  };

  // Determine the 4 testimonials to display based on the current index
  const visibleTestimonials = [
    testimonials[currentIndex % lastIndex],
    testimonials[(currentIndex + 1) % lastIndex],
    testimonials[(currentIndex + 2) % lastIndex],
    testimonials[(currentIndex + 3) % lastIndex],
  ];

  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-16" />
              
        {/* Header Section - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Title */}
          <div>
            <h2 className="text-nature text-4xl font-bold">
              Hör vad våra kunder tycker om Fairweather Energy
            </h2>
          </div>
          {/* Description */}
          <div>
            <p className="text-darkNature text-base">
              Vi har hjälpt flera hemägare att optimera sina energilösningar. Här är några av deras upplevelser av våra batteri- och solcellssystem.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Map through visible testimonials */}
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center relative"
              >
                {/* Styled Quotation Marks */}
                <span className="absolute top-2 left-2 text-6xl text-nature font-bold opacity-80">
                  &ldquo;
                </span>
                <h3 className="text-nature text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-darkNature text-base mt-4 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>    
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-end mt-8">
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={prevSlide}
            >
              <span className="sr-only">Föregående</span>
              {/* Updated Left Arrow Icon */}
              <Image
                src="/icons/Arrow_in_circle_green.png"
                alt="Föregående"
                width={36}
                height={36}
                className="transform rotate-180"
              />
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={nextSlide}
            >
              <span className="sr-only">Nästa</span>
              {/* Updated Right Arrow Icon */}
              <Image
                src="/icons/Arrow_in_circle_green.png"
                alt="Nästa"
                width={36}
                height={36}
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
